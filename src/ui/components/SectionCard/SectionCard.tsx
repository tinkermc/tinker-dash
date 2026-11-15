"use client";
/*
 * Documentation:
 * SectionCard — https://app.subframe.com/8707573e90c5/library?component=SectionCard_4ae42ed7-c4f9-45dc-aa8d-a954ddf53c31
 */

import React from "react";
import * as SubframeUtils from "../../utils";

export interface SectionCardRootProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  title?: React.ReactNode;
  description?: React.ReactNode;
  headerAction?: React.ReactNode;
  children?: React.ReactNode;
  variant?: "default" | "plus" | "danger";
  className?: string;
}

const SectionCardRoot = React.forwardRef<HTMLDivElement, SectionCardRootProps>(
  function SectionCardRoot(
    {
      title,
      description,
      headerAction,
      children,
      variant = "default",
      className,
      ...otherProps
    }: SectionCardRootProps,
    ref
  ) {
    return (
      <div
        className={SubframeUtils.twClassNames(
          "group/4ae42ed7 flex w-full flex-col items-start gap-3 group/sectioncard",
          className
        )}
        ref={ref}
        {...otherProps}
      >
        <div className="flex w-full items-end justify-between gap-4">
          <div className="flex grow shrink-0 basis-0 flex-col items-start gap-0.5">
            {title ? (
              <span
                className={SubframeUtils.twClassNames(
                  "font-['Inter'] text-[16px] font-[700] leading-[24px] text-[#ffffff]",
                  { "text-[#fca5a5]": variant === "danger" }
                )}
              >
                {title}
              </span>
            ) : null}
            {description ? (
              <span className="font-['Inter'] text-[13px] font-[400] leading-[18px] text-[#7a828e]">
                {description}
              </span>
            ) : null}
          </div>
          {headerAction ? (
            <div className="flex items-center gap-2">{headerAction}</div>
          ) : null}
        </div>
        {children ? (
          <div
            className={SubframeUtils.twClassNames(
              "flex w-full flex-col items-start overflow-hidden rounded-xl border border-solid border-[#1f242b] bg-[#12151a]",
              {
                "border border-solid border-[#ef444466] bg-[#160f11]":
                  variant === "danger",
                "border border-solid border-[#a855f780] bg-gradient-to-br from-[#1d1230] to-[#12151a]":
                  variant === "plus",
              }
            )}
          >
            {children}
          </div>
        ) : null}
      </div>
    );
  }
);

export const SectionCard = SectionCardRoot;
