import BrainCircuit24Regular from "@/ui/icons/BrainCircuit24Regular";
import RoundCompass from "@/ui/icons/RoundCompass";
import RoundDownload from "@/ui/icons/RoundDownload";
import RoundFolderCopy from "@/ui/icons/RoundFolderCopy";
import RoundLayers from "@/ui/icons/RoundLayers";
import RoundList from "@/ui/icons/RoundList";
import RoundPeople from "@/ui/icons/RoundPeople";
import RoundRefresh from "@/ui/icons/RoundRefresh";
import RoundSaveAll from "@/ui/icons/RoundSaveAll";
import RoundServerX1 from "@/ui/icons/RoundServerX1";
import RoundTerminal from "@/ui/icons/RoundTerminal";
import RoundWifi from "@/ui/icons/RoundWifi";
import TinkerDash from "@/ui/icons/TinkerDash";
import type { PageProps } from "./types";

function Backups({ onNavigate }: PageProps) {
  return (
    <div className="flex h-[720px] w-320 flex-col items-start min-h-full font-['Inter']">
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
      <main className="flex h-[720px] w-full flex-none flex-col items-center bg-[#0b0d10] px-6 py-12 mobile:px-4 mobile:pt-6">
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
            <div onClick={() => onNavigate("World")} className="flex items-center gap-1.5 rounded-t-xl bg-[#0f2418] px-[7px] py-1 hover:bg-[#123321] mobile:rounded-xl grow justify-center cursor-pointer">
              <div className="flex h-6 w-6 flex-none items-center justify-center rounded-[9999px] border border-solid border-[#4b5563] text-[12px] text-[#e5e7eb]">
                <RoundLayers className="font-['Inter'] text-[18px] font-[400] leading-[20px] text-[#e5e7eb]" />
              </div>
              <span className="font-['Inter'] text-[15px] font-[400] leading-[24px] text-[#e5e7eb]">
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
            <div onClick={() => onNavigate("Backups")} className="flex items-center gap-1.5 rounded-t-xl border-x border-t border-solid border-[#22c55e] bg-[#123321] px-[7px] py-1 shadow-[0px_12px_32px_-4px_#22c55e] mobile:rounded-xl mobile:border-b grow justify-center cursor-pointer">
              <div className="flex h-6 w-6 flex-none items-center justify-center rounded-[9999px] border border-solid border-[#86efac] text-[12px] text-white">
                <RoundSaveAll className="font-['Inter'] text-[16px] font-[400] leading-[20px] text-[#e5e7eb]" />
              </div>
              <span className="font-['Inter'] text-[15px] font-[500] leading-[24px] text-[#ffffff]">
                Backups
              </span>
            </div>
            <div onClick={() => onNavigate("Tinker")} className="flex items-center gap-1.5 rounded-t-xl bg-[#0f2418] px-[7px] py-1 hover:bg-[#123321] grow justify-center cursor-pointer">
              <div className="flex h-6 w-6 flex-none items-center justify-center rounded-[9999px] border border-solid border-[#4b5563] text-[12px] text-[#e5e7eb]">
                <TinkerDash className="font-['Inter'] text-[14px] font-[400] leading-[20px] text-[#e5e7eb]" />
              </div>
              <span className="font-['Inter'] text-[15px] font-[400] leading-[24px] text-[#e5e7eb]">
                Tinker
              </span>
            </div>
          </nav>
          <section className="flex max-h-[956px] w-full flex-col items-start gap-6 rounded-3xl border border-solid border-[#1f242b] bg-[#111418] px-8 py-6 mobile:px-4">
            <div className="flex w-full items-center justify-between gap-4">
              <h1 className="font-['Inter'] text-[28px] font-[700] leading-[36px] text-[#ffffff]">
                Backups
              </h1>
            </div>
            <div className="flex max-h-[543px] w-full flex-col items-start gap-5 overflow-auto">
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
                      8 backups · 4.6 GB total · Across 3 months
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-[5px]">
                  <div className="flex items-center justify-center gap-1 rounded-[8px] border border-solid border-[#22c55e] bg-[#22c55e] px-3 py-1.5 hover:bg-[#16a34a]">
                    <RoundSaveAll className="font-['Inter'] text-[16px] font-[400] leading-[20px] text-[#04130a]" />
                    <span className="font-['Inter'] text-[14px] font-[600] leading-[20px] text-[#04130a]">
                      Backup 
                    </span>
                  </div>
                  <div className="flex items-center justify-center gap-1 rounded-[8px] border border-solid border-[#a855f7] bg-[#22c55e] px-3 py-1.5 bg-gradient-to-b from-[#a855f7] to-[#7c3aed]">
                    <BrainCircuit24Regular className="font-['Inter'] text-[16px] font-[400] leading-[20px] text-[#ffffff]" />
                    <span className="font-['Inter'] text-[14px] font-[600] leading-[20px] text-[#ffffff]">
                      Smart Backup
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex w-full flex-col items-start gap-2">
                <div className="flex w-full items-center gap-3 rounded-[8px] border border-solid border-[#1f242b] bg-[#12151a] px-4 py-3 mobile:flex-wrap">
                  <div className="flex h-9 w-9 flex-none items-center justify-center rounded-[8px] border border-solid border-[#2a3038] bg-[#1a1e23]">
                    <svg
                      className="font-['Inter'] text-[18px] font-[400] leading-[27px] text-[#c4c9d1]"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="m20.54 5.23-1.39-1.68C18.88 3.21 18.47 3 18 3H6c-.47 0-.88.21-1.16.55L3.46 5.23C3.17 5.57 3 6.02 3 6.5V19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6.5c0-.48-.17-.93-.46-1.27M12 17.5 6.5 12H10v-2h4v2h3.5zM5.12 5l.81-1h12l.94 1z"
                        fill="currentColor"
                        fillOpacity="1"
                      />
                    </svg>
                  </div>
                  <div className="flex grow shrink-0 basis-0 flex-col items-start gap-0.5">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-['Inter'] text-[15px] font-[600] leading-[22px] text-[#ffffff]">
                        Backup 1
                      </span>
                      <span className="font-['Inter'] text-[15px] font-[400] leading-[22px] text-[#7a828e]">
                        — Nov 1, 2026, 6:00 AM
                      </span>
                      <div className="flex items-center rounded-[9999px] border border-solid border-[#22c55e80] bg-[#0f2418] px-2 py-0.5">
                        <span className="font-['Inter'] text-[11px] font-[600] leading-[14px] text-[#86efac]">
                          Latest
                        </span>
                      </div>
                    </div>
                    <span className="font-['Inter'] text-[12px] font-[400] leading-[16px] text-[#7a828e]">
                      612 MB · Automatic
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center justify-center gap-1 rounded-[8px] border border-solid border-[#2a3038] bg-[#1a1e23] px-1 py-1 hover:border-[#3a414b]">
                      <RoundFolderCopy className="font-['Inter'] text-[16px] font-[400] leading-[20px] text-[#aeb4bd]" />
                    </div>
                    <div className="flex items-center justify-center gap-1 self-stretch rounded-[8px] border border-solid border-[#2a3038] bg-[#1a1e23] px-3 py-1 hover:border-[#3a414b]">
                      <RoundRefresh className="font-['Inter'] text-[16px] font-[400] leading-[20px] text-[#aeb4bd]" />
                      <span className="font-['Inter'] text-[14px] font-[400] leading-[20px] text-[#aeb4bd]">
                        Restore
                      </span>
                    </div>
                    <div className="flex h-8 w-8 flex-none items-center justify-center rounded-[8px] border border-solid border-[#2a3038] bg-[#1a1e23] text-[#aeb4bd] hover:border-[#3a414b] hover:text-[#ffffff]">
                      <RoundDownload className="font-['Inter'] text-[16px] font-[400] leading-[20px] text-[#aeb4bd]" />
                    </div>
                    <div className="flex h-8 w-8 flex-none items-center justify-center rounded-[8px] border border-solid border-[#2a3038] bg-[#1a1e23] text-[#aeb4bd] hover:border-[#ef4444] hover:bg-[#2a1215] hover:text-[#ef4444]">
                      <svg
                        className="font-['Inter'] text-[16px] font-[400] leading-[24px] text-[#aeb4bd]"
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z"
                          fill="currentColor"
                          fillOpacity="1"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="flex w-full items-center gap-3 rounded-[8px] border border-solid border-[#a855f7] bg-[#12151a] px-4 py-3 mobile:flex-wrap">
                  <div className="flex h-9 w-9 flex-none items-center justify-center rounded-[8px] border border-solid border-[#2a3038] bg-[#1a1e23]">
                    <svg
                      className="font-['Inter'] text-[18px] font-[400] leading-[27px] text-[#c4c9d1]"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="m20.54 5.23-1.39-1.68C18.88 3.21 18.47 3 18 3H6c-.47 0-.88.21-1.16.55L3.46 5.23C3.17 5.57 3 6.02 3 6.5V19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6.5c0-.48-.17-.93-.46-1.27M12 17.5 6.5 12H10v-2h4v2h3.5zM5.12 5l.81-1h12l.94 1z"
                        fill="currentColor"
                        fillOpacity="1"
                      />
                    </svg>
                  </div>
                  <div className="flex grow shrink-0 basis-0 flex-col items-start gap-0.5">
                    <div className="flex flex-wrap items-center gap-0.5">
                      <BrainCircuit24Regular className="font-['Inter'] text-[20px] font-[400] leading-[20px] text-[#ffffff]" />
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="font-['Inter'] text-[15px] font-[600] leading-[22px] text-[#ffffff]">
                          Smart Backup 7
                        </span>
                      </div>
                      <span className="font-['Inter'] text-[15px] font-[400] leading-[22px] text-[#7a828e]">
                        — Nov 1, 2026, 12:00 AM
                      </span>
                    </div>
                    <span className="font-['Inter'] text-[12px] font-[400] leading-[16px] text-[#7a828e]">
                      608 MB · Automatic
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center justify-center gap-1 rounded-[8px] border border-solid border-[#2a3038] bg-[#1a1e23] px-1 py-1 hover:border-[#3a414b]">
                      <RoundFolderCopy className="font-['Inter'] text-[16px] font-[400] leading-[20px] text-[#aeb4bd]" />
                    </div>
                    <div className="flex items-center justify-center gap-1 self-stretch rounded-[8px] border border-solid border-[#2a3038] bg-[#1a1e23] px-3 py-1 hover:border-[#3a414b]">
                      <RoundRefresh className="font-['Inter'] text-[16px] font-[400] leading-[20px] text-[#aeb4bd]" />
                      <span className="font-['Inter'] text-[14px] font-[400] leading-[20px] text-[#aeb4bd]">
                        Restore
                      </span>
                    </div>
                    <div className="flex h-8 w-8 flex-none items-center justify-center rounded-[8px] border border-solid border-[#2a3038] bg-[#1a1e23] text-[#aeb4bd] hover:border-[#3a414b] hover:text-[#ffffff]">
                      <RoundDownload className="font-['Inter'] text-[16px] font-[400] leading-[20px] text-[#aeb4bd]" />
                    </div>
                    <div className="flex h-8 w-8 flex-none items-center justify-center rounded-[8px] border border-solid border-[#2a3038] bg-[#1a1e23] text-[#aeb4bd] hover:border-[#ef4444] hover:bg-[#2a1215] hover:text-[#ef4444]">
                      <svg
                        className="font-['Inter'] text-[16px] font-[400] leading-[24px] text-[#aeb4bd]"
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z"
                          fill="currentColor"
                          fillOpacity="1"
                        />
                      </svg>
                    </div>
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

export default Backups;