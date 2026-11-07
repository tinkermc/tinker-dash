"use client";
/*
 * Documentation:
 * Checkbox — https://app.subframe.com/8707573e90c5/library?component=Checkbox_4dd0318f-302a-41c3-ac78-584e0448f8e7
 */

import React from "react";
import RoundCheck from "../../icons/RoundCheck";
import * as SubframeUtils from "../../utils";

export interface CheckboxRootProps
  extends React.HTMLAttributes<HTMLDivElement> {
  checked?: boolean;
  className?: string;
}

const CheckboxRoot = React.forwardRef<HTMLDivElement, CheckboxRootProps>(
  function CheckboxRoot(
    { checked = false, className, ...otherProps }: CheckboxRootProps,
    ref
  ) {
    return (
      <div
        className={SubframeUtils.twClassNames(
          "group/4dd0318f flex h-4 w-4 items-center justify-center rounded-[4px] border border-solid border-[#2a3038] bg-[#0b0d10]",
          {
            "flex-col border border-solid border-[#22c55e] bg-[#22c55e]":
              checked,
          },
          className
        )}
        ref={ref}
        {...otherProps}
      >
        <RoundCheck
          className={SubframeUtils.twClassNames(
            "hidden font-['Inter'] text-[14px] font-[400] leading-[20px] text-[#ffffff]",
            { "inline-flex": checked }
          )}
        />
      </div>
    );
  }
);

export const Checkbox = CheckboxRoot;
