"use client";
/*
 * Documentation:
 * PageShell — https://app.subframe.com/8707573e90c5/library?component=PageShell_cb68bc55-17f5-48e9-87c5-402c7ce5ae92
 * UnsavedChangesPrompt — https://app.subframe.com/8707573e90c5/library?component=UnsavedChangesPrompt_e3c4111e-ebfd-4290-9fc2-2ddeb4bc9a56
 */

import React from "react";
import * as SubframeUtils from "../../utils";
import { UnsavedChangesPrompt } from "../UnsavedChangesPrompt";

export interface PageShellRootProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  header?: React.ReactNode;
  tabs?: React.ReactNode;
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  actions?: React.ReactNode;
  children?: React.ReactNode;
  hasUnsavedChanges?: boolean;
  unsavedChangesCount?: React.ReactNode;
  className?: string;
}

const PageShellRoot = React.forwardRef<HTMLDivElement, PageShellRootProps>(
  function PageShellRoot(
    {
      header,
      tabs,
      title,
      subtitle,
      actions,
      children,
      hasUnsavedChanges = false,
      unsavedChangesCount,
      className,
      ...otherProps
    }: PageShellRootProps,
    ref
  ) {
    return (
      <div
        className={SubframeUtils.twClassNames(
          "group/cb68bc55 flex h-full w-full flex-col items-start bg-[#0b0d10] group/pageshell min-h-full",
          className
        )}
        ref={ref}
        {...otherProps}
      >
        <div
          className={SubframeUtils.twClassNames(
            "hidden w-full flex-col items-center px-4 fixed bottom-6 left-0 right-0 z-50 pointer-events-none",
            { flex: hasUnsavedChanges }
          )}
        >
          <UnsavedChangesPrompt amountOfUnsavedChanges={unsavedChangesCount} />
        </div>
        {header ? (
          <div className="flex w-full flex-col items-start">{header}</div>
        ) : null}
        <div className="flex w-full grow shrink-0 basis-0 flex-col items-center bg-[#0b0d10] px-6 py-12 mobile:px-4 mobile:pt-6">
          <div className="flex w-full max-w-[1280px] flex-col items-center">
            {tabs ? (
              <div className="flex w-full flex-col items-center">{tabs}</div>
            ) : null}
            <div className="flex w-full flex-col items-start gap-6 rounded-3xl border border-solid border-[#1f242b] bg-[#111418] px-8 py-6 mobile:px-4">
              <div className="flex w-full items-center justify-between gap-4 mobile:flex-col mobile:items-start">
                <div className="flex grow shrink-0 basis-0 flex-col items-start gap-1">
                  {title ? (
                    <span className="font-['Inter'] text-[28px] font-[700] leading-[36px] text-[#ffffff]">
                      {title}
                    </span>
                  ) : null}
                  {subtitle ? (
                    <span className="font-['Inter'] text-[14px] font-[400] leading-[20px] text-[#9ca3af]">
                      {subtitle}
                    </span>
                  ) : null}
                </div>
                {actions ? (
                  <div className="flex flex-wrap items-center gap-2">
                    {actions}
                  </div>
                ) : null}
              </div>
              {children ? (
                <div className="flex w-full flex-col items-start gap-6">
                  {children}
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    );
  }
);

export const PageShell = PageShellRoot;
