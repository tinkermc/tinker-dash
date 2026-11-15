// The Subframe AppHeader filled with live data, plus the server switcher menu
// that opens from its top-right button. Every page uses this.
import * as SubframeCore from "@subframe/core";
import { useRef, useState } from "react";
import { AppHeader } from "@/ui/components/AppHeader";
import { ServerSwitcherMenu } from "@/ui/components/ServerSwitcherMenu";
import { ServerSwitcherRow } from "@/ui/components/ServerSwitcherRow";
import type { Server } from "../gen/tinker/v1/server_pb";
import { useAgent } from "../lib/AgentContext";
import { DEFAULT_SERVER_ICON, serverTypeLabel } from "../lib/agent";
import { useServerConsole } from "../lib/ConsoleContext";
import { serverStatus } from "../lib/status";
import { useUi } from "../lib/UiContext";

export function serverDetail(server: Server): string {
  return [serverTypeLabel(server.type), server.version].filter(Boolean).join(" ");
}

export function ConnectedHeader() {
  const { clients, status, connection, info, servers, serversLoaded, selectedServer, selectServer, pending } = useAgent();
  const { state } = useServerConsole();
  const { navigate, openCreateServer } = useUi();
  const [open, setOpen] = useState(false);

  // The menu is positioned under the header's server button.
  const button = useRef<HTMLDivElement | null>(null);
  const anchor = useRef({
    getBoundingClientRect: () => button.current?.getBoundingClientRect() ?? new DOMRect(),
  });

  const current = selectedServer;
  const currentStatus = serverStatus(current, current ? pending[current.id] : undefined, state);
  const connected = status === "connected";

  return (
    <SubframeCore.Popover.Root open={open} onOpenChange={setOpen}>
      <SubframeCore.Popover.Anchor virtualRef={anchor} />
      <AppHeader
        serverName={
          current ? current.name : !clients ? "No server" : !serversLoaded ? "Loading servers…" : "No server yet"
        }
        serverDetail={
          current
            ? serverDetail(current)
            : !clients
              ? "Connect to an Agent"
              : !serversLoaded
                ? status === "lost"
                  ? "Waiting for the Agent"
                  : "One moment"
                : "Create or import one"
        }
        serverIcon={DEFAULT_SERVER_ICON}
        serverStatus={current ? currentStatus.variant : "none"}
        agentLabel={connected ? info?.hostname || "Agent" : status === "lost" ? "Reconnecting…" : "Agent"}
        agentAddress={connection?.address}
        agentStatus={connected ? "connected" : "disconnected"}
        onAgentClick={() => navigate("Connection")}
        onServerClick={(event) => {
          button.current = event.currentTarget;
          if (clients) setOpen((isOpen) => !isOpen);
          else navigate("Connection");
        }}
      />
      <SubframeCore.Popover.Portal>
        <SubframeCore.Popover.Content
          asChild
          side="bottom"
          align="end"
          sideOffset={6}
          collisionPadding={12}
          onInteractOutside={(event) => {
            // Clicking the server button again should close the menu, not re-open it.
            if (button.current?.contains(event.target as Node)) event.preventDefault();
          }}
        >
          <ServerSwitcherMenu
            className="z-50 outline-none"
            title={servers.length ? `Servers on ${info?.hostname || "this Agent"}` : "No servers yet"}
            onClick={(event) => {
              // The menu's "New server" footer (its last part) has no click handler of its own.
              const footer = event.currentTarget.lastElementChild;
              if (footer?.contains(event.target as Node)) {
                setOpen(false);
                openCreateServer();
              }
            }}
          >
            {servers.map((server) => {
              const s = serverStatus(server, pending[server.id], server.id === current?.id ? state : null);
              return (
                <ServerSwitcherRow
                  key={server.id}
                  icon={DEFAULT_SERVER_ICON}
                  name={server.name}
                  detail={`${serverDetail(server)} · Port ${server.port}`}
                  statusLabel={s.label}
                  status={s.variant}
                  selected={server.id === current?.id}
                  onClick={() => {
                    selectServer(server.id);
                    setOpen(false);
                  }}
                />
              );
            })}
          </ServerSwitcherMenu>
        </SubframeCore.Popover.Content>
      </SubframeCore.Popover.Portal>
    </SubframeCore.Popover.Root>
  );
}
