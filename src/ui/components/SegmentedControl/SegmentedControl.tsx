"use client";
/*
 * Documentation:
 * SegmentedControl — https://app.subframe.com/8707573e90c5/library?component=SegmentedControl_1c60f300-ed8c-465c-aada-6e234567163b
 */

import React from "react";
import * as SubframeCore from "@subframe/core";
import * as SubframeUtils from "../../utils";

export interface ItemProps extends React.HTMLAttributes<HTMLDivElement> {
  label?: React.ReactNode;
  icon?: React.ReactNode;
  selected?: boolean;
  disabled?: boolean;
  className?: string;
}

const Item = React.forwardRef<HTMLDivElement, ItemProps>(function Item(
  {
    label,
    icon = null,
    selected = false,
    disabled = false,
    className,
    ...otherProps
  }: ItemProps,
  ref
) {
  return (
    <div
      className={SubframeUtils.twClassNames(
        "group/5a9dff2d flex h-8 cursor-pointer items-center justify-center gap-1.5 rounded-[6px] px-3 group/segitem hover:bg-[#1a1e23]",
        {
          "cursor-not-allowed opacity-40 hover:bg-transparent": disabled,
          "bg-[#232830] shadow-[0px_1px_2px_0px_#00000066] hover:bg-[#232830]":
            selected,
        },
        className
      )}
      ref={ref}
      {...otherProps}
    >
      {icon ? (
        <SubframeCore.IconWrapper
          className={SubframeUtils.twClassNames(
            "font-['Inter'] text-[14px] font-[400] leading-[16px] text-[#9ca3af]",
            { "text-[#ffffff]": selected }
          )}
        >
          {icon}
        </SubframeCore.IconWrapper>
      ) : null}
      {label ? (
        <span
          className={SubframeUtils.twClassNames(
            "whitespace-nowrap font-['Inter'] text-[13px] font-[500] leading-[18px] text-[#9ca3af]",
            { "font-[600] tracking-normal text-[#ffffff]": selected }
          )}
        >
          {label}
        </span>
      ) : null}
    </div>
  );
});

export interface SegmentedControlRootProps
  extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  className?: string;
}

const SegmentedControlRoot = React.forwardRef<
  HTMLDivElement,
  SegmentedControlRootProps
>(function SegmentedControlRoot(
  { children, className, ...otherProps }: SegmentedControlRootProps,
  ref
) {
  return (
    <div
      className={SubframeUtils.twClassNames(
        "flex items-center rounded-[8px] border border-solid border-[#2a3038] bg-[#0b0d10] px-0.5 py-0.5",
        className
      )}
      ref={ref}
      {...otherProps}
    >
      {children ? (
        <div className="flex items-center gap-0.5">{children}</div>
      ) : null}
    </div>
  );
});

export const SegmentedControl = Object.assign(SegmentedControlRoot, {
  Item,
});
