"use client";
/*
 * Documentation:
 * ServerBackupInfoHeader — https://app.subframe.com/8707573e90c5/library?component=ServerBackupInfoHeader_7957560b-c52e-4bd5-84fb-eb5f8a5423cc
 */

import React from "react";
import * as SubframeUtils from "../../utils";

export interface ServerBackupInfoHeaderRootProps
  extends React.HTMLAttributes<HTMLDivElement> {
  serverIcon?: string;
  name?: React.ReactNode;
  totalBackupsCount?: React.ReactNode;
  totalSize?: React.ReactNode;
  timestampSpan?: React.ReactNode;
  className?: string;
}

const ServerBackupInfoHeaderRoot = React.forwardRef<
  HTMLDivElement,
  ServerBackupInfoHeaderRootProps
>(function ServerBackupInfoHeaderRoot(
  {
    serverIcon,
    name,
    totalBackupsCount,
    totalSize,
    timestampSpan,
    className,
    ...otherProps
  }: ServerBackupInfoHeaderRootProps,
  ref
) {
  return (
    <div
      className={SubframeUtils.twClassNames(
        "flex w-full items-center gap-2.5",
        className
      )}
      ref={ref}
      {...otherProps}
    >
      <div className="flex h-14 w-14 flex-none items-center justify-center rounded-xl border border-solid border-[#232830] bg-[#15191e]">
        {serverIcon ? (
          <img
            className="h-10 w-10 flex-none object-contain"
            src={serverIcon}
          />
        ) : null}
      </div>
      <div className="flex grow shrink-0 basis-0 items-center gap-1">
        <div className="flex flex-col items-start gap-1">
          {name ? (
            <span className="font-['Inter'] text-[20px] font-[700] leading-[28px] text-[#ffffff]">
              {name}
            </span>
          ) : null}
          <div className="flex items-start">
            {totalBackupsCount ? (
              <span className="font-['Inter'] text-[12px] font-[400] leading-[16px] text-[#7a828e]">
                {totalBackupsCount}
              </span>
            ) : null}
            <span className="font-['Inter'] text-[12px] font-[400] leading-[16px] text-[#7a828e]">
               backups · 
            </span>
            {totalSize ? (
              <span className="font-['Inter'] text-[12px] font-[400] leading-[16px] text-[#7a828e]">
                {totalSize}
              </span>
            ) : null}
            <span className="font-['Inter'] text-[12px] font-[400] leading-[16px] text-[#7a828e]">
               total · Across 
            </span>
            {timestampSpan ? (
              <span className="font-['Inter'] text-[12px] font-[400] leading-[16px] text-[#7a828e]">
                {timestampSpan}
              </span>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
});

export const ServerBackupInfoHeader = ServerBackupInfoHeaderRoot;
