"use client";
/*
 * Documentation:
 * Icon Button — https://app.subframe.com/8707573e90c5/library?component=Icon+Button_da6f5f2b-bc7f-4b1b-aff5-141f1d11c80d
 */

import React from "react";
import * as SubframeCore from "@subframe/core";
import * as SubframeUtils from "../../utils";

export interface IconButtonRootProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  disabled?: boolean;
  icon?: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
}

const IconButtonRoot = React.forwardRef<HTMLButtonElement, IconButtonRootProps>(
  function IconButtonRoot(
    {
      disabled = false,
      icon = (
        <svg width="1em" height="1em" viewBox="0 0 24 24">
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
      ),
      className,
      type = "button",
      ...otherProps
    }: IconButtonRootProps,
    ref
  ) {
    return (
      <button
        className={SubframeUtils.twClassNames(
          "group/da6f5f2b flex h-8 w-8 cursor-pointer items-center justify-center gap-2 rounded-[4px] border border-solid border-[#e5e5e5] bg-[#ffffff] text-left hover:border hover:border-solid hover:border-[#d4d4d4] hover:bg-[#f5f5f5] active:bg-[#e5e5e5] disabled:cursor-default disabled:opacity-50 disabled:pointer-events-none active:disabled:cursor-default",
          className
        )}
        ref={ref}
        type={type}
        disabled={disabled}
        {...otherProps}
      >
        {icon ? (
          <SubframeCore.IconWrapper className="font-['Inter'] text-[14px] font-[400] leading-[20px] text-[#171717] group-disabled/da6f5f2b:text-[#a3a3a3]">
            {icon}
          </SubframeCore.IconWrapper>
        ) : null}
      </button>
    );
  }
);

export const IconButton = IconButtonRoot;
