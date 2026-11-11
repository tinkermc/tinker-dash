"use client";
/*
 * Documentation:
 * StatusPill — https://app.subframe.com/8707573e90c5/library?component=StatusPill_6f6bdb42-0f27-471f-8139-7c9d8dbffbdd
 */

import React from "react";
import * as SubframeUtils from "../../utils";

export interface StatusPillRootProps
  extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "conneted" | "disconnected";
  className?: string;
}

const StatusPillRoot = React.forwardRef<HTMLDivElement, StatusPillRootProps>(
  function StatusPillRoot(
    { variant = "conneted", className, ...otherProps }: StatusPillRootProps,
    ref
  ) {
    return (
      <div
        className={SubframeUtils.twClassNames(
          "group/6f6bdb42 flex items-center gap-2 rounded-[9999px] border-2 border-solid border-[#22c55e] bg-[#0f2418] px-3 py-1",
          {
            "border-2 border-solid border-[#96a2b080] bg-[#96a2b021]":
              variant === "disconnected",
          },
          className
        )}
        ref={ref}
        {...otherProps}
      >
        <div
          className={SubframeUtils.twClassNames(
            "flex h-2 w-2 flex-none items-start rounded-[9999px] bg-[#22c55e]",
            { "bg-[#96a2b0]": variant === "disconnected" }
          )}
        />
        <span className="font-['Inter'] text-[15px] font-[500] leading-[20px] text-[#ffffff]">
          {variant === "disconnected" ? "Disconnected" : "Connected"}
        </span>
      </div>
    );
  }
);

export const StatusPill = StatusPillRoot;
