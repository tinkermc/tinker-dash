"use client";
/*
 * Documentation:
 * ServerSwitcherMenu — https://app.subframe.com/8707573e90c5/library?component=ServerSwitcherMenu_031f2746-1219-42ff-81b9-df2fe8979efd
 */

import React from "react";
import * as SubframeUtils from "../../utils";

export interface ServerSwitcherMenuRootProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  title?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
}

const ServerSwitcherMenuRoot = React.forwardRef<
  HTMLDivElement,
  ServerSwitcherMenuRootProps
>(function ServerSwitcherMenuRoot(
  { title, children, className, ...otherProps }: ServerSwitcherMenuRootProps,
  ref
) {
  return (
    <div
      className={SubframeUtils.twClassNames(
        "flex w-80 flex-col items-start rounded-xl border border-solid border-[#2a3038] bg-[#111418] shadow-[0px_16px_48px_-8px_#000000]",
        className
      )}
      ref={ref}
      {...otherProps}
    >
      <div className="flex w-full items-center px-4 pt-3 pb-2">
        {title ? (
          <span className="font-['Inter'] text-[12px] font-[600] leading-[16px] text-[#7a828e]">
            {title}
          </span>
        ) : null}
      </div>
      {children ? (
        <div className="flex w-full flex-col items-start gap-1 px-2 pb-2">
          {children}
        </div>
      ) : null}
      <div className="flex w-full items-center gap-2 border-t border-solid border-[#1f242b] px-4 py-3 hover:bg-[#1a1e23]">
        <svg
          className="font-['Inter'] text-[18px] font-[400] leading-[20px] text-[#22c55e]"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
        >
          <path
            d="M11 5h2v6h6v2h-6v6h-2v-6H5v-2h6z"
            fill="currentColor"
            fillOpacity="1"
          />
        </svg>
        <span className="font-['Inter'] text-[14px] font-[600] leading-[20px] text-[#86efac]">
          New server
        </span>
      </div>
    </div>
  );
});

export const ServerSwitcherMenu = ServerSwitcherMenuRoot;
