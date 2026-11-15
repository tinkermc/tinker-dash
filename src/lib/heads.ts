// Player faces. They load from the internet (api.mcheads.org), so until one
// has loaded, or if it can't (offline-mode names, no internet), a plain
// placeholder face is shown instead of a broken image.
import { useEffect, useState } from "react";
import { isValidPlayerName, playerHead } from "./minecraft";

export const HEAD_PLACEHOLDER = `data:image/svg+xml,${encodeURIComponent(
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 8" shape-rendering="crispEdges">' +
    '<rect width="8" height="8" fill="#2a3038"/>' +
    '<rect x="2" y="3" width="1" height="1" fill="#7a828e"/>' +
    '<rect x="5" y="3" width="1" height="1" fill="#7a828e"/>' +
    '<rect x="3" y="5" width="2" height="1" fill="#7a828e"/>' +
    "</svg>",
)}`;

type LoadState = "loading" | "ok" | "error";

const states = new Map<string, LoadState>();
const listeners = new Set<() => void>();

function load(url: string) {
  if (states.has(url)) return;
  states.set(url, "loading");
  const img = new Image();
  const settle = (state: LoadState) => {
    states.set(url, state);
    for (const listener of listeners) listener();
  };
  img.onload = () => settle("ok");
  img.onerror = () => settle("error");
  img.src = url;
}

// Returns head(name): the face's URL once it has loaded, otherwise the placeholder.
// The component re-renders when a face finishes loading.
export function useHeads(): (name: string | null | undefined) => string {
  const [, setVersion] = useState(0);
  useEffect(() => {
    const listener = () => setVersion((v) => v + 1);
    listeners.add(listener);
    return () => {
      listeners.delete(listener);
    };
  }, []);
  return (name) => {
    const clean = name?.trim();
    if (!clean || !isValidPlayerName(clean)) return HEAD_PLACEHOLDER;
    const url = playerHead(clean);
    load(url);
    return states.get(url) === "ok" ? url : HEAD_PLACEHOLDER;
  };
}

// The value, but only after it stopped changing for `ms` (so typing a name
// doesn't fetch a face for every letter).
export function useDebounced<T>(value: T, ms: number): T {
  const [settled, setSettled] = useState(value);
  useEffect(() => {
    const timer = window.setTimeout(() => setSettled(value), ms);
    return () => window.clearTimeout(timer);
  }, [value, ms]);
  return settled;
}
