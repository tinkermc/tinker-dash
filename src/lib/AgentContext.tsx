// Shares ONE Agent connection with every page in Dash.
// Wrap the app in <AgentProvider>, then call useAgent() in any page.
import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import type { GetInfoResponse } from "../gen/tinker/v1/agent_pb";
import {
  forgetConnection,
  errorMessage,
  loadAutoConnect,
  loadConnection,
  makeClients,
  saveConnection,
  type AgentClients,
  type AgentConnection,
} from "./agent";

type AgentState = {
  clients: AgentClients | null; // null = not connected
  info: GetInfoResponse | null; // the Agent's name and version
  connection: AgentConnection | null; // what was typed in last time
  connectionError: string | null;
  connect: (connection: AgentConnection) => Promise<void>; // throws if it fails
  disconnect: () => void;
};

const AgentContext = createContext<AgentState | null>(null);

export function AgentProvider({ children }: { children: ReactNode }) {
  const [clients, setClients] = useState<AgentClients | null>(null);
  const [info, setInfo] = useState<GetInfoResponse | null>(null);
  const [connection, setConnection] = useState<AgentConnection | null>(loadConnection);
  const [connectionError, setConnectionError] = useState<string | null>(null);

  async function connect(next: AgentConnection) {
    const c = makeClients(next);
    const answer = await c.agent.getInfo({}, { timeoutMs: 5000 }); // proves address + token work
    saveConnection(next);
    setConnection(next);
    setConnectionError(null);
    setClients(c);
    setInfo(answer);
  }

  function disconnect() {
    forgetConnection();
    setClients(null);
    setInfo(null);
    setConnectionError(null);
  }

  // Auto-connect when Dash opens, using the saved connection.
  useEffect(() => {
    if (!loadAutoConnect()) return;
    const saved = loadConnection();
    if (saved) {
      connect(saved).catch((err) => {
        setConnectionError(errorMessage(err));
      });
    }
  }, []);

  return (
    <AgentContext.Provider
      value={{ clients, info, connection, connectionError, connect, disconnect }}
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