"use client";
/*
 * Documentation:
 * Badge — https://app.subframe.com/8707573e90c5/library?component=Badge_c5ada507-3852-4c54-9032-fd52fad4b3f6
 */

import React from "react";
import * as SubframeCore from "@subframe/core";
import * as SubframeUtils from "../../utils";

export interface BadgeRootProps extends React.HTMLAttributes<HTMLDivElement> {
  label?: React.ReactNode;
  icon?: React.ReactNode;
  variant?: "plus" | "green" | "gray" | "red" | "amber" | "blue";
  className?: string;
}

const BadgeRoot = React.forwardRef<HTMLDivElement, BadgeRootProps>(
  function BadgeRoot(
    {
      label,
      icon = null,
      variant = "plus",
      className,
      ...otherProps
    }: BadgeRootProps,
    ref
  ) {
    return (
      <div
        className={SubframeUtils.twClassNames(
          "group/c5ada507 flex items-center gap-1 rounded-[9999px] border border-solid border-[#a855f7] bg-[#2e1450] px-2 py-0.5 group/badge",
          {
            "border border-solid border-[#3b9eff80] bg-[#0b2340]":
              variant === "blue",
            "border border-solid border-[#f59e0b80] bg-[#2a1f0a]":
              variant === "amber",
            "border border-solid border-[#ef444480] bg-[#2a1215]":
              variant === "red",
            "border border-solid border-[#2a3038] bg-[#1a1e23]":
              variant === "gray",
            "border border-solid border-[#22c55e80] bg-[#0f2418]":
              variant === "green",
          },
          className
        )}
        ref={ref}
        {...otherProps}
      >
        {icon ? (
          <SubframeCore.IconWrapper
            className={SubframeUtils.twClassNames(
              "font-['Inter'] text-[12px] font-[400] leading-[14px] text-[#e9d5ff]",
              {
                "text-[#7cbcff]": variant === "blue",
                "text-[#fcd34d]": variant === "amber",
                "text-[#fca5a5]": variant === "red",
                "text-[#c4c9d1]": variant === "gray",
                "text-[#86efac]": variant === "green",
              }
            )}
          >
            {icon}
          </SubframeCore.IconWrapper>
        ) : null}
        {label ? (
          <span
            className={SubframeUtils.twClassNames(
              "whitespace-nowrap font-['Inter'] text-[11px] font-[600] leading-[14px] text-[#e9d5ff]",
              {
                "text-[#7cbcff]": variant === "blue",
                "text-[#fcd34d]": variant === "amber",
                "text-[#fca5a5]": variant === "red",
                "text-[#c4c9d1]": variant === "gray",
                "text-[#86efac]": variant === "green",
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

export const Badge = BadgeRoot;
