// A plain, unstyled test page that uses EVERY Agent feature.
// Use it to prove Dash ↔ Agent works, then copy the bits you need
// into the real Subframe pages (Connection, Server, Console…).
import { useState } from "react";
import { ServerType } from "../gen/tinker/v1/server_pb";
import type { ImportableServer } from "../gen/tinker/v1/server_pb";
import { useAgent } from "../lib/AgentContext";
import { errorMessage } from "../lib/agent";
import { useConsole, useHostStats, useServers } from "../lib/hooks";

const box = "flex flex-col gap-2 rounded-xl border border-solid border-[#1f242b] bg-[#12151a] p-4";
const input = "rounded-md border border-solid border-[#2a3038] bg-[#0b0d10] px-2 py-1 text-white";
const button = "rounded-md bg-[#22c55e] px-3 py-1 font-[600] text-[#04130a] disabled:opacity-50";

export default function AgentTest() {
  const { clients, info, connection, connect, disconnect } = useAgent();

  // ---- 1. Connect ----
  const [address, setAddress] = useState(connection?.address ?? "");
  const [port, setPort] = useState(connection?.port ?? "7122");
  const [token, setToken] = useState(connection?.token ?? "");
  const [status, setStatus] = useState("");

  async function onConnect() {
    setStatus("Connecting…");
    try {
      await connect({ address, port, token });
      setStatus("Connected!");
    } catch (err) {
      setStatus(errorMessage(err));
    }
  }

  // ---- 2. Live data ----
  const stats = useHostStats();
  const { servers, error: listError, refresh } = useServers();
  const [selected, setSelected] = useState<string | null>(null);
  const lines = useConsole(selected);
  const [command, setCommand] = useState("");

  // ---- 3. Create a server ----
  const [name, setName] = useState("");
  const [type, setType] = useState(ServerType.VANILLA);
  const [version, setVersion] = useState(""); // empty = latest
  const [memoryMb, setMemoryMb] = useState(2048);
  const [eula, setEula] = useState(false);
  const [busy, setBusy] = useState(false);
  const [createMsg, setCreateMsg] = useState("");

  async function onCreate() {
    if (!clients) return;
    setBusy(true);
    setCreateMsg("Downloading Minecraft… (can take a minute)");
    try {
      const res = await clients.servers.createServer({ name, type, version, memoryMb, acceptEula: eula });
      setCreateMsg(`Created "${res.server?.name}" (${res.server?.version}) on port ${res.server?.port}`);
      await refresh();
    } catch (err) {
      setCreateMsg(errorMessage(err));
    } finally {
      setBusy(false);
    }
  }

  // ---- 4. Import (Crafty Controller or any folder) ----
  const [folder, setFolder] = useState(""); // empty = Crafty's usual folders
  const [found, setFound] = useState<ImportableServer[]>([]);
  const [importMsg, setImportMsg] = useState("");

  async function onFind() {
    if (!clients) return;
    try {
      const res = await clients.servers.findImportableServers({ folder });
      setFound(res.servers);
      setImportMsg(res.servers.length ? "" : "No servers found there.");
    } catch (err) {
      setImportMsg(errorMessage(err));
    }
  }

  async function onImport(s: ImportableServer) {
    if (!clients) return;
    setImportMsg(`Copying ${s.suggestedName}…`);
    try {
      const res = await clients.servers.importServer({ path: s.path, name: s.suggestedName });
      setImportMsg(`Imported as "${res.server?.name}"`);
      await refresh();
    } catch (err) {
      setImportMsg(errorMessage(err));
    }
  }

  // ---- 5. Start / stop / commands ----
  async function run(action: () => Promise<unknown>) {
    try {
      await action();
      setTimeout(refresh, 500); // give it a moment, then update "running"
    } catch (err) {
      alert(errorMessage(err));
    }
  }

  return (
    <div className="flex min-h-screen flex-col gap-4 bg-[#0b0d10] p-6 font-['Inter'] text-[14px] text-[#e5e7eb]">
      <h1 className="text-[24px] font-[700] text-white">Agent test page</h1>

      <section className={box}>
        <b>1. Connection</b>
        <div className="flex gap-2">
          <input className={input} placeholder="192.168.1.50" value={address} onChange={(e) => setAddress(e.target.value)} />
          <input className={`${input} w-20`} placeholder="7122" value={port} onChange={(e) => setPort(e.target.value)} />
          <input className={`${input} grow`} placeholder="Token" type="password" value={token} onChange={(e) => setToken(e.target.value)} />
          <button className={button} onClick={onConnect}>Connect</button>
          {clients && <button className={button} onClick={disconnect}>Disconnect</button>}
        </div>
        <span>{status}</span>
        {info && <span>Agent {info.agentVersion} on {info.hostname} ({info.os})</span>}
        {stats && (
          <span>
            CPU {stats.cpuPercent.toFixed(0)}% · RAM {(Number(stats.memUsedBytes) / 1e9).toFixed(1)} /{" "}
            {(Number(stats.memTotalBytes) / 1e9).toFixed(1)} GB
          </span>
        )}
      </section>

      {clients && (
        <>
          <section className={box}>
            <b>2. Servers</b>
            {listError && <span className="text-red-400">{listError}</span>}
            {servers.map((s) => (
              <div key={s.id} className="flex items-center gap-2">
                <span className={s.running ? "text-[#22c55e]" : "text-[#7a828e]"}>●</span>
                <span className="grow">
                  {s.name} · {ServerType[s.type]} {s.version} · port {s.port} · {s.memoryMb} MB
                </span>
                <button className={button} onClick={() => setSelected(s.id)}>Console</button>
                {s.running ? (
                  <button className={button} onClick={() => run(() => clients.servers.stopServer({ serverId: s.id }))}>Stop</button>
                ) : (
                  <button className={button} onClick={() => run(() => clients.servers.startServer({ serverId: s.id }))}>Start</button>
                )}
              </div>
            ))}
          </section>

          {selected && (
            <section className={box}>
              <b>Console: {selected}</b>
              <pre className="h-64 overflow-auto whitespace-pre-wrap rounded-md bg-black p-2 text-[12px]">{lines.join("\n")}</pre>
              <form
                className="flex gap-2"
                onSubmit={(e) => {
                  e.preventDefault();
                  run(() => clients.servers.sendCommand({ serverId: selected, command }));
                  setCommand("");
                }}
              >
                <input className={`${input} grow`} placeholder="say hello" value={command} onChange={(e) => setCommand(e.target.value)} />
                <button className={button}>Send</button>
              </form>
            </section>
          )}

          <section className={box}>
            <b>3. Create a server</b>
            <div className="flex flex-wrap gap-2">
              <input className={input} placeholder="Server name" value={name} onChange={(e) => setName(e.target.value)} />
              <select className={input} value={type} onChange={(e) => setType(Number(e.target.value) as ServerType)}>
                <option value={ServerType.VANILLA}>Vanilla</option>
                <option value={ServerType.PAPER}>Paper</option>
                <option value={ServerType.FABRIC}>Fabric</option>
              </select>
              <input className={input} placeholder="Version (empty = latest)" value={version} onChange={(e) => setVersion(e.target.value)} />
              <input className={`${input} w-24`} type="number" value={memoryMb} onChange={(e) => setMemoryMb(Number(e.target.value))} />
              <span className="self-center">MB RAM</span>
            </div>
            <label className="flex items-center gap-2">
              <input type="checkbox" checked={eula} onChange={(e) => setEula(e.target.checked)} />I agree to the{" "}
              <a className="text-[#3b9eff] underline" href="https://aka.ms/MinecraftEULA" target="_blank">Minecraft EULA</a>
            </label>
            <button className={`${button} self-start`} disabled={busy || !name || !eula} onClick={onCreate}>
              {busy ? "Creating…" : "Create server"}
            </button>
            <span>{createMsg}</span>
          </section>

          <section className={box}>
            <b>4. Import from Crafty Controller (or any folder)</b>
            <div className="flex gap-2">
              <input className={`${input} grow`} placeholder="Folder on the server PC (empty = look for Crafty)" value={folder} onChange={(e) => setFolder(e.target.value)} />
              <button className={button} onClick={onFind}>Find servers</button>
            </div>
            {found.map((s) => (
              <div key={s.path} className="flex items-center gap-2">
                <span className="grow">
                  {s.suggestedName} · {s.jar} · port {s.port} · <span className="text-[#7a828e]">{s.path}</span>
                </span>
                <button className={button} onClick={() => onImport(s)}>Import</button>
              </div>
            ))}
            <span>{importMsg}</span>
          </section>
        </>
      )}
    </div>
  );
}