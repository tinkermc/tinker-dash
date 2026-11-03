import type { PageProps } from "./types";
import RoundAdd from "@/ui/icons/RoundAdd";
import RoundCompass from "@/ui/icons/RoundCompass";
import RoundDownload from "@/ui/icons/RoundDownload";
import RoundLayers from "@/ui/icons/RoundLayers";
import RoundList from "@/ui/icons/RoundList";
import RoundModeEditOutline from "@/ui/icons/RoundModeEditOutline";
import RoundPeople from "@/ui/icons/RoundPeople";
import RoundPlayArrow from "@/ui/icons/RoundPlayArrow";
import RoundPushPin from "@/ui/icons/RoundPushPin";
import RoundSaveAll from "@/ui/icons/RoundSaveAll";
import RoundSearch from "@/ui/icons/RoundSearch";
import RoundServerX1 from "@/ui/icons/RoundServerX1";
import RoundTerminal from "@/ui/icons/RoundTerminal";
import RoundTroubleshoot from "@/ui/icons/RoundTroubleshoot";
import RoundWifi from "@/ui/icons/RoundWifi";
import Sort from "@/ui/icons/Sort";
import TinkerDash from "@/ui/icons/TinkerDash";

function Console({ onNavigate }: PageProps) {
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
              className="flex grow cursor-pointer items-center justify-center gap-1.5 rounded-t-xl bg-[#0f2418] px-[7px] py-1 hover:bg-[#123321] mobile:rounded-xl"
            >
              <div
                className="flex h-6 w-6 flex-none items-center justify-center rounded-[9999px] border border-solid border-[#4b5563] text-[12px] text-[#e5e7eb]"
              >
                <RoundServerX1
                  className="font-['Inter'] text-[18px] font-[400] leading-[20px] text-[#e5e7eb]"
                />
              </div>
              <span
                className="font-['Inter'] text-[15px] font-[400] leading-[24px] text-[#e5e7eb]"
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
              className="flex grow cursor-pointer items-center justify-center gap-1.5 rounded-t-xl border-x border-t border-solid border-[#22c55e] bg-[#123321] px-[7px] py-1 mobile:rounded-xl mobile:border-b"
            >
              <div
                className="flex h-6 w-6 flex-none items-center justify-center rounded-[9999px] border border-solid border-[#86efac] text-[12px] text-white"
              >
                <RoundTerminal
                  className="font-['Inter'] text-[16px] font-[400] leading-[20px] text-[#e5e7eb]"
                />
              </div>
              <span
                className="font-['Inter'] text-[15px] font-[500] leading-[24px] text-[#ffffff]"
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
            className="flex w-full flex-col items-start gap-6 rounded-3xl border border-solid border-[#1f242b] bg-[#111418] px-8 py-6 mobile:px-4"
          >
            <div
              className="flex w-full items-center justify-between gap-4"
            >
              <h1
                className="font-['Inter'] text-[28px] font-[700] leading-[36px] text-[#ffffff]"
              >
                Console
              </h1>
            </div>
            <div
              className="flex w-full items-start gap-8 mobile:flex-col mobile:gap-6"
            >
              <aside
                className="flex flex-col items-start gap-3 border-r border-solid border-[#232830] pr-6 overflow-auto mobile:w-full mobile:flex-none mobile:border-none mobile:px-0 mobile:py-0"
              >
                <div
                  className="flex w-full items-center justify-between"
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
                    >
                    </div>
                  </div>
                </div>
                <div
                  className="flex w-full items-center gap-2 rounded-[8px] bg-[#1a1e23]"
                >
                  <div
                    className="flex w-px flex-none flex-col items-center justify-center gap-2 self-stretch rounded-l-[8px] bg-[#22c55e] px-1"
                  />
                  <div
                    className="flex grow shrink-0 basis-0 flex-col items-start justify-center py-2"
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
                      >
                        Vanilla SMP
                      </span>
                    </div>
                    <span
                      className="font-['Inter'] text-[12px] font-[400] leading-[16px] text-[#7a828e]"
                    >
                      3 hours uptime
                    </span>
                  </div>
                  <div
                    className="flex flex-col items-end gap-1 self-stretch px-1 py-1"
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
                >
                  <div
                    className="flex w-px flex-none flex-col items-center justify-center gap-2 self-stretch rounded-l-[8px] bg-[#22c55e] px-1"
                  />
                  <div
                    className="flex grow shrink-0 basis-0 flex-col items-start justify-center py-2"
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
                >
                  <div
                    className="flex w-px flex-none flex-col items-center justify-center gap-2 self-stretch rounded-l-[8px] bg-[#ef4444] px-1"
                  />
                  <div
                    className="flex grow shrink-0 basis-0 flex-col items-start justify-center py-2"
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
                >
                  <div
                    className="flex w-px flex-none flex-col items-center justify-center gap-2 self-stretch rounded-l-[8px] bg-[#f7b900] px-1"
                  />
                  <div
                    className="flex grow shrink-0 basis-0 flex-col items-start justify-center py-2"
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
                      0/20 players
                    </span>
                  </div>
                  <div
                    className="flex flex-col items-end gap-1 self-stretch px-1 py-1"
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
                >
                  <div
                    className="flex w-px flex-none flex-col items-center justify-center gap-2 self-stretch rounded-l-[8px] bg-[#96a2b0] px-1"
                  />
                  <div
                    className="flex grow shrink-0 basis-0 flex-col items-start justify-center py-2"
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
                className="flex max-h-[448px] grow shrink-0 basis-0 flex-col items-start gap-1.5"
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
                      Vanilla 1.21.1 · Port 25565 · 1/20 players
                    </span>
                  </div>
                </div>
                <div
                  className="flex w-full items-center gap-3 mobile:flex-wrap"
                >
                  <div
                    className="flex h-8 w-56 flex-none items-center justify-between rounded-[8px] border border-solid border-[#2a3038] bg-[#1a1e23] px-2.5 focus-within:border-[#22c55e80] mobile:grow mobile:shrink-0 mobile:basis-0"
                  >
                    <span
                      className="font-['Inter'] text-[14px] font-[400] leading-[20px] text-[#7a828e]"
                    >
                      Log-11/1/2026
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
                  <div
                    className="flex items-center gap-0.5 rounded-[8px] border border-solid border-[#2a3038] bg-[#1a1e23] px-0.5 py-0.5"
                  >
                    <div
                      className="flex items-center rounded-[6px] border border-solid border-[#22c55e80] bg-[#123321] px-2.5 py-0.5"
                    >
                      <span
                        className="font-['Inter'] text-[13px] font-[500] leading-[20px] text-[#ffffff]"
                      >
                        All
                      </span>
                    </div>
                    <div
                      className="flex items-center gap-1.5 rounded-[6px] border border-solid border-transparent px-2.5 py-0.5 hover:bg-[#232830]"
                    >
                      <div
                        className="flex h-1.5 w-1.5 flex-none items-start rounded-[9999px] bg-[#4ade80]"
                      />
                      <span
                        className="font-['Inter'] text-[13px] font-[400] leading-[20px] text-[#aeb4bd]"
                      >
                        Info
                      </span>
                    </div>
                    <div
                      className="flex items-center gap-1.5 rounded-[6px] border border-solid border-transparent px-2.5 py-0.5 hover:bg-[#232830]"
                    >
                      <div
                        className="flex h-1.5 w-1.5 flex-none items-start rounded-[9999px] bg-[#f7b900]"
                      />
                      <span
                        className="font-['Inter'] text-[13px] font-[400] leading-[20px] text-[#aeb4bd]"
                      >
                        Warn
                      </span>
                    </div>
                    <div
                      className="flex items-center gap-1.5 rounded-[6px] border border-solid border-transparent px-2.5 py-0.5 hover:bg-[#232830]"
                    >
                      <div
                        className="flex h-1.5 w-1.5 flex-none items-start rounded-[9999px] bg-[#ef4444]"
                      />
                      <span
                        className="font-['Inter'] text-[13px] font-[400] leading-[20px] text-[#aeb4bd]"
                      >
                        Error
                      </span>
                    </div>
                  </div>
                  <div
                    className="flex grow shrink-0 basis-0 items-center justify-end gap-1.5"
                  >
                    <div
                      className="flex h-8 w-8 flex-none items-center justify-center rounded-[8px] border border-solid border-[#22c55e80] bg-[#123321] text-[#86efac] hover:border-[#22c55e]"
                    >
                      <svg
                        className="font-['Inter'] text-[16px] font-[400] leading-[24px] text-[#86efac]"
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M11 4a1 1 0 0 1 2 0v9.59l3.3-3.3a1 1 0 1 1 1.4 1.42l-5 5a1 1 0 0 1-1.4 0l-5-5a1 1 0 1 1 1.4-1.42l3.3 3.3z"
                          fill="currentColor"
                          fillOpacity="1"
                        />
                        <rect
                          x="5"
                          y="18.5"
                          width="14"
                          height="2"
                          rx="1"
                          ry="1"
                          fill="currentColor"
                          fillOpacity="1"
                        />
                      </svg>
                    </div>
                    <div
                      className="flex h-8 w-8 flex-none items-center justify-center rounded-[8px] border border-solid border-[#2a3038] bg-[#1a1e23] text-[#aeb4bd] hover:bg-[#232830]"
                    >
                      <svg
                        className="font-['Inter'] text-[16px] font-[400] leading-[24px] text-[#aeb4bd]"
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M9 2h9a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2m0 2v12h9V4zM4 7a1 1 0 0 1 1 1v12h10a1 1 0 1 1 0 2H5a2 2 0 0 1-2-2V8a1 1 0 0 1 1-1"
                          fill="currentColor"
                          fillOpacity="1"
                        />
                      </svg>
                    </div>
                    <div
                      className="flex h-8 w-8 flex-none items-center justify-center rounded-[8px] border border-solid border-[#2a3038] bg-[#1a1e23] text-[#aeb4bd] hover:bg-[#232830]"
                    >
                      <svg
                        className="font-['Inter'] text-[16px] font-[400] leading-[24px] text-[#aeb4bd]"
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M9 3a1 1 0 0 0-1 1v1H4a1 1 0 0 0 0 2h1v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7h1a1 1 0 1 0 0-2h-4V4a1 1 0 0 0-1-1zM7 7h10v12H7zm3 2a1 1 0 0 0-1 1v6a1 1 0 1 0 2 0v-6a1 1 0 0 0-1-1m4 0a1 1 0 0 0-1 1v6a1 1 0 1 0 2 0v-6a1 1 0 0 0-1-1"
                          fill="currentColor"
                          fillOpacity="1"
                        />
                      </svg>
                    </div>
                    <div
                      className="flex h-8 w-8 flex-none items-center justify-center rounded-[8px] border border-solid border-[#2a3038] bg-[#1a1e23] hover:bg-[#232830]"
                    >
                      <RoundSearch
                        className="font-['Inter'] text-[16px] font-[400] leading-[20px] text-[#aeb4bd]"
                      />
                    </div>
                  </div>
                </div>
                <div
                  className="flex w-full flex-col items-start rounded-t-[10px] border border-solid border-[#1f242b] bg-[#07090b] px-4 py-3 overflow-auto relative mobile:h-[420px] mobile:flex-none"
                >
                  <div
                    className="flex w-[360px] flex-col items-end gap-1 absolute top-3 right-3 z-10 mobile:absolute mobile:right-3 mobile:top-3 mobile:z-10 mobile:w-[calc(100%-24px)]"
                    data-layer-name="Find Bar"
                  >
                    <div
                      className="flex w-full items-center gap-1.5 rounded-[6px] border border-solid border-[#2a2f36] bg-[#16191e] px-2 py-1.5 shadow-[0px_8px_24px_0px_#00000073]"
                    >
                      <RoundSearch
                        className="font-['Inter'] text-[16px] font-[400] leading-[20px] text-[#7a828e]"
                      />
                      <div
                        className="flex h-6 grow shrink-0 basis-0 items-center rounded-[4px] border border-solid border-[#22c55e] bg-[#0b0d10] px-1.5"
                      >
                        <input
                          className="grow shrink-0 basis-0 self-stretch font-['Inter'] text-[12px] font-[400] leading-[18px] text-[#e5e7eb] outline-none placeholder:text-[#5b636e]"
                          placeholder="Find in logs"
                          value="nether"
                          type="text"
                        />
                      </div>
                      <span
                        className="whitespace-nowrap font-['Inter'] text-[12px] font-[400] leading-[16px] text-[#7a828e]"
                      >
                        1 of 2
                      </span>
                      <div
                        className="flex h-6 w-6 flex-none items-center justify-center rounded-[4px] border border-solid border-transparent hover:bg-[#232830]"
                        data-layer-name="Match Case"
                      >
                        <span
                          className="font-['Inter'] text-[11px] font-[500] leading-[16px] text-[#aeb4bd]"
                        >
                          Aa
                        </span>
                      </div>
                      <div
                        className="flex h-6 w-6 flex-none items-center justify-center rounded-[4px] border border-solid border-transparent hover:bg-[#232830]"
                        data-layer-name="Regex"
                      >
                        <span
                          className="font-['Inter'] text-[11px] font-[500] leading-[16px] text-[#aeb4bd]"
                        >
                          .*
                        </span>
                      </div>
                      <div
                        className="flex h-4 w-px flex-none items-start bg-[#2a2f36]"
                      />
                      <div
                        className="flex h-6 w-6 flex-none items-center justify-center rounded-[4px] hover:bg-[#232830]"
                        data-layer-name="Previous Match"
                      >
                        <svg
                          className="font-['Inter'] text-[16px] font-[400] leading-[24px] text-[#aeb4bd]"
                          width="1em"
                          height="1em"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M6.7 15.7a1 1 0 0 1-1.4-1.4l6-6a1 1 0 0 1 1.4 0l6 6a1 1 0 0 1-1.4 1.4L12 10.4z"
                            fill="currentColor"
                            fillOpacity="1"
                          />
                        </svg>
                      </div>
                      <div
                        className="flex h-6 w-6 flex-none items-center justify-center rounded-[4px] hover:bg-[#232830]"
                        data-layer-name="Next Match"
                      >
                        <svg
                          className="font-['Inter'] text-[16px] font-[400] leading-[24px] text-[#aeb4bd]"
                          width="1em"
                          height="1em"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M6.7 8.3a1 1 0 0 0-1.4 1.4l6 6a1 1 0 0 0 1.4 0l6-6a1 1 0 0 0-1.4-1.4L12 13.6z"
                            fill="currentColor"
                            fillOpacity="1"
                          />
                        </svg>
                      </div>
                      <div
                        className="flex h-6 w-6 flex-none items-center justify-center rounded-[4px] hover:bg-[#232830]"
                        data-layer-name="Close"
                      >
                        <svg
                          className="font-['Inter'] text-[16px] font-[400] leading-[24px] text-[#aeb4bd]"
                          width="1em"
                          height="1em"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M6.3 6.3a1 1 0 0 1 1.4 0l4.3 4.3 4.3-4.3a1 1 0 1 1 1.4 1.4L13.4 12l4.3 4.3a1 1 0 0 1-1.4 1.4L12 13.4l-4.3 4.3a1 1 0 0 1-1.4-1.4l4.3-4.3-4.3-4.3a1 1 0 0 1 0-1.4"
                            fill="currentColor"
                            fillOpacity="1"
                          />
                        </svg>
                      </div>
                    </div>
                    <span
                      className="font-['Inter'] text-[10px] font-[400] leading-[14px] text-[#5b636e]"
                    >
                      Enter next · Shift+Enter previous · Esc close
                    </span>
                  </div>
                  <div
                    className="flex w-full items-start gap-2 rounded-[4px] border-l-2 border-solid border-transparent px-2 py-0.5"
                  >
                    <span
                      className="font-['Inter'] text-[12px] font-[400] leading-[18px] text-[#5b636e]"
                    >
                      [14:01:58]
                    </span>
                    <span
                      className="font-['Inter'] text-[12px] font-[400] leading-[18px] text-[#4ade80b3]"
                    >
                      [Server thread/INFO]:
                    </span>
                    <span
                      className="grow shrink-0 basis-0 font-['Inter'] text-[12px] font-[400] leading-[18px] text-[#d1d5db]"
                    >
                      Starting minecraft server version 1.21.1
                    </span>
                  </div>
                  <div
                    className="flex w-full items-start gap-2 rounded-[4px] border-l-2 border-solid border-transparent px-2 py-0.5"
                  >
                    <span
                      className="font-['Inter'] text-[12px] font-[400] leading-[18px] text-[#5b636e]"
                    >
                      [14:01:58]
                    </span>
                    <span
                      className="font-['Inter'] text-[12px] font-[400] leading-[18px] text-[#4ade80b3]"
                    >
                      [Server thread/INFO]:
                    </span>
                    <span
                      className="grow shrink-0 basis-0 font-['Inter'] text-[12px] font-[400] leading-[18px] text-[#d1d5db]"
                    >
                      Loading properties
                    </span>
                  </div>
                  <div
                    className="flex w-full items-start gap-2 rounded-[4px] border-l-2 border-solid border-transparent px-2 py-0.5"
                  >
                    <span
                      className="font-['Inter'] text-[12px] font-[400] leading-[18px] text-[#5b636e]"
                    >
                      [14:01:58]
                    </span>
                    <span
                      className="font-['Inter'] text-[12px] font-[400] leading-[18px] text-[#4ade80b3]"
                    >
                      [Server thread/INFO]:
                    </span>
                    <span
                      className="grow shrink-0 basis-0 font-['Inter'] text-[12px] font-[400] leading-[18px] text-[#d1d5db]"
                    >
                      Default game type: SURVIVAL
                    </span>
                  </div>
                  <div
                    className="flex w-full items-start gap-2 rounded-[4px] border-l-2 border-solid border-transparent px-2 py-0.5"
                  >
                    <span
                      className="font-['Inter'] text-[12px] font-[400] leading-[18px] text-[#5b636e]"
                    >
                      [14:01:59]
                    </span>
                    <span
                      className="font-['Inter'] text-[12px] font-[400] leading-[18px] text-[#4ade80b3]"
                    >
                      [Server thread/INFO]:
                    </span>
                    <span
                      className="grow shrink-0 basis-0 font-['Inter'] text-[12px] font-[400] leading-[18px] text-[#d1d5db]"
                    >
                      Starting Minecraft server on *:25565
                    </span>
                  </div>
                  <div
                    className="flex w-full items-start gap-2 rounded-[4px] border-l-2 border-solid border-transparent px-2 py-0.5"
                  >
                    <span
                      className="font-['Inter'] text-[12px] font-[400] leading-[18px] text-[#5b636e]"
                    >
                      [14:01:59]
                    </span>
                    <span
                      className="font-['Inter'] text-[12px] font-[400] leading-[18px] text-[#4ade80b3]"
                    >
                      [Server thread/INFO]:
                    </span>
                    <span
                      className="grow shrink-0 basis-0 font-['Inter'] text-[12px] font-[400] leading-[18px] text-[#d1d5db]"
                    >
                      Preparing level &quot;world&quot;
                    </span>
                  </div>
                  <div
                    className="flex w-full items-start gap-2 rounded-[4px] border-l-2 border-solid border-transparent px-2 py-0.5"
                  >
                    <span
                      className="font-['Inter'] text-[12px] font-[400] leading-[18px] text-[#5b636e]"
                    >
                      [14:02:02]
                    </span>
                    <span
                      className="font-['Inter'] text-[12px] font-[400] leading-[18px] text-[#4ade80b3]"
                    >
                      [Server thread/INFO]:
                    </span>
                    <span
                      className="grow shrink-0 basis-0 font-['Inter'] text-[12px] font-[400] leading-[18px] text-[#d1d5db]"
                    >
                      Preparing start region for dimension minecraft:overworld
                    </span>
                  </div>
                  <div
                    className="flex w-full items-start gap-2 rounded-[4px] border-l-2 border-solid border-transparent px-2 py-0.5"
                  >
                    <span
                      className="font-['Inter'] text-[12px] font-[400] leading-[18px] text-[#5b636e]"
                    >
                      [14:02:03]
                    </span>
                    <span
                      className="font-['Inter'] text-[12px] font-[400] leading-[18px] text-[#4ade80b3]"
                    >
                      [Server thread/INFO]:
                    </span>
                    <span
                      className="grow shrink-0 basis-0 font-['Inter'] text-[12px] font-[400] leading-[18px] text-[#d1d5db]"
                    >
                      Time elapsed: 3870 ms
                    </span>
                  </div>
                  <div
                    className="flex w-full items-start gap-2 rounded-[4px] border-l-2 border-solid border-transparent px-2 py-0.5"
                  >
                    <span
                      className="font-['Inter'] text-[12px] font-[400] leading-[18px] text-[#5b636e]"
                    >
                      [14:02:03]
                    </span>
                    <span
                      className="font-['Inter'] text-[12px] font-[400] leading-[18px] text-[#4ade80b3]"
                    >
                      [Server thread/INFO]:
                    </span>
                    <span
                      className="grow shrink-0 basis-0 font-['Inter'] text-[12px] font-[400] leading-[18px] text-[#d1d5db]"
                    >
                      Done (4.213s)! For help, type &quot;help&quot;
                    </span>
                  </div>
                  <div
                    className="flex w-full items-start gap-2 rounded-[4px] border-l-2 border-solid border-transparent px-2 py-0.5"
                  >
                    <span
                      className="font-['Inter'] text-[12px] font-[400] leading-[18px] text-[#5b636e]"
                    >
                      [14:02:11]
                    </span>
                    <span
                      className="font-['Inter'] text-[12px] font-[400] leading-[18px] text-[#4ade80b3]"
                    >
                      [User Authenticator #1/INFO]:
                    </span>
                    <span
                      className="grow shrink-0 basis-0 font-['Inter'] text-[12px] font-[400] leading-[18px] text-[#d1d5db]"
                    >
                      UUID of player Steve is
                      8667ba71-b85a-4004-af54-457a9734eed7
                    </span>
                  </div>
                  <div
                    className="flex w-full items-start gap-2 rounded-[4px] border-l-2 border-solid border-transparent px-2 py-0.5"
                  >
                    <span
                      className="font-['Inter'] text-[12px] font-[400] leading-[18px] text-[#5b636e]"
                    >
                      [14:02:11]
                    </span>
                    <span
                      className="font-['Inter'] text-[12px] font-[400] leading-[18px] text-[#4ade80b3]"
                    >
                      [Server thread/INFO]:
                    </span>
                    <span
                      className="grow shrink-0 basis-0 font-['Inter'] text-[12px] font-[400] leading-[18px] text-[#d1d5db]"
                    >
                      Steve[/192.168.1.24:51834] logged in with entity id 214 at
                      (12.5, 71.0, -38.5)
                    </span>
                  </div>
                  <div
                    className="flex w-full items-start gap-2 rounded-[4px] border-l-2 border-solid border-transparent px-2 py-0.5"
                  >
                    <span
                      className="font-['Inter'] text-[12px] font-[400] leading-[18px] text-[#5b636e]"
                    >
                      [14:02:11]
                    </span>
                    <span
                      className="font-['Inter'] text-[12px] font-[400] leading-[18px] text-[#4ade80b3]"
                    >
                      [Server thread/INFO]:
                    </span>
                    <span
                      className="grow shrink-0 basis-0 font-['Inter'] text-[12px] font-[400] leading-[18px] text-[#d1d5db]"
                    >
                      Steve joined the game
                    </span>
                  </div>
                  <div
                    className="flex w-full items-start gap-2 rounded-[4px] border-l-2 border-solid border-[#22c55e] bg-[#22c55e14] px-2 py-0.5"
                  >
                    <span
                      className="font-['Inter'] text-[12px] font-[400] leading-[18px] text-[#5b636e]"
                    >
                      [14:03:27]
                    </span>
                    <span
                      className="font-['Inter'] text-[12px] font-[400] leading-[18px] text-[#4ade80b3]"
                    >
                      [Server thread/INFO]:
                    </span>
                    <div
                      className="flex grow shrink-0 basis-0 flex-wrap items-start"
                      data-layer-name="Message"
                    >
                      <span
                        className="font-['Inter'] text-[12px] font-[500] leading-[18px] text-[#ffffff] whitespace-pre"
                      >
                        &lt;Steve&gt; anyone up for the{" "}
                      </span>
                      <span
                        className="font-['Inter'] text-[12px] font-[600] leading-[18px] text-[#0b0d10] rounded-sm bg-[#f59e0b] px-0.5"
                        data-layer-name="Current Match"
                      >
                        nether
                      </span>
                      <span
                        className="font-['Inter'] text-[12px] font-[500] leading-[18px] text-[#ffffff]"
                      >
                        ?
                      </span>
                    </div>
                  </div>
                  <div
                    className="flex w-full items-start gap-2 rounded-[4px] border-l-2 border-solid border-[#f7b900] bg-[#f7b9000f] px-2 py-0.5"
                  >
                    <span
                      className="font-['Inter'] text-[12px] font-[400] leading-[18px] text-[#5b636e]"
                    >
                      [14:05:42]
                    </span>
                    <span
                      className="font-['Inter'] text-[12px] font-[600] leading-[18px] text-[#f7b900]"
                    >
                      [Server thread/WARN]:
                    </span>
                    <span
                      className="grow shrink-0 basis-0 font-['Inter'] text-[12px] font-[400] leading-[18px] text-[#fde68a]"
                    >
                      Can&#39;t keep up! Is the server overloaded? Running
                      2034ms or 40 ticks behind
                    </span>
                  </div>
                  <div
                    className="flex w-full items-start gap-2 rounded-[4px] border-l-2 border-solid border-[#22c55e] bg-[#22c55e14] px-2 py-0.5"
                  >
                    <span
                      className="font-['Inter'] text-[12px] font-[400] leading-[18px] text-[#5b636e]"
                    >
                      [14:06:10]
                    </span>
                    <span
                      className="font-['Inter'] text-[12px] font-[400] leading-[18px] text-[#4ade80b3]"
                    >
                      [Server thread/INFO]:
                    </span>
                    <div
                      className="flex grow shrink-0 basis-0 flex-wrap items-start"
                      data-layer-name="Message"
                    >
                      <span
                        className="font-['Inter'] text-[12px] font-[500] leading-[18px] text-[#ffffff] whitespace-pre"
                      >
                        &lt;Alex&gt;{" "}
                      </span>
                      <span
                        className="font-['Inter'] text-[12px] font-[500] leading-[18px] text-[#fcd34d] rounded-sm bg-[#f59e0b40] px-0.5"
                        data-layer-name="Match"
                      >
                        nether
                      </span>
                      <span
                        className="font-['Inter'] text-[12px] font-[500] leading-[18px] text-[#ffffff] whitespace-pre"
                      >
                        {" "}
                        portal is at spawn
                      </span>
                    </div>
                  </div>
                  <div
                    className="flex w-full items-start gap-2 rounded-[4px] border-l-2 border-solid border-transparent px-2 py-0.5"
                  >
                    <span
                      className="font-['Inter'] text-[12px] font-[400] leading-[18px] text-[#5b636e]"
                    >
                      [14:07:03]
                    </span>
                    <span
                      className="font-['Inter'] text-[12px] font-[400] leading-[18px] text-[#4ade80b3]"
                    >
                      [Server thread/INFO]:
                    </span>
                    <span
                      className="grow shrink-0 basis-0 font-['Inter'] text-[12px] font-[400] leading-[18px] text-[#d1d5db]"
                    >
                      [Rcon] Player Alex was given 64 [Diamond]
                    </span>
                  </div>
                  <div
                    className="flex w-full items-start gap-2 rounded-[4px] border-l-2 border-solid border-[#ef4444] bg-[#ef44441a] px-2 py-0.5"
                  >
                    <span
                      className="font-['Inter'] text-[12px] font-[400] leading-[18px] text-[#5b636e]"
                    >
                      [14:08:15]
                    </span>
                    <span
                      className="font-['Inter'] text-[12px] font-[600] leading-[18px] text-[#ef4444]"
                    >
                      [IO-Worker-4/ERROR]:
                    </span>
                    <span
                      className="grow shrink-0 basis-0 font-['Inter'] text-[12px] font-[400] leading-[18px] text-[#fca5a5]"
                    >
                      Failed to save chunk [12, -4]
                    </span>
                  </div>
                  <div
                    className="flex w-full items-start gap-2 rounded-[4px] border-l-2 border-solid border-transparent px-2 py-0.5"
                  >
                    <span
                      className="font-['Inter'] text-[12px] font-[400] leading-[18px] text-[#5b636e]"
                    >
                      [14:10:00]
                    </span>
                    <span
                      className="font-['Inter'] text-[12px] font-[400] leading-[18px] text-[#4ade80b3]"
                    >
                      [Server thread/INFO]:
                    </span>
                    <span
                      className="grow shrink-0 basis-0 font-['Inter'] text-[12px] font-[400] leading-[18px] text-[#d1d5db]"
                    >
                      Saving the game (this may take a moment!)
                    </span>
                  </div>
                  <div
                    className="flex w-full items-start gap-2 rounded-[4px] border-l-2 border-solid border-transparent px-2 py-0.5"
                  >
                    <span
                      className="font-['Inter'] text-[12px] font-[400] leading-[18px] text-[#5b636e]"
                    >
                      [14:10:01]
                    </span>
                    <span
                      className="font-['Inter'] text-[12px] font-[400] leading-[18px] text-[#4ade80b3]"
                    >
                      [Server thread/INFO]:
                    </span>
                    <span
                      className="grow shrink-0 basis-0 font-['Inter'] text-[12px] font-[400] leading-[18px] text-[#d1d5db]"
                    >
                      Saved the game
                    </span>
                  </div>
                </div>
                <div
                  className="flex w-full flex-col items-start gap-2"
                >
                  <div
                    className="flex w-full items-center gap-2"
                  >
                    <div
                      className="flex h-9 grow shrink-0 basis-0 items-center gap-2 rounded-b-[8px] border border-solid border-[#2a3038] bg-[#07090b] px-3 focus-within:border-[#22c55e80]"
                    >
                      <span
                        className="font-['Inter'] text-[14px] font-[700] leading-[20px] text-[#22c55e]"
                      >
                        &gt;
                      </span>
                      <input
                        className="grow shrink-0 basis-0 self-stretch font-['Inter'] text-[13px] font-[400] leading-[20px] text-[#e5e7eb] outline-none placeholder:text-[#5b636e]"
                        placeholder="Enter a command (e.g. /say Hello)"
                        value=""
                        type="text"
                      />
                    </div>
                    <div
                      className="flex h-9 items-center gap-1.5 rounded-[8px] border border-solid border-[#22c55e] bg-[#22c55e] px-4 text-[#04130a] hover:bg-[#16a34a]"
                    >
                      <span
                        className="font-['Inter'] text-[14px] font-[600] leading-[20px] text-[#04130a]"
                      >
                        Send
                      </span>
                      <svg
                        className="font-['Inter'] text-[16px] font-[400] leading-[24px] text-[#171717]"
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="m3.4 20.4 18.45-7.9a.5.5 0 0 0 0-.92L3.4 3.6a.5.5 0 0 0-.7.6L5 11l9 1-9 1-2.3 6.8a.5.5 0 0 0 .7.6"
                          fill="currentColor"
                          fillOpacity="1"
                        />
                      </svg>
                    </div>
                  </div>
                  <div
                    className="flex w-full flex-wrap items-center gap-1.5"
                  >
                    <div
                      className="flex items-center rounded-[9999px] border border-solid border-[#2a3038] bg-[#1a1e23] px-2.5 py-0.5 hover:border-[#22c55e80]"
                    >
                      <span
                        className="font-['Inter'] text-[12px] font-[400] leading-[18px] text-[#c4c9d1]"
                      >
                        /list
                      </span>
                    </div>
                    <div
                      className="flex items-center rounded-[9999px] border border-solid border-[#2a3038] bg-[#1a1e23] px-2.5 py-0.5 hover:border-[#22c55e80]"
                    >
                      <span
                        className="font-['Inter'] text-[12px] font-[400] leading-[18px] text-[#c4c9d1]"
                      >
                        /save-all
                      </span>
                    </div>
                    <div
                      className="flex items-center rounded-[9999px] border border-solid border-[#2a3038] bg-[#1a1e23] px-2.5 py-0.5 hover:border-[#22c55e80]"
                    >
                      <span
                        className="font-['Inter'] text-[12px] font-[400] leading-[18px] text-[#c4c9d1]"
                      >
                        /weather clear
                      </span>
                    </div>
                    <div
                      className="flex items-center rounded-[9999px] border border-solid border-[#2a3038] bg-[#1a1e23] px-2.5 py-0.5 hover:border-[#22c55e80]"
                    >
                      <span
                        className="font-['Inter'] text-[12px] font-[400] leading-[18px] text-[#c4c9d1]"
                      >
                        /time set day
                      </span>
                    </div>
                    <div
                      className="flex items-center rounded-[9999px] border border-solid border-[#2a3038] bg-[#1a1e23] px-2.5 py-0.5 hover:border-[#22c55e80]"
                    >
                      <span
                        className="font-['Inter'] text-[12px] font-[400] leading-[18px] text-[#c4c9d1]"
                      >
                        /whitelist list
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

export default Console;
