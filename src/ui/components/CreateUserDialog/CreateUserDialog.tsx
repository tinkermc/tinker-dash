"use client";
/*
 * Documentation:
 * CloseButtonContainer — https://app.subframe.com/8707573e90c5/library?component=CloseButtonContainer_d67db6cb-2d77-4f03-8a08-c20a662b8c3f
 * CreateUserDialog — https://app.subframe.com/8707573e90c5/library?component=CreateUserDialog_8556104a-0136-4f56-9423-5e85bf27d779
 */

import React from "react";
import OutlineCancel from "../../icons/OutlineCancel";
import RoundPersonAddAlt1 from "../../icons/RoundPersonAddAlt1";
import * as SubframeUtils from "../../utils";
import { CloseButtonContainer } from "../CloseButtonContainer";

export interface CreateUserDialogRootProps
  extends React.HTMLAttributes<HTMLDivElement> {
  usernameInput?: React.ReactNode;
  minecraftHeadImage?: string;
  minecraftUsernameInput?: React.ReactNode;
  passwordInput?: React.ReactNode;
  confirmPasswordInput?: React.ReactNode;
  roleOptions?: React.ReactNode;
  createCustomRoleButton?: React.ReactNode;
  checkboxes?: React.ReactNode;
  createButton?: React.ReactNode;
  cancelButton?: React.ReactNode;
  className?: string;
  onClose?: () => void;
}

const CreateUserDialogRoot = React.forwardRef<
  HTMLDivElement,
  CreateUserDialogRootProps
>(function CreateUserDialogRoot(
  {
    usernameInput,
    minecraftHeadImage,
    minecraftUsernameInput,
    passwordInput,
    confirmPasswordInput,
    roleOptions,
    createCustomRoleButton,
    checkboxes,
    createButton,
    cancelButton,
    className,
    onClose,
    ...otherProps
  }: CreateUserDialogRootProps,
  ref
) {
  return (
    <div
      className={SubframeUtils.twClassNames(
        "flex w-[480px] flex-col items-start rounded-2xl border border-solid border-[#1f242b] bg-[#111418] shadow-[0px_24px_64px_1px_#000000] relative z-50",
        className
      )}
      ref={ref}
      {...otherProps}
    >
      <div className="flex w-full items-center gap-3 border-b border-solid border-[#1f242b] px-6 py-4">
        <div className="flex h-8 w-8 flex-none items-center justify-center rounded-[8px] bg-[#123321]">
          <RoundPersonAddAlt1 className="font-['Inter'] text-[18px] font-[400] leading-[20px] text-[#22c55e]" />
        </div>
        <h2 className="grow shrink-0 basis-0 font-['Inter'] text-[20px] font-[700] leading-[28px] text-[#ffffff]">
          Create user
        </h2>
        <CloseButtonContainer
          closeButton={
            <div className="flex items-center justify-between">
              <div onClick={onClose} className="flex h-8 w-8 flex-none items-center justify-center rounded-[8px] border border-solid border-[#2a3038] bg-[#0b0d10] hover:border-[#3a414b]">
                <OutlineCancel className="font-['Inter'] text-[18px] font-[400] leading-[20px] text-[#aeb4bd]" />
              </div>
            </div>
          }
        />
      </div>
      <div className="flex w-full flex-col items-start gap-4 px-6 py-5">
        <div className="flex w-full flex-col items-start gap-2">
          <span className="font-['Inter'] text-[14px] font-[500] leading-[20px] text-[#c4c9d1]">
            Username
          </span>
          {usernameInput ? (
            <div className="flex w-full flex-col items-start gap-2">
              {usernameInput}
            </div>
          ) : null}
        </div>
        <div className="flex w-full flex-col items-start gap-2">
          <div className="flex items-center gap-1">
            <span className="font-['Inter'] text-[14px] font-[500] leading-[20px] text-[#c4c9d1]">
              Minecraft username
            </span>
            <span className="font-['Inter'] text-[12px] font-[400] leading-[20px] text-[#7a828e]">
              (optional)
            </span>
          </div>
          <div className="flex w-full items-center gap-2">
            <div className="flex h-10 w-10 flex-none items-center justify-center rounded-[8px] border border-solid border-[#2a3038] bg-[#1a1e23]">
              {minecraftHeadImage ? (
                <img
                  className="h-7 w-7 flex-none rounded-[4px] object-cover"
                  src={minecraftHeadImage}
                />
              ) : null}
            </div>
            {minecraftUsernameInput ? (
              <div className="flex grow shrink-0 basis-0 items-center gap-2">
                {minecraftUsernameInput}
              </div>
            ) : null}
          </div>
        </div>
        <div className="flex w-full items-start gap-3">
          <div className="flex grow shrink-0 basis-0   flex-col items-start gap-2">
            <span className="font-['Inter'] text-[14px] font-[500] leading-[20px] text-[#c4c9d1]">
              Password
            </span>
            {passwordInput ? (
              <div className="flex w-full flex-col items-start gap-2">
                {passwordInput}
              </div>
            ) : null}
          </div>
          <div className="flex grow shrink-0 basis-0 flex-col items-start gap-2">
            <span className="font-['Inter'] text-[14px] font-[500] leading-[20px] text-[#c4c9d1]">
              Confirm password
            </span>
            {confirmPasswordInput ? (
              <div className="flex w-full flex-col items-start gap-2">
                {confirmPasswordInput}
              </div>
            ) : null}
          </div>
        </div>
        <div className="flex h-px w-full flex-none items-start bg-[#232830]" />
        <div className="flex w-full flex-col items-start gap-2">
          <span className="font-['Inter'] text-[14px] font-[600] leading-[20px] text-[#c4c9d1]">
            Role
          </span>
          {roleOptions ? (
            <div className="flex w-full flex-col items-start gap-2">
              {roleOptions}
            </div>
          ) : null}
          {createCustomRoleButton ? (
            <div className="flex items-start gap-2">
              {createCustomRoleButton}
            </div>
          ) : null}
        </div>
        {checkboxes ? (
          <div className="flex flex-col items-start gap-4">{checkboxes}</div>
        ) : null}
      </div>
      <div className="flex w-full items-center justify-end gap-2 border-t border-solid border-[#1f242b] px-6 py-4">
        {cancelButton ? (
          <div className="flex items-center justify-end gap-2">
            {cancelButton}
          </div>
        ) : null}
        {createButton ? (
          <div className="flex items-center justify-end gap-2">
            {createButton}
          </div>
        ) : null}
      </div>
    </div>
  );
});

export const CreateUserDialog = CreateUserDialogRoot;
