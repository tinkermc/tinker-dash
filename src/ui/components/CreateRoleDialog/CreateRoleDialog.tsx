"use client";
/*
 * Documentation:
 * CloseButtonContainer — https://app.subframe.com/8707573e90c5/library?component=CloseButtonContainer_d67db6cb-2d77-4f03-8a08-c20a662b8c3f
 * CreateRoleDialog — https://app.subframe.com/8707573e90c5/library?component=CreateRoleDialog_5d34ec04-cfc8-4276-8336-bd7f54d4ef0b
 */

import React from "react";
import OutlineCancel from "../../icons/OutlineCancel";
import RoundNewLabel from "../../icons/RoundNewLabel";
import * as SubframeUtils from "../../utils";
import { CloseButtonContainer } from "../CloseButtonContainer";

export interface CreateRoleDialogRootProps
  extends React.HTMLAttributes<HTMLDivElement> {
  roleNameInput?: React.ReactNode;
  badgeColorPicker?: React.ReactNode;
  preview?: React.ReactNode;
  presets?: React.ReactNode;
  permissionsLabel?: React.ReactNode;
  selectionActions?: React.ReactNode;
  permissionGroups?: React.ReactNode;
  actions?: React.ReactNode;
  className?: string;
}

const CreateRoleDialogRoot = React.forwardRef<
  HTMLDivElement,
  CreateRoleDialogRootProps
>(function CreateRoleDialogRoot(
  {
    roleNameInput,
    badgeColorPicker,
    preview,
    presets,
    permissionsLabel,
    selectionActions,
    permissionGroups,
    actions,
    className,
    ...otherProps
  }: CreateRoleDialogRootProps,
  ref
) {
  return (
    <div
      className={SubframeUtils.twClassNames(
        "flex w-[720px] flex-col items-start rounded-2xl border border-solid border-[#1f242b] bg-[#111418] shadow-[0px_24px_64px_-12px_#000000] max-w-full relative z-50",
        className
      )}
      ref={ref}
      {...otherProps}
    >
      <div className="flex w-full items-center border-b border-solid border-[#1f242b] px-6 py-4 gap-4">
        <div className="flex h-8 w-8 flex-none items-center justify-center rounded-[8px] bg-[#123321]">
          <RoundNewLabel className="font-['Inter'] text-[18px] font-[400] leading-[20px] text-[#22c55e]" />
        </div>
        <div className="flex grow shrink-0 basis-0 items-center justify-between">
          <div className="flex grow shrink-0 basis-0 flex-col items-start gap-0.5">
            <h2 className="w-full font-['Inter'] text-[20px] font-[700] leading-[28px] text-[#ffffff]">
              Create role
            </h2>
            <span className="w-full font-['Inter'] text-[13px] font-[400] leading-[18px] text-[#aeb4bd]">
              Choose what users with this role can do on your server.
            </span>
          </div>
          <CloseButtonContainer
            closeButton={
              <div className="flex items-center justify-between">
                <div className="flex h-8 w-8 flex-none items-center justify-center rounded-[8px] border border-solid border-[#2a3038] bg-[#0b0d10] hover:border-[#3a414b]">
                  <OutlineCancel className="font-['Inter'] text-[18px] font-[400] leading-[20px] text-[#aeb4bd]" />
                </div>
              </div>
            }
          />
        </div>
      </div>
      <div className="flex w-full flex-col items-start gap-5 px-6 py-5">
        <div className="flex w-full items-end gap-6">
          <div className="flex grow shrink-0 basis-0 flex-col items-start gap-2">
            <span className="font-['Inter'] text-[14px] font-[500] leading-[20px] text-[#c4c9d1]">
              Role name
            </span>
            {roleNameInput ? (
              <div className="flex w-full flex-col items-start gap-2">
                {roleNameInput}
              </div>
            ) : null}
          </div>
          <div className="flex flex-col items-start gap-2">
            <span className="font-['Inter'] text-[14px] font-[500] leading-[20px] text-[#c4c9d1]">
              Badge color
            </span>
            {badgeColorPicker ? (
              <div className="flex flex-col items-start gap-2">
                {badgeColorPicker}
              </div>
            ) : null}
          </div>
          <div className="flex flex-col items-start gap-2">
            <span className="font-['Inter'] text-[14px] font-[500] leading-[20px] text-[#c4c9d1]">
              Preview
            </span>
            {preview ? (
              <div className="flex flex-col items-start gap-2">{preview}</div>
            ) : null}
          </div>
        </div>
        <div className="flex h-px w-full flex-none items-start bg-[#232830]" />
        <div className="flex w-full items-start gap-6">
          <div className="flex w-56 flex-none flex-col items-start gap-2">
            <span className="font-['Inter'] text-[14px] font-[500] leading-[20px] text-[#c4c9d1]">
              Start from a preset
            </span>
            {presets ? (
              <div className="flex w-full flex-col items-start gap-2">
                {presets}
              </div>
            ) : null}
            <span className="font-['Inter'] text-[12px] font-[400] leading-[16px] text-[#7a828e]">
              Picking a preset fills in permissions. You can still adjust them.
            </span>
          </div>
          <div className="flex grow shrink-0 basis-0 flex-col items-start gap-2">
            <div className="flex w-full items-center gap-2">
              {permissionsLabel ? (
                <span className="font-['Inter'] text-[14px] font-[500] leading-[20px] text-[#c4c9d1]">
                  {permissionsLabel}
                </span>
              ) : null}
              <div className="flex items-center rounded-[9999px] border border-solid border-[#22c55e] bg-[#0f2418] px-2 py-0.5">
                <span className="font-['Inter'] text-[11px] font-[600] leading-[14px] text-[#86efac]">
                  12 of 26 allowed
                </span>
              </div>
              {selectionActions ? (
                <div className="flex grow shrink-0 basis-0 items-center gap-2">
                  {selectionActions}
                </div>
              ) : null}
            </div>
            <div className="flex h-[380px] w-full flex-none flex-col items-start gap-3 rounded-[8px] border border-solid border-[#1f242b] bg-[#0d1013] px-3 py-3 overflow-auto">
              {permissionGroups ? (
                <div className="flex w-full flex-col items-start gap-3">
                  {permissionGroups}
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full items-center justify-end gap-2 border-t border-solid border-[#1f242b] px-6 py-4">
        {actions ? (
          <div className="flex items-center justify-end gap-2">{actions}</div>
        ) : null}
      </div>
    </div>
  );
});

export const CreateRoleDialog = CreateRoleDialogRoot;
