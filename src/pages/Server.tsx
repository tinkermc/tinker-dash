import type { PageProps } from "./types";
import { DropdownMenu } from "@/ui/components/DropdownMenu";
import { Switch } from "@/ui/components/Switch";
import OutlineLabel from "@/ui/icons/OutlineLabel";
import RoundAdd from "@/ui/icons/RoundAdd";
import RoundCode from "@/ui/icons/RoundCode";
import RoundCompass from "@/ui/icons/RoundCompass";
import RoundDownload from "@/ui/icons/RoundDownload";
import RoundLayers from "@/ui/icons/RoundLayers";
import RoundList from "@/ui/icons/RoundList";
import RoundMemory from "@/ui/icons/RoundMemory";
import RoundModeEditOutline from "@/ui/icons/RoundModeEditOutline";
import RoundPeople from "@/ui/icons/RoundPeople";
import RoundPlayArrow from "@/ui/icons/RoundPlayArrow";
import RoundPushPin from "@/ui/icons/RoundPushPin";
import RoundRefresh from "@/ui/icons/RoundRefresh";
import RoundSaveAll from "@/ui/icons/RoundSaveAll";
import RoundServerX1 from "@/ui/icons/RoundServerX1";
import RoundSettingsEthernet from "@/ui/icons/RoundSettingsEthernet";
import RoundShortText from "@/ui/icons/RoundShortText";
import RoundStop from "@/ui/icons/RoundStop";
import RoundTerminal from "@/ui/icons/RoundTerminal";
import RoundTroubleshoot from "@/ui/icons/RoundTroubleshoot";
import RoundWifi from "@/ui/icons/RoundWifi";
import Sort from "@/ui/icons/Sort";
import TinkerDash from "@/ui/icons/TinkerDash";
import Versions from "@/ui/icons/Versions";
import * as SubframeCore from "@subframe/core";

