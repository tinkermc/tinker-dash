export type TabId =
  | "Connection"
  | "Server"
  | "Mods"
  | "Explorer"
  | "World"
  | "Players"
  | "Console"
  | "Backups"
  | "Tinker";

export interface PageProps {
  onNavigate: (tab: TabId) => void;
}
