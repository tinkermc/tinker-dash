"use client";
/*
 * Documentation:
 * PlayerStatusCard — https://app.subframe.com/8707573e90c5/library?component=PlayerStatusCard_bf58306d-1a48-47da-9f09-a1e9715cad3a
 */

import React from "react";
import Hammer from "../../icons/Hammer";
import RoundHourglassEmpty from "../../icons/RoundHourglassEmpty";
import RoundHourglassTop from "../../icons/RoundHourglassTop";
import RoundStarFilled from "../../icons/RoundStarFilled";
import * as SubframeUtils from "../../utils";

export interface PlayerStatusCardRootProps
  extends React.HTMLAttributes<HTMLDivElement> {
  username?: React.ReactNode;
  pfp?: string;
  status?: "online" | "afk" | "offline" | "timed-out" | "banned";
  timeValue?: React.ReactNode;
  reason?: React.ReactNode;
  isOperator?: boolean;
  className?: string;
}

const PlayerStatusCardRoot = React.forwardRef<
  HTMLDivElement,
  PlayerStatusCardRootProps
>(function PlayerStatusCardRoot(
  {
    username,
    pfp,
    status = "online",
    timeValue,
    reason,
    isOperator = false,
    className,
    ...otherProps
  }: PlayerStatusCardRootProps,
  ref
) {
  return (
    <div
      className={SubframeUtils.twClassNames(
        "group/bf58306d flex w-full items-center gap-3 rounded-[8px] border border-solid border-[#22c55e80] bg-[#1a1e23] px-3 py-2",
        {
          "border border-solid border-[#ef444480]": status === "banned",
          "border border-solid border-[#ff7b0080]": status === "timed-out",
          "border-none": status === "offline",
          "border border-solid border-[#f7b90080]": status === "afk",
        },
        className
      )}
      ref={ref}
      {...otherProps}
    >
      {pfp ? (
        <img
          className="h-8 w-8 flex-none rounded-[6px] object-contain"
          src={pfp}
        />
      ) : null}
      <div className="flex grow shrink-0 basis-0 flex-col items-start">
        {username ? (
          <span className="w-full whitespace-nowrap font-['Inter'] text-[14px] font-[500] leading-[20px] text-[#ffffff] truncate">
            {username}
          </span>
        ) : null}
        <div
          className={SubframeUtils.twClassNames("hidden items-center gap-1.5", {
            flex: status === "banned",
          })}
        >
          <div className="flex h-1.5 w-1.5 flex-none items-start rounded-[9999px] bg-[#ef4444]" />
          <div className="flex items-center gap-1">
            <Hammer className="font-['Inter'] text-[14px] font-[400] leading-[20px] text-[#ef4444]" />
            <div
              className={SubframeUtils.twClassNames("hidden items-center", {
                flex: status === "banned",
              })}
            >
              <span className="font-['Inter'] text-[12px] font-[400] leading-[16px] text-[#ef4444]">
                {status === "banned" ? "Banned " : "Banned Nov 1 · Lag Machine"}
              </span>
              {timeValue ? (
                <span className="font-['Inter'] text-[12px] font-[400] leading-[16px] text-[#ef4444]">
                  {timeValue}
                </span>
              ) : null}
              <span className="font-['Inter'] text-[12px] font-[400] leading-[16px] text-[#ef4444]">
                {status === "banned" ? " · " : "1h 12m"}
              </span>
              {reason ? (
                <span className="font-['Inter'] text-[12px] font-[400] leading-[16px] text-[#ef4444]">
                  {reason}
                </span>
              ) : null}
            </div>
          </div>
        </div>
        <div
          className={SubframeUtils.twClassNames("flex items-center gap-1.5", {
            hidden: status === "banned" || status === "timed-out",
          })}
        >
          <div className="hidden items-center gap-1.5">
            <div className="flex h-1.5 w-1.5 flex-none items-start rounded-[9999px] bg-[#f7b900]" />
            <div className="hidden items-center">
              <span className="font-['Inter'] text-[12px] font-[400] leading-[16px] text-[#f7b900]">
                AFK ·{" "}
              </span>
              <span className="font-['Inter'] text-[12px] font-[400] leading-[16px] text-[#f7b900]">
                AFK · 2h 05m
              </span>
            </div>
          </div>
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
          <div className="flex items-center">
            <span
              className={SubframeUtils.twClassNames(
                "font-['Inter'] text-[12px] font-[400] leading-[16px] text-[#86efac]",
                {
                  "text-[#ef4444]": status === "banned",
                  "text-[#ff7b00]": status === "timed-out",
                  "text-[#aeb4bd]": status === "offline",
                  "text-[#f7b900]": status === "afk",
                }
              )}
            >
              {status === "offline"
                ? "Offline · "
                : status === "afk"
                ? "AFK · "
                : "Online · "}
            </span>
            {timeValue ? (
              <span
                className={SubframeUtils.twClassNames(
                  "font-['Inter'] text-[12px] font-[400] leading-[16px] text-[#86efac]",
                  {
                    "text-[#ef4444]": status === "banned",
                    "text-[#ff7b00]": status === "timed-out",
                    "text-[#aeb4bd]": status === "offline",
                    "text-[#f7b900]": status === "afk",
                  }
                )}
              >
                {timeValue}
              </span>
            ) : null}
          </div>
        </div>
        <div
          className={SubframeUtils.twClassNames("hidden items-center gap-1.5", {
            flex: status === "timed-out",
          })}
        >
          <div className="flex h-1.5 w-1.5 flex-none items-start rounded-[9999px] bg-[#ff7b00]" />
          <div className="flex items-center">
            {status === "timed-out" ? (
              <RoundHourglassTop className="font-['Inter'] text-[14px] font-[400] leading-[20px] text-[#ff7b00]" />
            ) : (
              <RoundHourglassEmpty className="font-['Inter'] text-[14px] font-[400] leading-[20px] text-[#ff7b00]" />
            )}
            <div
              className={SubframeUtils.twClassNames("hidden items-center", {
                flex: status === "timed-out",
              })}
            >
              <span className="font-['Inter'] text-[12px] font-[400] leading-[16px] text-[#ff7b00]">
                {status === "timed-out"
                  ? "Timed-Out · "
                  : "Timed-Out · Profanity · 1y remaining"}
              </span>
              {reason ? (
                <span className="font-['Inter'] text-[12px] font-[400] leading-[16px] text-[#ff7b00]">
                  {reason}
                </span>
              ) : null}
              <span className="font-['Inter'] text-[12px] font-[400] leading-[16px] text-[#ff7b00]">
                {status === "timed-out" ? " · " : "Profanity"}
              </span>
              {timeValue ? (
                <span className="font-['Inter'] text-[12px] font-[400] leading-[16px] text-[#ff7b00]">
                  {timeValue}
                </span>
              ) : null}
            </div>
          </div>
        </div>
      </div>
      <div
        className={SubframeUtils.twClassNames(
          "hidden items-center gap-0.5 rounded-[9999px] border border-solid border-[#4b5563] bg-[#232830] pl-1 pr-2",
          { flex: isOperator }
        )}
      >
        <RoundStarFilled className="font-['Inter'] text-[12px] font-[400] leading-[18px] text-[#e5e7eb]" />
        <span className="font-['Inter'] text-[11px] font-[600] leading-[18px] text-[#e5e7eb]">
          OP
        </span>
      </div>
    </div>
  );
});

export const PlayerStatusCard = PlayerStatusCardRoot;
