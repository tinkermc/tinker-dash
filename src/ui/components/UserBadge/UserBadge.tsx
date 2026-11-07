"use client";
/*
 * Documentation:
 * UserBadge — https://app.subframe.com/8707573e90c5/library?component=UserBadge_56a68a69-cd13-4150-b2b8-aef69091dbd8
 */

import React from "react";
import * as SubframeUtils from "../../utils";

export interface UserBadgeRootProps
  extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

const UserBadgeRoot = React.forwardRef<HTMLDivElement, UserBadgeRootProps>(
  function UserBadgeRoot(
    { className, ...otherProps }: UserBadgeRootProps,
    ref
  ) {
    return (
      <div
        className={SubframeUtils.twClassNames(
          "flex items-center gap-2 rounded-[10px] border border-solid border-[#22c55e] px-3 py-1.5 shadow-[0px_0px_32px_0px_#239f5040] bg-gradient-to-b from-[#22C55E] to-[#239F50]",
          className
        )}
        ref={ref}
        {...otherProps}
      >
        <img
          className="h-6 w-6 flex-none rounded-[6px] object-contain"
          src="https://api.mcheads.org/head/CanBeGold/96"
        />
        <span className="font-['Inter'] text-[16px] font-[600] leading-[24px] text-[#ffffff]">
          $10 - CanBeGold
        </span>
      </div>
    );
  }
);

export const UserBadge = UserBadgeRoot;
