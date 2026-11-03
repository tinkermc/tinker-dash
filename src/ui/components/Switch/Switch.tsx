"use client";
/*
 * Documentation:
 * Switch — https://app.subframe.com/8707573e90c5/library?component=Switch_154e3229-b216-4409-a71c-8d49495ad849
 */

import React from "react";
import * as SubframeCore from "@subframe/core";
import * as SubframeUtils from "../../utils";

export interface ThumbProps
  extends React.ComponentProps<typeof SubframeCore.Switch.Thumb> {
  className?: string;
}

const Thumb = React.forwardRef<HTMLDivElement, ThumbProps>(function Thumb(
  { className, ...otherProps }: ThumbProps,
  ref
) {
  return (
    <SubframeCore.Switch.Thumb asChild={true} {...otherProps}>
      <div
        className={SubframeUtils.twClassNames(
          "flex h-5 w-5 flex-col items-start gap-2 rounded-[9999px] bg-[#ffffff] shadow-[0px_4px_6px_-1px_#0000001a,0px_2px_4px_-2px_#0000001a] transition-all duration-200 ease-[cubic-bezier(0.4,0,0.2,1)]",
          className
        )}
        ref={ref}
      />
    </SubframeCore.Switch.Thumb>
  );
});

export interface SwitchRootProps
  extends React.ComponentProps<typeof SubframeCore.Switch.Root> {
  checked?: boolean;
  disabled?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  className?: string;
}

const SwitchRoot = React.forwardRef<HTMLDivElement, SwitchRootProps>(
  function SwitchRoot(
    {
      checked = false,
      disabled = false,
      className,
      ...otherProps
    }: SwitchRootProps,
    ref
  ) {
    return (
      <SubframeCore.Switch.Root
        checked={checked}
        asChild={true}
        disabled={disabled}
        {...otherProps}
      >
        <div
          className={SubframeUtils.twClassNames(
            "group/154e3229 flex h-8 w-[52px] cursor-pointer flex-col items-start justify-center gap-2 rounded-[9999px] bg-[#e5e5e5] px-0.5 py-0.5 transition-colors duration-200 ease-in-out hover:bg-[#d4d4d4] aria-[checked=true]:bg-[#22c55e] hover:aria-[checked=true]:bg-[#22c55e]",
            { "cursor-not-allowed opacity-50": disabled },
            className
          )}
          ref={ref}
        >
          <Thumb />
        </div>
      </SubframeCore.Switch.Root>
    );
  }
);

export const Switch = Object.assign(SwitchRoot, {
  Thumb,
});
