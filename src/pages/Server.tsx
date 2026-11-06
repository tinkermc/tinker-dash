import OutlineInfo from "@/ui/icons/OutlineInfo";
import OutlineLabel from "@/ui/icons/OutlineLabel";
import RoundCode from "@/ui/icons/RoundCode";
import RoundCompass from "@/ui/icons/RoundCompass";
import RoundDownload from "@/ui/icons/RoundDownload";
import RoundLayers from "@/ui/icons/RoundLayers";
import RoundList from "@/ui/icons/RoundList";
import RoundMemory from "@/ui/icons/RoundMemory";
import RoundPeople from "@/ui/icons/RoundPeople";
import RoundPlayArrow from "@/ui/icons/RoundPlayArrow";
import RoundRefresh from "@/ui/icons/RoundRefresh";
import RoundSave from "@/ui/icons/RoundSave";
import RoundSaveAll from "@/ui/icons/RoundSaveAll";
import RoundServerX1 from "@/ui/icons/RoundServerX1";
import RoundSettingsEthernet from "@/ui/icons/RoundSettingsEthernet";
import RoundShortText from "@/ui/icons/RoundShortText";
import RoundStop from "@/ui/icons/RoundStop";
import RoundTerminal from "@/ui/icons/RoundTerminal";
import RoundTimer from "@/ui/icons/RoundTimer";
import RoundTroubleshoot from "@/ui/icons/RoundTroubleshoot";
import RoundWifi from "@/ui/icons/RoundWifi";
import TinkerDash from "@/ui/icons/TinkerDash";
import Versions from "@/ui/icons/Versions";
import type { PageProps } from "./types";

