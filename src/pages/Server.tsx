


import { AppHeader } from "@/ui/components/AppHeader";
import { ConsoleServerHeader } from "@/ui/components/ConsoleServerHeader";
import { PrimaryButton } from "@/ui/components/PrimaryButton";
import { TabBar } from "@/ui/components/TabBar";
import type { PageProps } from "./types";
import { UnsavedChangesPrompt } from "@/ui/components/UnsavedChangesPrompt";
import OutlineLabel from "@/ui/icons/OutlineLabel";
import RoundCode from "@/ui/icons/RoundCode";
import RoundMemory from "@/ui/icons/RoundMemory";
import RoundPeople from "@/ui/icons/RoundPeople";
import RoundPersonAddAlt1 from "@/ui/icons/RoundPersonAddAlt1";
import RoundPlayArrow from "@/ui/icons/RoundPlayArrow";
import RoundRefresh from "@/ui/icons/RoundRefresh";
import RoundSettingsEthernet from "@/ui/icons/RoundSettingsEthernet";
import RoundShortText from "@/ui/icons/RoundShortText";
import RoundStop from "@/ui/icons/RoundStop";
import RoundTimer from "@/ui/icons/RoundTimer";
import RoundTroubleshoot from "@/ui/icons/RoundTroubleshoot";
import RoundUpload from "@/ui/icons/RoundUpload";
import Versions from "@/ui/icons/Versions";

function Server({ onNavigate }: PageProps) {
  return (
    <div className="flex h-full flex-col bg-[#0b0d10]">
      <AppHeader
        statusText="No servers running"
        selectedServerLabel="Selected server"
        selectedServerIcon="https://res.cloudinary.com/subframe/image/upload/v1793563275/uploads/47820/uuknirpioirlhs3yrltd.png"/>
      <main className="flex min-h-0 w-full flex-1 flex-col items-center overflow-y-auto bg-[#0b0d10] px-6 py-12 mobile:px-4 mobile:pt-6">
        <div className="flex w-full flex-col items-center">
          <TabBar selected="server" amountOfModsInstalled="0" onNavigate={onNavigate} />
          <section className="flex w-full flex-col items-start gap-6 rounded-3xl border border-solid border-[#1f242b] bg-[#111418] px-8 py-6 mobile:px-4">
            <div className="flex w-full items-center justify-between gap-4">
              <h1 className="font-['Inter'] text-[28px] font-[700] leading-[36px] text-[#ffffff]">
                Server
              </h1>
            </div>
            <div className="flex w-full flex-col items-start gap-5 rounded-2xl border border-solid border-[#1f242b] bg-[#0e1114] px-6 py-5 mobile:px-4">
              <div className="flex w-full items-center gap-4 mobile:flex-col mobile:items-start">
                <div className="flex grow shrink-0 basis-0 items-center gap-3">
                  <ConsoleServerHeader
                    image="https://res.cloudinary.com/subframe/image/upload/v1793563275/uploads/47820/uuknirpioirlhs3yrltd.png"
                    name="Vanilla SMP"
                    loader="Vanilla"
                    version="1.21.1"
                    port="25565"
                    currentPlayers="1"
                    maxPlayers="20"
                  />
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
            <div className="flex w-full grow shrink-0 basis-0 items-center gap-6">
              <div className="flex grow shrink-0 basis-0 flex-col items-start gap-4 rounded-2xl border border-solid border-[#1f242b] bg-[#0e1114] px-6 py-5 mobile:px-4">
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
                </div>
              </div>
              <div className="flex grow shrink-0 basis-0 flex-col items-start gap-4 self-stretch rounded-2xl border border-solid border-[#1f242b] bg-[#0e1114] px-6 py-5 mobile:px-4">
                <span className="font-['Inter'] text-[16px] font-[600] leading-[24px] text-[#ffffff]">
                  Software
                </span>
                <div className="flex w-full flex-col items-start gap-6 mobile:gap-4">
                  <div className="flex w-full flex-col items-start gap-2">
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
                  <div className="flex w-full flex-col items-start gap-2">
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
              <div className="flex grow shrink-0 basis-0 flex-col items-start gap-4 self-stretch rounded-2xl border border-solid border-[#1f242b] bg-[#0e1114] px-6 py-5 mobile:px-4">
                <span className="font-['Inter'] text-[16px] font-[600] leading-[24px] text-[#ffffff]">
                  Resources &amp; network
                </span>
                <div className="flex w-full flex-col items-start gap-6 mobile:gap-4">
                  <div className="flex w-full flex-col items-start gap-2">
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
                  <div className="flex w-full flex-col items-start gap-2">
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
            </div>
            <div className="flex items-start gap-3">
              <PrimaryButton
                tooltip="When you hover over this button, this text appears!"
                icon={<RoundPersonAddAlt1 />}
                text="manage whitelisted Players"
                color="gray"
              />
              <PrimaryButton
                tooltip="When you hover over this button, this text appears!"
                icon={<RoundUpload />}
                text="Import Server"
                color="gray"
              />
            </div>
            <div className="flex w-full flex-col items-center gap-6">
              <UnsavedChangesPrompt amountOfUnsavedChanges="3" />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Server;