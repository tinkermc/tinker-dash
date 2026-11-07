"use client";
/*
 * Documentation:
 * AppHeader — https://app.subframe.com/8707573e90c5/library?component=AppHeader_53d71ef2-c257-4873-8a29-574abb3c8203
 */

import React from "react";
import * as SubframeCore from "@subframe/core";
import RoundDownload from "../../icons/RoundDownload";
import TinkerDash from "../../icons/TinkerDash";
import * as SubframeUtils from "../../utils";

export interface AppHeaderRootProps extends React.HTMLAttributes<HTMLElement> {
  showTaskIndicator?: boolean;
  taskIcon?: React.ReactNode;
  anyServersRunning?: boolean;
  statusText?: React.ReactNode;
  selectedServerLabel?: React.ReactNode;
  selectedServerIcon?: string;
  className?: string;
}

const AppHeaderRoot = React.forwardRef<HTMLElement, AppHeaderRootProps>(
  function AppHeaderRoot(
    {
      showTaskIndicator = false,
      taskIcon = <RoundDownload />,
      anyServersRunning = false,
      statusText,
      selectedServerLabel,
      selectedServerIcon,
      className,
      ...otherProps
    }: AppHeaderRootProps,
    ref
  ) {
    return (
      <header
        className={SubframeUtils.twClassNames(
          "group/53d71ef2 flex w-full items-center gap-2 border-b border-solid border-[#1a1e23] bg-[#101317] px-6 py-4 sticky top-0 z-10",
          className
        )}
        ref={ref}
        {...otherProps}
      >
        <div className="flex items-center gap-3">
          <TinkerDash className="font-['Inter'] text-[28px] font-[400] leading-[42px] text-[#22c55e]" />
          <span className="font-['Inter'] text-[26px] font-[700] leading-[32px] text-[#ffffff]">
            Tinker Dash
          </span>
        </div>
        <div className="flex h-7 w-px flex-none items-start bg-[#232830]" />
        <span className="font-['Inter'] text-[17px] font-[400] leading-[24px] text-[#e5e7eb]">
          Minecraft’s most intuitive server manager.
        </span>
        <div className="flex grow shrink-0 basis-0 flex-col items-start gap-2 px-2 py-2" />
        <div
          className={SubframeUtils.twClassNames(
            "hidden h-[33px] w-[33px] flex-none items-center justify-center gap-2 rounded-[9999px] border-2 border-dashed border-[#96a2b040] bg-[#1a1e23] px-3 py-1 opacity-50",
            { flex: showTaskIndicator }
          )}
        >
          <RoundDownload className="font-['Inter'] text-[18px] font-[400] leading-[20px] text-[#e5e7eb]" />
        </div>
        <div className="hidden h-[33px] w-[33px] flex-none items-center justify-center gap-2 rounded-[9999px] border-2 border-dashed border-[#96a2b040] bg-[#1a1e23] px-3 py-1 opacity-50">
          {taskIcon ? (
            <SubframeCore.IconWrapper className="font-['Inter'] text-[18px] font-[400] leading-[20px] text-[#e5e7eb]">
              {taskIcon}
            </SubframeCore.IconWrapper>
          ) : null}
        </div>
        <div
          className={SubframeUtils.twClassNames(
            "flex items-center justify-end gap-2 rounded-l-[9999px] border-2 border-solid border-[#96a2b040] bg-[#1a1e23] px-3 py-1",
            {
              "border-2 border-solid border-[#22c55e40] bg-[#22c55e21]":
                anyServersRunning,
            }
          )}
        >
          <div
            className={SubframeUtils.twClassNames(
              "flex h-2 w-2 flex-none items-start rounded-[9999px] bg-[#96a2b0]",
              { "bg-[#22c55e]": anyServersRunning }
            )}
          />
          <div className="flex items-center justify-end gap-2">
            {statusText ? (
              <span className="font-['Inter'] text-[15px] font-[500] leading-[20px] text-[#ffffff]">
                {statusText}
              </span>
            ) : null}
            <span className="hidden font-['Inter'] text-[15px] font-[500] leading-[20px] text-[#ffffff]">
              No servers running
            </span>
          </div>
        </div>
        <div className="flex items-center justify-end gap-1 rounded-r-[9999px] border-2 border-solid border-[#96a2b040] bg-[#1a1e23] pl-2 pr-1.5 py-1">
          {selectedServerIcon ? (
            <img
              className="h-5 w-5 flex-none object-cover"
              src={selectedServerIcon}
            />
          ) : null}
          {selectedServerLabel ? (
            <span className="font-['Inter'] text-[15px] font-[500] leading-[20px] text-[#ffffff]">
              {selectedServerLabel}
            </span>
          ) : null}
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
    );
  }
);

export const AppHeader = AppHeaderRoot;
