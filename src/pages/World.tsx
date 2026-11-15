import { useEffect, useRef } from "react";
import { Badge } from "@/ui/components/Badge";
import { Banner } from "@/ui/components/Banner";
import { IconButton } from "@/ui/components/IconButton";
import { InputField } from "@/ui/components/InputField";
import { InstanceListItem } from "@/ui/components/InstanceListItem";
import { PageShell } from "@/ui/components/PageShell";
import { PrimaryButton } from "@/ui/components/PrimaryButton";
import { SectionCard } from "@/ui/components/SectionCard";
import { SelectField } from "@/ui/components/SelectField";
import { SettingRow } from "@/ui/components/SettingRow";
import { StatCard } from "@/ui/components/StatCard";
import { Switch } from "@/ui/components/Switch";
import { TabBar } from "@/ui/components/TabBar";
import OutlineInfo from "@/ui/icons/OutlineInfo";
import RoundDelete from "@/ui/icons/RoundDelete";
import RoundDownload from "@/ui/icons/RoundDownload";
import RoundHourglassTop from "@/ui/icons/RoundHourglassTop";
import RoundLayers from "@/ui/icons/RoundLayers";
import RoundModeEditOutline from "@/ui/icons/RoundModeEditOutline";
import RoundPause from "@/ui/icons/RoundPause";
import RoundPlayArrow from "@/ui/icons/RoundPlayArrow";
import RoundRefresh from "@/ui/icons/RoundRefresh";
import RoundShoppingBasket from "@/ui/icons/RoundShoppingBasket";
import RoundUpgrade from "@/ui/icons/RoundUpgrade";
import { ConnectedHeader } from "../components/ConnectedHeader";
import { inputClass, previewClass } from "../components/fields";
import { ServerGate, SoonBadge } from "../components/PageStates";
import { usePrompt } from "../components/PromptDialog";
import { errorMessage } from "../lib/agent";
import { copyText } from "../lib/external";
import { useSelectedServer } from "../lib/hooks";
import { RX } from "../lib/minecraft";
import { notify } from "../lib/notify";
import type { PageProps } from "./types";

const NOT_YET = "Needs an Agent update";
const NO_BORDER = 59_999_968; // Minecraft's default: effectively no border

const isChunkyReply = (m: string) => /\[Chunky\]/.test(m) || RX.chunkyTask.test(m) || /^Radius changed/i.test(m);

