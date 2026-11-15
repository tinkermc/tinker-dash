import { defineConfig, type Plugin } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
// @ts-expect-error type error without @types/node package
import process from "node:process";
const host = process.env.TAURI_DEV_HOST;

// Subframe's synced components put non-breaking spaces at the edges of some
// text (" · ", "Port ", "by "). Vite's JSX compiler trims those, so words run
// together ("Vanilla26.3·Port25566"). This rewrites only that kind of text in
// src/ui as {"…"}, so the spaces survive. Subframe syncs keep working.
function keepSubframeSpaces(): Plugin {
  const NBSP = " ";
  return {
    name: "keep-subframe-spaces",
    enforce: "pre",
    transform(code, id) {
      if (!/[\\/]src[\\/]ui[\\/].+\.tsx$/.test(id) || !code.includes(NBSP)) return null;
      const lines = code.split(/\r?\n/);
      let changed = false;
      for (let i = 1; i < lines.length - 1; i++) {
        const match = /^([ \t]*)(.*?)[ \t]*$/.exec(lines[i]);
        const text = match?.[2] ?? "";
        if (!text.startsWith(NBSP) && !text.endsWith(NBSP)) continue;
        if (/[<>{}]/.test(text)) continue;
        // Only plain JSX text: the line above opens a tag, the line below closes it.
        if (!lines[i - 1].trimEnd().endsWith(">") || !lines[i + 1].trimStart().startsWith("</")) continue;
        lines[i] = `${match?.[1] ?? ""}{${JSON.stringify(text)}}`;
        changed = true;
      }
      return changed ? { code: lines.join("\n"), map: null } : null;
    },
  };
}

// https://vite.dev/config/
export default defineConfig(() => ({
  plugins: [keepSubframeSpaces(), react(), tailwindcss()],
  resolve: { alias: { "@/ui": "/src/ui" } },

  // Vite options tailored for Tauri development and only applied in `tauri dev` or `tauri build`
  //
  // 1. prevent Vite from obscuring rust errors
  clearScreen: false,
  // 2. tauri expects a fixed port, fail if that port is not available
  server: {
    port: 1420,
    strictPort: true,
    host: host || false,
    hmr: host
      ? {
          protocol: "ws",
          host,
          port: 1421,
        }
      : undefined,
    watch: {
      // 3. tell Vite to ignore watching `src-tauri`
      ignored: ["**/src-tauri/**"],
    },
  },
}));
