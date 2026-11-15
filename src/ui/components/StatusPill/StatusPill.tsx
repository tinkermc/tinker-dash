"use client";
/*
 * Documentation:
 * StatusPill — https://app.subframe.com/8707573e90c5/library?component=StatusPill_6f6bdb42-0f27-471f-8139-7c9d8dbffbdd
 */

import React from "react";
import * as SubframeUtils from "../../utils";

export interface StatusPillRootProps
  extends React.HTMLAttributes<HTMLDivElement> {
  variant?:
    | "connected"
    | "disconnected"
    | "connecting"
    | "running"
    | "stopped"
    | "starting"
    | "crashed"
    | "purple";
  size?: "sm" | "md";
  label?: React.ReactNode;
  hideDot?: boolean;
  className?: string;
}

const StatusPillRoot = React.forwardRef<HTMLDivElement, StatusPillRootProps>(
  function StatusPillRoot(
    {
      variant = "connected",
      size = "md",
      label,
      hideDot = false,
      className,
      ...otherProps
    }: StatusPillRootProps,
    ref
  ) {
    return (
      <div
        className={SubframeUtils.twClassNames(
          "group/6f6bdb42 flex items-center gap-2 rounded-[9999px] border border-solid border-[#22c55e80] bg-[#0f2418] px-3 py-1",
          {
            "gap-1.5 px-2 py-0.5": size === "sm",
            "border border-solid border-[#a855f780] bg-[#1f1430]":
              variant === "purple",
            "border border-solid border-[#ef444480] bg-[#2a1215]":
              variant === "crashed",
            "border border-solid border-[#f59e0b80] bg-[#2a1f0a]":
              variant === "starting" || variant === "connecting",
            "border border-solid border-[#2a3038] bg-[#1a1e23]":
              variant === "stopped" || variant === "disconnected",
          },
          className
        )}
        ref={ref}
        {...otherProps}
      >
        <div
          className={SubframeUtils.twClassNames(
            "flex h-2 w-2 flex-none items-start rounded-[9999px] bg-[#22c55e]",
            {
              hidden: hideDot,
              "h-1.5 w-1.5": size === "sm",
              "bg-[#a855f7]": variant === "purple",
              "bg-[#ef4444]": variant === "crashed",
              "bg-[#f59e0b]":
                variant === "starting" || variant === "connecting",
              "bg-[#7a828e]":
                variant === "stopped" || variant === "disconnected",
            }
          )}
        />
        {label ? (
          <span
            className={SubframeUtils.twClassNames(
              "font-['Inter'] text-[14px] font-[600] leading-[20px] text-[#86efac]",
              {
                "text-[12px] leading-[16px] tracking-normal": size === "sm",
                "text-[#d8b4fe]": variant === "purple",
                "text-[#fca5a5]": variant === "crashed",
                "text-[#fcd34d]":
                  variant === "starting" || variant === "connecting",
                "text-[#c4c9d1]":
                  variant === "stopped" || variant === "disconnected",
              }
            )}
          >
            {label}
          </span>
        ) : null}
      </div>
    );
  }
);

export const StatusPill = StatusPillRoot;
