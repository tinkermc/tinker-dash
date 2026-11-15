import { Banner } from "@/ui/components/Banner";
import { ExplorerItem } from "@/ui/components/ExplorerItem";
import { IconButton } from "@/ui/components/IconButton";
import { PageShell } from "@/ui/components/PageShell";
import { PrimaryButton } from "@/ui/components/PrimaryButton";
import { TabBar } from "@/ui/components/TabBar";
import RoundAdd from "@/ui/icons/RoundAdd";
import RoundRefresh from "@/ui/icons/RoundRefresh";
import RoundSaveAll from "@/ui/icons/RoundSaveAll";
import RoundSearch from "@/ui/icons/RoundSearch";
import RoundUpgrade from "@/ui/icons/RoundUpgrade";
import { ConnectedHeader } from "../components/ConnectedHeader";
import { previewClass } from "../components/fields";
import { PreviewBanner, ServerGate } from "../components/PageStates";
import { useAgent } from "../lib/AgentContext";
import { useSelectedServer } from "../lib/hooks";
import type { PageProps } from "./types";

function Files({ onNavigate }: PageProps) {
  const { pending, restartServer } = useAgent();
  const { server } = useSelectedServer();
  const running = server?.running ?? false;
  const action = server ? pending[server.id] : undefined;

  return (
    <div className="flex w-full flex-col items-start bg-[#0b0d10] min-h-full font-['Inter']">
      <PageShell
        header={<ConnectedHeader />}
        tabs={<TabBar selected="files" onNavigate={onNavigate} />}
        title="Files"
        subtitle={server ? `Browse and edit ${server.name}'s server folder` : "Browse and edit the server folder"}
        actions={
          <>
            <PrimaryButton
              icon={<RoundUpgrade />}
              text="Upload"
              color="gray"
              size="sm"
              disabled={true}
              title="Needs an Agent update"
            />
            <PrimaryButton
              icon={<RoundAdd />}
              text="New file"
              color="gray"
              size="sm"
              disabled={true}
              title="Needs an Agent update"
            />
          </>
        }
      >
        <ServerGate>
          {server ? (
            <Banner
              title="Changes apply after a server restart"
              description={`${server.name} reads server.properties at startup. Save, then restart.`}
              action={
                <PrimaryButton
                  icon={<RoundRefresh />}
                  text={action === "restarting" ? "Restarting…" : "Restart"}
                  color="gray"
                  size="sm"
                  disabled={!running || action !== undefined}
                  title={running ? undefined : "The server isn't running"}
                  onClick={() => {
                    if (running && action === undefined) void restartServer(server.id);
                  }}
                />
              }
              variant="info"
            />
          ) : null}
          <PreviewBanner
            title="Files are a preview for now"
            description="Browsing and editing the server folder needs an Agent update. The files below are sample data."
          />
        <div className={`flex w-full gap-6 items-stretch mobile:flex-col ${previewClass}`}>
          <aside className="flex w-[280px] flex-none flex-col items-start gap-2 rounded-xl border border-solid border-[#1f242b] bg-[#12151a] px-2 py-2 mobile:w-full mobile:flex-none">
            <div className="flex w-full items-center justify-center gap-1 border-b border-solid border-[#1f242b] px-1 pb-2">
              <div className="flex h-8 w-[200px] flex-none items-center gap-1.5 rounded-[6px] border border-solid border-[#2a3038] bg-[#0b0d10] px-2 focus-within:border-[#22c55e]">
                <RoundSearch className="font-['Inter'] text-[15px] font-[400] leading-[20px] text-[#7a828e]" />
                <input
                  className="grow shrink-0 basis-0 self-stretch font-['Inter'] text-[13px] font-[400] leading-[20px] text-[#ffffff] outline-none placeholder:text-[#7a828e]"
                  placeholder="Find file"
                  value=""
                  type="search"
                />
              </div>
              <IconButton tooltip="" icon={<RoundAdd />} color="gray" />
              <IconButton tooltip="" icon={<RoundUpgrade />} color="gray" />
            </div>
            <div className="flex w-full flex-col items-start">
              <ExplorerItem name="config" count="48" showChevron={true} />
              <ExplorerItem name="logs" count="14" showChevron={true} />
              <ExplorerItem name="mods" count="12" showChevron={true} />
              <ExplorerItem name="world" count="12" expanded={true} />
              <ExplorerItem
                name="region"
                count="0"
                hideCount={true}
                depth="1"
              />
              <ExplorerItem
                type="file"
                name="level.dat"
                count="0"
                hideCount={true}
                depth="1"
              />
              <ExplorerItem
                type="file"
                name="eula.txt"
                count="0"
                hideCount={true}
              />
              <ExplorerItem
                type="file"
                name="ops.json"
                count="0"
                hideCount={true}
              />
              <ExplorerItem
                type="file"
                name="server.properties"
                count="0"
                hideCount={true}
                selected={true}
                unsavedChanges={true}
              />
              <ExplorerItem
                type="file"
                name="user_jvm_args.txt"
                count="0"
                hideCount={true}
              />
              <ExplorerItem
                type="file"
                name="whitelist.json"
                count="0"
                hideCount={true}
              />
            </div>
          </aside>
          <div className="flex min-h-[520px] grow shrink-0 basis-0 flex-col items-start overflow-hidden rounded-xl border border-solid border-[#232830] bg-[#0b0d10]">
            <div className="flex w-full items-center justify-between border-b border-solid border-[#232830] bg-[#101317] px-4 py-2 gap-3 mobile:flex-col mobile:items-start">
              <div className="flex items-center gap-2">
                <div className="flex h-2 w-2 flex-none items-start rounded-[9999px] bg-[#f59e0b]" />
                <span className="font-['Inter'] text-[13px] font-[400] leading-[20px] text-[#7a828e]">
                  {server?.name ?? "Server"} /
                </span>
                <span className="font-['Inter'] text-[13px] font-[600] leading-[20px] text-[#ffffff]">
                  server.properties
                </span>
                <span className="font-['Inter'] text-[12px] font-[400] leading-[16px] text-[#7a828e]">
                  2.1 KB · edited 2 min ago · unsaved
                </span>
              </div>
              <div className="flex items-center gap-2">
                <PrimaryButton
                  tooltip=""
                  icon={<RoundRefresh />}
                  text="Revert"
                  color="gray"
                  size="sm"
                />
                <PrimaryButton
                  tooltip=""
                  icon={<RoundSaveAll />}
                  text="Save"
                  size="sm"
                />
              </div>
            </div>
            <div className="flex w-full grow shrink-0 basis-0 flex-col items-start gap-0.5 px-4 py-3">
              <span className="font-['Inter'] text-[13px] font-[400] leading-[20px] text-[#5f6773]">
                #Minecraft server properties
              </span>
              <span className="font-['Inter'] text-[13px] font-[400] leading-[20px] text-[#c4c9d1]">
                allow-flight=true
              </span>
              <span className="font-['Inter'] text-[13px] font-[400] leading-[20px] text-[#c4c9d1]">
                difficulty=normal
              </span>
              <span className="font-['Inter'] text-[13px] font-[400] leading-[20px] text-[#c4c9d1]">
                enable-command-block=false
              </span>
              <span className="font-['Inter'] text-[13px] font-[400] leading-[20px] text-[#c4c9d1]">
                gamemode=survival
              </span>
              <span className="font-['Inter'] text-[13px] font-[400] leading-[20px] text-[#c4c9d1]">
                level-name=world
              </span>
              <span className="w-full font-['Inter'] text-[13px] font-[400] leading-[20px] text-[#fcd34d] border-l-2 border-solid border-[#f59e0b] bg-[#f59e0b14] pl-2">
                max-players=20
              </span>
              <span className="font-['Inter'] text-[13px] font-[400] leading-[20px] text-[#c4c9d1]">
                motd=NeoForge SMP - Create and AE2
              </span>
              <span className="font-['Inter'] text-[13px] font-[400] leading-[20px] text-[#c4c9d1]">
                online-mode=true
              </span>
              <span className="font-['Inter'] text-[13px] font-[400] leading-[20px] text-[#c4c9d1]">
                pvp=true
              </span>
              <span className="font-['Inter'] text-[13px] font-[400] leading-[20px] text-[#c4c9d1]">
                server-port=25565
              </span>
              <span className="font-['Inter'] text-[13px] font-[400] leading-[20px] text-[#c4c9d1]">
                simulation-distance=10
              </span>
              <span className="font-['Inter'] text-[13px] font-[400] leading-[20px] text-[#c4c9d1]">
                view-distance=12
              </span>
              <span className="font-['Inter'] text-[13px] font-[400] leading-[20px] text-[#c4c9d1]">
                white-list=true
              </span>
            </div>
            <div className="flex w-full items-center gap-2 border-t border-solid border-[#1a1e23] bg-[#101317] px-4 py-1.5">
              <span className="grow shrink-0 basis-0 font-['Inter'] text-[11px] font-[400] leading-[16px] text-[#7a828e]">
                UTF-8 · Properties · 1 unsaved change
              </span>
              <span className="font-['Inter'] text-[11px] font-[400] leading-[16px] text-[#7a828e]">
                Ln 7, Col 15
              </span>
            </div>
          </div>
        </div>
        </ServerGate>
      </PageShell>
    </div>
  );
}

export default Files;