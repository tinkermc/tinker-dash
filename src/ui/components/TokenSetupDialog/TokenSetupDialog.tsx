"use client";
/*
 * Documentation:
 * TokenSetupDialog — https://app.subframe.com/8707573e90c5/library?component=TokenSetupDialog_2e129373-aaea-4999-abb6-4f3abfce711c
 */

import React from "react";
import RoundPassword from "../../icons/RoundPassword";
import * as SubframeUtils from "../../utils";

export interface TokenSetupDialogRootProps
  extends React.HTMLAttributes<HTMLDivElement> {
  closeButton?: React.ReactNode;
  tokenInput?: React.ReactNode;
  confirmButton?: React.ReactNode;
  cancelButton?: React.ReactNode;
  className?: string;
}

const TokenSetupDialogRoot = React.forwardRef<
  HTMLDivElement,
  TokenSetupDialogRootProps
>(function TokenSetupDialogRoot(
  {
    closeButton,
    tokenInput,
    confirmButton,
    cancelButton,
    className,
    ...otherProps
  }: TokenSetupDialogRootProps,
  ref
) {
  return (
    <div
      className={SubframeUtils.twClassNames(
        "flex min-w-[440px] flex-col items-start rounded-2xl border border-solid border-[#1f242b] bg-[#111418] shadow-[0px_24px_64px_1px_#000000]",
        className
      )}
      ref={ref}
      {...otherProps}
    >
      <div className="flex w-full items-center gap-3 border-b border-solid border-[#1f242b] px-6 py-4">
        <div className="flex h-8 w-8 flex-none items-center justify-center rounded-[8px] bg-[#123321]">
          <RoundPassword className="font-['Inter'] text-[18px] font-[400] leading-[27px] text-[#22c55e]" />
        </div>
        <h2 className="grow shrink-0 basis-0 font-['Inter'] text-[20px] font-[700] leading-[28px] text-[#ffffff]">
          Setup Token
        </h2>
        {closeButton ? (
          <div className="flex items-center gap-3">{closeButton}</div>
        ) : null}
      </div>
      <div className="flex w-full flex-col items-start gap-4 px-6 py-5">
        <div className="flex w-full flex-col items-start gap-4">
          <div className="flex w-full flex-col items-start gap-2">
            <div className="flex items-center gap-1">
              <span className="font-['Inter'] text-[14px] font-[500] leading-[20px] text-[#c4c9d1]">
                Token
              </span>
              <span className="font-['Inter'] text-[12px] font-[400] leading-[20px] text-[#7a828e]">
                (get it from running deploy/install.sh on your server)
              </span>
            </div>
            <div className="flex w-full items-center gap-2">
              <div className="flex grow shrink-0 basis-0 items-center gap-2">
                <div className="flex grow shrink-0 basis-0 items-center gap-2">
                  <input
                    className="hidden h-10 grow shrink-0 basis-0 rounded-[8px] border border-solid border-[#2a3038] bg-[#0b0d10] px-3 font-['Inter'] text-[14px] font-[400] leading-[21px] text-[#ffffff] outline-none placeholder:text-[#7a828e] focus-within:border-[#22c55e]"
                    placeholder="Username only"
                    value=""
                    type="text"
                  />
                  <div className="flex grow shrink-0 basis-0 items-center gap-2">
                    {tokenInput ? (
                      <div className="flex grow shrink-0 basis-0 items-center gap-2">
                        {tokenInput}
                      </div>
                    ) : null}
                    <div className="hidden h-10 grow shrink-0 basis-0 items-center justify-between rounded-[8px] border border-solid border-[#2a3038] bg-[#0b0d10] px-3">
                      <span className="font-['Inter'] text-[14px] font-[400] leading-[20px] text-[#5b636e]">
                        Password, Passkey, Rotating Code, etc...
                      </span>
                      <span className="font-['Inter'] text-[12px] font-[400] leading-[20px] text-[#7a828e]">
                        ▾
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <span className="hidden font-['Inter'] text-[12px] font-[400] leading-[20px] text-[#7a828e]">
          (optional)
        </span>
      </div>
      <div className="flex w-full items-center justify-end gap-2 border-t border-solid border-[#1f242b] px-6 py-4">
        {confirmButton ? (
          <div className="flex items-center justify-end gap-2">
            {confirmButton}
          </div>
        ) : null}
        {cancelButton ? (
          <div className="flex items-center justify-end gap-2">
            {cancelButton}
          </div>
        ) : null}
      </div>
    </div>
  );
});

export const TokenSetupDialog = TokenSetupDialogRoot;
