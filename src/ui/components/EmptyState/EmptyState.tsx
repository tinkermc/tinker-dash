"use client";
/*
 * Documentation:
 * EmptyState — https://app.subframe.com/8707573e90c5/library?component=EmptyState_0c04df64-3736-4e66-89fd-176b26334ba6
 */

import React from "react";
import * as SubframeCore from "@subframe/core";
import RoundSearch from "../../icons/RoundSearch";
import * as SubframeUtils from "../../utils";

export interface EmptyStateRootProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  icon?: React.ReactNode;
  title?: React.ReactNode;
  description?: React.ReactNode;
  actions?: React.ReactNode;
  variant?: "default" | "error" | "disconnected";
  className?: string;
}

const EmptyStateRoot = React.forwardRef<HTMLDivElement, EmptyStateRootProps>(
  function EmptyStateRoot(
    {
      icon = <RoundSearch />,
      title,
      description,
      actions,
      variant = "default",
      className,
      ...otherProps
    }: EmptyStateRootProps,
    ref
  ) {
    return (
      <div
        className={SubframeUtils.twClassNames(
          "group/0c04df64 flex w-full flex-col items-center justify-center gap-4 px-6 py-12",
          className
        )}
        ref={ref}
        {...otherProps}
      >
        <div
          className={SubframeUtils.twClassNames(
            "flex h-14 w-14 flex-none items-center justify-center rounded-2xl border border-solid border-[#22c55e66] bg-[#0f2418]",
            {
              "border border-solid border-[#2a3038] bg-[#1a1e23]":
                variant === "disconnected",
              "border border-solid border-[#ef444466] bg-[#2a1215]":
                variant === "error",
            }
          )}
        >
          {icon ? (
            <SubframeCore.IconWrapper
              className={SubframeUtils.twClassNames(
                "font-['Inter'] text-[26px] font-[400] leading-[28px] text-[#86efac]",
                {
                  "text-[#9ca3af]": variant === "disconnected",
                  "text-[#fca5a5]": variant === "error",
                }
              )}
            >
              {icon}
            </SubframeCore.IconWrapper>
          ) : null}
        </div>
        <div className="flex flex-col items-center gap-1">
          {title ? (
            <span className="font-['Inter'] text-[18px] font-[700] leading-[26px] text-[#ffffff] text-center">
              {title}
            </span>
          ) : null}
          {description ? (
            <span className="max-w-[360px] font-['Inter'] text-[14px] font-[400] leading-[20px] text-[#9ca3af] text-center">
              {description}
            </span>
          ) : null}
        </div>
        {actions ? (
          <div className="flex flex-wrap items-center justify-center gap-2">
            {actions}
          </div>
        ) : null}
      </div>
    );
  }
);

export const EmptyState = EmptyStateRoot;
