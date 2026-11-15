import { Banner } from "@/ui/components/Banner";
import { FilterChip } from "@/ui/components/FilterChip";
import { IconButton } from "@/ui/components/IconButton";
import { ModCardModFrame } from "@/ui/components/ModCardModFrame";
import { ModListItem } from "@/ui/components/ModListItem";
import { PageShell } from "@/ui/components/PageShell";
import { PrimaryButton } from "@/ui/components/PrimaryButton";
import { SectionCard } from "@/ui/components/SectionCard";
import { SegmentedControl } from "@/ui/components/SegmentedControl";
import { SelectField } from "@/ui/components/SelectField";
import { Switch } from "@/ui/components/Switch";
import { TabBar } from "@/ui/components/TabBar";
import BaselineAutoFixHigh from "@/ui/icons/BaselineAutoFixHigh";
import Curseforge from "@/ui/icons/Curseforge";
import Modrinth from "@/ui/icons/Modrinth";
import RoundDownload from "@/ui/icons/RoundDownload";
import RoundLock from "@/ui/icons/RoundLock";
import RoundMoreHoriz from "@/ui/icons/RoundMoreHoriz";
import RoundOpenInNew from "@/ui/icons/RoundOpenInNew";
import RoundSearch from "@/ui/icons/RoundSearch";
import RoundStop from "@/ui/icons/RoundStop";
import RoundUpgrade from "@/ui/icons/RoundUpgrade";
import Sort from "@/ui/icons/Sort";
import { ConnectedHeader, serverDetail } from "../components/ConnectedHeader";
import { previewClass } from "../components/fields";
import { PreviewBanner, ServerGate } from "../components/PageStates";
import { useAgent } from "../lib/AgentContext";
import { useSelectedServer } from "../lib/hooks";
import type { PageProps } from "./types";

