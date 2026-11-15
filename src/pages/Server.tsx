import { ConsoleServerHeader } from "@/ui/components/ConsoleServerHeader";
import { InputField } from "@/ui/components/InputField";
import { PageShell } from "@/ui/components/PageShell";
import { PrimaryButton } from "@/ui/components/PrimaryButton";
import { SectionCard } from "@/ui/components/SectionCard";
import { SelectField } from "@/ui/components/SelectField";
import { SettingRow } from "@/ui/components/SettingRow";
import { StatCard } from "@/ui/components/StatCard";
import { StatusPill } from "@/ui/components/StatusPill";
import { Switch } from "@/ui/components/Switch";
import { TabBar } from "@/ui/components/TabBar";
import OutlineLabel from "@/ui/icons/OutlineLabel";
import RoundAdd from "@/ui/icons/RoundAdd";
import RoundDelete from "@/ui/icons/RoundDelete";
import RoundImage from "@/ui/icons/RoundImage";
import RoundManageAccounts from "@/ui/icons/RoundManageAccounts";
import RoundMemory from "@/ui/icons/RoundMemory";
import RoundPeople from "@/ui/icons/RoundPeople";
import RoundPlayArrow from "@/ui/icons/RoundPlayArrow";
import RoundRefresh from "@/ui/icons/RoundRefresh";
import RoundSettingsEthernet from "@/ui/icons/RoundSettingsEthernet";
import RoundShortText from "@/ui/icons/RoundShortText";
import RoundStop from "@/ui/icons/RoundStop";
import RoundTimer from "@/ui/icons/RoundTimer";
import RoundTroubleshoot from "@/ui/icons/RoundTroubleshoot";
import RoundUpload from "@/ui/icons/RoundUpload";
import TopSpeed20Filled from "@/ui/icons/TopSpeed20Filled";
import { ConnectedHeader } from "../components/ConnectedHeader";
import { inputClass, previewClass, textareaClass } from "../components/fields";
import { PreviewBanner, ServerGate, SoonBadge } from "../components/PageStates";
import { usePrompt } from "../components/PromptDialog";
import { useAgent } from "../lib/AgentContext";
import { DEFAULT_SERVER_ICON, serverTypeLabel } from "../lib/agent";
import { useHostStats, useNow, useSelectedServer } from "../lib/hooks";
import { formatDuration, formatGB } from "../lib/minecraft";
import { useUi } from "../lib/UiContext";
import type { PageProps } from "./types";

const NOT_YET = "Needs an Agent update";

