"use client";
/*
 * Documentation:
 * BackupListing — https://app.subframe.com/8707573e90c5/library?component=BackupListing_ccd4061c-b2d9-4003-aa6b-b37a92ac710e
 */

import React from "react";
import BrainCircuit24Regular from "../../icons/BrainCircuit24Regular";
import RoundDownload from "../../icons/RoundDownload";
import RoundFolderCopy from "../../icons/RoundFolderCopy";
import RoundRefresh from "../../icons/RoundRefresh";
import * as SubframeUtils from "../../utils";

export interface BackupListingRootProps
  extends React.HTMLAttributes<HTMLDivElement> {
  backupType?: "normal" | "smart";
  backupNumber?: React.ReactNode;
  timestamp?: React.ReactNode;
  size?: React.ReactNode;
  isLatest?: boolean;
  backupTrigger?: "automatic" | "manual";
  automaticBackupScheduleNumber?: React.ReactNode;
  className?: string;
}

const BackupListingRoot = React.forwardRef<
  HTMLDivElement,
  BackupListingRootProps
>(function BackupListingRoot(
  {
    backupType = "normal",
    backupNumber,
    timestamp,
    size,
    isLatest = false,
    backupTrigger = "automatic",
    automaticBackupScheduleNumber,
    className,
    ...otherProps
  }: BackupListingRootProps,
  ref
) {
  return (
    <div
      className={SubframeUtils.twClassNames(
        "group/ccd4061c flex w-full items-center gap-3 rounded-[8px] border border-solid border-[#1f242b] bg-[#12151a] px-4 py-3",
        { "border-2 border-solid border-[#a855f7]": backupType === "smart" },
        className
      )}
      ref={ref}
      {...otherProps}
    >
      <div className="flex h-9 w-9 flex-none items-center justify-center rounded-[8px] border border-solid border-[#2a3038] bg-[#1a1e23]">
        <svg
          className="font-['Inter'] text-[18px] font-[400] leading-[27px] text-[#c4c9d1]"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
        >
          <path
            d="m20.54 5.23-1.39-1.68C18.88 3.21 18.47 3 18 3H6c-.47 0-.88.21-1.16.55L3.46 5.23C3.17 5.57 3 6.02 3 6.5V19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6.5c0-.48-.17-.93-.46-1.27M12 17.5 6.5 12H10v-2h4v2h3.5zM5.12 5l.81-1h12l.94 1z"
            fill="currentColor"
            fillOpacity="1"
          />
        </svg>
      </div>
      <div className="flex grow shrink-0 basis-0 flex-col items-start gap-0.5">
        <div className="flex flex-wrap items-center gap-2">
          <div className="flex flex-wrap items-center">
            <BrainCircuit24Regular
              className={SubframeUtils.twClassNames(
                "hidden font-['Inter'] text-[20px] font-[400] leading-[20px] text-[#ffffff]",
                { "inline-flex": backupType === "smart" }
              )}
            />
            <span className="font-['Inter'] text-[15px] font-[600] leading-[22px] text-[#ffffff]">
              {backupType === "smart" ? "Smart Backup " : "Backup "}
            </span>
            {backupNumber ? (
              <span className="font-['Inter'] text-[15px] font-[600] leading-[22px] text-[#ffffff]">
                {backupNumber}
              </span>
            ) : null}
          </div>
          <div className="flex flex-wrap items-center">
            <span className="font-['Inter'] text-[15px] font-[400] leading-[22px] text-[#7a828e]">
              — 
            </span>
            {timestamp ? (
              <span className="font-['Inter'] text-[15px] font-[400] leading-[22px] text-[#7a828e]">
                {timestamp}
              </span>
            ) : null}
          </div>
          <div
            className={SubframeUtils.twClassNames(
              "hidden items-center rounded-[9999px] border border-solid border-[#22c55e80] bg-[#0f2418] px-2 py-0.5",
              { flex: isLatest }
            )}
          >
            <span className="font-['Inter'] text-[11px] font-[600] leading-[14px] text-[#86efac]">
              Latest
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
          <span className="font-['Inter'] text-[12px] font-[400] leading-[16px] text-[#7a828e]">
            {backupTrigger === "manual" ? "Manual" : "Automatic"}
          </span>
          <span
            className={SubframeUtils.twClassNames(
              "font-['Inter'] text-[12px] font-[400] leading-[16px] text-[#7a828e]",
              { hidden: backupTrigger === "manual" }
            )}
          >
             
          </span>
          <span
            className={SubframeUtils.twClassNames(
              "font-['Inter'] text-[12px] font-[400] leading-[16px] text-[#7a828e]",
              { hidden: backupTrigger === "manual" }
            )}
          >
            {backupTrigger === "manual" ? "(" : "(Schedule #"}
          </span>
          {automaticBackupScheduleNumber ? (
            <span
              className={SubframeUtils.twClassNames(
                "font-['Inter'] text-[12px] font-[400] leading-[16px] text-[#7a828e]",
                { hidden: backupTrigger === "manual" }
              )}
            >
              {automaticBackupScheduleNumber}
            </span>
          ) : null}
          <span
            className={SubframeUtils.twClassNames(
              "font-['Inter'] text-[12px] font-[400] leading-[16px] text-[#7a828e]",
              { hidden: backupTrigger === "manual" }
            )}
          >
            )
          </span>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <div className="flex items-center justify-center gap-1 rounded-[8px] border border-solid border-[#2a3038] bg-[#1a1e23] px-1 py-1 hover:border-[#3a414b]">
          <RoundFolderCopy className="font-['Inter'] text-[16px] font-[400] leading-[20px] text-[#aeb4bd]" />
        </div>
        <div className="flex items-center justify-center gap-1 self-stretch rounded-[8px] border border-solid border-[#2a3038] bg-[#1a1e23] px-3 py-1 hover:border-[#3a414b]">
          <RoundRefresh className="font-['Inter'] text-[16px] font-[400] leading-[20px] text-[#aeb4bd]" />
          <span className="font-['Inter'] text-[14px] font-[400] leading-[20px] text-[#aeb4bd]">
            Restore
          </span>
        </div>
        <div className="flex h-8 w-8 flex-none items-center justify-center rounded-[8px] border border-solid border-[#2a3038] bg-[#1a1e23] text-[#aeb4bd] hover:border-[#3a414b] hover:text-[#ffffff]">
          <RoundDownload className="font-['Inter'] text-[16px] font-[400] leading-[20px] text-[#aeb4bd]" />
        </div>
        <div className="flex h-8 w-8 flex-none items-center justify-center rounded-[8px] border border-solid border-[#2a3038] bg-[#1a1e23] text-[#aeb4bd] hover:border-[#ef4444] hover:bg-[#2a1215] hover:text-[#ef4444]">
          <svg
            className="font-['Inter'] text-[16px] font-[400] leading-[24px] text-[#aeb4bd]"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
          >
            <path
              d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z"
              fill="currentColor"
              fillOpacity="1"
            />
          </svg>
        </div>
      </div>
    </div>
  );
});

export const BackupListing = BackupListingRoot;