function Mods({ onNavigate }: PageProps) {
  const { pending, stopServer } = useAgent();
  const { server } = useSelectedServer();
  const running = server?.running ?? false;
  const action = server ? pending[server.id] : undefined;

  return (
    <div className="flex w-full flex-col items-start bg-[#0b0d10] min-h-full font-['Inter']">
      <PageShell
        header={<ConnectedHeader />}
        tabs={<TabBar selected="mods" onNavigate={onNavigate} />}
        title="Mods"
        subtitle={server ? `${server.name} · ${serverDetail(server)}` : "Add, remove and update mods."}
        actions={
          <>
            <PrimaryButton
              icon={<RoundUpgrade />}
              text="Update all"
              color="gray"
              size="sm"
              disabled={true}
              title="Needs an Agent update"
            />
            <IconButton className={previewClass} icon={<RoundMoreHoriz />} color="gray" />
          </>
        }
      >
        <ServerGate>
          {running && server ? (
            <Banner
              icon={<RoundLock />}
              title="Server is running — stop it to add or remove mods"
              description={`Mods load at startup, so changes are locked while ${server.name} is online.`}
              action={
                <PrimaryButton
                  icon={<RoundStop />}
                  text={action === "stopping" ? "Stopping…" : "Stop"}
                  color="red"
                  size="sm"
                  disabled={action !== undefined}
                  onClick={() => {
                    if (action === undefined) void stopServer(server.id);
                  }}
                />
              }
              variant="locked"
            />
          ) : null}
          <PreviewBanner
            title="Mods are a preview for now"
            description="Listing, installing and removing mods needs an Agent update. Everything below is sample data."
          />
        <div className={`flex w-full items-start gap-6 mobile:flex-col ${previewClass}`}>
          <aside className="flex w-[380px] flex-none flex-col items-start gap-3 mobile:w-full mobile:flex-none">
            <SectionCard
              title="Installed (12)"
              description="1 update available"
            >
              <div className="flex w-full flex-col items-start gap-2 px-3 py-3">
                <div className="flex h-10 w-full flex-none items-center gap-2 rounded-[8px] border border-solid border-[#2a3038] bg-[#0b0d10] pl-3 pr-1.5 focus-within:border-[#22c55e]">
                  <RoundSearch className="font-['Inter'] text-[18px] font-[400] leading-[20px] text-[#7a828e]" />
                  <input
                    className="grow shrink-0 basis-0 self-stretch font-['Inter'] text-[14px] font-[400] leading-[21px] text-[#ffffff] outline-none placeholder:text-[#7a828e]"
                    placeholder="Browse installed mods"
                    value=""
                    type="search"
                  />
                  <IconButton tooltip="" icon={<Sort />} color="gray" />
                </div>
                <div className="flex w-full flex-col items-start gap-2 px-1">
                  <ModListItem
                    image="https://cdn.modrinth.com/data/LNytGWDc/icon.png"
                    name="Create"
                    version="6.0.4 · simibubi"
                    action={
                      <Switch
                        checked={true}
                        disabled={true}
                      />
                    }
                    updateAvaliable={true}
                  />
                  <ModListItem
                    image="https://cdn.modrinth.com/data/u6dRKJwZ/icon.png"
                    name="Just Enough Items (JEI)"
                    version="19.21.0 · mezz"
                    action={
                      <Switch
                        checked={true}
                        disabled={true}
                      />
                    }
                  />
                  <ModListItem
                    image="https://cdn.modrinth.com/data/sk9rgfiA/icon.png"
                    name="Embeddium"
                    version="1.0.11 · embeddedt"
                    action={
                      <Switch
                        checked={true}
                        disabled={true}
                      />
                    }
                  />
                  <ModListItem
                    image="https://cdn.modrinth.com/data/R2OftAxM/icon.png"
                    name="Farmer's Delight"
                    version="1.2.6 · vectorwing"
                    action={
                      <Switch
                        checked={true}
                        disabled={true}
                      />
                    }
                  />
                  <ModListItem
                    image="https://cdn.modrinth.com/data/LOpKHB2A/icon.png"
                    name="Waystones"
                    version="21.1.5 · BlayTheNinth"
                    action={
                      <Switch
                        checked={true}
                        disabled={true}
                      />
                    }
                  />
                  <ModListItem
                    image="https://cdn.modrinth.com/data/XxWD5pD3/icon.png"
                    name="Applied Energistics 2"
                    version="19.2.4 · AlgorithmX2"
                    action={
                      <Switch
                        checked={false}
                        disabled={true}
                      />
                    }
                  />
                </div>
                <div className="flex w-full items-center justify-center gap-0.5">
                  <RoundOpenInNew className="font-['Inter'] text-[16px] font-[500] leading-[16px] text-[#7a828e]" />
                  <span className="font-['Inter'] text-[12px] font-[500] leading-[16px] text-[#7a828e] text-center py-1">
                    Show all 12 mods
                  </span>
                </div>
              </div>
            </SectionCard>
            <SectionCard
              title="Modpack"
              description="Share your exact mod list with players."
            >
              <div className="flex w-full flex-col items-start gap-3 px-4 py-4">
                <Banner
                  title="Players need these mods too"
                  description="Export a modpack so friends can join with one click in their launcher."
                  variant="info"
                />
                <div className="flex w-full items-center gap-2">
                  <div className="flex grow shrink-0 basis-0 flex-col items-center gap-2">
                    <div className="flex w-full items-center gap-2">
                      <PrimaryButton
                        className="h-auto grow shrink-0 basis-0"
                        tooltip=""
                        icon={<RoundUpgrade />}
                        text="Export .mrpack"
                        color="gray"
                        size="sm"
                      />
                      <PrimaryButton
                        className="h-auto grow shrink-0 basis-0"
                        tooltip=""
                        icon={<RoundDownload />}
                        text="Import .mrpack"
                        color="gray"
                        size="sm"
                      />
                    </div>
                    <PrimaryButton
                      className="h-auto min-h-[30px] w-full flex-none"
                      includePlusBadge={true}
                      tooltip=""
                      icon={<Modrinth />}
                      text="Modrinth Shared Instance"
                      color="purple"
                      size="sm"
                    />
                  </div>
                </div>
              </div>
            </SectionCard>
          </aside>
          <div className="flex grow shrink-0 basis-0 flex-col items-start gap-3">
            <div className="flex w-full items-center justify-between gap-3 mobile:flex-col mobile:items-start">
              <span className="font-['Inter'] text-[16px] font-[700] leading-[24px] text-[#ffffff]">
                Browse mods
              </span>
              <SegmentedControl>
                <SegmentedControl.Item
                  label="Modrinth"
                  icon={<Modrinth />}
                  selected={true}
                />
                <SegmentedControl.Item
                  label="CurseForge"
                  icon={<Curseforge />}
                  disabled={true}
                />
              </SegmentedControl>
            </div>
            <div className="flex w-full items-end gap-3 mobile:flex-col mobile:items-stretch">
              <div className="flex h-10 grow shrink-0 basis-0 items-center gap-2 rounded-[8px] border border-solid border-[#2a3038] bg-[#0b0d10] px-3 focus-within:border-[#22c55e]">
                <RoundSearch className="font-['Inter'] text-[18px] font-[400] leading-[20px] text-[#7a828e]" />
                <input
                  className="grow shrink-0 basis-0 self-stretch font-['Inter'] text-[14px] font-[400] leading-[21px] text-[#ffffff] outline-none placeholder:text-[#7a828e]"
                  placeholder="Search Modrinth for NeoForge 1.21.1 mods"
                  value=""
                  type="search"
                />
              </div>
              <SelectField
                className="h-auto w-48 flex-none mobile:w-full"
                label=""
                placeholder="Most downloads"
                helperText=""
                value={undefined}
                disabled={true}
              >
                <SelectField.Item value="Most downloads">
                  Most downloads
                </SelectField.Item>
                <SelectField.Item value="Recently updated">
                  Recently updated
                </SelectField.Item>
                <SelectField.Item value="Newest">Newest</SelectField.Item>
              </SelectField>
            </div>
            <div className="flex w-full flex-wrap items-center gap-2">
              <FilterChip label="All" count="" selected={true} />
              <FilterChip label="Tech" count="" />
              <FilterChip label="Magic" count="" />
              <FilterChip label="Adventure" count="" />
              <FilterChip label="Storage" count="" />
              <FilterChip
                label="Performance"
                count=""
                icon={<BaselineAutoFixHigh />}
              />
              <FilterChip label="Library" count="" />
            </div>
            <div className="w-full items-start gap-3 grid grid-cols-2 mobile:grid mobile:grid-cols-1">
              <ModCardModFrame
                name="Create"
                author="simibubi"
                description="Aesthetic technology: contraptions, gears and automation."
                downloadCount="12.4M"
                installed={true}
                image="https://cdn.modrinth.com/data/LNytGWDc/icon.png"
              />
              <ModCardModFrame
                name="Applied Energistics 2"
                author="AlgorithmX2"
                description="A digital storage network for all your items."
                downloadCount="9.1M"
                installed={true}
                image="https://cdn.modrinth.com/data/XxWD5pD3/icon.png"
              />
              <ModCardModFrame
                name="FerriteCore"
                author="malte0811"
                description="Reduces memory usage so big modpacks run smoothly."
                downloadCount="48.2M"
                image="https://cdn.modrinth.com/data/uXXizFIs/icon.png"
              />
              <ModCardModFrame
                name="Lithium"
                author="CaffeineMC"
                description="Server-side performance boosts with no gameplay changes."
                downloadCount="31.7M"
                image="https://cdn.modrinth.com/data/fPetb5Kh/icon.png"
              />
              <ModCardModFrame
                name="Mekanism"
                author="bradyaidanc"
                description="Machines, ore processing, power and jetpacks."
                downloadCount="6.3M"
                image="https://cdn.modrinth.com/data/ordsPcFz/icon.png"
              />
              <ModCardModFrame
                name="Sophisticated Backpacks"
                author="P3pp3rF1y"
                description="Upgradeable backpacks with sorting and pickup."
                downloadCount="4.8M"
                image="https://cdn.modrinth.com/data/Ha28R6CL/icon.png"
              />
            </div>
          </div>
        </div>
        </ServerGate>
      </PageShell>
    </div>
  );
}

export default Mods;