function Server({ onNavigate }: PageProps) {
  return (
    <div
      className="flex h-screen w-full overflow-hidden flex-col items-start bg-[#0b0d10] font-['Inter']"
    >
      <header
        className="flex w-full items-center gap-2 border-b border-solid border-[#1a1e23] bg-[#101317] px-6 py-4 mobile:px-4"
      >
        <div className="flex items-center gap-3">
          <TinkerDash
            className="font-['Inter'] text-[28px] font-[400] leading-[42px] text-[#22c55e]"
          />
          <span
            className="font-['Inter'] text-[26px] font-[700] leading-[32px] text-[#ffffff]"
          >
            Tinker Dash
          </span>
        </div>
        <div
          className="flex h-7 w-px flex-none items-start bg-[#232830]"
        />
        <span
          className="font-['Inter'] text-[17px] font-[400] leading-[24px] text-[#e5e7eb] mobile:hidden"
        >
          Minecraft’s most intuitive server manager.
        </span>
        <div
          className="flex grow shrink-0 basis-0 flex-col items-start gap-2 px-2 py-2"
        />
        <div
          className="flex h-[33px] w-[33px] flex-none items-center justify-center gap-2 rounded-[9999px] border-2 border-dashed border-[#96a2b040] bg-[#1a1e23] px-3 py-1 opacity-50"
        >
          <RoundDownload
            className="font-['Inter'] text-[18px] font-[400] leading-[20px] text-[#e5e7eb]"
          />
        </div>
        <div
          className="flex items-center justify-end gap-2 rounded-l-[9999px] border-2 border-solid border-[#96a2b040] bg-[#1a1e23] px-3 py-1"
        >
          <div
            className="flex h-2 w-2 flex-none items-start rounded-[9999px] bg-[#96a2b0]"
          />
          <span
            className="font-['Inter'] text-[15px] font-[500] leading-[20px] text-[#ffffff]"
          >
            No servers running
          </span>
        </div>
        <div
          className="flex items-center justify-end gap-0.5 rounded-r-[9999px] border-2 border-solid border-[#96a2b040] bg-[#1a1e23] pl-3 pr-1.5 py-1"
        >
          <span
            className="font-['Inter'] text-[15px] font-[500] leading-[20px] text-[#ffffff]"
          >
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
      <main
        className="flex w-full flex-col items-center justify-center px-6 pt-8 pb-6 mobile:px-4 mobile:pt-6"
      >
        <div
          className="flex w-full flex-col items-center"
        >
          <nav
            className="flex w-full items-end justify-center gap-1.5 px-6 mobile:flex-wrap mobile:px-0 mobile:pb-2"
          >
            <div
              onClick={() => onNavigate("Connection")}
              className="flex grow cursor-pointer items-center justify-center gap-1.5 rounded-t-xl bg-[#0f2418] px-[7px] py-1 hover:bg-[#123321] mobile:rounded-xl"
            >
              <div
                className="flex h-6 w-6 flex-none items-center justify-center rounded-[9999px] border border-solid border-[#4b5563] text-[12px] text-[#e5e7eb]"
              >
                <RoundWifi
                  className="font-['Inter'] text-[18px] font-[400] leading-[20px] text-[#e5e7eb]"
                />
              </div>
              <span
                className="font-['Inter'] text-[15px] font-[400] leading-[24px] text-[#e5e7eb]"
              >
                Connection
              </span>
            </div>
            <div
              onClick={() => onNavigate("Server")}
              className="flex grow cursor-pointer items-center justify-center gap-1.5 rounded-t-xl border-x border-t border-solid border-[#22c55e] bg-[#123321] px-[7px] py-1 mobile:rounded-xl mobile:border-b"
            >
              <div
                className="flex h-6 w-6 flex-none items-center justify-center rounded-[9999px] border border-solid border-[#86efac] text-[12px] text-white"
              >
                <RoundServerX1
                  className="font-['Inter'] text-[18px] font-[400] leading-[20px] text-[#e5e7eb]"
                />
              </div>
              <span
                className="font-['Inter'] text-[15px] font-[500] leading-[24px] text-[#ffffff]"
              >
                Server
              </span>
            </div>
            <div
              onClick={() => onNavigate("Mods")}
              className="flex grow cursor-pointer items-center justify-center gap-1.5 rounded-t-xl bg-[#0f2418] px-[7px] py-1 hover:bg-[#123321] mobile:rounded-xl"
            >
              <div
                className="flex h-6 w-6 flex-none items-center justify-center rounded-[9999px] border border-solid border-[#4b5563] text-[12px] text-[#e5e7eb]"
              >
                <RoundCompass
                  className="font-['Inter'] text-[16px] font-[400] leading-[20px] text-[#e5e7eb]"
                />
              </div>
              <span
                className="font-['Inter'] text-[15px] font-[400] leading-[24px] text-[#e5e7eb]"
              >
                Mods
              </span>
              <div
                className="flex h-5 min-w-[20px] items-center justify-center rounded-[9999px] bg-[#22c55e] px-1.5"
              >
                <span
                  className="font-['Inter'] text-[12px] font-[700] leading-[16px] text-[#04130a]"
                >
                  0
                </span>
              </div>
            </div>
            <div
              onClick={() => onNavigate("Explorer")}
              className="flex grow cursor-pointer items-center justify-center gap-1.5 rounded-t-xl bg-[#0f2418] px-[7px] py-1 hover:bg-[#123321] mobile:rounded-xl"
            >
              <div
                className="flex h-6 w-6 flex-none items-center justify-center rounded-[9999px] border border-solid border-[#4b5563] text-[12px] text-[#e5e7eb]"
              >
                <RoundList
                  className="font-['Inter'] text-[18px] font-[400] leading-[20px] text-[#e5e7eb]"
                />
              </div>
              <span
                className="font-['Inter'] text-[15px] font-[400] leading-[24px] text-[#e5e7eb]"
              >
                Explorer
              </span>
            </div>
            <div
              onClick={() => onNavigate("World")}
              className="flex grow cursor-pointer items-center justify-center gap-1.5 rounded-t-xl bg-[#0f2418] px-[7px] py-1 hover:bg-[#123321] mobile:rounded-xl"
            >
              <div
                className="flex h-6 w-6 flex-none items-center justify-center rounded-[9999px] border border-solid border-[#4b5563] text-[12px] text-[#e5e7eb]"
              >
                <RoundLayers
                  className="font-['Inter'] text-[18px] font-[400] leading-[20px] text-[#e5e7eb]"
                />
              </div>
              <span
                className="font-['Inter'] text-[15px] font-[400] leading-[24px] text-[#e5e7eb]"
              >
                World
              </span>
            </div>
            <div
              onClick={() => onNavigate("Players")}
              className="flex grow cursor-pointer items-center justify-center gap-1.5 rounded-t-xl bg-[#0f2418] px-[7px] py-1 hover:bg-[#123321] mobile:rounded-xl"
            >
              <div
                className="flex h-6 w-6 flex-none items-center justify-center rounded-[9999px] border border-solid border-[#4b5563] text-[12px] text-[#e5e7eb]"
              >
                <RoundPeople
                  className="font-['Inter'] text-[16px] font-[400] leading-[20px] text-[#e5e7eb]"
                />
              </div>
              <span
                className="font-['Inter'] text-[15px] font-[400] leading-[24px] text-[#e5e7eb]"
              >
                Players
              </span>
            </div>
            <div
              onClick={() => onNavigate("Console")}
              className="flex grow cursor-pointer items-center justify-center gap-1.5 rounded-t-xl bg-[#0f2418] px-[7px] py-1 hover:bg-[#123321] mobile:rounded-xl"
            >
              <div
                className="flex h-6 w-6 flex-none items-center justify-center rounded-[9999px] border border-solid border-[#4b5563] text-[12px] text-[#e5e7eb]"
              >
                <RoundTerminal
                  className="font-['Inter'] text-[16px] font-[400] leading-[20px] text-[#e5e7eb]"
                />
              </div>
              <span
                className="font-['Inter'] text-[15px] font-[400] leading-[24px] text-[#e5e7eb]"
              >
                Console
              </span>
            </div>
            <div
              onClick={() => onNavigate("Backups")}
              className="flex grow cursor-pointer items-center justify-center gap-1.5 rounded-t-xl bg-[#0f2418] px-[7px] py-1 hover:bg-[#123321] mobile:rounded-xl"
            >
              <div
                className="flex h-6 w-6 flex-none items-center justify-center rounded-[9999px] border border-solid border-[#4b5563] text-[12px] text-[#e5e7eb]"
              >
                <RoundSaveAll
                  className="font-['Inter'] text-[16px] font-[400] leading-[20px] text-[#e5e7eb]"
                />
              </div>
              <span
                className="font-['Inter'] text-[15px] font-[400] leading-[24px] text-[#e5e7eb]"
              >
                Backups
              </span>
            </div>
            <div
              onClick={() => onNavigate("Tinker")}
              className="flex grow cursor-pointer items-center justify-center gap-1.5 rounded-t-xl bg-[#0f2418] px-[7px] py-1 hover:bg-[#123321]"
              data-layer-name="TinkerTabBtn"
            >
              <div
                className="flex h-6 w-6 flex-none items-center justify-center rounded-[9999px] border border-solid border-[#4b5563] text-[12px] text-[#e5e7eb]"
              >
                <TinkerDash
                  className="font-['Inter'] text-[14px] font-[400] leading-[20px] text-[#e5e7eb]"
                />
              </div>
              <span
                className="font-['Inter'] text-[15px] font-[400] leading-[24px] text-[#e5e7eb]"
              >
                Tinker
              </span>
            </div>
          </nav>
          <section
            className="flex h-[550px] w-full flex-none flex-col items-start gap-6 rounded-3xl border border-solid border-[#1f242b] bg-[#111418] px-8 py-6 mobile:px-4"
          >
            <div
              className="flex w-full items-center justify-between gap-4"
            >
              <h1
                className="font-['Inter'] text-[28px] font-[700] leading-[36px] text-[#ffffff]"
              >
                Server
              </h1>
            </div>
            <div
              className="flex w-full items-start gap-8 mobile:flex-col mobile:gap-6"
              data-layer-name="Server Manager"
            >
              <aside
                className="flex h-[464px] flex-col items-start gap-3 border-r border-solid border-[#232830] pr-6 overflow-auto mobile:h-auto mobile:w-full mobile:border-none mobile:px-0 mobile:py-0"
                data-layer-name="Server List"
              >
                <div
                  className="flex w-full items-center justify-between"
                  data-layer-name="Header"
                >
                  <span
                    className="font-['Inter'] text-[14px] font-[600] leading-[20px] text-[#c4c9d1]"
                  >
                    Servers
                  </span>
                  <div
                    className="flex items-center gap-[5px]"
                  >
                    <Sort
                      className="font-['Inter'] text-[14px] font-[400] leading-[20px] text-[#c4c9d1]"
                    />
                    <div
                      className="flex items-center rounded-[8px] border border-solid border-[#22c55e80] bg-[#123321] pl-[3px] pr-2 hover:border-[#22C55E]"
                      data-layer-name="New"
                    >
                      <span
                        className="font-['Inter'] text-[14px] font-[400] leading-[20px] text-[#ffffff]"
                      >
                         New
                      </span>
                      <RoundAdd
                        className="font-['Inter'] text-[16px] font-[400] leading-[20px] text-[#ffffff]"
                      />
                    </div>
                  </div>
                </div>
                <div
                  className="flex w-full items-center gap-2 rounded-[8px] bg-[#1a1e23]"
                  data-layer-name="Server"
                >
                  <div
                    className="flex w-px flex-none flex-col items-center justify-center gap-2 self-stretch rounded-l-[8px] bg-[#22c55e] px-1"
                    data-layer-name="Status"
                  />
                  <div
                    className="flex grow shrink-0 basis-0 flex-col items-start justify-center py-2"
                    data-layer-name="Details"
                  >
                    <div
                      className="flex items-center gap-1"
                    >
                      <img
                        className="h-5 w-5 flex-none object-cover"
                        src="https://res.cloudinary.com/subframe/image/upload/v1793563275/uploads/47820/uuknirpioirlhs3yrltd.png"
                      />
                      <span
                        className="font-['Inter'] text-[14px] font-[500] leading-[20px] text-[#ffffff]"
                        data-layer-name="Server Label"
                      >
                        Vanilla SMP
                      </span>
                    </div>
                    <span
                      className="font-['Inter'] text-[12px] font-[400] leading-[16px] text-[#7a828e]"
                    >
                      3 hours uptime
                    </span>
                    <span
                      className="font-['Inter'] text-[12px] font-[400] leading-[16px] text-[#7a828e]"
                    >
                      1/20 players
                    </span>
                  </div>
                  <div
                    className="flex flex-col items-end gap-1 self-stretch px-1 py-1"
                    data-layer-name="Actions"
                  >
                    <RoundPushPin
                      className="font-['Inter'] text-[16px] font-[400] leading-[20px] text-[#f7b900]"
                    />
                    <RoundModeEditOutline
                      className="font-['Inter'] text-[16px] font-[400] leading-[20px] text-[#c4c9d1]"
                    />
                  </div>
                </div>
                <div
                  className="flex w-full items-center gap-2 rounded-[8px] bg-[#1a1e23]"
                  data-layer-name="Server"
                >
                  <div
                    className="flex w-px flex-none flex-col items-center justify-center gap-2 self-stretch rounded-l-[8px] bg-[#22c55e] px-1"
                    data-layer-name="Status"
                  />
                  <div
                    className="flex grow shrink-0 basis-0 flex-col items-start justify-center py-2"
                    data-layer-name="Details"
                  >
                    <div
                      className="flex items-center gap-1"
                    >
                      <img
                        className="h-5 w-5 flex-none object-cover"
                        src="https://res.cloudinary.com/subframe/image/upload/v1793563275/uploads/47820/rytrk7wt47l4ydrbqt2c.png"
                      />
                      <span
                        className="font-['Inter'] text-[14px] font-[500] leading-[20px] text-[#ffffff]"
                        data-layer-name="Server Label"
                      >
                        NeoForge SMP
                      </span>
                    </div>
                    <span
                      className="font-['Inter'] text-[12px] font-[400] leading-[16px] text-[#7a828e]"
                    >
                      3 hours uptime
                    </span>
                    <span
                      className="font-['Inter'] text-[12px] font-[400] leading-[16px] text-[#7a828e]"
                    >
                      1/20 players
                    </span>
                  </div>
                  <div
                    className="flex flex-col items-end gap-1 self-stretch px-1 py-1"
                    data-layer-name="Actions"
                  >
                    <RoundPushPin
                      className="font-['Inter'] text-[16px] font-[400] leading-[20px] text-[#c4c9d1]"
                    />
                    <RoundModeEditOutline
                      className="font-['Inter'] text-[16px] font-[400] leading-[20px] text-[#c4c9d1]"
                    />
                  </div>
                </div>
                <div
                  className="flex w-full items-center gap-2 rounded-[8px] bg-[#1a1e23]"
                  data-layer-name="Server"
                >
                  <div
                    className="flex w-px flex-none flex-col items-center justify-center gap-2 self-stretch rounded-l-[8px] bg-[#ef4444] px-1"
                    data-layer-name="Status"
                  />
                  <div
                    className="flex grow shrink-0 basis-0 flex-col items-start justify-center py-2"
                    data-layer-name="Details"
                  >
                    <div
                      className="flex items-center gap-1"
                    >
                      <img
                        className="h-5 w-5 flex-none object-cover"
                        src="https://res.cloudinary.com/subframe/image/upload/v1793563275/uploads/47820/ghbm47jlna4vydnk3ncb.png"
                      />
                      <span
                        className="font-['Inter'] text-[14px] font-[500] leading-[20px] text-[#ffffff]"
                        data-layer-name="Server Label"
                      >
                        Forge SMP
                      </span>
                    </div>
                    <span
                      className="font-['Inter'] text-[12px] font-[400] leading-[16px] text-[#7a828e]"
                    >
                      Crashed 1 minute ago!
                    </span>
                    <div
                      className="flex items-center gap-1 rounded-[8px] border border-solid border-[#2a3038] bg-[#1a1e23] px-3 py-1"
                    >
                      <span
                        className="font-['Inter'] text-[14px] font-[400] leading-[20px] text-[#aeb4bd]"
                      >
                        Troubleshoot
                      </span>
                      <RoundTroubleshoot
                        className="font-['Inter'] text-[16px] font-[400] leading-[20px] text-[#aeb4bd]"
                      />
                    </div>
                  </div>
                  <div
                    className="flex flex-col items-end gap-1 self-stretch px-1 py-1"
                    data-layer-name="Actions"
                  >
                    <RoundPushPin
                      className="font-['Inter'] text-[16px] font-[400] leading-[20px] text-[#c4c9d1]"
                    />
                    <RoundModeEditOutline
                      className="font-['Inter'] text-[16px] font-[400] leading-[20px] text-[#c4c9d1]"
                    />
                  </div>
                </div>
                <div
                  className="flex w-full items-center gap-2 rounded-[8px] bg-[#1a1e23]"
                  data-layer-name="Server"
                >
                  <div
                    className="flex w-px flex-none flex-col items-center justify-center gap-2 self-stretch rounded-l-[8px] bg-[#f7b900] px-1"
                    data-layer-name="Status"
                  />
                  <div
                    className="flex grow shrink-0 basis-0 flex-col items-start justify-center py-2"
                    data-layer-name="Details"
                  >
                    <div
                      className="flex items-center gap-1"
                    >
                      <img
                        className="h-5 w-5 flex-none object-cover"
                        src="https://res.cloudinary.com/subframe/image/upload/v1793563275/uploads/47820/zpvgeg4ie3e4wd9uxg3k.png"
                      />
                      <span
                        className="font-['Inter'] text-[14px] font-[500] leading-[20px] text-[#ffffff]"
                        data-layer-name="Server Label"
                      >
                        Quilt SMP
                      </span>
                    </div>
                    <span
                      className="font-['Inter'] text-[12px] font-[400] leading-[16px] text-[#7a828e]"
                    >
                      Starting...
                    </span>
                    <span
                      className="font-['Inter'] text-[12px] font-[400] leading-[16px] text-[#7a828e]"
                    >
                      ~30 seconds until ready
                    </span>
                  </div>
                  <div
                    className="flex flex-col items-end gap-1 self-stretch px-1 py-1"
                    data-layer-name="Actions"
                  >
                    <RoundPushPin
                      className="font-['Inter'] text-[16px] font-[400] leading-[20px] text-[#c4c9d1]"
                    />
                    <RoundModeEditOutline
                      className="font-['Inter'] text-[16px] font-[400] leading-[20px] text-[#c4c9d1]"
                    />
                  </div>
                </div>
                <div
                  className="flex w-full items-center gap-2 rounded-[8px] bg-[#1a1e23]"
                  data-layer-name="Server"
                >
                  <div
                    className="flex w-px flex-none flex-col items-center justify-center gap-2 self-stretch rounded-l-[8px] bg-[#96a2b0] px-1"
                    data-layer-name="Status"
                  />
                  <div
                    className="flex grow shrink-0 basis-0 flex-col items-start justify-center py-2"
                    data-layer-name="Details"
                  >
                    <div
                      className="flex items-center gap-1"
                    >
                      <img
                        className="h-5 w-5 flex-none object-cover"
                        src="https://res.cloudinary.com/subframe/image/upload/v1793563275/uploads/47820/xzhojpaf4eyhycwr2yhl.png"
                      />
                      <span
                        className="font-['Inter'] text-[14px] font-[500] leading-[20px] text-[#ffffff]"
                        data-layer-name="Server Label"
                      >
                        Fabric SMP
                      </span>
                    </div>
                    <span
                      className="font-['Inter'] text-[12px] font-[400] leading-[16px] text-[#7a828e]"
                    >
                      Last online 5 days ago
                    </span>
                    <div
                      className="flex items-center gap-1 rounded-[8px] border border-solid border-[#22c55e80] bg-[#123321] px-3 py-1"
                    >
                      <span
                        className="font-['Inter'] text-[14px] font-[400] leading-[20px] text-[#ffffff]"
                      >
                        Start
                      </span>
                      <RoundPlayArrow
                        className="font-['Inter'] text-[16px] font-[400] leading-[20px] text-[#ffffff]"
                      />
                    </div>
                  </div>
                  <div
                    className="flex flex-col items-end gap-1 self-stretch px-1 py-1"
                    data-layer-name="Actions"
                  >
                    <RoundPushPin
                      className="font-['Inter'] text-[16px] font-[400] leading-[20px] text-[#c4c9d1]"
                    />
                    <RoundModeEditOutline
                      className="font-['Inter'] text-[16px] font-[400] leading-[20px] text-[#c4c9d1]"
                    />
                  </div>
                </div>
              </aside>
              <div
                className="flex h-[464px] grow shrink-0 basis-0 flex-col items-start gap-5 overflow-auto"
                data-layer-name="Server Details"
              >
                <div
                  className="flex w-full items-center gap-1"
                >
                  <img
                    className="h-16 w-16 flex-none object-cover"
                    src="https://res.cloudinary.com/subframe/image/upload/v1793563275/uploads/47820/uuknirpioirlhs3yrltd.png"
                  />
                  <div
                    className="flex grow shrink-0 basis-0 flex-col items-start gap-1"
                  >
                    <div
                      className="flex w-full items-center justify-between gap-4"
                    >
                      <span
                        className="font-['Inter'] text-[20px] font-[700] leading-[28px] text-[#ffffff]"
                      >
                        Vanilla SMP
                      </span>
                      <div
                        className="flex items-center gap-2 rounded-[9999px] border-2 border-solid border-[#22c55e] bg-[#0f2418] px-3 py-1"
                      >
                        <div
                          className="flex h-2 w-2 flex-none items-start rounded-[9999px] bg-[#22c55e]"
                        />
                        <span
                          className="font-['Inter'] text-[15px] font-[500] leading-[20px] text-[#ffffff]"
                        >
                          Running
                        </span>
                      </div>
                    </div>
                    <span
                      className="font-['Inter'] text-[12px] font-[400] leading-[16px] text-[#7a828e]"
                    >
                      Vanilla 1.21.1 · Port 25565 · 1/20 players · Uptime of 3h.
                    </span>
                  </div>
                </div>
                <div
                  className="flex flex-wrap items-center gap-2"
                  data-layer-name="Server Actions"
                >
                  <div
                    className="flex items-center gap-1 rounded-[8px] border border-solid border-[#22c55e80] bg-[#123321] px-3 py-1 opacity-50"
                  >
                    <span
                      className="font-['Inter'] text-[14px] font-[400] leading-[20px] text-[#ffffff]"
                    >
                      Start
                    </span>
                    <RoundPlayArrow
                      className="font-['Inter'] text-[16px] font-[400] leading-[20px] text-[#ffffff]"
                    />
                  </div>
                  <div
                    className="flex items-center gap-1 rounded-[8px] border border-solid border-[#2a3038] bg-[#1a1e23] px-3 py-1"
                  >
                    <span
                      className="font-['Inter'] text-[14px] font-[400] leading-[20px] text-[#aeb4bd]"
                    >
                      Restart
                    </span>
                    <RoundRefresh
                      className="font-['Inter'] text-[16px] font-[400] leading-[20px] text-[#aeb4bd]"
                    />
                  </div>
                  <div
                    className="flex items-center gap-1 rounded-[8px] border border-solid border-[#ef4444] bg-[#2a1215] px-3 py-1"
                  >
                    <span
                      className="font-['Inter'] text-[14px] font-[400] leading-[20px] text-[#ffffff]"
                    >
                      Stop
                    </span>
                    <RoundStop
                      className="font-['Inter'] text-[16px] font-[400] leading-[20px] text-[#ffffff]"
                    />
                  </div>
                </div>
                <div
                  className="flex h-px w-full flex-none items-start bg-[#232830]"
                />
                <div
                  className="flex w-full max-w-[560px] flex-col items-start gap-5"
                  data-layer-name="Server Settings Form"
                >
                  <div
                    className="flex items-start gap-5"
                  >
                    <div
                      className="flex w-[175px] flex-none flex-col items-start gap-2"
                    >
                      <div
                        className="flex items-center gap-0.5"
                      >
                        <OutlineLabel
                          className="font-['Inter'] text-[20px] font-[500] leading-[20px] text-[#c4c9d1]"
                        />
                        <span
                          className="font-['Inter'] text-[14px] font-[500] leading-[20px] text-[#c4c9d1]"
                        >
                          Tinker Server Label
                        </span>
                      </div>
                      <input
                        className="w-full rounded-[8px] border border-solid border-[#2a3038] bg-[#0b0d10] px-3 font-['Inter'] text-[14px] font-[400] leading-[21px] text-[#ffffff] outline-none placeholder:text-[#7a828e] focus-within:border-[#22c55e]"
                        placeholder="Vanilla SMP"
                        value=""
                        type="text"
                      />
                    </div>
                    <div
                      className="flex w-[365px] flex-none flex-col items-start gap-2"
                    >
                      <div
                        className="flex items-center gap-0.5"
                      >
                        <RoundShortText
                          className="font-['Inter'] text-[20px] font-[500] leading-[20px] text-[#c4c9d1]"
                        />
                        <span
                          className="font-['Inter'] text-[14px] font-[500] leading-[20px] text-[#c4c9d1]"
                        >
                          Server Description (MOTD)
                        </span>
                      </div>
                      <textarea
                        className="h-[45px] w-full flex-none rounded-[8px] border border-solid border-[#2a3038] bg-[#0b0d10] px-3 font-['Inter'] text-[14px] font-[400] leading-[21px] text-[#ffffff] outline-none placeholder:text-[#7a828e] focus-within:border-[#22c55e]"
                        placeholder={
                          "Vanilla SMP!\nScheduled maintenance at 5 EST"
                        }
                        value=""
                      />
                    </div>
                  </div>
                  <div
                    className="flex w-full items-start gap-6 mobile:flex-col"
                  >
                    <div
                      className="flex grow shrink-0 basis-0 flex-col items-start gap-2"
                    >
                      <div
                        className="flex items-center gap-0.5"
                      >
                        <RoundCode
                          className="font-['Inter'] text-[20px] font-[500] leading-[20px] text-[#c4c9d1]"
                        />
                        <span
                          className="font-['Inter'] text-[14px] font-[500] leading-[20px] text-[#c4c9d1]"
                        >
                          Server Loader
                        </span>
                      </div>
                      <SubframeCore.DropdownMenu.Root>
                        <SubframeCore.DropdownMenu.Trigger asChild={true}>
                          <div
                            className="flex h-10 w-full flex-none items-center justify-between rounded-[8px] border border-solid border-[#2a3038] bg-[#0b0d10] px-3 hover:border-[#3a414b]"
                          >
                            <div
                              className="flex items-center gap-1"
                            >
                              <img
                                className="h-5 w-5 flex-none object-contain"
                                src="https://res.cloudinary.com/subframe/image/upload/v1793563275/uploads/47820/uuknirpioirlhs3yrltd.png"
                              />
                              <span
                                className="font-['Inter'] text-[14px] font-[400] leading-[20px] text-[#ffffff]"
                              >
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
                        </SubframeCore.DropdownMenu.Trigger>
                        <SubframeCore.DropdownMenu.Portal>
                          <SubframeCore.DropdownMenu.Content
                            side="bottom"
                            align="start"
                            sideOffset={4}
                            asChild={true}
                          >
                            <DropdownMenu
                              className="h-auto w-auto flex-none"
                            >
                              <div
                                className="flex items-center"
                              >
                                <img
                                  className="h-5 w-5 flex-none object-cover"
                                  src="https://res.cloudinary.com/subframe/image/upload/v1793563275/uploads/47820/uuknirpioirlhs3yrltd.png"
                                />
                                <div
                                  className="flex items-center"
                                >
                                  <DropdownMenu.DropdownItem
                                    className="h-auto grow shrink-0 basis-0"
                                  >
                                    Vanilla
                                  </DropdownMenu.DropdownItem>
                                </div>
                              </div>
                              <div
                                className="flex h-px w-full flex-none flex-col items-center gap-2 bg-[#2a3038]"
                                data-layer-name="Divider"
                              />
                              <div
                                className="flex items-center"
                              >
                                <img
                                  className="h-5 w-5 flex-none object-cover"
                                  src="https://res.cloudinary.com/subframe/image/upload/v1793563275/uploads/47820/rytrk7wt47l4ydrbqt2c.png"
                                />
                                <div
                                  className="flex items-center"
                                >
                                  <DropdownMenu.DropdownItem
                                    className="h-auto grow shrink-0 basis-0"
                                  >
                                    NeoForge
                                  </DropdownMenu.DropdownItem>
                                </div>
                              </div>
                              <div
                                className="flex h-px w-full flex-none flex-col items-center gap-2 bg-[#2a3038]"
                                data-layer-name="Divider"
                              />
                              <div
                                className="flex items-center"
                              >
                                <img
                                  className="h-5 w-5 flex-none object-cover"
                                  src="https://res.cloudinary.com/subframe/image/upload/v1793563275/uploads/47820/ghbm47jlna4vydnk3ncb.png"
                                />
                                <div
                                  className="flex items-center"
                                >
                                  <DropdownMenu.DropdownItem
                                    className="h-auto grow shrink-0 basis-0"
                                  >
                                    Forge
                                  </DropdownMenu.DropdownItem>
                                </div>
                              </div>
                              <div
                                className="flex h-px w-full flex-none flex-col items-center gap-2 bg-[#2a3038]"
                                data-layer-name="Divider"
                              />
                              <div
                                className="flex items-center"
                              >
                                <img
                                  className="h-5 w-5 flex-none object-cover"
                                  src="https://res.cloudinary.com/subframe/image/upload/v1793563275/uploads/47820/zpvgeg4ie3e4wd9uxg3k.png"
                                />
                                <div
                                  className="flex items-center"
                                >
                                  <DropdownMenu.DropdownItem
                                    className="h-auto grow shrink-0 basis-0"
                                  >
                                    Quilt
                                  </DropdownMenu.DropdownItem>
                                </div>
                              </div>
                              <div
                                className="flex h-px w-full flex-none flex-col items-center gap-2 bg-[#2a3038]"
                                data-layer-name="Divider"
                              />
                              <div
                                className="flex items-center"
                              >
                                <img
                                  className="h-5 w-5 flex-none object-cover"
                                  src="https://res.cloudinary.com/subframe/image/upload/v1793563275/uploads/47820/xzhojpaf4eyhycwr2yhl.png"
                                />
                                <div
                                  className="flex items-center"
                                >
                                  <DropdownMenu.DropdownItem
                                    className="h-auto grow shrink-0 basis-0"
                                  >
                                    Fabric
                                  </DropdownMenu.DropdownItem>
                                </div>
                              </div>
                            </DropdownMenu>
                          </SubframeCore.DropdownMenu.Content>
                        </SubframeCore.DropdownMenu.Portal>
                      </SubframeCore.DropdownMenu.Root>
                    </div>
                    <div
                      className="flex grow shrink-0 basis-0 flex-col items-start gap-2"
                    >
                      <div
                        className="flex items-start gap-0.5"
                      >
                        <Versions
                          className="font-['Inter'] text-[20px] font-[500] leading-[20px] text-[#c4c9d1]"
                        />
                        <span
                          className="font-['Inter'] text-[14px] font-[500] leading-[20px] text-[#c4c9d1]"
                        >
                          Version
                        </span>
                      </div>
                      <div
                        className="flex h-10 w-full flex-none items-center justify-between rounded-[8px] border border-solid border-[#2a3038] bg-[#0b0d10] px-3 hover:border-[#3a414b]"
                      >
                        <span
                          className="font-['Inter'] text-[14px] font-[400] leading-[20px] text-[#ffffff]"
                        >
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
                  <div
                    className="flex w-full items-start gap-6 mobile:flex-col"
                  >
                    <div
                      className="flex grow shrink-0 basis-0 flex-col items-start gap-2"
                    >
                      <div
                        className="flex items-center gap-0.5"
                      >
                        <RoundSettingsEthernet
                          className="font-['Inter'] text-[20px] font-[500] leading-[20px] text-[#c4c9d1]"
                        />
                        <span
                          className="font-['Inter'] text-[14px] font-[500] leading-[20px] text-[#c4c9d1]"
                        >
                          Port
                        </span>
                      </div>
                      <input
                        className="h-10 w-full flex-none rounded-[8px] border border-solid border-[#2a3038] bg-[#0b0d10] px-3 font-['Inter'] text-[14px] font-[400] leading-[21px] text-[#ffffff] outline-none placeholder:text-[#7a828e] focus-within:border-[#22c55e]"
                        placeholder="Port (eg. 25565)"
                        value=""
                        type="number"
                      />
                    </div>
                    <div
                      className="flex grow shrink-0 basis-0 flex-col items-start gap-2"
                    >
                      <div
                        className="flex items-start gap-0.5"
                      >
                        <RoundMemory
                          className="font-['Inter'] text-[20px] font-[500] leading-[20px] text-[#c4c9d1]"
                        />
                        <span
                          className="font-['Inter'] text-[14px] font-[500] leading-[20px] text-[#c4c9d1]"
                        >
                          Max Memory
                        </span>
                      </div>
                      <div
                        className="flex h-10 w-full flex-none items-center justify-between rounded-[8px] border border-solid border-[#2a3038] bg-[#0b0d10] px-3 hover:border-[#3a414b]"
                      >
                        <input
                          className="w-44 flex-none font-['Inter'] text-[14px] font-[400] leading-[20px] text-[#171717] outline-none placeholder:text-[#a3a3a3]"
                          placeholder="4 GB"
                          value=""
                          type="number"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="flex h-px w-80 flex-none items-start bg-[#232830] mobile:w-full"
                />
                <div
                  className="flex w-full flex-col items-start gap-3"
                  data-layer-name="Startup Options"
                >
                  <span
                    className="font-['Inter'] text-[14px] font-[600] leading-[20px] text-[#c4c9d1]"
                  >
                    Automation
                  </span>
                  <div
                    className="flex flex-col items-start gap-1 pl-4"
                  >
                    <span
                      className="font-['Inter'] text-[14px] font-[400] leading-[20px] text-[#aeb4bd]"
                    >
                      Auto start with Tinker
                    </span>
                    <div
                      className="flex items-center gap-2"
                    >
                      <Switch
                        className="h-6 w-11 flex-none"
                        checked={false}
                        onCheckedChange={() => {}}
                      />
                      <span
                        className="font-['Inter'] text-[10px] font-[400] leading-[20px] text-[#aeb4bd40]"
                      >
                        Start this server automatically when Tinker opens.
                      </span>
                    </div>
                    <span
                      className="font-['Inter'] text-[14px] font-[400] leading-[20px] text-[#aeb4bd]"
                    >
                      Auto restart on crash
                    </span>
                    <div
                      className="flex items-center gap-2"
                    >
                      <Switch
                        className="h-6 w-11 flex-none"
                        checked={false}
                        onCheckedChange={() => {}}
                      />
                      <span
                        className="font-['Inter'] text-[10px] font-[400] leading-[20px] text-[#aeb4bd40]"
                      >
                        If the server crashes, Tinker Agent will restart it
                        within 10 seconds.
                      </span>
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

export default Server;
