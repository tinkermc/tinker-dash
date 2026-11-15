// The live console of the selected server, shared by every page.
// Opens ONE WatchConsole stream, keeps the last 1000 lines, and works out
// players, start-up progress, the seed and more from them (see minecraft.ts).
// Wrap the app in <ConsoleProvider> (inside <AgentProvider>), then call
// useServerConsole() in any page.
import { createContext, useCallback, useContext, useEffect, useRef, useState, type ReactNode } from "react";
import { useAgent } from "./AgentContext";
import { errorMessage } from "./agent";
import {
  applyLine,
  emptyServerState,
  lineTimestamp,
  parseLine,
  player,
  RX,
  snapshot,
  type LogLevel,
  type ParsedLine,
  type PlayerInfo,
  type ServerState,
} from "./minecraft";

export type ConsoleLine = ParsedLine & {
  id: number;
  raw: string;
  receivedAt: number;
  at: number; // best guess of when Minecraft printed it
  local?: boolean; // shown by Dash itself, like the command you typed
};

export type AskOptions = {
  match: (message: string) => boolean; // the reply's first line
  more?: (message: string) => boolean; // further reply lines (like ban list entries)
  timeoutMs?: number;
};

type ConsoleState = {
  serverId: string | null;
  lines: ConsoleLine[];
  clearedBefore: number; // "Clear" hides lines up to this id
  clear: () => void;
  state: ServerState;
  streaming: boolean;
  settled: boolean; // finished reading the history the Agent sends first
  send: (command: string) => Promise<void>; // throws if the Agent refuses
  ask: (command: string, options: AskOptions) => Promise<string[]>; // send, then wait for the reply lines
  patchPlayer: (name: string, patch: Partial<PlayerInfo>) => void;
};

const MAX_LINES = 1000;

type Waiter = {
  options: AskOptions;
  lines: string[];
  collecting: boolean;
  timeout?: number;
  collectTimer?: number;
  done: (result: string[] | Error) => void;
};

const sleep = (ms: number) => new Promise<void>((resolve) => setTimeout(resolve, ms));

const ConsoleContext = createContext<ConsoleState | null>(null);

