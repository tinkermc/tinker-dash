// Shares ONE Agent connection with every page in Dash: the connection, a health
// check, the list of servers, which server is selected, and the start / stop /
// restart / create / import actions.
// Wrap the app in <AgentProvider>, then call useAgent() in any page.
import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import type { GetInfoResponse } from "../gen/tinker/v1/agent_pb";
import type { Server } from "../gen/tinker/v1/server_pb";
import {
  agentId,
  errorMessage,
  isUnauthenticated,
  loadAutoConnect,
  loadConnection,
  loadSavedAgents,
  makeClients,
  saveConnection,
  storeSavedAgents,
  type AgentClients,
  type AgentConnection,
  type SavedAgent,
} from "./agent";
import { notify } from "./notify";
import { readPref, writePref } from "./prefs";

export type AgentStatus = "disconnected" | "connecting" | "connected" | "lost";
export type PendingAction = "starting" | "stopping" | "restarting";

type ServersClient = AgentClients["servers"];
export type CreateServerInput = Parameters<ServersClient["createServer"]>[0];
export type ImportServerInput = Parameters<ServersClient["importServer"]>[0];

type AgentState = {
  clients: AgentClients | null; // null = not connected
  info: GetInfoResponse | null; // the Agent's hostname and version
  connection: AgentConnection | null; // what was typed in last time
  status: AgentStatus; // "lost" = was connected, health check is failing
  connectionError: string | null;
  connectedAt: number | null;
  latencyMs: number | null;
  connect: (connection: AgentConnection) => Promise<GetInfoResponse>; // throws if it fails
  disconnect: () => void;
  signOut: () => void; // forget the token, then disconnect

  savedAgents: SavedAgent[];
  saveCurrentAgent: () => void;
  forgetSavedAgent: (id: string) => void;

  servers: Server[];
  serversLoaded: boolean;
  refreshServers: () => Promise<void>;
  selectedServer: Server | null;
  selectServer: (id: string) => void;

  pending: Record<string, PendingAction>; // a Start/Stop/Restart that's still in progress
  startServer: (id: string) => Promise<void>;
  stopServer: (id: string) => Promise<void>;
  restartServer: (id: string) => Promise<void>;
  createServer: (request: CreateServerInput) => Promise<Server | undefined>; // throws if it fails
  importServer: (request: ImportServerInput) => Promise<Server | undefined>; // throws if it fails
};

const PING_EVERY_MS = 5000;
const AUTO_RETRY_MS = 5000; // auto-connect retries while the Agent can't be reached
const REFRESH_SERVERS_EVERY_MS = 3000;

const sleep = (ms: number) => new Promise<void>((resolve) => setTimeout(resolve, ms));
const selectedServerKey = (connection: AgentConnection) => `tinker.selectedServer.${agentId(connection)}`;

const AgentContext = createContext<AgentState | null>(null);

