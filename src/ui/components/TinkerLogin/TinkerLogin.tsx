"use client";
/*
 * Documentation:
 * TinkerLogin — https://app.subframe.com/8707573e90c5/library?component=TinkerLogin_ad2d6d99-a1c5-41e6-8767-26a8c07c6de9
 */

import React from "react";
import RoundLogIn from "../../icons/RoundLogIn";
import * as SubframeUtils from "../../utils";

export interface TinkerLoginRootProps
  extends React.HTMLAttributes<HTMLDivElement> {
  dropdownUserSelector?: boolean;
  closeButton?: React.ReactNode;
  usernameField?: React.ReactNode;
  confirmButton?: React.ReactNode;
  cancelButton?: React.ReactNode;
  className?: string;
}

const TinkerLoginRoot = React.forwardRef<HTMLDivElement, TinkerLoginRootProps>(
  function TinkerLoginRoot(
    {
      dropdownUserSelector = false,
      closeButton,
      usernameField,
      confirmButton,
      cancelButton,
      className,
      ...otherProps
    }: TinkerLoginRootProps,
    ref
  ) {
    return (
      <div
        className={SubframeUtils.twClassNames(
          "group/ad2d6d99 flex min-w-[440px] flex-col items-start rounded-2xl border border-solid border-[#1f242b] bg-[#111418] shadow-[0px_24px_64px_1px_#000000]",
          className
        )}
        ref={ref}
        {...otherProps}
      >
        <div className="flex w-full items-center gap-3 border-b border-solid border-[#1f242b] px-6 py-4">
          <div className="flex h-8 w-8 flex-none items-center justify-center rounded-[8px] bg-[#123321]">
            <RoundLogIn className="font-['Inter'] text-[18px] font-[400] leading-[27px] text-[#22c55e]" />
          </div>
          <h2 className="grow shrink-0 basis-0 font-['Inter'] text-[20px] font-[700] leading-[28px] text-[#ffffff]">
            Tinker Login
          </h2>
          {closeButton ? (
            <div className="flex items-center gap-3">{closeButton}</div>
          ) : null}
        </div>
        <div className="flex w-full flex-col items-start gap-4 px-6 py-5">
          {usernameField ? (
            <div className="flex w-full flex-col items-start gap-4">
              {usernameField}
            </div>
          ) : null}
          <div className="flex items-center gap-1">
            <span className="font-['Inter'] text-[14px] font-[500] leading-[20px] text-[#c4c9d1]">
              Authentication Method
            </span>
            <span className="hidden font-['Inter'] text-[12px] font-[400] leading-[20px] text-[#7a828e]">
              (optional)
            </span>
          </div>
          <div className="flex h-10 w-full flex-none items-center justify-between rounded-[8px] border border-solid border-[#2a3038] bg-[#0b0d10] px-3">
            <span className="font-['Inter'] text-[14px] font-[400] leading-[20px] text-[#5b636e]">
              Password, Passkey, Rotating Code, etc...
            </span>
            <span className="font-['Inter'] text-[12px] font-[400] leading-[20px] text-[#7a828e]">
              ▾
            </span>
          </div>
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
  }
);

export const TinkerLogin = TinkerLoginRoot;
