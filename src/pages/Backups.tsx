


import { AppHeader } from "@/ui/components/AppHeader";
import { BackupListing } from "@/ui/components/BackupListing";
import { PrimaryButton } from "@/ui/components/PrimaryButton";
import { ServerBackupInfoHeader } from "@/ui/components/ServerBackupInfoHeader";
import { TabBar } from "@/ui/components/TabBar";
import type { PageProps } from "./types";
import BrainCircuit24Regular from "@/ui/icons/BrainCircuit24Regular";
import RoundSave from "@/ui/icons/RoundSave";

function Backups({ onNavigate }: PageProps) {
  return (
    <div className="flex h-full flex-col bg-[#0b0d10]">
      <AppHeader
        statusText="No servers running"
        selectedServerLabel="Selected server"
        selectedServerIcon="https://res.cloudinary.com/subframe/image/upload/v1793563275/uploads/47820/uuknirpioirlhs3yrltd.png"
      />
      <main className="flex min-h-0 w-full flex-1 flex-col items-center overflow-y-auto bg-[#0b0d10] px-6 py-12 mobile:px-4 mobile:pt-6">
        <TabBar selected="backups" amountOfModsInstalled="0" onNavigate={onNavigate} />
        <div className="flex w-full flex-col items-center">
          <section className="flex max-h-[956px] w-full flex-col items-start gap-3 rounded-3xl border border-solid border-[#1f242b] bg-[#111418] px-5 py-6 mobile:px-1">
            <div className="flex w-full items-center justify-between px-3 gap-4">
              <h1 className="font-['Inter'] text-[28px] font-[700] leading-[36px] text-[#ffffff]">
                Backups
              </h1>
            </div>
            <div className="flex max-h-[543px] w-full flex-col items-start gap-5 px-3 py-3 overflow-auto">
              <div className="flex w-full items-center justify-between gap-4 mobile:flex-col mobile:items-start">
                <ServerBackupInfoHeader
                  className="h-auto w-auto flex-none"
                  serverIcon="https://res.cloudinary.com/subframe/image/upload/v1793563275/uploads/47820/uuknirpioirlhs3yrltd.png"
                  name="Vanilla SMP"
                  totalBackupsCount="8"
                  totalSize="4.6 GB"
                  timestampSpan="3 months"
                />
                <div className="flex items-center gap-2">
                  <PrimaryButton
                    tooltip="When you hover over this button, this text appears!"
                    icon={<RoundSave />}
                    text="Backup"
                  />
                  <PrimaryButton
                    className="h-auto max-h-[152px] w-auto flex-none"
                    tooltip="When you hover over this button, this text appears!"
                    icon={<BrainCircuit24Regular />}
                    text="Smart Backup"
                    color="purple"
                  />
                </div>
              </div>
              <div className="flex w-full flex-col items-start gap-2">
                <BackupListing
                  backupType="smart"
                  backupNumber="2"
                  timestamp="Nov 1, 2026, 12:00 AM"
                  size="128 MB"
                  isLatest={true}
                  automaticBackupScheduleNumber="1"
                />
                <BackupListing
                  backupNumber="1"
                  timestamp="Nov 1, 2026, 6:00 AM"
                  size="512 MB"
                  backupTrigger="manual"
                  automaticBackupScheduleNumber="1"
                />
              </div>
            </div>
            <span className="font-['Inter'] text-[15px] font-[600] leading-[22px] text-[#ffffff] self-end pr-3">
              1/5 free smart backups used
            </span>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Backups;