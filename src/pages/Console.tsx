import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { Checkbox } from "@/ui/components/Checkbox";
import { EmptyState } from "@/ui/components/EmptyState";
import { IconButton } from "@/ui/components/IconButton";
import { LogEntry } from "@/ui/components/LogEntry";
import { PageShell } from "@/ui/components/PageShell";
import { PrimaryButton } from "@/ui/components/PrimaryButton";
import { SegmentedControl } from "@/ui/components/SegmentedControl";
import { SelectField } from "@/ui/components/SelectField";
import { StatusPill } from "@/ui/components/StatusPill";
import { TabBar } from "@/ui/components/TabBar";
import OutlineContentCopy from "@/ui/icons/OutlineContentCopy";
import RoundAdd from "@/ui/icons/RoundAdd";
import RoundDelete from "@/ui/icons/RoundDelete";
import RoundDownload from "@/ui/icons/RoundDownload";
import RoundPlayArrow from "@/ui/icons/RoundPlayArrow";
import RoundSearch from "@/ui/icons/RoundSearch";
import RoundSend from "@/ui/icons/RoundSend";
import RoundTerminal from "@/ui/icons/RoundTerminal";
import { ConnectedHeader } from "../components/ConnectedHeader";
import { ServerGate } from "../components/PageStates";
import { usePrompt } from "../components/PromptDialog";
import { useAgent } from "../lib/AgentContext";
import { errorMessage } from "../lib/agent";
import type { ConsoleLine } from "../lib/ConsoleContext";
import { copyText, downloadText } from "../lib/external";
import { useHostStats, useSelectedServer } from "../lib/hooks";
import { formatClock, formatGB } from "../lib/minecraft";
import { notify } from "../lib/notify";
import { readPref, writePref } from "../lib/prefs";
import type { PageProps } from "./types";

type Filter = "all" | "info" | "warn" | "error";

// Buttons under the command box. A trailing "…" means "fill in the rest".
const QUICK_COMMANDS = ["save-all", "list", "time set day", "weather clear", "say …", "whitelist add …"];

const HISTORY_KEY = "tinker.console.history";
const CUSTOM_KEY = "tinker.console.quickCommands";
const DETAILED_KEY = "tinker.console.detailedTimestamps";

function timestampFor(line: ConsoleLine, detailed: boolean): string | undefined {
  if (detailed) return `[${formatClock(line.at, true)}]`;
  if (line.time) return `[${line.time}]`;
  if (line.source) return `[${formatClock(line.at)}]`;
  return undefined; // stack-trace lines: no timestamp, like the real log
}

