


import { AppHeader } from "@/ui/components/AppHeader";
import { ModCardModFrame } from "@/ui/components/ModCardModFrame";
import { ModListItem } from "@/ui/components/ModListItem";
import { Switch } from "@/ui/components/Switch";
import { TabBar } from "@/ui/components/TabBar";
import type { PageProps } from "./types";
import BaselineAutoFixHigh from "@/ui/icons/BaselineAutoFixHigh";
import Curseforge from "@/ui/icons/Curseforge";
import Modrinth from "@/ui/icons/Modrinth";
import RoundLock from "@/ui/icons/RoundLock";
import RoundMoreHoriz from "@/ui/icons/RoundMoreHoriz";
import RoundSearch from "@/ui/icons/RoundSearch";
import RoundUpgrade from "@/ui/icons/RoundUpgrade";
import Sort from "@/ui/icons/Sort";

function Mods({ onNavigate }: PageProps) {
  return (
    <div className="flex h-full flex-col bg-[#0b0d10]">
      <AppHeader
        statusText="No servers running"
        selectedServerLabel="Selected server"
        selectedServerIcon="https://res.cloudinary.com/subframe/image/upload/v1793563275/uploads/47820/uuknirpioirlhs3yrltd.png"
      />
      <main className="flex min-h-0 w-full flex-1 flex-col items-center overflow-y-auto bg-[#0b0d10] px-6 py-12 mobile:px-4 mobile:pt-6">
        <div className="flex w-full flex-col items-center">
          <TabBar selected="mods" amountOfModsInstalled="0" onNavigate={onNavigate} />
          <section className="flex h-[550px] w-full flex-none flex-col items-start gap-6 rounded-3xl border border-solid border-[#1f242b] bg-[#111418] px-8 py-6 mobile:h-auto mobile:px-4">
            <div className="flex w-full items-center justify-between gap-4">
              <h1 className="font-['Inter'] text-[28px] font-[700] leading-[36px] text-[#ffffff]">
                Mods
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
              <aside className="flex w-[380px] flex-none flex-col items-start gap-3 self-stretch border-r border-solid border-[#232830] pr-6 mobile:w-full mobile:flex-none mobile:border-none mobile:px-0 mobile:py-0">
                <div className="flex w-full items-center justify-between">
                  <span className="font-['Inter'] text-[14px] font-[600] leading-[20px] text-[#c4c9d1]">
                    Installed (3)
                  </span>
                  <div className="flex items-center gap-2">
                    <Sort className="font-['Inter'] text-[14px] font-[400] leading-[20px] text-[#c4c9d1]" />
                    <div className="flex items-center rounded-[8px] border border-solid border-[#2a3038] bg-[#1a1e23] pl-0.5 pr-2 hover:border-[#3a414b]">
                      <RoundUpgrade className="font-['Inter'] text-[16px] font-[400] leading-[20px] text-[#aeb4bd]" />
                      <span className="font-['Inter'] text-[13px] font-[400] leading-[20px] text-[#aeb4bd]">
                        Update all (1)
                      </span>
                    </div>
                    <div className="flex items-center rounded-[8px] border border-solid border-[#2a3038] bg-[#1a1e23] hover:border-[#3a414b]">
                      <RoundMoreHoriz className="font-['Inter'] text-[20px] font-[400] leading-[20px] text-[#aeb4bd]" />
                    </div>
                  </div>
                </div>
                <div className="flex w-full grow shrink-0 basis-0 flex-col items-start gap-2 pr-1 overflow-auto">
                  <div className="flex w-full items-center justify-center">
                    <div className="flex h-9 items-center justify-center gap-1 rounded-[8px] border border-solid border-[#ef444466] bg-[#7f1d1d] pl-1.5 pr-3">
                      <RoundLock className="font-['Inter'] text-[16px] font-[500] leading-[20px] text-[#ffffff]" />
                      <span className="font-['Inter'] text-[13px] font-[500] leading-[20px] text-[#ffffff]">
                        Server running: modifying locked
                      </span>
                    </div>
                  </div>
                  <div className="flex w-full flex-col items-start gap-2 opacity-50">
                    <ModListItem
                      image="https://cdn.modrinth.com/data/P7dR8mSH/icon.png"
                      name="Mod Name"
                      version="v0.0.0"
                      action={
                        <Switch
                          className="h-6 w-11 flex-none"
                          checked={true}
                          onCheckedChange={() => undefined}
                        />
                      }
                    />
                  </div>
                </div>
              </aside>
              <div className="flex grow shrink-0 basis-0 flex-col items-start gap-3 self-stretch mobile:flex-none">
                <div className="flex w-full items-center justify-between gap-2">
                  <span className="font-['Inter'] text-[14px] font-[600] leading-[20px] text-[#c4c9d1]">
                    Browse 
                  </span>
                  <div className="flex items-center gap-1 rounded-[8px] border border-solid border-[#2a3038] bg-[#0b0d10] px-1 py-1">
                    <div className="flex items-center gap-1 rounded-[6px] border border-solid border-[#22c55e80] bg-[#123321] pl-2.5 pr-3">
                      <Modrinth className="font-['Inter'] text-[13px] font-[500] leading-[20px] text-[#46d66d]" />
                      <span className="font-['Inter'] text-[13px] font-[500] leading-[20px] text-[#ffffff]">
                        Modrinth
                      </span>
                    </div>
                    <div className="flex items-center gap-1 rounded-[6px] border border-solid border-transparent pl-2.5 pr-3 hover:bg-[#1a1e23] opacity-25">
                      <Curseforge className="font-['Inter'] text-[13px] font-[500] leading-[20px] text-[#f16436]" />
                      <span className="font-['Inter'] text-[13px] font-[400] leading-[20px] text-[#7a828e]">
                        CurseForge
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex h-10 w-full flex-none items-center gap-2 rounded-[8px] border border-solid border-[#2a3038] bg-[#0b0d10] px-3 focus-within:border-[#22c55e]">
                  <RoundSearch className="font-['Inter'] text-[18px] font-[400] leading-[20px] text-[#7a828e]" />
                  <input
                    className="grow shrink-0 basis-0 self-stretch font-['Inter'] text-[14px] font-[400] leading-[21px] text-[#ffffff] outline-none placeholder:text-[#7a828e]"
                    placeholder="Search Modrinth for NeoForge 1.21.1 mods"
                    value=""
                    type="search"
                  />
                </div>
                <div className="flex w-full flex-wrap items-center gap-2">
                  <div className="flex items-center gap-1 rounded-[9999px] border border-solid border-[#22c55e80] bg-[#123321] px-3 py-0.5">
                    <BaselineAutoFixHigh className="font-['Inter'] text-[16px] font-[400] leading-[20px] text-[#ffffff]" />
                    <span className="font-['Inter'] text-[13px] font-[400] leading-[20px] text-[#ffffff]">
                      Performance and Optimization
                    </span>
                  </div>
                  <div className="flex items-center rounded-[9999px] border border-solid border-[#2a3038] bg-[#1a1e23] px-3 py-0.5 hover:border-[#3a414b]">
                    <span className="font-['Inter'] text-[13px] font-[400] leading-[20px] text-[#aeb4bd]">
                      Utility
                    </span>
                  </div>
                  <div className="flex items-center rounded-[9999px] border border-solid border-[#2a3038] bg-[#1a1e23] px-3 py-0.5 hover:border-[#3a414b]">
                    <span className="font-['Inter'] text-[13px] font-[400] leading-[20px] text-[#aeb4bd]">
                      dependecy
                    </span>
                  </div>
                  <div className="flex items-center rounded-[9999px] border border-solid border-[#2a3038] bg-[#1a1e23] px-3 py-0.5 hover:border-[#3a414b]">
                    <span className="font-['Inter'] text-[13px] font-[400] leading-[20px] text-[#aeb4bd]">
                      Tech
                    </span>
                  </div>
                </div>
                <div className="w-full grow shrink-0 basis-0 items-start gap-3 pr-1 grid grid-cols-2 content-start overflow-auto mobile:grid mobile:content-start mobile:overflow-auto mobile:grid-cols-1">
                  <ModCardModFrame
                    name="Mod Name"
                    author="by simibubi"
                    description="Description"
                    downloadCount="0"
                    image="https://cdn.modrinth.com/data/P7dR8mSH/icon.png"
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Mods;