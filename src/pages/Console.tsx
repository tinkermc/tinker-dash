


import { AppHeader } from "@/ui/components/AppHeader";
import { Checkbox } from "@/ui/components/Checkbox";
import { ConsoleServerHeader } from "@/ui/components/ConsoleServerHeader";
import { LogEntry } from "@/ui/components/LogEntry";
import { TabBar } from "@/ui/components/TabBar";
import type { PageProps } from "./types";
import RoundSearch from "@/ui/icons/RoundSearch";

function Console({ onNavigate }: PageProps) {
  return (
    <div className="flex h-full flex-col bg-[#0b0d10]">
      <AppHeader
        statusText="No servers running"
        selectedServerLabel="Selected server"
        selectedServerIcon="https://res.cloudinary.com/subframe/image/upload/v1793563275/uploads/47820/uuknirpioirlhs3yrltd.png"
      />
      <main className="flex min-h-0 w-full flex-1 flex-col items-center overflow-y-auto bg-[#0b0d10] px-6 py-12 mobile:px-4 mobile:pt-6">
        <div className="flex w-full flex-col items-center">
          <TabBar selected="console" amountOfModsInstalled="0" onNavigate={onNavigate} />
          <section className="flex w-full flex-col items-start gap-0.5 rounded-3xl border border-solid border-[#1f242b] bg-[#111418] px-8 py-6 mobile:px-4">
            <div className="flex w-full items-center justify-between gap-4">
              <h1 className="font-['Inter'] text-[28px] font-[700] leading-[36px] text-[#ffffff]">
                Console
              </h1>
            </div>
            <div className="flex max-h-[448px] w-full flex-col items-start gap-1.5 rounded-[4px]">
              <div className="flex w-full items-center gap-2">
                <ConsoleServerHeader
                  image="https://res.cloudinary.com/subframe/image/upload/v1793563275/uploads/47820/uuknirpioirlhs3yrltd.png"
                  name="Vanilla SMP"
                  loader="Vanilla"
                  version="1.21.1"
                  port="25565"
                  currentPlayers="1"
                  maxPlayers="20"
                />
                <div className="flex grow shrink-0 basis-0 flex-col items-start gap-1">
                  <div className="flex w-full items-center justify-end gap-4">
                    <div className="flex items-center gap-2 rounded-[9999px] border-2 border-solid border-[#22c55e] bg-[#0f2418] px-3 py-1">
                      <div className="flex h-2 w-2 flex-none items-start rounded-[9999px] bg-[#22c55e]" />
                      <span className="font-['Inter'] text-[15px] font-[500] leading-[20px] text-[#ffffff]">
                        Running
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex w-full items-center gap-3 mobile:flex-wrap">
                <div className="flex h-8 w-56 flex-none items-center justify-between rounded-[8px] border border-solid border-[#2a3038] bg-[#1a1e23] px-2.5 focus-within:border-[#22c55e80] mobile:grow mobile:shrink-0 mobile:basis-0">
                  <span className="font-['Inter'] text-[14px] font-[400] leading-[20px] text-[#7a828e]">
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
                <div className="flex items-center gap-0.5 rounded-[8px] border border-solid border-[#2a3038] bg-[#1a1e23] px-0.5 py-0.5">
                  <div className="flex items-center rounded-[6px] border border-solid border-[#22c55e80] bg-[#123321] px-2.5 py-0.5">
                    <span className="font-['Inter'] text-[13px] font-[500] leading-[20px] text-[#ffffff]">
                      All
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 rounded-[6px] border border-solid border-transparent px-2.5 py-0.5 hover:bg-[#232830]">
                    <div className="flex h-1.5 w-1.5 flex-none items-start rounded-[9999px] bg-[#4ade80]" />
                    <span className="font-['Inter'] text-[13px] font-[400] leading-[20px] text-[#aeb4bd]">
                      Info
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 rounded-[6px] border border-solid border-transparent px-2.5 py-0.5 hover:bg-[#232830]">
                    <div className="flex h-1.5 w-1.5 flex-none items-start rounded-[9999px] bg-[#f7b900]" />
                    <span className="font-['Inter'] text-[13px] font-[400] leading-[20px] text-[#aeb4bd]">
                      Warn
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 rounded-[6px] border border-solid border-transparent px-2.5 py-0.5 hover:bg-[#232830]">
                    <div className="flex h-1.5 w-1.5 flex-none items-start rounded-[9999px] bg-[#ef4444]" />
                    <span className="font-['Inter'] text-[13px] font-[400] leading-[20px] text-[#aeb4bd]">
                      Error
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-1.5">
                  <Checkbox />
                  <span className="font-['Inter'] text-[13px] font-[400] leading-[20px] text-[#aeb4bd]">
                    Detailed time labels
                  </span>
                </div>
                <div className="flex grow shrink-0 basis-0 items-center justify-end gap-1.5">
                  <div className="flex h-8 w-8 flex-none items-center justify-center rounded-[8px] border border-solid border-[#22c55e80] bg-[#123321] text-[#86efac] hover:border-[#22c55e]">
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
                  <div className="flex h-8 w-8 flex-none items-center justify-center rounded-[8px] border border-solid border-[#2a3038] bg-[#1a1e23] text-[#aeb4bd] hover:bg-[#232830]">
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
                  <div className="flex h-8 w-8 flex-none items-center justify-center rounded-[8px] border border-solid border-[#2a3038] bg-[#1a1e23] text-[#aeb4bd] hover:bg-[#232830]">
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
                  <div className="flex h-8 w-8 flex-none items-center justify-center rounded-[8px] border border-solid border-[#2a3038] bg-[#1a1e23] hover:bg-[#232830]">
                    <RoundSearch className="font-['Inter'] text-[16px] font-[400] leading-[20px] text-[#aeb4bd]" />
                  </div>
                </div>
              </div>
              <div className="flex w-full flex-col items-start rounded-t-[10px] border border-solid border-[#1f242b] bg-[#07090b] px-4 py-3 overflow-auto relative mobile:h-[420px] mobile:flex-none">
                <div className="flex w-[360px] flex-col items-end gap-1 absolute top-3 right-3 z-10 mobile:absolute mobile:right-3 mobile:top-3 mobile:z-10 mobile:w-[calc(100%-24px)]">
                  <div className="flex w-full items-center gap-1.5 rounded-[6px] border border-solid border-[#2a2f36] bg-[#16191e] px-2 py-1.5 shadow-[0px_8px_24px_0px_#00000073]">
                    <RoundSearch className="font-['Inter'] text-[16px] font-[400] leading-[20px] text-[#7a828e]" />
                    <div className="flex h-6 grow shrink-0 basis-0 items-center rounded-[4px] border border-solid border-[#22c55e] bg-[#0b0d10] px-1.5">
                      <input
                        className="grow shrink-0 basis-0 self-stretch font-['Inter'] text-[12px] font-[400] leading-[18px] text-[#e5e7eb] outline-none placeholder:text-[#5b636e]"
                        placeholder="Find in logs"
                        value="nether"
                        type="text"
                      />
                    </div>
                    <span className="whitespace-nowrap font-['Inter'] text-[12px] font-[400] leading-[16px] text-[#7a828e]">
                      1 of 2
                    </span>
                    <div className="flex h-6 w-6 flex-none items-center justify-center rounded-[4px] border border-solid border-transparent hover:bg-[#232830]">
                      <span className="font-['Inter'] text-[11px] font-[500] leading-[16px] text-[#aeb4bd]">
                        Aa
                      </span>
                    </div>
                    <div className="flex h-6 w-6 flex-none items-center justify-center rounded-[4px] border border-solid border-transparent hover:bg-[#232830]">
                      <span className="font-['Inter'] text-[11px] font-[500] leading-[16px] text-[#aeb4bd]">
                        .*
                      </span>
                    </div>
                    <div className="flex h-4 w-px flex-none items-start bg-[#2a2f36]" />
                    <div className="flex h-6 w-6 flex-none items-center justify-center rounded-[4px] hover:bg-[#232830]">
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
                    <div className="flex h-6 w-6 flex-none items-center justify-center rounded-[4px] hover:bg-[#232830]">
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
                    <div className="flex h-6 w-6 flex-none items-center justify-center rounded-[4px] hover:bg-[#232830]">
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
                  <span className="font-['Inter'] text-[10px] font-[400] leading-[14px] text-[#5b636e]">
                    Enter next · Shift+Enter previous · Esc close
                  </span>
                </div>
                <LogEntry
                  timestamp="[14:01:58]"
                  source="[Server thread/INFO]:"
                  message="Starting minecraft server version 1.21.1"
                />
                <LogEntry
                  type="warn"
                  timestamp="[14:01:59]"
                  source="[Server thread/WARN]:"
                  message="Can't keep up! Is the server overloaded? Running 2034ms or 40 ticks behind"
                />
                <LogEntry
                  type="error"
                  timestamp="[14:01:59]"
                  source="[IO-Worker-4/ERROR]:"
                  message="Failed to save chunk [12, -4]"
                />
              </div>
              <div className="flex w-full items-center gap-2">
                <div className="flex h-9 grow shrink-0 basis-0 items-center gap-2 rounded-b-[8px] border border-solid border-[#2a3038] bg-[#07090b] px-3 focus-within:border-[#22c55e80]">
                  <span className="font-['Inter'] text-[14px] font-[700] leading-[20px] text-[#22c55e]">
                    &gt;
                  </span>
                  <input
                    className="grow shrink-0 basis-0 self-stretch font-['Inter'] text-[13px] font-[400] leading-[20px] text-[#e5e7eb] outline-none placeholder:text-[#5b636e]"
                    placeholder="Enter a command (e.g. /say Hello)"
                    value=""
                    type="text"
                  />
                </div>
                <div className="flex h-9 items-center gap-1.5 rounded-[8px] border border-solid border-[#22c55e] bg-[#22c55e] px-4 text-[#04130a] hover:bg-[#16a34a]">
                  <span className="font-['Inter'] text-[14px] font-[600] leading-[20px] text-[#04130a]">
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
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Console;