

import Arrow from "@/ui/icons/Arrow";
import BaselineHelp from "@/ui/icons/BaselineHelp";
import RoundAdd from "@/ui/icons/RoundAdd";
import RoundAdminPanelSettings from "@/ui/icons/RoundAdminPanelSettings";
import RoundCompass from "@/ui/icons/RoundCompass";
import RoundDelete from "@/ui/icons/RoundDelete";
import RoundDownload from "@/ui/icons/RoundDownload";
import RoundFolderCopy from "@/ui/icons/RoundFolderCopy";
import RoundLabel from "@/ui/icons/RoundLabel";
import RoundLayers from "@/ui/icons/RoundLayers";
import RoundLink from "@/ui/icons/RoundLink";
import RoundList from "@/ui/icons/RoundList";
import RoundLock from "@/ui/icons/RoundLock";
import RoundLogOut from "@/ui/icons/RoundLogOut";
import RoundModeEditOutline from "@/ui/icons/RoundModeEditOutline";
import RoundNotifications from "@/ui/icons/RoundNotifications";
import RoundPeople from "@/ui/icons/RoundPeople";
import RoundRefresh from "@/ui/icons/RoundRefresh";
import RoundSaveAll from "@/ui/icons/RoundSaveAll";
import RoundSearch from "@/ui/icons/RoundSearch";
import RoundServerX1 from "@/ui/icons/RoundServerX1";
import RoundStarFilled from "@/ui/icons/RoundStarFilled";
import RoundTerminal from "@/ui/icons/RoundTerminal";
import RoundUpgrade from "@/ui/icons/RoundUpgrade";
import RoundWifi from "@/ui/icons/RoundWifi";
import Sort from "@/ui/icons/Sort";
import TinkerDash from "@/ui/icons/TinkerDash";
import type { PageProps } from "./types";

