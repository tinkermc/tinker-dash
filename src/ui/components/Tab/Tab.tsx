"use client";
/*
 * Documentation:
 * Tab — https://app.subframe.com/8707573e90c5/library?component=Tab_1e118213-b605-4ecf-b565-fa5764a6ab07
 */

import React from "react";
import * as SubframeCore from "@subframe/core";
import RoundMoreHoriz from "../../icons/RoundMoreHoriz";
import * as SubframeUtils from "../../utils";

export interface TabRootProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  icon?: React.ReactNode;
  title?: React.ReactNode;
  numberAttached?: boolean;
  numberAttatched?: React.ReactNode;
  selected?: boolean;
  locked?: boolean;
  className?: string;
}

const TabRoot = React.forwardRef<HTMLDivElement, TabRootProps>(function TabRoot(
  {
    icon = <RoundMoreHoriz />,
    title,
    numberAttached = false,
    numberAttatched,
    selected = false,
    locked = false,
    className,
    ...otherProps
  }: TabRootProps,
  ref
) {
  return (
    <div
      className={SubframeUtils.twClassNames(
        "group/1e118213 flex flex-col items-start gap-2",
        className
      )}
      ref={ref}
      {...otherProps}
    >
      <div
        className={SubframeUtils.twClassNames(
          "flex w-full items-center justify-center gap-1.5 rounded-t-xl bg-[#0f2418] px-[7px] py-1 hover:bg-[#123321] mobile:w-auto mobile:justify-start",
          {
            "opacity-50": locked,
            "border-x border-t border-b-0 border-solid border-[#22c55e] shadow-[0px_12px_32px_-4px_#22c55e] hover:bg-[#0F2418]":
              selected,
          }
        )}
      >
        <div className="flex h-6 w-6 flex-none items-center justify-center rounded-[9999px] border border-solid border-[#4b556380] text-[12px] text-white">
          {icon ? (
            <SubframeCore.IconWrapper className="font-['Inter'] text-[16px] font-[400] leading-[20px] text-[#e5e7eb]">
              {icon}
            </SubframeCore.IconWrapper>
          ) : null}
        </div>
        {title ? (
          <span className="font-['Inter'] text-[15px] font-[500] leading-[24px] text-[#ffffff]">
            {title}
          </span>
        ) : null}
        <div
          className={SubframeUtils.twClassNames(
            "hidden h-5 min-w-[20px] items-center justify-center rounded-[9999px] bg-[#22c55e] px-1.5",
            { flex: numberAttached }
          )}
        >
          {numberAttatched ? (
            <span className="font-['Inter'] text-[12px] font-[700] leading-[16px] text-[#04130a]">
              {numberAttatched}
            </span>
          ) : null}
        </div>
        <div className="hidden h-5 min-w-[20px] items-center justify-center rounded-[9999px] bg-[#22c55e] px-1.5">
          <span className="font-['Inter'] text-[12px] font-[700] leading-[16px] text-[#04130a]">
            0
          </span>
        </div>
      </div>
    </div>
  );
});

export const Tab = TabRoot;
