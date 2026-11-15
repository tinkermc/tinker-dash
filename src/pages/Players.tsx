import { useEffect, useMemo, useRef, useState } from "react";
import { Banner } from "@/ui/components/Banner";
import { EmptyState } from "@/ui/components/EmptyState";
import { FilterChip } from "@/ui/components/FilterChip";
import { McUsernameField } from "@/ui/components/McUsernameField";
import { PageShell } from "@/ui/components/PageShell";
import { PlayerProfileHeader } from "@/ui/components/PlayerProfileHeader";
import { PlayerStatusCard } from "@/ui/components/PlayerStatusCard";
import { PrimaryButton } from "@/ui/components/PrimaryButton";
import { SectionCard } from "@/ui/components/SectionCard";
import { SettingRow } from "@/ui/components/SettingRow";
import { StatCard } from "@/ui/components/StatCard";
import { Switch } from "@/ui/components/Switch";
import { TabBar } from "@/ui/components/TabBar";
import { TimeoutButton } from "@/ui/components/TimeoutButton";
import Hammer from "@/ui/icons/Hammer";
import RoundCalendarMonth from "@/ui/icons/RoundCalendarMonth";
import RoundDelete from "@/ui/icons/RoundDelete";
import RoundLogOut from "@/ui/icons/RoundLogOut";
import RoundPeople from "@/ui/icons/RoundPeople";
import RoundPersonAddAlt1 from "@/ui/icons/RoundPersonAddAlt1";
import RoundPinDrop from "@/ui/icons/RoundPinDrop";
import RoundRefresh from "@/ui/icons/RoundRefresh";
import RoundSearch from "@/ui/icons/RoundSearch";
import RoundTimer from "@/ui/icons/RoundTimer";
import SkullBold from "@/ui/icons/SkullBold";
import { ConnectedHeader } from "../components/ConnectedHeader";
import { inputClass, previewClass, textareaClass } from "../components/fields";
import { ShellDialog } from "../components/Modal";
import { ServerGate, SoonBadge } from "../components/PageStates";
import { usePrompt } from "../components/PromptDialog";
import { useAgent } from "../lib/AgentContext";
import { agentId, errorMessage } from "../lib/agent";
import { useDebounced, useHeads } from "../lib/heads";
import { useNow, useSelectedServer } from "../lib/hooks";
import {
  formatDuration,
  formatWhen,
  isValidPlayerName,
  RX,
  timeAgo,
  type ActivityKind,
  type PlayerInfo,
} from "../lib/minecraft";
import { notify } from "../lib/notify";
import { readPref, writePref } from "../lib/prefs";
import type { PageProps } from "./types";

type Filter = "all" | "online" | "offline" | "banned";

const NOT_YET = "Needs an Agent update";

const activityDot: Record<ActivityKind, string> = {
  join: "bg-[#22c55e]",
  leave: "bg-[#7a828e]",
  advancement: "bg-[#a855f7]",
  death: "bg-[#ef4444]",
  kick: "bg-[#f59e0b]",
  ban: "bg-[#ef4444]",
  unban: "bg-[#22c55e]",
  op: "bg-[#3b9eff]",
  deop: "bg-[#3b9eff]",
  whitelist: "bg-[#3b9eff]",
};

function statusOf(p: PlayerInfo): "online" | "offline" | "banned" {
  if (p.banned) return "banned";
  return p.online ? "online" : "offline";
}

