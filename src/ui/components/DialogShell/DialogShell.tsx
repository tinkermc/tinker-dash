"use client";
/*
 * Documentation:
 * DialogShell — https://app.subframe.com/8707573e90c5/library?component=DialogShell_6bd79237-e38f-46c0-9d91-e723660b2339
 */

import React from "react";
import * as SubframeCore from "@subframe/core";
import TinkerDash from "../../icons/TinkerDash";
import XBold from "../../icons/XBold";
import * as SubframeUtils from "../../utils";

export interface DialogShellRootProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  icon?: React.ReactNode;
  title?: React.ReactNode;
  description?: React.ReactNode;
  children?: React.ReactNode;
  footer?: React.ReactNode;
  tone?: "default" | "danger" | "plus";
  className?: string;
}

const DialogShellRoot = React.forwardRef<HTMLDivElement, DialogShellRootProps>(
  function DialogShellRoot(
    {
      icon = <TinkerDash />,
      title,
      description,
      children,
      footer,
      tone = "default",
      className,
      ...otherProps
    }: DialogShellRootProps,
    ref
  ) {
    return (
      <div
        className={SubframeUtils.twClassNames(
          "group/6bd79237 flex w-[480px] flex-col items-start rounded-2xl border border-solid border-[#1f242b] bg-[#111418] shadow-[0px_24px_64px_0px_#000000b3] mobile:w-full",
          className
        )}
        ref={ref}
        {...otherProps}
      >
        <div className="flex w-full items-start gap-3 px-5 pt-5 pb-4">
          <div
            className={SubframeUtils.twClassNames(
              "flex h-10 w-10 flex-none items-center justify-center rounded-[10px] border border-solid border-[#22c55e80] bg-[#0f2418]",
              {
                "border border-solid border-[#a855f780] bg-[#2e1450]":
                  tone === "plus",
                "border border-solid border-[#ef444480] bg-[#2a1215]":
                  tone === "danger",
              }
            )}
          >
            {icon ? (
              <SubframeCore.IconWrapper
                className={SubframeUtils.twClassNames(
                  "font-['Inter'] text-[20px] font-[400] leading-[20px] text-[#86efac]",
                  {
                    "text-[#e9d5ff]": tone === "plus",
                    "text-[#fca5a5]": tone === "danger",
                  }
                )}
              >
                {icon}
              </SubframeCore.IconWrapper>
            ) : null}
          </div>
          <div className="flex grow shrink-0 basis-0 flex-col items-start gap-0.5">
            {title ? (
              <span className="font-['Inter'] text-[18px] font-[700] leading-[26px] text-[#ffffff]">
                {title}
              </span>
            ) : null}
            {description ? (
              <span className="font-['Inter'] text-[13px] font-[400] leading-[18px] text-[#9ca3af]">
                {description}
              </span>
            ) : null}
          </div>
          <div className="flex h-8 w-8 flex-none items-center justify-center rounded-[8px] border border-solid border-[#2a3038] bg-[#0b0d10] hover:border-[#3a414b]">
            <XBold className="font-['Inter'] text-[16px] font-[400] leading-[16px] text-[#aeb4bd]" />
          </div>
        </div>
        {children ? (
          <div className="flex w-full flex-col items-start gap-4 px-5 pb-5">
            {children}
          </div>
        ) : null}
        {footer ? (
          <div className="flex w-full items-center justify-end gap-2 border-t border-solid border-[#1f242b] px-5 py-4">
            {footer}
          </div>
        ) : null}
      </div>
    );
  }
);

export const DialogShell = DialogShellRoot;
