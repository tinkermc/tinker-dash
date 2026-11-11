"use client";
/*
 * Documentation:
 * IconButton — https://app.subframe.com/8707573e90c5/library?component=IconButton_9c9654bc-cc90-459f-a6b2-b30c7daa77dd
 */

import React from "react";
import * as SubframeCore from "@subframe/core";
import RoundCheckCircleOutline from "../../icons/RoundCheckCircleOutline";
import * as SubframeUtils from "../../utils";

export interface IconButtonRootProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "color"> {
  tooltip?: React.ReactNode;
  icon?: React.ReactNode;
  color?:
    | "green"
    | "red"
    | "gray"
    | "purple"
    | "blue"
    | "gray-transparent"
    | "gray-dangerous"
    | "gray-success";
  disabled?: boolean;
  className?: string;
}

const IconButtonRoot = React.forwardRef<HTMLDivElement, IconButtonRootProps>(
  function IconButtonRoot(
    {
      tooltip,
      icon = <RoundCheckCircleOutline />,
      color = "green",
      disabled = false,
      className,
      ...otherProps
    }: IconButtonRootProps,
    ref
  ) {
    return (
      <div
        className={SubframeUtils.twClassNames(
          "group/9c9654bc flex items-center justify-center gap-1 rounded-[8px] border border-solid border-[#22c55e] bg-[#22c55e] px-1 py-1 hover:bg-[#16a34a]",
          {
            "opacity-50": disabled,
            "border border-solid border-[#2a3038] bg-[#1a1e23] hover:border-[#16a34a] hover:bg-[#101c13]":
              color === "gray-success",
            "border border-solid border-[#2a3038] bg-[#1a1e23] hover:border-[#ef4444] hover:bg-[#2a1215]":
              color === "gray-dangerous",
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
                  color === "gray-success" ||
                  color === "gray-dangerous" ||
                  color === "gray-transparent" ||
                  color === "blue" ||
                  color === "purple" ||
                  color === "gray" ||
                  color === "red",
              }
            )}
          >
            {icon}
          </SubframeCore.IconWrapper>
        ) : null}
      </div>
    );
  }
);

export const IconButton = IconButtonRoot;
