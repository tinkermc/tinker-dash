import type { PageProps } from "./types";
import RoundCompass from "@/ui/icons/RoundCompass";
import RoundDownload from "@/ui/icons/RoundDownload";
import RoundLayers from "@/ui/icons/RoundLayers";
import RoundList from "@/ui/icons/RoundList";
import RoundPeople from "@/ui/icons/RoundPeople";
import RoundSaveAll from "@/ui/icons/RoundSaveAll";
import RoundSearch from "@/ui/icons/RoundSearch";
import RoundServerX1 from "@/ui/icons/RoundServerX1";
import RoundStarFilled from "@/ui/icons/RoundStarFilled";
import RoundTerminal from "@/ui/icons/RoundTerminal";
import RoundWifi from "@/ui/icons/RoundWifi";
import TinkerDash from "@/ui/icons/TinkerDash";
import Versions from "@/ui/icons/Versions";

function Players({ onNavigate }: PageProps) {
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
          className="flex w-full flex-col items-center mobile:w-full mobile:flex-none"
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
              className="flex grow cursor-pointer items-center justify-center gap-1.5 rounded-t-xl border-x border-t border-solid border-[#22c55e] bg-[#123321] px-[7px] py-1 mobile:rounded-xl mobile:border-b"
            >
              <div
                className="flex h-6 w-6 flex-none items-center justify-center rounded-[9999px] border border-solid border-[#86efac] text-[12px] text-white"
              >
                <RoundPeople
                  className="font-['Inter'] text-[16px] font-[400] leading-[20px] text-[#e5e7eb]"
                />
              </div>
              <span
                className="font-['Inter'] text-[15px] font-[500] leading-[24px] text-[#ffffff]"
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
            className="flex h-[550px] w-full flex-none flex-col items-start gap-6 rounded-3xl border border-solid border-[#1f242b] bg-[#111418] px-8 py-6 mobile:h-auto mobile:px-4"
          >
            <div
              className="flex w-full items-center justify-between gap-4"
            >
              <h1
                className="font-['Inter'] text-[28px] font-[700] leading-[36px] text-[#ffffff]"
              >
                Players
              </h1>
              <div
                className="flex items-center gap-2 rounded-[9999px] border border-solid border-[#2a3038] bg-[#1a1e23] px-3 py-1"
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
                <span
                  className="font-['Inter'] text-[12px] font-[400] leading-[16px] text-[#7a828e]"
                >
                  NeoForge 1.21.1
                </span>
              </div>
            </div>
            <div
              className="flex h-[442px] w-full flex-none items-start gap-6 mobile:h-auto mobile:flex-col"
            >
              <aside
                className="flex w-[380px] flex-none flex-col items-start gap-3 self-stretch border-r border-solid border-[#232830] pr-6 mobile:w-full mobile:border-none mobile:px-0 mobile:py-0"
                data-layer-name="Player List"
              >
                <div
                  className="flex h-9 w-full flex-none items-center gap-2 rounded-[8px] border border-solid border-[#2a3038] bg-[#0b0d10] px-3 focus-within:border-[#22c55e]"
                >
                  <RoundSearch
                    className="font-['Inter'] text-[18px] font-[400] leading-[20px] text-[#7a828e]"
                  />
                  <input
                    className="grow shrink-0 basis-0 self-stretch font-['Inter'] text-[14px] font-[400] leading-[21px] text-[#ffffff] outline-none placeholder:text-[#7a828e]"
                    placeholder="Search players by name or UUID"
                    value=""
                    type="search"
                  />
                </div>
                <div
                  className="flex w-full flex-wrap items-center gap-2"
                  data-layer-name="Filter Chips"
                >
                  <div
                    className="flex items-center gap-1.5 rounded-[9999px] border border-solid border-[#4b5563] bg-[#232830] px-3 py-0.5"
                  >
                    <span
                      className="font-['Inter'] text-[13px] font-[500] leading-[20px] text-[#ffffff]"
                    >
                      All
                    </span>
                    <span
                      className="font-['Inter'] text-[12px] font-[400] leading-[20px] text-[#aeb4bd]"
                    >
                      6
                    </span>
                  </div>
                  <div
                    className="flex items-center gap-1.5 rounded-[9999px] border border-solid border-[#2a3038] bg-[#1a1e23] px-3 py-0.5 hover:border-[#3a414b]"
                  >
                    <div
                      className="flex h-1.5 w-1.5 flex-none items-start rounded-[9999px] bg-[#22c55e]"
                    />
                    <span
                      className="font-['Inter'] text-[13px] font-[400] leading-[20px] text-[#aeb4bd]"
                    >
                      Online
                    </span>
                    <span
                      className="font-['Inter'] text-[12px] font-[400] leading-[20px] text-[#7a828e]"
                    >
                      3
                    </span>
                  </div>
                  <div
                    className="flex items-center gap-1.5 rounded-[9999px] border border-solid border-[#2a3038] bg-[#1a1e23] px-3 py-0.5 hover:border-[#3a414b]"
                  >
                    <div
                      className="flex h-1.5 w-1.5 flex-none items-start rounded-[9999px] bg-[#f7b900]"
                    />
                    <span
                      className="font-['Inter'] text-[13px] font-[400] leading-[20px] text-[#aeb4bd]"
                    >
                      AFK
                    </span>
                    <span
                      className="font-['Inter'] text-[12px] font-[400] leading-[20px] text-[#7a828e]"
                    >
                      1
                    </span>
                  </div>
                  <div
                    className="flex items-center gap-1.5 rounded-[9999px] border border-solid border-[#2a3038] bg-[#1a1e23] px-3 py-0.5 hover:border-[#3a414b]"
                  >
                    <span
                      className="font-['Inter'] text-[13px] font-[400] leading-[20px] text-[#aeb4bd]"
                    >
                      Offline
                    </span>
                    <span
                      className="font-['Inter'] text-[12px] font-[400] leading-[20px] text-[#7a828e]"
                    >
                      1
                    </span>
                  </div>
                  <div
                    className="flex items-center gap-1.5 rounded-[9999px] border border-solid border-[#2a3038] bg-[#1a1e23] px-3 py-0.5 hover:border-[#3a414b]"
                  >
                    <span
                      className="font-['Inter'] text-[13px] font-[400] leading-[20px] text-[#aeb4bd]"
                    >
                      Banned
                    </span>
                    <span
                      className="font-['Inter'] text-[12px] font-[400] leading-[20px] text-[#7a828e]"
                    >
                      1
                    </span>
                  </div>
                </div>
                <div
                  className="flex w-full grow shrink-0 basis-0 flex-col items-start gap-2 pr-1 overflow-auto"
                >
                  <div
                    className="flex w-full items-center gap-3 rounded-[8px] border border-solid border-[#22c55e80] bg-[#1a1e23] px-3 py-2"
                  >
                    <div
                      className="flex h-8 w-8 flex-none items-start overflow-hidden rounded-[6px] bg-[#c58c6b] relative"
                      data-layer-name="Skin Avatar"
                    >
                      <div
                        className="flex h-2 w-8 flex-none items-start bg-[#3b2a1d] absolute left-0 top-0"
                      />
                      <div
                        className="flex h-1 w-1 flex-none items-start bg-[#3b2a1d] absolute left-0 top-2"
                      />
                      <div
                        className="flex h-1 w-1 flex-none items-start bg-[#3b2a1d] absolute right-0 top-2"
                      />
                      <div
                        className="flex h-1 w-1 flex-none items-start bg-[#ffffff] absolute left-1 top-4"
                      />
                      <div
                        className="flex h-1 w-1 flex-none items-start bg-[#4a3aa0] absolute left-2 top-4"
                      />
                      <div
                        className="flex h-1 w-1 flex-none items-start bg-[#4a3aa0] absolute left-5 top-4"
                      />
                      <div
                        className="flex h-1 w-1 flex-none items-start bg-[#ffffff] absolute left-6 top-4"
                      />
                      <div
                        className="flex h-1 w-2 flex-none items-start bg-[#a06a50] absolute left-3 top-5"
                      />
                      <div
                        className="flex h-1 w-2 flex-none items-start bg-[#6b3f2c] absolute left-3 top-6"
                      />
                    </div>
                    <div
                      className="flex grow shrink-0 basis-0 flex-col items-start"
                    >
                      <span
                        className="w-full whitespace-nowrap font-['Inter'] text-[14px] font-[500] leading-[20px] text-[#ffffff] truncate"
                      >
                        Steve_Builder
                      </span>
                      <div
                        className="flex items-center gap-1.5"
                      >
                        <div
                          className="flex h-1.5 w-1.5 flex-none items-start rounded-[9999px] bg-[#22c55e]"
                        />
                        <span
                          className="font-['Inter'] text-[12px] font-[400] leading-[16px] text-[#86efac]"
                        >
                          Online · 1h 12m
                        </span>
                      </div>
                    </div>
                    <div
                      className="flex items-center gap-0.5 rounded-[9999px] border border-solid border-[#4b5563] bg-[#232830] pl-1 pr-2"
                    >
                      <RoundStarFilled
                        className="font-['Inter'] text-[12px] font-[400] leading-[18px] text-[#e5e7eb]"
                      />
                      <span
                        className="font-['Inter'] text-[11px] font-[600] leading-[18px] text-[#e5e7eb]"
                      >
                        OP
                      </span>
                    </div>
                  </div>
                  <div
                    className="flex w-full items-center gap-3 rounded-[8px] border border-solid border-transparent bg-[#1a1e23] px-3 py-2 hover:border-[#2a3038]"
                  >
                    <div
                      className="flex h-8 w-8 flex-none items-start overflow-hidden rounded-[6px] bg-[#e8b48f] relative"
                    >
                      <div
                        className="flex h-2 w-8 flex-none items-start bg-[#d0702c] absolute left-0 top-0"
                      />
                      <div
                        className="flex h-6 w-1 flex-none items-start bg-[#d0702c] absolute right-0 top-2"
                      />
                      <div
                        className="flex h-1 w-2 flex-none items-start bg-[#d0702c] absolute left-0 top-2"
                      />
                      <div
                        className="flex h-1 w-1 flex-none items-start bg-[#ffffff] absolute left-1 top-4"
                      />
                      <div
                        className="flex h-1 w-1 flex-none items-start bg-[#3f8f4a] absolute left-2 top-4"
                      />
                      <div
                        className="flex h-1 w-1 flex-none items-start bg-[#3f8f4a] absolute left-5 top-4"
                      />
                      <div
                        className="flex h-1 w-1 flex-none items-start bg-[#ffffff] absolute left-6 top-4"
                      />
                      <div
                        className="flex h-1 w-2 flex-none items-start bg-[#c0725a] absolute left-3 top-6"
                      />
                    </div>
                    <div
                      className="flex grow shrink-0 basis-0 flex-col items-start"
                    >
                      <span
                        className="w-full whitespace-nowrap font-['Inter'] text-[14px] font-[500] leading-[20px] text-[#ffffff] truncate"
                      >
                        Alex_Miner
                      </span>
                      <div
                        className="flex items-center gap-1.5"
                      >
                        <div
                          className="flex h-1.5 w-1.5 flex-none items-start rounded-[9999px] bg-[#22c55e]"
                        />
                        <span
                          className="font-['Inter'] text-[12px] font-[400] leading-[16px] text-[#86efac]"
                        >
                          Online · 34m
                        </span>
                      </div>
                    </div>
                  </div>
                  <div
                    className="flex w-full items-center gap-3 rounded-[8px] border border-solid border-transparent bg-[#1a1e23] px-3 py-2 hover:border-[#2a3038]"
                  >
                    <div
                      className="flex h-8 w-8 flex-none items-start overflow-hidden rounded-[6px] bg-[#5fa34a] relative"
                    >
                      <div
                        className="flex h-1 w-3 flex-none items-start bg-[#7cc062] absolute left-0 top-0"
                      />
                      <div
                        className="flex h-2 w-3 flex-none items-start bg-[#4a8a3a] absolute left-5 top-6"
                      />
                      <div
                        className="flex h-2 w-2 flex-none items-start bg-[#111418] absolute left-1 top-2"
                      />
                      <div
                        className="flex h-2 w-2 flex-none items-start bg-[#111418] absolute left-5 top-2"
                      />
                      <div
                        className="flex h-2 w-2 flex-none items-start bg-[#111418] absolute left-3 top-4"
                      />
                      <div
                        className="flex h-2 w-1 flex-none items-start bg-[#111418] absolute left-2 top-5"
                      />
                      <div
                        className="flex h-2 w-1 flex-none items-start bg-[#111418] absolute left-5 top-5"
                      />
                    </div>
                    <div
                      className="flex grow shrink-0 basis-0 flex-col items-start"
                    >
                      <span
                        className="w-full whitespace-nowrap font-['Inter'] text-[14px] font-[500] leading-[20px] text-[#ffffff] truncate"
                      >
                        xX_Creeper_Xx
                      </span>
                      <div
                        className="flex items-center gap-1.5"
                      >
                        <div
                          className="flex h-1.5 w-1.5 flex-none items-start rounded-[9999px] bg-[#22c55e]"
                        />
                        <span
                          className="font-['Inter'] text-[12px] font-[400] leading-[16px] text-[#86efac]"
                        >
                          Online · 2h 05m
                        </span>
                      </div>
                    </div>
                  </div>
                  <div
                    className="flex w-full items-center gap-3 rounded-[8px] border border-solid border-transparent bg-[#1a1e23] px-3 py-2 hover:border-[#2a3038]"
                  >
                    <div
                      className="flex h-8 w-8 flex-none items-start overflow-hidden rounded-[6px] bg-[#d9a07b] relative opacity-60"
                    >
                      <div
                        className="flex h-2 w-8 flex-none items-start bg-[#8b1e1e] absolute left-0 top-0"
                      />
                      <div
                        className="flex h-6 w-1 flex-none items-start bg-[#8b1e1e] absolute left-0 top-2"
                      />
                      <div
                        className="flex h-6 w-1 flex-none items-start bg-[#8b1e1e] absolute right-0 top-2"
                      />
                      <div
                        className="flex h-1 w-1 flex-none items-start bg-[#b91c1c] absolute left-2 top-4"
                      />
                      <div
                        className="flex h-1 w-1 flex-none items-start bg-[#b91c1c] absolute left-5 top-4"
                      />
                      <div
                        className="flex h-1 w-2 flex-none items-start bg-[#a85a4a] absolute left-3 top-6"
                      />
                    </div>
                    <div
                      className="flex grow shrink-0 basis-0 flex-col items-start"
                    >
                      <span
                        className="w-full whitespace-nowrap font-['Inter'] text-[14px] font-[500] leading-[20px] text-[#ffffff] truncate"
                      >
                        RedstoneRita
                      </span>
                      <div
                        className="flex items-center gap-1.5"
                      >
                        <div
                          className="flex h-1.5 w-1.5 flex-none items-start rounded-[9999px] bg-[#f7b900]"
                        />
                        <span
                          className="font-['Inter'] text-[12px] font-[400] leading-[16px] text-[#f7b900]"
                        >
                          AFK · 2h 05m
                        </span>
                      </div>
                    </div>
                  </div>
                  <div
                    className="flex w-full items-center gap-3 rounded-[8px] border border-solid border-transparent bg-[#1a1e23] px-3 py-2 hover:border-[#2a3038]"
                  >
                    <div
                      className="flex h-8 w-8 flex-none items-start overflow-hidden rounded-[6px] bg-[#b07a5a] relative opacity-60"
                    >
                      <div
                        className="flex h-2 w-8 flex-none items-start bg-[#4a2e1e] absolute left-0 top-0"
                      />
                      <div
                        className="flex h-1 w-1 flex-none items-start bg-[#ffffff] absolute left-1 top-4"
                      />
                      <div
                        className="flex h-1 w-1 flex-none items-start bg-[#6b3fa0] absolute left-2 top-4"
                      />
                      <div
                        className="flex h-1 w-1 flex-none items-start bg-[#6b3fa0] absolute left-5 top-4"
                      />
                      <div
                        className="flex h-1 w-1 flex-none items-start bg-[#ffffff] absolute left-6 top-4"
                      />
                      <div
                        className="flex h-2 w-4 flex-none items-start bg-[#4a2e1e] absolute left-2 top-6"
                      />
                    </div>
                    <div
                      className="flex grow shrink-0 basis-0 flex-col items-start"
                    >
                      <span
                        className="w-full whitespace-nowrap font-['Inter'] text-[14px] font-[500] leading-[20px] text-[#c4c9d1] truncate"
                      >
                        NotchFan42
                      </span>
                      <span
                        className="font-['Inter'] text-[12px] font-[400] leading-[16px] text-[#7a828e]"
                      >
                        Last online 3 days ago
                      </span>
                    </div>
                  </div>
                  <div
                    className="flex w-full items-center gap-3 rounded-[8px] border border-solid border-transparent bg-[#1a1e23] px-3 py-2 hover:border-[#2a3038]"
                  >
                    <div
                      className="flex grow shrink-0 basis-0 items-center gap-3 opacity-50"
                    >
                      <div
                        className="flex h-8 w-8 flex-none items-center justify-center rounded-[6px] bg-[#5a5f66]"
                      >
                        <span
                          className="font-['Inter'] text-[14px] font-[700] leading-[20px] text-[#ffffff]"
                        >
                          G
                        </span>
                      </div>
                      <div
                        className="flex grow shrink-0 basis-0 flex-col items-start"
                      >
                        <span
                          className="w-full whitespace-nowrap font-['Inter'] text-[14px] font-[500] leading-[20px] text-[#ffffff] truncate"
                        >
                          GriefBot99
                        </span>
                        <span
                          className="font-['Inter'] text-[12px] font-[400] leading-[16px] text-[#7a828e]"
                        >
                          Banned Oct 28 · Griefing
                        </span>
                      </div>
                    </div>
                    <div
                      className="flex items-center rounded-[9999px] border border-solid border-[#ef444480] bg-[#2a1215] px-2"
                    >
                      <span
                        className="font-['Inter'] text-[11px] font-[600] leading-[18px] text-[#fca5a5]"
                      >
                        Banned
                      </span>
                    </div>
                  </div>
                </div>
              </aside>
              <div
                className="flex grow shrink-0 basis-0 flex-col items-start gap-5 self-stretch overflow-auto mobile:flex-none"
                data-layer-name="Player Profile"
              >
                <div
                  className="flex w-full items-center gap-5"
                >
                  <div
                    className="flex h-24 w-24 flex-none items-start overflow-hidden rounded-xl border border-solid border-[#2a3038] bg-[#c58c6b] relative hover:border-[#4b5563]"
                    data-layer-name="Avatar Slot"
                  >
                    <div
                      className="flex h-6 w-24 flex-none items-start bg-[#3b2a1d] absolute left-0 top-0"
                    />
                    <div
                      className="flex h-3 w-3 flex-none items-start bg-[#3b2a1d] absolute left-0 top-6"
                    />
                    <div
                      className="flex h-3 w-3 flex-none items-start bg-[#3b2a1d] absolute right-0 top-6"
                    />
                    <div
                      className="flex h-3 w-3 flex-none items-start bg-[#ffffff] absolute left-3 top-12"
                    />
                    <div
                      className="flex h-3 w-3 flex-none items-start bg-[#4a3aa0] absolute left-6 top-12"
                    />
                    <div
                      className="flex h-3 w-3 flex-none items-start bg-[#4a3aa0] absolute left-[60px] top-12"
                    />
                    <div
                      className="flex h-3 w-3 flex-none items-start bg-[#ffffff] absolute left-[72px] top-12"
                    />
                    <div
                      className="flex h-3 w-6 flex-none items-start bg-[#a06a50] absolute left-9 top-[60px]"
                    />
                    <div
                      className="flex h-3 w-6 flex-none items-start bg-[#6b3f2c] absolute left-9 top-[72px]"
                    />
                  </div>
                  <div
                    className="flex grow shrink-0 basis-0 flex-col items-start gap-1.5"
                  >
                    <span
                      className="font-['Inter'] text-[24px] font-[700] leading-[32px] text-[#ffffff]"
                    >
                      Steve_Builder
                    </span>
                    <span
                      className="font-['Inter'] text-[12px] font-[400] leading-[16px] text-[#7a828e]"
                    >
                      8667ba71-b85a-4004-af54-457a9734eed7
                    </span>
                    <div
                      className="flex items-center gap-2 pt-1"
                    >
                      <div
                        className="flex items-center gap-1.5 rounded-[9999px] border border-solid border-[#22c55e80] bg-[#123321] px-2.5"
                      >
                        <div
                          className="flex h-1.5 w-1.5 flex-none items-start rounded-[9999px] bg-[#22c55e]"
                        />
                        <span
                          className="font-['Inter'] text-[12px] font-[500] leading-[20px] text-[#86efac]"
                        >
                          Online
                        </span>
                      </div>
                      <div
                        className="flex items-center gap-1 rounded-[9999px] border border-solid border-[#4b5563] bg-[#232830] pl-1.5 pr-2.5"
                      >
                        <RoundStarFilled
                          className="font-['Inter'] text-[13px] font-[400] leading-[20px] text-[#e5e7eb]"
                        />
                        <span
                          className="font-['Inter'] text-[12px] font-[600] leading-[20px] text-[#e5e7eb]"
                        >
                          OP
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="w-full items-start gap-2 grid grid-cols-4 mobile:grid mobile:grid-cols-2"
                  data-layer-name="Stat Tiles"
                >
                  <div
                    className="flex flex-col items-start gap-0.5 self-stretch rounded-[8px] border border-solid border-[#232830] bg-[#1a1e23] px-3 py-2"
                  >
                    <span
                      className="font-['Inter'] text-[11px] font-[500] leading-[16px] text-[#7a828e]"
                    >
                      Playtime
                    </span>
                    <span
                      className="font-['Inter'] text-[14px] font-[600] leading-[20px] text-[#ffffff]"
                    >
                      142h
                    </span>
                  </div>
                  <div
                    className="flex flex-col items-start gap-0.5 self-stretch rounded-[8px] border border-solid border-[#232830] bg-[#1a1e23] px-3 py-2"
                  >
                    <span
                      className="font-['Inter'] text-[11px] font-[500] leading-[16px] text-[#7a828e]"
                    >
                      First joined
                    </span>
                    <span
                      className="font-['Inter'] text-[14px] font-[600] leading-[20px] text-[#ffffff]"
                    >
                      Mar 3 2026
                    </span>
                  </div>
                  <div
                    className="flex flex-col items-start gap-0.5 self-stretch rounded-[8px] border border-solid border-[#232830] bg-[#1a1e23] px-3 py-2"
                  >
                    <span
                      className="font-['Inter'] text-[11px] font-[500] leading-[16px] text-[#7a828e]"
                    >
                      Last IP
                    </span>
                    <span
                      className="font-['Inter'] text-[13px] font-[500] leading-[20px] text-[#ffffff]"
                    >
                      xxx.xxx.x.xxx
                    </span>
                  </div>
                  <div
                    className="flex flex-col items-start gap-0.5 self-stretch rounded-[8px] border border-solid border-[#232830] bg-[#1a1e23] px-3 py-2"
                  >
                    <span
                      className="font-['Inter'] text-[11px] font-[500] leading-[16px] text-[#7a828e]"
                    >
                      Deaths
                    </span>
                    <span
                      className="font-['Inter'] text-[14px] font-[600] leading-[20px] text-[#ffffff]"
                    >
                      37
                    </span>
                  </div>
                </div>
                <div
                  className="flex w-full flex-col items-start gap-2"
                  data-layer-name="Actions"
                >
                  <div
                    className="flex w-full items-center justify-between"
                  >
                    <span
                      className="font-['Inter'] text-[14px] font-[600] leading-[20px] text-[#c4c9d1]"
                    >
                      Actions
                    </span>
                    <span
                      className="font-['Inter'] text-[12px] font-[400] leading-[16px] text-[#7a828e]"
                    >
                      Applies to Steve_Builder
                    </span>
                  </div>
                  <div
                    className="w-full items-start gap-2 grid grid-cols-6 mobile:grid mobile:grid-cols-2"
                  >
                    <div
                      className="flex h-9 items-center justify-center gap-2 rounded-[8px] border border-solid border-[#2a3038] bg-[#1a1e23] px-3 col-span-3 hover:border-[#3a414b] mobile:hover:border-[#3a414b] mobile:col-span-1"
                    >
                      <RoundSearch
                        className="font-['Inter'] text-[18px] font-[400] leading-[20px] text-[#aeb4bd]"
                      />
                      <span
                        className="font-['Inter'] text-[13px] font-[500] leading-[20px] text-[#ffffff]"
                      >
                        Inspect data
                      </span>
                    </div>
                    <div
                      className="flex h-9 items-center justify-center gap-2 rounded-[8px] border border-solid border-[#2a3038] bg-[#1a1e23] px-3 col-span-3 hover:border-[#3a414b] mobile:hover:border-[#3a414b] mobile:col-span-1"
                    >
                      <Versions
                        className="font-['Inter'] text-[18px] font-[400] leading-[20px] text-[#aeb4bd]"
                      />
                      <span
                        className="font-['Inter'] text-[13px] font-[500] leading-[20px] text-[#ffffff]"
                      >
                        Restore from backup
                      </span>
                    </div>
                    <div
                      className="flex h-9 items-center justify-center gap-2 rounded-[8px] border border-solid border-[#f59e0b66] bg-[#241b0a] px-3 col-span-2 hover:border-[#f59e0b] mobile:hover:border-[#f59e0b] mobile:col-span-1"
                    >
                      <svg
                        className="font-['Inter'] text-[18px] font-[400] leading-[27px] text-[#fbbf24]"
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M5 5h6c.55 0 1-.45 1-1s-.45-1-1-1H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h6c.55 0 1-.45 1-1s-.45-1-1-1H5zm15.65 6.65-2.79-2.79a.501.501 0 0 0-.86.35V11h-7c-.55 0-1 .45-1 1s.45 1 1 1h7v1.79c0 .45.54.67.85.35l2.79-2.79c.2-.19.2-.51.01-.7"
                          fill="currentColor"
                          fillOpacity="1"
                        />
                      </svg>
                      <span
                        className="font-['Inter'] text-[13px] font-[500] leading-[20px] text-[#fcd34d]"
                      >
                        Kick
                      </span>
                    </div>
                    <div
                      className="flex h-9 items-center justify-center gap-2 rounded-[8px] border border-solid border-[#f59e0b66] bg-[#241b0a] px-3 col-span-2 hover:border-[#f59e0b] mobile:hover:border-[#f59e0b] mobile:col-span-1"
                    >
                      <svg
                        className="font-['Inter'] text-[18px] font-[400] leading-[27px] text-[#fbbf24]"
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M8 2c-1.1 0-2 .9-2 2v3.17c0 .53.21 1.04.59 1.42L10 12l-3.42 3.42c-.37.38-.58.89-.58 1.42V20c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2v-3.16c0-.53-.21-1.04-.58-1.41L14 12l3.41-3.4c.38-.38.59-.89.59-1.42V4c0-1.1-.9-2-2-2zm8 14.5V19c0 .55-.45 1-1 1H9c-.55 0-1-.45-1-1v-2.5l4-4zm-4-5-4-4V5c0-.55.45-1 1-1h6c.55 0 1 .45 1 1v2.5z"
                          fill="currentColor"
                          fillOpacity="1"
                        />
                      </svg>
                      <span
                        className="font-['Inter'] text-[13px] font-[500] leading-[20px] text-[#fcd34d]"
                      >
                        Timeout
                      </span>
                    </div>
                    <div
                      className="flex h-9 items-center justify-center gap-2 rounded-[8px] border border-solid border-[#ef444480] bg-[#2a1215] px-3 col-span-2 hover:border-[#ef4444] mobile:hover:border-[#ef4444] mobile:col-span-2"
                    >
                      <svg
                        className="font-['Inter'] text-[18px] font-[400] leading-[27px] text-[#f87171]"
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.42 0-8-3.58-8-8 0-1.85.63-3.55 1.69-4.9L16.9 18.31A7.9 7.9 0 0 1 12 20m6.31-3.1L7.1 5.69A7.9 7.9 0 0 1 12 4c4.42 0 8 3.58 8 8 0 1.85-.63 3.55-1.69 4.9"
                          fill="currentColor"
                          fillOpacity="1"
                        />
                      </svg>
                      <span
                        className="font-['Inter'] text-[13px] font-[500] leading-[20px] text-[#fca5a5]"
                      >
                        Ban
                      </span>
                    </div>
                  </div>
                </div>
                <div
                  className="flex w-full items-center gap-4 rounded-xl border border-solid border-[#ef444466] bg-[#1a0f11] px-4 py-3 mobile:flex-col mobile:items-start"
                  data-layer-name="Danger Zone"
                >
                  <div
                    className="flex grow shrink-0 basis-0 flex-col items-start gap-0.5"
                  >
                    <span
                      className="font-['Inter'] text-[13px] font-[600] leading-[20px] text-[#fca5a5]"
                    >
                      Danger zone
                    </span>
                    <span
                      className="font-['Inter'] text-[12px] font-[400] leading-[18px] text-[#aeb4bd]"
                    >
                      Permanently delete this player&#39;s inventory, stats
                      or/and advancements
                    </span>
                  </div>
                  <div
                    className="flex h-9 items-center justify-center gap-2 rounded-[8px] border border-solid border-[#ef4444] bg-[#7f1d1d] px-3 hover:bg-[#991b1b] mobile:w-full"
                  >
                    <svg
                      className="font-['Inter'] text-[18px] font-[400] leading-[27px] text-[#ffffff]"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2zM18 4h-2.5l-.71-.71c-.18-.18-.44-.29-.7-.29H9.91c-.26 0-.52.11-.7.29L8.5 4H6c-.55 0-1 .45-1 1s.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1"
                        fill="currentColor"
                        fillOpacity="1"
                      />
                    </svg>
                    <span
                      className="font-['Inter'] text-[13px] font-[600] leading-[20px] text-[#ffffff]"
                    >
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
