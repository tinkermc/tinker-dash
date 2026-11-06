import type { PageProps } from "./types"; 


import { Switch } from "@/ui/components/Switch";
import RoundCheckCircleOutline from "@/ui/icons/RoundCheckCircleOutline";
import RoundCompass from "@/ui/icons/RoundCompass";
import RoundDownload from "@/ui/icons/RoundDownload";
import RoundFolderZip from "@/ui/icons/RoundFolderZip";
import RoundLayers from "@/ui/icons/RoundLayers";
import RoundList from "@/ui/icons/RoundList";
import RoundLogIn from "@/ui/icons/RoundLogIn";
import RoundPeople from "@/ui/icons/RoundPeople";
import RoundSaveAll from "@/ui/icons/RoundSaveAll";
import RoundServerX1 from "@/ui/icons/RoundServerX1";
import RoundSettingsEthernet from "@/ui/icons/RoundSettingsEthernet";
import RoundTerminal from "@/ui/icons/RoundTerminal";
import RoundTimer from "@/ui/icons/RoundTimer";
import RoundWifi from "@/ui/icons/RoundWifi";
import TinkerDash from "@/ui/icons/TinkerDash";
import TopSpeed20Filled from "@/ui/icons/TopSpeed20Filled";

function ConnectionRedesign({ onNavigate }: PageProps) {
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
            <div onClick={() => onNavigate("Connection")} className="flex items-center gap-1.5 rounded-t-xl border-x border-t border-solid border-[#22c55e] bg-[#123321] px-[7px] py-1 shadow-[0px_12px_32px_-4px_#22c55e] mobile:rounded-xl mobile:border-b grow justify-center cursor-pointer">
              <div className="flex h-6 w-6 flex-none items-center justify-center rounded-[9999px] border border-solid border-[#86efac] text-[12px] text-white">
                <RoundWifi className="font-['Inter'] text-[18px] font-[400] leading-[20px] text-[#e5e7eb]" />
              </div>
              <span className="font-['Inter'] text-[15px] font-[500] leading-[24px] text-[#ffffff]">
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
                Connection
              </h1>
              <div className="flex items-center gap-2 rounded-[9999px] border-2 border-solid border-[#22c55e] bg-[#0f2418] px-3 py-1">
                <div className="flex h-2 w-2 flex-none items-start rounded-[9999px] bg-[#22c55e]" />
                <span className="font-['Inter'] text-[15px] font-[500] leading-[20px] text-[#ffffff]">
                  Connected
                </span>
              </div>
            </div>
            <div className="flex w-full flex-col items-start gap-6">
              <div className="flex w-full flex-col items-start gap-4 rounded-xl border border-solid border-[#1f242b] bg-[#12151a] px-5 py-5 mobile:px-4">
                <div className="flex w-full items-center gap-3">
                  <div className="flex h-11 w-11 flex-none items-center justify-center rounded-[10px] border border-solid border-[#22c55e80] bg-[#0f2418]">
                    <RoundWifi className="font-['Inter'] text-[22px] font-[400] leading-[24px] text-[#86efac]" />
                  </div>
                  <div className="flex grow shrink-0 basis-0 flex-col items-start gap-0.5">
                    <span className="font-['Inter'] text-[18px] font-[700] leading-[26px] text-[#ffffff]">
                      Connected to Tinker Agent
                    </span>
                    <span className="font-['Inter'] text-[12px] font-[400] leading-[16px] text-[#7a828e]">
                      192.168.1.42:7122 · Connected as CanBeGold · Connected 3h
                      ago
                    </span>
                  </div>
                </div>
                <div className="flex w-full items-center justify-center gap-2 mobile:grid mobile:grid-cols-1">
                  <div className="flex w-24 flex-none flex-col items-start gap-1 self-stretch rounded-[8px] border border-solid border-[#1f242b] bg-[#0f1216] px-3 py-3">
                    <div className="flex items-center gap-0.5">
                      <TopSpeed20Filled className="font-['Inter'] text-[14px] font-[400] leading-[20px] text-[#7a828e]" />
                      <span className="font-['Inter'] text-[12px] font-[500] leading-[16px] text-[#7a828e]">
                        Latency
                      </span>
                    </div>
                    <span className="font-['Inter'] text-[14px] font-[600] leading-[20px] text-[#ffffff]">
                      18 ms
                    </span>
                  </div>
                  <div className="flex w-24 flex-none flex-col items-start gap-1 self-stretch rounded-[8px] border border-solid border-[#1f242b] bg-[#0f1216] px-3 py-3">
                    <div className="flex items-center gap-0.5">
                      <RoundTimer className="font-['Inter'] text-[14px] font-[400] leading-[20px] text-[#7a828e]" />
                      <span className="font-['Inter'] text-[12px] font-[500] leading-[16px] text-[#7a828e]">
                        Uptime
                      </span>
                    </div>
                    <span className="font-['Inter'] text-[14px] font-[600] leading-[20px] text-[#ffffff]">
                      3 hours
                    </span>
                  </div>
                  <div className="flex flex-col items-start gap-1 self-stretch rounded-[8px] border border-solid border-[#1f242b] bg-[#0f1216] px-3 py-3">
                    <div className="flex items-center gap-0.5">
                      <RoundSettingsEthernet className="font-['Inter'] text-[14px] font-[400] leading-[20px] text-[#7a828e]" />
                      <span className="font-['Inter'] text-[12px] font-[500] leading-[16px] text-[#7a828e]">
                        Connection
                      </span>
                    </div>
                    <span className="font-['Inter'] text-[14px] font-[600] leading-[20px] text-[#ffffff]">
                      Local network
                    </span>
                  </div>
                  <div className="flex flex-col items-start gap-1 self-stretch rounded-[8px] border border-solid border-[#1f242b] bg-[#0f1216] px-3 py-3">
                    <div className="flex items-center gap-0.5">
                      <RoundServerX1 className="font-['Inter'] text-[14px] font-[400] leading-[20px] text-[#7a828e]" />
                      <span className="font-['Inter'] text-[12px] font-[500] leading-[16px] text-[#7a828e]">
                        Agent Version
                      </span>
                    </div>
                    <span className="font-['Inter'] text-[14px] font-[600] leading-[20px] text-[#ffffff]">
                      v1.0.0
                    </span>
                  </div>
                  <div className="flex flex-col items-start gap-1 self-stretch rounded-[8px] border border-solid border-[#1f242b] bg-[#0f1216] px-3 py-3">
                    <div className="flex items-center gap-0.5">
                      <RoundFolderZip className="font-['Inter'] text-[14px] font-[400] leading-[20px] text-[#7a828e]" />
                      <span className="font-['Inter'] text-[12px] font-[500] leading-[16px] text-[#7a828e]">
                        Storage
                      </span>
                    </div>
                    <span className="font-['Inter'] text-[14px] font-[600] leading-[20px] text-[#ffffff]">
                      {" "}
                      3 drives · Using 1 TB
                    </span>
                  </div>
                  <div className="flex flex-col items-start gap-1 self-stretch rounded-[8px] border border-solid border-[#1f242b] bg-[#0f1216] px-3 py-3">
                    <div className="flex items-center gap-0.5">
                      <RoundServerX1 className="font-['Inter'] text-[14px] font-[400] leading-[20px] text-[#7a828e]" />
                      <span className="font-['Inter'] text-[12px] font-[500] leading-[16px] text-[#7a828e]">
                        Agent Version
                      </span>
                    </div>
                    <span className="font-['Inter'] text-[14px] font-[600] leading-[20px] text-[#ffffff]">
                      v1.0.0
                    </span>
                  </div>
                  <div className="flex flex-col items-start gap-1 self-stretch rounded-[8px] border border-solid border-[#1f242b] bg-[#0f1216] px-3 py-3">
                    <div className="flex items-center gap-0.5">
                      <RoundServerX1 className="font-['Inter'] text-[14px] font-[400] leading-[20px] text-[#7a828e]" />
                      <span className="font-['Inter'] text-[12px] font-[500] leading-[16px] text-[#7a828e]">
                        Agent Version
                      </span>
                    </div>
                    <span className="font-['Inter'] text-[14px] font-[600] leading-[20px] text-[#ffffff]">
                      v1.0.0
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex w-full flex-col items-start gap-3">
                <span className="font-['Inter'] text-[16px] font-[700] leading-[24px] text-[#ffffff]">
                  Tinker Agent
                </span>
                <div className="flex w-full flex-col items-start gap-5 rounded-xl border border-solid border-[#1f242b] bg-[#12151a] px-5 py-5 mobile:px-4">
                  <div className="flex w-full items-end gap-4 mobile:flex-col mobile:items-start">
                    <div className="flex grow shrink-0 basis-0 flex-col items-start gap-2 mobile:grow-0">
                      <div className="flex items-center gap-1.5">
                        <span className="font-['Inter'] text-[14px] font-[500] leading-[20px] text-[#c4c9d1]">
                          Tinker Agent Link
                        </span>
                        <span className="font-['Inter'] text-[13px] font-[500] leading-[20px] text-[#3b9eff] underline hover:text-[#7cbcff]">
                          learn more
                        </span>
                      </div>
                      <div className="flex w-full items-center gap-1">
                        <input
                          className="w-52 flex-none self-stretch rounded-l-[8px] border border-solid border-[#2a3038] bg-[#0b0d10] px-3 font-['Inter'] text-[14px] font-[400] leading-[21px] text-[#ffffff] outline-none placeholder:text-[#7a828e] focus-within:border-[#22c55e]"
                          placeholder="Address (eg. 192.168.1.xxx)"
                          value=""
                          type="text"
                        />
                        <input
                          className="h-10 w-24 flex-none rounded-r-[8px] border border-solid border-[#2a3038] bg-[#0b0d10] px-3 font-['Inter'] text-[14px] font-[400] leading-[21px] text-[#ffffff] outline-none placeholder:text-[#7a828e] focus-within:border-[#22c55e]"
                          placeholder="Port (eg. 7122)"
                          value=""
                          type="text"
                        />
                      </div>
                    </div>
                    <div className="flex w-56 flex-none flex-col items-start gap-2 mobile:w-full mobile:flex-none">
                      <span className="font-['Inter'] text-[14px] font-[500] leading-[20px] text-[#c4c9d1]">
                        Tinker Agent User
                      </span>
                      <div className="flex h-10 w-full flex-none items-center justify-between rounded-[8px] border border-solid border-[#2a3038] bg-[#0b0d10] px-3 hover:border-[#3a414b]">
                        <span className="font-['Inter'] text-[14px] font-[400] leading-[20px] text-[#ffffff]">
                          CanBeGold
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
                  <div className="flex h-px w-full flex-none items-start bg-[#1f242b]" />
                  <div className="flex w-full flex-wrap items-center gap-3">
                    <div className="flex items-center justify-center gap-1.5 rounded-[8px] border border-solid border-[#22c55e] bg-[#22c55e] px-4 py-2 hover:bg-[#16a34a]">
                      <RoundLogIn className="font-['Inter'] text-[16px] font-[400] leading-[20px] text-[#04130a]" />
                      <span className="font-['Inter'] text-[14px] font-[600] leading-[20px] text-[#04130a]">
                        Connect
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <RoundCheckCircleOutline className="font-['Inter'] text-[14px] font-[400] leading-[16px] text-[#86efac]" />
                      <span className="font-['Inter'] text-[12px] font-[500] leading-[16px] text-[#86efac]">
                        Connected successfully · 18 ms
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex w-full flex-col items-start gap-3">
                <span className="font-['Inter'] text-[16px] font-[700] leading-[24px] text-[#ffffff]">
                  Security &amp; network
                </span>
                <div className="flex w-full flex-col items-start rounded-xl border border-solid border-[#1f242b] bg-[#12151a]">
                  <div className="flex w-full items-center gap-4 px-5 py-4 mobile:px-4">
                    <div className="flex grow shrink-0 basis-0 flex-col items-start gap-0.5">
                      <span className="font-['Inter'] text-[15px] font-[600] leading-[22px] text-[#ffffff]">
                        Allow self-signed certificates
                      </span>
                      <span className="font-['Inter'] text-[12px] font-[400] leading-[16px] text-[#7a828e]">
                        If connection is failing, try enabling or disabling.
                      </span>
                    </div>
                    <Switch
                      checked={false}
                      onCheckedChange={() => {}}
                    />
                  </div>
                  <div className="flex h-px w-full flex-none items-start bg-[#1f242b]" />
                  <div className="flex w-full items-center gap-4 px-5 py-4 mobile:px-4">
                    <div className="flex grow shrink-0 basis-0 flex-col items-start gap-0.5">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="font-['Inter'] text-[15px] font-[600] leading-[22px] text-[#ffffff]">
                          Use Connection Tunnel (no Tailscale, etc)
                        </span>
                        <div className="flex items-center rounded-[9999px] border border-solid border-[#a855f7] bg-[#2e1450] px-1.5 py-0.5">
                          <span className="font-['Inter'] text-[11px] font-[600] leading-[14px] text-[#e9d5ff]">
                            Plus
                          </span>
                        </div>
                      </div>
                      <span className="font-['Inter'] text-[12px] font-[400] leading-[16px] text-[#7a828e]">
                        Makes using Tinker outside your home network seamless.
                        This feature requires Plus.
                      </span>
                    </div>
                    <div className="flex items-center gap-3 mobile:flex-col mobile:items-end mobile:gap-2">
                      <div className="flex items-center rounded-[6px] px-2 py-1 hover:bg-[#2e1450]">
                        <span className="font-['Inter'] text-[13px] font-[600] leading-[18px] text-[#c084fc]">
                          Get Plus
                        </span>
                      </div>
                      <Switch
                        checked={false}
                        disabled={true}
                        onCheckedChange={() => {}}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex w-full flex-col items-start gap-3">
                <span className="font-['Inter'] text-[16px] font-[700] leading-[24px] text-[#ffffff]">
                  Startup
                </span>
                <div className="flex w-full flex-col items-start rounded-xl border border-solid border-[#1f242b] bg-[#12151a]">
                  <div className="flex w-full items-center gap-4 px-5 py-4 mobile:px-4">
                    <div className="flex grow shrink-0 basis-0 flex-col items-start gap-0.5">
                      <span className="font-['Inter'] text-[15px] font-[600] leading-[22px] text-[#ffffff]">
                        Auto Connect
                      </span>
                      <span className="font-['Inter'] text-[12px] font-[400] leading-[16px] text-[#7a828e]">
                        When Tinker opens, auto connect with my saved
                        credentials.
                      </span>
                    </div>
                    <Switch
                      checked={true}
                      onCheckedChange={() => {}}
                    />
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

export default ConnectionRedesign;