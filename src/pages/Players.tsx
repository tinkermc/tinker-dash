


import { AppHeader } from "@/ui/components/AppHeader";
import { PlayerProfileHeader } from "@/ui/components/PlayerProfileHeader";
import { PlayerStatusCard } from "@/ui/components/PlayerStatusCard";
import { StatCard } from "@/ui/components/StatCard";
import { TabBar } from "@/ui/components/TabBar";
import type { PageProps } from "./types";
import { TimeoutButton } from "@/ui/components/TimeoutButton";
import Hammer from "@/ui/icons/Hammer";
import RoundCalendarMonth from "@/ui/icons/RoundCalendarMonth";
import RoundDelete from "@/ui/icons/RoundDelete";
import RoundLogOut from "@/ui/icons/RoundLogOut";
import RoundPinDrop from "@/ui/icons/RoundPinDrop";
import RoundSearch from "@/ui/icons/RoundSearch";
import RoundTimer from "@/ui/icons/RoundTimer";
import SkullBold from "@/ui/icons/SkullBold";
import Versions from "@/ui/icons/Versions";

function Players({ onNavigate }: PageProps) {
  return (
    <div className="flex h-full flex-col bg-[#0b0d10]">
      <AppHeader
        statusText="No servers running"
        selectedServerLabel="Selected server"
        selectedServerIcon="https://res.cloudinary.com/subframe/image/upload/v1793563275/uploads/47820/uuknirpioirlhs3yrltd.png"
      />
      <main className="flex min-h-0 w-full flex-1 flex-col items-center overflow-y-auto bg-[#0b0d10] px-6 py-12 mobile:px-4 mobile:pt-6">
        <div className="flex w-full flex-col items-center">
          <TabBar selected="players" amountOfModsInstalled="0" onNavigate={onNavigate} />
          <section className="flex h-[550px] w-full flex-none flex-col items-start gap-6 rounded-3xl border border-solid border-[#1f242b] bg-[#111418] px-8 py-6 mobile:h-auto mobile:px-4">
            <div className="flex w-full items-center justify-between gap-4">
              <h1 className="font-['Inter'] text-[28px] font-[700] leading-[36px] text-[#ffffff]">
                Players
              </h1>
              <div className="flex items-center gap-2 rounded-[9999px] border border-solid border-[#2a3038] bg-[#1a1e23] px-3 py-1">
                <img
                  className="h-5 w-5 flex-none object-cover"
                  src="https://res.cloudinary.com/subframe/image/upload/v1793563275/uploads/47820/rytrk7wt47l4ydrbqt2c.png"
                />
                <span className="font-['Inter'] text-[14px] font-[500] leading-[20px] text-[#ffffff]">
                  NeoForge SMP
                </span>
                <span className="font-['Inter'] text-[12px] font-[400] leading-[16px] text-[#7a828e]">
                  NeoForge 1.21.1
                </span>
              </div>
            </div>
            <div className="flex h-[442px] w-full flex-none items-start gap-6 mobile:h-auto mobile:flex-col">
              <aside className="flex w-[380px] flex-none flex-col items-start gap-3 self-stretch border-r border-solid border-[#232830] pr-6 mobile:w-full mobile:border-none mobile:px-0 mobile:py-0">
                <div className="flex h-9 w-full flex-none items-center gap-2 rounded-[8px] border border-solid border-[#2a3038] bg-[#0b0d10] px-3 focus-within:border-[#22c55e]">
                  <RoundSearch className="font-['Inter'] text-[18px] font-[400] leading-[20px] text-[#7a828e]" />
                  <input
                    className="grow shrink-0 basis-0 self-stretch font-['Inter'] text-[14px] font-[400] leading-[21px] text-[#ffffff] outline-none placeholder:text-[#7a828e]"
                    placeholder="Search players by name or UUID"
                    value=""
                    type="search"
                  />
                </div>
                <div className="flex w-full flex-wrap items-center gap-2">
                  <div className="flex items-center gap-1.5 rounded-[9999px] border border-solid border-[#4b5563] bg-[#232830] px-3 py-0.5">
                    <span className="font-['Inter'] text-[13px] font-[500] leading-[20px] text-[#ffffff]">
                      All
                    </span>
                    <span className="font-['Inter'] text-[12px] font-[400] leading-[20px] text-[#aeb4bd]">
                      6
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 rounded-[9999px] border border-solid border-[#2a3038] bg-[#1a1e23] px-3 py-0.5 hover:border-[#3a414b]">
                    <div className="flex h-1.5 w-1.5 flex-none items-start rounded-[9999px] bg-[#22c55e]" />
                    <span className="font-['Inter'] text-[13px] font-[400] leading-[20px] text-[#aeb4bd]">
                      Online
                    </span>
                    <span className="font-['Inter'] text-[12px] font-[400] leading-[20px] text-[#7a828e]">
                      3
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 rounded-[9999px] border border-solid border-[#2a3038] bg-[#1a1e23] px-3 py-0.5 hover:border-[#3a414b]">
                    <div className="flex h-1.5 w-1.5 flex-none items-start rounded-[9999px] bg-[#f7b900]" />
                    <span className="font-['Inter'] text-[13px] font-[400] leading-[20px] text-[#aeb4bd]">
                      AFK
                    </span>
                    <span className="font-['Inter'] text-[12px] font-[400] leading-[20px] text-[#7a828e]">
                      1
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 rounded-[9999px] border border-solid border-[#2a3038] bg-[#1a1e23] px-3 py-0.5 hover:border-[#3a414b]">
                    <div className="flex h-1.5 w-1.5 flex-none items-start rounded-[9999px] bg-[#aeb4bd]" />
                    <span className="font-['Inter'] text-[13px] font-[400] leading-[20px] text-[#aeb4bd]">
                      Offline
                    </span>
                    <span className="font-['Inter'] text-[12px] font-[400] leading-[20px] text-[#7a828e]">
                      1
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 rounded-[9999px] border border-solid border-[#2a3038] bg-[#1a1e23] px-3 py-0.5 hover:border-[#3a414b]">
                    <div className="flex h-1.5 w-1.5 flex-none items-start rounded-[9999px] bg-[#ff7b00]" />
                    <span className="font-['Inter'] text-[13px] font-[400] leading-[20px] text-[#aeb4bd]">
                      Timed-Out
                    </span>
                    <span className="font-['Inter'] text-[12px] font-[400] leading-[20px] text-[#7a828e]">
                      1
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 rounded-[9999px] border border-solid border-[#2a3038] bg-[#1a1e23] px-3 py-0.5 hover:border-[#3a414b]">
                    <div className="flex h-1.5 w-1.5 flex-none items-start rounded-[9999px] bg-[#ef4444]" />
                    <span className="font-['Inter'] text-[13px] font-[400] leading-[20px] text-[#aeb4bd]">
                      Banned
                    </span>
                    <span className="font-['Inter'] text-[12px] font-[400] leading-[20px] text-[#7a828e]">
                      1
                    </span>
                  </div>
                </div>
                <div className="flex w-full grow shrink-0 basis-0 flex-col items-start gap-2 pr-1 overflow-auto">
                  <PlayerStatusCard
                    username="username"
                    pfp="https://api.mcheads.org/head/CanBeGold/96"
                    timeValue="1h 12m"
                    reason="Profanity"
                  />
                </div>
              </aside>
              <div className="flex grow shrink-0 basis-0 flex-col items-start gap-5 self-stretch overflow-auto mobile:flex-none">
                <PlayerProfileHeader
                  image="https://api.mcheads.org/head/CanBeGold/96"
                  username="username"
                  uuid="uuid"
                />
                <div className="w-full items-start gap-2 grid grid-cols-4 mobile:grid mobile:grid-cols-2">
                  <StatCard icon={<RoundTimer />} label="Playtime" value="1h" />
                  <StatCard
                    icon={<RoundCalendarMonth />}
                    label="First Joined"
                    value="January 1 2026"
                  />
                  <StatCard
                    icon={<RoundPinDrop />}
                    label="Last IP"
                    value="xxx.xxx.x.xxx"
                  />
                  <StatCard icon={<SkullBold />} label="Deaths" value="0" />
                </div>
                <div className="flex w-full flex-col items-start gap-2">
                  <div className="flex w-full items-center justify-between">
                    <span className="font-['Inter'] text-[14px] font-[600] leading-[20px] text-[#c4c9d1]">
                      Actions
                    </span>
                    <span className="font-['Inter'] text-[12px] font-[400] leading-[16px] text-[#7a828e]">
                      Applies to username
                    </span>
                  </div>
                  <div className="w-full items-start gap-2 grid grid-cols-6 mobile:grid mobile:grid-cols-2">
                    <div className="flex h-9 items-center justify-center gap-2 rounded-[8px] border border-solid border-[#2a3038] bg-[#1a1e23] px-3 col-span-3 hover:border-[#3a414b] mobile:hover:border-[#3a414b] mobile:col-span-1">
                      <RoundSearch className="font-['Inter'] text-[18px] font-[400] leading-[20px] text-[#aeb4bd]" />
                      <span className="font-['Inter'] text-[13px] font-[500] leading-[20px] text-[#ffffff]">
                        Inspect data
                      </span>
                    </div>
                    <div className="flex h-9 items-center justify-center gap-2 rounded-[8px] border border-solid border-[#2a3038] bg-[#1a1e23] px-3 col-span-3 hover:border-[#3a414b] mobile:hover:border-[#3a414b] mobile:col-span-1">
                      <Versions className="font-['Inter'] text-[18px] font-[400] leading-[20px] text-[#aeb4bd]" />
                      <span className="font-['Inter'] text-[13px] font-[500] leading-[20px] text-[#ffffff]">
                        Restore data from backup
                      </span>
                    </div>
                    <div className="flex h-9 items-center justify-center gap-2 rounded-[8px] border border-solid border-[#f59e0b66] bg-[#241b0a] px-3 col-span-2 hover:border-[#f59e0b] mobile:hover:border-[#f59e0b] mobile:col-span-1">
                      <RoundLogOut className="font-['Inter'] text-[18px] font-[400] leading-[27px] text-[#fbbf24]" />
                      <span className="font-['Inter'] text-[13px] font-[500] leading-[20px] text-[#fcd34d]">
                        Kick
                      </span>
                    </div>
                    <TimeoutButton />
                    <div className="flex h-9 items-center justify-center gap-2 rounded-[8px] border border-solid border-[#ef444480] bg-[#2a1215] px-3 col-span-2 hover:border-[#ef4444] mobile:hover:border-[#ef4444] mobile:col-span-2">
                      <Hammer className="font-['Inter'] text-[18px] font-[400] leading-[27px] text-[#f87171]" />
                      <span className="font-['Inter'] text-[13px] font-[500] leading-[20px] text-[#fca5a5]">
                        Ban
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex w-full items-center gap-4 rounded-xl border border-solid border-[#ef444466] bg-[#1a0f11] px-4 py-3 mobile:flex-col mobile:items-start">
                  <div className="flex grow shrink-0 basis-0 flex-col items-start gap-0.5">
                    <span className="font-['Inter'] text-[13px] font-[600] leading-[20px] text-[#fca5a5]">
                      Danger zone
                    </span>
                    <span className="font-['Inter'] text-[12px] font-[400] leading-[18px] text-[#aeb4bd]">
                      Permanently delete this player&#39;s inventory, stats
                      or/and advancements
                    </span>
                  </div>
                  <div className="flex h-9 items-center justify-center gap-2 rounded-[8px] border border-solid border-[#ef4444] bg-[#7f1d1d] px-3 hover:bg-[#991b1b] mobile:w-full">
                    <RoundDelete className="font-['Inter'] text-[18px] font-[400] leading-[27px] text-[#ffffff]" />
                    <span className="font-['Inter'] text-[13px] font-[600] leading-[20px] text-[#ffffff]">
                      Remove data
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Players;