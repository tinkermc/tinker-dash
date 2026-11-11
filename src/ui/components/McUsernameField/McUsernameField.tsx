"use client";
/*
 * Documentation:
 * MCUsernameField — https://app.subframe.com/8707573e90c5/library?component=MCUsernameField_c56319da-bfe9-48f1-b4eb-52bc75b80c03
 */

import React from "react";
import Modrinth from "../../icons/Modrinth";
import TextAsterisk16Filled from "../../icons/TextAsterisk16Filled";
import * as SubframeUtils from "../../utils";

export interface McUsernameFieldRootProps
  extends React.HTMLAttributes<HTMLDivElement> {
  avatarImage?: string;
  input?: React.ReactNode;
  uuidSupport?: boolean;
  required?: boolean;
  className?: string;
}

const McUsernameFieldRoot = React.forwardRef<
  HTMLDivElement,
  McUsernameFieldRootProps
>(function McUsernameFieldRoot(
  {
    avatarImage,
    input,
    uuidSupport = false,
    required = false,
    className,
    ...otherProps
  }: McUsernameFieldRootProps,
  ref
) {
  return (
    <div
      className={SubframeUtils.twClassNames(
        "group/c56319da flex w-full flex-col items-start gap-2",
        className
      )}
      ref={ref}
      {...otherProps}
    >
      <div
        className={SubframeUtils.twClassNames("flex items-center gap-2", {
          "gap-0.5": required,
        })}
      >
        {required ? (
          <TextAsterisk16Filled
            className={SubframeUtils.twClassNames(
              "hidden font-['Inter'] text-[10px] font-[400] leading-[20px] text-[#e15b52]",
              { "inline-flex": required }
            )}
          />
        ) : (
          <Modrinth
            className={SubframeUtils.twClassNames(
              "hidden font-['Inter'] text-[10px] font-[400] leading-[20px] text-[#e15b52]",
              { "inline-flex": required }
            )}
          />
        )}
        <div className="flex items-center gap-1">
          <span className="font-['Inter'] text-[14px] font-[500] leading-[20px] text-[#c4c9d1]">
            {uuidSupport ? "Minecraft user" : "Minecraft username"}
          </span>
          <span
            className={SubframeUtils.twClassNames(
              "font-['Inter'] text-[12px] font-[400] leading-[20px] text-[#7a828e]",
              { hidden: required }
            )}
          >
            (optional)
          </span>
        </div>
      </div>
      <div className="flex w-full items-center gap-2">
        <div className="flex h-10 w-10 flex-none items-center justify-center rounded-[8px] border border-solid border-[#2a3038] bg-[#1a1e23]">
          {avatarImage ? (
            <img
              className="h-7 w-7 flex-none rounded-[4px] object-cover"
              src={avatarImage}
            />
          ) : null}
        </div>
        <div className="flex grow shrink-0 basis-0 items-center gap-2">
          {input ? (
            <div className="flex grow shrink-0 basis-0 items-center gap-2">
              {input}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
});

export const McUsernameField = McUsernameFieldRoot;
