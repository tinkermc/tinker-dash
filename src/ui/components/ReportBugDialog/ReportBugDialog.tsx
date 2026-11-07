"use client";
/*
 * Documentation:
 * ReportBugDialog — https://app.subframe.com/8707573e90c5/library?component=ReportBugDialog_acd1ba04-6418-4c05-8bcf-d2b3a4508f31
 */

import React from "react";
import * as SubframeUtils from "../../utils";

export interface ReportBugDialogRootProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  title?: React.ReactNode;
  textInput?: React.ReactNode;
  actions?: React.ReactNode;
  closeButton?: React.ReactNode;
  className?: string;
}

const ReportBugDialogRoot = React.forwardRef<
  HTMLDivElement,
  ReportBugDialogRootProps
>(function ReportBugDialogRoot(
  {
    title,
    textInput,
    actions,
    closeButton,
    className,
    ...otherProps
  }: ReportBugDialogRootProps,
  ref
) {
  return (
    <div
      className={SubframeUtils.twClassNames(
        "flex flex-col items-start rounded-2xl border border-solid border-[#1f242b] bg-[#111418] shadow-[0px_24px_64px_1px_#000000]",
        className
      )}
      ref={ref}
      {...otherProps}
    >
      <div className="flex w-full items-center gap-3 border-b border-solid border-[#1f242b] px-6 py-4">
        {title ? (
          <h2 className="grow shrink-0 basis-0 font-['Inter'] text-[20px] font-[700] leading-[28px] text-[#ffffff]">
            {title}
          </h2>
        ) : null}
        {closeButton ? (
          <div className="flex items-center gap-3">{closeButton}</div>
        ) : null}
      </div>
      <div className="flex w-full grow shrink-0 basis-0 flex-col items-start px-4 py-4">
        <div className="flex w-full grow shrink-0 basis-0 flex-col items-start gap-4 rounded-[10px] border border-solid border-[#2a3038] bg-[#0b0d10] px-6 py-5">
          {textInput ? (
            <div className="flex w-full flex-col items-start gap-4">
              {textInput}
            </div>
          ) : null}
        </div>
      </div>
      <div className="flex w-full items-center justify-end gap-2 border-t border-solid border-[#1f242b] px-6 py-4">
        {actions ? (
          <div className="flex items-center justify-end gap-2">{actions}</div>
        ) : null}
      </div>
    </div>
  );
});

export const ReportBugDialog = ReportBugDialogRoot;
