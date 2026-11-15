"use client";
/*
 * Documentation:
 * AppHeader — https://app.subframe.com/8707573e90c5/library?component=AppHeader_53d71ef2-c257-4873-8a29-574abb3c8203
 * StatusPill — https://app.subframe.com/8707573e90c5/library?component=StatusPill_6f6bdb42-0f27-471f-8139-7c9d8dbffbdd
 */

import React from "react";
import * as SubframeCore from "@subframe/core";
import Gear from "../../icons/Gear";
import RoundDownload from "../../icons/RoundDownload";
import * as SubframeUtils from "../../utils";
import { StatusPill } from "../StatusPill";

export interface AppHeaderRootProps extends React.HTMLAttributes<HTMLElement> {
  isBeta?: boolean;
  showTaskIndicator?: boolean;
  taskIcon?: React.ReactNode;
  serverName?: React.ReactNode;
  serverDetail?: React.ReactNode;
  serverIcon?: string;
  serverStatus?: "running" | "stopped" | "starting" | "crashed" | "none";
  agentLabel?: React.ReactNode;
  agentAddress?: React.ReactNode;
  agentStatus?: "connected" | "disconnected";
  // Added by hand (not in Subframe): click handlers for the Agent pill and
  // the server switcher. Re-add them if a Subframe sync overwrites this file.
  onAgentClick?: React.MouseEventHandler<HTMLDivElement>;
  onServerClick?: React.MouseEventHandler<HTMLDivElement>;
  className?: string;
}

const AppHeaderRoot = React.forwardRef<HTMLElement, AppHeaderRootProps>(
  function AppHeaderRoot(
    {
      isBeta = true,
      showTaskIndicator = false,
      taskIcon = <RoundDownload />,
      serverName,
      serverDetail,
      serverIcon,
      serverStatus = "running",
      agentLabel,
      agentAddress,
      agentStatus = "connected",
      onAgentClick,
      onServerClick,
      className,
      ...otherProps
    }: AppHeaderRootProps,
    ref
  ) {
    return (
      <header
        className={SubframeUtils.twClassNames(
          "group/53d71ef2 flex w-full items-center gap-1 border-b border-solid border-[#1a1e23] bg-[#101317] px-6 py-3 sticky top-0 z-10 mobile:px-4",
          className,
        )}
        ref={ref}
        {...otherProps}
      >
        <div className="flex items-center gap-0.5">
          <img
            className="h-8 w-8 flex-none object-cover"
            src={
              isBeta
                ? "https://res.cloudinary.com/subframe/image/upload/v1794629307/uploads/47820/gdv8imkdruhffkmkxvs1.png"
                : "https://res.cloudinary.com/subframe/image/upload/v1794629129/uploads/47820/jwvn7wytfp8aymqdfia3.png"
            }
          />
          <div
            className={SubframeUtils.twClassNames("flex items-center gap-0.5", {
              "gap-2": isBeta,
            })}
          >
            <span className="font-['Inter'] text-[22px] font-[700] leading-[28px] text-[#ffffff] mobile:hidden">
              Tinker
            </span>
            <StatusPill
              className={SubframeUtils.twClassNames("hidden", { flex: isBeta })}
              variant={isBeta ? "purple" : undefined}
              size={isBeta ? "sm" : undefined}
              label={isBeta ? "BETA" : "Label"}
              hideDot={isBeta ? true : undefined}
            />
          </div>
        </div>
        <div className="flex h-7 w-px flex-none items-start bg-[#232830] mobile:hidden" />
        <div
          className={SubframeUtils.twClassNames(
            "flex items-center gap-2 rounded-[9999px] border border-solid border-[#22c55e40] bg-[#0f2418] px-2.5 py-1",
            {
              "border border-solid border-[#2a3038] bg-[#1a1e23]":
                agentStatus === "disconnected",
              "cursor-pointer": onAgentClick !== undefined,
            },
          )}
          onClick={onAgentClick}
        >
          <div
            className={SubframeUtils.twClassNames(
              "flex h-2 w-2 flex-none items-start rounded-[9999px] bg-[#22c55e]",
              { "bg-[#c4c9d1]": agentStatus === "disconnected" },
            )}
          />
          {agentLabel ? (
            <span
              className={SubframeUtils.twClassNames(
                "font-['Inter'] text-[13px] font-[500] leading-[18px] text-[#86efac]",
                { "text-[#c4c9d1]": agentStatus === "disconnected" },
              )}
            >
              {agentLabel}
            </span>
          ) : null}
          <span className="font-['Inter'] text-[13px] font-[400] leading-[18px] text-[#7a828e] mobile:hidden">
            {agentStatus === "disconnected" ? "Not connected" : agentAddress}
          </span>
        </div>
        <div className="flex grow shrink-0 basis-0 items-start" />
        <div
          className={SubframeUtils.twClassNames(
            "hidden h-[33px] w-[33px] flex-none items-center justify-center rounded-[9999px] border-2 border-dashed border-[#96a2b040] bg-[#1a1e23]",
            { flex: showTaskIndicator },
          )}
        >
          {taskIcon ? (
            <SubframeCore.IconWrapper className="font-['Inter'] text-[18px] font-[400] leading-[20px] text-[#e5e7eb]">
              {taskIcon}
            </SubframeCore.IconWrapper>
          ) : null}
        </div>
        <div className="flex h-12 w-12 flex-none flex-col items-center justify-center gap-2 bg-[#101317] px-2 py-2">
          <Gear className="font-['Inter'] text-[28px] font-[400] leading-[20px] text-[#ffffff]" />
        </div>
        <div
          className={SubframeUtils.twClassNames(
            "flex items-center gap-3 rounded-[10px] border border-solid border-[#2a3038] bg-[#1a1e23] px-2 py-1.5 hover:border-[#3a414b] hover:bg-[#20252c]",
            { "cursor-pointer": onServerClick !== undefined },
          )}
          onClick={onServerClick}
        >
          {serverIcon ? (
            <img
              className="h-8 w-8 flex-none rounded-[6px] object-cover"
              src={serverIcon}
            />
          ) : null}
          <div className="flex flex-col items-start mobile:hidden">
            {serverName ? (
              <span className="font-['Inter'] text-[14px] font-[600] leading-[18px] text-[#ffffff]">
                {serverName}
              </span>
            ) : null}
            <div className="flex items-center gap-1.5">
              <div
                className={SubframeUtils.twClassNames(
                  "flex h-1.5 w-1.5 flex-none items-start rounded-[9999px] bg-[#22c55e]",
                  {
                    "bg-[#7a828e]":
                      serverStatus === "none" || serverStatus === "stopped",
                    "bg-[#ef4444]": serverStatus === "crashed",
                    "bg-[#f59e0b]": serverStatus === "starting",
                  },
                )}
              />
              {serverDetail ? (
                <span className="font-['Inter'] text-[12px] font-[400] leading-[16px] text-[#7a828e]">
                  {serverDetail}
                </span>
              ) : null}
            </div>
          </div>
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
