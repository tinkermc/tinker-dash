import { useState, type ComponentType } from "react";
import "./App.css";
import { useAgent } from "./lib/AgentContext";
import { loadAutoConnect, saveAutoConnect } from "./lib/agent";
import Connection from "./pages/Connection";
import Server from "./pages/Server";
import Mods from "./pages/Mods";
import Files from "./pages/Files";
import Players from "./pages/Players";
import Console from "./pages/Console";
import Backups from "./pages/Backups";
import World from "./pages/World";
import Tinker from "./pages/Tinker";
import type { ConnectionSettings, PageProps, TabId } from "./pages/types";
import { MenuHost } from "./ui/menu";

const pages: Record<Exclude<TabId, "Connection">, ComponentType<PageProps>> = {
  Server,
  Mods,
  Files,
  World,
  Players,
  Console,
  Backups,
  Tinker,
};

export default function App() {
  const { connection } = useAgent();
  const [tab, setTab] = useState<TabId>("Connection");
  const [connectionSettings, setConnectionSettings] = useState<ConnectionSettings>(() => ({
    address: connection?.address ?? "",
    port: connection?.port ?? "7122",
    token: connection?.token ?? "",
    allowSelfSignedCertificates: false,
    autoConnect: loadAutoConnect(),
  }));
  const Page = tab === "Connection" ? null : pages[tab];

  const navigate = (next: TabId) => {
    setTab(next);
  };

  const updateConnectionSettings = (settings: ConnectionSettings) => {
    setConnectionSettings(settings);
    saveAutoConnect(settings.autoConnect);
  };

  return (
    <>
      <div id="app-content" className="h-full">
        {tab === "Connection" ? (
          <Connection
            onNavigate={navigate}
            settings={connectionSettings}
            onSettingsChange={updateConnectionSettings}
          />
        ) : Page ? (
          <Page onNavigate={navigate} />
        ) : null}
      </div>
      <MenuHost />
    </>
  );
}
