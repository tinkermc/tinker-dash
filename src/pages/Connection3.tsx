import { useState } from "react";
import { AppHeader } from "@/ui/components/AppHeader";
import { PrimaryButton } from "@/ui/components/PrimaryButton";
import { StatCard } from "@/ui/components/StatCard";
import { StatusPill } from "@/ui/components/StatusPill";
import { Switch } from "@/ui/components/Switch";
import { TabBar } from "@/ui/components/TabBar";
import RoundCheckCircleOutline from "@/ui/icons/RoundCheckCircleOutline";
import RoundLogIn from "@/ui/icons/RoundLogIn";
import RoundMemory from "@/ui/icons/RoundMemory";
import RoundSettingsEthernet from "@/ui/icons/RoundSettingsEthernet";
import RoundWifi from "@/ui/icons/RoundWifi";
import TopSpeed20Filled from "@/ui/icons/TopSpeed20Filled";
import type { ConnectionPageProps } from "./types";

import { ServerType } from "../gen/tinker/v1/server_pb";
import type { ImportableServer } from "../gen/tinker/v1/server_pb";
import { useAgent } from "../lib/AgentContext";
import { errorMessage } from "../lib/agent";
import { useConsole, useHostStats, useServers } from "../lib/hooks";

const inputClass =
  "h-10 min-w-0 rounded-[8px] border border-solid border-[#2a3038] bg-[#0b0d10] px-3 font-['Inter'] text-[14px] text-[#ffffff] outline-none placeholder:text-[#7a828e] focus-within:border-[#22c55e]";

