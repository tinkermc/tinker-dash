import { useState, type ComponentType } from "react";
import "./App.css";
import { CreateServerDialog, ImportServerDialog } from "./components/ServerDialogs";
import { useAgent } from "./lib/AgentContext";
import { loadAutoConnect, saveAutoConnect } from "./lib/agent";
import { Toaster } from "./lib/notify";
import { readPref, writePref } from "./lib/prefs";
import { UiContext } from "./lib/UiContext";
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

const LAST_TAB_KEY = "tinker.lastTab";

export default function App() {
  const { connection } = useAgent();
  // Re-open the tab you were on last time.
  const [tab, setTab] = useState<TabId>(() => {
    const saved = readPref<TabId>(LAST_TAB_KEY, "Connection");
    return saved === "Connection" || saved in pages ? saved : "Connection";
  });
  const [dialog, setDialog] = useState<"create" | "import" | null>(null);
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
    writePref(LAST_TAB_KEY, next);
    document.getElementById("app-content")?.scrollTo({ top: 0 });
  };

  const updateConnectionSettings = (settings: ConnectionSettings) => {
    setConnectionSettings(settings);
    saveAutoConnect(settings.autoConnect);
  };

  return (
    <UiContext.Provider
      value={{
        tab,
        navigate,
        openCreateServer: () => setDialog("create"),
        openImportServer: () => setDialog("import"),
      }}
    >
      <div id="app-content" className="h-full min-h-0 overflow-y-auto overscroll-contain">
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
      <CreateServerDialog
        open={dialog === "create"}
        onClose={() => setDialog(null)}
        onImportInstead={() => setDialog("import")}
      />
      <ImportServerDialog open={dialog === "import"} onClose={() => setDialog(null)} />
      <Toaster />
    </UiContext.Provider>
  );
}
