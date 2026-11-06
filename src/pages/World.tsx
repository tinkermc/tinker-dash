
import { Switch } from "@/ui/components/Switch";
import OutlineContentCopy from "@/ui/icons/OutlineContentCopy";
import RoundCheckCircleOutline from "@/ui/icons/RoundCheckCircleOutline";
import RoundCompass from "@/ui/icons/RoundCompass";
import RoundDelete from "@/ui/icons/RoundDelete";
import RoundDownload from "@/ui/icons/RoundDownload";
import RoundHourglassTop from "@/ui/icons/RoundHourglassTop";
import RoundLayers from "@/ui/icons/RoundLayers";
import RoundList from "@/ui/icons/RoundList";
import RoundModeEditOutline from "@/ui/icons/RoundModeEditOutline";
import RoundPause from "@/ui/icons/RoundPause";
import RoundPeople from "@/ui/icons/RoundPeople";
import RoundRefresh from "@/ui/icons/RoundRefresh";
import RoundSaveAll from "@/ui/icons/RoundSaveAll";
import RoundServerX1 from "@/ui/icons/RoundServerX1";
import RoundTerminal from "@/ui/icons/RoundTerminal";
import RoundUpgrade from "@/ui/icons/RoundUpgrade";
import RoundWifi from "@/ui/icons/RoundWifi";
import TinkerDash from "@/ui/icons/TinkerDash";
import type { PageProps } from "./types";

