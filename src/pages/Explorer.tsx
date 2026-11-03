import type { PageProps } from "./types";
import RoundAdd from "@/ui/icons/RoundAdd";
import RoundCompass from "@/ui/icons/RoundCompass";
import RoundDownload from "@/ui/icons/RoundDownload";
import RoundLayers from "@/ui/icons/RoundLayers";
import RoundList from "@/ui/icons/RoundList";
import RoundPeople from "@/ui/icons/RoundPeople";
import RoundRefresh from "@/ui/icons/RoundRefresh";
import RoundSaveAll from "@/ui/icons/RoundSaveAll";
import RoundSearch from "@/ui/icons/RoundSearch";
import RoundServerX1 from "@/ui/icons/RoundServerX1";
import RoundTerminal from "@/ui/icons/RoundTerminal";
import RoundUpgrade from "@/ui/icons/RoundUpgrade";
import RoundWifi from "@/ui/icons/RoundWifi";
import TinkerDash from "@/ui/icons/TinkerDash";

function Explorer({ onNavigate }: PageProps) {
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
              className="flex grow cursor-pointer items-center justify-center gap-1.5 rounded-t-xl border-x border-t border-solid border-[#22c55e] bg-[#123321] px-[7px] py-1 mobile:rounded-xl mobile:border-b"
            >
              <div
                className="flex h-6 w-6 flex-none items-center justify-center rounded-[9999px] border border-solid border-[#86efac] text-[12px] text-white"
              >
                <RoundList
                  className="font-['Inter'] text-[18px] font-[400] leading-[20px] text-[#e5e7eb]"
                />
              </div>
              <span
                className="font-['Inter'] text-[15px] font-[500] leading-[24px] text-[#ffffff]"
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
            className="flex h-[550px] w-full flex-none flex-col items-start gap-6 rounded-3xl border border-solid border-[#1f242b] bg-[#111418] px-8 py-6 mobile:h-auto mobile:px-4"
          >
            <div
              className="flex w-full items-center justify-between gap-4"
            >
              <h1
                className="font-['Inter'] text-[28px] font-[700] leading-[36px] text-[#ffffff]"
              >
                Explorer
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
                className="flex w-[300px] flex-none flex-col items-start gap-2 self-stretch border-r border-solid border-[#232830] pr-5 mobile:w-full mobile:border-none mobile:px-0 mobile:py-0"
                data-layer-name="File Tree"
              >
                <div
                  className="flex w-full items-center justify-between"
                >
                  <div
                    className="flex items-center gap-1"
                  >
                    <svg
                      className="font-['Inter'] text-[16px] font-[400] leading-[24px] text-[#7a828e]"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M15.7 5.3a1 1 0 0 1 0 1.4L10.4 12l5.3 5.3a1 1 0 0 1-1.4 1.4l-6-6a1 1 0 0 1 0-1.4l6-6a1 1 0 0 1 1.4 0"
                        fill="currentColor"
                        fillOpacity="1"
                      />
                    </svg>
                    <span
                      className="font-['Inter'] text-[14px] font-[600] leading-[20px] text-[#c4c9d1]"
                    >
                      Files
                    </span>
                  </div>
                  <div
                    className="flex items-center gap-1"
                  >
                    <div
                      className="flex h-6 w-6 flex-none items-center justify-center rounded-[6px] border border-solid border-[#2a3038] bg-[#1a1e23] hover:border-[#3a414b]"
                    >
                      <RoundSearch
                        className="font-['Inter'] text-[15px] font-[400] leading-[20px] text-[#aeb4bd]"
                      />
                    </div>
                    <div
                      className="flex h-6 w-6 flex-none items-center justify-center rounded-[6px] border border-solid border-[#2a3038] bg-[#1a1e23] hover:border-[#3a414b]"
                    >
                      <RoundAdd
                        className="font-['Inter'] text-[16px] font-[400] leading-[20px] text-[#aeb4bd]"
                      />
                    </div>
                    <div
                      className="flex h-6 w-6 flex-none items-center justify-center rounded-[6px] border border-solid border-[#2a3038] bg-[#1a1e23] hover:border-[#3a414b]"
                    >
                      <svg
                        className="font-['Inter'] text-[15px] font-[400] leading-[22.5px] text-[#aeb4bd]"
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M10 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-8z"
                          fill="currentColor"
                          fillOpacity="1"
                        />
                        <rect
                          x="11"
                          y="9"
                          width="2"
                          height="8"
                          rx="0"
                          ry="0"
                          fill="rgb(26 30 35)"
                        />
                        <rect
                          x="8"
                          y="12"
                          width="8"
                          height="2"
                          rx="0"
                          ry="0"
                          fill="rgb(26 30 35)"
                        />
                      </svg>
                    </div>
                    <div
                      className="flex h-6 w-6 flex-none items-center justify-center rounded-[6px] border border-solid border-[#2a3038] bg-[#1a1e23] hover:border-[#3a414b]"
                    >
                      <RoundUpgrade
                        className="font-['Inter'] text-[16px] font-[400] leading-[20px] text-[#aeb4bd]"
                      />
                    </div>
                    <div
                      className="flex h-6 w-6 flex-none items-center justify-center rounded-[6px] border border-solid border-[#2a3038] bg-[#1a1e23] hover:border-[#3a414b]"
                    >
                      <RoundRefresh
                        className="font-['Inter'] text-[15px] font-[400] leading-[20px] text-[#aeb4bd]"
                      />
                    </div>
                  </div>
                </div>
                <div
                  className="flex w-full grow shrink-0 basis-0 flex-col items-start pr-1 overflow-auto mobile:max-h-[320px]"
                >
                  <div
                    className="flex h-[22px] w-full flex-none items-center gap-1.5 rounded-[6px] px-1.5 hover:bg-[#1a1e23]"
                  >
                    <svg
                      className="font-['Inter'] text-[14px] font-[400] leading-[21px] text-[#7a828e]"
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
                    <svg
                      className="font-['Inter'] text-[15px] font-[400] leading-[22.5px] text-[#aeb4bd]"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M10 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-8z"
                        fill="currentColor"
                        fillOpacity="1"
                      />
                    </svg>
                    <span
                      className="font-['Inter'] text-[13px] font-[500] leading-[20px] text-[#ffffff]"
                    >
                      config
                    </span>
                  </div>
                  <div
                    className="flex h-[22px] w-full flex-none items-center gap-1.5 rounded-[6px] pl-[34px] pr-1.5 hover:bg-[#1a1e23]"
                  >
                    <svg
                      className="font-['Inter'] text-[14px] font-[400] leading-[21px] text-[#7a828e]"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zm-1 1.5L18.5 9H13z"
                        fill="currentColor"
                        fillOpacity="1"
                      />
                    </svg>
                    <span
                      className="font-['Inter'] text-[13px] font-[400] leading-[20px] text-[#aeb4bd]"
                    >
                      neoforge-server.toml
                    </span>
                  </div>
                  <div
                    className="flex h-[22px] w-full flex-none items-center gap-1.5 rounded-[6px] pl-[34px] pr-1.5 hover:bg-[#1a1e23]"
                  >
                    <svg
                      className="font-['Inter'] text-[14px] font-[400] leading-[21px] text-[#7a828e]"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zm-1 1.5L18.5 9H13z"
                        fill="currentColor"
                        fillOpacity="1"
                      />
                    </svg>
                    <span
                      className="font-['Inter'] text-[13px] font-[400] leading-[20px] text-[#aeb4bd]"
                    >
                      create-common.toml
                    </span>
                  </div>
                  <div
                    className="flex h-[22px] w-full flex-none items-center gap-1.5 rounded-[6px] pl-[34px] pr-1.5 hover:bg-[#1a1e23]"
                  >
                    <svg
                      className="font-['Inter'] text-[14px] font-[400] leading-[21px] text-[#7a828e]"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zm-1 1.5L18.5 9H13z"
                        fill="currentColor"
                        fillOpacity="1"
                      />
                    </svg>
                    <span
                      className="font-['Inter'] text-[13px] font-[400] leading-[20px] text-[#aeb4bd]"
                    >
                      ferritecore.mixin.properties
                    </span>
                  </div>
                  <div
                    className="flex h-[22px] w-full flex-none items-center gap-1.5 rounded-[6px] pl-[34px] pr-1.5 hover:bg-[#1a1e23]"
                  >
                    <svg
                      className="font-['Inter'] text-[14px] font-[400] leading-[21px] text-[#7a828e]"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zm-1 1.5L18.5 9H13z"
                        fill="currentColor"
                        fillOpacity="1"
                      />
                    </svg>
                    <span
                      className="font-['Inter'] text-[13px] font-[400] leading-[20px] text-[#aeb4bd]"
                    >
                      mekanism-common.toml
                    </span>
                  </div>
                  <div
                    className="flex h-[22px] w-full flex-none items-center gap-1.5 rounded-[6px] px-1.5 hover:bg-[#1a1e23]"
                  >
                    <svg
                      className="font-['Inter'] text-[14px] font-[400] leading-[21px] text-[#7a828e]"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M8.3 6.3a1 1 0 0 1 1.4 0l5 5a1 1 0 0 1 0 1.4l-5 5a1 1 0 0 1-1.4-1.4l4.3-4.3-4.3-4.3a1 1 0 0 1 0-1.4"
                        fill="currentColor"
                        fillOpacity="1"
                      />
                    </svg>
                    <svg
                      className="font-['Inter'] text-[15px] font-[400] leading-[22.5px] text-[#7a828e]"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M10 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-8z"
                        fill="currentColor"
                        fillOpacity="1"
                      />
                    </svg>
                    <span
                      className="font-['Inter'] text-[13px] font-[400] leading-[20px] text-[#c4c9d1]"
                    >
                      defaultconfigs
                    </span>
                  </div>
                  <div
                    className="flex h-[22px] w-full flex-none items-center gap-1.5 rounded-[6px] px-1.5 hover:bg-[#1a1e23]"
                  >
                    <svg
                      className="font-['Inter'] text-[14px] font-[400] leading-[21px] text-[#7a828e]"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M8.3 6.3a1 1 0 0 1 1.4 0l5 5a1 1 0 0 1 0 1.4l-5 5a1 1 0 0 1-1.4-1.4l4.3-4.3-4.3-4.3a1 1 0 0 1 0-1.4"
                        fill="currentColor"
                        fillOpacity="1"
                      />
                    </svg>
                    <svg
                      className="font-['Inter'] text-[15px] font-[400] leading-[22.5px] text-[#7a828e]"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M10 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-8z"
                        fill="currentColor"
                        fillOpacity="1"
                      />
                    </svg>
                    <span
                      className="font-['Inter'] text-[13px] font-[400] leading-[20px] text-[#c4c9d1]"
                    >
                      kubejs
                    </span>
                  </div>
                  <div
                    className="flex h-[22px] w-full flex-none items-center gap-1.5 rounded-[6px] px-1.5 hover:bg-[#1a1e23]"
                  >
                    <svg
                      className="font-['Inter'] text-[14px] font-[400] leading-[21px] text-[#7a828e]"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M8.3 6.3a1 1 0 0 1 1.4 0l5 5a1 1 0 0 1 0 1.4l-5 5a1 1 0 0 1-1.4-1.4l4.3-4.3-4.3-4.3a1 1 0 0 1 0-1.4"
                        fill="currentColor"
                        fillOpacity="1"
                      />
                    </svg>
                    <svg
                      className="font-['Inter'] text-[15px] font-[400] leading-[22.5px] text-[#7a828e]"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M10 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-8z"
                        fill="currentColor"
                        fillOpacity="1"
                      />
                    </svg>
                    <span
                      className="font-['Inter'] text-[13px] font-[400] leading-[20px] text-[#c4c9d1]"
                    >
                      libraries
                    </span>
                  </div>
                  <div
                    className="flex h-[22px] w-full flex-none items-center gap-1.5 rounded-[6px] px-1.5 hover:bg-[#1a1e23]"
                  >
                    <svg
                      className="font-['Inter'] text-[14px] font-[400] leading-[21px] text-[#7a828e]"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M8.3 6.3a1 1 0 0 1 1.4 0l5 5a1 1 0 0 1 0 1.4l-5 5a1 1 0 0 1-1.4-1.4l4.3-4.3-4.3-4.3a1 1 0 0 1 0-1.4"
                        fill="currentColor"
                        fillOpacity="1"
                      />
                    </svg>
                    <svg
                      className="font-['Inter'] text-[15px] font-[400] leading-[22.5px] text-[#7a828e]"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M10 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-8z"
                        fill="currentColor"
                        fillOpacity="1"
                      />
                    </svg>
                    <span
                      className="font-['Inter'] text-[13px] font-[400] leading-[20px] text-[#c4c9d1]"
                    >
                      logs
                    </span>
                  </div>
                  <div
                    className="flex h-[22px] w-full flex-none items-center gap-1.5 rounded-[6px] px-1.5 hover:bg-[#1a1e23]"
                  >
                    <svg
                      className="font-['Inter'] text-[14px] font-[400] leading-[21px] text-[#7a828e]"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M8.3 6.3a1 1 0 0 1 1.4 0l5 5a1 1 0 0 1 0 1.4l-5 5a1 1 0 0 1-1.4-1.4l4.3-4.3-4.3-4.3a1 1 0 0 1 0-1.4"
                        fill="currentColor"
                        fillOpacity="1"
                      />
                    </svg>
                    <svg
                      className="font-['Inter'] text-[15px] font-[400] leading-[22.5px] text-[#7a828e]"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M10 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-8z"
                        fill="currentColor"
                        fillOpacity="1"
                      />
                    </svg>
                    <span
                      className="grow shrink-0 basis-0 font-['Inter'] text-[13px] font-[400] leading-[20px] text-[#c4c9d1]"
                    >
                      mods
                    </span>
                    <span
                      className="font-['Inter'] text-[11px] font-[400] leading-[16px] text-[#7a828e]"
                    >
                      3
                    </span>
                  </div>
                  <div
                    className="flex h-[22px] w-full flex-none items-center gap-1.5 rounded-[6px] px-1.5 hover:bg-[#1a1e23]"
                  >
                    <svg
                      className="font-['Inter'] text-[14px] font-[400] leading-[21px] text-[#7a828e]"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M8.3 6.3a1 1 0 0 1 1.4 0l5 5a1 1 0 0 1 0 1.4l-5 5a1 1 0 0 1-1.4-1.4l4.3-4.3-4.3-4.3a1 1 0 0 1 0-1.4"
                        fill="currentColor"
                        fillOpacity="1"
                      />
                    </svg>
                    <svg
                      className="font-['Inter'] text-[15px] font-[400] leading-[22.5px] text-[#7a828e]"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M10 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-8z"
                        fill="currentColor"
                        fillOpacity="1"
                      />
                    </svg>
                    <span
                      className="font-['Inter'] text-[13px] font-[400] leading-[20px] text-[#c4c9d1]"
                    >
                      world
                    </span>
                  </div>
                  <div
                    className="flex h-[22px] w-full flex-none items-center gap-1.5 rounded-[6px] pl-[26px] pr-1.5 hover:bg-[#1a1e23]"
                  >
                    <svg
                      className="font-['Inter'] text-[14px] font-[400] leading-[21px] text-[#7a828e]"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zm-1 1.5L18.5 9H13z"
                        fill="currentColor"
                        fillOpacity="1"
                      />
                    </svg>
                    <span
                      className="font-['Inter'] text-[13px] font-[400] leading-[20px] text-[#aeb4bd]"
                    >
                      banned-players.json
                    </span>
                  </div>
                  <div
                    className="flex h-[22px] w-full flex-none items-center gap-1.5 rounded-[6px] pl-[26px] pr-1.5 hover:bg-[#1a1e23]"
                  >
                    <svg
                      className="font-['Inter'] text-[14px] font-[400] leading-[21px] text-[#7a828e]"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zm-1 1.5L18.5 9H13z"
                        fill="currentColor"
                        fillOpacity="1"
                      />
                    </svg>
                    <span
                      className="font-['Inter'] text-[13px] font-[400] leading-[20px] text-[#aeb4bd]"
                    >
                      eula.txt
                    </span>
                  </div>
                  <div
                    className="flex h-[22px] w-full flex-none items-center gap-1.5 rounded-[6px] pl-[26px] pr-1.5 hover:bg-[#1a1e23]"
                  >
                    <svg
                      className="font-['Inter'] text-[14px] font-[400] leading-[21px] text-[#7a828e]"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zm-1 1.5L18.5 9H13z"
                        fill="currentColor"
                        fillOpacity="1"
                      />
                    </svg>
                    <span
                      className="font-['Inter'] text-[13px] font-[400] leading-[20px] text-[#aeb4bd]"
                    >
                      ops.json
                    </span>
                  </div>
                  <div
                    className="flex h-[22px] w-full flex-none items-center gap-1.5 rounded-[6px] pl-[26px] pr-1.5 hover:bg-[#1a1e23]"
                  >
                    <svg
                      className="font-['Inter'] text-[14px] font-[400] leading-[21px] text-[#7a828e]"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zm-1 1.5L18.5 9H13z"
                        fill="currentColor"
                        fillOpacity="1"
                      />
                    </svg>
                    <span
                      className="font-['Inter'] text-[13px] font-[400] leading-[20px] text-[#aeb4bd]"
                    >
                      run.sh
                    </span>
                  </div>
                  <div
                    className="flex h-[22px] w-full flex-none items-center gap-1.5 rounded-[6px] border border-solid border-[#22c55e80] bg-[#123321] pl-[25px] pr-1.5"
                    data-layer-name="Selected File"
                  >
                    <svg
                      className="font-['Inter'] text-[14px] font-[400] leading-[21px] text-[#86efac]"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zm-1 1.5L18.5 9H13z"
                        fill="currentColor"
                        fillOpacity="1"
                      />
                    </svg>
                    <span
                      className="grow shrink-0 basis-0 font-['Inter'] text-[13px] font-[500] leading-[20px] text-[#ffffff]"
                    >
                      server.properties
                    </span>
                    <div
                      className="flex h-2 w-2 flex-none items-start rounded-[9999px] bg-[#22c55e]"
                    />
                  </div>
                  <div
                    className="flex h-[22px] w-full flex-none items-center gap-1.5 rounded-[6px] pl-[26px] pr-1.5 hover:bg-[#1a1e23]"
                  >
                    <svg
                      className="font-['Inter'] text-[14px] font-[400] leading-[21px] text-[#7a828e]"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zm-1 1.5L18.5 9H13z"
                        fill="currentColor"
                        fillOpacity="1"
                      />
                    </svg>
                    <span
                      className="font-['Inter'] text-[13px] font-[400] leading-[20px] text-[#aeb4bd]"
                    >
                      user_jvm_args.txt
                    </span>
                  </div>
                  <div
                    className="flex h-[22px] w-full flex-none items-center gap-1.5 rounded-[6px] pl-[26px] pr-1.5 hover:bg-[#1a1e23]"
                  >
                    <svg
                      className="font-['Inter'] text-[14px] font-[400] leading-[21px] text-[#7a828e]"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zm-1 1.5L18.5 9H13z"
                        fill="currentColor"
                        fillOpacity="1"
                      />
                    </svg>
                    <span
                      className="font-['Inter'] text-[13px] font-[400] leading-[20px] text-[#aeb4bd]"
                    >
                      whitelist.json
                    </span>
                  </div>
                </div>
              </aside>
              <div
                className="flex grow shrink-0 basis-0 flex-col items-start self-stretch overflow-hidden rounded-xl border border-solid border-[#232830] bg-[#0b0d10] mobile:h-[440px] mobile:flex-none"
                data-layer-name="Editor Pane"
              >
                <div
                  className="flex w-full items-end gap-px border-b border-solid border-[#232830] bg-[#101317] px-2 pt-1.5 overflow-auto relative"
                  data-layer-name="Open Tabs"
                >
                  <div
                    className="flex items-center gap-2 rounded-t-[8px] border-x border-t border-solid border-[#232830] bg-[#0b0d10] px-3 py-1.5"
                  >
                    <svg
                      className="font-['Inter'] text-[14px] font-[400] leading-[21px] text-[#86efac]"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zm-1 1.5L18.5 9H13z"
                        fill="currentColor"
                        fillOpacity="1"
                      />
                    </svg>
                    <span
                      className="font-['Inter'] text-[13px] font-[500] leading-[18px] text-[#ffffff]"
                    >
                      server.properties
                    </span>
                    <div
                      className="flex h-2 w-2 flex-none items-start rounded-[9999px] bg-[#22c55e]"
                    />
                  </div>
                  <div
                    className="flex items-center gap-2 rounded-t-[8px] border-x border-t border-solid border-transparent px-3 py-1.5 hover:bg-[#1a1e23]"
                  >
                    <svg
                      className="font-['Inter'] text-[14px] font-[400] leading-[21px] text-[#7a828e]"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zm-1 1.5L18.5 9H13z"
                        fill="currentColor"
                        fillOpacity="1"
                      />
                    </svg>
                    <span
                      className="font-['Inter'] text-[13px] font-[400] leading-[18px] text-[#7a828e]"
                    >
                      ops.json
                    </span>
                    <svg
                      className="font-['Inter'] text-[12px] font-[400] leading-[18px] text-[#7a828e]"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M6.7 5.3a1 1 0 0 0-1.4 1.4l5.3 5.3-5.3 5.3a1 1 0 1 0 1.4 1.4l5.3-5.3 5.3 5.3a1 1 0 0 0 1.4-1.4L13.4 12l5.3-5.3a1 1 0 0 0-1.4-1.4L12 10.6z"
                        fill="currentColor"
                        fillOpacity="1"
                      />
                    </svg>
                  </div>
                </div>
                <div
                  className="flex w-full items-center justify-between border-b border-solid border-[#1a1e23] px-4 py-2 gap-3"
                  data-layer-name="Breadcrumb Bar"
                >
                  <div
                    className="flex items-center gap-1.5"
                  >
                    <img
                      className="h-4 w-4 flex-none object-cover"
                      src="https://res.cloudinary.com/subframe/image/upload/v1793563275/uploads/47820/rytrk7wt47l4ydrbqt2c.png"
                    />
                    <span
                      className="font-['Inter'] text-[13px] font-[400] leading-[20px] text-[#7a828e]"
                    >
                      NeoForge SMP
                    </span>
                    <span
                      className="font-['Inter'] text-[13px] font-[400] leading-[20px] text-[#4b5563]"
                    >
                      /
                    </span>
                    <span
                      className="font-['Inter'] text-[13px] font-[500] leading-[20px] text-[#ffffff]"
                    >
                      server.properties
                    </span>
                  </div>
                  <div
                    className="flex items-center gap-2"
                  >
                    <div
                      className="flex items-center gap-1 rounded-[8px] border border-solid border-[#2a3038] bg-[#1a1e23] px-3 py-0.5 hover:border-[#3a414b]"
                    >
                      <span
                        className="font-['Inter'] text-[13px] font-[400] leading-[20px] text-[#aeb4bd]"
                      >
                        Revert
                      </span>
                      <RoundRefresh
                        className="font-['Inter'] text-[15px] font-[400] leading-[20px] text-[#aeb4bd]"
                      />
                    </div>
                    <div
                      className="flex items-center gap-1 rounded-[8px] border border-solid border-[#22c55e] bg-[#123321] px-3 py-0.5 hover:bg-[#164a2c]"
                    >
                      <span
                        className="font-['Inter'] text-[13px] font-[500] leading-[20px] text-[#ffffff]"
                      >
                        Save
                      </span>
                      <RoundSaveAll
                        className="font-['Inter'] text-[15px] font-[400] leading-[20px] text-[#ffffff]"
                      />
                    </div>
                  </div>
                </div>
                <div
                  className="flex w-full grow shrink-0 basis-0 flex-col items-start py-2 overflow-auto"
                  data-layer-name="Code"
                >
                  <div
                    className="flex h-5 w-full flex-none items-center"
                  >
                    <div
                      className="flex w-[3px] flex-none items-start self-stretch"
                    />
                    <span
                      className="w-10 flex-none font-['Inter'] text-[12px] font-[400] leading-[20px] text-[#4b5563] text-right pr-3"
                    >
                      1
                    </span>
                    <span
                      className="font-['Inter'] text-[13px] font-[400] leading-[20px] text-[#5f6773]"
                    >
                      #Minecraft server properties
                    </span>
                  </div>
                  <div
                    className="flex h-5 w-full flex-none items-center"
                  >
                    <div
                      className="flex w-[3px] flex-none items-start self-stretch"
                    />
                    <span
                      className="w-10 flex-none font-['Inter'] text-[12px] font-[400] leading-[20px] text-[#4b5563] text-right pr-3"
                    >
                      2
                    </span>
                    <span
                      className="font-['Inter'] text-[13px] font-[400] leading-[20px] text-[#5f6773]"
                    >
                      #Mon Nov 02 14:21:08 EST 2026
                    </span>
                  </div>
                  <div
                    className="flex h-5 w-full flex-none items-center"
                  >
                    <div
                      className="flex w-[3px] flex-none items-start self-stretch"
                    />
                    <span
                      className="w-10 flex-none font-['Inter'] text-[12px] font-[400] leading-[20px] text-[#4b5563] text-right pr-3"
                    >
                      3
                    </span>
                    <span
                      className="font-['Inter'] text-[13px] font-[400] leading-[20px] text-[#aeb4bd]"
                    >
                      allow-flight=
                    </span>
                    <span
                      className="font-['Inter'] text-[13px] font-[400] leading-[20px] text-[#ffffff]"
                    >
                      false
                    </span>
                  </div>
                  <div
                    className="flex h-5 w-full flex-none items-center"
                  >
                    <div
                      className="flex w-[3px] flex-none items-start self-stretch"
                    />
                    <span
                      className="w-10 flex-none font-['Inter'] text-[12px] font-[400] leading-[20px] text-[#4b5563] text-right pr-3"
                    >
                      4
                    </span>
                    <span
                      className="font-['Inter'] text-[13px] font-[400] leading-[20px] text-[#aeb4bd]"
                    >
                      difficulty=
                    </span>
                    <span
                      className="font-['Inter'] text-[13px] font-[400] leading-[20px] text-[#ffffff]"
                    >
                      normal
                    </span>
                  </div>
                  <div
                    className="flex h-5 w-full flex-none items-center"
                  >
                    <div
                      className="flex w-[3px] flex-none items-start self-stretch"
                    />
                    <span
                      className="w-10 flex-none font-['Inter'] text-[12px] font-[400] leading-[20px] text-[#4b5563] text-right pr-3"
                    >
                      5
                    </span>
                    <span
                      className="font-['Inter'] text-[13px] font-[400] leading-[20px] text-[#aeb4bd]"
                    >
                      enable-command-block=
                    </span>
                    <span
                      className="font-['Inter'] text-[13px] font-[400] leading-[20px] text-[#ffffff]"
                    >
                      false
                    </span>
                  </div>
                  <div
                    className="flex h-5 w-full flex-none items-center"
                  >
                    <div
                      className="flex w-[3px] flex-none items-start self-stretch"
                    />
                    <span
                      className="w-10 flex-none font-['Inter'] text-[12px] font-[400] leading-[20px] text-[#4b5563] text-right pr-3"
                    >
                      6
                    </span>
                    <span
                      className="font-['Inter'] text-[13px] font-[400] leading-[20px] text-[#aeb4bd]"
                    >
                      gamemode=
                    </span>
                    <span
                      className="font-['Inter'] text-[13px] font-[400] leading-[20px] text-[#ffffff]"
                    >
                      survival
                    </span>
                  </div>
                  <div
                    className="flex h-5 w-full flex-none items-center"
                  >
                    <div
                      className="flex w-[3px] flex-none items-start self-stretch"
                    />
                    <span
                      className="w-10 flex-none font-['Inter'] text-[12px] font-[400] leading-[20px] text-[#4b5563] text-right pr-3"
                    >
                      7
                    </span>
                    <span
                      className="font-['Inter'] text-[13px] font-[400] leading-[20px] text-[#aeb4bd]"
                    >
                      level-name=
                    </span>
                    <span
                      className="font-['Inter'] text-[13px] font-[400] leading-[20px] text-[#ffffff]"
                    >
                      world
                    </span>
                  </div>
                  <div
                    className="flex h-5 w-full flex-none items-center bg-[#22c55e0f]"
                    data-layer-name="Changed Line"
                  >
                    <div
                      className="flex w-[3px] flex-none items-start self-stretch bg-[#22c55e]"
                    />
                    <span
                      className="w-10 flex-none font-['Inter'] text-[12px] font-[400] leading-[20px] text-[#86efac] text-right pr-3"
                    >
                      8
                    </span>
                    <span
                      className="font-['Inter'] text-[13px] font-[400] leading-[20px] text-[#aeb4bd]"
                    >
                      max-players=
                    </span>
                    <span
                      className="font-['Inter'] text-[13px] font-[400] leading-[20px] text-[#ffffff]"
                    >
                      20
                    </span>
                  </div>
                  <div
                    className="flex h-5 w-full flex-none items-center"
                  >
                    <div
                      className="flex w-[3px] flex-none items-start self-stretch"
                    />
                    <span
                      className="w-10 flex-none font-['Inter'] text-[12px] font-[400] leading-[20px] text-[#4b5563] text-right pr-3"
                    >
                      9
                    </span>
                    <span
                      className="font-['Inter'] text-[13px] font-[400] leading-[20px] text-[#aeb4bd]"
                    >
                      motd=
                    </span>
                    <span
                      className="font-['Inter'] text-[13px] font-[400] leading-[20px] text-[#ffffff]"
                    >
                      NeoForge SMP - Create and Mekanism
                    </span>
                  </div>
                  <div
                    className="flex h-5 w-full flex-none items-center"
                  >
                    <div
                      className="flex w-[3px] flex-none items-start self-stretch"
                    />
                    <span
                      className="w-10 flex-none font-['Inter'] text-[12px] font-[400] leading-[20px] text-[#4b5563] text-right pr-3"
                    >
                      10
                    </span>
                    <span
                      className="font-['Inter'] text-[13px] font-[400] leading-[20px] text-[#aeb4bd]"
                    >
                      online-mode=
                    </span>
                    <span
                      className="font-['Inter'] text-[13px] font-[400] leading-[20px] text-[#ffffff]"
                    >
                      true
                    </span>
                  </div>
                  <div
                    className="flex h-5 w-full flex-none items-center"
                  >
                    <div
                      className="flex w-[3px] flex-none items-start self-stretch"
                    />
                    <span
                      className="w-10 flex-none font-['Inter'] text-[12px] font-[400] leading-[20px] text-[#4b5563] text-right pr-3"
                    >
                      11
                    </span>
                    <span
                      className="font-['Inter'] text-[13px] font-[400] leading-[20px] text-[#aeb4bd]"
                    >
                      pvp=
                    </span>
                    <span
                      className="font-['Inter'] text-[13px] font-[400] leading-[20px] text-[#ffffff]"
                    >
                      true
                    </span>
                  </div>
                  <div
                    className="flex h-5 w-full flex-none items-center"
                  >
                    <div
                      className="flex w-[3px] flex-none items-start self-stretch"
                    />
                    <span
                      className="w-10 flex-none font-['Inter'] text-[12px] font-[400] leading-[20px] text-[#4b5563] text-right pr-3"
                    >
                      12
                    </span>
                    <span
                      className="font-['Inter'] text-[13px] font-[400] leading-[20px] text-[#aeb4bd]"
                    >
                      server-port=
                    </span>
                    <span
                      className="font-['Inter'] text-[13px] font-[400] leading-[20px] text-[#ffffff]"
                    >
                      25565
                    </span>
                  </div>
                  <div
                    className="flex h-5 w-full flex-none items-center"
                  >
                    <div
                      className="flex w-[3px] flex-none items-start self-stretch"
                    />
                    <span
                      className="w-10 flex-none font-['Inter'] text-[12px] font-[400] leading-[20px] text-[#4b5563] text-right pr-3"
                    >
                      13
                    </span>
                    <span
                      className="font-['Inter'] text-[13px] font-[400] leading-[20px] text-[#aeb4bd]"
                    >
                      simulation-distance=
                    </span>
                    <span
                      className="font-['Inter'] text-[13px] font-[400] leading-[20px] text-[#ffffff]"
                    >
                      10
                    </span>
                  </div>
                  <div
                    className="flex h-5 w-full flex-none items-center"
                  >
                    <div
                      className="flex w-[3px] flex-none items-start self-stretch"
                    />
                    <span
                      className="w-10 flex-none font-['Inter'] text-[12px] font-[400] leading-[20px] text-[#4b5563] text-right pr-3"
                    >
                      14
                    </span>
                    <span
                      className="font-['Inter'] text-[13px] font-[400] leading-[20px] text-[#aeb4bd]"
                    >
                      spawn-protection=
                    </span>
                    <span
                      className="font-['Inter'] text-[13px] font-[400] leading-[20px] text-[#ffffff]"
                    >
                      16
                    </span>
                  </div>
                  <div
                    className="flex h-5 w-full flex-none items-center"
                  >
                    <div
                      className="flex w-[3px] flex-none items-start self-stretch"
                    />
                    <span
                      className="w-10 flex-none font-['Inter'] text-[12px] font-[400] leading-[20px] text-[#4b5563] text-right pr-3"
                    >
                      15
                    </span>
                    <span
                      className="font-['Inter'] text-[13px] font-[400] leading-[20px] text-[#aeb4bd]"
                    >
                      view-distance=
                    </span>
                    <span
                      className="font-['Inter'] text-[13px] font-[400] leading-[20px] text-[#ffffff]"
                    >
                      10
                    </span>
                  </div>
                  <div
                    className="flex h-5 w-full flex-none items-center"
                  >
                    <div
                      className="flex w-[3px] flex-none items-start self-stretch"
                    />
                    <span
                      className="w-10 flex-none font-['Inter'] text-[12px] font-[400] leading-[20px] text-[#4b5563] text-right pr-3"
                    >
                      16
                    </span>
                    <span
                      className="font-['Inter'] text-[13px] font-[400] leading-[20px] text-[#aeb4bd]"
                    >
                      white-list=
                    </span>
                    <span
                      className="font-['Inter'] text-[13px] font-[400] leading-[20px] text-[#ffffff]"
                    >
                      true
                    </span>
                  </div>
                </div>
                <div
                  className="flex w-full items-center gap-2 border-t border-solid border-[#1a1e23] bg-[#101317] px-4 py-1"
                  data-layer-name="Status Footer"
                >
                  <span
                    className="grow shrink-0 basis-0 font-['Inter'] text-[11px] font-[400] leading-[16px] text-[#7a828e]"
                  >
                    UTF-8 · Properties · 2.1 KB · Restart required for changes
                  </span>
                  <span
                    className="font-['Inter'] text-[11px] font-[400] leading-[16px] text-[#7a828e] mobile:hidden"
                  >
                    Ln 8, Col 15
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

export default Explorer;
