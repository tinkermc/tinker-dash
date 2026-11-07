"use client";
/*
 * Documentation:
 * ConfirmationDialog — https://app.subframe.com/8707573e90c5/library?component=ConfirmationDialog_cdce3fd8-13da-46ad-b915-8cbd481c7d4f
 */

import React from "react";
import * as SubframeUtils from "../../utils";

export interface ConfirmationDialogRootProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  title?: React.ReactNode;
  description?: React.ReactNode;
  actions?: React.ReactNode;
  className?: string;
}

const ConfirmationDialogRoot = React.forwardRef<
  HTMLDivElement,
  ConfirmationDialogRootProps
>(function ConfirmationDialogRoot(
  {
    title,
    description,
    actions,
    className,
    ...otherProps
  }: ConfirmationDialogRootProps,
  ref
) {
  return (
    <div
      className={SubframeUtils.twClassNames(
        "flex max-w-[240px] flex-col items-center justify-between rounded-xl border border-solid border-[#232830] bg-[#0b0d10] px-4 py-3 shadow-[0px_0px_32px_0px_#000000] gap-4 absolute z-50",
        className
      )}
      ref={ref}
      {...otherProps}
    >
      <div className="flex w-full grow shrink-0 basis-0 flex-col items-start">
        {title ? (
          <h1 className="w-full font-['Inter'] text-[20px] font-[400] leading-[20px] text-[#ffffff]">
            {title}
          </h1>
        ) : null}
        {description ? (
          <h1 className="w-full grow shrink-0 basis-0 font-['Inter'] text-[13px] font-[400] leading-[20px] text-[#7a828e]">
            {description}
          </h1>
        ) : null}
      </div>
      {actions ? (
        <div className="flex items-center gap-2">{actions}</div>
      ) : null}
    </div>
  );
});

export const ConfirmationDialog = ConfirmationDialogRoot;
