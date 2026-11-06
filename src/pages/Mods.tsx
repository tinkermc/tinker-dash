import { Switch } from "@/ui/components/Switch";
import BaselineAutoFixHigh from "@/ui/icons/BaselineAutoFixHigh";
import Curseforge from "@/ui/icons/Curseforge";
import Modrinth from "@/ui/icons/Modrinth";
import RoundCompass from "@/ui/icons/RoundCompass";
import RoundDownload from "@/ui/icons/RoundDownload";
import RoundDownloadDone from "@/ui/icons/RoundDownloadDone";
import RoundLayers from "@/ui/icons/RoundLayers";
import RoundList from "@/ui/icons/RoundList";
import RoundLock from "@/ui/icons/RoundLock";
import RoundMoreHoriz from "@/ui/icons/RoundMoreHoriz";
import RoundPeople from "@/ui/icons/RoundPeople";
import RoundSaveAll from "@/ui/icons/RoundSaveAll";
import RoundSearch from "@/ui/icons/RoundSearch";
import RoundServerX1 from "@/ui/icons/RoundServerX1";
import RoundTerminal from "@/ui/icons/RoundTerminal";
import RoundUpgrade from "@/ui/icons/RoundUpgrade";
import RoundWifi from "@/ui/icons/RoundWifi";
import Sort from "@/ui/icons/Sort";
import TinkerDash from "@/ui/icons/TinkerDash";
import type { PageProps } from "./types";

