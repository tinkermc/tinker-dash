// How Dash talks to the Tinker Agent. Pages never import this directly:
// they use useAgent() from AgentContext.tsx.
import { Code, ConnectError, createClient, type Interceptor } from "@connectrpc/connect";
import { createConnectTransport } from "@connectrpc/connect-web";
import { AgentService } from "../gen/tinker/v1/agent_pb";
import { ServerService } from "../gen/tinker/v1/server_pb";

// What the user types on the Connection tab.
export type AgentConnection = {
  address: string;
  port: string;
  token: string;
};

const STORAGE_KEY = "tinker.connection";
const AUTO_CONNECT_STORAGE_KEY = "tinker.autoConnect";

// Remember the last connection so Dash can auto-connect next time.
export function loadConnection(): AgentConnection | null {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? (JSON.parse(saved) as AgentConnection) : null;
  } catch {
    return null;
  }
}

export function saveConnection(connection: AgentConnection) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(connection));
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
      return e.rawMessage;
    case Code.DeadlineExceeded:
      return "The Agent took too long to answer.";
    default:
      return e.rawMessage; // the Agent's own message, like "you must accept the Minecraft EULA…"
  }
}