function Server({ onNavigate }: PageProps) {
  const { pending, startServer, stopServer, restartServer } = useAgent();
  const { server, status, console: live } = useSelectedServer();
  const { openCreateServer, openImportServer } = useUi();
  const stats = useHostStats();
  const now = useNow(10_000);
  const [prompt, ask] = usePrompt();

  const running = server?.running ?? false;
  const action = server ? pending[server.id] : undefined;
  const busy = action !== undefined;
  const online = Object.values(live.state.players).filter((p) => p.online);
  const maxPlayers = live.state.maxPlayers;
  const memoryGb = server ? String(Math.round((server.memoryMb / 1024) * 10) / 10) : "";
  const hostTotalGb = stats ? formatGB(stats.memTotalBytes) : null;

  // Stopping or restarting kicks everyone, so ask first when people are online.
  function guarded(kind: "stop" | "restart") {
    if (!server || busy) return;
    const run = () => void (kind === "stop" ? stopServer(server.id) : restartServer(server.id));
    if (online.length === 0) {
      run();
      return;
    }
    ask({
      title: kind === "stop" ? `Stop ${server.name}?` : `Restart ${server.name}?`,
      description: `${online.length} player${online.length === 1 ? " is" : "s are"} online and will be disconnected. The world is saved first.`,
      icon: kind === "stop" ? <RoundStop /> : <RoundRefresh />,
      tone: "danger",
      confirmText: kind === "stop" ? "Stop server" : "Restart server",
      confirmColor: kind === "stop" ? "red" : "gray-warning",
      onConfirm: run,
    });
  }

  return (
    <div className="flex w-full flex-col items-start bg-[#0b0d10] min-h-full font-['Inter']">
      <PageShell
        className="h-auto w-full flex-none"
        header={<ConnectedHeader />}
        tabs={<TabBar selected="server" onNavigate={onNavigate} />}
        title="Server"
        subtitle={server ? `Control, configure and monitor ${server.name}.` : "Create a server or import one to get started."}
        actions={
          <>
            <PrimaryButton
              icon={<RoundManageAccounts />}
              text="Manage whitelist"
              color="gray"
              size="sm"
              onClick={() => onNavigate("Players")}
            />
            <PrimaryButton icon={<RoundUpload />} text="Import server" size="sm" onClick={openImportServer} />
            <PrimaryButton icon={<RoundAdd />} text="Create server" size="sm" onClick={openCreateServer} />
          </>
        }
      >
        <ServerGate>
          {server && (
            <>
              <div className="flex w-full flex-col items-start gap-5 rounded-2xl border border-solid border-[#1f242b] bg-[#0e1114] px-6 py-5 mobile:px-4">
                <div className="flex w-full items-center gap-4 mobile:flex-col mobile:items-start">
                  <div className="flex grow shrink-0 basis-0 items-center gap-3">
                    <ConsoleServerHeader
                      image={DEFAULT_SERVER_ICON}
                      name={server.name}
                      loader={serverTypeLabel(server.type)}
                      version={server.version || "unknown version"}
                      port={String(server.port)}
                      currentPlayers={running ? String(online.length) : "0"}
                      maxPlayers={maxPlayers !== null ? String(maxPlayers) : "?"}
                    />
                  </div>
                  <StatusPill variant={status.variant} label={status.label} />
                </div>
                <div className="w-full items-start gap-3 grid grid-cols-5 mobile:grid mobile:grid-cols-2">
                  <StatCard
                    className="h-auto grow shrink-0 basis-0 self-stretch"
                    icon={<RoundMemory />}
                    label="Host CPU"
                    value={stats ? `${Math.round(stats.cpuPercent)}%` : "—"}
                    title="The whole server PC. Per-server CPU needs an Agent update."
                  />
                  <StatCard
                    className="h-auto grow shrink-0 basis-0 self-stretch"
                    icon={<RoundMemory />}
                    label="Host memory"
                    value={stats ? `${formatGB(stats.memUsedBytes)} / ${formatGB(stats.memTotalBytes)} GB` : "—"}
                    title="The whole server PC. Per-server memory needs an Agent update."
                  />
                  <StatCard
                    className="h-auto grow shrink-0 basis-0 self-stretch"
                    icon={<RoundPeople />}
                    label="Players"
                    value={running ? `${online.length} / ${maxPlayers ?? "?"}` : "—"}
                  />
                  <StatCard
                    className="h-auto grow shrink-0 basis-0 self-stretch"
                    icon={<RoundTimer />}
                    label="Uptime"
                    value={running && live.state.startedAt ? formatDuration(now - live.state.startedAt) : "—"}
                  />
                  <StatCard
                    className="h-auto grow shrink-0 basis-0 self-stretch"
                    icon={<RoundTroubleshoot />}
                    label="TPS"
                    value="—"
                    title={NOT_YET}
                  />
                </div>
                <div className="flex w-full flex-wrap items-center gap-2">
                  <PrimaryButton
                    icon={<RoundPlayArrow />}
                    text={action === "starting" ? "Starting…" : "Start"}
                    disabled={running || busy}
                    onClick={() => {
                      if (!running && !busy) void startServer(server.id);
                    }}
                  />
                  <PrimaryButton
                    icon={<RoundRefresh />}
                    text={action === "restarting" ? "Restarting…" : "Restart"}
                    color="gray-warning"
                    disabled={!running || busy}
                    onClick={() => {
                      if (running) guarded("restart");
                    }}
                  />
                  <PrimaryButton
                    icon={<RoundStop />}
                    text={action === "stopping" ? "Stopping…" : "Stop"}
                    color="red"
                    disabled={!running || busy}
                    onClick={() => {
                      if (running) guarded("stop");
                    }}
                  />
                  <span className="font-['Inter'] text-[12px] font-[400] leading-[16px] text-[#7a828e] pl-2">
                    Stop saves the world and shuts down. If it's stuck after 60s, the Agent force-stops it.
                  </span>
                </div>
              </div>

              <PreviewBanner
                title="Settings are read-only for now"
                description="Values below come from the Agent. Editing server.properties, memory and startup options needs an Agent update."
              />

              <div className="w-full items-start gap-6 grid grid-cols-3 mobile:grid mobile:grid-cols-1">
                <SectionCard title="Identity" description="MOTD is public to anyone with IP." headerAction={<SoonBadge />}>
                  <div className="flex w-full flex-col items-start gap-4 px-5 py-5 mobile:px-4">
                    <InputField
                      required={true}
                      title="Server label"
                      labelIcon={<OutlineLabel />}
                      helperText="Only shown inside Tinker."
                      input={<input className={inputClass} value={server.name} readOnly disabled type="text" />}
                    />
                    <InputField
                      title="MOTD"
                      labelIcon={<RoundShortText />}
                      helperText="Two lines, up to 59 characters each."
                      input={<textarea className={`h-16 ${textareaClass}`} placeholder="Message of the day" disabled value="" />}
                    />
                    <InputField
                      title="Icon"
                      labelIcon={<RoundImage />}
                      helperText="Image upload support not finished yet."
                    />
                  </div>
                </SectionCard>
                <SectionCard title="Software" description="Changing these requires a restart." headerAction={<SoonBadge />}>
                  <div className="flex w-full flex-col items-start gap-4 px-5 py-5 mobile:px-4">
                    <SelectField label="Loader" placeholder={serverTypeLabel(server.type)} helperText="" disabled />
                    <SelectField label="Minecraft version" placeholder={server.version || "Unknown"} helperText="" disabled />
                    <SelectField label="Java runtime" placeholder="—" helperText="Detected on the server PC." disabled />
                  </div>
                </SectionCard>
                <SectionCard
                  title="Resources & network"
                  description="Memory and the port players connect to."
                  headerAction={<SoonBadge />}
                >
                  <div className="flex w-full flex-col items-start gap-4 px-5 py-5 mobile:px-4">
                    <PrimaryButton icon={<TopSpeed20Filled />} text="Run Performance Test" disabled={true} />
                    <InputField
                      required={true}
                      title="Max memory"
                      labelIcon={<RoundMemory />}
                      helperText={`${hostTotalGb ? `Host has ${hostTotalGb} GB. ` : ""}6–10 GB is plenty for most modpacks. Too much can hurt performance.`}
                      input={<input className={inputClass} value={memoryGb} readOnly disabled type="number" />}
                      trailing={
                        <span className="font-['Inter'] text-[14px] font-[500] leading-[20px] text-[#7a828e]">GB</span>
                      }
                    />
                    <InputField
                      required={true}
                      title="Port"
                      labelIcon={<RoundSettingsEthernet />}
                      input={<input className={inputClass} value={String(server.port)} readOnly disabled type="number" />}
                    />
                  </div>
                </SectionCard>
              </div>

              <SectionCard
                className={previewClass}
                title="Gameplay"
                description="The most-used server.properties settings. Edit the rest in Files."
                headerAction={<SoonBadge />}
              >
                <div className="w-full items-start gap-4 border-b border-solid border-[#1f242b] px-5 py-5 grid grid-cols-4 mobile:px-4 mobile:grid mobile:grid-cols-1">
                  <SelectField className="h-auto grow shrink-0 basis-0 self-stretch" label="Difficulty" placeholder="—" helperText="" disabled />
                  <SelectField className="h-auto grow shrink-0 basis-0 self-stretch" label="Gamemode" placeholder="—" helperText="" disabled />
                  <InputField
                    className="h-auto grow shrink-0 basis-0 self-stretch"
                    required={true}
                    title="Max players"
                    input={<input className={inputClass} value={maxPlayers !== null ? String(maxPlayers) : ""} placeholder="—" readOnly disabled />}
                  />
                  <InputField
                    className="h-auto grow shrink-0 basis-0 self-stretch"
                    required={true}
                    title="View distance"
                    input={<input className={inputClass} placeholder="—" readOnly disabled />}
                    trailing={<span className="font-['Inter'] text-[14px] font-[500] leading-[20px] text-[#7a828e]">chunks</span>}
                  />
                </div>
                <div className="w-full items-start grid grid-cols-2 mobile:grid mobile:grid-cols-1">
                  <SettingRow
                    className="h-auto grow shrink-0 basis-0 self-stretch"
                    title="PvP"
                    description="Players can damage each other."
                    control={<Switch checked={false} disabled={true} />}
                    divider={true}
                  />
                  <SettingRow
                    className="h-auto grow shrink-0 basis-0 self-stretch"
                    title="Whitelist"
                    description="Only whitelisted players can join."
                    control={<Switch checked={false} disabled={true} />}
                    divider={true}
                  />
                  <SettingRow
                    className="h-auto grow shrink-0 basis-0 self-stretch"
                    title="Online mode"
                    description="Verify accounts with Mojang. Keep on unless you know why."
                    control={<Switch checked={false} disabled={true} />}
                  />
                  <SettingRow
                    className="h-auto grow shrink-0 basis-0 self-stretch"
                    title="Allow flight"
                    description="Stops modded jetpacks from kicking players."
                    control={<Switch checked={false} disabled={true} />}
                  />
                </div>
              </SectionCard>
              <div className="w-full items-start gap-6 grid grid-cols-2 mobile:grid mobile:grid-cols-1">
                <SectionCard
                  className={previewClass}
                  title="Startup"
                  description="What happens when the server PC boots or the server crashes."
                  headerAction={<SoonBadge />}
                >
                  <SettingRow
                    title="Start with Agent"
                    description="Start this server automatically when Tinker Agent starts."
                    control={<Switch checked={false} disabled={true} />}
                    divider={true}
                  />
                  <SettingRow
                    title="Auto-restart on crash"
                    description="Restart up to 3 times, then stop and notify you."
                    control={<Switch checked={false} disabled={true} />}
                  />
                </SectionCard>
                <SectionCard
                  className={previewClass}
                  title="Danger zone"
                  description="These can't be undone. Make a backup first."
                  variant="danger"
                  headerAction={<SoonBadge />}
                >
                  <SettingRow
                    title="Reset server settings"
                    description={`Restore server.properties to ${serverTypeLabel(server.type)} defaults. Worlds and mods stay.`}
                    control={<PrimaryButton icon={<RoundRefresh />} text="Reset" color="gray-dangerous" size="sm" disabled={true} />}
                    divider={true}
                  />
                  <SettingRow
                    title="Delete server"
                    description={`Removes ${server.name}, its worlds, mods and backups from the server PC.`}
                    control={<PrimaryButton icon={<RoundDelete />} text="Delete" color="red" size="sm" disabled={true} />}
                  />
                </SectionCard>
              </div>
            </>
          )}
        </ServerGate>
      </PageShell>
      {prompt}
    </div>
  );
}

export default Server;
