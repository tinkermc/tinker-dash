import type { PageProps } from "./types";
import { DropdownMenu } from "@/ui/components/DropdownMenu";
import { Switch } from "@/ui/components/Switch";
import RoundAdd from "@/ui/icons/RoundAdd";
import RoundCompass from "@/ui/icons/RoundCompass";
import RoundDownload from "@/ui/icons/RoundDownload";
import RoundLayers from "@/ui/icons/RoundLayers";
import RoundList from "@/ui/icons/RoundList";
import RoundLogIn from "@/ui/icons/RoundLogIn";
import RoundPeople from "@/ui/icons/RoundPeople";
import RoundPersonRemove from "@/ui/icons/RoundPersonRemove";
import RoundSaveAll from "@/ui/icons/RoundSaveAll";
import RoundServerX1 from "@/ui/icons/RoundServerX1";
import RoundTerminal from "@/ui/icons/RoundTerminal";
import RoundWifi from "@/ui/icons/RoundWifi";
import TinkerDash from "@/ui/icons/TinkerDash";
import * as SubframeCore from "@subframe/core";

function Connection({ onNavigate }: PageProps) {
  return (
    <div className="flex h-screen w-full flex-col overflow-hidden items-start bg-[#0b0d10] font-['Inter']">
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
        <div className="flex items-center justify-end gap-0.5 rounded-r-[9999px] border-2 border-solid border-[#96a2b040] bg-[#1a1e23] pl-1.5 pr-3 py-1">
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
          <span className="font-['Inter'] text-[15px] font-[500] leading-[20px] text-[#ffffff]">
            Selected server
          </span>
        </div>
      </header>
      <main className="flex w-full flex-col items-center px-6 pt-8 pb-6 mobile:px-4 mobile:pt-6">
        <div className="flex w-full flex-col items-center">
          <nav className="flex w-full items-end justify-center gap-1.5 px-6 mobile:flex-wrap mobile:px-0 mobile:pb-2">
            <div onClick={() => onNavigate("Connection")} className="flex grow cursor-pointer items-center justify-center gap-1.5 rounded-t-xl border-x border-t border-solid border-[#22c55e] bg-[#123321] px-[7px] py-1 mobile:rounded-xl mobile:border-b">
              <div className="flex h-6 w-6 flex-none items-center justify-center rounded-[9999px] border border-solid border-[#86efac] text-[12px] text-white">
                <RoundWifi className="font-['Inter'] text-[18px] font-[400] leading-[20px] text-[#e5e7eb]" />
              </div>
              <span className="font-['Inter'] text-[15px] font-[500] leading-[24px] text-[#ffffff]">
                Connection
              </span>
            </div>
            <div onClick={() => onNavigate("Server")} className="flex grow cursor-pointer items-center justify-center gap-1.5 rounded-t-xl bg-[#0f2418] px-[7px] py-1 mobile:rounded-xl">
              <div className="flex h-6 w-6 flex-none items-center justify-center rounded-[9999px] border border-solid border-[#4b5563] text-[12px] text-[#e5e7eb]">
                <RoundServerX1 className="font-['Inter'] text-[18px] font-[400] leading-[20px] text-[#e5e7eb]" />
              </div>
              <span className="font-['Inter'] text-[15px] font-[400] leading-[24px] text-[#e5e7eb]">
                Server
              </span>
            </div>
            <div onClick={() => onNavigate("Mods")} className="flex grow cursor-pointer items-center justify-center gap-1.5 rounded-t-xl bg-[#0f2418] px-[7px] py-1 opacity-50 mobile:rounded-xl">
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
            <div onClick={() => onNavigate("Explorer")} className="flex grow cursor-pointer items-center justify-center gap-1.5 rounded-t-xl bg-[#0f2418] px-[7px] py-1 opacity-50 mobile:rounded-xl">
              <div className="flex h-6 w-6 flex-none items-center justify-center rounded-[9999px] border border-solid border-[#4b5563] text-[12px] text-[#e5e7eb]">
                <RoundList className="font-['Inter'] text-[18px] font-[400] leading-[20px] text-[#e5e7eb]" />
              </div>
              <span className="font-['Inter'] text-[15px] font-[400] leading-[24px] text-[#e5e7eb]">
                Explorer
              </span>
            </div>
            <div onClick={() => onNavigate("World")} className="flex grow cursor-pointer items-center justify-center gap-1.5 rounded-t-xl bg-[#0f2418] px-[7px] py-1 opacity-50 mobile:rounded-xl">
              <div className="flex h-6 w-6 flex-none items-center justify-center rounded-[9999px] border border-solid border-[#4b5563] text-[12px] text-[#e5e7eb]">
                <RoundLayers className="font-['Inter'] text-[18px] font-[400] leading-[20px] text-[#e5e7eb]" />
              </div>
              <span className="font-['Inter'] text-[15px] font-[400] leading-[24px] text-[#e5e7eb]">
                World
              </span>
            </div>
            <div onClick={() => onNavigate("Players")} className="flex grow cursor-pointer items-center justify-center gap-1.5 rounded-t-xl bg-[#0f2418] px-[7px] py-1 opacity-50 mobile:rounded-xl">
              <div className="flex h-6 w-6 flex-none items-center justify-center rounded-[9999px] border border-solid border-[#4b5563] text-[12px] text-[#e5e7eb]">
                <RoundPeople className="font-['Inter'] text-[16px] font-[400] leading-[20px] text-[#e5e7eb]" />
              </div>
              <span className="font-['Inter'] text-[15px] font-[400] leading-[24px] text-[#e5e7eb]">
                Players
              </span>
            </div>
            <div onClick={() => onNavigate("Console")} className="flex grow cursor-pointer items-center justify-center gap-1.5 rounded-t-xl bg-[#0f2418] px-[7px] py-1 opacity-50 mobile:rounded-xl">
              <div className="flex h-6 w-6 flex-none items-center justify-center rounded-[9999px] border border-solid border-[#4b5563] text-[12px] text-[#e5e7eb]">
                <RoundTerminal className="font-['Inter'] text-[16px] font-[400] leading-[20px] text-[#e5e7eb]" />
              </div>
              <span className="font-['Inter'] text-[15px] font-[400] leading-[24px] text-[#e5e7eb]">
                Console
              </span>
            </div>
            <div onClick={() => onNavigate("Backups")} className="flex grow cursor-pointer items-center justify-center gap-1.5 rounded-t-xl bg-[#0f2418] px-[7px] py-1 opacity-50 mobile:rounded-xl">
              <div className="flex h-6 w-6 flex-none items-center justify-center rounded-[9999px] border border-solid border-[#4b5563] text-[12px] text-[#e5e7eb]">
                <RoundSaveAll className="font-['Inter'] text-[16px] font-[400] leading-[20px] text-[#e5e7eb]" />
              </div>
              <span className="font-['Inter'] text-[15px] font-[400] leading-[24px] text-[#e5e7eb]">
                Backups
              </span>
            </div>
            <div onClick={() => onNavigate("Tinker")} className="flex grow cursor-pointer items-center justify-center gap-1.5 rounded-t-xl bg-[#0f2418] px-[7px] py-1 opacity-50 mobile:rounded-xl">
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
            <div className="flex w-full max-w-[640px] flex-col items-start gap-5">
              <div className="flex w-full items-start gap-6 mobile:flex-col">
                <div className="flex grow shrink-0 basis-0 flex-col items-start gap-2">
                  <div className="flex items-center gap-1">
                    <span className="font-['Inter'] text-[14px] font-[500] leading-[20px] text-[#c4c9d1]">
                      Tinker Agent Link
                    </span>
                    <span className="font-['Inter'] text-[14px] font-[500] leading-[20px] text-[#3b9eff] underline hover:text-[#7cbcff]">
                      (learn more)
                    </span>
                  </div>
                  <div className="flex w-full items-center gap-2">
                    <input
                      className="h-10 grow shrink-0 basis-0 rounded-l-[8px] border border-solid border-[#2a3038] bg-[#0b0d10] px-3 font-['Inter'] text-[14px] font-[400] leading-[21px] text-[#ffffff] outline-none placeholder:text-[#7a828e] focus-within:border-[#22c55e]"
                      placeholder="Address (eg. 192.168.1.xxx)"
                      value=""
                      type="text"
                    />
                    <input
                      className="h-10 w-28 flex-none rounded-r-[8px] border border-solid border-[#2a3038] bg-[#0b0d10] pl-1 font-['Inter'] text-[14px] font-[400] leading-[21px] text-[#ffffff] outline-none placeholder:text-[#7a828e] focus-within:border-[#22c55e]"
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
                  <SubframeCore.DropdownMenu.Root>
                    <SubframeCore.DropdownMenu.Trigger asChild={true}>
                      <div className="flex h-10 w-full flex-none items-center justify-between rounded-[8px] border border-solid border-[#2a3038] bg-[#0b0d10] px-3 hover:border-[#3a414b]">
                        <span className="font-['Inter'] text-[14px] font-[400] leading-[20px] text-[#7a828e]">
                          Dropdown
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
                    </SubframeCore.DropdownMenu.Trigger>
                    <SubframeCore.DropdownMenu.Portal>
                      <SubframeCore.DropdownMenu.Content
                        side="bottom"
                        align="start"
                        sideOffset={4}
                        asChild={true}
                      >
                        <DropdownMenu>
                          <div className="flex w-full items-center">
                            <img
                              className="h-5 w-5 flex-none rounded-[9999px] object-contain"
                              src="https://res.cloudinary.com/subframe/image/upload/v1793570629/uploads/47820/nbqy12nqhfaflgpfli1n.webp"
                            />
                            <DropdownMenu.DropdownItem
                              className="h-auto grow shrink-0 basis-0"
                              rightSlot={
                                <div className="flex flex-col items-end justify-center">
                                  <RoundPersonRemove className="font-['Inter'] text-[16px] font-[400] leading-[20px] text-[#171717]" />
                                </div>
                              }
                            >
                              Admin
                            </DropdownMenu.DropdownItem>
                          </div>
                          <div className="flex w-full items-center">
                            <RoundAdd className="font-['Inter'] text-[20px] font-[400] leading-[20px] text-[#171717]" />
                            <DropdownMenu.DropdownItem className="h-auto grow shrink-0 basis-0">
                              Add new account
                            </DropdownMenu.DropdownItem>
                          </div>
                        </DropdownMenu>
                      </SubframeCore.DropdownMenu.Content>
                    </SubframeCore.DropdownMenu.Portal>
                  </SubframeCore.DropdownMenu.Root>
                </div>
              </div>
              <div className="flex h-px w-[640px] flex-none items-start bg-[#232830]" />
              <div className="flex w-full flex-col items-start gap-3">
                <span className="font-['Inter'] text-[14px] font-[600] leading-[20px] text-[#c4c9d1]">
                  HTTPS Certificate
                </span>
                <div className="flex flex-col items-start gap-1 pl-4">
                  <span className="font-['Inter'] text-[14px] font-[400] leading-[20px] text-[#aeb4bd]">
                    Allow self-signed certificates
                  </span>
                  <div className="flex items-center gap-2">
                    <Switch
                      className="h-6 w-11 flex-none"
                      checked={false}
                      onCheckedChange={() => {}}
                    />
                    <div className="flex items-center gap-1 rounded-[8px]">
                      <span className="font-['Inter'] text-[10px] font-[400] leading-[20px] text-[#aeb4bd40]">
                        If connection is failing, try enabling/disbling.
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="font-['Inter'] text-[14px] font-[400] leading-[20px] text-[#aeb4bd]">
                      Use Connection Tunnel (no Tailscale, etc)
                    </span>
                    <div className="flex items-center rounded-[9999px] border border-solid border-[#a855f7] bg-[#2e1450] px-1 py-0.5">
                      <span className="grow shrink-0 basis-0 self-stretch font-['Inter'] text-[11px] font-[600] leading-[14px] text-[#e9d5ff]">
                        Plus
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Switch
                      className="h-6 w-11 flex-none"
                      disabled={true}
                      checked={false}
                      onCheckedChange={() => {}}
                    />
                    <span className="font-['Inter'] text-[10px] font-[400] leading-[20px] text-[#aeb4bd40]">
                      Makes using Tinker outside your home network seamless.
                      This feature requires Plus.
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex h-px w-80 flex-none items-start bg-[#232830]" />
              <div className="flex flex-col items-start gap-1">
                <div className="flex items-start gap-2">
                  <div className="flex items-center gap-0.5 rounded-[8px] border border-solid border-[#22c55e] bg-[#123321] px-2 hover:border-[#3a414b]">
                    <span className="font-['Inter'] text-[14px] font-[400] leading-[20px] text-[#ffffff]">
                      Connect
                    </span>
                    <RoundLogIn className="font-['Inter'] text-[12px] font-[400] leading-[24px] text-[#ffffff]" />
                  </div>
                  <span className="font-['Inter'] text-[10px] font-[400] leading-[20px] text-[#aeb4bd40]">
                    Response shown here.
                  </span>
                </div>
                <div className="flex flex-col items-start gap-1">
                  <span className="font-['Inter'] text-[14px] font-[400] leading-[20px] text-[#aeb4bd]">
                    Auto Connect
                  </span>
                  <div className="flex items-center gap-2">
                    <Switch
                      className="h-6 w-11 flex-none"
                      checked={false}
                      onCheckedChange={() => {}}
                    />
                    <div className="flex items-center gap-1 rounded-[8px]">
                      <span className="font-['Inter'] text-[10px] font-[400] leading-[20px] text-[#aeb4bd40]">
                        When Tinker opens, auto connect with my saved
                        credentials.
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

export default Connection;