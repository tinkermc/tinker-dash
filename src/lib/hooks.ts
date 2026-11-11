// Ready-made hooks for pages. Each one handles loading, live updates and
// cleanup, so pages only have to show the data.
import { useCallback, useEffect, useState } from "react";
import type { WatchHostStatsResponse } from "../gen/tinker/v1/agent_pb";
import type { Server } from "../gen/tinker/v1/server_pb";
import { useAgent } from "./AgentContext";
import { errorMessage } from "./agent";

// The list of servers. Call refresh() after creating/importing/starting one.
export function useServers() {
  const { clients } = useAgent();
  const [servers, setServers] = useState<Server[]>([]);
  const [error, setError] = useState<string | null>(null);

  const refresh = useCallback(async () => {
    if (!clients) return;
    try {
      const res = await clients.servers.listServers({});
      setServers(res.servers);
      setError(null);
    } catch (err) {
      setError(errorMessage(err));
    }
  }, [clients]);

  useEffect(() => {
    refresh();
  }, [refresh]);

  return { servers, error, refresh };
}

// Live CPU and RAM of the server PC, updated every second.
export function useHostStats() {
  const { clients } = useAgent();
  const [stats, setStats] = useState<WatchHostStatsResponse | null>(null);

  useEffect(() => {
    if (!clients) return;
    const stop = new AbortController();
    (async () => {
      try {
        for await (const s of clients.agent.watchHostStats({}, { signal: stop.signal })) {
          setStats(s);
        }
      } catch {
        // stream ended: page closed or Agent went away
      }
    })();
    return () => stop.abort(); // stop streaming when the page closes
  }, [clients]);

  return stats;
}

// Live console lines for one server (keeps the last 1000).
export function useConsole(serverId: string | null) {
  const { clients } = useAgent();
  const [lines, setLines] = useState<string[]>([]);

  useEffect(() => {
    setLines([]);
    if (!clients || !serverId) return;
    const stop = new AbortController();
    (async () => {
      try {
        for await (const msg of clients.servers.watchConsole({ serverId }, { signal: stop.signal })) {
          setLines((old) => [...old.slice(-999), msg.line]);
        }
      } catch {
        // stream ended
      }
    })();
    return () => stop.abort();
  }, [clients, serverId]);

  return lines;
}