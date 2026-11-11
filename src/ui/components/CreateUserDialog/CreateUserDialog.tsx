"use client";
/*
 * Documentation:
 * CloseButtonContainer — https://app.subframe.com/8707573e90c5/library?component=CloseButtonContainer_d67db6cb-2d77-4f03-8a08-c20a662b8c3f
 * CreateUserDialog — https://app.subframe.com/8707573e90c5/library?component=CreateUserDialog_8556104a-0136-4f56-9423-5e85bf27d779
 * MCUsernameField — https://app.subframe.com/8707573e90c5/library?component=MCUsernameField_c56319da-bfe9-48f1-b4eb-52bc75b80c03
 * PrimaryButton — https://app.subframe.com/8707573e90c5/library?component=PrimaryButton_fd8dbcfe-8313-4878-b3a2-c6c084a47f95
 */

import React from "react";
import OutlineCancel from "../../icons/OutlineCancel";
import RoundAdminPanelSettings from "../../icons/RoundAdminPanelSettings";
import RoundNewLabel from "../../icons/RoundNewLabel";
import RoundNotifications from "../../icons/RoundNotifications";
import RoundPersonAddAlt1 from "../../icons/RoundPersonAddAlt1";
import RoundSearch from "../../icons/RoundSearch";
import * as SubframeUtils from "../../utils";
import { CloseButtonContainer } from "../CloseButtonContainer";
import { McUsernameField } from "../McUsernameField";
import { PrimaryButton } from "../PrimaryButton";

export interface CreateUserDialogRootProps
  extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  onClose?: () => void;
}

const CreateUserDialogRoot = React.forwardRef<
  HTMLDivElement,
  CreateUserDialogRootProps
