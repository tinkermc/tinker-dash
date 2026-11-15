"use client";
/*
 * Documentation:
 * Banner — https://app.subframe.com/8707573e90c5/library?component=Banner_d8eeea63-6718-44d9-b66a-f24cc5976f20
 */

import React from "react";
import * as SubframeCore from "@subframe/core";
import OutlineInfo from "../../icons/OutlineInfo";
import * as SubframeUtils from "../../utils";

export interface BannerRootProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  icon?: React.ReactNode;
  title?: React.ReactNode;
  description?: React.ReactNode;
  action?: React.ReactNode;
  variant?: "info" | "success" | "warning" | "error" | "locked";
  className?: string;
}

const BannerRoot = React.forwardRef<HTMLDivElement, BannerRootProps>(
  function BannerRoot(
    {
      icon = <OutlineInfo />,
      title,
      description,
      action,
      variant = "info",
      className,
      ...otherProps
    }: BannerRootProps,
    ref
  ) {
    return (
      <div
        className={SubframeUtils.twClassNames(
          "group/d8eeea63 flex w-full items-center gap-3 rounded-[8px] border border-solid border-[#3b9eff66] bg-[#0b2340] px-3 py-2",
          {
            "border border-solid border-[#ef444440] bg-[#1c1214]":
              variant === "locked",
            "border border-solid border-[#ef444466] bg-[#2a1215]":
              variant === "error",
            "border border-solid border-[#f59e0b66] bg-[#2a1f0a]":
              variant === "warning",
            "border border-solid border-[#22c55e66] bg-[#0f2418]":
              variant === "success",
          },
          className
        )}
        ref={ref}
        {...otherProps}
      >
        {icon ? (
          <SubframeCore.IconWrapper
            className={SubframeUtils.twClassNames(
              "font-['Inter'] text-[18px] font-[400] leading-[20px] text-[#7cbcff]",
              {
                "text-[#fca5a5]": variant === "locked" || variant === "error",
                "text-[#fcd34d]": variant === "warning",
                "text-[#86efac]": variant === "success",
              }
            )}
          >
            {icon}
          </SubframeCore.IconWrapper>
        ) : null}
        <div className="flex grow shrink-0 basis-0 flex-col items-start">
          {title ? (
            <span
              className={SubframeUtils.twClassNames(
                "font-['Inter'] text-[13px] font-[600] leading-[18px] text-[#7cbcff]",
                {
                  "text-[#fca5a5]": variant === "locked" || variant === "error",
                  "text-[#fcd34d]": variant === "warning",
                  "text-[#86efac]": variant === "success",
                }
              )}
            >
              {title}
            </span>
          ) : null}
          {description ? (
            <span className="font-['Inter'] text-[12px] font-[400] leading-[16px] text-[#9ca3af]">
              {description}
            </span>
          ) : null}
        </div>
        {action ? (
          <div className="flex items-center gap-2">{action}</div>
        ) : null}
      </div>
    );
  }
);

export const Banner = BannerRoot;