function World({ onNavigate }: PageProps) {
  const { server, console: live } = useSelectedServer();
  const [prompt, ask] = usePrompt();

  const running = server?.running ?? false;
  const starting = live.state.started && !live.state.ready;
  const { ask: askServer, settled } = live;
  const { seed, worldBorder, chunky, startedAt } = live.state;

  // Read the seed and world border once the server is up.
  const probedFor = useRef<string | null>(null);
  useEffect(() => {
    if (!server || !running || !settled || starting) return;
    const key = `${server.id}:${startedAt ?? ""}`;
    if (probedFor.current === key) return;
    probedFor.current = key;
    if (seed === null) askServer("seed", { match: (m) => RX.seed.test(m) }).catch(() => {});
    askServer("worldborder get", { match: (m) => RX.worldBorder.test(m) }).catch(() => {});
  }, [server, running, settled, starting, startedAt, seed, askServer]);

  function requireRunning(): boolean {
    if (running) return true;
    notify.error("The server isn't running", "Start it first. World commands are sent through the server console.");
    return false;
  }

  function editBorder() {
    if (!requireRunning()) return;
    ask({
      title: "World border",
      description: "Players can't go past the border. The center stays where it is.",
      icon: <RoundModeEditOutline />,
      confirmText: "Set border",
      input: {
        title: "Diameter",
        type: "number",
        required: true,
        initial: worldBorder !== null && worldBorder < NO_BORDER ? String(worldBorder) : "",
        placeholder: "10000",
        helper: `From 1 to ${NO_BORDER.toLocaleString()} blocks (the default, which means no border).`,
        trailing: <span className="font-['Inter'] text-[14px] font-[500] leading-[20px] text-[#7a828e]">blocks</span>,
      },
      onConfirm: async (value) => {
        const size = Number(value);
        if (!Number.isFinite(size) || size < 1 || size > NO_BORDER) {
          throw new Error(`Enter a number from 1 to ${NO_BORDER.toLocaleString()}.`);
        }
        const [reply] = await askServer(`worldborder set ${Math.round(size)}`, { match: (m) => /world border/i.test(m) });
        if (!/^(Set|Growing|Shrinking)/.test(reply) && !/already/i.test(reply)) throw new Error(reply);
        await askServer("worldborder get", { match: (m) => RX.worldBorder.test(m) }).catch(() => {});
        notify.success("World border updated", `${Math.round(size).toLocaleString()} blocks wide`);
      },
    });
  }

  async function chunkyCommand(cmd: string) {
    try {
      await askServer(cmd, { match: isChunkyReply, timeoutMs: 6000 });
    } catch (err) {
      const msg = errorMessage(err);
      throw new Error(/doesn't know that command/.test(msg) ? "Chunky isn't installed on this server. Add the Chunky mod or plugin first." : msg);
    }
  }

  function startChunky() {
    if (!requireRunning()) return;
    const suggested = worldBorder !== null && worldBorder < NO_BORDER ? Math.round(worldBorder / 2) : 2000;
    ask({
      title: "Pregenerate chunks",
      description: "Chunky generates the world around the center ahead of time, so exploring doesn't lag. Needs the Chunky mod or plugin.",
      icon: <RoundHourglassTop />,
      confirmText: "Start",
      confirmIcon: <RoundPlayArrow />,
      input: {
        title: "Radius",
        type: "number",
        required: true,
        initial: String(suggested),
        helper: "Blocks from the center. Big radiuses can take hours and a lot of disk space.",
        trailing: <span className="font-['Inter'] text-[14px] font-[500] leading-[20px] text-[#7a828e]">blocks</span>,
      },
      onConfirm: async (value) => {
        const radius = Math.round(Number(value));
        if (!Number.isFinite(radius) || radius < 1) throw new Error("Enter a radius of at least 1 block.");
        await chunkyCommand(`chunky radius ${radius}`);
        await chunkyCommand("chunky start");
        notify.success("Pregeneration started", "Progress shows up here and in the Console.");
      },
    });
  }

  async function pauseOrContinue(cmd: "chunky pause" | "chunky continue") {
    if (!requireRunning()) return;
    try {
      await chunkyCommand(cmd);
    } catch (err) {
      notify.error("Chunky didn't respond", errorMessage(err));
    }
  }

  const percent = chunky?.percent ?? null;
  const chunkyBadge =
    chunky === null
      ? null
      : chunky.state === "paused"
        ? "Paused"
        : chunky.state === "finished"
          ? "Done"
          : chunky.state === "stopped"
            ? "Stopped"
            : percent !== null
              ? `${percent.toFixed(percent < 10 ? 1 : 0)}%`
              : "Running";
  const chunkyDetail =
    chunky === null
      ? "Not running. Needs the Chunky mod or plugin on the server."
      : [
          chunky.world,
          chunky.chunks !== null ? `${chunky.chunks.toLocaleString()} chunks done` : null,
          chunky.state === "running" && chunky.eta ? `about ${chunky.eta} left` : null,
        ]
          .filter(Boolean)
          .join(" · ");

  return (
    <div className="flex w-full flex-col items-start bg-[#0b0d10] min-h-full">
      <PageShell
        header={<ConnectedHeader />}
        tabs={<TabBar selected="world" onNavigate={onNavigate} />}
        title="World"
        subtitle={server ? `Minecraft ${server.version || "(unknown version)"} · ${server.name}` : "Your server's world."}
        actions={
          <>
            <PrimaryButton icon={<RoundUpgrade />} text="Upload world" color="gray" disabled={true} title={NOT_YET} />
            <PrimaryButton icon={<RoundDownload />} text="Download world" disabled={true} title={NOT_YET} />
          </>
        }
      >
        <ServerGate>
          {server && (
            <>
              <div className="flex w-full flex-col items-start gap-4 rounded-xl border border-solid border-[#1f242b] bg-[#12151a] px-5 py-5 mobile:px-4">
                <div className="flex w-full flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 flex-none items-center justify-center rounded-[8px] border border-solid border-[#22c55e80] bg-[#0f2418]">
                      <RoundLayers className="font-['Inter'] text-[18px] font-[400] leading-[20px] text-[#86efac]" />
                    </div>
                    <span className="font-['Inter'] text-[18px] font-[700] leading-[26px] text-[#ffffff]">world</span>
                    <Badge label="Active" variant="green" />
                  </div>
                  <span className="font-['Inter'] text-[12px] font-[400] leading-[16px] text-[#7a828e]">
                    {running ? "Seed and world border are read from the running server." : "Start the server to read the seed and world border."}
                  </span>
                </div>
                <div className="w-full items-start gap-3 grid grid-cols-4 mobile:grid mobile:grid-cols-2">
                  <StatCard
                    className={seed ? "cursor-pointer" : undefined}
                    icon={null}
                    label="Seed"
                    value={seed ?? "—"}
                    showCopyButton={seed !== null}
                    title={seed ? "Click to copy" : running ? "Reading the seed…" : "Start the server to read it"}
                    onClick={() => {
                      if (!seed) return;
                      copyText(seed)
                        .then(() => notify.success("Seed copied"))
                        .catch((err) => notify.error("Couldn't copy", errorMessage(err)));
                    }}
                  />
                  <StatCard icon={null} label="World type" value="—" title={NOT_YET} />
                  <StatCard icon={null} label="Size on disk" value="—" title={NOT_YET} />
                  <StatCard icon={null} label="Playtime" value="—" title={NOT_YET} />
                </div>
              </div>
              <SectionCard
                className={previewClass}
                title="Dimensions"
                description="Turn off a dimension to stop players entering it. Reset regenerates that dimension only."
                variant="default"
                headerAction={<SoonBadge />}
              >
                <div className="w-full items-start gap-3 px-3 py-3 grid grid-cols-3 mobile:grid mobile:grid-cols-1">
                  {[
                    { name: "Overworld", id: "minecraft:overworld", color: "border-t-[#0095fc]" },
                    { name: "The Nether", id: "minecraft:the_nether", color: "border-t-[#ef4444]" },
                    { name: "The End", id: "minecraft:the_end", color: "border-t-[#a855f7]" },
                  ].map((dimension) => (
                    <div
                      key={dimension.id}
                      className={`flex flex-col items-start gap-4 self-stretch rounded-xl bg-[#12151a] px-4 py-4 border border-solid border-[#1f242b] border-t-4 ${dimension.color}`}
                    >
                      <div className="flex w-full items-center gap-2">
                        <span className="grow shrink-0 basis-0 font-['Inter'] text-[15px] font-[600] leading-[22px] text-[#ffffff]">
                          {dimension.name}
                        </span>
                        <span className="font-['Inter'] text-[12px] font-[400] leading-[16px] text-[#7a828e]">{dimension.id}</span>
                      </div>
                      <div className="flex w-full flex-col items-start gap-1.5">
                        {["Size", "Chunks", "Players here"].map((label) => (
                          <div key={label} className="flex w-full items-center justify-between">
                            <span className="font-['Inter'] text-[13px] font-[400] leading-[18px] text-[#7a828e]">{label}</span>
                            <span className="font-['Inter'] text-[13px] font-[600] leading-[18px] text-[#e5e7eb]">—</span>
                          </div>
                        ))}
                      </div>
                      <div className="flex w-full items-center justify-between border-t border-solid border-[#1f242b] pt-3">
                        <PrimaryButton icon={<RoundRefresh />} text="Reset" color="gray-dangerous" size="sm" disabled={true} />
                        <div className="flex items-center gap-2">
                          <span className="font-['Inter'] text-[13px] font-[500] leading-[18px] text-[#e5e7eb]">Enabled</span>
                          <Switch checked={true} disabled={true} />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </SectionCard>
              <SectionCard
                className={previewClass}
                title="World settings"
                description="Changes apply on the next server restart."
                headerAction={<SoonBadge />}
              >
                <div className="w-full items-start gap-4 border-b border-solid border-[#1f242b] px-5 py-5 grid grid-cols-3 mobile:px-4 mobile:grid mobile:grid-cols-1">
                  <InputField
                    required={true}
                    title="Seed"
                    helperText="Only used when generating new chunks."
                    input={<input className={inputClass} value={seed ?? ""} placeholder="—" readOnly disabled type="text" />}
                  />
                  <SelectField label="Level type" placeholder="—" helperText="Default, Flat, Large biomes or Amplified." disabled />
                  <InputField
                    required={true}
                    title="Spawn protection"
                    helperText="Radius in blocks around spawn that only ops can edit."
                    input={<input className={inputClass} placeholder="—" readOnly disabled type="number" />}
                  />
                </div>
                <SettingRow
                  title="Generate structures"
                  description="Villages, strongholds, temples and other structures appear in new chunks."
                  control={<Switch checked={false} disabled={true} />}
                  divider={true}
                />
                <SettingRow
                  title="Hardcore"
                  description="Players become spectators when they die. Difficulty is locked to Hard."
                  control={<Switch checked={false} disabled={true} />}
                />
              </SectionCard>
              <SectionCard
                title="World border & pregeneration"
                description="Pregenerating chunks ahead of time reduces lag while players explore."
              >
                <SettingRow
                  title="World border"
                  description={
                    worldBorder === null
                      ? running
                        ? "Reading the current border…"
                        : "Start the server to see and change the border."
                      : worldBorder >= NO_BORDER
                        ? "No border (Minecraft's default)"
                        : `Diameter ${worldBorder.toLocaleString()} blocks`
                  }
                  control={
                    <PrimaryButton
                      icon={<RoundModeEditOutline />}
                      text="Edit"
                      color="gray"
                      size="sm"
                      disabled={!running}
                      onClick={editBorder}
                    />
                  }
                  divider={true}
                />
                <div className="flex w-full flex-col items-start gap-3 px-5 py-4 mobile:px-4">
                  <div className="flex w-full items-center gap-4">
                    <div className="flex h-11 w-11 flex-none items-center justify-center rounded-[10px] border border-solid border-[#22c55e80] bg-[#0f2418]">
                      <RoundHourglassTop className="font-['Inter'] text-[24px] font-[400] leading-[20px] text-[#86efac]" />
                    </div>
                    <div className="flex grow shrink-0 basis-0 flex-col items-start gap-0.5">
                      <div className="flex items-center gap-2">
                        <span className="font-['Inter'] text-[15px] font-[600] leading-[22px] text-[#ffffff]">Chunky pregeneration</span>
                        {chunkyBadge ? (
                          <Badge label={chunkyBadge} variant={chunky?.state === "paused" || chunky?.state === "stopped" ? "gray" : "green"} />
                        ) : null}
                      </div>
                      <span className="font-['Inter'] text-[12px] font-[400] leading-[16px] text-[#7a828e]">{chunkyDetail}</span>
                    </div>
                    {chunky?.state === "running" ? (
                      <PrimaryButton
                        icon={<RoundPause />}
                        text="Pause"
                        color="gray"
                        size="sm"
                        disabled={!running}
                        onClick={() => void pauseOrContinue("chunky pause")}
                      />
                    ) : chunky?.state === "paused" ? (
                      <PrimaryButton
                        icon={<RoundPlayArrow />}
                        text="Continue"
                        color="gray"
                        size="sm"
                        disabled={!running}
                        onClick={() => void pauseOrContinue("chunky continue")}
                      />
                    ) : (
                      <PrimaryButton
                        icon={<RoundPlayArrow />}
                        text={chunky?.state === "finished" ? "Start again" : "Start"}
                        color="gray"
                        size="sm"
                        disabled={!running}
                        onClick={startChunky}
                      />
                    )}
                  </div>
                  {chunky !== null ? (
                    <div className="flex h-2 w-full flex-none items-start overflow-hidden rounded-[9999px] bg-[#1f242b]">
                      <div
                        className="flex items-start self-stretch rounded-[9999px] bg-[#22c55e]"
                        style={{ width: `${Math.min(100, Math.max(0, percent ?? 0))}%` }}
                      />
                    </div>
                  ) : null}
                </div>
              </SectionCard>
              <SectionCard
                className={previewClass}
                title="Saved worlds"
                description="Switching worlds restarts the server."
                headerAction={<SoonBadge />}
              >
                <div className="flex w-full flex-col items-start gap-2 px-3 py-3">
                  <InstanceListItem
                    active={true}
                    name="world"
                    actions={
                      <>
                        <IconButton icon={<RoundDownload />} color="gray" />
                        <IconButton icon={<RoundDelete />} color="gray-dangerous" />
                      </>
                    }
                    size="—"
                    version={server.version || "—"}
                    lastActiveTimestamp={running ? "Now" : "—"}
                  />
                </div>
                <div className="flex w-full items-center px-3 pb-3">
                  <PrimaryButton icon={<RoundShoppingBasket />} text="Browse Marketplace" color="gray" size="sm" disabled={true} />
                </div>
              </SectionCard>
              <SectionCard title="Danger zone" description="" variant="danger" headerAction={<SoonBadge />}>
                <div className="flex w-full flex-col items-start gap-3 px-5 py-4 mobile:px-4">
                  {running ? (
                    <Banner
                      icon={<OutlineInfo />}
                      title="Stop the server first"
                      description={`${server.name} is running. Regenerating is disabled until it's stopped.`}
                      variant="warning"
                    />
                  ) : null}
                  <div className="flex w-full items-center gap-4 mobile:flex-col mobile:items-start">
                    <div className="flex grow shrink-0 basis-0 flex-col items-start gap-0.5">
                      <span className="font-['Inter'] text-[15px] font-[600] leading-[22px] text-[#fca5a5]">Regenerate world</span>
                      <span className="font-['Inter'] text-[12px] font-[400] leading-[16px] text-[#9ca3af]">
                        Deletes the current world and creates a new one from a seed. A backup is made first.
                      </span>
                    </div>
                    <PrimaryButton icon={<RoundRefresh />} text="Regenerate" color="red" disabled={true} title={NOT_YET} />
                  </div>
                </div>
              </SectionCard>
            </>
          )}
        </ServerGate>
      </PageShell>
      {prompt}
    </div>
  );
}

export default World;
