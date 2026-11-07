"use client";
/*
 * Documentation:
 * StatCard — https://app.subframe.com/8707573e90c5/library?component=StatCard_ea733f80-78c9-4b03-9f7a-8f1d57ef17fa
 */

import React from "react";
import * as SubframeCore from "@subframe/core";
import RoundTimer from "../../icons/RoundTimer";
import * as SubframeUtils from "../../utils";

export interface StatCardRootProps
  extends React.HTMLAttributes<HTMLDivElement> {
  icon?: React.ReactNode;
  label?: React.ReactNode;
  value?: React.ReactNode;
  className?: string;
}

const StatCardRoot = React.forwardRef<HTMLDivElement, StatCardRootProps>(
  function StatCardRoot(
    {
      icon = <RoundTimer />,
      label,
      value,
      className,
      ...otherProps
    }: StatCardRootProps,
    ref
  ) {
    return (
      <div
        className={SubframeUtils.twClassNames(
          "flex h-full flex-col items-start gap-0.5 rounded-[8px] border border-solid border-[#232830] bg-[#0f1216] px-3 py-2",
          className
        )}
        ref={ref}
        {...otherProps}
      >
        <div className="flex items-center gap-0.5">
          {icon ? (
            <SubframeCore.IconWrapper className="font-['Inter'] text-[12px] font-[500] leading-[16px] text-[#7a828e]">
              {icon}
            </SubframeCore.IconWrapper>
          ) : null}
          {label ? (
            <span className="font-['Inter'] text-[11px] font-[500] leading-[16px] text-[#7a828e]">
              {label}
            </span>
          ) : null}
        </div>
        {value ? (
          <span className="font-['Inter'] text-[14px] font-[600] leading-[20px] text-[#ffffff]">
            {value}
          </span>
        ) : null}
      </div>
    );
  }
);

export const StatCard = StatCardRoot;