function World({ onNavigate }: PageProps) {
  return (
    <div className="flex w-full flex-col items-start bg-[#0b0d10] min-h-full font-['Inter']">
      <header className="flex w-full items-center gap-2 border-b border-solid border-[#1a1e23] bg-[#101317] px-6 py-4 mobile:px-4">
        <div className="flex items-center gap-3">
          <TinkerDash className="font-['Inter'] text-[28px] font-[400] leading-[42px] text-[#22c55e]" />
          <span className="font-['Inter'] text-[26px] font-[700] leading-[32px] text-[#ffffff]">
            Tinker Dash
          </span>
        </div>
        <div className="flex h-7 w-px flex-none items-start bg-[#232830]" />
        <span className="font-['Inter'] text-[17px] font-[400] leading-[24px] text-[#e5e7eb] mobile:hidden">
          Minecraft’s most intuitive server manager.
        </span>
        <div className="flex grow shrink-0 basis-0 flex-col items-start gap-2 px-2 py-2" />
        <div className="flex h-[33px] w-[33px] flex-none items-center justify-center gap-2 rounded-[9999px] border-2 border-dashed border-[#96a2b040] bg-[#1a1e23] px-3 py-1 opacity-50">
          <RoundDownload className="font-['Inter'] text-[18px] font-[400] leading-[20px] text-[#e5e7eb]" />
        </div>
        <div className="flex items-center justify-end gap-2 rounded-l-[9999px] border-2 border-solid border-[#96a2b040] bg-[#1a1e23] px-3 py-1">
          <div className="flex h-2 w-2 flex-none items-start rounded-[9999px] bg-[#96a2b0]" />
          <span className="font-['Inter'] text-[15px] font-[500] leading-[20px] text-[#ffffff]">
            No servers running
          </span>
        </div>
        <div className="flex items-center justify-end gap-0.5 rounded-r-[9999px] border-2 border-solid border-[#96a2b040] bg-[#1a1e23] pl-3 pr-1.5 py-1">
          <span className="font-['Inter'] text-[15px] font-[500] leading-[20px] text-[#ffffff]">
            Selected server
          </span>
          <svg
            className="font-['Inter'] text-[20px] font-[400] leading-[24px] text-[#7a828e]"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
          >
            <path
              d="M6.3 8.3a1 1 0 0 1 1.4 0l4.3 4.3 4.3-4.3a1 1 0 1 1 1.4 1.4l-5 5a1 1 0 0 1-1.4 0l-5-5a1 1 0 0 1 0-1.4"
              fill="currentColor"
              fillOpacity="1"
            />
          </svg>
        </div>
      </header>
      <main className="flex w-full grow shrink-0 basis-0 flex-col items-center bg-[#0b0d10] px-6 py-12 mobile:px-4 mobile:pt-6">
        <div className="flex w-full flex-col items-center">
          <nav className="flex w-full items-end justify-center gap-1.5 px-6 mobile:flex-wrap mobile:px-0 mobile:pb-2">
            <div onClick={() => onNavigate("Connection")} className="flex items-center gap-1.5 rounded-t-xl bg-[#0f2418] px-[7px] py-1 hover:bg-[#123321] mobile:rounded-xl grow justify-center cursor-pointer">
              <div className="flex h-6 w-6 flex-none items-center justify-center rounded-[9999px] border border-solid border-[#4b5563] text-[12px] text-[#e5e7eb]">
                <RoundWifi className="font-['Inter'] text-[18px] font-[400] leading-[20px] text-[#e5e7eb]" />
              </div>
              <span className="font-['Inter'] text-[15px] font-[400] leading-[24px] text-[#e5e7eb]">
                Connection
              </span>
            </div>
            <div onClick={() => onNavigate("Server")} className="flex items-center gap-1.5 rounded-t-xl bg-[#0f2418] px-[7px] py-1 hover:bg-[#123321] mobile:rounded-xl grow justify-center cursor-pointer">
              <div className="flex h-6 w-6 flex-none items-center justify-center rounded-[9999px] border border-solid border-[#4b5563] text-[12px] text-[#e5e7eb]">
                <RoundServerX1 className="font-['Inter'] text-[18px] font-[400] leading-[20px] text-[#e5e7eb]" />
              </div>
              <span className="font-['Inter'] text-[15px] font-[400] leading-[24px] text-[#e5e7eb]">
                Server
              </span>
            </div>
            <div onClick={() => onNavigate("Mods")} className="flex items-center gap-1.5 rounded-t-xl bg-[#0f2418] px-[7px] py-1 hover:bg-[#123321] mobile:rounded-xl grow justify-center cursor-pointer">
              <div className="flex h-6 w-6 flex-none items-center justify-center rounded-[9999px] border border-solid border-[#4b5563] text-[12px] text-[#e5e7eb]">
                <RoundCompass className="font-['Inter'] text-[16px] font-[400] leading-[20px] text-[#e5e7eb]" />
              </div>
              <span className="font-['Inter'] text-[15px] font-[400] leading-[24px] text-[#e5e7eb]">
                Mods
              </span>
              <div className="flex h-5 min-w-[20px] items-center justify-center rounded-[9999px] bg-[#22c55e] px-1.5">
                <span className="font-['Inter'] text-[12px] font-[700] leading-[16px] text-[#04130a]">
                  0
                </span>
              </div>
            </div>
            <div onClick={() => onNavigate("Files")} className="flex items-center gap-1.5 rounded-t-xl bg-[#0f2418] px-[7px] py-1 hover:bg-[#123321] mobile:rounded-xl grow justify-center cursor-pointer">
              <div className="flex h-6 w-6 flex-none items-center justify-center rounded-[9999px] border border-solid border-[#4b5563] text-[12px] text-[#e5e7eb]">
                <RoundList className="font-['Inter'] text-[18px] font-[400] leading-[20px] text-[#e5e7eb]" />
              </div>
              <span className="font-['Inter'] text-[15px] font-[400] leading-[24px] text-[#e5e7eb]">
                Files
              </span>
            </div>
            <div className="flex items-center gap-1.5 rounded-t-xl border-x border-t border-solid border-[#22c55e] bg-[#123321] px-[7px] py-1 shadow-[0px_12px_32px_-4px_#22c55e] mobile:rounded-xl mobile:border-b grow justify-center cursor-pointer">
              <div className="flex h-6 w-6 flex-none items-center justify-center rounded-[9999px] border border-solid border-[#86efac] text-[12px] text-white">
                <RoundLayers className="font-['Inter'] text-[18px] font-[400] leading-[20px] text-[#e5e7eb]" />
              </div>
              <span className="font-['Inter'] text-[15px] font-[500] leading-[24px] text-[#ffffff]">
                World
              </span>
            </div>
            <div onClick={() => onNavigate("Players")} className="flex items-center gap-1.5 rounded-t-xl bg-[#0f2418] px-[7px] py-1 hover:bg-[#123321] mobile:rounded-xl grow justify-center cursor-pointer">
              <div className="flex h-6 w-6 flex-none items-center justify-center rounded-[9999px] border border-solid border-[#4b5563] text-[12px] text-[#e5e7eb]">
                <RoundPeople className="font-['Inter'] text-[16px] font-[400] leading-[20px] text-[#e5e7eb]" />
              </div>
              <span className="font-['Inter'] text-[15px] font-[400] leading-[24px] text-[#e5e7eb]">
                Players
              </span>
            </div>
            <div onClick={() => onNavigate("Console")} className="flex items-center gap-1.5 rounded-t-xl bg-[#0f2418] px-[7px] py-1 hover:bg-[#123321] mobile:rounded-xl grow justify-center cursor-pointer">
              <div className="flex h-6 w-6 flex-none items-center justify-center rounded-[9999px] border border-solid border-[#4b5563] text-[12px] text-[#e5e7eb]">
                <RoundTerminal className="font-['Inter'] text-[16px] font-[400] leading-[20px] text-[#e5e7eb]" />
              </div>
              <span className="font-['Inter'] text-[15px] font-[400] leading-[24px] text-[#e5e7eb]">
                Console
              </span>
            </div>
            <div onClick={() => onNavigate("Backups")} className="flex items-center gap-1.5 rounded-t-xl bg-[#0f2418] px-[7px] py-1 hover:bg-[#123321] mobile:rounded-xl grow justify-center cursor-pointer">
              <div className="flex h-6 w-6 flex-none items-center justify-center rounded-[9999px] border border-solid border-[#4b5563] text-[12px] text-[#e5e7eb]">
                <RoundSaveAll className="font-['Inter'] text-[16px] font-[400] leading-[20px] text-[#e5e7eb]" />
              </div>
              <span className="font-['Inter'] text-[15px] font-[400] leading-[24px] text-[#e5e7eb]">
                Backups
              </span>
            </div>
            <div onClick={() => onNavigate("Tinker")} className="flex items-center gap-1.5 rounded-t-xl bg-[#0f2418] px-[7px] py-1 hover:bg-[#123321] mobile:rounded-xl grow justify-center cursor-pointer">
              <div className="flex h-6 w-6 flex-none items-center justify-center rounded-[9999px] border border-solid border-[#4b5563] text-[12px] text-[#e5e7eb]">
                <TinkerDash className="font-['Inter'] text-[14px] font-[400] leading-[20px] text-[#e5e7eb]" />
              </div>
              <span className="font-['Inter'] text-[15px] font-[400] leading-[24px] text-[#e5e7eb]">
                Tinker
              </span>
            </div>
          </nav>
          <section className="flex w-full flex-col items-start gap-6 rounded-3xl border border-solid border-[#1f242b] bg-[#111418] px-8 py-6 mobile:px-4">
            <div className="flex w-full items-center justify-between gap-4">
              <h1 className="font-['Inter'] text-[28px] font-[700] leading-[36px] text-[#ffffff]">
                World
              </h1>
            </div>
            <div className="flex w-full flex-col items-start gap-6">
              <div className="flex w-full items-center justify-between gap-4 mobile:flex-col mobile:items-start">
                <div className="flex grow shrink-0 basis-0 items-center gap-1">
                  <img
                    className="h-16 w-16 flex-none object-cover"
                    src="https://res.cloudinary.com/subframe/image/upload/v1793563275/uploads/47820/uuknirpioirlhs3yrltd.png"
                  />
                  <div className="flex flex-col items-start gap-1">
                    <span className="font-['Inter'] text-[20px] font-[700] leading-[28px] text-[#ffffff]">
                      Vanilla SMP
                    </span>
                    <span className="font-['Inter'] text-[12px] font-[400] leading-[16px] text-[#7a828e]">
                      Active world: world · Minecraft 1.21.1
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-2 mobile:w-full mobile:flex-none">
                  <div className="flex items-center justify-center gap-1 rounded-[8px] border border-solid border-[#2a3038] bg-[#1a1e23] px-3 py-1.5 hover:border-[#3a414b] mobile:hover:border-[#3a414b] mobile:grow">
                    <RoundUpgrade className="font-['Inter'] text-[16px] font-[400] leading-[20px] text-[#e5e7eb]" />
                    <span className="font-['Inter'] text-[14px] font-[600] leading-[20px] text-[#e5e7eb]">
                      Upload world
                    </span>
                  </div>
                  <div className="flex items-center justify-center gap-1 rounded-[8px] border border-solid border-[#22c55e] bg-[#22c55e] px-3 py-1.5 hover:bg-[#16a34a] mobile:hover:bg-[#16a34a] mobile:grow">
                    <RoundDownload className="font-['Inter'] text-[16px] font-[400] leading-[20px] text-[#04130a]" />
                    <span className="font-['Inter'] text-[14px] font-[600] leading-[20px] text-[#04130a]">
                      Download world
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex w-full flex-col items-start gap-4 rounded-xl border border-solid border-[#1f242b] bg-[#12151a] px-5 py-5 mobile:px-4">
                <div className="flex w-full flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 flex-none items-center justify-center rounded-[8px] border border-solid border-[#22c55e80] bg-[#0f2418]">
                      <RoundLayers className="font-['Inter'] text-[18px] font-[400] leading-[20px] text-[#86efac]" />
                    </div>
                    <span className="font-['Inter'] text-[18px] font-[700] leading-[26px] text-[#ffffff]">
                      world
                    </span>
                    <div className="flex items-center rounded-[9999px] border border-solid border-[#22c55e80] bg-[#0f2418] px-2 py-0.5">
                      <span className="font-['Inter'] text-[11px] font-[600] leading-[14px] text-[#86efac]">
                        Active
                      </span>
                    </div>
                  </div>
                  <span className="font-['Inter'] text-[12px] font-[400] leading-[16px] text-[#7a828e]">
                    Created Aug 14, 2026 · Spawn X 128, Y 72, Z -64
                  </span>
                </div>
                <div className="w-full items-start gap-3 grid grid-cols-4 mobile:grid mobile:grid-cols-2">
                  <div className="flex flex-col items-start gap-1 self-stretch rounded-[8px] border border-solid border-[#1f242b] bg-[#0f1216] px-3 py-3">
                    <span className="font-['Inter'] text-[12px] font-[500] leading-[16px] text-[#7a828e]">
                      Seed
                    </span>
                    <div className="flex w-full items-center gap-2">
                      <span className="grow shrink-0 basis-0 whitespace-nowrap font-['Inter'] text-[14px] font-[600] leading-[20px] text-[#ffffff] truncate">
                        -4172144997902289642
                      </span>
                      <div className="flex h-6 w-6 flex-none items-center justify-center rounded-[6px] border border-solid border-[#2a3038] bg-[#1a1e23] hover:border-[#3a414b]">
                        <OutlineContentCopy className="font-['Inter'] text-[13px] font-[400] leading-[16px] text-[#e5e7eb]" />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start gap-1 self-stretch rounded-[8px] border border-solid border-[#1f242b] bg-[#0f1216] px-3 py-3">
                    <span className="font-['Inter'] text-[12px] font-[500] leading-[16px] text-[#7a828e]">
                      World type
                    </span>
                    <span className="font-['Inter'] text-[14px] font-[600] leading-[20px] text-[#ffffff]">
                      Default
                    </span>
                  </div>
                  <div className="flex flex-col items-start gap-1 self-stretch rounded-[8px] border border-solid border-[#1f242b] bg-[#0f1216] px-3 py-3">
                    <span className="font-['Inter'] text-[12px] font-[500] leading-[16px] text-[#7a828e]">
                      Size
                    </span>
                    <span className="font-['Inter'] text-[14px] font-[600] leading-[20px] text-[#ffffff]">
                      2.4 GB
                    </span>
                  </div>
                  <div className="flex flex-col items-start gap-1 self-stretch rounded-[8px] border border-solid border-[#1f242b] bg-[#0f1216] px-3 py-3">
                    <span className="font-['Inter'] text-[12px] font-[500] leading-[16px] text-[#7a828e]">
                      Last played
                    </span>
                    <span className="font-['Inter'] text-[14px] font-[600] leading-[20px] text-[#ffffff]">
                      Nov 3, 2026, 3:12 PM
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex w-full flex-col items-start gap-3">
                <span className="font-['Inter'] text-[16px] font-[700] leading-[24px] text-[#ffffff]">
                  Dimensions
                </span>
                <div className="w-full items-start gap-3 grid grid-cols-3 mobile:grid mobile:grid-cols-1">
                  <div className="flex flex-col items-start gap-4 self-stretch rounded-xl bg-[#12151a] px-4 py-4 border border-solid border-[#1f242b] border-t-4 border-t-[#0095FC]">
                    <div className="flex w-full items-center gap-2">
                      <div className="flex h-2.5 w-2.5 flex-none items-start rounded-[9999px] bg-[#0095fc]" />
                      <span className="grow shrink-0 basis-0 font-['Inter'] text-[15px] font-[600] leading-[22px] text-[#ffffff]">
                        Overworld
                      </span>
                      <span className="font-['Inter'] text-[12px] font-[400] leading-[16px] text-[#7a828e]">
                        minecraft:overworld
                      </span>
                    </div>
                    <div className="flex w-full flex-col items-start gap-1.5">
                      <div className="flex w-full items-center justify-between">
                        <span className="font-['Inter'] text-[13px] font-[400] leading-[18px] text-[#7a828e]">
                          Size
                        </span>
                        <span className="font-['Inter'] text-[13px] font-[600] leading-[18px] text-[#e5e7eb]">
                          1.8 GB
                        </span>
                      </div>
                      <div className="flex w-full items-center justify-between">
                        <span className="font-['Inter'] text-[13px] font-[400] leading-[18px] text-[#7a828e]">
                          Chunks
                        </span>
                        <span className="font-['Inter'] text-[13px] font-[600] leading-[18px] text-[#e5e7eb]">
                          4,812
                        </span>
                      </div>
                      <div className="flex w-full items-center justify-between">
                        <span className="font-['Inter'] text-[13px] font-[400] leading-[18px] text-[#7a828e]">
                          Players here
                        </span>
                        <span className="font-['Inter'] text-[13px] font-[600] leading-[18px] text-[#86efac]">
                          6
                        </span>
                      </div>
                    </div>
                    <div className="flex w-full items-center justify-between border-t border-solid border-[#1f242b] pt-3">
                      <div className="flex items-center gap-1 rounded-[6px] px-1 py-1 hover:bg-[#1a1e23]">
                        <RoundRefresh className="font-['Inter'] text-[15px] font-[400] leading-[20px] text-[#aeb4bd]" />
                        <span className="font-['Inter'] text-[13px] font-[500] leading-[18px] text-[#aeb4bd]">
                          Reset
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-['Inter'] text-[13px] font-[500] leading-[18px] text-[#e5e7eb]">
                          Enabled
                        </span>
                        <Switch
                          checked={true}
                          onCheckedChange={() => {}}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start gap-4 self-stretch rounded-xl bg-[#12151a] px-4 py-4 border border-solid border-[#1f242b] border-t-4 border-t-[#ef4444]">
                    <div className="flex w-full items-center gap-2">
                      <div className="flex h-2.5 w-2.5 flex-none items-start rounded-[9999px] bg-[#ef4444]" />
                      <span className="grow shrink-0 basis-0 font-['Inter'] text-[15px] font-[600] leading-[22px] text-[#ffffff]">
                        The Nether
                      </span>
                      <span className="font-['Inter'] text-[12px] font-[400] leading-[16px] text-[#7a828e]">
                        minecraft:the_nether
                      </span>
                    </div>
                    <div className="flex w-full flex-col items-start gap-1.5">
                      <div className="flex w-full items-center justify-between">
                        <span className="font-['Inter'] text-[13px] font-[400] leading-[18px] text-[#7a828e]">
                          Size
                        </span>
                        <span className="font-['Inter'] text-[13px] font-[600] leading-[18px] text-[#e5e7eb]">
                          412 MB
                        </span>
                      </div>
                      <div className="flex w-full items-center justify-between">
                        <span className="font-['Inter'] text-[13px] font-[400] leading-[18px] text-[#7a828e]">
                          Chunks
                        </span>
                        <span className="font-['Inter'] text-[13px] font-[600] leading-[18px] text-[#e5e7eb]">
                          1,206
                        </span>
                      </div>
                      <div className="flex w-full items-center justify-between">
                        <span className="font-['Inter'] text-[13px] font-[400] leading-[18px] text-[#7a828e]">
                          Players here
                        </span>
                        <span className="font-['Inter'] text-[13px] font-[600] leading-[18px] text-[#fca5a5]">
                          1
                        </span>
                      </div>
                    </div>
                    <div className="flex w-full items-center justify-between border-t border-solid border-[#1f242b] pt-3">
                      <div className="flex items-center gap-1 rounded-[6px] px-1 py-1 hover:bg-[#1a1e23]">
                        <RoundRefresh className="font-['Inter'] text-[15px] font-[400] leading-[20px] text-[#aeb4bd]" />
                        <span className="font-['Inter'] text-[13px] font-[500] leading-[18px] text-[#aeb4bd]">
                          Reset
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-['Inter'] text-[13px] font-[500] leading-[18px] text-[#e5e7eb]">
                          Enabled
                        </span>
                        <Switch
                          checked={true}
                          onCheckedChange={() => {}}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start gap-4 self-stretch rounded-xl bg-[#12151a] px-4 py-4 border border-solid border-[#1f242b] border-t-4 border-t-[#a855f7]">
                    <div className="flex w-full items-center gap-2">
                      <div className="flex h-2.5 w-2.5 flex-none items-start rounded-[9999px] bg-[#a855f7]" />
                      <span className="grow shrink-0 basis-0 font-['Inter'] text-[15px] font-[600] leading-[22px] text-[#ffffff]">
                        The End
                      </span>
                      <span className="font-['Inter'] text-[12px] font-[400] leading-[16px] text-[#7a828e]">
                        minecraft:the_end
                      </span>
                    </div>
                    <div className="flex w-full flex-col items-start gap-1.5">
                      <div className="flex w-full items-center justify-between">
                        <span className="font-['Inter'] text-[13px] font-[400] leading-[18px] text-[#7a828e]">
                          Size
                        </span>
                        <span className="font-['Inter'] text-[13px] font-[600] leading-[18px] text-[#e5e7eb]">
                          188 MB
                        </span>
                      </div>
                      <div className="flex w-full items-center justify-between">
                        <span className="font-['Inter'] text-[13px] font-[400] leading-[18px] text-[#7a828e]">
                          Chunks
                        </span>
                        <span className="font-['Inter'] text-[13px] font-[600] leading-[18px] text-[#e5e7eb]">
                          340
                        </span>
                      </div>
                      <div className="flex w-full items-center justify-between">
                        <span className="font-['Inter'] text-[13px] font-[400] leading-[18px] text-[#7a828e]">
                          Players here
                        </span>
                        <span className="font-['Inter'] text-[13px] font-[600] leading-[18px] text-[#7a828e]">
                          0
                        </span>
                      </div>
                    </div>
                    <div className="flex w-full items-center justify-between border-t border-solid border-[#1f242b] pt-3">
                      <div className="flex items-center gap-1 rounded-[6px] px-1 py-1 hover:bg-[#1a1e23]">
                        <RoundRefresh className="font-['Inter'] text-[15px] font-[400] leading-[20px] text-[#aeb4bd]" />
                        <span className="font-['Inter'] text-[13px] font-[500] leading-[18px] text-[#aeb4bd]">
                          Reset
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-['Inter'] text-[13px] font-[500] leading-[18px] text-[#e5e7eb]">
                          Enabled
                        </span>
                        <Switch
                          checked={true}
                          onCheckedChange={() => {}}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex w-full flex-col items-start gap-3">
                <span className="font-['Inter'] text-[16px] font-[700] leading-[24px] text-[#ffffff]">
                  World border &amp; pregeneration
                </span>
                <div className="flex w-full rounded-xl border border-solid border-[#1f242b] bg-[#12151a] items-stretch mobile:flex-col">
                  <div className="flex grow shrink-0 basis-0 items-center gap-4 px-5 py-5 mobile:px-4">
                    <div className="flex h-9 w-9 flex-none items-center justify-center rounded-[8px] border border-solid border-[#2a3038] bg-[#1a1e23]">
                      <RoundCompass className="font-['Inter'] text-[18px] font-[400] leading-[20px] text-[#e5e7eb]" />
                    </div>
                    <div className="flex grow shrink-0 basis-0 flex-col items-start gap-0.5">
                      <span className="font-['Inter'] text-[15px] font-[600] leading-[22px] text-[#ffffff]">
                        World border
                      </span>
                      <span className="font-['Inter'] text-[12px] font-[400] leading-[16px] text-[#7a828e]">
                        Diameter 10,000 blocks · Center 0, 0
                      </span>
                    </div>
                    <div className="flex items-center justify-center gap-1 rounded-[8px] border border-solid border-[#2a3038] bg-[#1a1e23] px-3 py-1 hover:border-[#3a414b]">
                      <RoundModeEditOutline className="font-['Inter'] text-[16px] font-[400] leading-[20px] text-[#e5e7eb]" />
                      <span className="font-['Inter'] text-[14px] font-[400] leading-[20px] text-[#e5e7eb]">
                        Edit
                      </span>
                    </div>
                  </div>
                  <div className="flex w-px flex-none items-start bg-[#1f242b] mobile:h-px mobile:w-full mobile:flex-none" />
                  <div className="flex grow shrink-0 basis-0 flex-col items-start gap-3 px-5 py-5 mobile:px-4">
                    <div className="flex w-full items-center gap-4">
                      <div className="flex h-9 w-9 flex-none items-center justify-center rounded-[8px] border border-solid border-[#22c55e80] bg-[#0f2418]">
                        <RoundHourglassTop className="font-['Inter'] text-[18px] font-[400] leading-[20px] text-[#86efac]" />
                      </div>
                      <div className="flex grow shrink-0 basis-0 flex-col items-start gap-0.5">
                        <div className="flex items-center gap-2">
                          <span className="font-['Inter'] text-[15px] font-[600] leading-[22px] text-[#ffffff]">
                            Chunky Pregeneration
                          </span>
                          <span className="font-['Inter'] text-[15px] font-[700] leading-[22px] text-[#86efac]">
                            72%
                          </span>
                        </div>
                        <span className="font-['Inter'] text-[12px] font-[400] leading-[16px] text-[#7a828e]">
                          14,320 / 19,881 chunks · ~6 min left
                        </span>
                      </div>
                      <div className="flex items-center justify-center gap-1 rounded-[8px] border border-solid border-[#2a3038] bg-[#1a1e23] px-3 py-1 hover:border-[#3a414b]">
                        <RoundPause className="font-['Inter'] text-[16px] font-[400] leading-[20px] text-[#e5e7eb]" />
                        <span className="font-['Inter'] text-[14px] font-[400] leading-[20px] text-[#e5e7eb]">
                          Pause
                        </span>
                      </div>
                    </div>
                    <div className="flex h-2 w-full flex-none items-start overflow-hidden rounded-[9999px] bg-[#1f242b]">
                      <div className="flex items-start self-stretch rounded-[9999px] bg-[#22c55e] w-[50%]" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex w-full flex-col items-start gap-3">
                <span className="font-['Inter'] text-[16px] font-[700] leading-[24px] text-[#ffffff]">
                  Saved worlds
                </span>
                <div className="flex w-full flex-col items-start gap-2">
                  <div className="flex w-full items-center gap-3 rounded-[8px] border border-solid border-[#22c55e40] bg-[#12151a] px-4 py-3 mobile:flex-wrap">
                    <div className="flex h-9 w-9 flex-none items-center justify-center rounded-[8px] border border-solid border-[#2a3038] bg-[#1a1e23]">
                      <RoundLayers className="font-['Inter'] text-[18px] font-[400] leading-[20px] text-[#c4c9d1]" />
                    </div>
                    <div className="flex grow shrink-0 basis-0 flex-col items-start gap-0.5">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="font-['Inter'] text-[15px] font-[600] leading-[22px] text-[#ffffff]">
                          world
                        </span>
                        <div className="flex items-center rounded-[9999px] border border-solid border-[#22c55e80] bg-[#0f2418] px-2 py-0.5">
                          <span className="font-['Inter'] text-[11px] font-[600] leading-[14px] text-[#86efac]">
                            Active
                          </span>
                        </div>
                      </div>
                      <span className="font-['Inter'] text-[12px] font-[400] leading-[16px] text-[#7a828e]">
                        2.4 GB · 1.21.1 · Playing now
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex h-8 w-8 flex-none items-center justify-center rounded-[8px] border border-solid border-[#2a3038] bg-[#1a1e23] hover:border-[#3a414b]">
                        <RoundDownload className="font-['Inter'] text-[16px] font-[400] leading-[20px] text-[#e5e7eb]" />
                      </div>
                    </div>
                  </div>
                  <div className="flex w-full items-center gap-3 rounded-[8px] border border-solid border-[#1f242b] bg-[#12151a] px-4 py-3 mobile:flex-wrap">
                    <div className="flex h-9 w-9 flex-none items-center justify-center rounded-[8px] border border-solid border-[#2a3038] bg-[#1a1e23]">
                      <RoundLayers className="font-['Inter'] text-[18px] font-[400] leading-[20px] text-[#c4c9d1]" />
                    </div>
                    <div className="flex grow shrink-0 basis-0 flex-col items-start gap-0.5">
                      <span className="font-['Inter'] text-[15px] font-[600] leading-[22px] text-[#ffffff]">
                        creative_build
                      </span>
                      <span className="font-['Inter'] text-[12px] font-[400] leading-[16px] text-[#7a828e]">
                        860 MB · 1.21.1 · Last played Oct 28, 2026
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex items-center justify-center gap-1 rounded-[8px] border border-solid border-[#2a3038] bg-[#1a1e23] px-3 py-1 hover:border-[#3a414b]">
                        <RoundCheckCircleOutline className="font-['Inter'] text-[16px] font-[400] leading-[20px] text-[#e5e7eb]" />
                        <span className="font-['Inter'] text-[14px] font-[400] leading-[20px] text-[#e5e7eb]">
                          Set active
                        </span>
                      </div>
                      <div className="flex h-8 w-8 flex-none items-center justify-center rounded-[8px] border border-solid border-[#2a3038] bg-[#1a1e23] hover:border-[#3a414b]">
                        <RoundDownload className="font-['Inter'] text-[16px] font-[400] leading-[20px] text-[#e5e7eb]" />
                      </div>
                      <div className="flex h-8 w-8 flex-none items-center justify-center rounded-[8px] border border-solid border-[#2a3038] bg-[#1a1e23] hover:border-[#ef4444] hover:bg-[#2a1215]">
                        <RoundDelete className="font-['Inter'] text-[16px] font-[400] leading-[20px] text-[#e5e7eb]" />
                      </div>
                    </div>
                  </div>
                  <div className="flex w-full items-center gap-3 rounded-[8px] border border-solid border-[#1f242b] bg-[#12151a] px-4 py-3 mobile:flex-wrap">
                    <div className="flex h-9 w-9 flex-none items-center justify-center rounded-[8px] border border-solid border-[#2a3038] bg-[#1a1e23]">
                      <RoundLayers className="font-['Inter'] text-[18px] font-[400] leading-[20px] text-[#c4c9d1]" />
                    </div>
                    <div className="flex grow shrink-0 basis-0 flex-col items-start gap-0.5">
                      <span className="font-['Inter'] text-[15px] font-[600] leading-[22px] text-[#ffffff]">
                        skyblock_v2
                      </span>
                      <span className="font-['Inter'] text-[12px] font-[400] leading-[16px] text-[#7a828e]">
                        310 MB · 1.20.4 · Last played Sep 12, 2026
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex items-center justify-center gap-1 rounded-[8px] border border-solid border-[#2a3038] bg-[#1a1e23] px-3 py-1 hover:border-[#3a414b]">
                        <RoundCheckCircleOutline className="font-['Inter'] text-[16px] font-[400] leading-[20px] text-[#e5e7eb]" />
                        <span className="font-['Inter'] text-[14px] font-[400] leading-[20px] text-[#e5e7eb]">
                          Set active
                        </span>
                      </div>
                      <div className="flex h-8 w-8 flex-none items-center justify-center rounded-[8px] border border-solid border-[#2a3038] bg-[#1a1e23] hover:border-[#3a414b]">
                        <RoundDownload className="font-['Inter'] text-[16px] font-[400] leading-[20px] text-[#e5e7eb]" />
                      </div>
                      <div className="flex h-8 w-8 flex-none items-center justify-center rounded-[8px] border border-solid border-[#2a3038] bg-[#1a1e23] hover:border-[#ef4444] hover:bg-[#2a1215]">
                        <RoundDelete className="font-['Inter'] text-[16px] font-[400] leading-[20px] text-[#e5e7eb]" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex w-full items-center gap-4 rounded-xl border border-solid border-[#ef444499] bg-[#1a0f11] px-5 py-4 mobile:flex-col mobile:items-start mobile:px-4">
                <div className="flex h-9 w-9 flex-none items-center justify-center rounded-[8px] border border-solid border-[#ef444466] bg-[#2a1215]">
                  <RoundDelete className="font-['Inter'] text-[18px] font-[400] leading-[20px] text-[#f87171]" />
                </div>
                <div className="flex grow shrink-0 basis-0 flex-col items-start gap-0.5">
                  <span className="font-['Inter'] text-[15px] font-[600] leading-[22px] text-[#fca5a5]">
                    Regenerate world
                  </span>
                  <span className="font-['Inter'] text-[12px] font-[400] leading-[16px] text-[#aeb4bd]">
                    Deletes the current world and creates a new one from a seed
                  </span>
                </div>
                <div className="flex items-center justify-center gap-1 rounded-[8px] border border-solid border-[#ef4444] bg-[#ef4444] px-3 py-1.5 hover:bg-[#dc2626] mobile:w-full mobile:flex-none">
                  <RoundRefresh className="font-['Inter'] text-[16px] font-[400] leading-[20px] text-[#ffffff]" />
                  <span className="font-['Inter'] text-[14px] font-[600] leading-[20px] text-[#ffffff]">
                    Regenerate
                  </span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default World;