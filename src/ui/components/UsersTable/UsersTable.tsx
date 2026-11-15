"use client";
/*
 * Documentation:
 * IconButton — https://app.subframe.com/8707573e90c5/library?component=IconButton_9c9654bc-cc90-459f-a6b2-b30c7daa77dd
 * UserListRow — https://app.subframe.com/8707573e90c5/library?component=UserListRow_a50ba24a-68b9-402d-8bc4-b9f4ed1841d8
 * UsersTable — https://app.subframe.com/8707573e90c5/library?component=UsersTable_9041132e-4583-4312-960e-1fa161f4e67c
 */

import React from "react";
import RoundDelete from "../../icons/RoundDelete";
import RoundModeEditOutline from "../../icons/RoundModeEditOutline";
import RoundStarFilled from "../../icons/RoundStarFilled";
import * as SubframeUtils from "../../utils";
import { IconButton } from "../IconButton";
import { UserListRow } from "../UserListRow";

export interface UsersTableRootProps
  extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

const UsersTableRoot = React.forwardRef<HTMLDivElement, UsersTableRootProps>(
  function UsersTableRoot(
    { className, ...otherProps }: UsersTableRootProps,
    ref
  ) {
    return (
      <div
        className={SubframeUtils.twClassNames(
          "flex w-full flex-col items-start overflow-hidden rounded-xl border border-solid border-[#1f242b]",
          className
        )}
        ref={ref}
        {...otherProps}
      >
        <div className="flex w-full items-center gap-3 border-b border-solid border-[#1f242b] bg-[#111418] px-4 py-2">
          <span className="grow shrink-0 basis-0 font-['Inter'] text-[12px] font-[600] leading-[16px] text-[#9ca3af]">
            User
          </span>
          <span className="w-28 flex-none font-['Inter'] text-[12px] font-[600] leading-[16px] text-[#9ca3af]">
            Role
          </span>
          <span className="w-24 flex-none font-['Inter'] text-[12px] font-[600] leading-[16px] text-[#9ca3af]">
            Last active
          </span>
          <span className="w-16 flex-none font-['Inter'] text-[12px] font-[600] leading-[16px] text-[#9ca3af] text-right">
            Actions
          </span>
        </div>
        <UserListRow
          className="h-auto w-full flex-none"
          pfp="https://api.mcheads.org/head/CanBeGold/96"
          username="username"
          status="Connected"
          actions={
            <>
              <IconButton
                tooltip="When you hover over this button, this text appears!"
                icon={<RoundModeEditOutline />}
                color="gray"
              />
              <IconButton
                tooltip="When you hover over this button, this text appears!"
                icon={<RoundDelete />}
                color="gray-dangerous"
              />
            </>
          }
          offlineTimestamp="3 days ago"
          connectedText="Connected"
          role={
            <div className="flex items-start">
              <div className="flex items-center gap-0.5 rounded-[9999px] border border-solid border-[#4b5563] bg-[#232830] pl-1 pr-2">
                <RoundStarFilled className="font-['Inter'] text-[12px] font-[400] leading-[18px] text-[#ffffff]" />
                <span className="font-['Inter'] text-[11px] font-[600] leading-[18px] text-[#ffffff]">
                  Role
                </span>
              </div>
            </div>
          }
        />
      </div>
    );
  }
);

export const UsersTable = UsersTableRoot;
