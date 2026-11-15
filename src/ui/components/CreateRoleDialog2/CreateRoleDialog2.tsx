"use client";
/*
 * Documentation:
 * CreateRoleDialog 2 — https://app.subframe.com/8707573e90c5/library?component=CreateRoleDialog+2_c6141dd6-70af-4c96-ad56-0c69de562533
 */

import React from "react";
import RoundNewLabel from "../../icons/RoundNewLabel";
import * as SubframeUtils from "../../utils";

export interface CreateRoleDialog2RootProps
  extends React.HTMLAttributes<HTMLDivElement> {
  closeButton?: React.ReactNode;
  roleNameInput?: React.ReactNode;
  badgeColorOptions?: React.ReactNode;
  rolePreview?: React.ReactNode;
  presets?: React.ReactNode;
  permissionsSummary?: React.ReactNode;
  permissionsBulkActions?: React.ReactNode;
  permissionGroups?: React.ReactNode;
  actions?: React.ReactNode;
  className?: string;
}

const CreateRoleDialog2Root = React.forwardRef<
  HTMLDivElement,
  CreateRoleDialog2RootProps
>(function CreateRoleDialog2Root(
  {
    closeButton,
    roleNameInput,
    badgeColorOptions,
    rolePreview,
    presets,
    permissionsSummary,
    permissionsBulkActions,
    permissionGroups,
    actions,
    className,
    ...otherProps
  }: CreateRoleDialog2RootProps,
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
          {closeButton ? (
            <div className="flex items-center justify-between">
              {closeButton}
            </div>
          ) : null}
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
            {badgeColorOptions ? (
              <div className="flex flex-col items-start gap-2">
                {badgeColorOptions}
              </div>
            ) : null}
          </div>
          <div className="flex flex-col items-start gap-2">
            <span className="font-['Inter'] text-[14px] font-[500] leading-[20px] text-[#c4c9d1]">
              Preview
            </span>
            <div className="flex flex-col items-start gap-2">
              <div className="flex h-10 flex-none items-center rounded-[8px] border border-dashed border-[#2a3038] bg-[#0b0d10] px-3">
                {rolePreview ? (
                  <div className="flex items-center">{rolePreview}</div>
                ) : null}
              </div>
            </div>
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
              <span className="font-['Inter'] text-[14px] font-[500] leading-[20px] text-[#c4c9d1]">
                Permissions
              </span>
              <div className="flex items-center rounded-[9999px] border border-solid border-[#22c55e] bg-[#0f2418] px-2 py-0.5">
                {permissionsSummary ? (
                  <span className="font-['Inter'] text-[11px] font-[600] leading-[14px] text-[#86efac]">
                    {permissionsSummary}
                  </span>
                ) : null}
              </div>
              <div className="flex grow shrink-0 basis-0 items-center gap-2">
                {permissionsBulkActions ? (
                  <div className="flex grow shrink-0 basis-0 items-center gap-2">
                    {permissionsBulkActions}
                  </div>
                ) : null}
              </div>
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

export const CreateRoleDialog2 = CreateRoleDialog2Root;
