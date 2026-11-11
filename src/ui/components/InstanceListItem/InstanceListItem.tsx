"use client";
/*
 * Documentation:
 * InstanceListItem — https://app.subframe.com/8707573e90c5/library?component=InstanceListItem_e2391eeb-c5be-46c3-b0f3-cd7dc6011b95
 */

import React from "react";
import RoundLayers from "../../icons/RoundLayers";
import * as SubframeUtils from "../../utils";

export interface InstanceListItemRootProps
  extends React.HTMLAttributes<HTMLDivElement> {
  active?: boolean;
  name?: React.ReactNode;
  actions?: React.ReactNode;
  size?: React.ReactNode;
  version?: React.ReactNode;
  lastActiveTimestamp?: React.ReactNode;
  className?: string;
}

const InstanceListItemRoot = React.forwardRef<
  HTMLDivElement,
  InstanceListItemRootProps
>(function InstanceListItemRoot(
  {
    active = false,
    name,
    actions,
    size,
    version,
    lastActiveTimestamp,
    className,
    ...otherProps
  }: InstanceListItemRootProps,
  ref
) {
  return (
    <div
      className={SubframeUtils.twClassNames(
        "group/e2391eeb flex w-full items-center gap-3 rounded-[8px] border border-solid border-[#1f242b] bg-[#12151a] px-4 py-3",
        { "border border-solid border-[#22c55e40]": active },
        className
      )}
      ref={ref}
      {...otherProps}
    >
      <div className="flex h-9 w-9 flex-none items-center justify-center rounded-[8px] border border-solid border-[#2a3038] bg-[#1a1e23]">
        <RoundLayers className="font-['Inter'] text-[18px] font-[400] leading-[20px] text-[#c4c9d1]" />
      </div>
      <div className="flex grow shrink-0 basis-0 flex-col items-start gap-0.5">
        <div
          className={SubframeUtils.twClassNames(
            "flex flex-col items-start gap-0.5",
            { "flex-row gap-2": active }
          )}
        >
          {name ? (
            <span className="font-['Inter'] text-[15px] font-[600] leading-[22px] text-[#ffffff]">
              {name}
            </span>
          ) : null}
          <div
            className={SubframeUtils.twClassNames(
              "hidden items-center rounded-[9999px] border border-solid border-[#22c55e80] bg-[#0f2418] px-2 py-0.5",
              { flex: active }
            )}
          >
            <span className="font-['Inter'] text-[11px] font-[600] leading-[14px] text-[#86efac]">
              Active
            </span>
          </div>
        </div>
        <div className="flex items-start">
          {size ? (
            <span className="font-['Inter'] text-[12px] font-[400] leading-[16px] text-[#7a828e]">
              {size}
            </span>
          ) : null}
          <span className="font-['Inter'] text-[12px] font-[400] leading-[16px] text-[#7a828e]">
             · 
          </span>
          {version ? (
            <span className="font-['Inter'] text-[12px] font-[400] leading-[16px] text-[#7a828e]">
              {version}
            </span>
          ) : null}
          <span className="font-['Inter'] text-[12px] font-[400] leading-[16px] text-[#7a828e]">
             · 
          </span>
          <span className="font-['Inter'] text-[12px] font-[400] leading-[16px] text-[#7a828e]">
            Last active 
          </span>
          {lastActiveTimestamp ? (
            <span className="font-['Inter'] text-[12px] font-[400] leading-[16px] text-[#7a828e]">
              {lastActiveTimestamp}
            </span>
          ) : null}
        </div>
      </div>
      {actions ? (
        <div className="flex items-center gap-2">{actions}</div>
      ) : null}
    </div>
  );
});

export const InstanceListItem = InstanceListItemRoot;