function ServerRedesign({ onNavigate }: PageProps) {
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
            <div onClick={() => onNavigate("Server")} className="flex items-center gap-1.5 rounded-t-xl border-x border-t border-solid border-[#22c55e] bg-[#123321] px-[7px] py-1 shadow-[0px_12px_32px_-4px_#22c55e] mobile:rounded-xl mobile:border-b grow justify-center cursor-pointer">
              <div className="flex h-6 w-6 flex-none items-center justify-center rounded-[9999px] border border-solid border-[#86efac] text-[12px] text-white">
                <RoundServerX1 className="font-['Inter'] text-[18px] font-[400] leading-[20px] text-[#e5e7eb]" />
              </div>
              <span className="font-['Inter'] text-[15px] font-[500] leading-[24px] text-[#ffffff]">
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
                Server
              </h1>
            </div>
            <div className="flex w-full flex-col items-start gap-5 rounded-2xl border border-solid border-[#1f242b] bg-[#0e1114] px-6 py-5 mobile:px-4">
              <div className="flex w-full items-center gap-4 mobile:flex-col mobile:items-start">
                <div className="flex grow shrink-0 basis-0 items-center gap-3">
                  <div className="flex h-14 w-14 flex-none items-center justify-center rounded-xl border border-solid border-[#232830] bg-[#15191e]">
                    <img
                      className="h-10 w-10 flex-none object-contain"
                      src="https://res.cloudinary.com/subframe/image/upload/v1793563275/uploads/47820/uuknirpioirlhs3yrltd.png"
                    />
                  </div>
                  <div className="flex flex-col items-start gap-0.5">
                    <span className="font-['Inter'] text-[20px] font-[700] leading-[28px] text-[#ffffff]">
                      Vanilla SMP
                    </span>
                    <span className="font-['Inter'] text-[13px] font-[400] leading-[18px] text-[#7a828e]">
                      Vanilla 1.21.1 · Port 25565
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="flex items-center gap-2 rounded-[9999px] border border-solid border-[#22c55e] bg-[#123321] px-3 py-1">
                    <RoundTroubleshoot className="font-['Inter'] text-[14px] font-[400] leading-[16px] text-[#22c55e]" />
                    <span className="font-['Inter'] text-[13px] font-[500] leading-[18px] text-[#ffffff]">
                      Healthy
                    </span>
                  </div>
                  <div className="flex items-center gap-2 rounded-[9999px] border border-solid border-[#22c55e] bg-[#123321] px-3 py-1">
                    <div className="flex h-2 w-2 flex-none items-start rounded-[9999px] bg-[#22c55e] shadow-[0px_0px_8px_0px_#22c55e]" />
                    <span className="font-['Inter'] text-[13px] font-[500] leading-[18px] text-[#ffffff]">
                      Running
                    </span>
                  </div>
                </div>
              </div>
              <div className="w-full items-start gap-3 grid grid-cols-4 mobile:grid mobile:grid-cols-2">
                <div className="flex flex-col items-start gap-1 self-stretch rounded-xl border border-solid border-[#1f242b] bg-[#111418] px-4 py-3">
                  <div className="flex items-center gap-1.5">
                    <RoundPeople className="font-['Inter'] text-[16px] font-[400] leading-[16px] text-[#7a828e]" />
                    <span className="font-['Inter'] text-[12px] font-[500] leading-[16px] text-[#7a828e]">
                      Players
                    </span>
                  </div>
                  <span className="font-['Inter'] text-[20px] font-[700] leading-[28px] text-[#ffffff]">
                    1 / 20
                  </span>
                </div>
                <div className="flex flex-col items-start gap-1 self-stretch rounded-xl border border-solid border-[#1f242b] bg-[#111418] px-4 py-3">
                  <div className="flex items-center gap-1.5">
                    <RoundTimer className="font-['Inter'] text-[16px] font-[400] leading-[16px] text-[#7a828e]" />
                    <span className="font-['Inter'] text-[12px] font-[500] leading-[16px] text-[#7a828e]">
                      Uptime
                    </span>
                  </div>
                  <span className="font-['Inter'] text-[20px] font-[700] leading-[28px] text-[#ffffff]">
                    3h 12m
                  </span>
                </div>
                <div className="flex flex-col items-start gap-1 self-stretch rounded-xl border border-solid border-[#1f242b] bg-[#111418] px-4 py-3">
                  <div className="flex items-center gap-1.5">
                    <RoundMemory className="font-['Inter'] text-[16px] font-[400] leading-[16px] text-[#7a828e]" />
                    <span className="font-['Inter'] text-[12px] font-[500] leading-[16px] text-[#7a828e]">
                      Memory
                    </span>
                  </div>
                  <span className="font-['Inter'] text-[20px] font-[700] leading-[28px] text-[#ffffff]">
                    2.1 / 4 GB
                  </span>
                </div>
                <div className="flex flex-col items-start gap-1 self-stretch rounded-xl border border-solid border-[#1f242b] bg-[#111418] px-4 py-3">
                  <div className="flex items-center gap-1.5">
                    <RoundTroubleshoot className="font-['Inter'] text-[16px] font-[400] leading-[16px] text-[#7a828e]" />
                    <span className="font-['Inter'] text-[12px] font-[500] leading-[16px] text-[#7a828e]">
                      TPS
                    </span>
                  </div>
                  <span className="font-['Inter'] text-[20px] font-[700] leading-[28px] text-[#22c55e]">
                    20.0
                  </span>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <div className="flex h-9 items-center gap-1.5 rounded-[8px] border border-solid border-[#22c55e80] bg-[#123321] px-4 opacity-40">
                  <RoundPlayArrow className="font-['Inter'] text-[18px] font-[400] leading-[20px] text-[#ffffff]" />
                  <span className="font-['Inter'] text-[14px] font-[500] leading-[20px] text-[#ffffff]">
                    Start
                  </span>
                </div>
                <div className="flex h-9 items-center gap-1.5 rounded-[8px] border border-solid border-[#2a3038] bg-[#1a1e23] px-4 hover:bg-[#232830]">
                  <RoundRefresh className="font-['Inter'] text-[18px] font-[400] leading-[20px] text-[#e5e7eb]" />
                  <span className="font-['Inter'] text-[14px] font-[500] leading-[20px] text-[#e5e7eb]">
                    Restart
                  </span>
                </div>
                <div className="flex h-9 items-center gap-1.5 rounded-[8px] border border-solid border-[#ef4444] bg-[#2a1215] px-4 hover:bg-[#3a171b]">
                  <RoundStop className="font-['Inter'] text-[18px] font-[400] leading-[20px] text-[#f87171]" />
                  <span className="font-['Inter'] text-[14px] font-[500] leading-[20px] text-[#fca5a5]">
                    Stop
                  </span>
                </div>
              </div>
            </div>
            <div className="flex w-full flex-col items-start gap-4 rounded-2xl border border-solid border-[#1f242b] bg-[#0e1114] px-6 py-5 mobile:px-4">
              <span className="font-['Inter'] text-[16px] font-[600] leading-[24px] text-[#ffffff]">
                Identity
              </span>
              <div className="flex w-full flex-col items-start gap-2">
                <div className="flex items-center gap-1">
                  <OutlineLabel className="font-['Inter'] text-[18px] font-[500] leading-[20px] text-[#c4c9d1]" />
                  <span className="font-['Inter'] text-[14px] font-[500] leading-[20px] text-[#c4c9d1]">
                    Tinker Server Label
                  </span>
                </div>
                <input
                  className="h-10 w-full flex-none rounded-[8px] border border-solid border-[#2a3038] bg-[#0b0d10] px-3 font-['Inter'] text-[14px] font-[400] leading-[20px] text-[#ffffff] outline-none placeholder:text-[#7a828e] focus-within:border-[#22c55e]"
                  placeholder="Server label"
                  value=""
                  type="text"
                />
              </div>
              <div className="flex w-full flex-col items-start gap-2">
                <div className="flex items-center gap-1">
                  <RoundShortText className="font-['Inter'] text-[18px] font-[500] leading-[20px] text-[#c4c9d1]" />
                  <span className="font-['Inter'] text-[14px] font-[500] leading-[20px] text-[#c4c9d1]">
                    Server Description (MOTD)
                  </span>
                </div>
                <textarea
                  className="h-16 w-full flex-none rounded-[8px] border border-solid border-[#2a3038] bg-[#0b0d10] px-3 py-2 font-['Inter'] text-[14px] font-[400] leading-[20px] text-[#ffffff] outline-none placeholder:text-[#7a828e] focus-within:border-[#22c55e]"
                  placeholder={
                    "Message of the day\nTwo-lines with 59 characters each!"
                  }
                  value=""
                />
                <div className="flex w-full items-center gap-3 rounded-[8px] border border-solid border-[#1f242b] bg-[#08090b] px-3 py-2">
                  <img
                    className="h-10 w-10 flex-none object-contain"
                    src="https://res.cloudinary.com/subframe/image/upload/v1793563275/uploads/47820/uuknirpioirlhs3yrltd.png"
                  />
                  <div className="flex grow shrink-0 basis-0 flex-col items-start">
                    <span className="font-['Inter'] text-[13px] font-[600] leading-[18px] text-[#ffffff]">
                      Vanilla SMP
                    </span>
                    <span className="line-clamp-1 font-['Inter'] text-[12px] font-[400] leading-[16px] text-[#aeb4bd]">
                      Vanilla SMP!
                    </span>
                    <span className="line-clamp-1 font-['Inter'] text-[12px] font-[400] leading-[16px] text-[#aeb4bd]">
                      Scheduled maintenance at 5 EST
                    </span>
                  </div>
                  <div className="flex flex-col items-end gap-1 self-start">
                    <div className="flex items-end gap-0.5">
                      <div className="flex h-1 w-[3px] flex-none items-start bg-[#22c55e]" />
                      <div className="flex h-1.5 w-[3px] flex-none items-start bg-[#22c55e]" />
                      <div className="flex h-2 w-[3px] flex-none items-start bg-[#22c55e]" />
                      <div className="flex h-2.5 w-[3px] flex-none items-start bg-[#22c55e]" />
                      <div className="flex h-3 w-[3px] flex-none items-start bg-[#22c55e]" />
                    </div>
                    <span className="font-['Inter'] text-[12px] font-[400] leading-[16px] text-[#7a828e]">
                      1/20
                    </span>
                  </div>
                </div>
                <span className="font-['Inter'] text-[12px] font-[400] leading-[16px] text-[#7a828e]">
                  Preview in the Minecraft server list
                </span>
              </div>
            </div>
            <div className="flex w-full flex-col items-start gap-4 rounded-2xl border border-solid border-[#1f242b] bg-[#0e1114] px-6 py-5 mobile:px-4">
              <span className="font-['Inter'] text-[16px] font-[600] leading-[24px] text-[#ffffff]">
                Software
              </span>
              <div className="flex w-full items-start gap-6 mobile:flex-col mobile:gap-4">
                <div className="flex grow shrink-0 basis-0 flex-col items-start gap-2">
                  <div className="flex items-center gap-1">
                    <RoundCode className="font-['Inter'] text-[18px] font-[500] leading-[20px] text-[#c4c9d1]" />
                    <span className="font-['Inter'] text-[14px] font-[500] leading-[20px] text-[#c4c9d1]">
                      Server Loader
                    </span>
                  </div>
                  <div className="flex h-10 w-full flex-none items-center justify-between rounded-[8px] border border-solid border-[#2a3038] bg-[#0b0d10] px-3 hover:border-[#3a414b]">
                    <div className="flex items-center gap-2">
                      <img
                        className="h-5 w-5 flex-none object-contain"
                        src="https://res.cloudinary.com/subframe/image/upload/v1793563275/uploads/47820/uuknirpioirlhs3yrltd.png"
                      />
                      <span className="font-['Inter'] text-[14px] font-[400] leading-[20px] text-[#ffffff]">
                        Vanilla
                      </span>
                    </div>
                    <svg
                      className="font-['Inter'] text-[16px] font-[400] leading-[24px] text-[#7a828e]"
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
                </div>
                <div className="flex grow shrink-0 basis-0 flex-col items-start gap-2">
                  <div className="flex items-center gap-1">
                    <Versions className="font-['Inter'] text-[18px] font-[500] leading-[20px] text-[#c4c9d1]" />
                    <span className="font-['Inter'] text-[14px] font-[500] leading-[20px] text-[#c4c9d1]">
                      Version
                    </span>
                  </div>
                  <div className="flex h-10 w-full flex-none items-center justify-between rounded-[8px] border border-solid border-[#2a3038] bg-[#0b0d10] px-3 hover:border-[#3a414b]">
                    <span className="font-['Inter'] text-[14px] font-[400] leading-[20px] text-[#ffffff]">
                      1.21.1
                    </span>
                    <svg
                      className="font-['Inter'] text-[16px] font-[400] leading-[24px] text-[#7a828e]"
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
                </div>
              </div>
            </div>
            <div className="flex w-full flex-col items-start gap-4 rounded-2xl border border-solid border-[#1f242b] bg-[#0e1114] px-6 py-5 mobile:px-4">
              <span className="font-['Inter'] text-[16px] font-[600] leading-[24px] text-[#ffffff]">
                Resources &amp; network
              </span>
              <div className="flex w-full items-start gap-6 mobile:flex-col mobile:gap-4">
                <div className="flex grow shrink-0 basis-0 flex-col items-start gap-2">
                  <div className="flex items-center gap-1">
                    <RoundSettingsEthernet className="font-['Inter'] text-[18px] font-[500] leading-[20px] text-[#c4c9d1]" />
                    <span className="font-['Inter'] text-[14px] font-[500] leading-[20px] text-[#c4c9d1]">
                      Port
                    </span>
                  </div>
                  <input
                    className="h-10 w-full flex-none rounded-[8px] border border-solid border-[#2a3038] bg-[#0b0d10] px-3 font-['Inter'] text-[14px] font-[400] leading-[20px] text-[#ffffff] outline-none placeholder:text-[#7a828e] focus-within:border-[#22c55e]"
                    placeholder="Port (eg. 25565)"
                    value="25565"
                    type="number"
                  />
                </div>
                <div className="flex grow shrink-0 basis-0 flex-col items-start gap-2">
                  <div className="flex items-center gap-1">
                    <RoundMemory className="font-['Inter'] text-[18px] font-[500] leading-[20px] text-[#c4c9d1]" />
                    <span className="font-['Inter'] text-[14px] font-[500] leading-[20px] text-[#c4c9d1]">
                      Max Memory
                    </span>
                  </div>
                  <input
                    className="h-10 w-full flex-none rounded-[8px] border border-solid border-[#2a3038] bg-[#0b0d10] px-3 font-['Inter'] text-[14px] font-[400] leading-[20px] text-[#ffffff] outline-none placeholder:text-[#7a828e] focus-within:border-[#22c55e]"
                    placeholder="4 GB"
                    value="4 GB"
                    type="text"
                  />
                </div>
              </div>
            </div>
            <div className="flex w-full items-center justify-between rounded-2xl border border-solid border-[#22c55e40] bg-[#0f1a14] px-6 py-4 gap-4 mobile:flex-col mobile:items-start mobile:px-4">
              <div className="flex items-center gap-2">
                <OutlineInfo className="font-['Inter'] text-[18px] font-[400] leading-[20px] text-[#7a828e]" />
                <span className="font-['Inter'] text-[14px] font-[400] leading-[20px] text-[#aeb4bd]">
                  Changes apply on restart
                </span>
              </div>
              <div className="flex items-center gap-2 mobile:w-full mobile:flex-none">
                <div className="flex h-9 items-center justify-center rounded-[8px] border border-solid border-[#2a3038] bg-[#1a1e23] px-4 hover:bg-[#232830] mobile:grow mobile:shrink-0 mobile:basis-0">
                  <span className="font-['Inter'] text-[14px] font-[500] leading-[20px] text-[#e5e7eb]">
                    Discard
                  </span>
                </div>
                <div className="flex h-9 items-center justify-center gap-1.5 rounded-[8px] bg-[#22c55e] px-4 hover:bg-[#16a34a] mobile:grow mobile:shrink-0 mobile:basis-0">
                  <RoundSave className="font-['Inter'] text-[18px] font-[400] leading-[20px] text-[#04130a]" />
                  <span className="font-['Inter'] text-[14px] font-[600] leading-[20px] text-[#04130a]">
                    Save changes
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

export default ServerRedesign;