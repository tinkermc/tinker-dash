// "Create server" and "Import server" windows. Opened from the Server tab and
// from "New server" in the header's server switcher.
import { useEffect, useState } from "react";
import { Badge } from "@/ui/components/Badge";
import { Banner } from "@/ui/components/Banner";
import { Checkbox } from "@/ui/components/Checkbox";
import { EmptyState } from "@/ui/components/EmptyState";
import { InputField } from "@/ui/components/InputField";
import { Loader } from "@/ui/components/Loader";
import { PrimaryButton } from "@/ui/components/PrimaryButton";
import { SelectField } from "@/ui/components/SelectField";
import { SettingRow } from "@/ui/components/SettingRow";
import OutlineLabel from "@/ui/icons/OutlineLabel";
import RoundAdd from "@/ui/icons/RoundAdd";
import RoundDownload from "@/ui/icons/RoundDownload";
import RoundFolderZip from "@/ui/icons/RoundFolderZip";
import RoundMemory from "@/ui/icons/RoundMemory";
import RoundSearch from "@/ui/icons/RoundSearch";
import RoundSettingsEthernet from "@/ui/icons/RoundSettingsEthernet";
import RoundUpload from "@/ui/icons/RoundUpload";
import Versions from "@/ui/icons/Versions";
import { ServerType, type ImportableServer } from "../gen/tinker/v1/server_pb";
import { useAgent } from "../lib/AgentContext";
import { errorMessage, serverTypeLabel } from "../lib/agent";
import { openExternal } from "../lib/external";
import { notify } from "../lib/notify";
import { inputClass } from "./fields";
import { ShellDialog } from "./Modal";

const TYPES: Record<string, ServerType> = {
  Vanilla: ServerType.VANILLA,
  Paper: ServerType.PAPER,
  Fabric: ServerType.FABRIC,
};

// ---------------------------------------------------------------------------
// Create
// ---------------------------------------------------------------------------