function Console({ onNavigate }: PageProps) {
  const { startServer, pending } = useAgent();
  const { server, status, console: live } = useSelectedServer();
  const stats = useHostStats();
  const [prompt, ask] = usePrompt();

  const [filter, setFilter] = useState<Filter>("all");
  const [detailed, setDetailed] = useState(() => readPref(DETAILED_KEY, false));
  const [query, setQuery] = useState("");
  const [command, setCommand] = useState("");
  const [history, setHistory] = useState<string[]>(() => readPref<string[]>(HISTORY_KEY, []));
  const [historyIndex, setHistoryIndex] = useState<number | null>(null);
  const [custom, setCustom] = useState<string[]>(() => readPref<string[]>(CUSTOM_KEY, []));
  const [atBottom, setAtBottom] = useState(true);
  const logRef = useRef<HTMLDivElement>(null);
  const commandRef = useRef<HTMLInputElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);

  const running = server?.running ?? false;
  const online = Object.values(live.state.players).filter((p) => p.online).length;
  const q = query.trim().toLowerCase();

  const visible = useMemo(
    () =>
      live.lines.filter(
        (line) =>
          line.id > live.clearedBefore &&
          (filter === "all" || line.level === filter) &&
          (!q || line.raw.toLowerCase().includes(q)),
      ),
    [live.lines, live.clearedBefore, filter, q],
  );

  // Stay pinned to the newest line unless the user scrolled up.
  useLayoutEffect(() => {
    const el = logRef.current;
    if (el && atBottom) el.scrollTop = el.scrollHeight;
  }, [visible, atBottom]);

  // Ctrl+F / Cmd+F jumps to "Find in logs".
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "f") {
        event.preventDefault();
        searchRef.current?.focus();
        searchRef.current?.select();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  function jumpToLatest() {
    const el = logRef.current;
    if (el) el.scrollTop = el.scrollHeight;
    setAtBottom(true);
  }

  async function submit(text: string) {
    const cmd = text.trim().replace(/^\//, "");
    if (!cmd) return;
    if (!running) {
      notify.error("The server isn't running", "Start it first, then send commands.");
      return;
    }
    setHistory((old) => {
      const next = [...old.filter((c) => c !== cmd), cmd].slice(-50);
      writePref(HISTORY_KEY, next);
      return next;
    });
    setHistoryIndex(null);
    setCommand("");
    jumpToLatest();
    try {
      await live.send(cmd);
    } catch (err) {
      notify.error("Command not sent", errorMessage(err));
    }
  }

  function runQuick(item: string) {
    if (item.endsWith("…")) {
      setCommand(item.slice(0, -1));
      commandRef.current?.focus();
    } else {
      void submit(item);
    }
  }

  function addQuickCommand() {
    ask({
      title: "Add a quick command",
      description: "It's saved on this computer and shows up next to the others. Right-click it to remove it.",
      icon: <RoundTerminal />,
      confirmText: "Add",
      confirmIcon: <RoundAdd />,
      input: {
        title: "Command",
        placeholder: "e.g. gamerule keepInventory true",
        required: true,
        helper: "End it with … to fill the box instead of sending right away.",
      },
      onConfirm: (value) => {
        const cmd = value.replace(/^\//, "");
        setCustom((old) => {
          const next = [...old.filter((c) => c !== cmd), cmd];
          writePref(CUSTOM_KEY, next);
          return next;
        });
      },
    });
  }

  function removeQuickCommand(cmd: string) {
    setCustom((old) => {
      const next = old.filter((c) => c !== cmd);
      writePref(CUSTOM_KEY, next);
      return next;
    });
  }

  async function copyLog() {
    try {
      await copyText(visible.map((l) => l.raw).join("\n"));
      notify.success(`Copied ${visible.length} line${visible.length === 1 ? "" : "s"}`);
    } catch (err) {
      notify.error("Couldn't copy", errorMessage(err));
    }
  }

  function downloadLog() {
    if (!server) return;
    const stamp = formatClock(Date.now(), true).replace(/[: ]/g, "-");
    downloadText(`${server.id}-console-${stamp}.txt`, visible.map((l) => l.raw).join("\n"));
  }

  const statBox = "flex flex-col items-start gap-1 self-stretch rounded-xl border border-solid border-[#1f242b] bg-[#12151a] px-4 py-3";
  const statLabel = "font-['Inter'] text-[12px] font-[500] leading-[16px] text-[#7a828e]";
  const statValue = "font-['Inter'] text-[20px] font-[700] leading-[28px] text-[#ffffff]";
  const quickCommands = [...QUICK_COMMANDS, ...custom];

  return (
    <div className="flex w-full flex-col items-start bg-[#0b0d10] min-h-full font-['Inter']">
      <PageShell
        header={<ConnectedHeader />}
        tabs={<TabBar selected="console" onNavigate={onNavigate} />}
        title="Console"
        subtitle={server ? `Live server output and commands for ${server.name}.` : "Live server output and commands."}
        actions={server ? <StatusPill variant={status.variant} label={status.label} /> : undefined}
      >
        <ServerGate>
          {server && (
            <>
              <div className="w-full items-start gap-3 grid grid-cols-4 mobile:grid mobile:grid-cols-2">
                <div className={statBox} title="Needs an Agent update">
                  <span className={statLabel}>TPS</span>
                  <span className="font-['Inter'] text-[20px] font-[700] leading-[28px] text-[#7a828e]">—</span>
                </div>
                <div className={statBox} title="The whole server PC">
                  <span className={statLabel}>Host CPU</span>
                  <span className={statValue}>{stats ? `${Math.round(stats.cpuPercent)}%` : "—"}</span>
                </div>
                <div className={statBox} title="The whole server PC">
                  <span className={statLabel}>Host memory</span>
                  <span className={statValue}>
                    {stats ? `${formatGB(stats.memUsedBytes)} / ${formatGB(stats.memTotalBytes)} GB` : "—"}
                  </span>
                </div>
                <div className={statBox}>
                  <span className={statLabel}>Players</span>
                  <span className={statValue}>{running ? `${online} / ${live.state.maxPlayers ?? "?"}` : "—"}</span>
                </div>
              </div>
              <div className="flex w-full flex-wrap items-center gap-3">
                <SelectField
                  className="h-auto w-48 flex-none mobile:grow mobile:shrink-0 mobile:basis-0"
                  label=""
                  placeholder="Live console"
                  helperText=""
                  disabled={true}
                />
                <SegmentedControl>
                  {(["all", "info", "warn", "error"] as const).map((f) => (
                    <SegmentedControl.Item
                      key={f}
                      label={f === "all" ? "All" : f === "info" ? "Info" : f === "warn" ? "Warn" : "Error"}
                      selected={filter === f}
                      onClick={() => setFilter(f)}
                    />
                  ))}
                </SegmentedControl>
                <div
                  className="flex cursor-pointer items-center gap-1.5"
                  onClick={() =>
                    setDetailed((on) => {
                      writePref(DETAILED_KEY, !on);
                      return !on;
                    })
                  }
                >
                  <Checkbox checked={detailed} />
                  <span className="font-['Inter'] text-[13px] font-[400] leading-[20px] text-[#aeb4bd] select-none">
                    Detailed timestamps
                  </span>
                </div>
                <div className="flex grow shrink-0 basis-0 items-center justify-end gap-2 mobile:justify-start">
                  <div className="flex h-8 w-56 flex-none items-center gap-2 rounded-[8px] border border-solid border-[#2a3038] bg-[#0b0d10] px-2.5 focus-within:border-[#22c55e]">
                    <RoundSearch className="font-['Inter'] text-[16px] font-[400] leading-[20px] text-[#7a828e]" />
                    <input
                      ref={searchRef}
                      className="min-w-0 grow shrink-0 basis-0 self-stretch bg-transparent font-['Inter'] text-[13px] font-[400] leading-[18px] text-[#e5e7eb] outline-none placeholder:text-[#5b636e]"
                      placeholder="Find in logs"
                      value={query}
                      type="text"
                      onChange={(event) => setQuery(event.target.value)}
                      onKeyDown={(event) => {
                        if (event.key === "Escape") setQuery("");
                      }}
                    />
                  </div>
                  <IconButton
                    className="h-8 w-8 flex-none cursor-pointer"
                    title="Download log"
                    icon={<RoundDownload />}
                    color="gray"
                    onClick={downloadLog}
                  />
                  <IconButton
                    className="h-8 w-8 flex-none cursor-pointer"
                    title="Copy log"
                    icon={<OutlineContentCopy />}
                    color="gray"
                    onClick={() => void copyLog()}
                  />
                  <IconButton
                    className="h-8 w-8 flex-none cursor-pointer"
                    title="Clear console (doesn't delete log files)"
                    icon={<RoundDelete />}
                    color="gray-dangerous"
                    onClick={live.clear}
                  />
                </div>
              </div>
              <div className="relative w-full rounded-xl border border-solid border-[#1f242b] bg-[#07090b]">
                <div
                  ref={logRef}
                  className="flex h-[min(60vh,640px)] min-h-[440px] w-full flex-col items-start gap-0.5 overflow-auto px-3 py-3"
                  onScroll={(event) => {
                    const el = event.currentTarget;
                    setAtBottom(el.scrollHeight - el.scrollTop - el.clientHeight < 24);
                  }}
                >
                  {visible.length > 0 ? (
                    visible.map((line) => (
                      <LogEntry
                        key={line.id}
                        className={line.local ? "bg-[#22c55e0d]" : undefined}
                        type={line.level}
                        timestamp={timestampFor(line, detailed)}
                        source={line.source ?? undefined}
                        message={line.message || " "}
                      />
                    ))
                  ) : !running && live.lines.length === 0 ? (
                    <EmptyState
                      className="my-auto"
                      variant="disconnected"
                      icon={<RoundTerminal />}
                      title={`${server.name} is stopped`}
                      description="Start it to see its live output here."
                      actions={
                        <PrimaryButton
                          icon={<RoundPlayArrow />}
                          text={pending[server.id] === "starting" ? "Starting…" : "Start server"}
                          disabled={pending[server.id] !== undefined}
                          onClick={() => {
                            if (pending[server.id] === undefined) void startServer(server.id);
                          }}
                        />
                      }
                    />
                  ) : (
                    <EmptyState
                      className="my-auto"
                      variant="disconnected"
                      icon={<RoundSearch />}
                      title={live.lines.length === 0 ? "Waiting for output…" : "No lines to show"}
                      description={
                        live.lines.length === 0
                          ? "New lines appear here as soon as the server prints them."
                          : q || filter !== "all"
                            ? "Nothing matches your filter or search."
                            : "You cleared the console. New lines will show up here."
                      }
                    />
                  )}
                </div>
                {!atBottom && visible.length > 0 ? (
                  <div
                    className="flex cursor-pointer items-center gap-1.5 rounded-[9999px] border border-solid border-[#22c55e80] bg-[#0f2418] px-3 py-1.5 shadow-[0px_8px_24px_0px_#00000080] absolute bottom-3 right-3 hover:bg-[#123321]"
                    onClick={jumpToLatest}
                  >
                    <RoundDownload className="font-['Inter'] text-[14px] font-[400] leading-[16px] text-[#86efac]" />
                    <span className="font-['Inter'] text-[12px] font-[600] leading-[16px] text-[#86efac]">Jump to latest</span>
                  </div>
                ) : null}
              </div>
              <div className="flex w-full flex-col items-start gap-3">
                <div className="flex w-full items-center gap-2">
                  <div className="flex h-10 grow shrink-0 basis-0 items-center gap-2 rounded-[8px] border border-solid border-[#2a3038] bg-[#07090b] px-3 focus-within:border-[#22c55e]">
                    <span className="font-['Obel_Mono_Italic'] text-[14px] font-[700] leading-[20px] text-[#22c55e]">&gt;</span>
                    <input
                      ref={commandRef}
                      className="min-w-0 grow shrink-0 basis-0 self-stretch bg-transparent font-['Obel_Mono'] text-[13px] font-[400] leading-[20px] text-[#e5e7eb] outline-none placeholder:text-[#5b636e]"
                      placeholder={running ? "Type a command, e.g. say Hello everyone" : "Start the server to send commands"}
                      value={command}
                      type="text"
                      spellCheck={false}
                      autoComplete="off"
                      onChange={(event) => {
                        setCommand(event.target.value);
                        setHistoryIndex(null);
                      }}
                      onKeyDown={(event) => {
                        if (event.key === "Enter") {
                          event.preventDefault();
                          void submit(event.currentTarget.value);
                        } else if (event.key === "ArrowUp" && history.length > 0) {
                          event.preventDefault();
                          const index = historyIndex === null ? history.length - 1 : Math.max(0, historyIndex - 1);
                          setHistoryIndex(index);
                          setCommand(history[index]);
                        } else if (event.key === "ArrowDown" && historyIndex !== null) {
                          event.preventDefault();
                          const index = historyIndex + 1;
                          if (index >= history.length) {
                            setHistoryIndex(null);
                            setCommand("");
                          } else {
                            setHistoryIndex(index);
                            setCommand(history[index]);
                          }
                        }
                      }}
                    />
                    <span className="font-['Inter'] text-[11px] font-[500] leading-[16px] text-[#5b636e] mobile:hidden">↑ history</span>
                  </div>
                  <PrimaryButton
                    className="h-10 w-auto flex-none"
                    icon={<RoundSend />}
                    text="Send"
                    disabled={!running || !command.trim()}
                    onClick={() => void submit(command)}
                  />
                </div>
                <div className="flex w-full flex-wrap items-center gap-2">
                  <span className="font-['Inter'] text-[12px] font-[600] leading-[16px] text-[#7a828e]">Quick commands</span>
                  {quickCommands.map((item, index) => {
                    const isCustom = index >= QUICK_COMMANDS.length;
                    return (
                      <PrimaryButton
                        key={`${isCustom ? "custom" : "built-in"}:${item}`}
                        icon={null}
                        text={item}
                        color="gray"
                        size="sm"
                        disabled={!running && !item.endsWith("…")}
                        title={isCustom ? "Right-click to remove" : undefined}
                        onClick={() => runQuick(item)}
                        onContextMenu={(event) => {
                          if (!isCustom) return;
                          event.preventDefault();
                          removeQuickCommand(item);
                        }}
                      />
                    );
                  })}
                  <PrimaryButton icon={<RoundAdd />} text="Add" color="gray-transparent" size="sm" onClick={addQuickCommand} />
                </div>
              </div>
            </>
          )}
        </ServerGate>
      </PageShell>
      {prompt}
    </div>
  );
}

export default Console;
