import Hammer from "@/ui/icons/Hammer";
import RoundCompass from "@/ui/icons/RoundCompass";
import RoundDelete from "@/ui/icons/RoundDelete";
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
import * as SubframeCore from "@subframe/core";
import type { PageProps } from "./types";

function PlayersGrid({ onNavigate }: PageProps) {
  return (
    <div className="flex h-[720px] w-320 flex-col items-start bg-[#0b0d10] font-['Inter']">
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
      <main className="flex w-full flex-col items-center justify-center px-6 py-12 mobile:px-4 mobile:pt-6">
        <div className="flex w-full flex-col items-center">
          <nav className="flex w-full items-end justify-center gap-1.5 px-6 mobile:flex-wrap mobile:px-0 mobile:pb-2">
            <div onClick={() => onNavigate("Connection")} className="flex items-center gap-1.5 rounded-t-xl bg-[#0f2418] px-[7px] py-1 hover:bg-[#123321] grow justify-center cursor-pointer">
              <div className="flex h-6 w-6 flex-none items-center justify-center rounded-[9999px] border border-solid border-[#4b5563] text-[12px] text-[#e5e7eb]">
                <RoundWifi className="font-['Inter'] text-[18px] font-[400] leading-[20px] text-[#e5e7eb]" />
              </div>
              <span className="font-['Inter'] text-[15px] font-[400] leading-[24px] text-[#e5e7eb]">
                Connection
              </span>
            </div>
            <div onClick={() => onNavigate("Server")} className="flex items-center gap-1.5 rounded-t-xl bg-[#0f2418] px-[7px] py-1 hover:bg-[#123321] grow justify-center cursor-pointer">
              <div className="flex h-6 w-6 flex-none items-center justify-center rounded-[9999px] border border-solid border-[#4b5563] text-[12px] text-[#e5e7eb]">
                <RoundServerX1 className="font-['Inter'] text-[18px] font-[400] leading-[20px] text-[#e5e7eb]" />
              </div>
              <span className="font-['Inter'] text-[15px] font-[400] leading-[24px] text-[#e5e7eb]">
                Server
              </span>
            </div>
            <div onClick={() => onNavigate("Mods")} className="flex items-center gap-1.5 rounded-t-xl bg-[#0f2418] px-[7px] py-1 hover:bg-[#123321] grow justify-center cursor-pointer">
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
            <div onClick={() => onNavigate("Files")} className="flex items-center gap-1.5 rounded-t-xl bg-[#0f2418] px-[7px] py-1 hover:bg-[#123321] grow justify-center cursor-pointer">
              <div className="flex h-6 w-6 flex-none items-center justify-center rounded-[9999px] border border-solid border-[#4b5563] text-[12px] text-[#e5e7eb]">
                <RoundList className="font-['Inter'] text-[18px] font-[400] leading-[20px] text-[#e5e7eb]" />
              </div>
              <span className="font-['Inter'] text-[15px] font-[400] leading-[24px] text-[#e5e7eb]">
                Files
              </span>
            </div>
            <div onClick={() => onNavigate("World")} className="flex items-center gap-1.5 rounded-t-xl bg-[#0f2418] px-[7px] py-1 hover:bg-[#123321] grow justify-center cursor-pointer">
              <div className="flex h-6 w-6 flex-none items-center justify-center rounded-[9999px] border border-solid border-[#4b5563] text-[12px] text-[#e5e7eb]">
                <RoundLayers className="font-['Inter'] text-[18px] font-[400] leading-[20px] text-[#e5e7eb]" />
              </div>
              <span className="font-['Inter'] text-[15px] font-[400] leading-[24px] text-[#e5e7eb]">
                World
              </span>
            </div>
            <div onClick={() => onNavigate("Players")} className="flex items-center gap-1.5 rounded-t-xl border-x border-t border-solid border-[#22c55e] bg-[#123321] px-[7px] py-1 shadow-[0px_12px_32px_-4px_#22c55e] grow justify-center cursor-pointer">
              <div className="flex h-6 w-6 flex-none items-center justify-center rounded-[9999px] border border-solid border-[#86efac] text-[12px] text-white">
                <RoundPeople className="font-['Inter'] text-[16px] font-[400] leading-[20px] text-[#e5e7eb]" />
              </div>
              <span className="font-['Inter'] text-[15px] font-[500] leading-[24px] text-[#ffffff]">
                Players
              </span>
            </div>
            <div onClick={() => onNavigate("Console")} className="flex items-center gap-1.5 rounded-t-xl bg-[#0f2418] px-[7px] py-1 hover:bg-[#123321] grow justify-center cursor-pointer">
              <div className="flex h-6 w-6 flex-none items-center justify-center rounded-[9999px] border border-solid border-[#4b5563] text-[12px] text-[#e5e7eb]">
                <RoundTerminal className="font-['Inter'] text-[16px] font-[400] leading-[20px] text-[#e5e7eb]" />
              </div>
              <span className="font-['Inter'] text-[15px] font-[400] leading-[24px] text-[#e5e7eb]">
                Console
              </span>
            </div>
            <div onClick={() => onNavigate("Backups")} className="flex items-center gap-1.5 rounded-t-xl bg-[#0f2418] px-[7px] py-1 hover:bg-[#123321] grow justify-center cursor-pointer">
              <div className="flex h-6 w-6 flex-none items-center justify-center rounded-[9999px] border border-solid border-[#4b5563] text-[12px] text-[#e5e7eb]">
                <RoundSaveAll className="font-['Inter'] text-[16px] font-[400] leading-[20px] text-[#e5e7eb]" />
              </div>
              <span className="font-['Inter'] text-[15px] font-[400] leading-[24px] text-[#e5e7eb]">
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
            <div className="flex h-[442px] w-full flex-none flex-col items-start gap-5 mobile:h-auto">
              <div className="flex w-full items-center gap-3 mobile:flex-wrap">
                <div className="flex h-10 w-80 flex-none items-center gap-2 rounded-[8px] border border-solid border-[#2a3038] bg-[#0b0d10] px-3 focus-within:border-[#22c55e] mobile:grow mobile:shrink-0 mobile:basis-0">
                  <RoundSearch className="font-['Inter'] text-[18px] font-[400] leading-[20px] text-[#7a828e]" />
                  <input
                    className="grow shrink-0 basis-0 self-stretch font-['Inter'] text-[14px] font-[400] leading-[21px] text-[#ffffff] outline-none placeholder:text-[#7a828e]"
                    placeholder="Search players by name"
                    value=""
                    type="search"
                  />
                </div>
                <div className="flex h-10 items-center gap-2 rounded-[8px] border border-solid border-[#2a3038] bg-[#1a1e23] px-3">
                  <div className="flex h-2 w-2 flex-none items-start rounded-[9999px] bg-[#22c55e]" />
                  <span className="font-['Inter'] text-[13px] font-[400] leading-[20px] text-[#aeb4bd]">
                    Online
                  </span>
                  <span className="font-['Inter'] text-[14px] font-[600] leading-[20px] text-[#ffffff]">
                    3 / 6
                  </span>
                </div>
                <div className="flex grow shrink-0 basis-0 items-center justify-end gap-2 mobile:justify-start">
                  <div className="flex items-center rounded-[9999px] border border-solid border-[#22c55e80] bg-[#123321] px-3 py-0.5">
                    <span className="font-['Inter'] text-[13px] font-[400] leading-[20px] text-[#ffffff]">
                      All
                    </span>
                  </div>
                  <div className="flex items-center rounded-[9999px] border border-solid border-[#2a3038] bg-[#1a1e23] px-3 py-0.5 hover:border-[#3a414b]">
                    <span className="font-['Inter'] text-[13px] font-[400] leading-[20px] text-[#aeb4bd]">
                      Online
                    </span>
                  </div>
                  <div className="flex items-center rounded-[9999px] border border-solid border-[#2a3038] bg-[#1a1e23] px-3 py-0.5 hover:border-[#3a414b]">
                    <span className="font-['Inter'] text-[13px] font-[400] leading-[20px] text-[#aeb4bd]">
                      Offline
                    </span>
                  </div>
                  <div className="flex items-center rounded-[9999px] border border-solid border-[#2a3038] bg-[#1a1e23] px-3 py-0.5 hover:border-[#3a414b]">
                    <span className="font-['Inter'] text-[13px] font-[400] leading-[20px] text-[#aeb4bd]">
                      Banned
                    </span>
                  </div>
                </div>
              </div>
              <div className="w-full grow shrink-0 basis-0 items-start gap-3 pt-1 grid grid-cols-3 content-start overflow-auto mobile:grid mobile:content-start mobile:overflow-auto mobile:grid-cols-1">
                <div className="flex flex-col items-start gap-4 rounded-xl border border-solid border-[#232830] bg-[#1a1e23] px-4 py-4 hover:border-[#3a414b]">
                  <div className="flex w-full items-center gap-3">
                    <img
                      className="h-14 w-14 flex-none rounded-[6px] object-contain"
                      src="https://api.mcheads.org/head/CanBeGold/96"
                    />
                    <div className="flex grow shrink-0 basis-0 flex-col items-start gap-0.5">
                      <div className="flex w-full items-center gap-2">
                        <span className="whitespace-nowrap font-['Inter'] text-[15px] font-[600] leading-[20px] text-[#ffffff] truncate">
                          CanBeGold
                        </span>
                        <div className="flex items-center gap-0.5 rounded-[9999px] border border-solid border-[#4b5563] bg-[#232830] pl-1 pr-2">
                          <RoundStarFilled className="font-['Inter'] text-[12px] font-[400] leading-[18px] text-[#e5e7eb]" />
                          <span className="font-['Inter'] text-[11px] font-[600] leading-[18px] text-[#e5e7eb]">
                            OP
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <div className="flex h-2 w-2 flex-none items-start rounded-[9999px] bg-[#22c55e]" />
                        <span className="font-['Inter'] text-[12px] font-[500] leading-[16px] text-[#86efac]">
                          Online · 2h 14m
                        </span>
                      </div>
                      <span className="font-['Inter'] text-[12px] font-[400] leading-[16px] text-[#7a828e]">
                        Playtime 142h · Joined Mar 2025
                      </span>
                    </div>
                  </div>
                  <div className="flex w-full items-center gap-1.5 border-t border-solid border-[#232830] pt-3">
                    <SubframeCore.Tooltip.Provider>
                      <SubframeCore.Tooltip.Root>
                        <SubframeCore.Tooltip.Trigger asChild={true}>
                          <div className="flex h-8 w-8 flex-none items-center justify-center rounded-[8px] border border-solid border-[#2a3038] bg-[#1a1e23] hover:border-[#3a414b]">
                            <RoundSearch className="font-['Inter'] text-[18px] font-[400] leading-[20px] text-[#aeb4bd]" />
                          </div>
                        </SubframeCore.Tooltip.Trigger>
                        <SubframeCore.Tooltip.Portal>
                          <SubframeCore.Tooltip.Content
                            side="top"
                            align="center"
                            sideOffset={6}
                            asChild={true}
                          >
                            <div className="flex items-center rounded-[6px] border border-solid border-[#2a3038] bg-[#0b0d10] px-2 py-1 shadow-[0px_10px_15px_-3px_#0000001a,0px_4px_6px_-4px_#0000001a]">
                              <span className="whitespace-nowrap font-['Inter'] text-[12px] font-[500] leading-[16px] text-[#ffffff]">
                                Inspect data
                              </span>
                            </div>
                          </SubframeCore.Tooltip.Content>
                        </SubframeCore.Tooltip.Portal>
                      </SubframeCore.Tooltip.Root>
                    </SubframeCore.Tooltip.Provider>
                    <SubframeCore.Tooltip.Provider>
                      <SubframeCore.Tooltip.Root>
                        <SubframeCore.Tooltip.Trigger asChild={true}>
                          <div className="flex h-8 w-8 flex-none items-center justify-center rounded-[8px] border border-solid border-[#2a3038] bg-[#1a1e23] hover:border-[#3a414b]">
                            <Versions className="font-['Inter'] text-[18px] font-[400] leading-[20px] text-[#aeb4bd]" />
                          </div>
                        </SubframeCore.Tooltip.Trigger>
                        <SubframeCore.Tooltip.Portal>
                          <SubframeCore.Tooltip.Content
                            side="top"
                            align="center"
                            sideOffset={6}
                            asChild={true}
                          >
                            <div className="flex items-center rounded-[6px] border border-solid border-[#2a3038] bg-[#0b0d10] px-2 py-1 shadow-[0px_10px_15px_-3px_#0000001a,0px_4px_6px_-4px_#0000001a]">
                              <span className="whitespace-nowrap font-['Inter'] text-[12px] font-[500] leading-[16px] text-[#ffffff]">
                                Restore from backup
                              </span>
                            </div>
                          </SubframeCore.Tooltip.Content>
                        </SubframeCore.Tooltip.Portal>
                      </SubframeCore.Tooltip.Root>
                    </SubframeCore.Tooltip.Provider>
                    <SubframeCore.Tooltip.Provider>
                      <SubframeCore.Tooltip.Root>
                        <SubframeCore.Tooltip.Trigger asChild={true}>
                          <div className="flex h-8 w-8 flex-none items-center justify-center rounded-[8px] border border-solid border-[#f59e0b4d] bg-[#241a0a] hover:border-[#f59e0b]">
                            <svg
                              className="font-['Inter'] text-[18px] font-[400] leading-[20px] text-[#fbbf24]"
                              width="1em"
                              height="1em"
                              viewBox="0 0 24 24"
                            >
                              <path
                                d="M5 5h6a1 1 0 0 0 0-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6a1 1 0 0 0 0-2H5zm15.65 6.65-2.79-2.79a.5.5 0 0 0-.86.35V11h-7a1 1 0 0 0 0 2h7v1.79c0 .45.54.67.85.35l2.79-2.79a.5.5 0 0 0 .01-.7"
                                fill="currentColor"
                                fillOpacity="1"
                              />
                            </svg>
                          </div>
                        </SubframeCore.Tooltip.Trigger>
                        <SubframeCore.Tooltip.Portal>
                          <SubframeCore.Tooltip.Content
                            side="top"
                            align="center"
                            sideOffset={6}
                            asChild={true}
                          >
                            <div className="flex items-center rounded-[6px] border border-solid border-[#2a3038] bg-[#0b0d10] px-2 py-1 shadow-[0px_10px_15px_-3px_#0000001a,0px_4px_6px_-4px_#0000001a]">
                              <span className="whitespace-nowrap font-['Inter'] text-[12px] font-[500] leading-[16px] text-[#ffffff]">
                                Kick
                              </span>
                            </div>
                          </SubframeCore.Tooltip.Content>
                        </SubframeCore.Tooltip.Portal>
                      </SubframeCore.Tooltip.Root>
                    </SubframeCore.Tooltip.Provider>
                    <SubframeCore.Tooltip.Provider>
                      <SubframeCore.Tooltip.Root>
                        <SubframeCore.Tooltip.Trigger asChild={true}>
                          <div className="flex h-8 w-8 flex-none items-center justify-center rounded-[8px] border border-solid border-[#f59e0b4d] bg-[#241a0a] hover:border-[#f59e0b]">
                            <svg
                              className="font-['Inter'] text-[18px] font-[400] leading-[20px] text-[#fbbf24]"
                              width="1em"
                              height="1em"
                              viewBox="0 0 24 24"
                            >
                              <path
                                d="M6 2a1 1 0 0 0-1 1v3.17c0 .53.21 1.04.59 1.42l3.58 3.61a1 1 0 0 1 0 1.41L5.59 16.2A2 2 0 0 0 5 17.62V21a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-3.38c0-.53-.21-1.04-.59-1.41l-3.58-3.6a1 1 0 0 1 0-1.41l3.58-3.6A2 2 0 0 0 19 6.17V3a1 1 0 0 0-1-1zm11 15.62V20H7v-2.38l5-5.02zm-5-6.22L7 6.38V4h10v2.38z"
                                fill="currentColor"
                                fillOpacity="1"
                              />
                            </svg>
                          </div>
                        </SubframeCore.Tooltip.Trigger>
                        <SubframeCore.Tooltip.Portal>
                          <SubframeCore.Tooltip.Content
                            side="top"
                            align="center"
                            sideOffset={6}
                            asChild={true}
                          >
                            <div className="flex items-center rounded-[6px] border border-solid border-[#2a3038] bg-[#0b0d10] px-2 py-1 shadow-[0px_10px_15px_-3px_#0000001a,0px_4px_6px_-4px_#0000001a]">
                              <span className="whitespace-nowrap font-['Inter'] text-[12px] font-[500] leading-[16px] text-[#ffffff]">
                                Timeout
                              </span>
                            </div>
                          </SubframeCore.Tooltip.Content>
                        </SubframeCore.Tooltip.Portal>
                      </SubframeCore.Tooltip.Root>
                    </SubframeCore.Tooltip.Provider>
                    <SubframeCore.Tooltip.Provider>
                      <SubframeCore.Tooltip.Root>
                        <SubframeCore.Tooltip.Trigger asChild={true}>
                          <div className="flex h-8 w-8 flex-none items-center justify-center rounded-[8px] border border-solid border-[#ef44444d] bg-[#261111] hover:border-[#ef4444]">
                            <Hammer className="font-['Inter'] text-[18px] font-[400] leading-[20px] text-[#f87171]" />
                          </div>
                        </SubframeCore.Tooltip.Trigger>
                        <SubframeCore.Tooltip.Portal>
                          <SubframeCore.Tooltip.Content
                            side="top"
                            align="center"
                            sideOffset={6}
                            asChild={true}
                          >
                            <div className="flex items-center rounded-[6px] border border-solid border-[#2a3038] bg-[#0b0d10] px-2 py-1 shadow-[0px_10px_15px_-3px_#0000001a,0px_4px_6px_-4px_#0000001a]">
                              <span className="whitespace-nowrap font-['Inter'] text-[12px] font-[500] leading-[16px] text-[#ffffff]">
                                Ban
                              </span>
                            </div>
                          </SubframeCore.Tooltip.Content>
                        </SubframeCore.Tooltip.Portal>
                      </SubframeCore.Tooltip.Root>
                    </SubframeCore.Tooltip.Provider>
                    <div className="flex h-6 w-px flex-none items-start bg-[#2a3038] mx-1" />
                    <SubframeCore.Tooltip.Provider>
                      <SubframeCore.Tooltip.Root>
                        <SubframeCore.Tooltip.Trigger asChild={true}>
                          <div className="flex h-8 w-8 flex-none items-center justify-center rounded-[8px] border border-solid border-[#ef44444d] bg-[#261111] hover:border-[#ef4444]">
                            <RoundDelete className="font-['Inter'] text-[20px] font-[400] leading-[20px] text-[#f87171]" />
                          </div>
                        </SubframeCore.Tooltip.Trigger>
                        <SubframeCore.Tooltip.Portal>
                          <SubframeCore.Tooltip.Content
                            side="top"
                            align="center"
                            sideOffset={6}
                            asChild={true}
                          >
                            <div className="flex items-center rounded-[6px] border border-solid border-[#2a3038] bg-[#0b0d10] px-2 py-1 shadow-[0px_10px_15px_-3px_#0000001a,0px_4px_6px_-4px_#0000001a]">
                              <span className="whitespace-nowrap font-['Inter'] text-[12px] font-[500] leading-[16px] text-[#ffffff]">
                                Remove all data
                              </span>
                            </div>
                          </SubframeCore.Tooltip.Content>
                        </SubframeCore.Tooltip.Portal>
                      </SubframeCore.Tooltip.Root>
                    </SubframeCore.Tooltip.Provider>
                  </div>
                </div>
                <div className="flex flex-col items-start gap-4 rounded-xl border border-solid border-[#3a414b] bg-[#1f242a] px-4 py-4">
                  <div className="flex w-full items-center gap-3">
                    <div className="flex h-14 w-14 flex-none items-start overflow-hidden rounded-[8px] border border-solid border-[#2a3038] bg-[#f0c8a0] relative">
                      <div className="flex h-3.5 w-14 flex-none items-start bg-[#d9772b] absolute left-[0px] top-[0px]" />
                      <div className="flex h-[7px] w-[7px] flex-none items-start bg-[#d9772b] absolute left-[0px] top-[14px]" />
                      <div className="flex h-[7px] w-[7px] flex-none items-start bg-[#d9772b] absolute left-[49px] top-[14px]" />
                      <div className="flex h-[7px] w-[7px] flex-none items-start bg-[#ffffff] absolute left-[7px] top-[28px]" />
                      <div className="flex h-[7px] w-[7px] flex-none items-start bg-[#3a8a3a] absolute left-[14px] top-[28px]" />
                      <div className="flex h-[7px] w-[7px] flex-none items-start bg-[#3a8a3a] absolute left-[35px] top-[28px]" />
                      <div className="flex h-[7px] w-[7px] flex-none items-start bg-[#ffffff] absolute left-[42px] top-[28px]" />
                      <div className="flex h-[7px] w-3.5 flex-none items-start bg-[#c98a62] absolute left-[21px] top-[35px]" />
                      <div className="flex h-[7px] w-7 flex-none items-start bg-[#c98a62] absolute left-[14px] top-[42px]" />
                    </div>
                    <div className="flex grow shrink-0 basis-0 flex-col items-start gap-0.5">
                      <div className="flex w-full items-center gap-2">
                        <span className="whitespace-nowrap font-['Inter'] text-[15px] font-[600] leading-[20px] text-[#ffffff] truncate">
                          Alex_Miner
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <div className="flex h-2 w-2 flex-none items-start rounded-[9999px] bg-[#22c55e]" />
                        <span className="font-['Inter'] text-[12px] font-[500] leading-[16px] text-[#86efac]">
                          Online · 47m
                        </span>
                      </div>
                      <span className="font-['Inter'] text-[12px] font-[400] leading-[16px] text-[#7a828e]">
                        Playtime 198h · Joined Apr 2025
                      </span>
                    </div>
                  </div>
                  <div className="flex w-full items-center gap-1.5 border-t border-solid border-[#232830] pt-3">
                    <SubframeCore.Tooltip.Provider>
                      <SubframeCore.Tooltip.Root>
                        <SubframeCore.Tooltip.Trigger asChild={true}>
                          <div className="flex h-8 w-8 flex-none items-center justify-center rounded-[8px] border border-solid border-[#2a3038] bg-[#1a1e23] hover:border-[#3a414b]">
                            <RoundSearch className="font-['Inter'] text-[18px] font-[400] leading-[20px] text-[#aeb4bd]" />
                          </div>
                        </SubframeCore.Tooltip.Trigger>
                        <SubframeCore.Tooltip.Portal>
                          <SubframeCore.Tooltip.Content
                            side="top"
                            align="center"
                            sideOffset={6}
                            asChild={true}
                          >
                            <div className="flex items-center rounded-[6px] border border-solid border-[#2a3038] bg-[#0b0d10] px-2 py-1 shadow-[0px_10px_15px_-3px_#0000001a,0px_4px_6px_-4px_#0000001a]">
                              <span className="whitespace-nowrap font-['Inter'] text-[12px] font-[500] leading-[16px] text-[#ffffff]">
                                Inspect data
                              </span>
                            </div>
                          </SubframeCore.Tooltip.Content>
                        </SubframeCore.Tooltip.Portal>
                      </SubframeCore.Tooltip.Root>
                    </SubframeCore.Tooltip.Provider>
                    <SubframeCore.Tooltip.Provider>
                      <SubframeCore.Tooltip.Root>
                        <SubframeCore.Tooltip.Trigger asChild={true}>
                          <div className="flex h-8 w-8 flex-none items-center justify-center rounded-[8px] border border-solid border-[#2a3038] bg-[#1a1e23] hover:border-[#3a414b]">
                            <Versions className="font-['Inter'] text-[18px] font-[400] leading-[20px] text-[#aeb4bd]" />
                          </div>
                        </SubframeCore.Tooltip.Trigger>
                        <SubframeCore.Tooltip.Portal>
                          <SubframeCore.Tooltip.Content
                            side="top"
                            align="center"
                            sideOffset={6}
                            asChild={true}
                          >
                            <div className="flex items-center rounded-[6px] border border-solid border-[#2a3038] bg-[#0b0d10] px-2 py-1 shadow-[0px_10px_15px_-3px_#0000001a,0px_4px_6px_-4px_#0000001a]">
                              <span className="whitespace-nowrap font-['Inter'] text-[12px] font-[500] leading-[16px] text-[#ffffff]">
                                Restore from backup
                              </span>
                            </div>
                          </SubframeCore.Tooltip.Content>
                        </SubframeCore.Tooltip.Portal>
                      </SubframeCore.Tooltip.Root>
                    </SubframeCore.Tooltip.Provider>
                    <SubframeCore.Tooltip.Provider>
                      <SubframeCore.Tooltip.Root>
                        <SubframeCore.Tooltip.Trigger asChild={true}>
                          <div className="flex h-8 w-8 flex-none items-center justify-center rounded-[8px] border border-solid border-[#f59e0b4d] bg-[#241a0a] hover:border-[#f59e0b]">
                            <svg
                              className="font-['Inter'] text-[18px] font-[400] leading-[20px] text-[#fbbf24]"
                              width="1em"
                              height="1em"
                              viewBox="0 0 24 24"
                            >
                              <path
                                d="M5 5h6a1 1 0 0 0 0-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6a1 1 0 0 0 0-2H5zm15.65 6.65-2.79-2.79a.5.5 0 0 0-.86.35V11h-7a1 1 0 0 0 0 2h7v1.79c0 .45.54.67.85.35l2.79-2.79a.5.5 0 0 0 .01-.7"
                                fill="currentColor"
                                fillOpacity="1"
                              />
                            </svg>
                          </div>
                        </SubframeCore.Tooltip.Trigger>
                        <SubframeCore.Tooltip.Portal>
                          <SubframeCore.Tooltip.Content
                            side="top"
                            align="center"
                            sideOffset={6}
                            asChild={true}
                          >
                            <div className="flex items-center rounded-[6px] border border-solid border-[#2a3038] bg-[#0b0d10] px-2 py-1 shadow-[0px_10px_15px_-3px_#0000001a,0px_4px_6px_-4px_#0000001a]">
                              <span className="whitespace-nowrap font-['Inter'] text-[12px] font-[500] leading-[16px] text-[#ffffff]">
                                Kick
                              </span>
                            </div>
                          </SubframeCore.Tooltip.Content>
                        </SubframeCore.Tooltip.Portal>
                      </SubframeCore.Tooltip.Root>
                    </SubframeCore.Tooltip.Provider>
                    <div className="flex flex-col items-center relative">
                      <div className="flex flex-col items-center pb-1.5 absolute bottom-full left-1/2 -translate-x-1/2">
                        <div className="flex items-center rounded-[6px] border border-solid border-[#2a3038] bg-[#0b0d10] px-2 py-1 shadow-[0px_10px_15px_-3px_#0000001a,0px_4px_6px_-4px_#0000001a]">
                          <span className="whitespace-nowrap font-['Inter'] text-[12px] font-[500] leading-[16px] text-[#ffffff]">
                            Timeout
                          </span>
                        </div>
                      </div>
                      <div className="flex h-8 w-8 flex-none items-center justify-center rounded-[8px] border border-solid border-[#f59e0b] bg-[#33240c]">
                        <svg
                          className="font-['Inter'] text-[18px] font-[400] leading-[20px] text-[#fbbf24]"
                          width="1em"
                          height="1em"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M6 2a1 1 0 0 0-1 1v3.17c0 .53.21 1.04.59 1.42l3.58 3.61a1 1 0 0 1 0 1.41L5.59 16.2A2 2 0 0 0 5 17.62V21a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-3.38c0-.53-.21-1.04-.59-1.41l-3.58-3.6a1 1 0 0 1 0-1.41l3.58-3.6A2 2 0 0 0 19 6.17V3a1 1 0 0 0-1-1zm11 15.62V20H7v-2.38l5-5.02zm-5-6.22L7 6.38V4h10v2.38z"
                            fill="currentColor"
                            fillOpacity="1"
                          />
                        </svg>
                      </div>
                    </div>
                    <SubframeCore.Tooltip.Provider>
                      <SubframeCore.Tooltip.Root>
                        <SubframeCore.Tooltip.Trigger asChild={true}>
                          <div className="flex h-8 w-8 flex-none items-center justify-center rounded-[8px] border border-solid border-[#ef44444d] bg-[#261111] hover:border-[#ef4444]">
                            <Hammer className="font-['Inter'] text-[18px] font-[400] leading-[20px] text-[#f87171]" />
                          </div>
                        </SubframeCore.Tooltip.Trigger>
                        <SubframeCore.Tooltip.Portal>
                          <SubframeCore.Tooltip.Content
                            side="top"
                            align="center"
                            sideOffset={6}
                            asChild={true}
                          >
                            <div className="flex items-center rounded-[6px] border border-solid border-[#2a3038] bg-[#0b0d10] px-2 py-1 shadow-[0px_10px_15px_-3px_#0000001a,0px_4px_6px_-4px_#0000001a]">
                              <span className="whitespace-nowrap font-['Inter'] text-[12px] font-[500] leading-[16px] text-[#ffffff]">
                                Ban
                              </span>
                            </div>
                          </SubframeCore.Tooltip.Content>
                        </SubframeCore.Tooltip.Portal>
                      </SubframeCore.Tooltip.Root>
                    </SubframeCore.Tooltip.Provider>
                    <div className="flex h-6 w-px flex-none items-start bg-[#2a3038] mx-1" />
                    <SubframeCore.Tooltip.Provider>
                      <SubframeCore.Tooltip.Root>
                        <SubframeCore.Tooltip.Trigger asChild={true}>
                          <div className="flex h-8 w-8 flex-none items-center justify-center rounded-[8px] border border-solid border-[#ef44444d] bg-[#261111] hover:border-[#ef4444]">
                            <RoundDelete className="font-['Inter'] text-[20px] font-[400] leading-[20px] text-[#f87171]" />
                          </div>
                        </SubframeCore.Tooltip.Trigger>
                        <SubframeCore.Tooltip.Portal>
                          <SubframeCore.Tooltip.Content
                            side="top"
                            align="center"
                            sideOffset={6}
                            asChild={true}
                          >
                            <div className="flex items-center rounded-[6px] border border-solid border-[#2a3038] bg-[#0b0d10] px-2 py-1 shadow-[0px_10px_15px_-3px_#0000001a,0px_4px_6px_-4px_#0000001a]">
                              <span className="whitespace-nowrap font-['Inter'] text-[12px] font-[500] leading-[16px] text-[#ffffff]">
                                Remove all data
                              </span>
                            </div>
                          </SubframeCore.Tooltip.Content>
                        </SubframeCore.Tooltip.Portal>
                      </SubframeCore.Tooltip.Root>
                    </SubframeCore.Tooltip.Provider>
                  </div>
                </div>
                <div className="flex flex-col items-start gap-4 rounded-xl border border-solid border-[#232830] bg-[#1a1e23] px-4 py-4 hover:border-[#3a414b]">
                  <div className="flex w-full items-center gap-3">
                    <div className="flex h-14 w-14 flex-none items-start overflow-hidden rounded-[8px] border border-solid border-[#2a3038] bg-[#4caf50] relative">
                      <div className="flex h-3.5 w-3.5 flex-none items-start bg-[#0b0d10] absolute left-[7px] top-[14px]" />
                      <div className="flex h-3.5 w-3.5 flex-none items-start bg-[#0b0d10] absolute left-[35px] top-[14px]" />
                      <div className="flex h-3.5 w-3.5 flex-none items-start bg-[#0b0d10] absolute left-[21px] top-[28px]" />
                      <div className="flex h-[21px] w-[7px] flex-none items-start bg-[#0b0d10] absolute left-[14px] top-[35px]" />
                      <div className="flex h-[21px] w-[7px] flex-none items-start bg-[#0b0d10] absolute left-[35px] top-[35px]" />
                      <div className="flex h-[7px] w-3.5 flex-none items-start bg-[#3d8c40] absolute left-[0px] top-[0px]" />
                      <div className="flex h-[7px] w-3.5 flex-none items-start bg-[#6cc070] absolute left-[35px] top-[7px]" />
                      <div className="flex h-[7px] w-3.5 flex-none items-start bg-[#3d8c40] absolute left-[21px] top-[49px]" />
                    </div>
                    <div className="flex grow shrink-0 basis-0 flex-col items-start gap-0.5">
                      <div className="flex w-full items-center gap-2">
                        <span className="whitespace-nowrap font-['Inter'] text-[15px] font-[600] leading-[20px] text-[#ffffff] truncate">
                          xX_Creeper_Xx
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <div className="flex h-2 w-2 flex-none items-start rounded-[9999px] bg-[#22c55e]" />
                        <span className="font-['Inter'] text-[12px] font-[500] leading-[16px] text-[#86efac]">
                          Online · 5h 02m
                        </span>
                      </div>
                      <span className="font-['Inter'] text-[12px] font-[400] leading-[16px] text-[#7a828e]">
                        Playtime 87h · Joined Aug 2025
                      </span>
                    </div>
                  </div>
                  <div className="flex w-full items-center gap-1.5 border-t border-solid border-[#232830] pt-3">
                    <SubframeCore.Tooltip.Provider>
                      <SubframeCore.Tooltip.Root>
                        <SubframeCore.Tooltip.Trigger asChild={true}>
                          <div className="flex h-8 w-8 flex-none items-center justify-center rounded-[8px] border border-solid border-[#2a3038] bg-[#1a1e23] hover:border-[#3a414b]">
                            <RoundSearch className="font-['Inter'] text-[18px] font-[400] leading-[20px] text-[#aeb4bd]" />
                          </div>
                        </SubframeCore.Tooltip.Trigger>
                        <SubframeCore.Tooltip.Portal>
                          <SubframeCore.Tooltip.Content
                            side="top"
                            align="center"
                            sideOffset={6}
                            asChild={true}
                          >
                            <div className="flex items-center rounded-[6px] border border-solid border-[#2a3038] bg-[#0b0d10] px-2 py-1 shadow-[0px_10px_15px_-3px_#0000001a,0px_4px_6px_-4px_#0000001a]">
                              <span className="whitespace-nowrap font-['Inter'] text-[12px] font-[500] leading-[16px] text-[#ffffff]">
                                Inspect data
                              </span>
                            </div>
                          </SubframeCore.Tooltip.Content>
                        </SubframeCore.Tooltip.Portal>
                      </SubframeCore.Tooltip.Root>
                    </SubframeCore.Tooltip.Provider>
                    <SubframeCore.Tooltip.Provider>
                      <SubframeCore.Tooltip.Root>
                        <SubframeCore.Tooltip.Trigger asChild={true}>
                          <div className="flex h-8 w-8 flex-none items-center justify-center rounded-[8px] border border-solid border-[#2a3038] bg-[#1a1e23] hover:border-[#3a414b]">
                            <Versions className="font-['Inter'] text-[18px] font-[400] leading-[20px] text-[#aeb4bd]" />
                          </div>
                        </SubframeCore.Tooltip.Trigger>
                        <SubframeCore.Tooltip.Portal>
                          <SubframeCore.Tooltip.Content
                            side="top"
                            align="center"
                            sideOffset={6}
                            asChild={true}
                          >
                            <div className="flex items-center rounded-[6px] border border-solid border-[#2a3038] bg-[#0b0d10] px-2 py-1 shadow-[0px_10px_15px_-3px_#0000001a,0px_4px_6px_-4px_#0000001a]">
                              <span className="whitespace-nowrap font-['Inter'] text-[12px] font-[500] leading-[16px] text-[#ffffff]">
                                Restore from backup
                              </span>
                            </div>
                          </SubframeCore.Tooltip.Content>
                        </SubframeCore.Tooltip.Portal>
                      </SubframeCore.Tooltip.Root>
                    </SubframeCore.Tooltip.Provider>
                    <SubframeCore.Tooltip.Provider>
                      <SubframeCore.Tooltip.Root>
                        <SubframeCore.Tooltip.Trigger asChild={true}>
                          <div className="flex h-8 w-8 flex-none items-center justify-center rounded-[8px] border border-solid border-[#f59e0b4d] bg-[#241a0a] hover:border-[#f59e0b]">
                            <svg
                              className="font-['Inter'] text-[18px] font-[400] leading-[20px] text-[#fbbf24]"
                              width="1em"
                              height="1em"
                              viewBox="0 0 24 24"
                            >
                              <path
                                d="M5 5h6a1 1 0 0 0 0-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6a1 1 0 0 0 0-2H5zm15.65 6.65-2.79-2.79a.5.5 0 0 0-.86.35V11h-7a1 1 0 0 0 0 2h7v1.79c0 .45.54.67.85.35l2.79-2.79a.5.5 0 0 0 .01-.7"
                                fill="currentColor"
                                fillOpacity="1"
                              />
                            </svg>
                          </div>
                        </SubframeCore.Tooltip.Trigger>
                        <SubframeCore.Tooltip.Portal>
                          <SubframeCore.Tooltip.Content
                            side="top"
                            align="center"
                            sideOffset={6}
                            asChild={true}
                          >
                            <div className="flex items-center rounded-[6px] border border-solid border-[#2a3038] bg-[#0b0d10] px-2 py-1 shadow-[0px_10px_15px_-3px_#0000001a,0px_4px_6px_-4px_#0000001a]">
                              <span className="whitespace-nowrap font-['Inter'] text-[12px] font-[500] leading-[16px] text-[#ffffff]">
                                Kick
                              </span>
                            </div>
                          </SubframeCore.Tooltip.Content>
                        </SubframeCore.Tooltip.Portal>
                      </SubframeCore.Tooltip.Root>
                    </SubframeCore.Tooltip.Provider>
                    <SubframeCore.Tooltip.Provider>
                      <SubframeCore.Tooltip.Root>
                        <SubframeCore.Tooltip.Trigger asChild={true}>
                          <div className="flex h-8 w-8 flex-none items-center justify-center rounded-[8px] border border-solid border-[#f59e0b4d] bg-[#241a0a] hover:border-[#f59e0b]">
                            <svg
                              className="font-['Inter'] text-[18px] font-[400] leading-[20px] text-[#fbbf24]"
                              width="1em"
                              height="1em"
                              viewBox="0 0 24 24"
                            >
                              <path
                                d="M6 2a1 1 0 0 0-1 1v3.17c0 .53.21 1.04.59 1.42l3.58 3.61a1 1 0 0 1 0 1.41L5.59 16.2A2 2 0 0 0 5 17.62V21a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-3.38c0-.53-.21-1.04-.59-1.41l-3.58-3.6a1 1 0 0 1 0-1.41l3.58-3.6A2 2 0 0 0 19 6.17V3a1 1 0 0 0-1-1zm11 15.62V20H7v-2.38l5-5.02zm-5-6.22L7 6.38V4h10v2.38z"
                                fill="currentColor"
                                fillOpacity="1"
                              />
                            </svg>
                          </div>
                        </SubframeCore.Tooltip.Trigger>
                        <SubframeCore.Tooltip.Portal>
                          <SubframeCore.Tooltip.Content
                            side="top"
                            align="center"
                            sideOffset={6}
                            asChild={true}
                          >
                            <div className="flex items-center rounded-[6px] border border-solid border-[#2a3038] bg-[#0b0d10] px-2 py-1 shadow-[0px_10px_15px_-3px_#0000001a,0px_4px_6px_-4px_#0000001a]">
                              <span className="whitespace-nowrap font-['Inter'] text-[12px] font-[500] leading-[16px] text-[#ffffff]">
                                Timeout
                              </span>
                            </div>
                          </SubframeCore.Tooltip.Content>
                        </SubframeCore.Tooltip.Portal>
                      </SubframeCore.Tooltip.Root>
                    </SubframeCore.Tooltip.Provider>
                    <SubframeCore.Tooltip.Provider>
                      <SubframeCore.Tooltip.Root>
                        <SubframeCore.Tooltip.Trigger asChild={true}>
                          <div className="flex h-8 w-8 flex-none items-center justify-center rounded-[8px] border border-solid border-[#ef44444d] bg-[#261111] hover:border-[#ef4444]">
                            <Hammer className="font-['Inter'] text-[18px] font-[400] leading-[20px] text-[#f87171]" />
                          </div>
                        </SubframeCore.Tooltip.Trigger>
                        <SubframeCore.Tooltip.Portal>
                          <SubframeCore.Tooltip.Content
                            side="top"
                            align="center"
                            sideOffset={6}
                            asChild={true}
                          >
                            <div className="flex items-center rounded-[6px] border border-solid border-[#2a3038] bg-[#0b0d10] px-2 py-1 shadow-[0px_10px_15px_-3px_#0000001a,0px_4px_6px_-4px_#0000001a]">
                              <span className="whitespace-nowrap font-['Inter'] text-[12px] font-[500] leading-[16px] text-[#ffffff]">
                                Ban
                              </span>
                            </div>
                          </SubframeCore.Tooltip.Content>
                        </SubframeCore.Tooltip.Portal>
                      </SubframeCore.Tooltip.Root>
                    </SubframeCore.Tooltip.Provider>
                    <div className="flex h-6 w-px flex-none items-start bg-[#2a3038] mx-1" />
                    <SubframeCore.Tooltip.Provider>
                      <SubframeCore.Tooltip.Root>
                        <SubframeCore.Tooltip.Trigger asChild={true}>
                          <div className="flex h-8 w-8 flex-none items-center justify-center rounded-[8px] border border-solid border-[#ef44444d] bg-[#261111] hover:border-[#ef4444]">
                            <RoundDelete className="font-['Inter'] text-[20px] font-[400] leading-[20px] text-[#f87171]" />
                          </div>
                        </SubframeCore.Tooltip.Trigger>
                        <SubframeCore.Tooltip.Portal>
                          <SubframeCore.Tooltip.Content
                            side="top"
                            align="center"
                            sideOffset={6}
                            asChild={true}
                          >
                            <div className="flex items-center rounded-[6px] border border-solid border-[#2a3038] bg-[#0b0d10] px-2 py-1 shadow-[0px_10px_15px_-3px_#0000001a,0px_4px_6px_-4px_#0000001a]">
                              <span className="whitespace-nowrap font-['Inter'] text-[12px] font-[500] leading-[16px] text-[#ffffff]">
                                Remove all data
                              </span>
                            </div>
                          </SubframeCore.Tooltip.Content>
                        </SubframeCore.Tooltip.Portal>
                      </SubframeCore.Tooltip.Root>
                    </SubframeCore.Tooltip.Provider>
                  </div>
                </div>
                <div className="flex flex-col items-start gap-4 rounded-xl border border-solid border-[#232830] bg-[#1a1e23] px-4 py-4 hover:border-[#3a414b]">
                  <div className="flex w-full items-center gap-3">
                    <div className="flex h-14 w-14 flex-none items-start overflow-hidden rounded-[8px] border border-solid border-[#2a3038] bg-[#e8b896] relative">
                      <div className="flex h-3.5 w-14 flex-none items-start bg-[#a0221e] absolute left-[0px] top-[0px]" />
                      <div className="flex h-[7px] w-[7px] flex-none items-start bg-[#a0221e] absolute left-[0px] top-[14px]" />
                      <div className="flex h-[7px] w-[7px] flex-none items-start bg-[#a0221e] absolute left-[49px] top-[14px]" />
                      <div className="flex h-[7px] w-[7px] flex-none items-start bg-[#ffffff] absolute left-[7px] top-[28px]" />
                      <div className="flex h-[7px] w-[7px] flex-none items-start bg-[#5b3a8a] absolute left-[14px] top-[28px]" />
                      <div className="flex h-[7px] w-[7px] flex-none items-start bg-[#5b3a8a] absolute left-[35px] top-[28px]" />
                      <div className="flex h-[7px] w-[7px] flex-none items-start bg-[#ffffff] absolute left-[42px] top-[28px]" />
                      <div className="flex h-[7px] w-3.5 flex-none items-start bg-[#b07a5c] absolute left-[21px] top-[35px]" />
                      <div className="flex h-[7px] w-7 flex-none items-start bg-[#b07a5c] absolute left-[14px] top-[42px]" />
                    </div>
                    <div className="flex grow shrink-0 basis-0 flex-col items-start gap-0.5">
                      <div className="flex w-full items-center gap-2">
                        <span className="whitespace-nowrap font-['Inter'] text-[15px] font-[600] leading-[20px] text-[#ffffff] truncate">
                          RedstoneRita
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <div className="flex h-1.5 w-1.5 flex-none items-start rounded-[9999px] bg-[#f7b900]" />
                        <span className="font-['Inter'] text-[12px] font-[400] leading-[16px] text-[#f7b900]">
                          AFK · 2h 05m
                        </span>
                      </div>
                      <span className="font-['Inter'] text-[12px] font-[400] leading-[16px] text-[#7a828e]">
                        Playtime 241h · Joined May 2025
                      </span>
                    </div>
                  </div>
                  <div className="flex w-full items-center gap-1.5 border-t border-solid border-[#232830] pt-3">
                    <SubframeCore.Tooltip.Provider>
                      <SubframeCore.Tooltip.Root>
                        <SubframeCore.Tooltip.Trigger asChild={true}>
                          <div className="flex h-8 w-8 flex-none items-center justify-center rounded-[8px] border border-solid border-[#2a3038] bg-[#1a1e23] hover:border-[#3a414b]">
                            <RoundSearch className="font-['Inter'] text-[18px] font-[400] leading-[20px] text-[#aeb4bd]" />
                          </div>
                        </SubframeCore.Tooltip.Trigger>
                        <SubframeCore.Tooltip.Portal>
                          <SubframeCore.Tooltip.Content
                            side="top"
                            align="center"
                            sideOffset={6}
                            asChild={true}
                          >
                            <div className="flex items-center rounded-[6px] border border-solid border-[#2a3038] bg-[#0b0d10] px-2 py-1 shadow-[0px_10px_15px_-3px_#0000001a,0px_4px_6px_-4px_#0000001a]">
                              <span className="whitespace-nowrap font-['Inter'] text-[12px] font-[500] leading-[16px] text-[#ffffff]">
                                Inspect data
                              </span>
                            </div>
                          </SubframeCore.Tooltip.Content>
                        </SubframeCore.Tooltip.Portal>
                      </SubframeCore.Tooltip.Root>
                    </SubframeCore.Tooltip.Provider>
                    <SubframeCore.Tooltip.Provider>
                      <SubframeCore.Tooltip.Root>
                        <SubframeCore.Tooltip.Trigger asChild={true}>
                          <div className="flex h-8 w-8 flex-none items-center justify-center rounded-[8px] border border-solid border-[#2a3038] bg-[#1a1e23] hover:border-[#3a414b]">
                            <Versions className="font-['Inter'] text-[18px] font-[400] leading-[20px] text-[#aeb4bd]" />
                          </div>
                        </SubframeCore.Tooltip.Trigger>
                        <SubframeCore.Tooltip.Portal>
                          <SubframeCore.Tooltip.Content
                            side="top"
                            align="center"
                            sideOffset={6}
                            asChild={true}
                          >
                            <div className="flex items-center rounded-[6px] border border-solid border-[#2a3038] bg-[#0b0d10] px-2 py-1 shadow-[0px_10px_15px_-3px_#0000001a,0px_4px_6px_-4px_#0000001a]">
                              <span className="whitespace-nowrap font-['Inter'] text-[12px] font-[500] leading-[16px] text-[#ffffff]">
                                Restore from backup
                              </span>
                            </div>
                          </SubframeCore.Tooltip.Content>
                        </SubframeCore.Tooltip.Portal>
                      </SubframeCore.Tooltip.Root>
                    </SubframeCore.Tooltip.Provider>
                    <SubframeCore.Tooltip.Provider>
                      <SubframeCore.Tooltip.Root>
                        <SubframeCore.Tooltip.Trigger asChild={true}>
                          <div className="flex h-8 w-8 flex-none items-center justify-center rounded-[8px] border border-solid border-[#f59e0b4d] bg-[#241a0a] opacity-35">
                            <svg
                              className="font-['Inter'] text-[18px] font-[400] leading-[20px] text-[#fbbf24]"
                              width="1em"
                              height="1em"
                              viewBox="0 0 24 24"
                            >
                              <path
                                d="M5 5h6a1 1 0 0 0 0-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6a1 1 0 0 0 0-2H5zm15.65 6.65-2.79-2.79a.5.5 0 0 0-.86.35V11h-7a1 1 0 0 0 0 2h7v1.79c0 .45.54.67.85.35l2.79-2.79a.5.5 0 0 0 .01-.7"
                                fill="currentColor"
                                fillOpacity="1"
                              />
                            </svg>
                          </div>
                        </SubframeCore.Tooltip.Trigger>
                        <SubframeCore.Tooltip.Portal>
                          <SubframeCore.Tooltip.Content
                            side="top"
                            align="center"
                            sideOffset={6}
                            asChild={true}
                          >
                            <div className="flex items-center rounded-[6px] border border-solid border-[#2a3038] bg-[#0b0d10] px-2 py-1 shadow-[0px_10px_15px_-3px_#0000001a,0px_4px_6px_-4px_#0000001a]">
                              <span className="whitespace-nowrap font-['Inter'] text-[12px] font-[500] leading-[16px] text-[#ffffff]">
                                Kick
                              </span>
                            </div>
                          </SubframeCore.Tooltip.Content>
                        </SubframeCore.Tooltip.Portal>
                      </SubframeCore.Tooltip.Root>
                    </SubframeCore.Tooltip.Provider>
                    <SubframeCore.Tooltip.Provider>
                      <SubframeCore.Tooltip.Root>
                        <SubframeCore.Tooltip.Trigger asChild={true}>
                          <div className="flex h-8 w-8 flex-none items-center justify-center rounded-[8px] border border-solid border-[#f59e0b4d] bg-[#241a0a] opacity-35">
                            <svg
                              className="font-['Inter'] text-[18px] font-[400] leading-[20px] text-[#fbbf24]"
                              width="1em"
                              height="1em"
                              viewBox="0 0 24 24"
                            >
                              <path
                                d="M6 2a1 1 0 0 0-1 1v3.17c0 .53.21 1.04.59 1.42l3.58 3.61a1 1 0 0 1 0 1.41L5.59 16.2A2 2 0 0 0 5 17.62V21a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-3.38c0-.53-.21-1.04-.59-1.41l-3.58-3.6a1 1 0 0 1 0-1.41l3.58-3.6A2 2 0 0 0 19 6.17V3a1 1 0 0 0-1-1zm11 15.62V20H7v-2.38l5-5.02zm-5-6.22L7 6.38V4h10v2.38z"
                                fill="currentColor"
                                fillOpacity="1"
                              />
                            </svg>
                          </div>
                        </SubframeCore.Tooltip.Trigger>
                        <SubframeCore.Tooltip.Portal>
                          <SubframeCore.Tooltip.Content
                            side="top"
                            align="center"
                            sideOffset={6}
                            asChild={true}
                          >
                            <div className="flex items-center rounded-[6px] border border-solid border-[#2a3038] bg-[#0b0d10] px-2 py-1 shadow-[0px_10px_15px_-3px_#0000001a,0px_4px_6px_-4px_#0000001a]">
                              <span className="whitespace-nowrap font-['Inter'] text-[12px] font-[500] leading-[16px] text-[#ffffff]">
                                Timeout
                              </span>
                            </div>
                          </SubframeCore.Tooltip.Content>
                        </SubframeCore.Tooltip.Portal>
                      </SubframeCore.Tooltip.Root>
                    </SubframeCore.Tooltip.Provider>
                    <SubframeCore.Tooltip.Provider>
                      <SubframeCore.Tooltip.Root>
                        <SubframeCore.Tooltip.Trigger asChild={true}>
                          <div className="flex h-8 w-8 flex-none items-center justify-center rounded-[8px] border border-solid border-[#ef44444d] bg-[#261111] hover:border-[#ef4444]">
                            <Hammer className="font-['Inter'] text-[18px] font-[400] leading-[20px] text-[#f87171]" />
                          </div>
                        </SubframeCore.Tooltip.Trigger>
                        <SubframeCore.Tooltip.Portal>
                          <SubframeCore.Tooltip.Content
                            side="top"
                            align="center"
                            sideOffset={6}
                            asChild={true}
                          >
                            <div className="flex items-center rounded-[6px] border border-solid border-[#2a3038] bg-[#0b0d10] px-2 py-1 shadow-[0px_10px_15px_-3px_#0000001a,0px_4px_6px_-4px_#0000001a]">
                              <span className="whitespace-nowrap font-['Inter'] text-[12px] font-[500] leading-[16px] text-[#ffffff]">
                                Ban
                              </span>
                            </div>
                          </SubframeCore.Tooltip.Content>
                        </SubframeCore.Tooltip.Portal>
                      </SubframeCore.Tooltip.Root>
                    </SubframeCore.Tooltip.Provider>
                    <div className="flex h-6 w-px flex-none items-start bg-[#2a3038] mx-1" />
                    <SubframeCore.Tooltip.Provider>
                      <SubframeCore.Tooltip.Root>
                        <SubframeCore.Tooltip.Trigger asChild={true}>
                          <div className="flex h-8 w-8 flex-none items-center justify-center rounded-[8px] border border-solid border-[#ef44444d] bg-[#261111] hover:border-[#ef4444]">
                            <RoundDelete className="font-['Inter'] text-[20px] font-[400] leading-[20px] text-[#f87171]" />
                          </div>
                        </SubframeCore.Tooltip.Trigger>
                        <SubframeCore.Tooltip.Portal>
                          <SubframeCore.Tooltip.Content
                            side="top"
                            align="center"
                            sideOffset={6}
                            asChild={true}
                          >
                            <div className="flex items-center rounded-[6px] border border-solid border-[#2a3038] bg-[#0b0d10] px-2 py-1 shadow-[0px_10px_15px_-3px_#0000001a,0px_4px_6px_-4px_#0000001a]">
                              <span className="whitespace-nowrap font-['Inter'] text-[12px] font-[500] leading-[16px] text-[#ffffff]">
                                Remove all data
                              </span>
                            </div>
                          </SubframeCore.Tooltip.Content>
                        </SubframeCore.Tooltip.Portal>
                      </SubframeCore.Tooltip.Root>
                    </SubframeCore.Tooltip.Provider>
                  </div>
                </div>
                <div className="flex flex-col items-start gap-4 rounded-xl border border-solid border-[#232830] bg-[#1a1e23] px-4 py-4 hover:border-[#3a414b]">
                  <div className="flex w-full items-center gap-3">
                    <div className="flex h-14 w-14 flex-none items-start overflow-hidden rounded-[8px] border border-solid border-[#2a3038] bg-[#b8826b] relative">
                      <div className="flex h-3.5 w-14 flex-none items-start bg-[#2b1d12] absolute left-[0px] top-[0px]" />
                      <div className="flex h-[7px] w-[7px] flex-none items-start bg-[#2b1d12] absolute left-[0px] top-[14px]" />
                      <div className="flex h-[7px] w-[7px] flex-none items-start bg-[#2b1d12] absolute left-[49px] top-[14px]" />
                      <div className="flex h-[7px] w-[7px] flex-none items-start bg-[#ffffff] absolute left-[7px] top-[28px]" />
                      <div className="flex h-[7px] w-[7px] flex-none items-start bg-[#6b3fa0] absolute left-[14px] top-[28px]" />
                      <div className="flex h-[7px] w-[7px] flex-none items-start bg-[#6b3fa0] absolute left-[35px] top-[28px]" />
                      <div className="flex h-[7px] w-[7px] flex-none items-start bg-[#ffffff] absolute left-[42px] top-[28px]" />
                      <div className="flex h-[7px] w-3.5 flex-none items-start bg-[#8a5a44] absolute left-[21px] top-[35px]" />
                      <div className="flex h-[7px] w-7 flex-none items-start bg-[#8a5a44] absolute left-[14px] top-[42px]" />
                    </div>
                    <div className="flex grow shrink-0 basis-0 flex-col items-start gap-0.5">
                      <div className="flex w-full items-center gap-2">
                        <span className="whitespace-nowrap font-['Inter'] text-[15px] font-[600] leading-[20px] text-[#ffffff] truncate">
                          NotchFan42
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <div className="flex h-2 w-2 flex-none items-start rounded-[9999px] bg-[#7a828e]" />
                        <span className="font-['Inter'] text-[12px] font-[500] leading-[16px] text-[#aeb4bd]">
                          Last seen 3 days ago
                        </span>
                      </div>
                      <span className="font-['Inter'] text-[12px] font-[400] leading-[16px] text-[#7a828e]">
                        Playtime 64h · Joined Sep 2025
                      </span>
                    </div>
                  </div>
                  <div className="flex w-full items-center gap-1.5 border-t border-solid border-[#232830] pt-3">
                    <SubframeCore.Tooltip.Provider>
                      <SubframeCore.Tooltip.Root>
                        <SubframeCore.Tooltip.Trigger asChild={true}>
                          <div className="flex h-8 w-8 flex-none items-center justify-center rounded-[8px] border border-solid border-[#2a3038] bg-[#1a1e23] hover:border-[#3a414b]">
                            <RoundSearch className="font-['Inter'] text-[18px] font-[400] leading-[20px] text-[#aeb4bd]" />
                          </div>
                        </SubframeCore.Tooltip.Trigger>
                        <SubframeCore.Tooltip.Portal>
                          <SubframeCore.Tooltip.Content
                            side="top"
                            align="center"
                            sideOffset={6}
                            asChild={true}
                          >
                            <div className="flex items-center rounded-[6px] border border-solid border-[#2a3038] bg-[#0b0d10] px-2 py-1 shadow-[0px_10px_15px_-3px_#0000001a,0px_4px_6px_-4px_#0000001a]">
                              <span className="whitespace-nowrap font-['Inter'] text-[12px] font-[500] leading-[16px] text-[#ffffff]">
                                Inspect data
                              </span>
                            </div>
                          </SubframeCore.Tooltip.Content>
                        </SubframeCore.Tooltip.Portal>
                      </SubframeCore.Tooltip.Root>
                    </SubframeCore.Tooltip.Provider>
                    <SubframeCore.Tooltip.Provider>
                      <SubframeCore.Tooltip.Root>
                        <SubframeCore.Tooltip.Trigger asChild={true}>
                          <div className="flex h-8 w-8 flex-none items-center justify-center rounded-[8px] border border-solid border-[#2a3038] bg-[#1a1e23] hover:border-[#3a414b]">
                            <Versions className="font-['Inter'] text-[18px] font-[400] leading-[20px] text-[#aeb4bd]" />
                          </div>
                        </SubframeCore.Tooltip.Trigger>
                        <SubframeCore.Tooltip.Portal>
                          <SubframeCore.Tooltip.Content
                            side="top"
                            align="center"
                            sideOffset={6}
                            asChild={true}
                          >
                            <div className="flex items-center rounded-[6px] border border-solid border-[#2a3038] bg-[#0b0d10] px-2 py-1 shadow-[0px_10px_15px_-3px_#0000001a,0px_4px_6px_-4px_#0000001a]">
                              <span className="whitespace-nowrap font-['Inter'] text-[12px] font-[500] leading-[16px] text-[#ffffff]">
                                Restore from backup
                              </span>
                            </div>
                          </SubframeCore.Tooltip.Content>
                        </SubframeCore.Tooltip.Portal>
                      </SubframeCore.Tooltip.Root>
                    </SubframeCore.Tooltip.Provider>
                    <SubframeCore.Tooltip.Provider>
                      <SubframeCore.Tooltip.Root>
                        <SubframeCore.Tooltip.Trigger asChild={true}>
                          <div className="flex h-8 w-8 flex-none items-center justify-center rounded-[8px] border border-solid border-[#f59e0b4d] bg-[#241a0a] opacity-35">
                            <svg
                              className="font-['Inter'] text-[18px] font-[400] leading-[20px] text-[#fbbf24]"
                              width="1em"
                              height="1em"
                              viewBox="0 0 24 24"
                            >
                              <path
                                d="M5 5h6a1 1 0 0 0 0-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6a1 1 0 0 0 0-2H5zm15.65 6.65-2.79-2.79a.5.5 0 0 0-.86.35V11h-7a1 1 0 0 0 0 2h7v1.79c0 .45.54.67.85.35l2.79-2.79a.5.5 0 0 0 .01-.7"
                                fill="currentColor"
                                fillOpacity="1"
                              />
                            </svg>
                          </div>
                        </SubframeCore.Tooltip.Trigger>
                        <SubframeCore.Tooltip.Portal>
                          <SubframeCore.Tooltip.Content
                            side="top"
                            align="center"
                            sideOffset={6}
                            asChild={true}
                          >
                            <div className="flex items-center rounded-[6px] border border-solid border-[#2a3038] bg-[#0b0d10] px-2 py-1 shadow-[0px_10px_15px_-3px_#0000001a,0px_4px_6px_-4px_#0000001a]">
                              <span className="whitespace-nowrap font-['Inter'] text-[12px] font-[500] leading-[16px] text-[#ffffff]">
                                Kick
                              </span>
                            </div>
                          </SubframeCore.Tooltip.Content>
                        </SubframeCore.Tooltip.Portal>
                      </SubframeCore.Tooltip.Root>
                    </SubframeCore.Tooltip.Provider>
                    <SubframeCore.Tooltip.Provider>
                      <SubframeCore.Tooltip.Root>
                        <SubframeCore.Tooltip.Trigger asChild={true}>
                          <div className="flex h-8 w-8 flex-none items-center justify-center rounded-[8px] border border-solid border-[#f59e0b4d] bg-[#241a0a] opacity-35">
                            <svg
                              className="font-['Inter'] text-[18px] font-[400] leading-[20px] text-[#fbbf24]"
                              width="1em"
                              height="1em"
                              viewBox="0 0 24 24"
                            >
                              <path
                                d="M6 2a1 1 0 0 0-1 1v3.17c0 .53.21 1.04.59 1.42l3.58 3.61a1 1 0 0 1 0 1.41L5.59 16.2A2 2 0 0 0 5 17.62V21a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-3.38c0-.53-.21-1.04-.59-1.41l-3.58-3.6a1 1 0 0 1 0-1.41l3.58-3.6A2 2 0 0 0 19 6.17V3a1 1 0 0 0-1-1zm11 15.62V20H7v-2.38l5-5.02zm-5-6.22L7 6.38V4h10v2.38z"
                                fill="currentColor"
                                fillOpacity="1"
                              />
                            </svg>
                          </div>
                        </SubframeCore.Tooltip.Trigger>
                        <SubframeCore.Tooltip.Portal>
                          <SubframeCore.Tooltip.Content
                            side="top"
                            align="center"
                            sideOffset={6}
                            asChild={true}
                          >
                            <div className="flex items-center rounded-[6px] border border-solid border-[#2a3038] bg-[#0b0d10] px-2 py-1 shadow-[0px_10px_15px_-3px_#0000001a,0px_4px_6px_-4px_#0000001a]">
                              <span className="whitespace-nowrap font-['Inter'] text-[12px] font-[500] leading-[16px] text-[#ffffff]">
                                Timeout
                              </span>
                            </div>
                          </SubframeCore.Tooltip.Content>
                        </SubframeCore.Tooltip.Portal>
                      </SubframeCore.Tooltip.Root>
                    </SubframeCore.Tooltip.Provider>
                    <SubframeCore.Tooltip.Provider>
                      <SubframeCore.Tooltip.Root>
                        <SubframeCore.Tooltip.Trigger asChild={true}>
                          <div className="flex h-8 w-8 flex-none items-center justify-center rounded-[8px] border border-solid border-[#ef44444d] bg-[#261111] hover:border-[#ef4444]">
                            <Hammer className="font-['Inter'] text-[18px] font-[400] leading-[20px] text-[#f87171]" />
                          </div>
                        </SubframeCore.Tooltip.Trigger>
                        <SubframeCore.Tooltip.Portal>
                          <SubframeCore.Tooltip.Content
                            side="top"
                            align="center"
                            sideOffset={6}
                            asChild={true}
                          >
                            <div className="flex items-center rounded-[6px] border border-solid border-[#2a3038] bg-[#0b0d10] px-2 py-1 shadow-[0px_10px_15px_-3px_#0000001a,0px_4px_6px_-4px_#0000001a]">
                              <span className="whitespace-nowrap font-['Inter'] text-[12px] font-[500] leading-[16px] text-[#ffffff]">
                                Ban
                              </span>
                            </div>
                          </SubframeCore.Tooltip.Content>
                        </SubframeCore.Tooltip.Portal>
                      </SubframeCore.Tooltip.Root>
                    </SubframeCore.Tooltip.Provider>
                    <div className="flex h-6 w-px flex-none items-start bg-[#2a3038] mx-1" />
                    <SubframeCore.Tooltip.Provider>
                      <SubframeCore.Tooltip.Root>
                        <SubframeCore.Tooltip.Trigger asChild={true}>
                          <div className="flex h-8 w-8 flex-none items-center justify-center rounded-[8px] border border-solid border-[#ef44444d] bg-[#261111] hover:border-[#ef4444]">
                            <svg
                              className="font-['Inter'] text-[18px] font-[400] leading-[20px] text-[#f87171]"
                              width="1em"
                              height="1em"
                              viewBox="0 0 24 24"
                            >
                              <path
                                d="M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2zM18 4h-2.5l-.71-.71a1 1 0 0 0-.71-.29H9.92a1 1 0 0 0-.7.29L8.5 4H6a1 1 0 0 0 0 2h12a1 1 0 0 0 0-2"
                                fill="currentColor"
                                fillOpacity="1"
                              />
                            </svg>
                          </div>
                        </SubframeCore.Tooltip.Trigger>
                        <SubframeCore.Tooltip.Portal>
                          <SubframeCore.Tooltip.Content
                            side="top"
                            align="center"
                            sideOffset={6}
                            asChild={true}
                          >
                            <div className="flex items-center rounded-[6px] border border-solid border-[#2a3038] bg-[#0b0d10] px-2 py-1 shadow-[0px_10px_15px_-3px_#0000001a,0px_4px_6px_-4px_#0000001a]">
                              <span className="whitespace-nowrap font-['Inter'] text-[12px] font-[500] leading-[16px] text-[#ffffff]">
                                Remove all data
                              </span>
                            </div>
                          </SubframeCore.Tooltip.Content>
                        </SubframeCore.Tooltip.Portal>
                      </SubframeCore.Tooltip.Root>
                    </SubframeCore.Tooltip.Provider>
                  </div>
                </div>
                <div className="flex flex-col items-start gap-4 rounded-xl border border-solid border-[#232830] bg-[#1a1e23] px-4 py-4 hover:border-[#3a414b]">
                  <div className="flex w-full items-center gap-3">
                    <div className="flex h-14 w-14 flex-none items-start overflow-hidden rounded-[8px] border border-solid border-[#2a3038] bg-[#6b7280] relative grayscale-[0.4] opacity-60">
                      <div className="flex h-3.5 w-14 flex-none items-start bg-[#374151] absolute left-[0px] top-[0px]" />
                      <div className="flex h-[7px] w-[7px] flex-none items-start bg-[#374151] absolute left-[0px] top-[14px]" />
                      <div className="flex h-[7px] w-[7px] flex-none items-start bg-[#374151] absolute left-[49px] top-[14px]" />
                      <div className="flex h-[7px] w-[7px] flex-none items-start bg-[#ffffff] absolute left-[7px] top-[28px]" />
                      <div className="flex h-[7px] w-[7px] flex-none items-start bg-[#ef4444] absolute left-[14px] top-[28px]" />
                      <div className="flex h-[7px] w-[7px] flex-none items-start bg-[#ef4444] absolute left-[35px] top-[28px]" />
                      <div className="flex h-[7px] w-[7px] flex-none items-start bg-[#ffffff] absolute left-[42px] top-[28px]" />
                      <div className="flex h-[7px] w-3.5 flex-none items-start bg-[#374151] absolute left-[21px] top-[35px]" />
                      <div className="flex h-[7px] w-7 flex-none items-start bg-[#374151] absolute left-[14px] top-[42px]" />
                    </div>
                    <div className="flex grow shrink-0 basis-0 flex-col items-start gap-0.5">
                      <div className="flex w-full items-center gap-2">
                        <span className="whitespace-nowrap font-['Inter'] text-[15px] font-[600] leading-[20px] text-[#ffffff] truncate">
                          GriefBot99
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <div className="flex h-2 w-2 flex-none items-start rounded-[9999px] bg-[#ef4444]" />
                        <span className="font-['Inter'] text-[12px] font-[500] leading-[16px] text-[#f87171]">
                          Banned
                        </span>
                      </div>
                      <span className="font-['Inter'] text-[12px] font-[400] leading-[16px] text-[#7a828e]">
                        Banned 5 days ago · Griefing
                      </span>
                    </div>
                  </div>
                  <div className="flex w-full items-center gap-1.5 border-t border-solid border-[#232830] pt-3">
                    <SubframeCore.Tooltip.Provider>
                      <SubframeCore.Tooltip.Root>
                        <SubframeCore.Tooltip.Trigger asChild={true}>
                          <div className="flex h-8 w-8 flex-none items-center justify-center rounded-[8px] border border-solid border-[#2a3038] bg-[#1a1e23] hover:border-[#3a414b]">
                            <RoundSearch className="font-['Inter'] text-[18px] font-[400] leading-[20px] text-[#aeb4bd]" />
                          </div>
                        </SubframeCore.Tooltip.Trigger>
                        <SubframeCore.Tooltip.Portal>
                          <SubframeCore.Tooltip.Content
                            side="top"
                            align="center"
                            sideOffset={6}
                            asChild={true}
                          >
                            <div className="flex items-center rounded-[6px] border border-solid border-[#2a3038] bg-[#0b0d10] px-2 py-1 shadow-[0px_10px_15px_-3px_#0000001a,0px_4px_6px_-4px_#0000001a]">
                              <span className="whitespace-nowrap font-['Inter'] text-[12px] font-[500] leading-[16px] text-[#ffffff]">
                                Inspect data
                              </span>
                            </div>
                          </SubframeCore.Tooltip.Content>
                        </SubframeCore.Tooltip.Portal>
                      </SubframeCore.Tooltip.Root>
                    </SubframeCore.Tooltip.Provider>
                    <SubframeCore.Tooltip.Provider>
                      <SubframeCore.Tooltip.Root>
                        <SubframeCore.Tooltip.Trigger asChild={true}>
                          <div className="flex h-8 w-8 flex-none items-center justify-center rounded-[8px] border border-solid border-[#2a3038] bg-[#1a1e23] hover:border-[#3a414b]">
                            <Versions className="font-['Inter'] text-[18px] font-[400] leading-[20px] text-[#aeb4bd]" />
                          </div>
                        </SubframeCore.Tooltip.Trigger>
                        <SubframeCore.Tooltip.Portal>
                          <SubframeCore.Tooltip.Content
                            side="top"
                            align="center"
                            sideOffset={6}
                            asChild={true}
                          >
                            <div className="flex items-center rounded-[6px] border border-solid border-[#2a3038] bg-[#0b0d10] px-2 py-1 shadow-[0px_10px_15px_-3px_#0000001a,0px_4px_6px_-4px_#0000001a]">
                              <span className="whitespace-nowrap font-['Inter'] text-[12px] font-[500] leading-[16px] text-[#ffffff]">
                                Restore from backup
                              </span>
                            </div>
                          </SubframeCore.Tooltip.Content>
                        </SubframeCore.Tooltip.Portal>
                      </SubframeCore.Tooltip.Root>
                    </SubframeCore.Tooltip.Provider>
                    <SubframeCore.Tooltip.Provider>
                      <SubframeCore.Tooltip.Root>
                        <SubframeCore.Tooltip.Trigger asChild={true}>
                          <div className="flex h-8 w-8 flex-none items-center justify-center rounded-[8px] border border-solid border-[#f59e0b4d] bg-[#241a0a] opacity-35">
                            <svg
                              className="font-['Inter'] text-[18px] font-[400] leading-[20px] text-[#fbbf24]"
                              width="1em"
                              height="1em"
                              viewBox="0 0 24 24"
                            >
                              <path
                                d="M5 5h6a1 1 0 0 0 0-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6a1 1 0 0 0 0-2H5zm15.65 6.65-2.79-2.79a.5.5 0 0 0-.86.35V11h-7a1 1 0 0 0 0 2h7v1.79c0 .45.54.67.85.35l2.79-2.79a.5.5 0 0 0 .01-.7"
                                fill="currentColor"
                                fillOpacity="1"
                              />
                            </svg>
                          </div>
                        </SubframeCore.Tooltip.Trigger>
                        <SubframeCore.Tooltip.Portal>
                          <SubframeCore.Tooltip.Content
                            side="top"
                            align="center"
                            sideOffset={6}
                            asChild={true}
                          >
                            <div className="flex items-center rounded-[6px] border border-solid border-[#2a3038] bg-[#0b0d10] px-2 py-1 shadow-[0px_10px_15px_-3px_#0000001a,0px_4px_6px_-4px_#0000001a]">
                              <span className="whitespace-nowrap font-['Inter'] text-[12px] font-[500] leading-[16px] text-[#ffffff]">
                                Kick
                              </span>
                            </div>
                          </SubframeCore.Tooltip.Content>
                        </SubframeCore.Tooltip.Portal>
                      </SubframeCore.Tooltip.Root>
                    </SubframeCore.Tooltip.Provider>
                    <SubframeCore.Tooltip.Provider>
                      <SubframeCore.Tooltip.Root>
                        <SubframeCore.Tooltip.Trigger asChild={true}>
                          <div className="flex h-8 w-8 flex-none items-center justify-center rounded-[8px] border border-solid border-[#f59e0b4d] bg-[#241a0a] opacity-35">
                            <svg
                              className="font-['Inter'] text-[18px] font-[400] leading-[20px] text-[#fbbf24]"
                              width="1em"
                              height="1em"
                              viewBox="0 0 24 24"
                            >
                              <path
                                d="M6 2a1 1 0 0 0-1 1v3.17c0 .53.21 1.04.59 1.42l3.58 3.61a1 1 0 0 1 0 1.41L5.59 16.2A2 2 0 0 0 5 17.62V21a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-3.38c0-.53-.21-1.04-.59-1.41l-3.58-3.6a1 1 0 0 1 0-1.41l3.58-3.6A2 2 0 0 0 19 6.17V3a1 1 0 0 0-1-1zm11 15.62V20H7v-2.38l5-5.02zm-5-6.22L7 6.38V4h10v2.38z"
                                fill="currentColor"
                                fillOpacity="1"
                              />
                            </svg>
                          </div>
                        </SubframeCore.Tooltip.Trigger>
                        <SubframeCore.Tooltip.Portal>
                          <SubframeCore.Tooltip.Content
                            side="top"
                            align="center"
                            sideOffset={6}
                            asChild={true}
                          >
                            <div className="flex items-center rounded-[6px] border border-solid border-[#2a3038] bg-[#0b0d10] px-2 py-1 shadow-[0px_10px_15px_-3px_#0000001a,0px_4px_6px_-4px_#0000001a]">
                              <span className="whitespace-nowrap font-['Inter'] text-[12px] font-[500] leading-[16px] text-[#ffffff]">
                                Timeout
                              </span>
                            </div>
                          </SubframeCore.Tooltip.Content>
                        </SubframeCore.Tooltip.Portal>
                      </SubframeCore.Tooltip.Root>
                    </SubframeCore.Tooltip.Provider>
                    <SubframeCore.Tooltip.Provider>
                      <SubframeCore.Tooltip.Root>
                        <SubframeCore.Tooltip.Trigger asChild={true}>
                          <div className="flex h-8 w-8 flex-none items-center justify-center rounded-[8px] border border-solid border-[#ef4444] bg-[#4a1515] hover:bg-[#5a1a1a]">
                            <Hammer className="font-['Inter'] text-[18px] font-[400] leading-[20px] text-[#fecaca]" />
                          </div>
                        </SubframeCore.Tooltip.Trigger>
                        <SubframeCore.Tooltip.Portal>
                          <SubframeCore.Tooltip.Content
                            side="top"
                            align="center"
                            sideOffset={6}
                            asChild={true}
                          >
                            <div className="flex items-center rounded-[6px] border border-solid border-[#2a3038] bg-[#0b0d10] px-2 py-1 shadow-[0px_10px_15px_-3px_#0000001a,0px_4px_6px_-4px_#0000001a]">
                              <span className="whitespace-nowrap font-['Inter'] text-[12px] font-[500] leading-[16px] text-[#ffffff]">
                                Unban
                              </span>
                            </div>
                          </SubframeCore.Tooltip.Content>
                        </SubframeCore.Tooltip.Portal>
                      </SubframeCore.Tooltip.Root>
                    </SubframeCore.Tooltip.Provider>
                    <div className="flex h-6 w-px flex-none items-start bg-[#2a3038] mx-1" />
                    <SubframeCore.Tooltip.Provider>
                      <SubframeCore.Tooltip.Root>
                        <SubframeCore.Tooltip.Trigger asChild={true}>
                          <div className="flex h-8 w-8 flex-none items-center justify-center rounded-[8px] border border-solid border-[#ef44444d] bg-[#261111] hover:border-[#ef4444]">
                            <RoundDelete className="font-['Inter'] text-[20px] font-[400] leading-[20px] text-[#f87171]" />
                          </div>
                        </SubframeCore.Tooltip.Trigger>
                        <SubframeCore.Tooltip.Portal>
                          <SubframeCore.Tooltip.Content
                            side="top"
                            align="center"
                            sideOffset={6}
                            asChild={true}
                          >
                            <div className="flex items-center rounded-[6px] border border-solid border-[#2a3038] bg-[#0b0d10] px-2 py-1 shadow-[0px_10px_15px_-3px_#0000001a,0px_4px_6px_-4px_#0000001a]">
                              <span className="whitespace-nowrap font-['Inter'] text-[12px] font-[500] leading-[16px] text-[#ffffff]">
                                Remove all data
                              </span>
                            </div>
                          </SubframeCore.Tooltip.Content>
                        </SubframeCore.Tooltip.Portal>
                      </SubframeCore.Tooltip.Root>
                    </SubframeCore.Tooltip.Provider>
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

export default PlayersGrid;