export function CreateServerDialog({
  open,
  onClose,
  onImportInstead,
}: {
  open: boolean;
  onClose: () => void;
  onImportInstead: () => void;
}) {
  const { createServer } = useAgent();
  const [name, setName] = useState("");
  const [type, setType] = useState("Vanilla");
  const [version, setVersion] = useState("");
  const [memoryGb, setMemoryGb] = useState("2");
  const [port, setPort] = useState("");
  const [eula, setEula] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Start fresh every time the window opens.
  useEffect(() => {
    if (!open) return;
    setName("");
    setType("Vanilla");
    setVersion("");
    setMemoryGb("2");
    setPort("");
    setEula(false);
    setError(null);
  }, [open]);

  const memoryMb = Math.round(Number(memoryGb) * 1024);
  const portNumber = port.trim() ? Number(port) : 0;
  const memoryOk = Number.isFinite(memoryMb) && memoryMb >= 512;
  const portOk = !port.trim() || (Number.isInteger(portNumber) && portNumber >= 1024 && portNumber <= 65535);
  const ready = name.trim() !== "" && memoryOk && portOk && eula;

  async function create() {
    if (!ready || busy) return;
    setBusy(true);
    setError(null);
    try {
      const server = await createServer({
        name: name.trim(),
        type: TYPES[type],
        version: version.trim(), // empty = latest release
        memoryMb,
        port: portNumber, // 0 = first free port from 25565
        acceptEula: true,
      });
      notify.success(
        `Created ${server?.name ?? name.trim()}`,
        server
          ? `${serverTypeLabel(server.type)} ${server.version} on port ${server.port}. Press Start on the Server tab.`
          : undefined,
      );
      onClose();
    } catch (err) {
      setError(errorMessage(err));
    } finally {
      setBusy(false);
    }
  }

  return (
    <ShellDialog
      open={open}
      onClose={onClose}
      icon={<RoundAdd />}
      title="Create server"
      description="The Agent downloads Minecraft and sets everything up on the server PC."
      className="w-[520px]"
      footer={
        <>
          <PrimaryButton
            className="mr-auto"
            icon={<RoundUpload />}
            text="Import instead"
            color="gray-transparent"
            size="sm"
            onClick={onImportInstead}
          />
          <PrimaryButton icon={null} text="Cancel" color="gray" onClick={onClose} />
          <PrimaryButton
            icon={<RoundAdd />}
            text={busy ? "Creating…" : "Create server"}
            disabled={!ready || busy}
            onClick={() => void create()}
          />
        </>
      }
    >
      <InputField
        required
        title="Name"
        labelIcon={<OutlineLabel />}
        input={
          <input
            autoFocus
            className={inputClass}
            placeholder="Survival World"
            maxLength={64}
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        }
      />
      <div className="grid w-full grid-cols-2 items-start gap-4 mobile:grid-cols-1">
        <SelectField label="Type" placeholder="Vanilla" helperText="" value={type} onValueChange={setType}>
          <SelectField.Item value="Vanilla">Vanilla</SelectField.Item>
          <SelectField.Item value="Paper">Paper (plugins)</SelectField.Item>
          <SelectField.Item value="Fabric">Fabric (mods)</SelectField.Item>
        </SelectField>
        <InputField
          title="Minecraft version"
          labelIcon={<Versions />}
          helperText="Empty = newest release"
          input={
            <input
              className={inputClass}
              placeholder="Latest"
              value={version}
              onChange={(event) => setVersion(event.target.value)}
            />
          }
        />
        <InputField
          required
          title="Max memory"
          labelIcon={<RoundMemory />}
          state={memoryOk ? "default" : "error"}
          helperText={memoryOk ? "2–4 GB suits most vanilla servers." : "At least 0.5 GB."}
          input={
            <input
              className={inputClass}
              type="number"
              min={0.5}
              step={0.5}
              value={memoryGb}
              onChange={(event) => setMemoryGb(event.target.value)}
            />
          }
          trailing={<span className="font-['Inter'] text-[14px] font-[500] leading-[20px] text-[#7a828e]">GB</span>}
        />
        <InputField
          title="Port"
          labelIcon={<RoundSettingsEthernet />}
          state={portOk ? "default" : "error"}
          helperText={portOk ? "Empty = first free port from 25565" : "Between 1024 and 65535."}
          input={
            <input
              className={inputClass}
              type="number"
              placeholder="Automatic"
              value={port}
              onChange={(event) => setPort(event.target.value)}
            />
          }
        />
      </div>
      <div className="flex w-full cursor-pointer items-start gap-2" onClick={() => setEula((on) => !on)}>
        <Checkbox className="mt-0.5 flex-none" checked={eula} />
        <span className="font-['Inter'] text-[13px] font-[400] leading-[20px] text-[#c4c9d1]">
          I agree to the{" "}
          <span
            className="text-[#3b9eff] underline hover:text-[#7cbcff]"
            onClick={(event) => {
              event.stopPropagation();
              void openExternal("https://aka.ms/MinecraftEULA");
            }}
          >
            Minecraft EULA
          </span>
          . Minecraft requires this before a server can run.
        </span>
      </div>
      {busy ? (
        <Banner
          variant="info"
          icon={<RoundDownload />}
          title="Downloading Minecraft…"
          description="This can take a minute. You can close this window; the server still gets created."
        />
      ) : null}
      {error ? <Banner variant="error" title="Couldn't create the server" description={error} /> : null}
    </ShellDialog>
  );
}

// ---------------------------------------------------------------------------
// Import (Crafty Controller or any folder)
// ---------------------------------------------------------------------------