function Players({ onNavigate }: PageProps) {
  const { connection } = useAgent();
  const { server, console: live } = useSelectedServer();
  const now = useNow(15_000);
  const head = useHeads();
  const [prompt, ask] = usePrompt();
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<Filter>("all");
  const [selectedName, setSelectedName] = useState<string | null>(null);
  const [whitelistOpen, setWhitelistOpen] = useState(false);

  const running = server?.running ?? false;
  const starting = live.state.started && !live.state.ready;
  const { ask: askServer, settled, patchPlayer } = live;
  const { whitelistKnown, bansKnown } = live.state;

  // Read the whitelist and ban list from the server once it's up.
  const probedFor = useRef<string | null>(null);
  useEffect(() => {
    if (!server || !running || !settled || starting) return;
    if (probedFor.current === server.id) return;
    probedFor.current = server.id;
    if (!whitelistKnown) {
      askServer("whitelist list", { match: (m) => RX.whitelistList.test(m) || RX.whitelistNone.test(m) }).catch(() => {});
    }
    if (!bansKnown) {
      askServer("banlist players", {
        match: (m) => RX.banHeader.test(m) || RX.banNone.test(m),
        more: (m) => RX.banEntry.test(m),
      }).catch(() => {});
    }
  }, [server, running, settled, starting, whitelistKnown, bansKnown, askServer]);

  const all = useMemo(() => Object.values(live.state.players), [live.state.players]);
  const counts = {
    all: all.length,
    online: all.filter((p) => p.online).length,
    offline: all.filter((p) => !p.online && !p.banned).length,
    banned: all.filter((p) => p.banned).length,
  };
  const q = query.trim().toLowerCase();
  const shown = all
    .filter((p) => filter === "all" || statusOf(p) === filter)
    .filter((p) => !q || p.name.toLowerCase().includes(q) || (p.uuid ?? "").toLowerCase().includes(q))
    .sort((a, b) => Number(b.online) - Number(a.online) || Number(a.banned ?? false) - Number(b.banned ?? false) || a.name.localeCompare(b.name));
  const selected =
    (selectedName ? live.state.players[selectedName.toLowerCase()] : undefined) ?? shown[0] ?? null;

  // ---- Actions (all sent as console commands) ----

  function requireRunning(): boolean {
    if (running) return true;
    notify.error("The server isn't running", "Start it first. Player commands are sent through the server console.");
    return false;
  }

  async function command(cmd: string, match: (m: string) => boolean): Promise<string> {
    const [reply] = await askServer(cmd, { match: (m) => match(m) || RX.noSuchPlayer.test(m) });
    if (RX.noSuchPlayer.test(reply)) throw new Error("Minecraft couldn't find that player.");
    return reply;
  }

  function kick(p: PlayerInfo) {
    if (!requireRunning()) return;
    ask({
      title: `Kick ${p.name}?`,
      description: "They can join again right away.",
      icon: <RoundLogOut />,
      confirmText: "Kick",
      confirmColor: "gray-warning",
      confirmIcon: <RoundLogOut />,
      input: { title: "Reason", placeholder: "Shown to the player (optional)" },
      onConfirm: async (reason) => {
        await command(`kick ${p.name}${reason ? ` ${reason}` : ""}`, (m) => RX.kicked.test(m));
        notify.success(`Kicked ${p.name}`);
      },
    });
  }

  function ban(p: PlayerInfo) {
    if (!requireRunning()) return;
    ask({
      title: `Ban ${p.name}?`,
      description: p.online
        ? "They're kicked and can't join until you unban them."
        : "They can't join until you unban them.",
      icon: <Hammer />,
      tone: "danger",
      confirmText: "Ban",
      confirmColor: "red",
      confirmIcon: <Hammer />,
      input: { title: "Reason", placeholder: "Shown to the player (optional)" },
      onConfirm: async (reason) => {
        const reply = await command(`ban ${p.name}${reason ? ` ${reason}` : ""}`, (m) => RX.banned.test(m) || /already banned/i.test(m));
        if (/already banned/i.test(reply)) patchPlayer(p.name, { banned: true });
        notify.success(`Banned ${p.name}`);
      },
    });
  }

  async function unban(p: PlayerInfo) {
    if (!requireRunning()) return;
    try {
      const reply = await command(`pardon ${p.name}`, (m) => RX.unbanned.test(m) || /isn't banned|is not banned/i.test(m));
      if (!RX.unbanned.test(reply)) patchPlayer(p.name, { banned: false, banReason: undefined });
      notify.success(`Unbanned ${p.name}`);
    } catch (err) {
      notify.error(`Couldn't unban ${p.name}`, errorMessage(err));
    }
  }

  async function setOperator(p: PlayerInfo, on: boolean) {
    if (!requireRunning()) return;
    try {
      const reply = await command(on ? `op ${p.name}` : `deop ${p.name}`, (m) =>
        RX.op.test(m) || RX.deop.test(m) || RX.alreadyOp.test(m) || RX.notOp.test(m),
      );
      if (RX.alreadyOp.test(reply)) patchPlayer(p.name, { op: true });
      if (RX.notOp.test(reply)) patchPlayer(p.name, { op: false });
      notify.success(on ? `${p.name} is now an operator` : `${p.name} is no longer an operator`);
    } catch (err) {
      notify.error("Couldn't change operator", errorMessage(err));
    }
  }

  async function setWhitelisted(name: string, on: boolean) {
    const reply = await command(on ? `whitelist add ${name}` : `whitelist remove ${name}`, (m) =>
      RX.whitelistAdd.test(m) || RX.whitelistRemove.test(m) || RX.alreadyWhitelisted.test(m) || RX.notWhitelisted.test(m),
    );
    if (RX.alreadyWhitelisted.test(reply)) patchPlayer(name, { whitelisted: true });
    if (RX.notWhitelisted.test(reply)) patchPlayer(name, { whitelisted: false });
  }

  // ---- Notes (saved on this computer until the Agent can store them) ----

  const noteKey =
    server && selected && connection
      ? `tinker.playerNotes.${agentId(connection)}.${server.id}.${selected.name.toLowerCase()}`
      : null;
  const [note, setNote] = useState("");
  useEffect(() => {
    setNote(noteKey ? readPref(noteKey, "") : "");
  }, [noteKey]);

  const activity = selected
    ? live.state.activity
        .filter((a) => a.player.toLowerCase() === selected.name.toLowerCase())
        .slice(-8)
        .reverse()
    : [];

  return (
    <div className="flex w-full flex-col items-start bg-[#0b0d10] min-h-full font-['Inter']">
      <PageShell
        header={<ConnectedHeader />}
        tabs={<TabBar selected="players" onNavigate={onNavigate} />}
        title="Players"
        subtitle={
          server
            ? running
              ? `${counts.online} of ${live.state.maxPlayers ?? "?"} online on ${server.name}`
              : `${server.name} is stopped`
            : "Who's playing on your server."
        }
        actions={
          server ? (
            <PrimaryButton
              icon={<RoundPersonAddAlt1 />}
              text="Add to whitelist"
              color="gray"
              onClick={() => {
                if (requireRunning()) setWhitelistOpen(true);
              }}
            />
          ) : undefined
        }
      >
        <ServerGate>
          {server && (
            <>
              {!running ? (
                <Banner
                  variant="warning"
                  title={`${server.name} is stopped`}
                  description="Players Dash saw in the console still show up, but kicking, banning and whitelisting need the server running."
                />
              ) : null}
              <div className="flex w-full items-start gap-6 mobile:flex-col">
                <aside className="flex w-[360px] flex-none flex-col items-start gap-3 mobile:w-full mobile:flex-none">
                  <div className="flex h-10 w-full flex-none items-center gap-2 rounded-[8px] border border-solid border-[#2a3038] bg-[#0b0d10] px-3 focus-within:border-[#22c55e]">
                    <RoundSearch className="font-['Inter'] text-[18px] font-[400] leading-[20px] text-[#7a828e]" />
                    <input
                      className="min-w-0 grow shrink-0 basis-0 self-stretch bg-transparent font-['Inter'] text-[14px] font-[400] leading-[21px] text-[#ffffff] outline-none placeholder:text-[#7a828e]"
                      placeholder="Search by name or UUID"
                      value={query}
                      type="search"
                      onChange={(event) => setQuery(event.target.value)}
                    />
                  </div>
                  <div className="flex w-full flex-wrap items-center gap-2">
                    <FilterChip label="All" count={String(counts.all)} selected={filter === "all"} onClick={() => setFilter("all")} />
                    <FilterChip label="Online" count={String(counts.online)} dot="green" selected={filter === "online"} onClick={() => setFilter("online")} />
                    <FilterChip className="cursor-not-allowed opacity-40" label="AFK" count="–" dot="amber" title={NOT_YET} />
                    <FilterChip className="cursor-not-allowed opacity-40" label="Timed-Out" count="–" dot="orange" title={NOT_YET} />
                    <FilterChip label="Offline" count={String(counts.offline)} dot="gray" selected={filter === "offline"} onClick={() => setFilter("offline")} />
                    <FilterChip label="Banned" count={String(counts.banned)} dot="red" selected={filter === "banned"} onClick={() => setFilter("banned")} />
                  </div>
                  <div className="flex w-full flex-col items-start gap-2">
                    {shown.length > 0 ? (
                      shown.map((p) => {
                        const st = statusOf(p);
                        return (
                          <PlayerStatusCard
                            key={p.name.toLowerCase()}
                            className={`cursor-pointer ${selected?.name === p.name ? "border-[#22c55e] bg-[#0f2418]" : ""}`}
                            username={p.name}
                            pfp={head(p.name)}
                            status={st}
                            timeValue={
                              st === "online"
                                ? p.onlineSince
                                  ? formatDuration(now - p.onlineSince)
                                  : "online"
                                : st === "banned"
                                  ? // reads "Banned 5m ago · reason" or "Banned by Server · reason"
                                    p.bannedAt
                                    ? timeAgo(p.bannedAt, now)
                                    : p.bannedBy
                                      ? `by ${p.bannedBy}`
                                      : undefined
                                  : p.lastSeen
                                    ? `last seen ${timeAgo(p.lastSeen, now)}`
                                    : p.whitelisted
                                      ? "whitelisted"
                                      : "offline"
                            }
                            reason={st === "banned" ? p.banReason ?? "" : ""}
                            isOperator={p.op === true}
                            onClick={() => setSelectedName(p.name)}
                          />
                        );
                      })
                    ) : (
                      <EmptyState
                        className="py-8"
                        variant="disconnected"
                        icon={<RoundPeople />}
                        title={all.length === 0 ? "No players yet" : "No matches"}
                        description={
                          all.length === 0
                            ? running
                              ? "Players show up when they join, or when you add them to the whitelist."
                              : "Start the server to see who's online."
                            : "Try another filter or search."
                        }
                      />
                    )}
                  </div>
                </aside>
                <div className="flex grow shrink-0 basis-0 flex-col items-start gap-6 border-l border-solid border-[#1f242b] pl-6 mobile:border-none mobile:px-0 mobile:py-0">
                  {selected ? (
                    <>
                      <PlayerProfileHeader
                        image={head(selected.name)}
                        username={selected.name}
                        uuid={selected.uuid ? `UUID ${selected.uuid}` : "UUID not seen yet"}
                        isOperator={selected.op === true}
                        status={statusOf(selected)}
                      />
                      <div className="w-full items-start gap-2 grid grid-cols-4 mobile:grid mobile:grid-cols-2">
                        <StatCard icon={<RoundTimer />} label="Total playtime" value="—" title={NOT_YET} />
                        <StatCard icon={<RoundCalendarMonth />} label="First joined" value="—" title={NOT_YET} />
                        <StatCard
                          icon={<RoundPinDrop />}
                          label="Last IP"
                          value={selected.ip ?? "—"}
                          title={selected.ip ? "From the console's login line" : "Shows up after they log in"}
                        />
                        <StatCard icon={<SkullBold />} label="Deaths" value="—" title={NOT_YET} />
                      </div>
                      <div className="flex w-full flex-col items-start gap-3">
                        <div className="flex w-full items-center justify-between">
                          <span className="font-['Inter'] text-[16px] font-[700] leading-[24px] text-[#ffffff]">Moderation</span>
                          <span className="font-['Inter'] text-[12px] font-[400] leading-[16px] text-[#7a828e]">
                            Applies to {selected.name}
                          </span>
                        </div>
                        <div className="flex w-full flex-wrap items-center gap-2">
                          <TimeoutButton className={`h-8 w-auto flex-none ${previewClass}`} />
                          <PrimaryButton
                            className="h-8 w-auto flex-none"
                            icon={<RoundLogOut />}
                            text="Kick"
                            color="gray-warning"
                            disabled={!running || !selected.online}
                            title={selected.online ? undefined : "Only online players can be kicked"}
                            onClick={() => {
                              if (running && selected.online) kick(selected);
                            }}
                          />
                          {selected.banned ? (
                            <PrimaryButton
                              className="h-8 w-auto flex-none"
                              icon={<Hammer />}
                              text="Unban"
                              color="gray-success"
                              disabled={!running}
                              onClick={() => void unban(selected)}
                            />
                          ) : (
                            <PrimaryButton
                              className="h-8 w-auto flex-none"
                              icon={<Hammer />}
                              text="Ban"
                              color="red"
                              disabled={!running}
                              onClick={() => ban(selected)}
                            />
                          )}
                          <div className="flex grow shrink-0 basis-0 items-center justify-end gap-2 mobile:justify-start">
                            <PrimaryButton className={previewClass} icon={<RoundSearch />} text="Inventory" color="gray" />
                            <PrimaryButton className={previewClass} icon={<RoundRefresh />} text="Restore" color="gray" />
                          </div>
                        </div>
                      </div>
                      <SectionCard title="Permissions" description="">
                        <SettingRow
                          title="Operator"
                          description={`Full access to commands like /gamemode and /tp.${selected.op === undefined ? " Current status unknown until it's changed here." : ""}`}
                          control={
                            <Switch
                              checked={selected.op === true}
                              disabled={!running}
                              onCheckedChange={(on: boolean) => void setOperator(selected, on)}
                            />
                          }
                          divider={true}
                        />
                        <SettingRow
                          title="Whitelisted"
                          description="Allowed to join while the whitelist is on."
                          control={
                            <Switch
                              checked={selected.whitelisted === true}
                              disabled={!running}
                              onCheckedChange={(on: boolean) => {
                                setWhitelisted(selected.name, on)
                                  .then(() => notify.success(on ? `Whitelisted ${selected.name}` : `Removed ${selected.name} from the whitelist`))
                                  .catch((err) => notify.error("Couldn't change the whitelist", errorMessage(err)));
                              }}
                            />
                          }
                        />
                      </SectionCard>
                      <SectionCard
                        title="Recent activity"
                        description=""
                        headerAction={
                          <span
                            className="cursor-pointer font-['Inter'] text-[13px] font-[500] leading-[18px] text-[#3b9eff] hover:text-[#7cbcff]"
                            onClick={() => onNavigate("Console")}
                          >
                            View in console
                          </span>
                        }
                      >
                        {activity.length > 0 ? (
                          activity.map((item, index) => (
                            <div
                              key={item.id}
                              className={`flex w-full items-center gap-3 px-5 py-3 ${index < activity.length - 1 ? "border-b border-solid border-[#1f242b]" : ""}`}
                            >
                              <div className={`flex h-2 w-2 flex-none items-start rounded-[9999px] ${activityDot[item.kind]}`} />
                              <span className="grow shrink-0 basis-0 font-['Inter'] text-[14px] font-[400] leading-[20px] text-[#e5e7eb]">
                                {item.text}
                              </span>
                              <span className="font-['Inter'] text-[12px] font-[400] leading-[16px] text-[#7a828e]">
                                {formatWhen(item.at, now)}
                              </span>
                            </div>
                          ))
                        ) : (
                          <div className="flex w-full px-5 py-3">
                            <span className="font-['Inter'] text-[13px] font-[400] leading-[18px] text-[#7a828e]">
                              Nothing in the console about {selected.name} yet. Joins, leaves, deaths and advancements show up here.
                            </span>
                          </div>
                        )}
                      </SectionCard>
                      <div className="flex w-full flex-col items-start gap-2">
                        <span className="font-['Inter'] text-[16px] font-[700] leading-[24px] text-[#ffffff]">Notes</span>
                        <textarea
                          className={`min-h-[88px] w-full ${textareaClass}`}
                          placeholder="e.g. Server owner, built the spawn town, previously griefed; warning given"
                          value={note}
                          onChange={(event) => {
                            setNote(event.target.value);
                            if (noteKey) writePref(noteKey, event.target.value);
                          }}
                        />
                        <span className="font-['Inter'] text-[12px] font-[400] leading-[16px] text-[#7a828e]">
                          Saved on this computer for now. Sharing notes with other Tinker users needs an Agent update.
                        </span>
                      </div>
                      <SectionCard className={previewClass} title="Danger zone" description="" variant="danger" headerAction={<SoonBadge />}>
                        <SettingRow
                          title="Delete player data"
                          description={`Delete ${selected.name}'s data, inventory and stats from the world. This can't be undone.`}
                          control={<PrimaryButton icon={<RoundDelete />} text="Delete data" color="red" disabled={true} />}
                        />
                      </SectionCard>
                    </>
                  ) : (
                    <EmptyState
                      variant="disconnected"
                      icon={<RoundPeople />}
                      title="No player selected"
                      description="Pick a player on the left to see their details and moderation tools."
                    />
                  )}
                </div>
              </div>
            </>
          )}
        </ServerGate>
      </PageShell>
      <WhitelistDialog
        open={whitelistOpen}
        onClose={() => setWhitelistOpen(false)}
        onAdd={async (name) => {
          await setWhitelisted(name, true);
          notify.success(`Whitelisted ${name}`, "They can join while the whitelist is on.");
          setSelectedName(name);
        }}
      />
      {prompt}
    </div>
  );
}

function WhitelistDialog({
  open,
  onClose,
  onAdd,
}: {
  open: boolean;
  onClose: () => void;
  onAdd: (name: string) => Promise<void>;
}) {
  const [name, setName] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (open) {
      setName("");
      setError(null);
    }
  }, [open]);

  const valid = isValidPlayerName(name);
  const head = useHeads();
  const typed = useDebounced(name.trim(), 350);

  async function add(current = name) {
    if (!isValidPlayerName(current) || busy) return;
    setBusy(true);
    setError(null);
    try {
      await onAdd(current.trim());
      onClose();
    } catch (err) {
      setError(errorMessage(err));
    } finally {
      setBusy(false);
    }
  }

  return (
    <ShellDialog
      open={open}
      onClose={onClose}
      icon={<RoundPersonAddAlt1 />}
      title="Add to whitelist"
      description="Lets this player join while the whitelist is on."
      footer={
        <>
          <PrimaryButton icon={null} text="Cancel" color="gray" onClick={onClose} />
          <PrimaryButton
            icon={<RoundPersonAddAlt1 />}
            text={busy ? "Adding…" : "Add"}
            disabled={!valid || busy}
            onClick={() => void add()}
          />
        </>
      }
    >
      <McUsernameField
        required
        avatarImage={valid && typed ? head(typed) : undefined}
        input={
          <input
            autoFocus
            className={inputClass}
            placeholder="Steve"
            value={name}
            maxLength={32}
            onChange={(event) => {
              setName(event.target.value);
              setError(null);
            }}
            onKeyDown={(event) => {
              if (event.key === "Enter") void add(event.currentTarget.value);
            }}
          />
        }
      />
      {error ? <Banner variant="error" title="Couldn't add them" description={error} /> : null}
    </ShellDialog>
  );
}

export default Players;
