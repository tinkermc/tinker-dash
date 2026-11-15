import React from "react";
import ReactDOM from "react-dom/client";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import App from "./App";
import { ErrorBoundary } from "./components/ErrorBoundary";
import { AgentProvider } from "./lib/AgentContext";
import { ConsoleProvider } from "./lib/ConsoleContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ErrorBoundary>
      <AgentProvider>
        <ConsoleProvider>
          <App />
        </ConsoleProvider>
      </AgentProvider>
    </ErrorBoundary>
  </React.StrictMode>,
);
