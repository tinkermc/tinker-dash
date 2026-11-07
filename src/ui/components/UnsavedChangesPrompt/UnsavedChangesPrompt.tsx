"use client";
/*
 * Documentation:
 * PrimaryButton — https://app.subframe.com/8707573e90c5/library?component=PrimaryButton_fd8dbcfe-8313-4878-b3a2-c6c084a47f95
 * UnsavedChangesPrompt — https://app.subframe.com/8707573e90c5/library?component=UnsavedChangesPrompt_e3c4111e-ebfd-4290-9fc2-2ddeb4bc9a56
 */

import React from "react";
import RoundDelete from "../../icons/RoundDelete";
import RoundSave from "../../icons/RoundSave";
import * as SubframeUtils from "../../utils";
import { PrimaryButton } from "../PrimaryButton";

export interface UnsavedChangesPromptRootProps
  extends React.HTMLAttributes<HTMLDivElement> {
  amountOfUnsavedChanges?: React.ReactNode;
  className?: string;
}

const UnsavedChangesPromptRoot = React.forwardRef<
  HTMLDivElement,
  UnsavedChangesPromptRootProps
>(function UnsavedChangesPromptRoot(
  {
    amountOfUnsavedChanges,
    className,
    ...otherProps
  }: UnsavedChangesPromptRootProps,
  ref
) {
  return (
    <div
      className={SubframeUtils.twClassNames(
        "flex items-center justify-between rounded-xl border border-solid border-[#232830] bg-[#0b0d10] px-4 py-3 shadow-[0px_12px_32px_1px_#00000080] gap-4",
        className
      )}
      ref={ref}
      {...otherProps}
    >
      <div className="flex items-center justify-between">
        {amountOfUnsavedChanges ? (
          <span className="font-['Inter'] text-[13px] font-[400] leading-[20px] text-[#7a828e]">
            {amountOfUnsavedChanges}
          </span>
        ) : null}
        <span className="font-['Inter'] text-[13px] font-[400] leading-[20px] text-[#7a828e]">
           unsaved changes
        </span>
      </div>
      <PrimaryButton
        tooltip="When you hover over this button, this text appears!"
        icon={<RoundSave />}
        text="Save"
      />
      <PrimaryButton
        tooltip="When you hover over this button, this text appears!"
        icon={<RoundDelete />}
        text="Discard"
        color="gray"
      />
    </div>
  );
});

export const UnsavedChangesPrompt = UnsavedChangesPromptRoot;