export function ImportServerDialog({ open, onClose }: { open: boolean; onClose: () => void }) {
  const { clients, importServer } = useAgent();
  const [folder, setFolder] = useState("");
  const [found, setFound] = useState<ImportableServer[] | null>(null);
  const [searching, setSearching] = useState(false);
  const [importing, setImporting] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function find(where: string) {
    if (!clients) return;
    setSearching(true);
    setError(null);
    try {
      const res = await clients.servers.findImportableServers({ folder: where.trim() });
      setFound(res.servers);
    } catch (err) {
      setFound(null);
      setError(errorMessage(err));
    } finally {
      setSearching(false);
    }
  }

  // Look in Crafty Controller's usual folders as soon as the window opens.
  useEffect(() => {
    if (!open) return;
    setFolder("");
    setFound(null);
    setError(null);
    void find("");
  }, [open]); // eslint-disable-line react-hooks/exhaustive-deps -- only when it opens

  async function doImport(server: ImportableServer) {
    if (importing) return;
    setImporting(server.path);
    setError(null);
    try {
      const imported = await importServer({ path: server.path, name: server.suggestedName });
      notify.success(`Imported ${imported?.name ?? server.suggestedName}`, "Tinker made a copy. The original folder wasn't changed.");
      onClose();
    } catch (err) {
      setError(errorMessage(err));
    } finally {
      setImporting(null);
    }
  }

  return (
    <ShellDialog
      open={open}
      onClose={onClose}
      icon={<RoundUpload />}
      title="Import server"
      description="Copy an existing server into Tinker. The original folder isn't changed."
      className="w-[600px]"
      footer={<PrimaryButton icon={null} text="Close" color="gray" onClick={onClose} />}
    >
      <div className="flex w-full items-end gap-2">
        <InputField
          title="Folder on the server PC"
          labelIcon={<RoundFolderZip />}
          helperText="Leave empty to look where Crafty Controller keeps its servers."
          input={
            <input
              className={inputClass}
              placeholder="/var/opt/minecraft/crafty/crafty-4/servers"
              value={folder}
              onChange={(event) => setFolder(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === "Enter") void find(event.currentTarget.value);
              }}
            />
          }
        />
        <PrimaryButton
          className="mb-6 h-10 flex-none"
          icon={<RoundSearch />}
          text={searching ? "Looking…" : "Find servers"}
          color="gray"
          disabled={searching}
          onClick={() => void find(folder)}
        />
      </div>
      {error ? <Banner variant="error" title="Couldn't import" description={error} /> : null}
      {searching && !found ? (
        <div className="flex w-full items-center justify-center py-8">
          <Loader className="text-[24px] text-[#22c55e]" />
        </div>
      ) : found && found.length === 0 ? (
        <EmptyState
          className="py-6"
          icon={<RoundSearch />}
          title="No servers found"
          description={
            folder.trim()
              ? "There's no Minecraft server in that folder. Pick the folder that holds server.properties."
              : "Crafty Controller's folders are empty or missing. Type the folder of any server instead."
          }
        />
      ) : found ? (
        <div className="flex w-full flex-col items-start overflow-hidden rounded-xl border border-solid border-[#1f242b] bg-[#0e1114]">
          {found.map((server, index) => (
            <SettingRow
              key={server.path}
              className="py-3"
              title={server.suggestedName}
              description={
                <span className="break-all">
                  {[server.jar || "Unknown jar", server.port ? `Port ${server.port}` : null, server.path]
                    .filter(Boolean)
                    .join(" · ")}
                </span>
              }
              badge={
                <Badge
                  label={server.source === "crafty" ? "Crafty" : "Folder"}
                  variant={server.source === "crafty" ? "blue" : "gray"}
                />
              }
              control={
                <PrimaryButton
                  icon={<RoundDownload />}
                  text={importing === server.path ? "Copying…" : "Import"}
                  size="sm"
                  disabled={importing !== null}
                  onClick={() => void doImport(server)}
                />
              }
              divider={index < found.length - 1}
            />
          ))}
        </div>
      ) : null}
    </ShellDialog>
  );
}
