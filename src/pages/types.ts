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

export interface ConnectionSettings {
  address: string;
  port: string;
  token: string;
  allowSelfSignedCertificates: boolean;
  autoConnect: boolean;
}

export interface ConnectionPageProps extends PageProps {
  settings: ConnectionSettings;
  onSettingsChange: (settings: ConnectionSettings) => void;
}
