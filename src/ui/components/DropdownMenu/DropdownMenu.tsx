"use client";
/*
 * Documentation:
 * Dropdown Menu — https://app.subframe.com/8707573e90c5/library?component=Dropdown+Menu_d0b7525c-d550-4f7c-95e2-17bb0d6b199e
 */

import React from "react";
import * as SubframeCore from "@subframe/core";
import * as SubframeUtils from "../../utils";

export interface DropdownDividerProps
  extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

const DropdownDivider = React.forwardRef<HTMLDivElement, DropdownDividerProps>(
  function DropdownDivider(
    { className, ...otherProps }: DropdownDividerProps,
    ref
  ) {
    return (
      <div
        className={SubframeUtils.twClassNames(
          "flex w-full items-start gap-2 px-1 py-1",
          className
        )}
        ref={ref}
        {...otherProps}
      >
        <div className="flex h-px grow shrink-0 basis-0 flex-col items-center gap-2 bg-[#e5e5e5]" />
      </div>
    );
  }
);

export interface DropdownItemProps
  extends React.ComponentProps<typeof SubframeCore.DropdownMenu.Item> {
  children?: React.ReactNode;
  rightSlot?: React.ReactNode;
  className?: string;
}

const DropdownItem = React.forwardRef<HTMLDivElement, DropdownItemProps>(
  function DropdownItem(
    { children, rightSlot, className, ...otherProps }: DropdownItemProps,
    ref
  ) {
    return (
      <SubframeCore.DropdownMenu.Item asChild={true} {...otherProps}>
        <div
          className={SubframeUtils.twClassNames(
            "group/7bfbaa2a flex h-8 w-full cursor-pointer items-center gap-2 rounded-[4px] px-3 hover:bg-[#f5f5f5] active:bg-[#fafafa] data-[highlighted]:bg-[#f5f5f5]",
            className
          )}
          ref={ref}
        >
          {children ? (
            <span className="line-clamp-1 grow shrink-0 basis-0 font-['Inter'] text-[14px] font-[400] leading-[20px] text-[#ffffff]">
              {children}
            </span>
          ) : null}
          {rightSlot ? (
            <div className="flex grow shrink-0 basis-0 items-center justify-end">
              {rightSlot}
            </div>
          ) : null}
        </div>
      </SubframeCore.DropdownMenu.Item>
    );
  }
);

export interface DropdownMenuRootProps
  extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  className?: string;
}

const DropdownMenuRoot = React.forwardRef<
  HTMLDivElement,
  DropdownMenuRootProps
>(function DropdownMenuRoot(
  { children, className, ...otherProps }: DropdownMenuRootProps,
  ref
) {
  return children ? (
    <div
      className={SubframeUtils.twClassNames(
        "flex min-w-[160px] flex-col items-start gap-1.5 rounded-[8px] border border-solid border-[#2a3038] bg-[#0b0d10] px-1 py-1 shadow-[0px_12px_32px_-4px_#00000014,0px_4px_8px_-2px_#00000014]",
        className
      )}
      ref={ref}
      {...otherProps}
    >
      {children}
    </div>
  ) : null;
});

export const DropdownMenu = Object.assign(DropdownMenuRoot, {
  DropdownDivider,
  DropdownItem,
});
