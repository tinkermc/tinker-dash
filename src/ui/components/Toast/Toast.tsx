"use client";
/*
 * Documentation:
 * Toast — https://app.subframe.com/8707573e90c5/library?component=Toast_afd42e3f-894e-4991-a659-baed154530b2
 */

import React from "react";
import * as SubframeCore from "@subframe/core";
import RoundCheckCircleOutline from "../../icons/RoundCheckCircleOutline";
import XBold from "../../icons/XBold";
import * as SubframeUtils from "../../utils";

export interface ToastRootProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  icon?: React.ReactNode;
  title?: React.ReactNode;
  description?: React.ReactNode;
  variant?: "success" | "error" | "info";
  className?: string;
}

const ToastRoot = React.forwardRef<HTMLDivElement, ToastRootProps>(
  function ToastRoot(
    {
      icon = <RoundCheckCircleOutline />,
      title,
      description,
      variant = "success",
      className,
      ...otherProps
    }: ToastRootProps,
    ref
  ) {
    return (
      <div
        className={SubframeUtils.twClassNames(
          "group/afd42e3f flex w-80 items-start gap-3 rounded-xl border border-solid border-[#2a3038] bg-[#12151a] px-4 py-3 shadow-[0px_12px_32px_0px_#00000099]",
          className
        )}
        ref={ref}
        {...otherProps}
      >
        <div
          className={SubframeUtils.twClassNames(
            "flex h-7 w-7 flex-none items-center justify-center rounded-[9999px] bg-[#0f2418]",
            {
              "bg-[#0b2340]": variant === "info",
              "bg-[#2a1215]": variant === "error",
            }
          )}
        >
          {icon ? (
            <SubframeCore.IconWrapper
              className={SubframeUtils.twClassNames(
                "font-['Inter'] text-[16px] font-[400] leading-[16px] text-[#86efac]",
                {
                  "text-[#7cbcff]": variant === "info",
                  "text-[#fca5a5]": variant === "error",
                }
              )}
            >
              {icon}
            </SubframeCore.IconWrapper>
          ) : null}
        </div>
        <div className="flex grow shrink-0 basis-0 flex-col items-start gap-0.5">
          {title ? (
            <span className="font-['Inter'] text-[14px] font-[600] leading-[20px] text-[#ffffff]">
              {title}
            </span>
          ) : null}
          {description ? (
            <span className="font-['Inter'] text-[12px] font-[400] leading-[16px] text-[#9ca3af]">
              {description}
            </span>
          ) : null}
        </div>
        <XBold className="font-['Inter'] text-[14px] font-[400] leading-[20px] text-[#7a828e] hover:text-[#ffffff]" />
      </div>
    );
  }
);

export const Toast = ToastRoot;
