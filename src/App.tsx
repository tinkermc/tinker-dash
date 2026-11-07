import { useState, type ComponentType } from "react";
import "./App.css";
import Connection from "./pages/Connection";
import Server from "./pages/Server";
import Mods from "./pages/Mods";
import Files from "./pages/Files";
import Players from "./pages/Players";
import Console from "./pages/Console";
import Backups from "./pages/Backups";
import World from "./pages/World";
import Tinker from "./pages/Tinker";
import type { PageProps, TabId } from "./pages/types";

const pages: Record<TabId, ComponentType<PageProps>> = {
  Connection,
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
  const [tab, setTab] = useState<TabId>("Connection");
  const Page = pages[tab];

  const navigate = (next: TabId) => {
    if (pages[next]) setTab(next);
  };

  return <Page onNavigate={navigate} />;
}
