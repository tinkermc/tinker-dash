"use client";
/*
 * Documentation:
 * PlayerProfileHeader — https://app.subframe.com/8707573e90c5/library?component=PlayerProfileHeader_158d6420-b9b5-4653-a8dc-b189a59deaae
 */

import React from "react";
import Hammer from "../../icons/Hammer";
import RoundHourglassEmpty from "../../icons/RoundHourglassEmpty";
import RoundStarFilled from "../../icons/RoundStarFilled";
import * as SubframeUtils from "../../utils";

export interface PlayerProfileHeaderRootProps
  extends React.HTMLAttributes<HTMLDivElement> {
  image?: string;
  username?: React.ReactNode;
  uuid?: React.ReactNode;
  isOperator?: boolean;
  status?: "online" | "afk" | "offline" | "timed-out" | "banned";
  className?: string;
}

const PlayerProfileHeaderRoot = React.forwardRef<
  HTMLDivElement,
  PlayerProfileHeaderRootProps
>(function PlayerProfileHeaderRoot(
  {
    image,
    username,
    uuid,
    isOperator = false,
    status = "online",
    className,
    ...otherProps
  }: PlayerProfileHeaderRootProps,
  ref
) {
  return (
    <div
      className={SubframeUtils.twClassNames(
        "group/158d6420 flex w-full items-center gap-5",
        className
      )}
      ref={ref}
      {...otherProps}
    >
      <div className="flex h-[97px] w-[97px] flex-none items-center justify-center overflow-hidden rounded-xl border border-solid border-[#2a3038] bg-[#ffffff] relative hover:border-[#4b5563]">
        {image ? (
          <img
            className="h-[100px] w-[100px] flex-none rounded-[6px] object-contain"
            src={image}
          />
        ) : null}
      </div>
      <div className="flex grow shrink-0 basis-0 flex-col items-start gap-1.5">
        {username ? (
          <span className="font-['Inter'] text-[24px] font-[700] leading-[32px] text-[#ffffff]">
            {username}
          </span>
        ) : null}
        {uuid ? (
          <span className="font-['Inter'] text-[12px] font-[400] leading-[16px] text-[#7a828e]">
            {uuid}
          </span>
        ) : null}
        <div className="flex items-center gap-2 pt-1">
          <div
            className={SubframeUtils.twClassNames(
              "flex items-center gap-1.5 rounded-[9999px] border border-solid border-[#22c55e80] bg-[#22c55e21] px-2.5",
              {
                "gap-[3px] border border-solid border-[#ef444480] bg-[#ef444421]":
                  status === "banned",
                "gap-[3px] border border-solid border-[#ff7b0080] bg-[#ff7b0021]":
                  status === "timed-out",
                "border border-solid border-[#aeb4bd80] bg-[#aeb4bd21]":
                  status === "offline",
                "border border-solid border-[#f7b90080] bg-[#f7b90021]":
                  status === "afk",
              }
            )}
          >
            <div
              className={SubframeUtils.twClassNames(
                "flex h-1.5 w-1.5 flex-none items-start rounded-[9999px] bg-[#22c55e]",
                {
                  "bg-[#ef4444]": status === "banned",
                  "bg-[#ff7b00]": status === "timed-out",
                  "bg-[#aeb4bd]": status === "offline",
                  "bg-[#f7b900]": status === "afk",
                }
              )}
            />
            {status === "timed-out" ? (
              <RoundHourglassEmpty className="inline-flex font-['Inter'] text-[16px] font-[400] leading-[20px] text-[#ff7b00]" />
            ) : status === "banned" ? (
              <Hammer className="inline-flex font-['Inter'] text-[16px] font-[400] leading-[20px] text-[#ef4444]" />
            ) : null}
            <span
              className={SubframeUtils.twClassNames(
                "font-['Inter'] text-[12px] font-[500] leading-[20px] text-[#86efac]",
                {
                  "text-[#ef4444]": status === "banned",
                  "text-[#ff7b00]": status === "timed-out",
                  "text-[#aeb4bd]": status === "offline",
                  "text-[#f7b900]": status === "afk",
                }
              )}
            >
              {status === "banned"
                ? "Banned"
                : status === "timed-out"
                ? "Timed-Out"
                : status === "offline"
                ? "Offline"
                : status === "afk"
                ? "AFK"
                : "Online"}
            </span>
          </div>
          <div
            className={SubframeUtils.twClassNames(
              "hidden items-center gap-1 rounded-[9999px] border border-solid border-[#4b5563] bg-[#232830] pl-1.5 pr-2.5",
              { flex: isOperator }
            )}
          >
            <RoundStarFilled className="font-['Inter'] text-[13px] font-[400] leading-[20px] text-[#e5e7eb]" />
            <span className="font-['Inter'] text-[12px] font-[600] leading-[20px] text-[#e5e7eb]">
              OP
            </span>
          </div>
        </div>
      </div>
    </div>
  );
});

export const PlayerProfileHeader = PlayerProfileHeaderRoot;
