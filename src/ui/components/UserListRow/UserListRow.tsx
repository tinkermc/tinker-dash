"use client";
/*
 * Documentation:
 * UserListRow — https://app.subframe.com/8707573e90c5/library?component=UserListRow_a50ba24a-68b9-402d-8bc4-b9f4ed1841d8
 */

import React from "react";
import * as SubframeUtils from "../../utils";

export interface UserListRowRootProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "role"> {
  pfp?: string;
  username?: React.ReactNode;
  status?: React.ReactNode;
  actions?: React.ReactNode;
  variant?: "connected" | "offline";
  offlineTimestamp?: React.ReactNode;
  hideRole?: boolean;
  connectedText?: React.ReactNode;
  role?: React.ReactNode;
  className?: string;
}

const UserListRowRoot = React.forwardRef<HTMLDivElement, UserListRowRootProps>(
  function UserListRowRoot(
    {
      pfp,
      username,
      status,
      actions,
      variant = "connected",
      offlineTimestamp,
      hideRole = false,
      connectedText,
      role,
      className,
      ...otherProps
    }: UserListRowRootProps,
    ref
  ) {
    return (
      <div
        className={SubframeUtils.twClassNames(
          "group/a50ba24a flex w-full items-center gap-3 border-b border-solid border-[#1f242b] px-4 py-3 hover:bg-[#111418]",
          className
        )}
        ref={ref}
        {...otherProps}
      >
        <div className="flex grow shrink-0 basis-0 items-center gap-3">
          {pfp ? (
            <img
              className="h-8 w-8 flex-none rounded-[6px] object-cover"
              src={pfp}
            />
          ) : null}
          {username ? (
            <span className="whitespace-nowrap font-['Inter'] text-[14px] font-[500] leading-[20px] text-[#ffffff] truncate">
              {username}
            </span>
          ) : null}
          {role ? <div className="flex items-center gap-3">{role}</div> : null}
          <div className="flex min-w-[0px] grow shrink-0 basis-0 items-center gap-3" />
        </div>
        <div
          className={SubframeUtils.twClassNames(
            "flex w-24 flex-none items-center gap-1.5",
            { "w-auto": variant === "offline" }
          )}
        >
          <div
            className={SubframeUtils.twClassNames(
              "flex h-2 w-2 flex-none items-start rounded-[9999px] bg-[#22c55e]",
              { "bg-[#c4c9d1]": variant === "offline" }
            )}
          />
          <div
            className={SubframeUtils.twClassNames("flex items-center gap-1.5", {
              "gap-0": variant === "offline",
            })}
          >
            {connectedText ? (
              <span
                className={SubframeUtils.twClassNames(
                  "font-['Inter'] text-[13px] font-[500] leading-[18px] text-[#86efac]",
                  { "hidden text-[#c4c9d1]": variant === "offline" }
                )}
              >
                {connectedText}
              </span>
            ) : null}
            <span
              className={SubframeUtils.twClassNames(
                "hidden font-['Inter'] text-[13px] font-[500] leading-[18px] text-[#c4c9d1]",
                { inline: variant === "offline" }
              )}
            >
              {variant === "offline" ? "Last " : "Connected"}
            </span>
            {connectedText ? (
              <span
                className={SubframeUtils.twClassNames(
                  "hidden font-['Inter'] text-[13px] font-[500] leading-[18px] text-[#c4c9d1]",
                  { inline: variant === "offline" }
                )}
              >
                {connectedText}
              </span>
            ) : null}
            <span
              className={SubframeUtils.twClassNames(
                "hidden font-['Inter'] text-[13px] font-[500] leading-[18px] text-[#c4c9d1]",
                { inline: variant === "offline" }
              )}
            >
              {variant === "offline" ? " " : "Connected"}
            </span>
            {offlineTimestamp ? (
              <span
                className={SubframeUtils.twClassNames(
                  "hidden font-['Inter'] text-[13px] font-[500] leading-[18px] text-[#c4c9d1]",
                  { inline: variant === "offline" }
                )}
              >
                {offlineTimestamp}
              </span>
            ) : null}
          </div>
        </div>
        <div className="flex w-16 flex-none items-center justify-end gap-1">
          {actions ? (
            <div className="flex items-center justify-end gap-1">{actions}</div>
          ) : null}
        </div>
      </div>
    );
  }
);

export const UserListRow = UserListRowRoot;
