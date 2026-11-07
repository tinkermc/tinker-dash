


import { useState } from "react";
import { AppHeader } from "@/ui/components/AppHeader";
import { StatCard } from "@/ui/components/StatCard";
import { Switch } from "@/ui/components/Switch";
import { TabBar } from "@/ui/components/TabBar";
import RoundCheckCircleOutline from "@/ui/icons/RoundCheckCircleOutline";
import RoundFolderZip from "@/ui/icons/RoundFolderZip";
import RoundLogIn from "@/ui/icons/RoundLogIn";
import RoundMemory from "@/ui/icons/RoundMemory";
import RoundSettingsEthernet from "@/ui/icons/RoundSettingsEthernet";
import RoundWifi from "@/ui/icons/RoundWifi";
import TopSpeed20Filled from "@/ui/icons/TopSpeed20Filled";
import type { PageProps } from "./types";

function Connection({ onNavigate }: PageProps) {
  const [allowSelfSignedCertificates, setAllowSelfSignedCertificates] = useState(false);
  const [autoConnect, setAutoConnect] = useState(true);

  return (
    <div className="flex h-full flex-col bg-[#0b0d10]">
      <AppHeader
        statusText="No servers running"
        selectedServerLabel="Selected server"
        selectedServerIcon="https://res.cloudinary.com/subframe/image/upload/v1793563275/uploads/47820/uuknirpioirlhs3yrltd.png"/>
      <main className="flex min-h-0 w-full flex-1 flex-col items-center overflow-y-auto bg-[#0b0d10] px-6 py-12 mobile:px-4 mobile:pt-6">
        <div className="flex w-full flex-col items-center">
          <TabBar selected="connection-connected" amountOfModsInstalled="0" onNavigate={onNavigate} />
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
            <div className="flex w-full flex-col items-start gap-6">
              <div className="flex w-full flex-col items-start gap-4 rounded-xl border border-solid border-[#1f242b] bg-[#12151a] px-5 py-5 mobile:px-4">
                <div className="flex w-full items-center gap-3">
                  <div className="flex h-11 w-11 flex-none items-center justify-center rounded-[10px] border border-solid border-[#22c55e80] bg-[#0f2418]">
                    <RoundWifi className="font-['Inter'] text-[22px] font-[400] leading-[24px] text-[#86efac]" />
                  </div>
                  <div className="flex grow shrink-0 basis-0 flex-col items-start gap-0.5">
                    <span className="font-['Inter'] text-[18px] font-[700] leading-[26px] text-[#ffffff]">
                      Connected to Tinker Agent
                    </span>
                    <span className="font-['Inter'] text-[12px] font-[400] leading-[16px] text-[#7a828e]">
                      192.168.1.42:7122 · Connected as CanBeGold · Connected 3h
                      ago
                    </span>
                  </div>
                </div>
                <div className="flex w-full items-center justify-center gap-2 mobile:grid mobile:grid-cols-1">
                  <StatCard
                    className="h-auto w-auto flex-none"
                    icon={<TopSpeed20Filled />}
                    label="Latency"
                    value="18 ms"
                  />
                  <StatCard
                    className="h-auto w-auto flex-none"
                    label="Host Uptime"
                    value="3 hours"
                  />
                  <StatCard
                    className="h-auto w-auto flex-none"
                    label="Agent Uptime"
                    value="1 hour"
                  />
                  <StatCard
                    className="h-auto w-auto flex-none"
                    icon={<RoundSettingsEthernet />}
                    label="Connection"
                    value="Local network"
                  />
                  <StatCard
                    className="h-auto w-auto flex-none"
                    icon={<RoundSettingsEthernet />}
                    label="Agent Version"
                    value="v1.0.0"
                  />
                  <StatCard
                    className="h-auto w-auto flex-none"
                    icon={<RoundFolderZip />}
                    label="Storage"
                    value=" Using 1/3 TB"
                  />
                  <StatCard
                    className="h-auto w-auto flex-none"
                    icon={<RoundFolderZip />}
                    label="Storage"
                    value=" 3 drives · Using 1 TB"
                  />
                  <StatCard
                    className="h-auto w-auto flex-none"
                    icon={<RoundMemory />}
                    label="CPU Usage"
                    value="10%"
                  />
                </div>
              </div>
              <div className="flex w-full flex-col items-start gap-3">
                <span className="font-['Inter'] text-[16px] font-[700] leading-[24px] text-[#ffffff]">
                  Tinker Agent
                </span>
                <div className="flex w-full flex-col items-start gap-5 rounded-xl border border-solid border-[#1f242b] bg-[#12151a] px-5 py-5 mobile:px-4">
                  <div className="flex w-full items-end gap-4 mobile:flex-col mobile:items-start">
                    <div className="flex grow shrink-0 basis-0 flex-col items-start gap-2 mobile:grow-0">
                      <div className="flex items-center gap-1.5">
                        <span className="font-['Inter'] text-[14px] font-[500] leading-[20px] text-[#c4c9d1]">
                          Tinker Agent Link
                        </span>
                        <span className="font-['Inter'] text-[13px] font-[500] leading-[20px] text-[#3b9eff] underline hover:text-[#7cbcff]">
                          learn more
                        </span>
                      </div>
                      <div className="flex w-full items-center gap-1">
                        <input
                          className="w-52 flex-none self-stretch rounded-l-[8px] border border-solid border-[#2a3038] bg-[#0b0d10] px-3 font-['Inter'] text-[14px] font-[400] leading-[21px] text-[#ffffff] outline-none placeholder:text-[#7a828e] focus-within:border-[#22c55e]"
                          placeholder="Address (eg. 192.168.1.xxx)"
                          value=""
                          type="text"
                        />
                        <input
                          className="h-10 w-24 flex-none rounded-r-[8px] border border-solid border-[#2a3038] bg-[#0b0d10] px-3 font-['Inter'] text-[14px] font-[400] leading-[21px] text-[#ffffff] outline-none placeholder:text-[#7a828e] focus-within:border-[#22c55e]"
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
                      <div className="flex h-10 w-full flex-none items-center justify-between rounded-[8px] border border-solid border-[#2a3038] bg-[#0b0d10] px-3 hover:border-[#3a414b]">
                        <span className="font-['Inter'] text-[14px] font-[400] leading-[20px] text-[#ffffff]">
                          CanBeGold
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
                  <div className="flex h-px w-full flex-none items-start bg-[#1f242b]" />
                  <div className="flex w-full flex-wrap items-center gap-3">
                    <div className="flex items-center justify-center gap-1.5 rounded-[8px] border border-solid border-[#22c55e] bg-[#22c55e] px-4 py-2 hover:bg-[#16a34a]">
                      <RoundLogIn className="font-['Inter'] text-[16px] font-[400] leading-[20px] text-[#04130a]" />
                      <span className="font-['Inter'] text-[14px] font-[600] leading-[20px] text-[#04130a]">
                        Connect
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <RoundCheckCircleOutline className="font-['Inter'] text-[14px] font-[400] leading-[16px] text-[#86efac]" />
                      <span className="font-['Inter'] text-[12px] font-[500] leading-[16px] text-[#86efac]">
                        Connected successfully · 18 ms
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex w-full flex-col items-start gap-3">
                <span className="font-['Inter'] text-[16px] font-[700] leading-[24px] text-[#ffffff]">
                  Security &amp; network
                </span>
                <div className="flex w-full flex-col items-start rounded-xl border border-solid border-[#1f242b] bg-[#12151a]">
                  <div className="flex w-full items-center gap-4 px-5 py-4 mobile:px-4">
                    <div className="flex grow shrink-0 basis-0 flex-col items-start gap-0.5">
                      <span className="font-['Inter'] text-[15px] font-[600] leading-[22px] text-[#ffffff]">
                        Allow self-signed certificates
                      </span>
                      <span className="font-['Inter'] text-[12px] font-[400] leading-[16px] text-[#7a828e]">
                        If connection is failing, try enabling or disabling.
                      </span>
                    </div>
                    <Switch
                      checked={allowSelfSignedCertificates}
                      onCheckedChange={setAllowSelfSignedCertificates}
                    />
                  </div>
                  <div className="flex h-px w-full flex-none items-start bg-[#1f242b]" />
                  <div className="flex w-full items-center gap-4 px-5 py-4 mobile:px-4">
                    <div className="flex grow shrink-0 basis-0 flex-col items-start gap-0.5">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="font-['Inter'] text-[15px] font-[600] leading-[22px] text-[#ffffff]">
                          Use Connection Tunnel (no Tailscale, etc)
                        </span>
                        <div className="flex items-center rounded-[9999px] border border-solid border-[#a855f7] bg-[#2e1450] px-1.5 py-0.5">
                          <span className="font-['Inter'] text-[11px] font-[600] leading-[14px] text-[#e9d5ff]">
                            Plus
                          </span>
                        </div>
                      </div>
                      <span className="font-['Inter'] text-[12px] font-[400] leading-[16px] text-[#7a828e]">
                        Makes using Tinker outside your home network seamless.
                        This feature requires Plus.
                      </span>
                    </div>
                    <Switch
                      checked={false}
                      disabled={true}
                      onCheckedChange={() => {undefined}}
                    />
                  </div>
                </div>
              </div>
              <div className="flex w-full flex-col items-start gap-3">
                <span className="font-['Inter'] text-[16px] font-[700] leading-[24px] text-[#ffffff]">
                  Startup
                </span>
                <div className="flex w-full flex-col items-start rounded-xl border border-solid border-[#1f242b] bg-[#12151a]">
                  <div className="flex w-full items-center gap-4 px-5 py-4 mobile:px-4">
                    <div className="flex grow shrink-0 basis-0 flex-col items-start gap-0.5">
                      <span className="font-['Inter'] text-[15px] font-[600] leading-[22px] text-[#ffffff]">
                        Auto Connect
                      </span>
                      <span className="font-['Inter'] text-[12px] font-[400] leading-[16px] text-[#7a828e]">
                        When Tinker opens, auto connect with my saved
                        credentials.
                      </span>
                    </div>
                    <Switch
                      checked={autoConnect}
                      onCheckedChange={setAutoConnect}
                    />
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