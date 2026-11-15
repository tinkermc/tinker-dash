"use client";

import { useState } from "react";
import { Badge } from "@/ui/components/Badge";
import { InputField } from "@/ui/components/InputField";
import { Loader } from "@/ui/components/Loader";
import { PageShell } from "@/ui/components/PageShell";
import { PrimaryButton } from "@/ui/components/PrimaryButton";
import { SectionCard } from "@/ui/components/SectionCard";
import { SettingRow } from "@/ui/components/SettingRow";
import { StatCard } from "@/ui/components/StatCard";
import { StatusPill } from "@/ui/components/StatusPill";
import { Switch } from "@/ui/components/Switch";
import { TabBar } from "@/ui/components/TabBar";
import BaselineHelp from "@/ui/icons/BaselineHelp";
import OutlineCancel from "@/ui/icons/OutlineCancel";
import RoundAdd from "@/ui/icons/RoundAdd";
import RoundCheckCircleOutline from "@/ui/icons/RoundCheckCircleOutline";
import RoundDelete from "@/ui/icons/RoundDelete";
import RoundFolderZip from "@/ui/icons/RoundFolderZip";
import RoundLogIn from "@/ui/icons/RoundLogIn";
import RoundLogOut from "@/ui/icons/RoundLogOut";
import RoundMemory from "@/ui/icons/RoundMemory";
import RoundSearch from "@/ui/icons/RoundSearch";
import RoundSettingsEthernet from "@/ui/icons/RoundSettingsEthernet";
import RoundStarFilled from "@/ui/icons/RoundStarFilled";
import RoundTimer from "@/ui/icons/RoundTimer";
import RoundWifi from "@/ui/icons/RoundWifi";
import TopSpeed20Filled from "@/ui/icons/TopSpeed20Filled";
import { ConnectedHeader } from "../components/ConnectedHeader";
import { ShellDialog } from "../components/Modal";
import { TokenDialog } from "../components/TokenDialog";
import { useAgent } from "../lib/AgentContext";
import { agentId, errorMessage, isUnauthenticated, type AgentConnection } from "../lib/agent";
import { useHostStats, useNow } from "../lib/hooks";
import { connectionKind, formatGB, timeAgo } from "../lib/minecraft";
import type { ConnectionPageProps } from "./types";

type Message = { tone: "busy" | "ok" | "error"; text: string };

const NOT_YET = "Needs an Agent update";

const kindBadge = {
  "This PC": "gray",
  "Local network": "gray",
  Tailscale: "blue",
  Internet: "amber",
} as const;

function osName(os: string): string {
  if (os === "linux") return "Linux";
  if (os === "darwin") return "macOS";
  if (os === "windows") return "Windows";
  return os;
}

