"use client";
/*
 * Documentation:
 * PrimaryButton — https://app.subframe.com/8707573e90c5/library?component=PrimaryButton_fd8dbcfe-8313-4878-b3a2-c6c084a47f95
 */

import React from "react";
import * as SubframeCore from "@subframe/core";
import RoundCheckCircleOutline from "../../icons/RoundCheckCircleOutline";
import * as SubframeUtils from "../../utils";

export interface PrimaryButtonRootProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "color"> {
  tooltip?: React.ReactNode;
  icon?: React.ReactNode;
  text?: React.ReactNode;
  color?: "green" | "red" | "gray" | "purple" | "blue" | "gray-transparent";
  disabled?: boolean;
  className?: string;
}

const PrimaryButtonRoot = React.forwardRef<
  HTMLDivElement,
  PrimaryButtonRootProps
>(function PrimaryButtonRoot(
  {
    tooltip,
    icon = <RoundCheckCircleOutline />,
    text,
    color = "green",
    disabled = false,
    className,
    ...otherProps
  }: PrimaryButtonRootProps,
  ref
) {
  return (
    <div
      className={SubframeUtils.twClassNames(
        "group/fd8dbcfe flex items-center justify-center gap-1 rounded-[8px] border border-solid border-[#22c55e] bg-[#22c55e] px-3 py-1 hover:bg-[#16a34a]",
        {
          "opacity-50": disabled,
          "border border-solid border-[#2a3038] bg-transparent shadow-[0px_12px_32px_-4px_#2a303880] bg-gradient-to-b from-[#1A1E23] to-[#1E2530]":
            color === "gray-transparent",
          "border border-solid border-[#0173d4] bg-transparent shadow-[0px_12px_32px_-4px_#0173d480] bg-gradient-to-b from-[#00c6ff] to-[#0072ff] hover:from-[#00b4e6] hover:to-[#0062db]":
            color === "blue",
          "border border-solid border-[#a855f7] bg-transparent shadow-[0px_12px_32px_-4px_#a855f773] bg-gradient-to-b from-[#a855f7] to-[#7c3aed] hover:from-[#9333ea] hover:to-[#6d28d9]":
            color === "purple",
          "border border-solid border-[#2a3038] bg-[#1a1e23] hover:bg-[#1A1E23] hover:border-[#3a414b]":
            color === "gray",
          "border border-solid border-[#ef4444] bg-[#ef4444] hover:bg-[#dc2626]":
            color === "red",
        },
        className
      )}
      ref={ref}
      {...otherProps}
    >
      {icon ? (
        <SubframeCore.IconWrapper
          className={SubframeUtils.twClassNames(
            "font-['Inter'] text-[16px] font-[400] leading-[20px] text-[#04130a]",
            {
              "text-[#ffffff]":
                color === "gray-transparent" ||
                color === "blue" ||
                color === "purple" ||
                color === "gray",
            }
          )}
        >
          {icon}
        </SubframeCore.IconWrapper>
      ) : null}
      {text ? (
        <span
          className={SubframeUtils.twClassNames(
            "font-['Inter'] text-[14px] font-[600] leading-[20px] text-[#04130a]",
            {
              "text-[#ffffff]":
                color === "gray-transparent" ||
                color === "blue" ||
                color === "purple" ||
                color === "gray",
            }
          )}
        >
          {text}
        </span>
      ) : null}
    </div>
  );
});

export const PrimaryButton = PrimaryButtonRoot;
