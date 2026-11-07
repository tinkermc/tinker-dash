"use client";
/*
 * Documentation:
 * FAQItem — https://app.subframe.com/8707573e90c5/library?component=FAQItem_fdc9b9d4-bef8-4d5f-9b69-5f76a5025a7a
 */

import React from "react";
import * as SubframeUtils from "../../utils";

export interface FaqItemRootProps extends React.HTMLAttributes<HTMLDivElement> {
  question?: React.ReactNode;
  answer?: React.ReactNode;
  className?: string;
}

const FaqItemRoot = React.forwardRef<HTMLDivElement, FaqItemRootProps>(
  function FaqItemRoot(
    { question, answer, className, ...otherProps }: FaqItemRootProps,
    ref
  ) {
    return (
      <div
        className={SubframeUtils.twClassNames(
          "flex w-full items-end gap-3 rounded-xl border border-solid border-[#1f242b] bg-[#12151a] px-4 py-3",
          className
        )}
        ref={ref}
        {...otherProps}
      >
        <div className="flex flex-col items-start gap-2">
          {question ? (
            <span className="whitespace-pre-wrap font-['Inter'] text-[14px] font-[400] leading-[20px] text-[#22c55e]">
              {question}
            </span>
          ) : null}
          {answer ? (
            <span className="whitespace-pre-wrap font-['Inter'] text-[14px] font-[400] leading-[20px] text-[#878787]">
              {answer}
            </span>
          ) : null}
        </div>
      </div>
    );
  }
);

export const FaqItem = FaqItemRoot;
