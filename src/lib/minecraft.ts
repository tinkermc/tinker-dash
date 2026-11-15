// Reads Minecraft console output. Pure functions only (no React), so they're
// easy to test and reuse.
//
// The Agent only sends raw console lines. Everything Dash knows about players,
// start-up progress, the seed, the world border and Chunky comes from reading
// those lines here. When the Agent gets dedicated calls for these (see the
// "To-Do by Tab" doc), swap the matching part over to the real data.

export type LogLevel = "info" | "warn" | "error";

export interface ParsedLine {
  time: string | null; // "14:02:16", as printed by Minecraft
  source: string | null; // "[Server thread/INFO]:", shown in the console's colored column
  level: LogLevel;
  message: string; // the text after the prefix
}

// ---------------------------------------------------------------------------
// One line → time, source, level, message
// ---------------------------------------------------------------------------

const ANSI = /\u001b\[[0-9;?]*[ -/]*[@-~]/g;
const LEVELS = "INFO|WARN|WARNING|ERROR|FATAL|SEVERE|DEBUG|TRACE";

// Vanilla, Fabric, Forge and NeoForge:
//   [14:02:16] [Server thread/INFO]: Done (3.2s)!
//   [14Nov2026 14:02:16.123] [Server thread/INFO] [minecraft/DedicatedServer]: Done (3.2s)!
const THREAD_LINE = new RegExp(
  `^\\[(?:\\d{1,2}[A-Za-z]{3}\\d{4} )?(\\d{1,2}:\\d{2}:\\d{2})(?:\\.\\d+)?\\] \\[([^\\]]*?)\\/(${LEVELS})\\](?: \\[[^\\]]*\\])?:? ?(.*)$`,
);
// Paper, Spigot and Purpur:  [14:02:16 INFO]: Done (3.2s)!
const LEVEL_LINE = new RegExp(`^\\[(\\d{1,2}:\\d{2}:\\d{2}) (${LEVELS})\\]:? ?(.*)$`);
// Lines the Agent adds itself, like "[Tinker] Server stopped".
const TINKER_LINE = /^\[Tinker\] (.*)$/;
// Java stack traces continue the warning or error above them.
const CONTINUATION =
  /^(\s+at |\s*\.\.\. \d+ more|Caused by: |\s+Suppressed: |[\w$.]+(Exception|Error)(: |$))/;

function toLevel(raw: string): LogLevel {
  const level = raw.toUpperCase();
  if (level === "WARN" || level === "WARNING") return "warn";
  if (level === "ERROR" || level === "FATAL" || level === "SEVERE") return "error";
  return "info";
}

export function parseLine(raw: string, previousLevel?: LogLevel): ParsedLine {
  const line = raw.replace(ANSI, "").replace(/\r$/, "");
  let m = THREAD_LINE.exec(line);
  if (m) return { time: m[1], source: `[${m[2]}/${m[3]}]:`, level: toLevel(m[3]), message: m[4] };
  m = LEVEL_LINE.exec(line);
  if (m) return { time: m[1], source: `[${m[2]}]:`, level: toLevel(m[2]), message: m[3] };
  m = TINKER_LINE.exec(line);
  if (m) {
    const failed = /^Server stopped: /.test(m[1]);
    return { time: null, source: "[Tinker]", level: failed ? "error" : "info", message: m[1] };
  }
  const continues = previousLevel !== undefined && previousLevel !== "info" && CONTINUATION.test(line);
  return { time: null, source: null, level: continues ? previousLevel : "info", message: line };
}

// The line's own "14:02:16" on the day Dash received it. History lines arrive
// all at once, so this is closer to the truth than the time Dash got them.
export function lineTimestamp(time: string | null, receivedAt: number): number {
  if (!time) return receivedAt;
  const [h, m, s] = time.split(":").map(Number);
  const d = new Date(receivedAt);
  d.setHours(h, m, s, 0);
  let at = d.getTime();
  if (at > receivedAt + 60_000) at -= 86_400_000; // printed before midnight
  return at;
}

// ---------------------------------------------------------------------------
// What each kind of line means
// ---------------------------------------------------------------------------

// Java names are 3–16 letters, digits and _. Bedrock players (Geyser) start with "." or "*".
const NAME = "[.*]?[A-Za-z0-9_]{1,32}";

export const RX = {
  join: new RegExp(`^(${NAME})(?: \\(formerly known as ${NAME}\\))? joined the game$`),
  leave: new RegExp(`^(${NAME}) left the game$`),
  login: new RegExp(`^(${NAME})\\[\\/?(.+?)\\] logged in with entity id`),
  uuid: new RegExp(`^UUID of player (${NAME}) is ([0-9a-fA-F-]{32,36})$`),
  list: /^There (?:are|is) (\d+) (?:of a max(?:imum)? of|out of maximum) (\d+) players? online[.:]?\s?(.*)$/,
  kicked: new RegExp(`^Kicked (${NAME}): (.*)$`),
  banned: new RegExp(`^Banned (${NAME}): (.*)$`),
  unbanned: new RegExp(`^Unbanned (${NAME})$`),
  op: new RegExp(`^Made (${NAME}) a server operator$`),
  deop: new RegExp(`^Made (${NAME}) no longer a server operator$`),
  alreadyOp: /^Nothing changed\. The player already is an operator$/,
  notOp: /^Nothing changed\. The player is not an operator$/,
  whitelistAdd: new RegExp(`^Added (${NAME}) to the whitelist$`),
  whitelistRemove: new RegExp(`^Removed (${NAME}) from the whitelist$`),
  alreadyWhitelisted: /^Player is already whitelisted$/,
  notWhitelisted: /^Player is not whitelisted$/,
  whitelistList: /^There (?:are|is) (\d+) whitelisted players?(?:\(s\))?: ?(.*)$/,
  whitelistNone: /^There are no whitelisted players$/,
  banHeader: /^There (?:are|is) (\d+) bans?(?:\(s\))?:$/,
  banEntry: new RegExp(`^(${NAME}) was banned by (.+?): (.*)$`),
  banNone: /^There are no bans$/,
  noSuchPlayer: /^(That player does not exist|No player was found|Unknown player)/,
  advancement: new RegExp(
    `^(${NAME}) has (made the advancement|completed the challenge|reached the goal) \\[(.+)\\]$`,
  ),
  starting: /^Starting [Mm]inecraft server(?: version (.+))?/,
  done: /^Done \(([\d.,]+)s\)!/,
  stopping: /^Stopping (?:the )?server$/,
  tinkerStopped: /^Server stopped(?:: (.*))?$/,
  seed: /^Seed: \[(-?\d+)\]$/,
  worldBorder: /^The world border is currently ([\d.,]+) blocks?(?:\(s\))? wide$/,
  unknownCommand: /^(Unknown or incomplete command|Unknown command|Incorrect argument for command)/,
  chunkyTask: /Task (running|finished|paused|stopped|started|continuing|cancelled) for ([^\s,]+?)\.?(?:\s|$)/,
  chunkyProgress: /Processed: ([\d,]+) chunks \(([\d.,]+)%\)/,
  chunkyEta: /ETA: ([\d:]+)/,
};

const DEATH =
  /^ (was |drowned|died|blew up|burned|fell |hit the ground|tried to swim|starved|suffocated|withered|froze|experienced kinetic|went up in flames|went off with a bang|walked into|discovered the floor|didn't want to live)/;

// ---------------------------------------------------------------------------
// Everything Dash works out from the console, for one server
// ---------------------------------------------------------------------------

export interface PlayerInfo {
  name: string;
  uuid?: string;
  online: boolean;
  onlineSince?: number; // when Dash saw them join (unknown if they joined before the history starts)
  lastSeen?: number;
  ip?: string;
  banned?: boolean;
  banReason?: string;
  bannedAt?: number; // when Dash saw the ban happen
  bannedBy?: string; // from the ban list ("Server" means the console)
  op?: boolean; // only known after Dash saw an op/deop
  whitelisted?: boolean; // known after "whitelist list"
}

export type ActivityKind =
  | "join"
  | "leave"
  | "advancement"
  | "death"
  | "kick"
  | "ban"
  | "unban"
  | "op"
  | "deop"
  | "whitelist";

export interface Activity {
  id: number;
  player: string;
  kind: ActivityKind;
  text: string;
  at: number;
}

export interface ChunkyStatus {
  state: "running" | "paused" | "finished" | "stopped";
  world: string;
  percent: number | null;
  chunks: number | null;
  eta: string | null;
}

export interface ServerState {
  players: Record<string, PlayerInfo>; // key = lower-case name
  maxPlayers: number | null;
  started: boolean; // saw a "Starting minecraft server" line
  ready: boolean; // saw "Done (…)!" since that start
  stopping: boolean;
  startedAt: number | null;
  lastExit: { at: number; error: string | null } | null;
  whitelistKnown: boolean;
  bansKnown: boolean;
  seed: string | null;
  worldBorder: number | null;
  chunky: ChunkyStatus | null;
  activity: Activity[]; // oldest first, capped
}

export function emptyServerState(): ServerState {
  return {
    players: {},
    maxPlayers: null,
    started: false,
    ready: false,
    stopping: false,
    startedAt: null,
    lastExit: null,
    whitelistKnown: false,
    bansKnown: false,
    seed: null,
    worldBorder: null,
    chunky: null,
    activity: [],
  };
}

// A copy React can tell apart from the old one.
export function snapshot(state: ServerState): ServerState {
  return { ...state, players: { ...state.players }, activity: state.activity.slice() };
}

export function player(state: ServerState, name: string): PlayerInfo {
  const key = name.toLowerCase();
  let p = state.players[key];
  if (!p) {
    p = { name, online: false };
    state.players[key] = p;
  } else {
    p = { ...p };
    state.players[key] = p;
  }
  return p;
}

function everyoneOffline(state: ServerState, at: number) {
  for (const key of Object.keys(state.players)) {
    const p = state.players[key];
    if (p.online) state.players[key] = { ...p, online: false, onlineSince: undefined, lastSeen: at };
  }
}

function addActivity(state: ServerState, id: number, name: string, kind: ActivityKind, text: string, at: number) {
  state.activity.push({ id, player: name, kind, text, at });
  if (state.activity.length > 300) state.activity.splice(0, state.activity.length - 300);
}

function splitNames(list: string): { name: string; uuid?: string }[] {
  return list
    .split(/,\s*/)
    .map((part) => part.trim())
    .filter(Boolean)
    .map((part) => {
      const m = /^(.+?)(?: \(([0-9a-fA-F-]{32,36})\))?$/.exec(part);
      return { name: m ? m[1] : part, uuid: m?.[2] };
    });
}

// Applies one console line to the state, in order. Mutates `state`.
export function applyLine(state: ServerState, id: number, line: ParsedLine, at: number) {
  const msg = line.message;
  let m: RegExpExecArray | null;

  if (line.source === "[Tinker]") {
    if ((m = RX.tinkerStopped.exec(msg))) {
      everyoneOffline(state, at);
      state.ready = false;
      state.stopping = false;
      state.startedAt = null;
      state.lastExit = { at, error: m[1] ?? null };
    }
    return;
  }

  if ((m = RX.starting.exec(msg))) {
    if (!state.started || state.ready || state.lastExit) {
      // a new run: forget who was online in the last one
      everyoneOffline(state, at);
      state.startedAt = at;
    }
    state.started = true;
    state.ready = false;
    state.stopping = false;
    state.lastExit = null;
    return;
  }
  if (RX.done.test(msg)) {
    state.ready = true;
    if (state.startedAt === null) state.startedAt = at;
    return;
  }
  if (RX.stopping.test(msg)) {
    state.stopping = true;
    return;
  }

  if ((m = RX.uuid.exec(msg))) {
    player(state, m[1]).uuid = m[2];
    return;
  }
  if ((m = RX.login.exec(msg))) {
    const ip = m[2];
    const cut = ip.lastIndexOf(":");
    player(state, m[1]).ip = cut > 0 ? ip.slice(0, cut) : ip;
    return;
  }
  if ((m = RX.join.exec(msg))) {
    const p = player(state, m[1]);
    p.online = true;
    p.onlineSince = at;
    addActivity(state, id, p.name, "join", "Joined the game", at);
    return;
  }
  if ((m = RX.leave.exec(msg))) {
    const p = player(state, m[1]);
    p.online = false;
    p.onlineSince = undefined;
    p.lastSeen = at;
    addActivity(state, id, p.name, "leave", "Left the game", at);
    return;
  }
  if ((m = RX.list.exec(msg))) {
    state.maxPlayers = Number(m[2]);
    const names = splitNames(m[3]);
    const online = new Set(names.map((n) => n.name.toLowerCase()));
    for (const key of Object.keys(state.players)) {
      const p = state.players[key];
      if (p.online && !online.has(key)) state.players[key] = { ...p, online: false, onlineSince: undefined, lastSeen: at };
    }
    for (const n of names) {
      const p = player(state, n.name);
      if (n.uuid) p.uuid = n.uuid;
      if (!p.online) {
        p.online = true;
        p.onlineSince = undefined; // online, but since when is unknown
      }
    }
    return;
  }
  if ((m = RX.kicked.exec(msg))) {
    addActivity(state, id, player(state, m[1]).name, "kick", `Kicked: ${m[2]}`, at);
    return;
  }
  if ((m = RX.banned.exec(msg))) {
    const p = player(state, m[1]);
    p.banned = true;
    p.banReason = m[2];
    p.bannedAt = at;
    addActivity(state, id, p.name, "ban", `Banned: ${m[2]}`, at);
    return;
  }
  if ((m = RX.unbanned.exec(msg))) {
    const p = player(state, m[1]);
    p.banned = false;
    p.banReason = undefined;
    p.bannedAt = undefined;
    p.bannedBy = undefined;
    addActivity(state, id, p.name, "unban", "Unbanned", at);
    return;
  }
  if ((m = RX.op.exec(msg))) {
    player(state, m[1]).op = true;
    addActivity(state, id, m[1], "op", "Made an operator", at);
    return;
  }
  if ((m = RX.deop.exec(msg))) {
    player(state, m[1]).op = false;
    addActivity(state, id, m[1], "deop", "No longer an operator", at);
    return;
  }
  if ((m = RX.whitelistAdd.exec(msg))) {
    player(state, m[1]).whitelisted = true;
    addActivity(state, id, m[1], "whitelist", "Added to the whitelist", at);
    return;
  }
  if ((m = RX.whitelistRemove.exec(msg))) {
    player(state, m[1]).whitelisted = false;
    addActivity(state, id, m[1], "whitelist", "Removed from the whitelist", at);
    return;
  }
  if ((m = RX.whitelistList.exec(msg)) || RX.whitelistNone.test(msg)) {
    const names = m ? splitNames(m[2]).map((n) => n.name) : [];
    const listed = new Set(names.map((n) => n.toLowerCase()));
    for (const key of Object.keys(state.players)) {
      state.players[key] = { ...state.players[key], whitelisted: listed.has(key) };
    }
    for (const n of names) player(state, n).whitelisted = true;
    state.whitelistKnown = true;
    return;
  }
  if (RX.banHeader.test(msg) || RX.banNone.test(msg)) {
    // The entries follow on the next lines ("X was banned by Y: reason").
    for (const key of Object.keys(state.players)) {
      if (state.players[key].banned) state.players[key] = { ...state.players[key], banned: false, banReason: undefined };
    }
    state.bansKnown = true;
    return;
  }
  if ((m = RX.banEntry.exec(msg))) {
    const p = player(state, m[1]);
    p.banned = true;
    p.banReason = m[3];
    p.bannedBy = m[2];
    return;
  }
  if ((m = RX.advancement.exec(msg))) {
    addActivity(state, id, player(state, m[1]).name, "advancement", `Earned advancement [${m[3]}]`, at);
    return;
  }
  if ((m = RX.seed.exec(msg))) {
    state.seed = m[1];
    return;
  }
  if ((m = RX.worldBorder.exec(msg))) {
    state.worldBorder = Number(m[1].replace(/,/g, ""));
    return;
  }
  if ((m = RX.chunkyTask.exec(msg))) {
    const word = m[1];
    const progress = RX.chunkyProgress.exec(msg);
    const eta = RX.chunkyEta.exec(msg);
    const stateWord: ChunkyStatus["state"] =
      word === "paused" ? "paused" : word === "finished" ? "finished" : word === "stopped" || word === "cancelled" ? "stopped" : "running";
    state.chunky = {
      state: stateWord,
      world: m[2],
      percent: progress ? Number(progress[2].replace(",", ".")) : stateWord === "finished" ? 100 : word === "started" ? 0 : state.chunky?.percent ?? null,
      chunks: progress ? Number(progress[1].replace(/,/g, "")) : state.chunky?.chunks ?? null,
      eta: eta ? eta[1] : stateWord === "running" ? state.chunky?.eta ?? null : null,
    };
    return;
  }

  // Deaths: only for players Dash already knows, so mob deaths aren't counted.
  const space = msg.indexOf(" ");
  if (space > 0) {
    const name = msg.slice(0, space);
    const known = state.players[name.toLowerCase()];
    if (known && DEATH.test(msg.slice(space))) {
      addActivity(state, id, known.name, "death", msg.slice(space + 1).replace(/^./, (c) => c.toUpperCase()), at);
    }
  }
}

// ---------------------------------------------------------------------------
// Small formatting helpers shared by the pages
// ---------------------------------------------------------------------------

export function formatDuration(ms: number): string {
  const s = Math.max(0, Math.floor(ms / 1000));
  const d = Math.floor(s / 86_400);
  const h = Math.floor((s % 86_400) / 3600);
  const m = Math.floor((s % 3600) / 60);
  if (d > 0) return `${d}d ${h}h`;
  if (h > 0) return `${h}h ${String(m).padStart(2, "0")}m`;
  if (m > 0) return `${m}m`;
  return `${s}s`;
}

export function timeAgo(at: number, now = Date.now()): string {
  const ms = now - at;
  if (ms < 45_000) return "just now";
  return `${formatDuration(ms).split(" ")[0]} ago`;
}

export function formatGB(bytes: number | bigint): string {
  const gb = Number(bytes) / 1024 ** 3;
  return gb >= 10 ? gb.toFixed(0) : gb.toFixed(1);
}

export function formatClock(at: number, withDate = false): string {
  const d = new Date(at);
  const pad = (n: number) => String(n).padStart(2, "0");
  const time = `${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;
  if (!withDate) return time;
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())} ${time}`;
}

export function formatWhen(at: number, now = Date.now()): string {
  const d = new Date(at);
  const today = new Date(now);
  const time = d.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  if (d.toDateString() === today.toDateString()) return `Today, ${time}`;
  const yesterday = new Date(now - 86_400_000);
  if (d.toDateString() === yesterday.toDateString()) return `Yesterday, ${time}`;
  return `${d.toLocaleDateString([], { month: "short", day: "numeric" })}, ${time}`;
}

// Where an Agent address lives, for the "Connection" stat and badges.
export function connectionKind(address: string): "This PC" | "Local network" | "Tailscale" | "Internet" {
  const a = address.trim().toLowerCase();
  if (a === "localhost" || a === "::1" || a.startsWith("127.")) return "This PC";
  const parts = a.split(".").map(Number);
  if (parts.length === 4 && parts.every((n) => Number.isInteger(n) && n >= 0 && n <= 255)) {
    const [p0, p1] = parts;
    if (p0 === 10 || (p0 === 192 && p1 === 168) || (p0 === 172 && p1 >= 16 && p1 <= 31)) return "Local network";
    if (p0 === 100 && p1 >= 64 && p1 <= 127) return "Tailscale";
    return "Internet";
  }
  if (a.endsWith(".local") || a.endsWith(".lan") || a.endsWith(".home.arpa") || !a.includes(".")) return "Local network";
  if (a.endsWith(".ts.net")) return "Tailscale";
  return "Internet";
}

// A Minecraft player's face, by name. The design uses this same service.
export function playerHead(name: string): string {
  return `https://api.mcheads.org/head/${encodeURIComponent(name)}/96`;
}

// Usernames that are safe to put into a console command.
export function isValidPlayerName(name: string): boolean {
  return /^[.*]?[A-Za-z0-9_]{1,32}$/.test(name.trim());
}
