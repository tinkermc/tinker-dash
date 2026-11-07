"use client";
/*
 * Documentation:
 * ModCardMod Frame — https://app.subframe.com/8707573e90c5/library?component=ModCardMod+Frame_d50fc3f4-eef5-4ebc-8758-28dbfe1e92d9
 */

import React from "react";
import RoundDownload from "../../icons/RoundDownload";
import RoundDownloadDone from "../../icons/RoundDownloadDone";
import * as SubframeUtils from "../../utils";

export interface ModCardModFrameRootProps
  extends React.HTMLAttributes<HTMLDivElement> {
  name?: React.ReactNode;
  author?: React.ReactNode;
  description?: React.ReactNode;
  downloadCount?: React.ReactNode;
  installed?: boolean;
  image?: string;
  className?: string;
}

const ModCardModFrameRoot = React.forwardRef<
  HTMLDivElement,
  ModCardModFrameRootProps
>(function ModCardModFrameRoot(
  {
    name,
    author,
    description,
    downloadCount,
    installed = false,
    image,
    className,
    ...otherProps
  }: ModCardModFrameRootProps,
  ref
) {
  return (
    <div
      className={SubframeUtils.twClassNames(
        "group/d50fc3f4 flex h-full flex-col items-start gap-2 rounded-xl border border-solid border-[#232830] bg-[#1a1e23] px-3 py-3",
        className
      )}
      ref={ref}
      {...otherProps}
    >
      <div className="flex w-full items-center gap-3">
        {image ? (
          <img
            className="h-8 w-8 flex-none rounded-[6px] object-cover"
            src={image}
          />
        ) : null}
        <div className="flex grow shrink-0 basis-0 flex-col items-start">
          <div className="flex w-full items-center gap-2">
            {name ? (
              <span className="grow shrink-0 basis-0 whitespace-nowrap font-['Inter'] text-[14px] font-[600] leading-[20px] text-[#ffffff] truncate">
                {name}
              </span>
            ) : null}
          </div>
          <div className="flex items-start">
            <span className="font-['Inter'] text-[12px] font-[400] leading-[16px] text-[#7a828e]">
              by 
            </span>
            {author ? (
              <span className="font-['Inter'] text-[12px] font-[400] leading-[16px] text-[#7a828e]">
                {author}
              </span>
            ) : null}
          </div>
        </div>
      </div>
      {description ? (
        <span className="line-clamp-1 w-full font-['Inter'] text-[12px] font-[400] leading-[18px] text-[#aeb4bd]">
          {description}
        </span>
      ) : null}
      <div className="flex w-full items-center justify-between gap-2">
        <div className="flex grow shrink-0 basis-0 items-center justify-between gap-2">
          <div className="flex items-center gap-1">
            <RoundDownload className="font-['Inter'] text-[14px] font-[400] leading-[16px] text-[#7a828e]" />
            <div className="flex items-center">
              {downloadCount ? (
                <span className="font-['Inter'] text-[12px] font-[400] leading-[16px] text-[#7a828e]">
                  {downloadCount}
                </span>
              ) : null}
              <span className="font-['Inter'] text-[12px] font-[400] leading-[16px] text-[#7a828e]">
                 downloads
              </span>
            </div>
          </div>
          <div
            className={SubframeUtils.twClassNames(
              "flex items-center gap-1 rounded-[8px] border border-solid border-[#22c55e80] bg-[#123321] px-1.5 py-1 hover:border-[#22C55E]",
              { hidden: installed }
            )}
          >
            <RoundDownload className="font-['Inter'] text-[16px] font-[400] leading-[20px] text-[#ffffff]" />
            <span className="font-['Inter'] text-[13px] font-[500] leading-[20px] text-[#ffffff]">
              Install
            </span>
          </div>
          <div
            className={SubframeUtils.twClassNames(
              "hidden items-center gap-1 rounded-[8px] border border-solid border-[#2a3038] bg-[#1a1e23] px-3 py-1 opacity-70",
              { flex: installed }
            )}
          >
            <RoundDownloadDone className="font-['Inter'] text-[16px] font-[400] leading-[20px] text-[#ffffff]" />
            <span className="font-['Inter'] text-[13px] font-[500] leading-[20px] text-[#7a828e]">
              Installed 
            </span>
          </div>
        </div>
      </div>
    </div>
  );
});

export const ModCardModFrame = ModCardModFrameRoot;