function TinkerRedesign({ onNavigate }: PageProps) {
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
      <main className="flex w-full flex-col items-center justify-center px-6 py-12 mobile:px-4 mobile:pt-6">
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
            <div onClick={() => onNavigate("Server")} className="flex items-center gap-1.5 rounded-t-xl bg-[#0f2418] px-[7px] py-1 hover:bg-[#123321] mobile:rounded-xl mobile:hover:bg-[#123321] mobile:border-b grow justify-center cursor-pointer">
              <div className="flex h-6 w-6 flex-none items-center justify-center rounded-[9999px] border border-solid border-[#4b5563] text-[12px] text-white">
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
            <div onClick={() => onNavigate("Tinker")} className="flex items-center gap-1.5 rounded-t-xl border-x border-t border-solid border-[#22c55e] bg-[#0f2418] px-[7px] py-1 shadow-[0px_12px_32px_-4px_#22c55e] hover:bg-[#123321] grow justify-center cursor-pointer">
              <div className="flex h-6 w-6 flex-none items-center justify-center rounded-[9999px] border border-solid border-[#86efac] text-[12px] text-[#e5e7eb]">
                <TinkerDash className="font-['Inter'] text-[14px] font-[400] leading-[20px] text-[#e5e7eb]" />
              </div>
              <span className="font-['Inter'] text-[15px] font-[400] leading-[24px] text-[#e5e7eb]">
                Tinker
              </span>
            </div>
          </nav>
          <section className="flex w-full flex-col items-start gap-6 rounded-3xl border border-solid border-[#1f242b] bg-[#111418] px-8 py-6 mobile:px-4">
            <div className="flex w-full items-start justify-between gap-4 mobile:flex-col">
              <div className="flex grow shrink-0 basis-0 flex-col items-start gap-1">
                <h1 className="font-['Inter'] text-[28px] font-[700] leading-[36px] text-[#ffffff]">
                  Tinker
                </h1>
                <p className="font-['Inter'] text-[15px] font-[400] leading-[22px] text-[#c4c9d1]">
                  Manage who can access this dashboard and what they can do.
                </p>
              </div>
              <div className="flex items-center gap-2 mobile:w-full mobile:flex-none">
                <div className="flex items-center justify-center gap-1 rounded-[8px] border border-solid border-[#2a3038] bg-[#1a1e23] px-3 py-1.5 hover:bg-[#232830] mobile:grow mobile:shrink-0 mobile:basis-0">
                  <RoundAdminPanelSettings className="font-['Inter'] text-[16px] font-[400] leading-[20px] text-[#e5e7eb]" />
                  <span className="font-['Inter'] text-[14px] font-[600] leading-[20px] text-[#e5e7eb]">
                    Create role
                  </span>
                </div>
                <div className="flex items-center justify-center gap-1 rounded-[8px] border border-solid border-[#22c55e] bg-[#22c55e] px-3 py-1.5 hover:bg-[#16a34a] mobile:grow mobile:shrink-0 mobile:basis-0">
                  <RoundAdd className="font-['Inter'] text-[16px] font-[400] leading-[20px] text-[#04130a]" />
                  <span className="font-['Inter'] text-[14px] font-[600] leading-[20px] text-[#04130a]">
                    Create user
                  </span>
                </div>
              </div>
            </div>
            <div className="w-full items-start gap-3 grid grid-cols-4 mobile:grid mobile:grid-cols-2">
              <div className="flex items-center gap-3 self-stretch rounded-2xl border border-solid border-[#1f242b] bg-[#0b0d10] px-4 py-3">
                <div className="flex h-9 w-9 flex-none items-center justify-center rounded-[8px] border border-solid border-[#2a3038] bg-[#1a1e23]">
                  <RoundPeople className="font-['Inter'] text-[18px] font-[400] leading-[18px] text-[#e5e7eb]" />
                </div>
                <div className="flex flex-col items-start">
                  <span className="font-['Inter'] text-[12px] font-[500] leading-[16px] text-[#9ca3af]">
                    Users
                  </span>
                  <span className="font-['Inter'] text-[20px] font-[700] leading-[28px] text-[#ffffff]">
                    3
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-3 self-stretch rounded-2xl border border-solid border-[#1f242b] bg-[#0b0d10] px-4 py-3">
                <div className="flex h-9 w-9 flex-none items-center justify-center rounded-[8px] border border-solid border-[#2a3038] bg-[#1a1e23]">
                  <RoundLabel className="font-['Inter'] text-[18px] font-[400] leading-[18px] text-[#e5e7eb]" />
                </div>
                <div className="flex flex-col items-start">
                  <span className="font-['Inter'] text-[12px] font-[500] leading-[16px] text-[#9ca3af]">
                    Roles
                  </span>
                  <span className="font-['Inter'] text-[20px] font-[700] leading-[28px] text-[#ffffff]">
                    5
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-3 self-stretch rounded-2xl border border-solid border-[#1f242b] bg-[#0b0d10] px-4 py-3">
                <div className="flex h-9 w-9 flex-none items-center justify-center rounded-[8px] border border-solid border-[#22c55e66] bg-[#0f2418]">
                  <div className="flex h-2.5 w-2.5 flex-none items-start rounded-[9999px] bg-[#22c55e] shadow-[0px_0px_8px_0px_#22c55e]" />
                </div>
                <div className="flex flex-col items-start">
                  <span className="font-['Inter'] text-[12px] font-[500] leading-[16px] text-[#9ca3af]">
                    Active now
                  </span>
                  <span className="font-['Inter'] text-[20px] font-[700] leading-[28px] text-[#ffffff]">
                    1
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-3 self-stretch rounded-2xl border border-solid border-[#1f242b] bg-[#0b0d10] px-4 py-3">
                <div className="flex h-9 w-9 flex-none items-center justify-center rounded-[8px] border border-solid border-[#22c55e66] bg-[#0f2418]">
                  <RoundServerX1 className="font-['Inter'] text-[18px] font-[400] leading-[18px] text-[#22c55e]" />
                </div>
                <div className="flex min-w-[0px] flex-col items-start">
                  <span className="font-['Inter'] text-[12px] font-[500] leading-[16px] text-[#9ca3af]">
                    Agent
                  </span>
                  <div className="flex flex-wrap items-center gap-x-2">
                    <span className="font-['Inter'] text-[20px] font-[700] leading-[28px] text-[#ffffff]">
                      v1.4.2
                    </span>
                    <span className="font-['Inter'] text-[12px] font-[600] leading-[16px] text-[#22c55e]">
                      Up to date
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex w-full items-start gap-5 mobile:flex-col">
              <div className="flex min-w-[0px] grow shrink-0 basis-0 flex-col items-start gap-5 mobile:min-w-0 mobile:flex-none">
                <div className="flex w-full flex-col items-start gap-4 rounded-2xl border border-solid border-[#1f242b] bg-[#0b0d10] px-5 py-5 mobile:px-3">
                  <div className="flex w-full items-center justify-between gap-3">
                    <h3 className="font-['Inter'] text-[18px] font-[700] leading-[26px] text-[#ffffff]">
                      Users
                    </h3>
                    <span className="font-['Inter'] text-[13px] font-[400] leading-[18px] text-[#9ca3af]">
                      3 users
                    </span>
                  </div>
                  <div className="flex w-full items-center gap-2 mobile:flex-col mobile:items-stretch">
                    <div className="flex h-9 grow shrink-0 basis-0 items-center gap-2 rounded-[8px] border border-solid border-[#2a3038] bg-[#111418] px-3 focus-within:border-[#22c55e]">
                      <RoundSearch className="font-['Inter'] text-[16px] font-[400] leading-[16px] text-[#7a828e]" />
                      <input
                        className="grow shrink-0 basis-0 self-stretch font-['Inter'] text-[14px] font-[400] leading-[20px] text-[#e5e7eb] outline-none placeholder:text-[#7a828e]"
                        placeholder="Search users"
                        value=""
                        type="search"
                      />
                    </div>
                    <div className="flex h-9 items-center gap-2 rounded-[8px] border border-solid border-[#2a3038] bg-[#111418] pl-3 pr-2 hover:bg-[#1a1e23]">
                      <Sort className="font-['Inter'] text-[16px] font-[400] leading-[16px] text-[#7a828e]" />
                      <span className="grow shrink-0 basis-0 font-['Inter'] text-[14px] font-[500] leading-[20px] text-[#e5e7eb]">
                        All roles
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
                  </div>
                  <div className="flex w-full flex-col items-start overflow-hidden rounded-xl border border-solid border-[#1f242b]">
                    <div className="flex w-full items-center gap-3 border-b border-solid border-[#1f242b] bg-[#111418] px-4 py-2">
                      <span className="grow shrink-0 basis-0 font-['Inter'] text-[12px] font-[600] leading-[16px] text-[#9ca3af]">
                        User
                      </span>
                      <span className="w-28 flex-none font-['Inter'] text-[12px] font-[600] leading-[16px] text-[#9ca3af]">
                        Role
                      </span>
                      <span className="w-24 flex-none font-['Inter'] text-[12px] font-[600] leading-[16px] text-[#9ca3af] mobile:hidden">
                        Last active
                      </span>
                      <span className="w-16 flex-none font-['Inter'] text-[12px] font-[600] leading-[16px] text-[#9ca3af] text-right">
                        Actions
                      </span>
                    </div>
                    <div className="flex w-full items-center gap-3 border-b border-solid border-[#1f242b] px-4 py-3 hover:bg-[#111418]">
                      <div className="flex min-w-[0px] grow shrink-0 basis-0 items-center gap-3">
                        <img
                          className="h-8 w-8 flex-none rounded-[6px] object-cover"
                          src="https://api.mcheads.org/head/CanBeGold/96"
                        />
                        <span className="whitespace-nowrap font-['Inter'] text-[14px] font-[500] leading-[20px] text-[#ffffff] truncate">
                          CanBeGold
                        </span>
                      </div>
                      <div className="flex w-28 flex-none items-start">
                        <div className="flex items-center gap-0.5 rounded-[9999px] border border-solid border-[#4b5563] bg-[#232830] pl-1 pr-2">
                          <RoundStarFilled className="font-['Inter'] text-[12px] font-[400] leading-[18px] text-[#fbbf24]" />
                          <span className="font-['Inter'] text-[11px] font-[600] leading-[18px] text-[#fbbf24]">
                            Owner
                          </span>
                        </div>
                      </div>
                      <div className="flex w-24 flex-none items-center gap-1.5 mobile:hidden">
                        <div className="flex h-2 w-2 flex-none items-start rounded-[9999px] bg-[#22c55e]" />
                        <span className="font-['Inter'] text-[13px] font-[500] leading-[18px] text-[#86efac]">
                          Online now
                        </span>
                      </div>
                      <div className="flex w-16 flex-none items-center justify-end gap-1">
                        <div className="flex h-7 w-7 flex-none items-center justify-center rounded-[6px] border border-solid border-[#2a3038] bg-[#1a1e23] hover:bg-[#232830]">
                          <RoundModeEditOutline className="font-['Inter'] text-[14px] font-[400] leading-[14px] text-[#e5e7eb]" />
                        </div>
                        <div className="flex h-7 w-7 flex-none items-center justify-center rounded-[6px] border border-solid border-[#2a3038] bg-[#1a1e23] hover:bg-[#2a1416]">
                          <RoundDelete className="font-['Inter'] text-[14px] font-[400] leading-[14px] text-[#ef4444]" />
                        </div>
                      </div>
                    </div>
                    <div className="flex w-full items-center gap-3 border-b border-solid border-[#1f242b] px-4 py-3 hover:bg-[#111418]">
                      <div className="flex min-w-[0px] grow shrink-0 basis-0 items-center gap-3">
                        <img
                          className="h-8 w-8 flex-none rounded-[6px] object-cover"
                          src="https://api.mcheads.org/head/Acogan/96"
                        />
                        <span className="whitespace-nowrap font-['Inter'] text-[14px] font-[500] leading-[20px] text-[#ffffff] truncate">
                          Acogan
                        </span>
                      </div>
                      <div className="flex w-28 flex-none items-start">
                        <div className="flex items-center gap-0.5 rounded-[9999px] border border-solid border-[#4b5563] bg-[#232830] pl-1 pr-2">
                          <RoundAdminPanelSettings className="font-['Inter'] text-[12px] font-[400] leading-[18px] text-[#fd9eff]" />
                          <span className="font-['Inter'] text-[11px] font-[600] leading-[18px] text-[#fd9eff]">
                            Admin
                          </span>
                        </div>
                      </div>
                      <div className="flex w-24 flex-none items-center mobile:hidden">
                        <span className="font-['Inter'] text-[13px] font-[400] leading-[18px] text-[#c4c9d1]">
                          2h ago
                        </span>
                      </div>
                      <div className="flex w-16 flex-none items-center justify-end gap-1">
                        <div className="flex h-7 w-7 flex-none items-center justify-center rounded-[6px] border border-solid border-[#2a3038] bg-[#1a1e23] hover:bg-[#232830]">
                          <RoundModeEditOutline className="font-['Inter'] text-[14px] font-[400] leading-[14px] text-[#e5e7eb]" />
                        </div>
                        <div className="flex h-7 w-7 flex-none items-center justify-center rounded-[6px] border border-solid border-[#2a3038] bg-[#1a1e23] hover:bg-[#2a1416]">
                          <RoundDelete className="font-['Inter'] text-[14px] font-[400] leading-[14px] text-[#ef4444]" />
                        </div>
                      </div>
                    </div>
                    <div className="flex w-full items-center gap-3 px-4 py-3 hover:bg-[#111418]">
                      <div className="flex min-w-[0px] grow shrink-0 basis-0 items-center gap-3">
                        <img
                          className="h-8 w-8 flex-none rounded-[6px] object-cover"
                          src="https://api.mcheads.org/head/TomTomFX/96"
                        />
                        <span className="whitespace-nowrap font-['Inter'] text-[14px] font-[500] leading-[20px] text-[#ffffff] truncate">
                          TomTomFX
                        </span>
                      </div>
                      <div className="flex w-28 flex-none items-start">
                        <div className="flex items-center gap-0.5 rounded-[9999px] border border-solid border-[#4b5563] bg-[#232830] pl-1 pr-2">
                          <RoundNotifications className="font-['Inter'] text-[12px] font-[400] leading-[18px] text-[#a78bfa]" />
                          <span className="font-['Inter'] text-[11px] font-[600] leading-[18px] text-[#a78bfa]">
                            Moderator
                          </span>
                        </div>
                      </div>
                      <div className="flex w-24 flex-none items-center mobile:hidden">
                        <span className="font-['Inter'] text-[13px] font-[400] leading-[18px] text-[#c4c9d1]">
                          Yesterday
                        </span>
                      </div>
                      <div className="flex w-16 flex-none items-center justify-end gap-1">
                        <div className="flex h-7 w-7 flex-none items-center justify-center rounded-[6px] border border-solid border-[#2a3038] bg-[#1a1e23] hover:bg-[#232830]">
                          <RoundModeEditOutline className="font-['Inter'] text-[14px] font-[400] leading-[14px] text-[#e5e7eb]" />
                        </div>
                        <div className="flex h-7 w-7 flex-none items-center justify-center rounded-[6px] border border-solid border-[#2a3038] bg-[#1a1e23] hover:bg-[#2a1416]">
                          <RoundDelete className="font-['Inter'] text-[14px] font-[400] leading-[14px] text-[#ef4444]" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex w-full flex-col items-start gap-4 rounded-2xl border border-solid border-[#1f242b] bg-[#0b0d10] px-5 py-5 mobile:px-3">
                  <div className="flex w-full items-center justify-between gap-3">
                    <h3 className="font-['Inter'] text-[18px] font-[700] leading-[26px] text-[#ffffff]">
                      Roles
                    </h3>
                    <div className="flex items-center gap-1 hover:opacity-80">
                      <span className="font-['Inter'] text-[13px] font-[600] leading-[18px] text-[#22c55e]">
                        Manage roles
                      </span>
                      <Arrow className="font-['Inter'] text-[14px] font-[400] leading-[18px] text-[#22c55e]" />
                    </div>
                  </div>
                  <div className="flex w-full flex-col items-start overflow-hidden rounded-xl border border-solid border-[#1f242b]">
                    <div className="flex w-full items-center gap-3 border-b border-solid border-[#1f242b] px-4 py-3 hover:bg-[#111418]">
                      <div className="flex grow shrink-0 basis-0 items-start">
                        <div className="flex items-center gap-0.5 rounded-[9999px] border border-solid border-[#4b5563] bg-[#232830] pl-1 pr-2">
                          <RoundStarFilled className="font-['Inter'] text-[12px] font-[400] leading-[18px] text-[#fbbf24]" />
                          <span className="font-['Inter'] text-[11px] font-[600] leading-[18px] text-[#fbbf24]">
                            Owner
                          </span>
                        </div>
                      </div>
                      <div className="flex w-20 flex-none items-center gap-1.5">
                        <RoundPeople className="font-['Inter'] text-[14px] font-[400] leading-[18px] text-[#7a828e]" />
                        <span className="font-['Inter'] text-[13px] font-[500] leading-[18px] text-[#c4c9d1]">
                          1 user
                        </span>
                      </div>
                      <div className="flex w-28 flex-none items-center gap-1.5 mobile:w-20">
                        <RoundLock className="font-['Inter'] text-[14px] font-[400] leading-[18px] text-[#7a828e]" />
                        <span className="font-['Inter'] text-[13px] font-[500] leading-[18px] text-[#c4c9d1]">
                          26/26
                        </span>
                      </div>
                      <div className="flex h-7 w-7 flex-none items-center justify-center rounded-[6px] border border-solid border-[#2a3038] bg-[#1a1e23] hover:bg-[#232830]">
                        <RoundModeEditOutline className="font-['Inter'] text-[14px] font-[400] leading-[14px] text-[#e5e7eb]" />
                      </div>
                    </div>
                    <div className="flex w-full items-center gap-3 border-b border-solid border-[#1f242b] px-4 py-3 hover:bg-[#111418]">
                      <div className="flex grow shrink-0 basis-0 items-start">
                        <div className="flex items-center gap-0.5 rounded-[9999px] border border-solid border-[#4b5563] bg-[#232830] pl-1 pr-2">
                          <RoundAdminPanelSettings className="font-['Inter'] text-[12px] font-[400] leading-[18px] text-[#fd9eff]" />
                          <span className="font-['Inter'] text-[11px] font-[600] leading-[18px] text-[#fd9eff]">
                            Admin
                          </span>
                        </div>
                      </div>
                      <div className="flex w-20 flex-none items-center gap-1.5">
                        <RoundPeople className="font-['Inter'] text-[14px] font-[400] leading-[18px] text-[#7a828e]" />
                        <span className="font-['Inter'] text-[13px] font-[500] leading-[18px] text-[#c4c9d1]">
                          1 user
                        </span>
                      </div>
                      <div className="flex w-28 flex-none items-center gap-1.5 mobile:w-20">
                        <RoundLock className="font-['Inter'] text-[14px] font-[400] leading-[18px] text-[#7a828e]" />
                        <span className="font-['Inter'] text-[13px] font-[500] leading-[18px] text-[#c4c9d1]">
                          22/26
                        </span>
                      </div>
                      <div className="flex h-7 w-7 flex-none items-center justify-center rounded-[6px] border border-solid border-[#2a3038] bg-[#1a1e23] hover:bg-[#232830]">
                        <RoundModeEditOutline className="font-['Inter'] text-[14px] font-[400] leading-[14px] text-[#e5e7eb]" />
                      </div>
                    </div>
                    <div className="flex w-full items-center gap-3 border-b border-solid border-[#1f242b] px-4 py-3 hover:bg-[#111418]">
                      <div className="flex grow shrink-0 basis-0 items-start">
                        <div className="flex items-center gap-0.5 rounded-[9999px] border border-solid border-[#4b5563] bg-[#232830] pl-1 pr-2">
                          <RoundNotifications className="font-['Inter'] text-[12px] font-[400] leading-[18px] text-[#a78bfa]" />
                          <span className="font-['Inter'] text-[11px] font-[600] leading-[18px] text-[#a78bfa]">
                            Moderator
                          </span>
                        </div>
                      </div>
                      <div className="flex w-20 flex-none items-center gap-1.5">
                        <RoundPeople className="font-['Inter'] text-[14px] font-[400] leading-[18px] text-[#7a828e]" />
                        <span className="font-['Inter'] text-[13px] font-[500] leading-[18px] text-[#c4c9d1]">
                          1 user
                        </span>
                      </div>
                      <div className="flex w-28 flex-none items-center gap-1.5 mobile:w-20">
                        <RoundLock className="font-['Inter'] text-[14px] font-[400] leading-[18px] text-[#7a828e]" />
                        <span className="font-['Inter'] text-[13px] font-[500] leading-[18px] text-[#c4c9d1]">
                          14/26
                        </span>
                      </div>
                      <div className="flex h-7 w-7 flex-none items-center justify-center rounded-[6px] border border-solid border-[#2a3038] bg-[#1a1e23] hover:bg-[#232830]">
                        <RoundModeEditOutline className="font-['Inter'] text-[14px] font-[400] leading-[14px] text-[#e5e7eb]" />
                      </div>
                    </div>
                    <div className="flex w-full items-center gap-3 border-b border-solid border-[#1f242b] px-4 py-3 hover:bg-[#111418]">
                      <div className="flex grow shrink-0 basis-0 items-start">
                        <div className="flex items-center gap-0.5 rounded-[9999px] border border-solid border-[#4b5563] bg-[#232830] pl-1 pr-2">
                          <BaselineHelp className="font-['Inter'] text-[12px] font-[400] leading-[18px] text-[#38bdf8]" />
                          <span className="font-['Inter'] text-[11px] font-[600] leading-[18px] text-[#38bdf8]">
                            Helper
                          </span>
                        </div>
                      </div>
                      <div className="flex w-20 flex-none items-center gap-1.5">
                        <RoundPeople className="font-['Inter'] text-[14px] font-[400] leading-[18px] text-[#7a828e]" />
                        <span className="font-['Inter'] text-[13px] font-[500] leading-[18px] text-[#7a828e]">
                          0 users
                        </span>
                      </div>
                      <div className="flex w-28 flex-none items-center gap-1.5 mobile:w-20">
                        <RoundLock className="font-['Inter'] text-[14px] font-[400] leading-[18px] text-[#7a828e]" />
                        <span className="font-['Inter'] text-[13px] font-[500] leading-[18px] text-[#c4c9d1]">
                          8/26
                        </span>
                      </div>
                      <div className="flex h-7 w-7 flex-none items-center justify-center rounded-[6px] border border-solid border-[#2a3038] bg-[#1a1e23] hover:bg-[#232830]">
                        <RoundModeEditOutline className="font-['Inter'] text-[14px] font-[400] leading-[14px] text-[#e5e7eb]" />
                      </div>
                    </div>
                    <div className="flex w-full items-center gap-3 px-4 py-3 hover:bg-[#111418]">
                      <div className="flex grow shrink-0 basis-0 items-start">
                        <div className="flex items-center gap-0.5 rounded-[9999px] border border-solid border-[#4b5563] bg-[#232830] pl-1 pr-2">
                          <RoundSearch className="font-['Inter'] text-[12px] font-[400] leading-[18px] text-[#9ca3af]" />
                          <span className="font-['Inter'] text-[11px] font-[600] leading-[18px] text-[#9ca3af]">
                            Viewer
                          </span>
                        </div>
                      </div>
                      <div className="flex w-20 flex-none items-center gap-1.5">
                        <RoundPeople className="font-['Inter'] text-[14px] font-[400] leading-[18px] text-[#7a828e]" />
                        <span className="font-['Inter'] text-[13px] font-[500] leading-[18px] text-[#7a828e]">
                          0 users
                        </span>
                      </div>
                      <div className="flex w-28 flex-none items-center gap-1.5 mobile:w-20">
                        <RoundLock className="font-['Inter'] text-[14px] font-[400] leading-[18px] text-[#7a828e]" />
                        <span className="font-['Inter'] text-[13px] font-[500] leading-[18px] text-[#c4c9d1]">
                          4/26
                        </span>
                      </div>
                      <div className="flex h-7 w-7 flex-none items-center justify-center rounded-[6px] border border-solid border-[#2a3038] bg-[#1a1e23] hover:bg-[#232830]">
                        <RoundModeEditOutline className="font-['Inter'] text-[14px] font-[400] leading-[14px] text-[#e5e7eb]" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex w-[360px] flex-none flex-col items-start gap-5 mobile:w-full mobile:flex-none">
                <div className="flex w-full flex-col items-start rounded-2xl px-px py-px shadow-[0px_0px_40px_-12px_#8b5cf680] bg-[linear-gradient(160deg,#a855f7_0%,#6d28d9_45%,#2e1065_100%)]">
                  <div className="flex w-full flex-col items-start gap-4 rounded-2xl px-5 py-5 bg-[linear-gradient(180deg,#1a1230_0%,#111418_60%)]">
                    <div className="flex w-full items-center gap-3">
                      <div className="flex h-9 w-9 flex-none items-center justify-center rounded-[8px] border border-solid border-[#4c1d95] bg-[#1c1230] shadow-[inset_0px_0px_14px_0px_#8b5cf654]">
                        <RoundLink className="font-['Inter'] text-[18px] font-[400] leading-[18px] text-[#c4b5fd]" />
                      </div>
                      <h3 className="grow shrink-0 basis-0 font-['Inter'] text-[17px] font-[700] leading-[24px] text-[#ffffff]">
                        Shared public user
                      </h3>
                      <div className="flex items-center rounded-[9999px] border border-solid border-[#a855f7] bg-[#2e1450] px-2 py-0.5">
                        <span className="font-['Inter'] text-[12px] font-[700] leading-[16px] text-[#ffffff]">
                          Plus
                        </span>
                      </div>
                    </div>
                    <p className="font-['Inter'] text-[14px] font-[400] leading-[22px] text-[#c4c9d1]">
                      Give friends access with a link. No accounts needed.
                      Custom role directly for these users.
                    </p>
                    <div className="flex h-10 w-full flex-none items-center gap-2 rounded-[8px] border border-dashed border-[#3b2a5c] bg-[#0b0d10] px-3 opacity-70">
                      <RoundLock className="font-['Inter'] text-[16px] font-[400] leading-[16px] text-[#7a828e]" />
                      <span className="grow shrink-0 basis-0 whitespace-nowrap font-['Inter'] text-[14px] font-[400] leading-[20px] text-[#7a828e] truncate">
                        tinkerdash.app/join/••••-••••
                      </span>
                      <RoundFolderCopy className="font-['Inter'] text-[16px] font-[400] leading-[16px] text-[#4b5563]" />
                    </div>
                    <div className="flex w-full items-start gap-2">
                      <RoundAdminPanelSettings className="font-['Inter'] text-[15px] font-[400] leading-[20px] text-[#a78bfa]" />
                      <span className="grow shrink-0 basis-0 font-['Inter'] text-[13px] font-[400] leading-[20px] text-[#aeb4bd]">
                        Every public user action is logged with their IP
                        address.
                      </span>
                    </div>
                    <div className="flex w-full items-start gap-2">
                      <RoundAdminPanelSettings className="font-['Inter'] text-[15px] font-[400] leading-[20px] text-[#a78bfa]" />
                      <span className="grow shrink-0 basis-0 font-['Inter'] text-[13px] font-[400] leading-[20px] text-[#aeb4bd]">
                        You can add a simple password, or other verification
                        method to prevent anything from joining in.
                      </span>
                    </div>
                    <div className="flex w-full items-center justify-center gap-1.5 rounded-[8px] border border-solid border-[#a855f7] px-3 py-2 shadow-[0px_0px_20px_-4px_#a855f7] bg-[linear-gradient(90deg,#7c3aed,#a855f7)] hover:opacity-90">
                      <RoundUpgrade className="font-['Inter'] text-[16px] font-[400] leading-[20px] text-[#ffffff]" />
                      <span className="font-['Inter'] text-[14px] font-[600] leading-[20px] text-[#ffffff]">
                        Upgrade to Plus
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex w-full flex-col items-start gap-4 rounded-2xl border border-solid border-[#1f242b] bg-[#0b0d10] px-5 py-5">
                  <div className="flex w-full items-center justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <RoundServerX1 className="font-['Inter'] text-[18px] font-[400] leading-[18px] text-[#22c55e]" />
                      <h3 className="font-['Inter'] text-[17px] font-[700] leading-[24px] text-[#ffffff]">
                        Tinker Agent
                      </h3>
                    </div>
                    <div className="flex items-center gap-1.5 rounded-[9999px] border border-solid border-[#22c55e66] bg-[#0f2418] px-2 py-0.5">
                      <div className="flex h-2 w-2 flex-none items-start rounded-[9999px] bg-[#22c55e]" />
                      <span className="font-['Inter'] text-[12px] font-[600] leading-[16px] text-[#86efac]">
                        Connected
                      </span>
                    </div>
                  </div>
                  <div className="flex w-full flex-col items-start gap-2.5">
                    <div className="flex w-full items-center justify-between gap-3">
                      <span className="font-['Inter'] text-[13px] font-[400] leading-[18px] text-[#9ca3af]">
                        Address
                      </span>
                      <span className="font-['Inter'] text-[13px] font-[500] leading-[18px] text-[#e5e7eb]">
                        192.168.1.42:7122
                      </span>
                    </div>
                    <div className="flex w-full items-center justify-between gap-3">
                      <span className="font-['Inter'] text-[13px] font-[400] leading-[18px] text-[#9ca3af]">
                        Version
                      </span>
                      <span className="font-['Inter'] text-[13px] font-[500] leading-[18px] text-[#e5e7eb]">
                        1.4.2
                      </span>
                    </div>
                    <div className="flex w-full items-center justify-between gap-3">
                      <span className="font-['Inter'] text-[13px] font-[400] leading-[18px] text-[#9ca3af]">
                        Uptime
                      </span>
                      <span className="font-['Inter'] text-[13px] font-[500] leading-[18px] text-[#e5e7eb]">
                        3d 4h
                      </span>
                    </div>
                    <div className="flex w-full items-center justify-between gap-3">
                      <span className="font-['Inter'] text-[13px] font-[400] leading-[18px] text-[#9ca3af]">
                        Connection
                      </span>
                      <span className="font-['Inter'] text-[13px] font-[500] leading-[18px] text-[#e5e7eb]">
                        Local network
                      </span>
                    </div>
                  </div>
                  <div className="flex h-px w-full flex-none items-start bg-[#1f242b]" />
                  <div className="flex items-center gap-1 hover:opacity-80">
                    <span className="font-['Inter'] text-[13px] font-[600] leading-[18px] text-[#22c55e]">
                      View connection
                    </span>
                    <Arrow className="font-['Inter'] text-[14px] font-[400] leading-[18px] text-[#22c55e]" />
                  </div>
                </div>
                <div className="flex w-full flex-col items-start gap-4 rounded-2xl border border-solid border-[#1f242b] bg-[#0b0d10] px-5 py-5">
                  <h3 className="font-['Inter'] text-[17px] font-[700] leading-[24px] text-[#ffffff]">
                    Recent activity
                  </h3>
                  <div className="flex w-full flex-col items-start gap-3">
                    <div className="flex w-full items-start gap-3">
                      <div className="flex h-7 w-7 flex-none items-center justify-center rounded-[6px] border border-solid border-[#2a3038] bg-[#1a1e23]">
                        <RoundRefresh className="font-['Inter'] text-[14px] font-[400] leading-[14px] text-[#22c55e]" />
                      </div>
                      <div className="flex min-w-[0px] grow shrink-0 basis-0 flex-col items-start">
                        <span className="font-['Inter'] text-[13px] font-[600] leading-[18px] text-[#ffffff]">
                          Acogan
                        </span>
                        <span className="font-['Inter'] text-[13px] font-[400] leading-[18px] text-[#c4c9d1]">
                          Restarted Vanilla SMP
                        </span>
                      </div>
                      <span className="font-['Inter'] text-[12px] font-[400] leading-[18px] text-[#7a828e]">
                        2h ago
                      </span>
                    </div>
                    <div className="flex w-full items-start gap-3">
                      <div className="flex h-7 w-7 flex-none items-center justify-center rounded-[6px] border border-solid border-[#2a3038] bg-[#1a1e23]">
                        <RoundLogOut className="font-['Inter'] text-[14px] font-[400] leading-[14px] text-[#ef4444]" />
                      </div>
                      <div className="flex min-w-[0px] grow shrink-0 basis-0 flex-col items-start">
                        <span className="font-['Inter'] text-[13px] font-[600] leading-[18px] text-[#ffffff]">
                          TomTomFX
                        </span>
                        <span className="font-['Inter'] text-[13px] font-[400] leading-[18px] text-[#c4c9d1]">
                          Kicked Griefer99
                        </span>
                      </div>
                      <span className="font-['Inter'] text-[12px] font-[400] leading-[18px] text-[#7a828e]">
                        5h ago
                      </span>
                    </div>
                    <div className="flex w-full items-start gap-3">
                      <div className="flex h-7 w-7 flex-none items-center justify-center rounded-[6px] border border-solid border-[#2a3038] bg-[#1a1e23]">
                        <RoundAdminPanelSettings className="font-['Inter'] text-[14px] font-[400] leading-[14px] text-[#fd9eff]" />
                      </div>
                      <div className="flex min-w-[0px] grow shrink-0 basis-0 flex-col items-start">
                        <span className="font-['Inter'] text-[13px] font-[600] leading-[18px] text-[#ffffff]">
                          CanBeGold
                        </span>
                        <span className="font-['Inter'] text-[13px] font-[400] leading-[18px] text-[#c4c9d1]">
                          Changed Moderator permissions
                        </span>
                      </div>
                      <span className="font-['Inter'] text-[12px] font-[400] leading-[18px] text-[#7a828e]">
                        1d ago
                      </span>
                    </div>
                    <div className="flex w-full items-start gap-3">
                      <div className="flex h-7 w-7 flex-none items-center justify-center rounded-[6px] border border-solid border-[#2a3038] bg-[#1a1e23]">
                        <RoundAdd className="font-['Inter'] text-[14px] font-[400] leading-[14px] text-[#38bdf8]" />
                      </div>
                      <div className="flex min-w-[0px] grow shrink-0 basis-0 flex-col items-start">
                        <span className="font-['Inter'] text-[13px] font-[600] leading-[18px] text-[#ffffff]">
                          CanBeGold
                        </span>
                        <span className="font-['Inter'] text-[13px] font-[400] leading-[18px] text-[#c4c9d1]">
                          Created user TomTomFX
                        </span>
                      </div>
                      <span className="font-['Inter'] text-[12px] font-[400] leading-[18px] text-[#7a828e]">
                        2d ago
                      </span>
                    </div>
                  </div>
                  <div className="flex h-px w-full flex-none items-start bg-[#1f242b]" />
                  <div className="flex items-center gap-1 hover:opacity-80">
                    <span className="font-['Inter'] text-[13px] font-[600] leading-[18px] text-[#22c55e]">
                      View all logs
                    </span>
                    <Arrow className="font-['Inter'] text-[14px] font-[400] leading-[18px] text-[#22c55e]" />
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

export default TinkerRedesign;