function Mods({ onNavigate }: PageProps) {
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
      <main className="flex w-full flex-col items-end justify-end px-6 py-12 mobile:px-4 mobile:pt-6">
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
            <div onClick={() => onNavigate("Mods")} className="flex items-center gap-1.5 rounded-t-xl border-x border-t border-solid border-[#22c55e] bg-[#123321] px-[7px] py-1 shadow-[0px_12px_32px_-4px_#22c55e] mobile:rounded-xl mobile:border-b grow justify-center cursor-pointer">
              <div className="flex h-6 w-6 flex-none items-center justify-center rounded-[9999px] border border-solid border-[#86efac] text-[12px] text-white">
                <RoundCompass className="font-['Inter'] text-[16px] font-[400] leading-[20px] text-[#e5e7eb]" />
              </div>
              <span className="font-['Inter'] text-[15px] font-[500] leading-[24px] text-[#ffffff]">
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
          <section className="flex h-[550px] w-full flex-none flex-col items-start gap-6 rounded-3xl border border-solid border-[#1f242b] bg-[#111418] px-8 py-6 mobile:h-auto mobile:px-4">
            <div className="flex w-full items-center justify-between gap-4">
              <h1 className="font-['Inter'] text-[28px] font-[700] leading-[36px] text-[#ffffff]">
                Mods
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
            <div className="flex h-[442px] w-full flex-none items-start gap-6 mobile:h-auto mobile:flex-col">
              <aside className="flex w-[380px] flex-none flex-col items-start gap-3 self-stretch border-r border-solid border-[#232830] pr-6 mobile:w-full mobile:flex-none mobile:border-none mobile:px-0 mobile:py-0">
                <div className="flex w-full items-center justify-between">
                  <span className="font-['Inter'] text-[14px] font-[600] leading-[20px] text-[#c4c9d1]">
                    Installed (3)
                  </span>
                  <div className="flex items-center gap-2">
                    <Sort className="font-['Inter'] text-[14px] font-[400] leading-[20px] text-[#c4c9d1]" />
                    <div className="flex items-center rounded-[8px] border border-solid border-[#2a3038] bg-[#1a1e23] pl-0.5 pr-2 hover:border-[#3a414b]">
                      <RoundUpgrade className="font-['Inter'] text-[16px] font-[400] leading-[20px] text-[#aeb4bd]" />
                      <span className="font-['Inter'] text-[13px] font-[400] leading-[20px] text-[#aeb4bd]">
                        Update all (1)
                      </span>
                    </div>
                    <div className="flex items-center rounded-[8px] border border-solid border-[#2a3038] bg-[#1a1e23] hover:border-[#3a414b]">
                      <RoundMoreHoriz className="font-['Inter'] text-[20px] font-[400] leading-[20px] text-[#aeb4bd]" />
                    </div>
                  </div>
                </div>
                <div className="flex w-full grow shrink-0 basis-0 flex-col items-start gap-2 pr-1 overflow-auto">
                  <div className="flex w-full items-center justify-center">
                    <div className="flex h-9 items-center justify-center gap-1 rounded-[8px] border border-solid border-[#ef444466] bg-[#7f1d1d] pl-1.5 pr-3">
                      <RoundLock className="font-['Inter'] text-[16px] font-[500] leading-[20px] text-[#ffffff]" />
                      <span className="font-['Inter'] text-[13px] font-[500] leading-[20px] text-[#ffffff]">
                        Server running: modifying locked
                      </span>
                    </div>
                  </div>
                  <div className="flex w-full flex-col items-start gap-2 opacity-50">
                    <div className="flex w-full items-center gap-3 rounded-[8px] bg-[#1a1e23] px-3 py-2">
                      <img
                        className="h-8 w-8 flex-none rounded-[6px] object-cover"
                        src="https://cdn.modrinth.com/data/P7dR8mSH/icon.png"
                      />
                      <div className="flex grow shrink-0 basis-0 items-center gap-3">
                        <div className="flex grow shrink-0 basis-0 flex-col items-start">
                          <span className="w-full whitespace-nowrap font-['Inter'] text-[14px] font-[500] leading-[20px] text-[#ffffff] truncate">
                            Fabric API
                          </span>
                          <span className="font-['Inter'] text-[12px] font-[400] leading-[16px] text-[#7a828e]">
                            v0.0.0
                          </span>
                        </div>
                      </div>
                      <Switch
                        className="h-6 w-11 flex-none"
                        checked={true}
                        onCheckedChange={() => {}}
                      />
                    </div>
                    <div className="flex w-full items-center gap-3 rounded-[8px] bg-[#1a1e23] px-3 py-2">
                      <img
                        className="h-8 w-8 flex-none rounded-[6px] object-cover"
                        src="https://cdn.modrinth.com/data/gvQqBUqZ/icon.png"
                      />
                      <div className="flex grow shrink-0 basis-0 items-center gap-3">
                        <div className="flex grow shrink-0 basis-0 flex-col items-start">
                          <span className="w-full whitespace-nowrap font-['Inter'] text-[14px] font-[500] leading-[20px] text-[#ffffff] truncate">
                            Lithium
                          </span>
                          <span className="font-['Inter'] text-[12px] font-[400] leading-[16px] text-[#7a828e]">
                            v0.0.0
                          </span>
                        </div>
                        <div className="flex items-center rounded-[9999px] border border-solid border-[#22c55e80] bg-[#123321] pl-0.5 pr-2">
                          <RoundUpgrade className="font-['Inter'] text-[16px] font-[400] leading-[20px] text-[#86efac]" />
                          <span className="font-['Inter'] text-[11px] font-[500] leading-[18px] text-[#86efac]">
                            Update
                          </span>
                        </div>
                      </div>
                      <Switch
                        className="h-6 w-11 flex-none"
                        checked={true}
                        onCheckedChange={() => {}}
                      />
                    </div>
                    <div className="flex w-full items-center gap-3 rounded-[8px] bg-[#1a1e23] px-3 py-2">
                      <img
                        className="h-8 w-8 flex-none rounded-[6px] object-cover"
                        src="https://cdn.modrinth.com/data/OhduvhIc/5ea1f538e66ee4d4e5e571ad952cba0e06e0bd5c.png"
                      />
                      <div className="flex grow shrink-0 basis-0 items-center gap-3 opacity-50">
                        <div className="flex grow shrink-0 basis-0 flex-col items-start">
                          <span className="w-full whitespace-nowrap font-['Inter'] text-[14px] font-[500] leading-[20px] text-[#ffffff] truncate">
                            VeinMiner
                          </span>
                          <span className="font-['Inter'] text-[12px] font-[400] leading-[16px] text-[#7a828e]">
                            v0.0.0 · Disabled
                          </span>
                        </div>
                      </div>
                      <Switch
                        className="h-6 w-11 flex-none"
                        checked={false}
                        onCheckedChange={() => {}}
                      />
                    </div>
                  </div>
                </div>
              </aside>
              <div className="flex grow shrink-0 basis-0 flex-col items-start gap-3 self-stretch mobile:flex-none">
                <div className="flex w-full items-center justify-between gap-2">
                  <span className="font-['Inter'] text-[14px] font-[600] leading-[20px] text-[#c4c9d1]">
                    Browse 
                  </span>
                  <div className="flex items-center gap-1 rounded-[8px] border border-solid border-[#2a3038] bg-[#0b0d10] px-1 py-1">
                    <div className="flex items-center gap-1 rounded-[6px] border border-solid border-[#22c55e80] bg-[#123321] pl-2.5 pr-3">
                      <Modrinth className="font-['Inter'] text-[13px] font-[500] leading-[20px] text-[#46d66d]" />
                      <span className="font-['Inter'] text-[13px] font-[500] leading-[20px] text-[#ffffff]">
                        Modrinth
                      </span>
                    </div>
                    <div className="flex items-center gap-1 rounded-[6px] border border-solid border-transparent pl-2.5 pr-3 hover:bg-[#1a1e23] opacity-25">
                      <Curseforge className="font-['Inter'] text-[13px] font-[500] leading-[20px] text-[#f16436]" />
                      <span className="font-['Inter'] text-[13px] font-[400] leading-[20px] text-[#7a828e]">
                        CurseForge
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex h-10 w-full flex-none items-center gap-2 rounded-[8px] border border-solid border-[#2a3038] bg-[#0b0d10] px-3 focus-within:border-[#22c55e]">
                  <RoundSearch className="font-['Inter'] text-[18px] font-[400] leading-[20px] text-[#7a828e]" />
                  <input
                    className="grow shrink-0 basis-0 self-stretch font-['Inter'] text-[14px] font-[400] leading-[21px] text-[#ffffff] outline-none placeholder:text-[#7a828e]"
                    placeholder="Search Modrinth for NeoForge 1.21.1 mods"
                    value=""
                    type="search"
                  />
                </div>
                <div className="flex w-full flex-wrap items-center gap-2">
                  <div className="flex items-center gap-1 rounded-[9999px] border border-solid border-[#22c55e80] bg-[#123321] px-3 py-0.5">
                    <BaselineAutoFixHigh className="font-['Inter'] text-[16px] font-[400] leading-[20px] text-[#ffffff]" />
                    <span className="font-['Inter'] text-[13px] font-[400] leading-[20px] text-[#ffffff]">
                      Performance and Optimization
                    </span>
                  </div>
                  <div className="flex items-center rounded-[9999px] border border-solid border-[#2a3038] bg-[#1a1e23] px-3 py-0.5 hover:border-[#3a414b]">
                    <span className="font-['Inter'] text-[13px] font-[400] leading-[20px] text-[#aeb4bd]">
                      Utility
                    </span>
                  </div>
                  <div className="flex items-center rounded-[9999px] border border-solid border-[#2a3038] bg-[#1a1e23] px-3 py-0.5 hover:border-[#3a414b]">
                    <span className="font-['Inter'] text-[13px] font-[400] leading-[20px] text-[#aeb4bd]">
                      dependecy
                    </span>
                  </div>
                  <div className="flex items-center rounded-[9999px] border border-solid border-[#2a3038] bg-[#1a1e23] px-3 py-0.5 hover:border-[#3a414b]">
                    <span className="font-['Inter'] text-[13px] font-[400] leading-[20px] text-[#aeb4bd]">
                      Tech
                    </span>
                  </div>
                </div>
                <div className="w-full grow shrink-0 basis-0 items-start gap-3 pr-1 grid grid-cols-2 content-start overflow-auto mobile:grid mobile:content-start mobile:overflow-auto mobile:grid-cols-1">
                  <div className="flex flex-col items-start gap-2 self-stretch rounded-xl border border-solid border-[#232830] bg-[#1a1e23] px-3 py-3">
                    <div className="flex w-full items-center gap-3">
                      <div className="flex h-8 w-8 flex-none items-center justify-center rounded-[6px] bg-[#6b4a2f]">
                        <span className="font-['Inter'] text-[14px] font-[700] leading-[20px] text-[#ffffff]">
                          C
                        </span>
                      </div>
                      <div className="flex grow shrink-0 basis-0 flex-col items-start">
                        <div className="flex w-full items-center gap-2">
                          <span className="grow shrink-0 basis-0 whitespace-nowrap font-['Inter'] text-[14px] font-[600] leading-[20px] text-[#ffffff] truncate">
                            Mod Name
                          </span>
                        </div>
                        <span className="font-['Inter'] text-[12px] font-[400] leading-[16px] text-[#7a828e]">
                          by simibubi
                        </span>
                      </div>
                    </div>
                    <span className="line-clamp-1 w-full font-['Inter'] text-[12px] font-[400] leading-[18px] text-[#aeb4bd]">
                      Description
                    </span>
                    <div className="flex w-full items-center justify-between gap-2">
                      <div className="flex items-center gap-1">
                        <RoundDownload className="font-['Inter'] text-[14px] font-[400] leading-[16px] text-[#7a828e]" />
                        <span className="font-['Inter'] text-[12px] font-[400] leading-[16px] text-[#7a828e]">
                          0 downloads
                        </span>
                      </div>
                      <div className="flex items-center gap-1 rounded-[8px] border border-solid border-[#2a3038] bg-[#1a1e23] px-3 py-1 opacity-70">
                        <RoundDownloadDone className="font-['Inter'] text-[16px] font-[400] leading-[20px] text-[#ffffff]" />
                        <span className="font-['Inter'] text-[13px] font-[500] leading-[20px] text-[#7a828e]">
                          Installed 
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start gap-2 self-stretch rounded-xl border border-solid border-[#232830] bg-[#1a1e23] px-3 py-3">
                    <div className="flex w-full items-center gap-3">
                      <div className="flex h-8 w-8 flex-none items-center justify-center rounded-[6px] bg-[#2f4f6b]">
                        <span className="font-['Inter'] text-[14px] font-[700] leading-[20px] text-[#ffffff]">
                          M
                        </span>
                      </div>
                      <div className="flex grow shrink-0 basis-0 flex-col items-start">
                        <span className="w-full whitespace-nowrap font-['Inter'] text-[14px] font-[600] leading-[20px] text-[#ffffff] truncate">
                          Mod Name
                        </span>
                        <span className="font-['Inter'] text-[12px] font-[400] leading-[16px] text-[#7a828e]">
                          by embeddedt
                        </span>
                      </div>
                    </div>
                    <span className="line-clamp-1 w-full font-['Inter'] text-[12px] font-[400] leading-[18px] text-[#aeb4bd]">
                      Description
                    </span>
                    <div className="flex w-full items-center justify-between gap-2">
                      <div className="flex items-center gap-1">
                        <RoundDownload className="font-['Inter'] text-[14px] font-[400] leading-[16px] text-[#7a828e]" />
                        <span className="font-['Inter'] text-[12px] font-[400] leading-[16px] text-[#7a828e]">
                          0 downloads
                        </span>
                      </div>
                      <div className="flex items-center gap-1 rounded-[8px] border border-solid border-[#22c55e80] bg-[#123321] px-3 py-1 hover:border-[#22C55E]">
                        <RoundDownload className="font-['Inter'] text-[16px] font-[400] leading-[20px] text-[#ffffff]" />
                        <span className="font-['Inter'] text-[13px] font-[500] leading-[20px] text-[#ffffff]">
                          Install
                        </span>
                      </div>
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

export default Mods;