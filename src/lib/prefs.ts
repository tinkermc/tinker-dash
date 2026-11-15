// Small settings Dash remembers on this computer (console history, quick
// commands, player notes…). Uses localStorage for now.
//
// Note: localStorage is tied to the app's web address, so things saved while
// running `npm run tauri dev` don't carry over to the built app. When the Tauri
// store plugin is added, swap these two functions over to it.

export function readPref<T>(key: string, fallback: T): T {
  try {
    const saved = localStorage.getItem(key);
    return saved === null ? fallback : (JSON.parse(saved) as T);
  } catch {
    return fallback;
  }
}

export function writePref<T>(key: string, value: T) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // storage full or blocked: not worth crashing over
  }
}