export function ConsoleProvider({ children }: { children: ReactNode }) {
  const { clients, status, selectedServer } = useAgent();
  const serverId = selectedServer?.id ?? null;
  const running = selectedServer?.running ?? false;
  const online = status === "connected"; // false while the Agent is unreachable ("lost")

  const [lines, setLines] = useState<ConsoleLine[]>([]);
  const [clearedBefore, setClearedBefore] = useState(0);
  const [state, setState] = useState<ServerState>(emptyServerState);
  const [streaming, setStreaming] = useState(false);
  const [settled, setSettled] = useState(false);

  const stateRef = useRef<ServerState>(emptyServerState());
  const queue = useRef<ConsoleLine[]>([]);
  const flushTimer = useRef<number | null>(null);
  const nextId = useRef(1);
  const lastLevel = useRef<LogLevel>("info");
  const lastAt = useRef<number | null>(null);
  const waiters = useRef<Waiter[]>([]);
  const settledRef = useRef(false);
  const settleTimer = useRef<number | null>(null);

  // Lines arrive in bursts (the history is up to 500 at once), so React gets
  // them in batches instead of one re-render per line.
  const flush = useCallback(() => {
    flushTimer.current = null;
    const batch = queue.current;
    if (batch.length === 0) return;
    queue.current = [];
    setLines((old) => {
      const next = old.concat(batch);
      return next.length > MAX_LINES ? next.slice(next.length - MAX_LINES) : next;
    });
    setState(snapshot(stateRef.current));
  }, []);

  const push = useCallback(
    (line: ConsoleLine) => {
      queue.current.push(line);
      if (flushTimer.current === null) flushTimer.current = window.setTimeout(flush, 60);
    },
    [flush],
  );

  const finishWaiter = useCallback((w: Waiter, result: string[] | Error) => {
    if (!waiters.current.includes(w)) return;
    waiters.current = waiters.current.filter((x) => x !== w);
    window.clearTimeout(w.timeout);
    window.clearTimeout(w.collectTimer);
    w.done(result);
  }, []);

  const feedWaiters = useCallback(
    (message: string) => {
      for (const w of waiters.current.slice()) {
        if (!w.collecting) {
          if (w.options.match(message)) {
            w.lines.push(message);
            if (w.options.more) {
              w.collecting = true;
              w.collectTimer = window.setTimeout(() => finishWaiter(w, w.lines), 400);
            } else {
              finishWaiter(w, w.lines);
            }
          } else if (RX.unknownCommand.test(message)) {
            finishWaiter(w, new Error("The server doesn't know that command."));
          }
        } else if (w.options.more?.(message)) {
          w.lines.push(message);
          window.clearTimeout(w.collectTimer);
          w.collectTimer = window.setTimeout(() => finishWaiter(w, w.lines), 400);
        }
      }
    },
    [finishWaiter],
  );

  const markSettledSoon = useCallback((ms: number) => {
    if (settleTimer.current !== null) window.clearTimeout(settleTimer.current);
    settleTimer.current = window.setTimeout(() => {
      settleTimer.current = null;
      settledRef.current = true;
      setSettled(true);
    }, ms);
  }, []);

  const receive = useCallback(
    (raw: string) => {
      const parsed = parseLine(raw, lastLevel.current);
      lastLevel.current = parsed.level;
      const receivedAt = Date.now();
      // Lines without their own time (stack traces, "[Tinker] Server stopped"):
      // live ones happened just now; in the history Dash reads first, the best
      // guess is the line above them.
      const at = parsed.time
        ? lineTimestamp(parsed.time, receivedAt)
        : settledRef.current
          ? receivedAt
          : lastAt.current ?? receivedAt;
      lastAt.current = at;
      const line: ConsoleLine = { ...parsed, id: nextId.current++, raw, receivedAt, at };
      applyLine(stateRef.current, line.id, line, line.at);
      if (settledRef.current) feedWaiters(parsed.message);
      else markSettledSoon(300); // still reading history: wait for a quiet moment
      push(line);
    },
    [feedWaiters, markSettledSoon, push],
  );

  // Open the stream for the selected server, and re-open it if it drops.
  // While the Agent is unreachable, the last lines stay on screen; once it's
  // back, the stream re-opens and the Agent sends its history again.
  useEffect(() => {
    if (clients && serverId && !online) {
      setStreaming(false);
      return;
    }
    const reset = () => {
      stateRef.current = emptyServerState();
      queue.current = [];
      lastLevel.current = "info";
      lastAt.current = null;
      settledRef.current = false;
      setSettled(false);
      setLines([]);
      setClearedBefore(0);
      setState(emptyServerState());
      markSettledSoon(800);
    };
    reset();
    for (const w of waiters.current.slice()) finishWaiter(w, new Error("Switched servers."));
    if (!clients || !serverId) {
      setStreaming(false);
      return;
    }
    const abort = new AbortController();
    let cancelled = false;
    (async () => {
      let first = true;
      while (!cancelled) {
        if (!first) reset(); // the Agent sends its history again on every new stream
        first = false;
        try {
          setStreaming(true);
          for await (const msg of clients.servers.watchConsole({ serverId }, { signal: abort.signal })) {
            receive(msg.line);
          }
        } catch {
          // stream ended: the Agent restarted, the network blipped, or we closed it
        }
        setStreaming(false);
        if (cancelled) return;
        await sleep(3000);
      }
    })();
    return () => {
      cancelled = true;
      abort.abort();
    };
  }, [clients, serverId, online, receive, finishWaiter, markSettledSoon]);

  const clear = useCallback(() => setClearedBefore(nextId.current - 1), []);

  const send = useCallback(
    async (command: string) => {
      if (!clients || !serverId) throw new Error("No server selected.");
      // Minecraft doesn't repeat commands back, so show what was typed.
      const now = Date.now();
      push({ id: nextId.current++, raw: `> ${command}`, receivedAt: now, at: now, time: null, source: ">", level: "info", message: command, local: true });
      try {
        await clients.servers.sendCommand({ serverId, command });
      } catch (err) {
        const at = Date.now();
        const reason = errorMessage(err);
        push({ id: nextId.current++, raw: `Not sent: ${reason}`, receivedAt: at, at, time: null, source: "[Tinker]", level: "error", message: `Not sent: ${reason}`, local: true });
        throw err;
      }
    },
    [clients, serverId, push],
  );

  const ask = useCallback(
    async (command: string, options: AskOptions) => {
      // Wait until the history has been read, so an old reply isn't taken for the new one.
      const until = Date.now() + 3000;
      while (!settledRef.current && Date.now() < until) await sleep(100);
      return new Promise<string[]>((resolve, reject) => {
        const w: Waiter = {
          options,
          lines: [],
          collecting: false,
          done: (result) => (result instanceof Error ? reject(result) : resolve(result)),
        };
        waiters.current.push(w);
        w.timeout = window.setTimeout(() => {
          finishWaiter(w, w.lines.length ? w.lines : new Error("The server didn't answer."));
        }, options.timeoutMs ?? 5000);
        send(command).catch((err) => finishWaiter(w, new Error(errorMessage(err))));
      });
    },
    [send, finishWaiter],
  );

  const patchPlayer = useCallback((name: string, patch: Partial<PlayerInfo>) => {
    Object.assign(player(stateRef.current, name), patch);
    setState(snapshot(stateRef.current));
  }, []);

  // Ask "who's online?" once the server is up, so the player count is right
  // even for players who joined before Dash connected. Joins and leaves after
  // that come straight from the console.
  const probed = useRef<string | null>(null);
  const runningAtSettle = useRef<boolean | null>(null); // was it already up when Dash started watching?
  useEffect(() => {
    if (!settled) {
      runningAtSettle.current = null;
      return;
    }
    if (runningAtSettle.current === null) runningAtSettle.current = running;
    if (!serverId || !running || !streaming) return;
    // If Dash watched it start, wait for "Done". If it was already running (and
    // its start-up has scrolled out of the history), ask right away.
    const up = state.ready || (runningAtSettle.current && !state.started);
    if (!up) return;
    const key = `${serverId}:${state.startedAt ?? "running"}`;
    if (probed.current === key) return;
    probed.current = key;
    ask("list uuids", { match: (m) => RX.list.test(m), timeoutMs: 6000 }).catch(() => {
      ask("list", { match: (m) => RX.list.test(m), timeoutMs: 6000 }).catch(() => {});
    });
  }, [serverId, running, streaming, settled, state.started, state.ready, state.startedAt, ask]);

  return (
    <ConsoleContext.Provider
      value={{ serverId, lines, clearedBefore, clear, state, streaming, settled, send, ask, patchPlayer }}
    >
      {children}
    </ConsoleContext.Provider>
  );
}

export function useServerConsole(): ConsoleState {
  const state = useContext(ConsoleContext);
  if (!state) throw new Error("useServerConsole() must be used inside <ConsoleProvider>");
  return state;
}
