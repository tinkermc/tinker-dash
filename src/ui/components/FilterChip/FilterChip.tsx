"use client";
/*
 * Documentation:
 * FilterChip — https://app.subframe.com/8707573e90c5/library?component=FilterChip_503c9482-b633-42bc-8863-579e66e77b37
 */

import React from "react";
import * as SubframeCore from "@subframe/core";
import * as SubframeUtils from "../../utils";

export interface FilterChipRootProps
  extends React.HTMLAttributes<HTMLDivElement> {
  label?: React.ReactNode;
  count?: React.ReactNode;
  selected?: boolean;
  dot?: "none" | "green" | "amber" | "orange" | "red" | "gray";
  icon?: React.ReactNode;
  className?: string;
}

const FilterChipRoot = React.forwardRef<HTMLDivElement, FilterChipRootProps>(
  function FilterChipRoot(
    {
      label,
      count,
      selected = false,
      dot = "none",
      icon = null,
      className,
      ...otherProps
    }: FilterChipRootProps,
    ref
  ) {
    return (
      <div
        className={SubframeUtils.twClassNames(
          "group/503c9482 flex h-8 cursor-pointer items-center gap-1.5 rounded-[9999px] border border-solid border-[#2a3038] bg-[#12151a] px-3 hover:bg-[#1a1e23] hover:border-[#3a414b]",
          {
            "border border-solid border-[#22c55e] bg-[#0f2418] hover:bg-[#123020] hover:border-[#22c55e]":
              selected,
          },
          className
        )}
        ref={ref}
        {...otherProps}
      >
        <div
          className={SubframeUtils.twClassNames(
            "hidden h-2 w-2 flex-none items-start rounded-[9999px] bg-[#22c55e]",
            {
              "flex bg-[#7a828e]": dot === "gray",
              "flex bg-[#ef4444]": dot === "red",
              "flex bg-[#ff7b00]": dot === "orange",
              "flex bg-[#f59e0b]": dot === "amber",
              flex: dot === "green",
            }
          )}
        />
        {icon ? (
          <SubframeCore.IconWrapper
            className={SubframeUtils.twClassNames(
              "font-['Inter'] text-[14px] font-[400] leading-[16px] text-[#9ca3af]",
              { "text-[#86efac]": selected }
            )}
          >
            {icon}
          </SubframeCore.IconWrapper>
        ) : null}
        {label ? (
          <span
            className={SubframeUtils.twClassNames(
              "whitespace-nowrap font-['Inter'] text-[13px] font-[500] leading-[18px] text-[#c4c9d1]",
              { "font-[600] tracking-normal text-[#86efac]": selected }
            )}
          >
            {label}
          </span>
        ) : null}
        {count ? (
          <span
            className={SubframeUtils.twClassNames(
              "font-['Inter'] text-[12px] font-[500] leading-[16px] text-[#7a828e]",
              { "text-[#4ade80]": selected }
            )}
          >
            {count}
          </span>
        ) : null}
      </div>
    );
  }
);

export const FilterChip = FilterChipRoot;
