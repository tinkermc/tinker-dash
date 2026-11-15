import { Badge } from "@/ui/components/Badge";
import { IconButton } from "@/ui/components/IconButton";
import { PageShell } from "@/ui/components/PageShell";
import { PrimaryButton } from "@/ui/components/PrimaryButton";
import { SectionCard } from "@/ui/components/SectionCard";
import { SettingRow } from "@/ui/components/SettingRow";
import { StatCard } from "@/ui/components/StatCard";
import { StatusPill } from "@/ui/components/StatusPill";
import { TabBar } from "@/ui/components/TabBar";
import { UserListRow } from "@/ui/components/UserListRow";
import Arrow from "@/ui/icons/Arrow";
import BaselineHelp from "@/ui/icons/BaselineHelp";
import RoundAdd from "@/ui/icons/RoundAdd";
import RoundAdminPanelSettings from "@/ui/icons/RoundAdminPanelSettings";
import RoundDelete from "@/ui/icons/RoundDelete";
import RoundLabel from "@/ui/icons/RoundLabel";
import RoundLock from "@/ui/icons/RoundLock";
import RoundLogOut from "@/ui/icons/RoundLogOut";
import RoundModeEditOutline from "@/ui/icons/RoundModeEditOutline";
import RoundNewLabel from "@/ui/icons/RoundNewLabel";
import RoundNotifications from "@/ui/icons/RoundNotifications";
import RoundPeople from "@/ui/icons/RoundPeople";
import RoundPersonAddAlt1 from "@/ui/icons/RoundPersonAddAlt1";
import RoundRefresh from "@/ui/icons/RoundRefresh";
import RoundSearch from "@/ui/icons/RoundSearch";
import RoundServerX1 from "@/ui/icons/RoundServerX1";
import RoundStarFilled from "@/ui/icons/RoundStarFilled";
import RoundUpgrade from "@/ui/icons/RoundUpgrade";
import { ConnectedHeader } from "../components/ConnectedHeader";
import { previewClass } from "../components/fields";
import { PreviewBanner, ServerGate, SoonBadge } from "../components/PageStates";
import { useAgent } from "../lib/AgentContext";
import { connectionKind } from "../lib/minecraft";
import type { PageProps } from "./types";

