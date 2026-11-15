"use client";
/*
 * Documentation:
 * ExplorerItem — https://app.subframe.com/8707573e90c5/library?component=ExplorerItem_5a35c104-5d2b-4003-a6ab-8826890a41a0
 */

import React from "react";
import ChevronDown12Filled from "../../icons/ChevronDown12Filled";
import ChevronRight12Filled from "../../icons/ChevronRight12Filled";
import FolderOpenRounded from "../../icons/FolderOpenRounded";
import FolderRounded from "../../icons/FolderRounded";
import RoundInsertDriveFile from "../../icons/RoundInsertDriveFile";
import * as SubframeUtils from "../../utils";

export interface ExplorerItemRootProps
  extends React.HTMLAttributes<HTMLDivElement> {
  type?: "folder" | "file";
  name?: React.ReactNode;
  count?: React.ReactNode;
  hideCount?: boolean;
  expanded?: boolean;
  selected?: boolean;
  showChevron?: boolean;
  depth?: "0" | "1" | "2" | "3";
  unsavedChanges?: boolean;
  className?: string;
}

const ExplorerItemRoot = React.forwardRef<
  HTMLDivElement,
  ExplorerItemRootProps
>(function ExplorerItemRoot(
  {
    type = "folder",
    name,
    count,
    hideCount = false,
    expanded = false,
    selected = false,
    showChevron = false,
    depth = "0",
    unsavedChanges = false,
    className,
    ...otherProps
  }: ExplorerItemRootProps,
  ref
) {
  return (
    <div
      className={SubframeUtils.twClassNames(
        "group/5a35c104 flex h-7 w-full cursor-pointer items-center gap-1.5 rounded-[6px] px-2 hover:bg-[#1a1e23]",
        {
          "pl-[60px]": depth === "3",
          "pl-11": depth === "2",
          "pl-7": depth === "1",
          "border border-solid border-[#22c55e80] bg-[#0f2418] hover:bg-[#0f2418]":
            selected,
        },
        className
      )}
      ref={ref}
      {...otherProps}
    >
      <ChevronRight12Filled
        className={SubframeUtils.twClassNames(
          "hidden font-['Inter'] text-[14px] font-[400] leading-[21px] text-[#7a828e]",
          { "inline-flex": showChevron }
        )}
      />
      {expanded ? (
        <ChevronDown12Filled
          className={SubframeUtils.twClassNames(
            "hidden font-['Inter'] text-[14px] font-[400] leading-[21px] text-[#7a828e]",
            { "inline-flex": expanded }
          )}
        />
      ) : (
        <ChevronRight12Filled
          className={SubframeUtils.twClassNames(
            "hidden font-['Inter'] text-[14px] font-[400] leading-[21px] text-[#7a828e]",
            { "inline-flex": expanded }
          )}
        />
      )}
      {expanded ? (
        <FolderOpenRounded
          className={SubframeUtils.twClassNames(
            "font-['Inter'] text-[15px] font-[400] leading-[23px] text-[#7a828e]",
            { "text-[#86efac]": selected, "text-[#c4c9d1]": expanded }
          )}
        />
      ) : type === "file" ? (
        <RoundInsertDriveFile
          className={SubframeUtils.twClassNames(
            "font-['Inter'] text-[15px] font-[400] leading-[23px] text-[#7a828e]",
            { "text-[#86efac]": selected, "text-[#c4c9d1]": expanded }
          )}
        />
      ) : (
        <FolderRounded
          className={SubframeUtils.twClassNames(
            "font-['Inter'] text-[15px] font-[400] leading-[23px] text-[#7a828e]",
            { "text-[#86efac]": selected, "text-[#c4c9d1]": expanded }
          )}
        />
      )}
      {name ? (
        <span
          className={SubframeUtils.twClassNames(
            "grow shrink-0 basis-0 font-['Inter'] text-[13px] font-[400] leading-[20px] text-[#c4c9d1]",
            {
              "text-[#ffffff]": selected,
              "font-[600] tracking-normal text-[#ffffff]": expanded,
            }
          )}
        >
          {name}
        </span>
      ) : null}
      <span
        className={SubframeUtils.twClassNames(
          "font-['Inter'] text-[11px] font-[400] leading-[16px] text-[#7a828e]",
          { hidden: unsavedChanges || expanded || hideCount }
        )}
      >
        48
      </span>
      <div
        className={SubframeUtils.twClassNames(
          "hidden h-2 w-2 flex-none items-start rounded-[9999px] bg-[#f59e0b]",
          { flex: unsavedChanges }
        )}
      />
    </div>
  );
});

export const ExplorerItem = ExplorerItemRoot;