export function AgentProvider({ children }: { children: ReactNode }) {
  const [clients, setClients] = useState<AgentClients | null>(null);
  const [info, setInfo] = useState<GetInfoResponse | null>(null);
  const [connection, setConnection] = useState<AgentConnection | null>(loadConnection);
  const [status, setStatus] = useState<AgentStatus>("disconnected");
  const [connectionError, setConnectionError] = useState<string | null>(null);
  const [connectedAt, setConnectedAt] = useState<number | null>(null);
  const [latencyMs, setLatencyMs] = useState<number | null>(null);
  const [savedAgents, setSavedAgents] = useState<SavedAgent[]>(loadSavedAgents);
  const [servers, setServers] = useState<Server[]>([]);
  const [serversLoaded, setServersLoaded] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [pending, setPending] = useState<Record<string, PendingAction>>({});

  // Refs let long-running loops read the latest values.
  const clientsRef = useRef<AgentClients | null>(null);
  clientsRef.current = clients;
  const serversRef = useRef<Server[]>([]);
  serversRef.current = servers;
  const statusRef = useRef<AgentStatus>(status);
  statusRef.current = status;
  const connectAttempt = useRef(0);

  const updateSavedAgents = useCallback((update: (list: SavedAgent[]) => SavedAgent[]) => {
    setSavedAgents((old) => {
      const next = update(old);
      storeSavedAgents(next);
      return next;
    });
  }, []);

  // ---- Connect / disconnect -------------------------------------------------

  const connect = useCallback(
    async (next: AgentConnection) => {
      const attempt = ++connectAttempt.current;
      const clean: AgentConnection = {
        address: next.address.trim(),
        port: next.port.trim() || "7122",
        token: next.token.trim(),
      };
      const c = makeClients(clean);
      const wasConnected = clientsRef.current !== null;
      if (!wasConnected) setStatus("connecting");
      const started = performance.now();
      try {
        const answer = await c.agent.getInfo({}, { timeoutMs: 6000 }); // proves address + token work
        if (attempt !== connectAttempt.current) return answer; // a newer attempt took over
        saveConnection(clean);
        setConnection(clean);
        setClients(c);
        setInfo(answer);
        setStatus("connected");
        setConnectionError(null);
        setConnectedAt(Date.now());
        setLatencyMs(Math.round(performance.now() - started));
        setServers([]);
        setServersLoaded(false);
        setPending({});
        setSelectedId(readPref<string | null>(selectedServerKey(clean), null));
        const id = agentId(clean);
        updateSavedAgents((list) =>
          list.map((a) =>
            a.id === id
              ? { ...a, ...clean, name: answer.hostname || a.name, agentVersion: answer.agentVersion, lastConnectedAt: Date.now() }
              : a,
          ),
        );
        return answer;
      } catch (err) {
        if (attempt === connectAttempt.current && !wasConnected) setStatus("disconnected");
        throw err;
      }
    },
    [updateSavedAgents],
  );

  const disconnect = useCallback(() => {
    connectAttempt.current++;
    setClients(null);
    setInfo(null);
    setStatus("disconnected");
    setConnectionError(null);
    setConnectedAt(null);
    setLatencyMs(null);
    setServers([]);
    setServersLoaded(false);
    setPending({});
  }, []);

  const signOut = useCallback(() => {
    if (connection) {
      const next = { ...connection, token: "" };
      saveConnection(next);
      setConnection(next);
      const id = agentId(connection);
      updateSavedAgents((list) => list.map((a) => (a.id === id ? { ...a, token: "" } : a)));
    }
    disconnect();
  }, [connection, disconnect, updateSavedAgents]);

  // Auto-connect when Dash opens, using the saved connection. If the Agent
  // can't be reached yet (say the server PC is still booting), keep trying
  // every few seconds until it answers, or until you connect or disconnect yourself.
  useEffect(() => {
    if (!loadAutoConnect()) return;
    const saved = loadConnection();
    if (!saved?.address || !saved.token) return;
    let cancelled = false;
    let timer: number | undefined;
    const tryConnect = () => {
      connect(saved).catch((err) => {
        if (cancelled) return;
        setConnectionError(errorMessage(err));
        if (isUnauthenticated(err)) return; // a wrong token won't fix itself
        const mine = connectAttempt.current;
        setStatus("connecting"); // still trying
        timer = window.setTimeout(() => {
          // Stop if you connected, disconnected or picked another Agent meanwhile.
          if (cancelled || connectAttempt.current !== mine || clientsRef.current) return;
          tryConnect();
        }, AUTO_RETRY_MS);
      });
    };
    tryConnect();
    return () => {
      cancelled = true;
      window.clearTimeout(timer);
    };
  }, [connect]);

  // Health check: ask the Agent "who are you?" every few seconds. This also
  // measures latency and notices when the Agent goes away (and comes back).
  useEffect(() => {
    if (!clients) return;
    let stopped = false;
    const timer = window.setInterval(async () => {
      const started = performance.now();
      try {
        const answer = await clients.agent.getInfo({}, { timeoutMs: 4000 });
        if (stopped) return;
        setLatencyMs(Math.round(performance.now() - started));
        setInfo((old) =>
          old && old.agentVersion === answer.agentVersion && old.hostname === answer.hostname && old.os === answer.os ? old : answer,
        );
        if (statusRef.current === "lost") notify.success("Reconnected to the Agent");
        setStatus("connected");
        setConnectionError(null);
      } catch (err) {
        if (stopped) return;
        setLatencyMs(null);
        setConnectionError(errorMessage(err));
        if (statusRef.current === "connected") notify.error("Lost connection to the Agent", errorMessage(err));
        setStatus("lost");
      }
    }, PING_EVERY_MS);
    return () => {
      stopped = true;
      window.clearInterval(timer);
    };
  }, [clients]);

  // ---- Saved Agents ---------------------------------------------------------

  const saveCurrentAgent = useCallback(() => {
    if (!connection) return;
    const id = agentId(connection);
    const entry: SavedAgent = {
      ...connection,
      id,
      name: info?.hostname || connection.address,
      agentVersion: info?.agentVersion,
      lastConnectedAt: Date.now(),
    };
    updateSavedAgents((list) => [entry, ...list.filter((a) => a.id !== id)]);
  }, [connection, info, updateSavedAgents]);

  const forgetSavedAgent = useCallback(
    (id: string) => updateSavedAgents((list) => list.filter((a) => a.id !== id)),
    [updateSavedAgents],
  );

  // ---- Servers --------------------------------------------------------------

  const refreshServers = useCallback(async () => {
    const c = clientsRef.current;
    if (!c) return;
    try {
      const res = await c.servers.listServers({}, { timeoutMs: 8000 });
      if (clientsRef.current !== c) return; // switched Agents meanwhile
      setServers(res.servers);
      setServersLoaded(true);
    } catch {
      // the health check reports connection problems
    }
  }, []);

  const online = clients !== null && status !== "lost";
  useEffect(() => {
    if (!online) return;
    void refreshServers();
    const timer = window.setInterval(() => void refreshServers(), REFRESH_SERVERS_EVERY_MS);
    return () => window.clearInterval(timer);
  }, [clients, online, refreshServers]);

  const selectedServer = useMemo(() => servers.find((s) => s.id === selectedId) ?? null, [servers, selectedId]);

  // Pick a server automatically when none is picked (or it disappeared).
  useEffect(() => {
    if (!serversLoaded) return;
    if (servers.length === 0) {
      if (selectedId !== null) setSelectedId(null);
      return;
    }
    if (!selectedId || !servers.some((s) => s.id === selectedId)) {
      setSelectedId((servers.find((s) => s.running) ?? servers[0]).id);
    }
  }, [servers, serversLoaded, selectedId]);

  useEffect(() => {
    if (connection && selectedId) writePref(selectedServerKey(connection), selectedId);
  }, [connection, selectedId]);

  const selectServer = useCallback((id: string) => setSelectedId(id), []);

  // ---- Start / stop / restart -----------------------------------------------

  const setPendingFor = useCallback((id: string, action: PendingAction | null) => {
    setPending((old) => {
      const next = { ...old };
      if (action) next[id] = action;
      else delete next[id];
      return next;
    });
  }, []);

  const nameOf = (id: string) => serversRef.current.find((s) => s.id === id)?.name || id;

  // Stop returns right away (the Agent sends "stop", then force-stops after
  // 60 s), so poll until Java has really exited.
  async function waitUntilStopped(c: AgentClients, id: string, timeoutMs = 75_000) {
    const until = Date.now() + timeoutMs;
    while (Date.now() < until) {
      await sleep(1000);
      try {
        const res = await c.servers.getServerStatus({ serverId: id }, { timeoutMs: 4000 });
        if (!res.running) return true;
      } catch {
        // keep waiting; the health check reports connection problems
      }
    }
    return false;
  }

  const startServer = useCallback(
    async (id: string) => {
      const c = clientsRef.current;
      if (!c) return;
      setPendingFor(id, "starting");
      try {
        await c.servers.startServer({ serverId: id });
        notify.info(`Starting ${nameOf(id)}…`, "Follow along in the Console tab.");
      } catch (err) {
        notify.error(`Couldn't start ${nameOf(id)}`, errorMessage(err));
      } finally {
        setPendingFor(id, null);
        void refreshServers();
      }
    },
    [refreshServers, setPendingFor],
  );

  const stopServer = useCallback(
    async (id: string) => {
      const c = clientsRef.current;
      if (!c) return;
      setPendingFor(id, "stopping");
      try {
        await c.servers.stopServer({ serverId: id });
        if (await waitUntilStopped(c, id)) notify.success(`${nameOf(id)} stopped`);
        else notify.error(`${nameOf(id)} is still stopping`, "It didn't stop within a minute. Check the Console tab.");
      } catch (err) {
        notify.error(`Couldn't stop ${nameOf(id)}`, errorMessage(err));
      } finally {
        setPendingFor(id, null);
        void refreshServers();
      }
    },
    [refreshServers, setPendingFor],
  );

  // Restart = stop, wait, start. Dash does the steps itself, so if Dash is
  // closed halfway the server stays stopped. A RestartServer call in the Agent
  // would fix that (see the To-Do doc).
  const restartServer = useCallback(
    async (id: string) => {
      const c = clientsRef.current;
      if (!c) return;
      setPendingFor(id, "restarting");
      try {
        const { running } = await c.servers.getServerStatus({ serverId: id });
        if (running) {
          await c.servers.stopServer({ serverId: id });
          if (!(await waitUntilStopped(c, id))) {
            throw new Error("it didn't stop within a minute, so it wasn't started again");
          }
        }
        await c.servers.startServer({ serverId: id });
        notify.info(`Restarting ${nameOf(id)}…`, "Follow along in the Console tab.");
      } catch (err) {
        notify.error(`Couldn't restart ${nameOf(id)}`, errorMessage(err));
      } finally {
        setPendingFor(id, null);
        void refreshServers();
      }
    },
    [refreshServers, setPendingFor],
  );

  // ---- Create / import ------------------------------------------------------

  const createServer = useCallback(
    async (request: CreateServerInput) => {
      const c = clientsRef.current;
      if (!c) throw new Error("Not connected to an Agent.");
      const res = await c.servers.createServer(request);
      await refreshServers();
      if (res.server) setSelectedId(res.server.id);
      return res.server;
    },
    [refreshServers],
  );

  const importServer = useCallback(
    async (request: ImportServerInput) => {
      const c = clientsRef.current;
      if (!c) throw new Error("Not connected to an Agent.");
      const res = await c.servers.importServer(request);
      await refreshServers();
      if (res.server) setSelectedId(res.server.id);
      return res.server;
    },
    [refreshServers],
  );

  return (
    <AgentContext.Provider
      value={{
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
        servers,
        serversLoaded,
        refreshServers,
        selectedServer,
        selectServer,
        pending,
        startServer,
        stopServer,
        restartServer,
        createServer,
        importServer,
      }}
    >
      {children}
    </AgentContext.Provider>
  );
}

export function useAgent(): AgentState {
  const state = useContext(AgentContext);
  if (!state) throw new Error("useAgent() must be used inside <AgentProvider>");
  return state;
}
