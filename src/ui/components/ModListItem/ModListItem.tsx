"use client";
/*
 * Documentation:
 * ModListItem — https://app.subframe.com/8707573e90c5/library?component=ModListItem_67acdf84-3dc3-4cda-bdeb-2cbf4ed2d824
 */

import React from "react";
import RoundUpgrade from "../../icons/RoundUpgrade";
import * as SubframeUtils from "../../utils";

export interface ModListItemRootProps
  extends React.HTMLAttributes<HTMLDivElement> {
  image?: string;
  name?: React.ReactNode;
  version?: React.ReactNode;
  action?: React.ReactNode;
  updateAvaliable?: boolean;
  className?: string;
}

const ModListItemRoot = React.forwardRef<HTMLDivElement, ModListItemRootProps>(
  function ModListItemRoot(
    {
      image,
      name,
      version,
      action,
      updateAvaliable = false,
      className,
      ...otherProps
    }: ModListItemRootProps,
    ref
  ) {
    return (
      <div
        className={SubframeUtils.twClassNames(
          "group/67acdf84 flex w-full items-center gap-3 rounded-[8px] bg-[#1a1e23] px-3 py-2",
          className
        )}
        ref={ref}
        {...otherProps}
      >
        {image ? (
          <img
            className="h-8 w-8 flex-none rounded-[6px] object-cover"
            src={image}
          />
        ) : null}
        <div className="flex grow shrink-0 basis-0 items-center gap-3">
          <div className="flex grow shrink-0 basis-0 flex-col items-start">
            {name ? (
              <span className="w-full whitespace-nowrap font-['Inter'] text-[14px] font-[500] leading-[20px] text-[#ffffff] truncate">
                {name}
              </span>
            ) : null}
            {version ? (
              <span className="font-['Inter'] text-[12px] font-[400] leading-[16px] text-[#7a828e]">
                {version}
              </span>
            ) : null}
          </div>
        </div>
        <div
          className={SubframeUtils.twClassNames(
            "hidden items-center rounded-[9999px] border border-solid border-[#22c55e80] bg-[#22c55e21] pl-0.5 pr-2",
            { flex: updateAvaliable }
          )}
        >
          <RoundUpgrade className="font-['Inter'] text-[16px] font-[400] leading-[20px] text-[#86efac]" />
          <span className="font-['Inter'] text-[11px] font-[500] leading-[18px] text-[#86efac]">
            Update
          </span>
        </div>
        {action ? (
          <div className="flex items-center gap-3">{action}</div>
        ) : null}
      </div>
    );
  }
);

export const ModListItem = ModListItemRoot;
