// App-wide UI actions any component can call: switch tabs, or open the
// "Create server" / "Import server" dialogs (they live in App.tsx).
import { createContext, useContext } from "react";
import type { TabId } from "../pages/types";

export type UiState = {
  tab: TabId;
  navigate: (tab: TabId) => void;
  openCreateServer: () => void;
  openImportServer: () => void;
};

export const UiContext = createContext<UiState | null>(null);

export function useUi(): UiState {
  const ui = useContext(UiContext);
  if (!ui) throw new Error("useUi() must be used inside <UiContext.Provider>");
  return ui;
}
