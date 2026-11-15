"use client";
/*
 * Documentation:
 * InputField — https://app.subframe.com/8707573e90c5/library?component=InputField_4c35f5fc-ac50-4127-9b9d-8e365a1b405a
 */

import React from "react";
import * as SubframeCore from "@subframe/core";
import TextAsterisk16Filled from "../../icons/TextAsterisk16Filled";
import * as SubframeUtils from "../../utils";

export interface InputFieldRootProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  required?: boolean;
  title?: React.ReactNode;
  placeholder?: React.ReactNode;
  labelIcon?: React.ReactNode;
  helperText?: React.ReactNode;
  state?: "default" | "error" | "disabled";
  size?: "md" | "sm";
  input?: React.ReactNode;
  trailing?: React.ReactNode;
  className?: string;
}

const InputFieldRoot = React.forwardRef<HTMLDivElement, InputFieldRootProps>(
  function InputFieldRoot(
    {
      required = false,
      title,
      placeholder,
      labelIcon = null,
      helperText,
      state = "default",
      size = "md",
      input,
      trailing,
      className,
      ...otherProps
    }: InputFieldRootProps,
    ref
  ) {
    return (
      <div
        className={SubframeUtils.twClassNames(
          "group/4c35f5fc flex w-full flex-col items-start gap-2",
          { "gap-1.5": size === "sm", "opacity-50": state === "disabled" },
          className
        )}
        ref={ref}
        {...otherProps}
      >
        <div
          className={SubframeUtils.twClassNames("flex items-center gap-1.5", {
            "gap-0.5": required,
          })}
        >
          <TextAsterisk16Filled
            className={SubframeUtils.twClassNames(
              "hidden font-['Inter'] text-[10px] font-[400] leading-[20px] text-[#e15b52]",
              { "inline-flex": required }
            )}
          />
          {labelIcon ? (
            <SubframeCore.IconWrapper className="font-['Inter'] text-[14px] font-[400] leading-[20px] text-[#7a828e]">
              {labelIcon}
            </SubframeCore.IconWrapper>
          ) : null}
          <div className="flex items-center gap-1">
            {title ? (
              <span
                className={SubframeUtils.twClassNames(
                  "font-['Inter'] text-[14px] font-[500] leading-[20px] text-[#c4c9d1]",
                  {
                    "text-[13px] leading-[18px] tracking-normal": size === "sm",
                  }
                )}
              >
                {title}
              </span>
            ) : null}
            <span
              className={SubframeUtils.twClassNames(
                "font-['Inter'] text-[12px] font-[400] leading-[20px] text-[#7a828e]",
                { hidden: required }
              )}
            >
              (optional)
            </span>
          </div>
        </div>
        <div className="flex w-full items-center gap-2">
          <div
            className={SubframeUtils.twClassNames(
              "flex min-h-[40px] grow shrink-0 basis-0 gap-2 rounded-[8px] items-stretch",
              {
                "min-h-[32px]": size === "sm",
                "ring-1 ring-[#ef4444]": state === "error",
              }
            )}
          >
            {input ? (
              <div className="flex grow shrink-0 basis-0 gap-2 items-stretch">
                {input}
              </div>
            ) : null}
          </div>
          {trailing ? (
            <div className="flex items-center gap-2">{trailing}</div>
          ) : null}
        </div>
        {helperText ? (
          <span
            className={SubframeUtils.twClassNames(
              "font-['Inter'] text-[12px] font-[400] leading-[16px] text-[#7a828e]",
              { "text-[#fca5a5]": state === "error" }
            )}
          >
            {helperText}
          </span>
        ) : null}
      </div>
    );
  }
);

export const InputField = InputFieldRoot;
