"use client";
/*
 * Documentation:
 * TimeoutButton — https://app.subframe.com/8707573e90c5/library?component=TimeoutButton_60e2937e-20c5-40bf-abd5-027242929848
 */

import React from "react";
import RoundHourglassBottom from "../../icons/RoundHourglassBottom";
import RoundHourglassTop from "../../icons/RoundHourglassTop";
import * as SubframeUtils from "../../utils";

export interface TimeoutButtonRootProps
  extends React.HTMLAttributes<HTMLDivElement> {
  currentlyTimedOut?: boolean;
  className?: string;
}

const TimeoutButtonRoot = React.forwardRef<
  HTMLDivElement,
  TimeoutButtonRootProps
>(function TimeoutButtonRoot(
  {
    currentlyTimedOut = false,
    className,
    ...otherProps
  }: TimeoutButtonRootProps,
  ref
) {
  return (
    <div
      className={SubframeUtils.twClassNames(
        "group/60e2937e flex h-9 items-center justify-center gap-2 rounded-[8px] border border-solid border-[#ff7b0066] bg-[#ff7b0021] px-3 col-span-2 hover:border-[#f59e0b]",
        className
      )}
      ref={ref}
      {...otherProps}
    >
      {currentlyTimedOut ? (
        <RoundHourglassBottom className="font-['Inter'] text-[18px] font-[400] leading-[27px] text-[#fbbf24]" />
      ) : (
        <RoundHourglassTop className="font-['Inter'] text-[18px] font-[400] leading-[27px] text-[#fbbf24]" />
      )}
      <span className="font-['Inter'] text-[13px] font-[500] leading-[20px] text-[#fcd34d]">
        {currentlyTimedOut ? "Remove Timeout" : "Timeout"}
      </span>
    </div>
  );
});

export const TimeoutButton = TimeoutButtonRoot;