function Connection({ onNavigate, settings, onSettingsChange }: ConnectionPageProps) {
  const {
    clients,
    info,
    connection,
    status,
    connectionError,
    connectedAt,
    latencyMs,
    connect,
    disconnect,
    signOut,
    savedAgents,
    saveCurrentAgent,
    forgetSavedAgent,
  } = useAgent();
  const stats = useHostStats();
  const now = useNow(15_000);
  const [message, setMessage] = useState<Message | null>(null);
  const [tokenPrompt, setTokenPrompt] = useState<{ target: AgentConnection; error: string | null } | null>(null);
  const [helpOpen, setHelpOpen] = useState(false);

  const connected = status === "connected";
  const lost = status === "lost";
  const busy = message?.tone === "busy";
  const currentId = clients && connection ? agentId(connection) : null;
  const hostName = info?.hostname || connection?.address || "your Agent";
  const live = connected && stats !== null;

  // `typed` is what's in the box right now (for Enter, which can beat React's update).
  function readForm(typed: { address?: string; port?: string } = {}): AgentConnection | null {
    const address = (typed.address ?? settings.address).trim().replace(/^https?:\/\//, "").replace(/\/+$/, "");
    const port = (typed.port ?? settings.port).trim() || "7122";
    if (!address) {
      setMessage({ tone: "error", text: "Enter the Agent's address, like 192.168.1.50." });
      return null;
    }
    if (!/^\d+$/.test(port) || Number(port) < 1 || Number(port) > 65535) {
      setMessage({ tone: "error", text: "The port must be a number between 1 and 65535." });
      return null;
    }
    return { address, port, token: settings.token.trim() };
  }

  // Returns true when connected. Asks for the token when it's missing or wrong.
  async function attempt(target: AgentConnection, fromTokenWindow = false): Promise<boolean> {
    if (!target.token) {
      setTokenPrompt({ target, error: null });
      return false;
    }
    setMessage({ tone: "busy", text: `Connecting to ${target.address}…` });
    try {
      const answer = await connect(target);
      onSettingsChange({ ...settings, address: target.address, port: target.port, token: target.token });
      setMessage({ tone: "ok", text: `Connected to ${answer.hostname || target.address}` });
      setTokenPrompt(null);
      return true;
    } catch (err) {
      if (isUnauthenticated(err)) {
        setMessage(null);
        setTokenPrompt({
          target: { ...target, token: "" },
          error: fromTokenWindow || target.token ? "That token didn't work. Copy it again from the server PC." : null,
        });
      } else if (fromTokenWindow) {
        setMessage(null);
        setTokenPrompt({ target, error: errorMessage(err) });
      } else {
        setMessage({ tone: "error", text: errorMessage(err) });
      }
      return false;
    }
  }

  function onConnectClick(typed: { address?: string; port?: string } = {}) {
    if (busy) return;
    const target = readForm(typed);
    if (target) void attempt(target);
  }

  function connectSaved(target: AgentConnection) {
    onSettingsChange({ ...settings, address: target.address, port: target.port, token: target.token });
    void attempt({ address: target.address, port: target.port, token: target.token });
  }

  const pill = connected
    ? { variant: "connected" as const, label: "Connected" }
    : lost
      ? { variant: "connecting" as const, label: "Reconnecting…" }
      : status === "connecting"
        ? { variant: "connecting" as const, label: "Connecting…" }
        : { variant: "disconnected" as const, label: "Not connected" };

  const cardTitle = connected
    ? `Connected to ${hostName}`
    : lost
      ? `Reconnecting to ${hostName}…`
      : status === "connecting"
        ? "Connecting…"
        : "Not connected";

  const cardDetail =
    clients && connection
      ? [
          `${connection.address}:${connection.port}`,
          info ? `Agent v${info.agentVersion} on ${osName(info.os)}` : null,
          lost && connectionError ? connectionError : connectedAt ? `Connected ${timeAgo(connectedAt, now)}` : null,
        ]
          .filter(Boolean)
          .join(" · ")
      : connectionError ?? "Enter your Agent's address below, then press Connect.";

  // The line next to the Connect button.
  const statusLine: Message | null =
    message ??
    (connected
      ? { tone: "ok", text: latencyMs !== null ? `Connected · ${latencyMs} ms` : "Connected" }
      : lost && connectionError
        ? { tone: "error", text: connectionError }
        : !clients && connectionError
          ? { tone: "error", text: connectionError }
          : null);

  return (
    <div className="flex w-full flex-col items-start rounded-[4px] bg-[#0b0d10] min-h-full font-['Inter']">
      <PageShell
        className="h-auto w-full flex-none"
        header={<ConnectedHeader />}
        tabs={
          <TabBar selected={clients ? "connection-connected" : "connection-disconnected"} onNavigate={onNavigate} />
        }
        title="Connection"
        subtitle="Manage the Tinker Agent this app talks to."
        actions={<StatusPill variant={pill.variant} label={pill.label} />}
      >
        <div className="flex w-full flex-col items-start gap-4 rounded-xl border border-solid border-[#1f242b] bg-[#12151a] px-5 py-5 mobile:px-4">
          <div className="flex w-full items-center gap-3">
            <div
              className={
                connected
                  ? "flex h-11 w-11 flex-none items-center justify-center rounded-[10px] border border-solid border-[#22c55e80] bg-[#0f2418]"
                  : lost || status === "connecting"
                    ? "flex h-11 w-11 flex-none items-center justify-center rounded-[10px] border border-solid border-[#f59e0b80] bg-[#2a1f0a]"
                    : "flex h-11 w-11 flex-none items-center justify-center rounded-[10px] border border-solid border-[#2a3038] bg-[#1a1e23]"
              }
            >
              <RoundWifi
                className={`font-['Inter'] text-[22px] font-[400] leading-[24px] ${
                  connected ? "text-[#86efac]" : lost || status === "connecting" ? "text-[#fcd34d]" : "text-[#9ca3af]"
                }`}
              />
            </div>
            <div className="flex grow shrink-0 basis-0 flex-col items-start gap-0.5">
              <span className="font-['Inter'] text-[18px] font-[700] leading-[26px] text-[#ffffff]">{cardTitle}</span>
              <span className="font-['Inter'] text-[12px] font-[400] leading-[16px] text-[#7a828e]">{cardDetail}</span>
            </div>
            {clients ? (
              <PrimaryButton
                icon={<RoundLogOut />}
                text="Disconnect"
                color="gray"
                size="sm"
                onClick={() => {
                  disconnect();
                  setMessage({ tone: "ok", text: "Disconnected. Your address and token are still saved." });
                }}
              />
            ) : null}
          </div>
          <div className="w-full items-start gap-2 grid grid-cols-4 mobile:grid mobile:grid-cols-2">
            <StatCard
              className="h-auto grow shrink-0 basis-0 self-stretch"
              icon={<TopSpeed20Filled />}
              label="Latency"
              value={connected && latencyMs !== null ? `${latencyMs} ms` : "—"}
            />
            <StatCard
              className="h-auto grow shrink-0 basis-0 self-stretch"
              icon={<RoundSettingsEthernet />}
              label="Connection"
              value={clients && connection ? connectionKind(connection.address) : "—"}
            />
            <StatCard
              className="h-auto grow shrink-0 basis-0 self-stretch"
              icon={<RoundSettingsEthernet />}
              label="Agent version"
              value={info && clients ? `v${info.agentVersion}` : "—"}
            />
            <StatCard
              className="h-auto grow shrink-0 basis-0 self-stretch"
              icon={<RoundTimer />}
              label="Agent uptime"
              value="—"
              title={NOT_YET}
            />
            <StatCard
              className="h-auto grow shrink-0 basis-0 self-stretch"
              icon={<RoundTimer />}
              label="Host uptime"
              value="—"
              title={NOT_YET}
            />
            <StatCard
              className="h-auto grow shrink-0 basis-0 self-stretch"
              icon={<RoundMemory />}
              label="Host CPU"
              value={live ? `${Math.round(stats.cpuPercent)}%` : "—"}
            />
            <StatCard
              className="h-auto grow shrink-0 basis-0 self-stretch"
              icon={<RoundMemory />}
              label="Host memory"
              value={live ? `${formatGB(stats.memUsedBytes)} / ${formatGB(stats.memTotalBytes)} GB` : "—"}
            />
            <StatCard
              className="h-auto grow shrink-0 basis-0 self-stretch"
              icon={<RoundFolderZip />}
              label="Storage"
              value="—"
              title={NOT_YET}
            />
          </div>
        </div>
        <div className="w-full items-start gap-6 grid grid-cols-2 mobile:grid mobile:grid-cols-1">
          <SectionCard
            title="Tinker Agent address"
            description="The PC running Tinker Agent. The installer prints it at the end."
          >
            <div className="flex w-full flex-col items-start gap-4 px-5 py-5 mobile:px-4">
              <div className="flex w-full items-start mobile:flex-col mobile:gap-3">
                <InputField
                  className="min-w-0 grow shrink basis-0 mobile:w-full"
                  required={true}
                  title="Address"
                  input={
                    <input
                      className="h-10 min-w-[0px] grow shrink-0 basis-0 rounded-l-[8px] border border-solid border-[#2a3038] bg-[#0b0d10] px-3 font-['Inter'] text-[14px] font-[400] leading-[20px] text-[#ffffff] outline-none placeholder:text-[#7a828e] focus:border-[#22c55e]"
                      placeholder="192.168.1.xxx"
                      value={settings.address}
                      type="text"
                      spellCheck={false}
                      onChange={(event) => onSettingsChange({ ...settings, address: event.target.value })}
                      onKeyDown={(event) => {
                        if (event.key === "Enter") onConnectClick({ address: event.currentTarget.value });
                      }}
                    />
                  }
                />
                <InputField
                  className="h-auto w-32 flex-none mobile:w-full"
                  required={true}
                  title="Port"
                  input={
                    <input
                      className="h-10 w-28 flex-none rounded-r-[8px] border border-solid border-[#2a3038] bg-[#0b0d10] px-3 font-['Inter'] text-[14px] font-[400] leading-[20px] text-[#ffffff] outline-none placeholder:text-[#7a828e] focus:border-[#22c55e] mobile:grow mobile:shrink-0 mobile:basis-0"
                      placeholder="7122"
                      value={settings.port}
                      type="text"
                      inputMode="numeric"
                      onChange={(event) => onSettingsChange({ ...settings, port: event.target.value })}
                      onKeyDown={(event) => {
                        if (event.key === "Enter") onConnectClick({ port: event.currentTarget.value });
                      }}
                    />
                  }
                />
              </div>
              <div className="flex w-full flex-wrap items-center gap-3 border-t border-solid border-[#1f242b] pt-4">
                <PrimaryButton
                  icon={<RoundLogIn />}
                  text={busy ? "Connecting…" : clients ? "Reconnect" : "Connect"}
                  disabled={busy}
                  onClick={() => onConnectClick()}
                />
                {statusLine ? (
                  <div className="flex min-w-0 items-center gap-1">
                    {statusLine.tone === "busy" ? (
                      <Loader className="text-[14px] text-[#9ca3af]" />
                    ) : statusLine.tone === "ok" ? (
                      <RoundCheckCircleOutline className="font-['Inter'] text-[14px] font-[400] leading-[16px] text-[#86efac]" />
                    ) : (
                      <OutlineCancel className="font-['Inter'] text-[14px] font-[400] leading-[16px] text-[#fca5a5]" />
                    )}
                    <span
                      className={`font-['Inter'] text-[12px] font-[500] leading-[16px] ${
                        statusLine.tone === "busy"
                          ? "text-[#9ca3af]"
                          : statusLine.tone === "ok"
                            ? "text-[#86efac]"
                            : "text-[#fca5a5]"
                      }`}
                    >
                      {statusLine.text}
                    </span>
                  </div>
                ) : null}
              </div>
            </div>
          </SectionCard>
          <SectionCard title="Security & network" description="How Dash reaches the Agent.">
            <SettingRow
              title="Allow self-signed certificates"
              description="Coming soon. The Agent doesn't use HTTPS yet, so there's no certificate to check."
              control={<Switch checked={false} disabled={true} />}
              divider={true}
            />
            <SettingRow
              title="Connection Tunnel"
              description="Use Tinker outside your home network without Tailscale or port forwarding."
              badge={<Badge label="Plus" variant="plus" />}
              control={<Switch checked={false} disabled={true} />}
              divider={true}
            />
            <SettingRow
              title="Auto connect"
              description="When Tinker opens, connect to this Agent with your saved token."
              control={
                <Switch
                  checked={settings.autoConnect}
                  onCheckedChange={(autoConnect: boolean) => onSettingsChange({ ...settings, autoConnect })}
                />
              }
            />
          </SectionCard>
        </div>
        <SectionCard
          title="Saved Agents"
          description="Switch between server PCs you've connected to before."
          headerAction={
            <PrimaryButton
              icon={<RoundAdd />}
              text={currentId && savedAgents.some((a) => a.id === currentId) ? "Update saved Agent" : "Save Current Agent"}
              color="gray"
              size="sm"
              disabled={!clients}
              onClick={() => {
                if (!clients) return;
                saveCurrentAgent();
                setMessage({ tone: "ok", text: `Saved ${hostName}` });
              }}
            />
          }
        >
          {savedAgents.length === 0 ? (
            <div className="flex w-full px-5 py-4">
              <span className="font-['Inter'] text-[13px] font-[400] leading-[18px] text-[#7a828e]">
                Nothing saved yet. Connect to an Agent, then press Save Current Agent.
              </span>
            </div>
          ) : (
            savedAgents.map((saved, index) => {
              const kind = connectionKind(saved.address);
              const isCurrent = saved.id === currentId;
              return (
                <SettingRow
                  key={saved.id}
                  title={saved.name}
                  description={[
                    saved.id,
                    kind,
                    saved.agentVersion ? `Agent v${saved.agentVersion}` : null,
                    !isCurrent && saved.lastConnectedAt ? `Last connected ${timeAgo(saved.lastConnectedAt, now)}` : null,
                    saved.token ? null : "Signed out",
                  ]
                    .filter(Boolean)
                    .join(" · ")}
                  badge={
                    isCurrent ? <Badge label="Current" variant="green" /> : <Badge label={kind} variant={kindBadge[kind]} />
                  }
                  control={
                    <>
                      <PrimaryButton
                        icon={<RoundDelete />}
                        text="Forget"
                        color="gray-dangerous"
                        size="sm"
                        onClick={() => forgetSavedAgent(saved.id)}
                      />
                      {isCurrent ? null : (
                        <PrimaryButton
                          icon={<RoundLogIn />}
                          text="Connect"
                          size="sm"
                          disabled={busy}
                          onClick={() => {
                            if (!busy) connectSaved(saved);
                          }}
                        />
                      )}
                    </>
                  }
                  divider={index < savedAgents.length - 1}
                />
              );
            })
          )}
        </SectionCard>
        <div className="w-full items-start gap-6 grid grid-cols-2 mobile:grid mobile:grid-cols-1">
          <SectionCard title="Account" description="How you're signed in to this Agent.">
            <SettingRow
              title={clients ? "Signed in with the Agent token" : "Not signed in"}
              description={
                clients
                  ? `Full access to every server on ${hostName}. Anyone with this token can control the Agent.`
                  : settings.token.trim()
                    ? "Your token is saved. Press Connect to sign in again."
                    : "Press Connect and paste the token from your server PC."
              }
              badge={clients ? <Badge label="Administrator" icon={<RoundStarFilled />} variant="amber" /> : undefined}
              control={
                <PrimaryButton
                  icon={<RoundLogOut />}
                  text="Sign out"
                  color="gray"
                  size="sm"
                  disabled={!clients}
                  onClick={() => {
                    if (!clients) return;
                    signOut();
                    onSettingsChange({ ...settings, token: "" });
                    setMessage({ tone: "ok", text: "Signed out. The token was removed from this computer." });
                  }}
                />
              }
            />
          </SectionCard>
          <SectionCard title="Help" description="Stuck connecting? Start here.">
            <SettingRow
              title="Can't connect?"
              description="Check the Agent, address, firewall and token step by step."
              control={
                <PrimaryButton
                  icon={<RoundSearch />}
                  text="Troubleshooting guide"
                  color="gray"
                  size="sm"
                  onClick={() => setHelpOpen(true)}
                />
              }
            />
          </SectionCard>
        </div>
      </PageShell>

      <TokenDialog
        open={tokenPrompt !== null}
        error={tokenPrompt?.error}
        onClose={() => setTokenPrompt(null)}
        onSubmit={async (token) => {
          if (!tokenPrompt) return;
          const ok = await attempt({ ...tokenPrompt.target, token }, true);
          if (!ok) throw new Error("not connected");
        }}
      />

      <ShellDialog
        open={helpOpen}
        onClose={() => setHelpOpen(false)}
        icon={<BaselineHelp />}
        title="Can't connect?"
        description="Go through these in order. Most problems are the first two."
        className="w-[560px]"
        footer={<PrimaryButton icon={null} text="Close" color="gray" onClick={() => setHelpOpen(false)} />}
      >
        {[
          ["Is the Agent running?", "On the server PC, run: systemctl status tinker-agent — it should say “active (running)”."],
          ["Is the address right?", "Use the server PC's local IP, like 192.168.1.50. On the server PC, run: hostname -I"],
          ["Is the port open?", "On the server PC, run: sudo ufw allow from 192.168.0.0/16 to any port 7122 proto tcp"],
          ["Is the token right?", "On the server PC, run: sudo cat /etc/tinker-agent.env and copy the TINKER_TOKEN value."],
          ["Same network?", "This computer and the server PC need to be on the same Wi-Fi, or both on Tailscale."],
        ].map(([title, body], index) => (
          <div key={title} className="flex w-full items-start gap-3">
            <div className="flex h-6 w-6 flex-none items-center justify-center rounded-full border border-solid border-[#22c55e80] bg-[#0f2418]">
              <span className="font-['Inter'] text-[12px] font-[700] leading-[16px] text-[#86efac]">{index + 1}</span>
            </div>
            <div className="flex grow shrink-0 basis-0 flex-col items-start gap-0.5">
              <span className="font-['Inter'] text-[14px] font-[600] leading-[20px] text-[#ffffff]">{title}</span>
              <span className="font-['Inter'] text-[13px] font-[400] leading-[18px] text-[#9ca3af]">{body}</span>
            </div>
          </div>
        ))}
      </ShellDialog>
    </div>
  );
}

export default Connection;
