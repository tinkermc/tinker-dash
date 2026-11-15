// How Dash talks to the Tinker Agent. Pages never import the clients directly:
// they use useAgent() from AgentContext.tsx.
import { Code, ConnectError, createClient, type Interceptor } from "@connectrpc/connect";
import { createConnectTransport } from "@connectrpc/connect-web";
import { AgentService } from "../gen/tinker/v1/agent_pb";
import { ServerService, ServerType } from "../gen/tinker/v1/server_pb";
import { readPref, writePref } from "./prefs";

// What the user types on the Connection tab.
export type AgentConnection = {
  address: string;
  port: string;
  token: string;
};

// An Agent the user saved on the Connection tab ("Saved Agents").
export type SavedAgent = AgentConnection & {
  id: string; // "address:port"
  name: string; // the server PC's hostname
  agentVersion?: string;
  lastConnectedAt?: number;
};

const STORAGE_KEY = "tinker.connection";
const AUTO_CONNECT_STORAGE_KEY = "tinker.autoConnect";
const SAVED_AGENTS_KEY = "tinker.savedAgents";

// Remember the last connection so Dash can auto-connect next time.
export function loadConnection(): AgentConnection | null {
  return readPref<AgentConnection | null>(STORAGE_KEY, null);
}

export function saveConnection(connection: AgentConnection) {
  writePref(STORAGE_KEY, connection);
}

export function forgetConnection() {
  localStorage.removeItem(STORAGE_KEY);
}

export function loadAutoConnect(): boolean {
  return localStorage.getItem(AUTO_CONNECT_STORAGE_KEY) !== "false";
}

export function saveAutoConnect(autoConnect: boolean) {
  localStorage.setItem(AUTO_CONNECT_STORAGE_KEY, String(autoConnect));
}

export function loadSavedAgents(): SavedAgent[] {
  return readPref<SavedAgent[]>(SAVED_AGENTS_KEY, []);
}

export function storeSavedAgents(agents: SavedAgent[]) {
  writePref(SAVED_AGENTS_KEY, agents);
}

export function agentId(connection: Pick<AgentConnection, "address" | "port">): string {
  return `${connection.address.trim()}:${connection.port.trim() || "7122"}`;
}

// makeClients builds one "client" per service in the .proto files.
// Every call automatically sends the token.
export function makeClients(connection: AgentConnection) {
  const sendToken: Interceptor = (next) => async (req) => {
    req.header.set("Authorization", `Bearer ${connection.token.trim()}`);
    return next(req);
  };
  const transport = createConnectTransport({
    baseUrl: `http://${connection.address.trim()}:${connection.port.trim() || "7122"}`,
    interceptors: [sendToken],
  });
  return {
    agent: createClient(AgentService, transport),
    servers: createClient(ServerService, transport),
  };
}

export type AgentClients = ReturnType<typeof makeClients>;

export function isUnauthenticated(err: unknown): boolean {
  return ConnectError.from(err).code === Code.Unauthenticated;
}

function sentence(text: string): string {
  const t = text.trim();
  if (!t) return "Something went wrong.";
  const first = t.charAt(0).toUpperCase() + t.slice(1);
  return /[.!?)]$/.test(first) ? first : `${first}.`;
}

// Turns any error from the Agent into a sentence you can show the user.
export function errorMessage(err: unknown): string {
  const e = ConnectError.from(err);
  switch (e.code) {
    case Code.Unauthenticated:
      return "Wrong token. Copy it again from the installer (sudo cat /etc/tinker-agent.env).";
    case Code.Unavailable:
    case Code.Unknown:
      if (e.rawMessage.toLowerCase().includes("fetch")) {
        return "Can't reach the Agent. Check the address, that the server PC is on, and that you're on the same network.";
      }
      return sentence(e.rawMessage);
    case Code.DeadlineExceeded:
      return "The Agent took too long to answer.";
    case Code.Canceled:
      return "Cancelled.";
    default:
      return sentence(e.rawMessage); // the Agent's own message, like "you must accept the Minecraft EULA…"
  }
}

export function serverTypeLabel(type: ServerType): string {
  switch (type) {
    case ServerType.VANILLA:
      return "Vanilla";
    case ServerType.PAPER:
      return "Paper";
    case ServerType.FABRIC:
      return "Fabric";
    default:
      return "Other";
  }
}

// The Agent doesn't send server icons yet, so every server uses this grass block.
export const DEFAULT_SERVER_ICON =
  "https://res.cloudinary.com/subframe/image/upload/v1793563275/uploads/47820/uuknirpioirlhs3yrltd.png";
