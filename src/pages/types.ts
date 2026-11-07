export type TabId =
  | "Connection"
  | "Server"
  | "Mods"
  | "Files"
  | "World"
  | "Players"
  | "Console"
  | "Backups"
  | "Tinker";

export interface PageProps {
  onNavigate: (tab: TabId) => void;
}
