"use client";
/*
 * Documentation:
 * LogEntry — https://app.subframe.com/8707573e90c5/library?component=LogEntry_8d340ead-a96e-478a-9c1b-8f1f26fb4e43
 */

import React from "react";
import * as SubframeUtils from "../../utils";

export interface LogEntryRootProps
  extends React.HTMLAttributes<HTMLDivElement> {
  type?: "info" | "warn" | "error";
  timestamp?: React.ReactNode;
  source?: React.ReactNode;
  message?: React.ReactNode;
  className?: string;
}

const LogEntryRoot = React.forwardRef<HTMLDivElement, LogEntryRootProps>(
  function LogEntryRoot(
    {
      type = "info",
      timestamp,
      source,
      message,
      className,
      ...otherProps
    }: LogEntryRootProps,
    ref
  ) {
    return (
      <div
        className={SubframeUtils.twClassNames(
          "group/8d340ead flex w-full items-start gap-2 rounded-[4px] border-l-2 border-solid border-transparent px-2 py-0.5",
          {
            "border-l-2 border-y-0 border-r-0 border-solid border-[#ef4444] bg-[#ef44441a]":
              type === "error",
            "border-l-2 border-y-0 border-r-0 border-solid border-[#f7b900] bg-[#f7b9000f]":
              type === "warn",
          },
          className
        )}
        ref={ref}
        {...otherProps}
      >
        {timestamp ? (
          <span className="font-['Obel_Mono_Italic'] text-[12px] font-[400] leading-[18px] text-[#5b636e]">
            {timestamp}
          </span>
        ) : null}
        {source ? (
          <span
            className={SubframeUtils.twClassNames(
              "font-['Obel_Mono'] text-[12px] font-[400] leading-[18px] text-[#4ade80b3]",
              {
                "font-[600] tracking-normal text-[#ef4444]": type === "error",
                "font-[500] tracking-normal text-[#f7b900]": type === "warn",
              }
            )}
          >
            {source}
          </span>
        ) : null}
        {message ? (
          <span
            className={SubframeUtils.twClassNames(
              "grow shrink-0 basis-0 font-['Obel_Mono'] text-[12px] font-[400] leading-[18px] text-[#d1d5db]",
              {
                "text-[#fca5a5]": type === "error",
                "text-[#fde68a]": type === "warn",
              }
            )}
          >
            {message}
          </span>
        ) : null}
      </div>
    );
  }
);

export const LogEntry = LogEntryRoot;
