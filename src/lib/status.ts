// One place that decides what a server's status pill says.
import type { Server } from "../gen/tinker/v1/server_pb";
import type { PendingAction } from "./AgentContext";
import type { ServerState } from "./minecraft";

export type StatusKind = "running" | "stopped" | "starting" | "stopping" | "crashed";

export type ServerStatus = {
  kind: StatusKind;
  label: string;
  // The StatusPill / AppHeader / ServerSwitcherRow variant. They have no
  // "stopping" look, so stopping uses the amber "starting" one.
  variant: "running" | "stopped" | "starting" | "crashed";
};

function status(kind: StatusKind, label: string): ServerStatus {
  return { kind, label, variant: kind === "stopping" ? "starting" : kind };
}

// `consoleState` is only known for the selected server; pass null for others.
export function serverStatus(
  server: Server | null,
  pending: PendingAction | undefined,
  consoleState: ServerState | null,
): ServerStatus {
  if (!server) return status("stopped", "No server");
  if (pending === "stopping") return status("stopping", "Stopping…");
  if (pending === "restarting") return status("starting", "Restarting…");
  if (server.running) {
    if (consoleState?.stopping) return status("stopping", "Stopping…");
    if (pending === "starting" || (consoleState?.started && !consoleState.ready)) return status("starting", "Starting…");
    return status("running", "Running");
  }
  if (pending === "starting") return status("starting", "Starting…");
  if (consoleState?.lastExit?.error) return status("crashed", "Crashed");
  return status("stopped", "Stopped");
}
