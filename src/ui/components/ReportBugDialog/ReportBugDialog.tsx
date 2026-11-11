"use client";
/*
 * Documentation:
 * ImageField — https://app.subframe.com/8707573e90c5/library?component=ImageField_fa4dc593-6f9b-4a2b-a4d6-595cddd6e3de
 * InputField — https://app.subframe.com/8707573e90c5/library?component=InputField_4c35f5fc-ac50-4127-9b9d-8e365a1b405a
 * ReportBugDialog — https://app.subframe.com/8707573e90c5/library?component=ReportBugDialog_acd1ba04-6418-4c05-8bcf-d2b3a4508f31
 */

import React from "react";
import * as SubframeUtils from "../../utils";
import { ImageField } from "../ImageField";
import { InputField } from "../InputField";

export interface ReportBugDialogRootProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  title?: React.ReactNode;
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
      <div className="flex w-full grow shrink-0 basis-0 flex-col items-start gap-1.5 px-4 py-4">
        <InputField
          required={true}
          title="Subject"
          placeholder="Connection Bug"
          input={
            <>
              <input
                className="grow shrink-0 basis-0 rounded-[8px] border border-solid border-[#2a3038] bg-[#0b0d10] px-3 font-['Inter'] text-[14px] font-[400] leading-[21px] text-[#ffffff] outline-none placeholder:text-[#7a828e] focus-within:border-[#22c55e]"
                placeholder="Connection Bug"
                value=""
                type="text"
              />
              <input
                className="hidden grow shrink-0 basis-0 rounded-[8px] border border-solid border-[#2a3038] bg-[#0b0d10] px-3 font-['Inter'] text-[14px] font-[400] leading-[21px] text-[#ffffff] outline-none placeholder:text-[#7a828e] focus-within:border-[#22c55e]"
                placeholder="Connection Bug"
                value=""
                type="text"
              />
              <input
                className="hidden h-10 grow shrink-0 basis-0 rounded-[8px] border border-solid border-[#2a3038] bg-[#0b0d10] px-3 font-['Inter'] text-[14px] font-[400] leading-[21px] text-[#ffffff] outline-none placeholder:text-[#7a828e] focus-within:border-[#22c55e]"
                placeholder="Username or UUID"
                value=""
                type="text"
              />
            </>
          }
        />
        <InputField
          required={true}
          title="Content"
          placeholder="Enter bug report here. Ensure to follow guidelines for bug reporting."
          input={
            <>
              <textarea
                className="grow shrink-0 basis-0 rounded-[8px] border border-solid border-[#2a3038] bg-[#0b0d10] px-3 font-['Inter'] text-[14px] font-[400] leading-[21px] text-[#ffffff] outline-none placeholder:text-[#7a828e] focus-within:border-[#22c55e]"
                placeholder="Enter bug report here. Ensure to follow guidelines for bug reporting."
                value=""
              />
              <input
                className="hidden h-10 grow shrink-0 basis-0 rounded-[8px] border border-solid border-[#2a3038] bg-[#0b0d10] px-3 font-['Inter'] text-[14px] font-[400] leading-[21px] text-[#ffffff] outline-none placeholder:text-[#7a828e] focus-within:border-[#22c55e]"
                placeholder="Username or UUID"
                value=""
                type="text"
              />
            </>
          }
        />
        <InputField
          title="Images"
          placeholder="Enter bug report here. Ensure to follow guidelines for bug reporting."
          input={
            <>
              <textarea
                className="grow shrink-0 basis-0 rounded-[8px] border border-solid border-[#2a3038] bg-[#0b0d10] px-3 font-['Inter'] text-[14px] font-[400] leading-[21px] text-[#ffffff] outline-none placeholder:text-[#7a828e] focus-within:border-[#22c55e]"
                placeholder="Enter bug report here. Ensure to follow guidelines for bug reporting."
                value=""
              />
              <input
                className="hidden h-10 grow shrink-0 basis-0 rounded-[8px] border border-solid border-[#2a3038] bg-[#0b0d10] px-3 font-['Inter'] text-[14px] font-[400] leading-[21px] text-[#ffffff] outline-none placeholder:text-[#7a828e] focus-within:border-[#22c55e]"
                placeholder="Username or UUID"
                value=""
                type="text"
              />
            </>
          }
        />
        <ImageField title="Images" placeholder="John" />
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
