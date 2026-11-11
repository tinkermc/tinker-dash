"use client";
/*
 * Documentation:
 * InputField — https://app.subframe.com/8707573e90c5/library?component=InputField_4c35f5fc-ac50-4127-9b9d-8e365a1b405a
 */

import React from "react";
import Modrinth from "../../icons/Modrinth";
import TextAsterisk16Filled from "../../icons/TextAsterisk16Filled";
import * as SubframeUtils from "../../utils";

export interface InputFieldRootProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  required?: boolean;
  title?: React.ReactNode;
  placeholder?: React.ReactNode;
  input?: React.ReactNode;
  className?: string;
}

const InputFieldRoot = React.forwardRef<HTMLDivElement, InputFieldRootProps>(
  function InputFieldRoot(
    {
      required = false,
      title,
      placeholder,
      input,
      className,
      ...otherProps
    }: InputFieldRootProps,
    ref
  ) {
    return (
      <div
        className={SubframeUtils.twClassNames(
          "group/4c35f5fc flex w-full flex-col items-start gap-2",
          className
        )}
        ref={ref}
        {...otherProps}
      >
        <div
          className={SubframeUtils.twClassNames("flex items-center gap-2", {
            "gap-0.5": required,
          })}
        >
          {required ? (
            <TextAsterisk16Filled
              className={SubframeUtils.twClassNames(
                "hidden font-['Inter'] text-[10px] font-[400] leading-[20px] text-[#e15b52]",
                { "inline-flex": required }
              )}
            />
          ) : (
            <Modrinth
              className={SubframeUtils.twClassNames(
                "hidden font-['Inter'] text-[10px] font-[400] leading-[20px] text-[#e15b52]",
                { "inline-flex": required }
              )}
            />
          )}
          <div className="flex items-center gap-1">
            {title ? (
              <span className="font-['Inter'] text-[14px] font-[500] leading-[20px] text-[#c4c9d1]">
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
          <div className="flex grow shrink-0 basis-0 items-center gap-2">
            {input ? (
              <div className="flex grow shrink-0 basis-0 items-center gap-2">
                {input}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    );
  }
);

export const InputField = InputFieldRoot;
