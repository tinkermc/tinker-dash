import { BackupListing } from "@/ui/components/BackupListing";
import { Badge } from "@/ui/components/Badge";
import { PageShell } from "@/ui/components/PageShell";
import { PrimaryButton } from "@/ui/components/PrimaryButton";
import { SectionCard } from "@/ui/components/SectionCard";
import { SelectField } from "@/ui/components/SelectField";
import { ServerBackupInfoHeader } from "@/ui/components/ServerBackupInfoHeader";
import { SettingRow } from "@/ui/components/SettingRow";
import { Switch } from "@/ui/components/Switch";
import { TabBar } from "@/ui/components/TabBar";
import BrainCircuit24Regular from "@/ui/icons/BrainCircuit24Regular";
import RoundOpenInNew from "@/ui/icons/RoundOpenInNew";
import RoundSave from "@/ui/icons/RoundSave";
import { ConnectedHeader } from "../components/ConnectedHeader";
import { previewClass } from "../components/fields";
import { PreviewBanner, ServerGate } from "../components/PageStates";
import { DEFAULT_SERVER_ICON } from "../lib/agent";
import { useSelectedServer } from "../lib/hooks";
import type { PageProps } from "./types";

function Backups({ onNavigate }: PageProps) {
  const { server } = useSelectedServer();

  return (
    <div className="flex w-full flex-col items-start bg-[#0b0d10] min-h-full">
      <PageShell
        header={<ConnectedHeader />}
        tabs={<TabBar selected="backups" onNavigate={onNavigate} />}
        title="Backups"
        subtitle="Restore your world to any point. Backups are stored on the server PC."
        actions={
          <>
            <PrimaryButton
              icon={<RoundSave />}
              text="Back up now"
              color="gray"
              disabled={true}
              title="Needs an Agent update"
            />
            <PrimaryButton
              icon={<BrainCircuit24Regular />}
              text="Smart backup"
              color="purple"
              disabled={true}
              title="Needs an Agent update"
            />
          </>
        }
      >
        <ServerGate>
        <div className="flex w-full items-center justify-between gap-4 mobile:flex-col mobile:items-start">
          <ServerBackupInfoHeader
            serverIcon={DEFAULT_SERVER_ICON}
            name={server?.name}
            totalBackupsCount="—"
            totalSize="—"
            timestampSpan="—"
          />
        </div>
        <PreviewBanner
          title="Backups are a preview for now"
          description="Making, restoring and scheduling backups needs an Agent update. The backups below are sample data."
        />
        <div className={`flex w-full flex-col items-start gap-6 ${previewClass}`}>
        <SectionCard
          title="Smart backups"
          description="Smart backups skip unchanged chunks, so they're smaller and faster."
          headerAction={<Badge label="Plus" variant="plus" />}
          variant="plus"
        >
          <div className="flex w-full flex-col items-start gap-3 px-5 py-4 mobile:px-4">
            <div className="flex w-full items-center justify-between gap-4">
              <span className="font-['Inter'] text-[15px] font-[600] leading-[22px] text-[#ffffff]">
                1 of 10 smart backups used
              </span>
              <span className="font-['Inter'] text-[12px] font-[400] leading-[16px] text-[#c4b5fd]">
                9 left this month
              </span>
            </div>
            <div className="flex h-2 w-full flex-none items-start overflow-hidden rounded-[9999px] bg-[#2a1f3d]">
              <div className="flex items-start self-stretch rounded-[9999px] bg-[#a855f7] w-[10%]" />
            </div>
          </div>
        </SectionCard>
        <SectionCard
          title="Backups"
          description="Newest first · 8 backups · 4.6 GB"
        >
          <div className="flex w-full flex-col items-start gap-2 px-3 py-3">
            <BackupListing
              backupType="smart"
              backupNumber="8"
              timestamp="Nov 12, 2026, 6:00 AM"
              size="128 MB"
              isLatest={true}
              automaticBackupScheduleNumber="1"
            />
            <BackupListing
              backupNumber="7"
              timestamp="Nov 12, 2026, 12:00 AM"
              size="612 MB"
              automaticBackupScheduleNumber="1"
            />
            <div className="flex w-full items-center justify-center gap-0.5">
              <RoundOpenInNew className="font-['Inter'] text-[16px] font-[500] leading-[16px] text-[#7a828e]" />
              <span className="font-['Inter'] text-[12px] font-[500] leading-[16px] text-[#7a828e] text-center py-1">
                Show all 3 backups
              </span>
            </div>
          </div>
        </SectionCard>
        <SectionCard
          title="Schedule"
          description="Automatic backups run in the background while the server is up."
        >
          <SettingRow
            title="Automatic backups"
            description="Next backup in 4h 12m (6:00 PM)."
            control={
              <Switch
                checked={true}
                disabled={true}
              />
            }
            divider={true}
          />
          <div className="w-full items-start gap-4 border-b border-solid border-[#1f242b] px-5 py-5 grid grid-cols-2 mobile:px-4 mobile:grid mobile:grid-cols-1">
            <SelectField
              label="Frequency"
              placeholder="Every 6 hours"
              helperText="How often a backup is made."
              value={undefined}
              disabled={true}
            />
            <SelectField
              label="Keep last"
              placeholder="10 backups"
              helperText="Older automatic backups are deleted. Manual ones are kept."
              value={undefined}
              disabled={true}
            />
          </div>
        </SectionCard>
        </div>
        </ServerGate>
      </PageShell>
    </div>
  );
}

export default Backups;