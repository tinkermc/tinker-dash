"use client";
/*
 * Documentation:
 * ServerSwitcherRow — https://app.subframe.com/8707573e90c5/library?component=ServerSwitcherRow_90a9b460-3e2f-4441-9104-bedaabdbf423
 */

import React from "react";
import * as SubframeUtils from "../../utils";

export interface ServerSwitcherRowRootProps
  extends React.HTMLAttributes<HTMLDivElement> {
  icon?: string;
  name?: React.ReactNode;
  detail?: React.ReactNode;
  statusLabel?: React.ReactNode;
  status?: "running" | "stopped" | "starting" | "crashed";
  selected?: boolean;
  className?: string;
}

const ServerSwitcherRowRoot = React.forwardRef<
  HTMLDivElement,
  ServerSwitcherRowRootProps
>(function ServerSwitcherRowRoot(
  {
    icon,
    name,
    detail,
    statusLabel,
    status = "running",
    selected = false,
    className,
    ...otherProps
  }: ServerSwitcherRowRootProps,
  ref
) {
  return (
    <div
      className={SubframeUtils.twClassNames(
        "group/90a9b460 flex w-full cursor-pointer items-center gap-3 rounded-[8px] px-2 py-2 hover:bg-[#1a1e23]",
        { "bg-[#0f2418] hover:bg-[#0f2418]": selected },
        className
      )}
      ref={ref}
      {...otherProps}
    >
      {icon ? (
        <img
          className="h-9 w-9 flex-none rounded-[6px] object-cover"
          src={icon}
        />
      ) : null}
      <div className="flex grow shrink-0 basis-0 flex-col items-start">
        {name ? (
          <span className="font-['Inter'] text-[14px] font-[600] leading-[20px] text-[#ffffff]">
            {name}
          </span>
        ) : null}
        {detail ? (
          <span className="font-['Inter'] text-[12px] font-[400] leading-[16px] text-[#7a828e]">
            {detail}
          </span>
        ) : null}
      </div>
      <div className="flex items-center gap-1.5">
        <div
          className={SubframeUtils.twClassNames(
            "flex h-2 w-2 flex-none items-start rounded-[9999px] bg-[#22c55e]",
            {
              "bg-[#ef4444]": status === "crashed",
              "bg-[#f59e0b]": status === "starting",
              "bg-[#7a828e]": status === "stopped",
            }
          )}
        />
        {statusLabel ? (
          <span className="font-['Inter'] text-[12px] font-[500] leading-[16px] text-[#c4c9d1]">
            {statusLabel}
          </span>
        ) : null}
      </div>
      <svg
        className={SubframeUtils.twClassNames(
          "hidden font-['Inter'] text-[18px] font-[400] leading-[20px] text-[#22c55e]",
          { "inline-flex": selected }
        )}
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
      >
        <path
          d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z"
          fill="currentColor"
          fillOpacity="1"
        />
      </svg>
    </div>
  );
});

export const ServerSwitcherRow = ServerSwitcherRowRoot;
