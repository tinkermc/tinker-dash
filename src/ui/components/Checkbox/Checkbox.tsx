"use client";
/*
 * Documentation:
 * Checkbox — https://app.subframe.com/8707573e90c5/library?component=Checkbox_8e041e2c-b3ab-4dce-9e85-5b2c72025163
 */

import React from "react";
import * as SubframeCore from "@subframe/core";
import * as SubframeUtils from "../../utils";

export interface CheckboxRootProps
  extends React.ComponentProps<typeof SubframeCore.Checkbox.Root> {
  disabled?: boolean;
  checked?: boolean;
  label?: React.ReactNode;
  onCheckedChange?: (checked: boolean) => void;
  className?: string;
}

const CheckboxRoot = React.forwardRef<HTMLButtonElement, CheckboxRootProps>(
  function CheckboxRoot(
    {
      disabled = false,
      checked = false,
      label,
      className,
      ...otherProps
    }: CheckboxRootProps,
    ref
  ) {
    return (
      <SubframeCore.Checkbox.Root
        checked={checked}
        disabled={disabled}
        asChild={true}
        {...otherProps}
      >
        <button
          className={SubframeUtils.twClassNames(
            "group/8e041e2c flex items-center gap-2 text-left disabled:opacity-50 disabled:pointer-events-none",
            className
          )}
          ref={ref}
        >
          <div className="flex h-4 w-4 flex-none flex-col items-center justify-center gap-2 rounded-[4px] border border-solid border-[#d4d4d4] bg-[#ffffff] shadow-[0px_1px_2px_0px_#0000000d] group-focus-within/8e041e2c:outline group-focus-within/8e041e2c:outline-neutral-900/50 group-aria-[checked=true]/8e041e2c:border group-aria-[checked=true]/8e041e2c:border-solid group-aria-[checked=true]/8e041e2c:border-[#171717] group-aria-[checked=true]/8e041e2c:bg-[#171717]">
            <svg
              className="hidden font-['Inter'] text-[14px] font-[400] leading-[20px] text-[#ffffff] group-aria-[checked=true]/8e041e2c:inline-flex group-disabled/8e041e2c:text-[#a3a3a3]"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <path
                d="M20 6 9 17l-5-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeOpacity="1"
              />
            </svg>
          </div>
          {label ? (
            <span className="font-['Inter'] text-[14px] font-[400] leading-[20px] text-[#171717]">
              {label}
            </span>
          ) : null}
        </button>
      </SubframeCore.Checkbox.Root>
    );
  }
);

export const Checkbox = CheckboxRoot;
