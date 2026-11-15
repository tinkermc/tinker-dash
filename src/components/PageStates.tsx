// What a tab shows when there's no Agent connection or no server yet, plus the
// "needs an Agent update" markers for parts that still show sample data.
import type { ReactNode } from "react";
import { Badge } from "@/ui/components/Badge";
import { Banner } from "@/ui/components/Banner";
import { EmptyState } from "@/ui/components/EmptyState";
import { Loader } from "@/ui/components/Loader";
import { PrimaryButton } from "@/ui/components/PrimaryButton";
import RoundAdd from "@/ui/icons/RoundAdd";
import RoundLock from "@/ui/icons/RoundLock";
import RoundLogIn from "@/ui/icons/RoundLogIn";
import RoundServerX1 from "@/ui/icons/RoundServerX1";
import RoundUpload from "@/ui/icons/RoundUpload";
import RoundWifi from "@/ui/icons/RoundWifi";
import { useAgent } from "../lib/AgentContext";
import { useUi } from "../lib/UiContext";

// Shows `children` only when connected and a server is selected.
export function ServerGate({ children }: { children: ReactNode }) {
  const { clients, status, servers, serversLoaded, selectedServer } = useAgent();
  const { navigate, openCreateServer, openImportServer } = useUi();

  if (!clients) {
    return (
      <EmptyState
        variant="disconnected"
        icon={<RoundWifi />}
        title={status === "connecting" ? "Connecting to your Agent…" : "Not connected"}
        description="Connect to the Tinker Agent on your server PC to use this tab."
        actions={<PrimaryButton icon={<RoundLogIn />} text="Go to Connection" onClick={() => navigate("Connection")} />}
      />
    );
  }
  if (!serversLoaded) {
    if (status === "lost") {
      return (
        <EmptyState
          variant="disconnected"
          icon={<RoundWifi />}
          title="Lost connection to the Agent"
          description="Dash keeps trying to reconnect. Check that the server PC is on and the Agent is running."
          actions={<PrimaryButton icon={<RoundLogIn />} text="Go to Connection" color="gray" onClick={() => navigate("Connection")} />}
        />
      );
    }
    return <PageLoader />;
  }
  if (servers.length === 0) {
    return (
      <EmptyState
        icon={<RoundServerX1 />}
        title="No servers yet"
        description="Create a new Minecraft server, or import one from Crafty Controller or any folder on the server PC."
        actions={
          <>
            <PrimaryButton icon={<RoundAdd />} text="Create server" onClick={openCreateServer} />
            <PrimaryButton icon={<RoundUpload />} text="Import server" color="gray" onClick={openImportServer} />
          </>
        }
      />
    );
  }
  if (!selectedServer) return <PageLoader />;
  return (
    <>
      {status === "lost" ? (
        <Banner
          variant="warning"
          icon={<RoundWifi />}
          title="Lost connection to the Agent"
          description="Dash keeps trying to reconnect. Until then, what you see here may be out of date and buttons won't work."
        />
      ) : null}
      {children}
    </>
  );
}

export function PageLoader() {
  return (
    <div className="flex w-full items-center justify-center py-16">
      <Loader className="text-[28px] text-[#22c55e]" />
    </div>
  );
}

// A banner for sections that still show sample data.
export function PreviewBanner({ title, description }: { title: ReactNode; description?: ReactNode }) {
  return <Banner variant="info" icon={<RoundLock />} title={title} description={description} />;
}

// A small tag for a section's header.
export function SoonBadge() {
  return <Badge label="Needs Agent update" icon={<RoundLock />} variant="gray" />;
}
