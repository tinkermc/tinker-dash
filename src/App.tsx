import { useState, type ComponentType } from "react";
import "./App.css";
import Connection from "./pages/Connection";
import Server from "./pages/Server";
import Mods from "./pages/Mods";
import Explorer from "./pages/Explorer";
import Players from "./pages/Players";
import Console from "./pages/Console";
import Backups from "./pages/Backups";
import type { PageProps, TabId } from "./pages/types";

// World and Tinker don't have designs yet, so clicking them does nothing.
const pages: Partial<Record<TabId, ComponentType<PageProps>>> = {
  Connection,
  Server,
  Mods,
  Explorer,
  Players,
  Console,
  Backups,
};

export default function App() {
  const [tab, setTab] = useState<TabId>("Connection");
  const Page = pages[tab] ?? Connection;

  const navigate = (next: TabId) => {
    if (pages[next]) setTab(next);
  };

  return <Page onNavigate={navigate} />;
}