>(function CreateUserDialogRoot(
  { className, onClose, ...otherProps }: CreateUserDialogRootProps,
  ref
)

{
  const [usernameInput, setUsernameInput] = React.useState("");
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
              <button
                type="button"
                aria-label="Close dialog"
                onClick={onClose}
                className="flex h-8 w-8 flex-none items-center justify-center rounded-[8px] border border-solid border-[#2a3038] bg-[#0b0d10] hover:border-[#3a414b]"
              >
                <OutlineCancel className="font-['Inter'] text-[18px] font-[400] leading-[20px] text-[#aeb4bd]" />
              </button>
            </div>
          }
        />
      </div>
      <div className="flex w-full flex-col items-start gap-4 px-6 py-5">
        <div className="flex w-full flex-col items-start gap-2">
          <span className="font-['Inter'] text-[14px] font-[500] leading-[20px] text-[#c4c9d1]">
            Username
          </span>
          <div className="flex w-full flex-col items-start gap-2">
            <input
              className="h-10 w-full flex-none rounded-[8px] border border-solid border-[#2a3038] bg-[#0b0d10] px-3 font-['Inter'] text-[14px] font-[400] leading-[21px] text-[#ffffff] outline-none placeholder:text-[#7a828e] focus-within:border-[#22c55e]"
              placeholder="e.g. RedstoneRita"
              value={usernameInput}
              onChange={(e) => setUsernameInput(e.target.value)}
              type="text"
            />
          </div>
        </div>
        <McUsernameField
          avatarImage="https://api.mcheads.org/head/TomTomFX/96"
          input={
            <>
              <input
                className="h-10 grow shrink-0 basis-0 rounded-[8px] border border-solid border-[#2a3038] bg-[#0b0d10] px-3 font-['Inter'] text-[14px] font-[400] leading-[21px] text-[#ffffff] outline-none placeholder:text-[#7a828e] focus-within:border-[#22c55e]"
                placeholder="Username only"
                value=""
                type="text"
              />
              <input
                className="hidden h-10 grow shrink-0 basis-0 rounded-[8px] border border-solid border-[#2a3038] bg-[#0b0d10] px-3 font-['Inter'] text-[14px] font-[400] leading-[21px] text-[#ffffff] outline-none placeholder:text-[#7a828e] focus-within:border-[#22c55e]"
                placeholder="Username or UUID"
                value=""
                type="text"
              />
            </>
          }
        />
        <div className="flex w-full items-start gap-3">
          <div className="flex grow shrink-0 basis-0 flex-col items-start gap-2">
            <span className="font-['Inter'] text-[14px] font-[500] leading-[20px] text-[#c4c9d1]">
              Password
            </span>
            <div className="flex w-full flex-col items-start gap-2">
              <input
                className="h-10 w-full flex-none rounded-[8px] border border-solid border-[#2a3038] bg-[#0b0d10] px-3 font-['Inter'] text-[14px] font-[400] leading-[21px] text-[#ffffff] outline-none placeholder:text-[#7a828e] focus-within:border-[#22c55e]"
                placeholder="••••••••"
                value=""
                type="password"
              />
            </div>
          </div>
          <div className="flex grow shrink-0 basis-0 flex-col items-start gap-2">
            <span className="font-['Inter'] text-[14px] font-[500] leading-[20px] text-[#c4c9d1]">
              Confirm password
            </span>
            <div className="flex w-full flex-col items-start gap-2">
              <input
                className="h-10 w-full flex-none rounded-[8px] border border-solid border-[#2a3038] bg-[#0b0d10] px-3 font-['Inter'] text-[14px] font-[400] leading-[21px] text-[#ffffff] outline-none placeholder:text-[#7a828e] focus-within:border-[#22c55e]"
                placeholder="••••••••"
                value=""
                type="password"
              />
            </div>
          </div>
        </div>
        <div className="flex h-px w-full flex-none items-start bg-[#232830]" />
        <div className="flex w-full flex-col items-start gap-2">
          <span className="font-['Inter'] text-[14px] font-[600] leading-[20px] text-[#c4c9d1]">
            Role
          </span>
          <div className="flex w-full flex-col items-start gap-2">
            <div className="flex w-full items-center gap-3 rounded-[10px] border-2 border-solid border-[#2a3038] bg-[#0b0d10] px-3 py-2 hover:border-[#3a414b]">
              <div className="flex h-4 w-4 flex-none items-start rounded-[9999px] border-2 border-solid border-[#4b5563] bg-[#0b0d10]" />
              <div className="flex grow shrink-0 basis-0 flex-col items-start gap-0.5">
                <div className="flex items-center gap-0.5 rounded-[9999px] border border-solid border-[#4b5563] bg-[#232830] pl-1 pr-2">
                  <RoundAdminPanelSettings className="font-['Inter'] text-[12px] font-[400] leading-[18px] text-[#fd9eff]" />
                  <span className="font-['Inter'] text-[11px] font-[600] leading-[18px] text-[#fd9eff]">
                    Admin
                  </span>
                </div>
                <span className="w-full whitespace-nowrap font-['Inter'] text-[13px] font-[400] leading-[18px] text-[#aeb4bd] truncate">
                  Everything except managing owners
                </span>
              </div>
            </div>
            <div className="flex w-full items-center gap-3 rounded-[10px] border-2 border-solid border-[#22c55e] bg-[#123321] px-3 py-2 shadow-[0px_0px_0px_3px_#22c55e33]">
              <div className="flex h-4 w-4 flex-none items-center justify-center rounded-[9999px] border-2 border-solid border-[#22c55e] bg-[#0b0d10]">
                <div className="flex h-2 w-2 flex-none items-start rounded-[9999px] bg-[#22c55e]" />
              </div>
              <div className="flex grow shrink-0 basis-0 flex-col items-start gap-0.5">
                <div className="flex items-center gap-0.5 rounded-[9999px] border border-solid border-[#4b5563] bg-[#232830] pl-1 pr-2">
                  <RoundNotifications className="font-['Inter'] text-[12px] font-[400] leading-[18px] text-[#7438ff]" />
                  <span className="font-['Inter'] text-[11px] font-[600] leading-[18px] text-[#7438ff]">
                    Moderator
                  </span>
                </div>
                <span className="w-full whitespace-nowrap font-['Inter'] text-[13px] font-[400] leading-[18px] text-[#aeb4bd] truncate">
                  Players, console and logs
                </span>
              </div>
            </div>
            <div className="flex w-full items-center gap-3 rounded-[10px] border-2 border-solid border-[#2a3038] bg-[#0b0d10] px-3 py-2 hover:border-[#3a414b]">
              <div className="flex h-4 w-4 flex-none items-start rounded-[9999px] border-2 border-solid border-[#4b5563] bg-[#0b0d10]" />
              <div className="flex grow shrink-0 basis-0 flex-col items-start gap-0.5">
                <div className="flex items-center gap-0.5 rounded-[9999px] border border-solid border-[#4b5563] bg-[#232830] pl-1 pr-2">
                  <RoundSearch className="font-['Inter'] text-[12px] font-[400] leading-[18px] text-[#96a2b0]" />
                  <span className="font-['Inter'] text-[11px] font-[600] leading-[18px] text-[#96a2b0]">
                    Viewer
                  </span>
                </div>
                <span className="w-full whitespace-nowrap font-['Inter'] text-[13px] font-[400] leading-[18px] text-[#aeb4bd] truncate">
                  Read-only access to logs and status
                </span>
              </div>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <PrimaryButton
              tooltip="Directs you to Create Role menu."
              icon={<RoundNewLabel />}
              text="Create custom role"
              color="gray"
            />
          </div>
        </div>
        <div className="flex flex-col items-start gap-4">
          <div className="flex items-center gap-2">
            <div className="flex h-4 w-4 flex-none items-center justify-center rounded-[4px] border border-solid border-[#22c55e] bg-[#22c55e]">
              <svg
                className="font-['Inter'] text-[12px] font-[400] leading-[18px] text-[#ffffff]"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path
                  d="M9.5 16.2 5.3 12a1 1 0 1 0-1.4 1.4l4.9 4.9a1 1 0 0 0 1.4 0l10-10a1 1 0 1 0-1.4-1.4z"
                  fill="currentColor"
                  fillOpacity="1"
                />
              </svg>
            </div>
            <span className="font-['Inter'] text-[14px] font-[400] leading-[20px] text-[#aeb4bd]">
              Add Minecraft username to whitelist
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex h-4 w-4 flex-none items-start rounded-[4px] border border-solid border-[#2a3038] bg-[#0b0d10]" />
            <span className="font-['Inter'] text-[14px] font-[400] leading-[20px] text-[#aeb4bd]">
              Require password change on first login
            </span>
          </div>
        </div>
      </div>
      <div className="flex w-full items-center justify-end gap-2 border-t border-solid border-[#1f242b] px-6 py-4">
        <div className="flex items-center justify-end gap-2">
          <PrimaryButton
            tooltip=""
            icon={<RoundPersonAddAlt1 />}
            text="Create user"
          />
        </div>
        <div className="flex items-center justify-end gap-2">
          <PrimaryButton
            tooltip="All changes will be discarded."
            icon={<OutlineCancel />}
            text="Cancel"
            color="gray"
            onClick={onClose}
          />
        </div>
      </div>
    </div>
  );
});

export const CreateUserDialog = CreateUserDialogRoot;
