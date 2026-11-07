"use client";
/*
 * Documentation:
 * OnlineCount — https://app.subframe.com/8707573e90c5/library?component=OnlineCount_da82f356-7b68-4bf4-b258-df73001eeb19
 */

import React from "react";
import * as SubframeUtils from "../../utils";

export interface OnlineCountRootProps
  extends React.HTMLAttributes<HTMLDivElement> {
  current?: React.ReactNode;
  max?: React.ReactNode;
  className?: string;
}

const OnlineCountRoot = React.forwardRef<HTMLDivElement, OnlineCountRootProps>(
  function OnlineCountRoot(
    { current, max, className, ...otherProps }: OnlineCountRootProps,
    ref
  ) {
    return (
      <div
        className={SubframeUtils.twClassNames(
          "flex h-10 items-center gap-2 rounded-[8px] border border-solid border-[#2a3038] bg-[#1a1e23] px-3",
          className
        )}
        ref={ref}
        {...otherProps}
      >
        <div className="flex h-2 w-2 flex-none items-start rounded-[9999px] bg-[#22c55e]" />
        <span className="font-['Inter'] text-[13px] font-[400] leading-[20px] text-[#aeb4bd]">
          Online
        </span>
        <div className="flex items-center">
          {current ? (
            <span className="font-['Inter'] text-[14px] font-[600] leading-[20px] text-[#ffffff]">
              {current}
            </span>
          ) : null}
          <span className="font-['Inter'] text-[14px] font-[600] leading-[20px] text-[#ffffff]">
             / 
          </span>
          {max ? (
            <span className="font-['Inter'] text-[14px] font-[600] leading-[20px] text-[#ffffff]">
              {max}
            </span>
          ) : null}
        </div>
      </div>
    );
  }
);

export const OnlineCount = OnlineCountRoot;
