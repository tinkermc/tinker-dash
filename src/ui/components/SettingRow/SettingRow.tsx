"use client";
/*
 * Documentation:
 * SettingRow — https://app.subframe.com/8707573e90c5/library?component=SettingRow_c3794633-f77e-4fa6-a906-cec8edd3c496
 */

import React from "react";
import * as SubframeUtils from "../../utils";

export interface SettingRowRootProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  title?: React.ReactNode;
  description?: React.ReactNode;
  badge?: React.ReactNode;
  control?: React.ReactNode;
  divider?: boolean;
  className?: string;
}

const SettingRowRoot = React.forwardRef<HTMLDivElement, SettingRowRootProps>(
  function SettingRowRoot(
    {
      title,
      description,
      badge,
      control,
      divider = false,
      className,
      ...otherProps
    }: SettingRowRootProps,
    ref
  ) {
    return (
      <div
        className={SubframeUtils.twClassNames(
          "group/c3794633 flex w-full items-center gap-4 px-5 py-2 group/settingrow mobile:px-4 mobile:py-4",
          {
            "border-b border-x-0 border-t-0 border-solid border-[#1f242b]":
              divider,
          },
          className
        )}
        ref={ref}
        {...otherProps}
      >
        <div className="flex grow shrink-0 basis-0 flex-col items-start gap-0.5">
          <div className="flex flex-wrap items-center gap-2">
            {title ? (
              <span className="font-['Inter'] text-[15px] font-[600] leading-[22px] text-[#ffffff]">
                {title}
              </span>
            ) : null}
            {badge ? <div className="flex items-center">{badge}</div> : null}
          </div>
          {description ? (
            <span className="font-['Inter'] text-[12px] font-[400] leading-[16px] text-[#7a828e]">
              {description}
            </span>
          ) : null}
        </div>
        {control ? (
          <div className="flex items-center gap-2">{control}</div>
        ) : null}
      </div>
    );
  }
);

export const SettingRow = SettingRowRoot;