function Connection({ onNavigate, settings, onSettingsChange }: ConnectionPageProps) {
  const { clients, info, connection, connectionError, connect, disconnect } = useAgent();
  const stats = useHostStats();
  const { servers, error: listError, refresh } = useServers();
  const [selected, setSelected] = useState<string | null>(null);
  const lines = useConsole(selected);
  const [command, setCommand] = useState("");
  const [status, setStatus] = useState("");
  const [connecting, setConnecting] = useState(false);
  const [name, setName] = useState("");
  const [type, setType] = useState(ServerType.VANILLA);
  const [version, setVersion] = useState("");
  const [memoryMb, setMemoryMb] = useState(2048);
  const [eula, setEula] = useState(false);
  const [busy, setBusy] = useState(false);
  const [createMsg, setCreateMsg] = useState("");
  const [folder, setFolder] = useState("");
  const [found, setFound] = useState<ImportableServer[]>([]);
  const [importMsg, setImportMsg] = useState("");
  const [importingPath, setImportingPath] = useState<string | null>(null);
  const [actionMsg, setActionMsg] = useState("");
  const isConnected = clients !== null;

  async function onConnect() {
    const address = settings.address.trim();
    const port = settings.port.trim() || "7122";
    const token = settings.token.trim();

    if (!address) {
      setStatus("Enter the Tinker Agent address.");
      return;
    }
    if (!/^\d+$/.test(port) || Number(port) < 1 || Number(port) > 65535) {
      setStatus("Enter a valid port between 1 and 65535.");
      return;
    }
    if (!token) {
      setStatus("Enter the Tinker Agent token.");
      return;
    }

    setConnecting(true);
    setStatus("Connecting…");
    try {
      await connect({ address, port, token });
      setStatus("Connected successfully.");
    } catch (err) {
      setStatus(errorMessage(err));
    } finally {
      setConnecting(false);
    }
  }

  async function onCreate() {
    if (!clients || !name.trim() || !eula) return;
    setBusy(true);
    setCreateMsg("Downloading Minecraft… (can take a minute)");
    try {
      const res = await clients.servers.createServer({
        name: name.trim(),
        type,
        version: version.trim(),
        memoryMb,
        port: 0,
        acceptEula: eula,
      });
      setCreateMsg(
        `Created "${res.server?.name}" (${res.server?.version}) on port ${res.server?.port}.`,
      );
      setName("");
      await refresh();
    } catch (err) {
      setCreateMsg(errorMessage(err));
    } finally {
      setBusy(false);
    }
  }

  async function onFind() {
    if (!clients) return;
    setImportMsg("Searching for servers…");
    try {
      const res = await clients.servers.findImportableServers({ folder: folder.trim() });
      setFound(res.servers);
      setImportMsg(res.servers.length ? "" : "No servers found there.");
    } catch (err) {
      setImportMsg(errorMessage(err));
    }
  }

  async function onImport(server: ImportableServer) {
    if (!clients) return;
    setImportingPath(server.path);
    setImportMsg(`Copying ${server.suggestedName}…`);
    try {
      const res = await clients.servers.importServer({
        path: server.path,
        name: server.suggestedName,
      });
      setImportMsg(`Imported as "${res.server?.name}".`);
      await refresh();
    } catch (err) {
      setImportMsg(errorMessage(err));
    } finally {
      setImportingPath(null);
    }
  }

  async function run(action: () => Promise<unknown>) {
    setActionMsg("");
    try {
      await action();
      window.setTimeout(() => void refresh(), 500);
    } catch (err) {
      setActionMsg(errorMessage(err));
    }
  }

  return (
    <div className="flex h-full flex-col bg-[#0b0d10]">
      <AppHeader
        agentLabel="Agent"
        agentAddress={connection ? `${connection.address}:${connection.port}` : undefined}
        agentStatus={isConnected ? "connected" : "disconnected"}
      />
      <main className="flex min-h-0 w-full flex-1 flex-col items-center overflow-y-auto bg-[#0b0d10] px-6 py-12 mobile:px-4 mobile:pt-6">
        <div className="flex w-full flex-col items-center">
          <TabBar
            selected={isConnected ? "connection-connected" : "connection-disconnected"}
            amountOfModsInstalled="0"
            onNavigate={onNavigate}
          />
          <section className="flex w-full flex-col items-start gap-6 rounded-3xl border border-solid border-[#1f242b] bg-[#111418] px-8 py-6 mobile:px-4">
            <div className="flex w-full items-center justify-between gap-4">
              <h1 className="font-['Inter'] text-[28px] font-[700] leading-[36px] text-[#ffffff]">
                Connection
              </h1>
              <StatusPill variant={isConnected ? "connected" : "disconnected"} />
            </div>
            <div className="flex w-full flex-col items-start gap-6">
              <div className="flex w-full flex-col items-start gap-4 rounded-xl border border-solid border-[#1f242b] bg-[#12151a] px-5 py-5 mobile:px-4">
                <div className="flex w-full items-center gap-3">
                  <div className="flex h-11 w-11 flex-none items-center justify-center rounded-[10px] border border-solid border-[#22c55e80] bg-[#0f2418]">
                    <RoundWifi className="font-['Inter'] text-[22px] font-[400] leading-[24px] text-[#86efac]" />
                  </div>
                  <div className="flex grow shrink-0 basis-0 flex-col items-start gap-0.5">
                    <span className="font-['Inter'] text-[18px] font-[700] leading-[26px] text-[#ffffff]">
                      {isConnected ? `Connected to ${info?.hostname || "Tinker Agent"}` : "Tinker Agent is disconnected"}
                    </span>
                    <span className="font-['Inter'] text-[12px] font-[400] leading-[16px] text-[#7a828e]">
                      {isConnected && connection
                        ? `${connection.address}:${connection.port} · ${info?.os || "Agent"} · Version ${info?.agentVersion || "unknown"}`
                        : "Enter your Agent connection details below to connect."}
                    </span>
                  </div>
                </div>
                <div className="grid w-full grid-cols-5 gap-2 mobile:grid-cols-2">
                  <StatCard
                    className="h-full min-w-0 w-full"
                    icon={<TopSpeed20Filled />}
                    label="Agent version"
                    value={info?.agentVersion || "--"}
                  />
                  <StatCard
                    className="h-full min-w-0 w-full"
                    label="Host"
                    value={info?.hostname || "--"}
                  />
                  <StatCard
                    className="h-full min-w-0 w-full"
                    icon={<RoundMemory />}
                    label="CPU Usage"
                    value={stats ? `${stats.cpuPercent.toFixed(0)}%` : "--"}
                  />
                  <StatCard
                    className="h-full min-w-0 w-full"
                    icon={<RoundSettingsEthernet />}
                    label="Memory"
                    value={
                      stats
                        ? `${(Number(stats.memUsedBytes) / 1024 ** 3).toFixed(1)} / ${(Number(stats.memTotalBytes) / 1024 ** 3).toFixed(1)} GB`
                        : "--"
                    }
                  />
                  <StatCard
                    className="h-full min-w-0 w-full"
                    label="Servers"
                    value={isConnected ? String(servers.length) : "--"}
                  />
                </div>
              </div>
              <div className="flex w-full items-start gap-6 mobile:flex-col">
                <div className="flex min-w-0 grow shrink-0 basis-0 flex-col items-start gap-3 mobile:w-full mobile:flex-none">
                  <span className="font-['Inter'] text-[16px] font-[700] leading-[24px] text-[#ffffff]">
                    Tinker Agent
                  </span>
                  <div className="flex w-full flex-col items-start gap-5 rounded-xl border border-solid border-[#1f242b] bg-[#12151a] px-5 py-5 mobile:px-4">
                    <div className="flex w-full items-end gap-4 mobile:flex-col mobile:items-start">
                      <div className="flex grow shrink-0 basis-0 flex-col items-start gap-2 mobile:grow-0">
                        <div className="flex items-center gap-1.5">
                          <span className="font-['Inter'] text-[14px] font-[500] leading-[20px] text-[#c4c9d1]">
                            Tinker Agent Link
                          </span>
                          <span className="font-['Inter'] text-[13px] font-[500] leading-[20px] text-[#3b9eff] underline hover:text-[#7cbcff]">
                            learn more
                          </span>
                        </div>
                        <div className="flex w-full min-w-0 items-center gap-1 mobile:flex-col mobile:items-stretch">
                          <input
                            className={`${inputClass} min-w-0 w-52 flex-none mobile:w-full`}
                            placeholder="Address (eg. 192.168.1.xxx)"
                            value={settings.address}
                            onChange={(event) =>
                              onSettingsChange({ ...settings, address: event.target.value })
                            }
                            type="text"
                          />
                          <input
                            className={`${inputClass} min-w-0 w-32 flex-none mobile:w-full`}
                            placeholder="Port (eg. 7122)"
                            value={settings.port}
                            onChange={(event) =>
                              onSettingsChange({ ...settings, port: event.target.value })
                            }
                            type="number"
                            min="1"
                            max="65535"
                          />
                          <input
                            className={`${inputClass} min-w-0 grow mobile:w-full`}
                            placeholder="Agent token"
                            value={settings.token}
                            onChange={(event) =>
                              onSettingsChange({ ...settings, token: event.target.value })
                            }
                            type="password"
                            autoComplete="current-password"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex h-px w-full flex-none items-start bg-[#1f242b]" />
                    <div className="flex w-full flex-wrap items-center gap-3">
                      <PrimaryButton
                        icon={<RoundLogIn />}
                        text={connecting ? "Connecting…" : "Connect"}
                        disabled={connecting}
                        onClick={connecting ? undefined : onConnect}
                      />
                      {isConnected && (
                        <PrimaryButton
                          color="gray-dangerous"
                          text="Disconnect"
                          onClick={() => {
                            disconnect();
                            setStatus("");
                            setSelected(null);
                          }}
                        />
                      )}
                      {(status || connectionError) && (
                        <div
                          className={`flex items-center gap-1 text-[12px] ${status === "Connected successfully." ? "text-[#86efac]" : "text-[#fca5a5]"}`}
                          role="status"
                        >
                          {status === "Connected successfully." && <RoundCheckCircleOutline />}
                          <span>{status || connectionError}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div className="flex min-w-0 grow shrink-0 basis-0 flex-col items-start gap-3 self-stretch mobile:w-full mobile:flex-none">
                  <span className="font-['Inter'] text-[16px] font-[700] leading-[24px] text-[#ffffff]">
                    Security &amp; network
                  </span>
                  <div className="flex w-full grow shrink-0 basis-0 flex-col items-start justify-center rounded-xl border border-solid border-[#1f242b] bg-[#12151a]">
                    <div className="flex w-full items-center gap-4 px-5 py-4 mobile:px-4">
                      <div className="flex grow shrink-0 basis-0 flex-col items-start gap-0.5">
                        <span className="font-['Inter'] text-[15px] font-[600] leading-[22px] text-[#ffffff]">
                          Allow self-signed certificates
                        </span>
                        <span className="font-['Inter'] text-[12px] font-[400] leading-[16px] text-[#7a828e]">
                          If connection is failing, try enabling or disabling.
                        </span>
                      </div>
                      <Switch
                        checked={settings.allowSelfSignedCertificates}
                        onCheckedChange={(allowSelfSignedCertificates) =>
                          onSettingsChange({ ...settings, allowSelfSignedCertificates })
                        }
                      />
                    </div>
                    <div className="flex h-px w-full flex-none items-start bg-[#1f242b]" />
                    <div className="flex w-full items-center gap-4 px-5 py-4 mobile:px-4">
                      <div className="flex grow shrink-0 basis-0 flex-col items-start gap-0.5">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="font-['Inter'] text-[15px] font-[600] leading-[22px] text-[#ffffff]">
                            Use Connection Tunnel (no Tailscale, etc)
                          </span>
                          <div className="flex items-center rounded-[9999px] border border-solid border-[#a855f7] bg-[#2e1450] px-1.5 py-0.5">
                            <span className="font-['Inter'] text-[11px] font-[600] leading-[14px] text-[#e9d5ff]">
                              Plus
                            </span>
                          </div>
                        </div>
                        <span className="font-['Inter'] text-[12px] font-[400] leading-[16px] text-[#7a828e]">
                          Makes using Tinker outside your home network seamless.
                          This feature requires Plus.
                        </span>
                      </div>
                      <Switch
                        checked={false}
                        disabled={true}
                        onCheckedChange={() => {}}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex w-full flex-col items-start gap-3">
                <span className="font-['Inter'] text-[16px] font-[700] leading-[24px] text-[#ffffff]">
                  Startup
                </span>
                <div className="flex w-full flex-col items-start rounded-xl border border-solid border-[#1f242b] bg-[#12151a]">
                  <div className="flex w-full items-center gap-4 px-5 py-4 mobile:px-4">
                    <div className="flex grow shrink-0 basis-0 flex-col items-start gap-0.5">
                      <span className="font-['Inter'] text-[15px] font-[600] leading-[22px] text-[#ffffff]">
                        Auto Connect
                      </span>
                      <span className="font-['Inter'] text-[12px] font-[400] leading-[16px] text-[#7a828e]">
                        When Tinker opens, auto connect with my saved
                        credentials.
                      </span>
                    </div>
                    <Switch
                      checked={settings.autoConnect}
                      onCheckedChange={(autoConnect) =>
                        onSettingsChange({ ...settings, autoConnect })
                      }
                    />
                  </div>
                </div>

                {isConnected && clients ? (
                  <>
                    <section className="flex w-full flex-col gap-4 rounded-xl border border-solid border-[#1f242b] bg-[#12151a] p-5 mobile:px-4">
                      <div className="flex w-full items-center justify-between gap-3">
                        <h2 className="font-['Inter'] text-[18px] font-[700] text-white">Managed servers</h2>
                        <button
                          className={`${inputClass} cursor-pointer`}
                          type="button"
                          onClick={() => void refresh()}
                        >
                          Refresh
                        </button>
                      </div>
                      {listError && <p className="text-sm text-[#fca5a5]" role="alert">{listError}</p>}
                      {servers.length === 0 && !listError && (
                        <p className="text-sm text-[#7a828e]">No servers found on this Agent.</p>
                      )}
                      {servers.map((server) => (
                        <div
                          key={server.id}
                          className="flex flex-wrap items-center gap-3 border-t border-[#1f242b] pt-3"
                        >
                          <span className={server.running ? "text-[#86efac]" : "text-[#7a828e]"}>●</span>
                          <span className="min-w-0 grow text-sm text-white">
                            {server.name} · {ServerType[server.type]} {server.version} · port {server.port}
                          </span>
                          <button
                            className={`${inputClass} cursor-pointer`}
                            type="button"
                            onClick={() => setSelected(server.id)}
                          >
                            Console
                          </button>
                          <button
                            className={`${inputClass} cursor-pointer`}
                            type="button"
                            onClick={() =>
                              void run(() =>
                                server.running
                                  ? clients.servers.stopServer({ serverId: server.id })
                                  : clients.servers.startServer({ serverId: server.id }),
                              )
                            }
                          >
                            {server.running ? "Stop" : "Start"}
                          </button>
                        </div>
                      ))}
                      {actionMsg && <p className="text-sm text-[#fca5a5]" role="alert">{actionMsg}</p>}
                      {selected && (
                        <div className="flex flex-col gap-3 border-t border-[#1f242b] pt-4">
                          <h3 className="font-['Inter'] font-[600] text-white">
                            Console: {servers.find((server) => server.id === selected)?.name ?? selected}
                          </h3>
                          <pre className="h-48 overflow-auto whitespace-pre-wrap rounded-md bg-black p-3 text-xs text-[#c4c9d1]">
                            {lines.join("\n") || "Waiting for console output…"}
                          </pre>
                          <form
                            className="flex gap-2"
                            onSubmit={(event) => {
                              event.preventDefault();
                              if (!clients || !command.trim()) return;
                              void run(() =>
                                clients.servers.sendCommand({
                                  serverId: selected,
                                  command: command.trim(),
                                }),
                              );
                              setCommand("");
                            }}
                          >
                            <input
                              className={`${inputClass} grow`}
                              placeholder="Send a server command"
                              value={command}
                              onChange={(event) => setCommand(event.target.value)}
                            />
                            <button
                              className="rounded-[8px] bg-[#22c55e] px-4 font-['Inter'] text-sm font-[600] text-[#04130a] disabled:opacity-50"
                              type="submit"
                              disabled={!command.trim()}
                            >
                              Send
                            </button>
                          </form>
                        </div>
                      )}
                    </section>

                    <section className="grid w-full grid-cols-2 gap-4 mobile:grid-cols-1">
                      <div className="flex flex-col gap-3 rounded-xl border border-solid border-[#1f242b] bg-[#12151a] p-5 mobile:px-4">
                        <h2 className="font-['Inter'] text-[16px] font-[700] text-white">Create a server</h2>
                        <input
                          className={inputClass}
                          placeholder="Server name"
                          value={name}
                          onChange={(event) => setName(event.target.value)}
                        />
                        <div className="flex flex-wrap gap-3">
                          <select
                            className={`${inputClass} grow`}
                            value={type}
                            onChange={(event) => setType(Number(event.target.value) as ServerType)}
                          >
                            <option value={ServerType.VANILLA}>Vanilla</option>
                            <option value={ServerType.PAPER}>Paper</option>
                            <option value={ServerType.FABRIC}>Fabric</option>
                          </select>
                          <input
                            className={`${inputClass} grow`}
                            placeholder="Version (blank = latest)"
                            value={version}
                            onChange={(event) => setVersion(event.target.value)}
                          />
                        </div>
                        <label className="flex items-center gap-3 text-sm text-[#c4c9d1]">
                          Memory
                          <input
                            className={`${inputClass} w-32`}
                            type="number"
                            min="512"
                            step="512"
                            value={memoryMb}
                            onChange={(event) => setMemoryMb(Number(event.target.value))}
                          />
                          MB
                        </label>
                        <label className="flex items-center gap-2 text-sm text-[#c4c9d1]">
                          <input
                            type="checkbox"
                            checked={eula}
                            onChange={(event) => setEula(event.target.checked)}
                          />
                          I agree to the{" "}
                          <a
                            className="text-[#3b9eff] underline"
                            href="https://aka.ms/MinecraftEULA"
                            target="_blank"
                            rel="noreferrer"
                          >
                            Minecraft EULA
                          </a>
                        </label>
                        <button
                          className="self-start rounded-[8px] bg-[#22c55e] px-4 py-2 font-['Inter'] text-sm font-[600] text-[#04130a] disabled:opacity-50"
                          type="button"
                          disabled={busy || !name.trim() || !eula}
                          onClick={() => void onCreate()}
                        >
                          {busy ? "Creating…" : "Create server"}
                        </button>
                        {createMsg && <p className="text-sm text-[#c4c9d1]" role="status">{createMsg}</p>}
                      </div>

                      <div className="flex flex-col gap-3 rounded-xl border border-solid border-[#1f242b] bg-[#12151a] p-5 mobile:px-4">
                        <h2 className="font-['Inter'] text-[16px] font-[700] text-white">Import a server</h2>
                        <div className="flex gap-2">
                          <input
                            className={`${inputClass} grow`}
                            placeholder="Folder on the Agent (blank = search Crafty folders)"
                            value={folder}
                            onChange={(event) => setFolder(event.target.value)}
                          />
                          <button
                            className="rounded-[8px] border border-[#2a3038] bg-[#1a1e23] px-3 text-sm text-white disabled:opacity-50"
                            type="button"
                            onClick={() => void onFind()}
                          >
                            Find
                          </button>
                        </div>
                        {found.map((server) => (
                          <div key={server.path} className="flex flex-wrap items-center gap-2 text-sm text-[#c4c9d1]">
                            <span className="min-w-0 grow">
                              {server.suggestedName} · {server.jar} · port {server.port}
                              <span className="block break-all text-xs text-[#7a828e]">{server.path}</span>
                            </span>
                            <button
                              className="rounded-[8px] border border-[#2a3038] bg-[#1a1e23] px-3 py-2 text-white disabled:opacity-50"
                              type="button"
                              disabled={importingPath !== null}
                              onClick={() => void onImport(server)}
                            >
                              {importingPath === server.path ? "Importing…" : "Import"}
                            </button>
                          </div>
                        ))}
                        {importMsg && <p className="text-sm text-[#c4c9d1]" role="status">{importMsg}</p>}
                      </div>
                    </section>
                  </>
                ) : (
                  <p className="w-full rounded-xl border border-solid border-[#1f242b] bg-[#12151a] p-5 text-sm text-[#7a828e]">
                    Connect to an Agent to view live stats and manage its Minecraft servers.
                  </p>
                )}
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Connection;