function Tinker({ onNavigate }: PageProps) {
  const { info, connection, status } = useAgent();
  const connected = status === "connected";

  return (
    <div className="flex w-full flex-col items-start bg-[#0b0d10] min-h-full">
      <PageShell
        header={<ConnectedHeader />}
        tabs={<TabBar selected="tinker" onNavigate={onNavigate} />}
        title="Users & roles"
        subtitle="Manage who can access this dashboard and what they can do."
        actions={
          <>
            <PrimaryButton
              icon={<RoundNewLabel />}
              text="Create role"
              color="gray"
              disabled={true}
              title="Needs an Agent update"
            />
            <PrimaryButton
              icon={<RoundPersonAddAlt1 />}
              text="Create user"
              disabled={true}
              title="Needs an Agent update"
            />
          </>
        }
      >
        <ServerGate>
        <PreviewBanner
          title="Users and roles are a preview for now"
          description="Today the Agent has one token that gives full access. Separate users and roles need an Agent update."
        />
        <div className="w-full items-start gap-3 grid grid-cols-4 mobile:grid mobile:grid-cols-2">
          <StatCard icon={<RoundPeople />} label="Users" value="—" title="Needs an Agent update" />
          <StatCard icon={<RoundLabel />} label="Roles" value="—" title="Needs an Agent update" />
          <StatCard icon={<RoundPeople />} label="Active now" value="—" title="Needs an Agent update" />
          <StatCard
            icon={<RoundServerX1 />}
            label="Agent"
            value={info ? `v${info.agentVersion}` : "—"}
          />
        </div>
        <div className="flex w-full items-start gap-5 mobile:flex-col">
          <div className={`flex min-w-[0px] grow shrink-0 basis-0 flex-col items-start gap-6 mobile:min-w-0 mobile:flex-none ${previewClass}`}>
            <SectionCard
              title="Users"
              description="3 users can sign in to this Agent."
              headerAction={
                <div className="flex h-8 w-56 flex-none items-center gap-2 rounded-[8px] border border-solid border-[#2a3038] bg-[#0b0d10] px-3 focus-within:border-[#22c55e] mobile:grow mobile:shrink-0 mobile:basis-0">
                  <RoundSearch className="font-['Inter'] text-[14px] font-[400] leading-[14px] text-[#7a828e]" />
                  <input
                    className="grow shrink-0 basis-0 self-stretch font-['Inter'] text-[13px] font-[400] leading-[18px] text-[#ffffff] outline-none placeholder:text-[#7a828e]"
                    placeholder="Search users"
                    value=""
                    type="search"
                  />
                </div>
              }
            >
              <div className="flex w-full items-center gap-3 border-b border-solid border-[#1f242b] bg-[#111418] px-4 py-2">
                <span className="grow shrink-0 basis-0 font-['Inter'] text-[12px] font-[600] leading-[16px] text-[#9ca3af]">
                  User
                </span>
                <span className="w-24 flex-none font-['Inter'] text-[12px] font-[600] leading-[16px] text-[#9ca3af]">
                  Last active
                </span>
                <span className="w-16 flex-none font-['Inter'] text-[12px] font-[600] leading-[16px] text-[#9ca3af] text-right">
                  Actions
                </span>
              </div>
              <UserListRow
                pfp="https://api.mcheads.org/head/CanBeGold/96"
                username="CanBeGold"
                status=""
                actions={
                  <IconButton
                    tooltip=""
                    icon={<RoundModeEditOutline />}
                    color="gray"
                  />
                }
                offlineTimestamp=""
                connectedText="Online now"
                role={
                  <Badge
                    label="Administrator"
                    icon={<RoundStarFilled />}
                    variant="amber"
                  />
                }
              />
              <UserListRow
                pfp="https://api.mcheads.org/head/TomTomFX/96"
                username="TomTomFX"
                status=""
                actions={
                  <>
                    <IconButton
                      tooltip=""
                      icon={<RoundModeEditOutline />}
                      color="gray"
                    />
                    <IconButton
                      tooltip=""
                      icon={<RoundDelete />}
                      color="gray-dangerous"
                    />
                  </>
                }
                variant="offline"
                offlineTimestamp="2h ago"
                hideRole={true}
                connectedText="active"
                role={
                  <div className="flex items-start">
                    <div className="hidden items-center gap-0.5 rounded-[9999px] border border-solid border-[#4b5563] bg-[#232830] pl-1 pr-2">
                      <RoundStarFilled className="font-['Inter'] text-[12px] font-[400] leading-[18px] text-[#ffffff]" />
                      <span className="font-['Inter'] text-[11px] font-[600] leading-[18px] text-[#ffffff]">
                        Role
                      </span>
                    </div>
                    <Badge
                      label="Admin"
                      icon={<RoundAdminPanelSettings />}
                      variant="plus"
                    />
                  </div>
                }
              />
              <UserListRow
                className="border-none"
                pfp="https://api.mcheads.org/head/Gracaliciouss/96"
                username="Gracaliciouss"
                status=""
                actions={
                  <>
                    <IconButton
                      tooltip=""
                      icon={<RoundModeEditOutline />}
                      color="gray"
                    />
                    <IconButton
                      tooltip=""
                      icon={<RoundDelete />}
                      color="gray-dangerous"
                    />
                  </>
                }
                variant="offline"
                offlineTimestamp="3d ago"
                hideRole={true}
                connectedText="active"
                role={
                  <div className="flex items-start">
                    <Badge
                      label="Moderator"
                      icon={<RoundNotifications />}
                      variant="blue"
                    />
                    <div className="hidden items-center gap-0.5 rounded-[9999px] border border-solid border-[#4b5563] bg-[#232830] pl-1 pr-2">
                      <RoundStarFilled className="font-['Inter'] text-[12px] font-[400] leading-[18px] text-[#ffffff]" />
                      <span className="font-['Inter'] text-[11px] font-[600] leading-[18px] text-[#ffffff]">
                        Role
                      </span>
                    </div>
                  </div>
                }
              />
            </SectionCard>
            <SectionCard
              title="Roles"
              description="Roles decide which of the 26 permissions a user has."
            >
              <SettingRow
                title="Administrator"
                description="1 user · 26 of 26 permissions · can't be edited"
                badge={
                  <Badge
                    label="Administrator"
                    icon={<RoundStarFilled />}
                    variant="amber"
                  />
                }
                control={
                  <Badge label="Locked" icon={<RoundLock />} variant="gray" />
                }
                divider={true}
              />
              <SettingRow
                title="Admin"
                description="1 user · 22 of 26 permissions"
                badge={
                  <Badge
                    label="Admin"
                    icon={<RoundAdminPanelSettings />}
                    variant="plus"
                  />
                }
                control={
                  <IconButton
                    tooltip=""
                    icon={<RoundModeEditOutline />}
                    color="gray"
                  />
                }
                divider={true}
              />
              <SettingRow
                title="Moderator"
                description="1 user · 14 of 26 permissions"
                badge={
                  <Badge
                    label="Moderator"
                    icon={<RoundNotifications />}
                    variant="blue"
                  />
                }
                control={
                  <IconButton
                    tooltip=""
                    icon={<RoundModeEditOutline />}
                    color="gray"
                  />
                }
                divider={true}
              />
              <SettingRow
                title="Helper"
                description="No users · 8 of 26 permissions"
                badge={
                  <Badge
                    label="Helper"
                    icon={<BaselineHelp />}
                    variant="green"
                  />
                }
                control={
                  <IconButton
                    tooltip=""
                    icon={<RoundModeEditOutline />}
                    color="gray"
                  />
                }
                divider={true}
              />
              <SettingRow
                title="Player"
                description="No users · 4 of 26 permissions"
                badge={
                  <Badge label="Player" icon={<RoundPeople />} variant="gray" />
                }
                control={
                  <IconButton
                    tooltip=""
                    icon={<RoundModeEditOutline />}
                    color="gray"
                  />
                }
              />
            </SectionCard>
          </div>
          <div className="flex w-[360px] flex-none flex-col items-start gap-6 mobile:w-full mobile:flex-none">
            <SectionCard
              title="Shared public user"
              description=""
              headerAction={<Badge label="Plus" variant="plus" />}
              variant="plus"
            >
              <div className="flex w-full flex-col items-start gap-4 px-5 py-5">
                <span className="font-['Inter'] text-[14px] font-[400] leading-[22px] text-[#c4c9d1]">
                  Give friends access with a link. No accounts needed, and they
                  get their own custom role.
                </span>
                <div className="flex h-10 w-full flex-none items-center gap-2 rounded-[8px] border border-dashed border-[#3b2a5c] bg-[#0b0d10] px-3 opacity-70">
                  <RoundLock className="font-['Inter'] text-[16px] font-[400] leading-[16px] text-[#7a828e]" />
                  <span className="grow shrink-0 basis-0 whitespace-nowrap font-['Inter'] text-[14px] font-[400] leading-[20px] text-[#7a828e] truncate">
                    tinkerdash.app/join/••••-••••
                  </span>
                </div>
                <div className="flex w-full items-start gap-2">
                  <RoundAdminPanelSettings className="font-['Inter'] text-[15px] font-[400] leading-[20px] text-[#a78bfa]" />
                  <span className="grow shrink-0 basis-0 font-['Inter'] text-[13px] font-[400] leading-[20px] text-[#aeb4bd]">
                    Every public user action is logged with their Minecraft
                    UUID.
                  </span>
                </div>
                <div className="flex w-full items-start gap-2">
                  <RoundLock className="font-['Inter'] text-[15px] font-[400] leading-[20px] text-[#a78bfa]" />
                  <span className="grow shrink-0 basis-0 font-['Inter'] text-[13px] font-[400] leading-[20px] text-[#aeb4bd]">
                    Add a password or other check to stop anyone else from
                    joining.
                  </span>
                </div>
                <PrimaryButton
                  className="h-11 w-full flex-none"
                  tooltip=""
                  icon={<RoundUpgrade />}
                  text="Upgrade to Plus"
                  color="purple"
                  size="lg"
                  disabled={true}
                  title="Tinker Plus isn't available yet"
                />
              </div>
            </SectionCard>
            <SectionCard
              title="Tinker Agent"
              description=""
              headerAction={
                <StatusPill
                  variant={connected ? "connected" : status === "disconnected" ? "disconnected" : "connecting"}
                  size="sm"
                  label={connected ? "Connected" : status === "disconnected" ? "Not connected" : "Reconnecting…"}
                />
              }
            >
              <div className="flex w-full flex-col items-start gap-2.5 px-5 py-4">
                <div className="flex w-full items-center justify-between gap-3">
                  <span className="font-['Inter'] text-[13px] font-[400] leading-[18px] text-[#9ca3af]">
                    Address
                  </span>
                  <span className="font-['Inter'] text-[13px] font-[500] leading-[18px] text-[#e5e7eb]">
                    {connection ? `${connection.address}:${connection.port}` : "—"}
                  </span>
                </div>
                <div className="flex w-full items-center justify-between gap-3">
                  <span className="font-['Inter'] text-[13px] font-[400] leading-[18px] text-[#9ca3af]">
                    Version
                  </span>
                  <span className="font-['Inter'] text-[13px] font-[500] leading-[18px] text-[#e5e7eb]">
                    {info ? `v${info.agentVersion}` : "—"}
                  </span>
                </div>
                <div className="flex w-full items-center justify-between gap-3">
                  <span className="font-['Inter'] text-[13px] font-[400] leading-[18px] text-[#9ca3af]">
                    Uptime
                  </span>
                  <span className="font-['Inter'] text-[13px] font-[500] leading-[18px] text-[#7a828e]" title="Needs an Agent update">
                    —
                  </span>
                </div>
                <div className="flex w-full items-center justify-between gap-3">
                  <span className="font-['Inter'] text-[13px] font-[400] leading-[18px] text-[#9ca3af]">
                    Connection
                  </span>
                  <span className="font-['Inter'] text-[13px] font-[500] leading-[18px] text-[#e5e7eb]">
                    {connection ? connectionKind(connection.address) : "—"}
                  </span>
                </div>
              </div>
              <div className="flex w-full items-center border-t border-solid border-[#1f242b] px-5 py-3">
                <PrimaryButton
                  icon={<Arrow />}
                  text="View connection"
                  color="gray"
                  size="sm"
                  onClick={() => onNavigate("Connection")}
                />
              </div>
            </SectionCard>
            <SectionCard
              className={previewClass}
              title="Recent activity"
              description=""
              headerAction={<SoonBadge />}
            >
              <div className="flex w-full flex-col items-start gap-3 px-5 py-4">
                <div className="flex w-full items-start gap-3">
                  <div className="flex h-7 w-7 flex-none items-center justify-center rounded-[6px] border border-solid border-[#2a3038] bg-[#1a1e23]">
                    <RoundRefresh className="font-['Inter'] text-[14px] font-[400] leading-[14px] text-[#22c55e]" />
                  </div>
                  <div className="flex min-w-[0px] grow shrink-0 basis-0 flex-col items-start">
                    <span className="font-['Inter'] text-[13px] font-[600] leading-[18px] text-[#ffffff]">
                      CanBeGold
                    </span>
                    <span className="font-['Inter'] text-[13px] font-[400] leading-[18px] text-[#c4c9d1]">
                      Restarted NeoForge SMP
                    </span>
                  </div>
                  <span className="font-['Inter'] text-[12px] font-[400] leading-[18px] text-[#7a828e]">
                    2h ago
                  </span>
                </div>
                <div className="flex w-full items-start gap-3">
                  <div className="flex h-7 w-7 flex-none items-center justify-center rounded-[6px] border border-solid border-[#2a3038] bg-[#1a1e23]">
                    <RoundLogOut className="font-['Inter'] text-[14px] font-[400] leading-[14px] text-[#ef4444]" />
                  </div>
                  <div className="flex min-w-[0px] grow shrink-0 basis-0 flex-col items-start">
                    <span className="font-['Inter'] text-[13px] font-[600] leading-[18px] text-[#ffffff]">
                      Alex_Mines
                    </span>
                    <span className="font-['Inter'] text-[13px] font-[400] leading-[18px] text-[#c4c9d1]">
                      Kicked xX_Creeper_Xx
                    </span>
                  </div>
                  <span className="font-['Inter'] text-[12px] font-[400] leading-[18px] text-[#7a828e]">
                    5h ago
                  </span>
                </div>
                <div className="flex w-full items-start gap-3">
                  <div className="flex h-7 w-7 flex-none items-center justify-center rounded-[6px] border border-solid border-[#2a3038] bg-[#1a1e23]">
                    <RoundAdminPanelSettings className="font-['Inter'] text-[14px] font-[400] leading-[14px] text-[#fd9eff]" />
                  </div>
                  <div className="flex min-w-[0px] grow shrink-0 basis-0 flex-col items-start">
                    <span className="font-['Inter'] text-[13px] font-[600] leading-[18px] text-[#ffffff]">
                      CanBeGold
                    </span>
                    <span className="font-['Inter'] text-[13px] font-[400] leading-[18px] text-[#c4c9d1]">
                      Changed Moderator permissions
                    </span>
                  </div>
                  <span className="font-['Inter'] text-[12px] font-[400] leading-[18px] text-[#7a828e]">
                    1d ago
                  </span>
                </div>
                <div className="flex w-full items-start gap-3">
                  <div className="flex h-7 w-7 flex-none items-center justify-center rounded-[6px] border border-solid border-[#2a3038] bg-[#1a1e23]">
                    <RoundAdd className="font-['Inter'] text-[14px] font-[400] leading-[14px] text-[#38bdf8]" />
                  </div>
                  <div className="flex min-w-[0px] grow shrink-0 basis-0 flex-col items-start">
                    <span className="font-['Inter'] text-[13px] font-[600] leading-[18px] text-[#ffffff]">
                      CanBeGold
                    </span>
                    <span className="font-['Inter'] text-[13px] font-[400] leading-[18px] text-[#c4c9d1]">
                      Created user Steve_Builds
                    </span>
                  </div>
                  <span className="font-['Inter'] text-[12px] font-[400] leading-[18px] text-[#7a828e]">
                    2d ago
                  </span>
                </div>
              </div>
            </SectionCard>
          </div>
        </div>
        </ServerGate>
      </PageShell>
    </div>
  );
}

export default Tinker;