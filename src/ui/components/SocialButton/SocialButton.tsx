"use client";
/*
 * Documentation:
 * SocialButton — https://app.subframe.com/8707573e90c5/library?component=SocialButton_cf8998d8-839b-444d-ba90-b8860c716e72
 */

import React from "react";
import * as SubframeUtils from "../../utils";

export interface SocialButtonRootProps
  extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "you-tube" | "instagram" | "tik-tok" | "git-hub" | "discord";
  className?: string;
}

const SocialButtonRoot = React.forwardRef<
  HTMLDivElement,
  SocialButtonRootProps
>(function SocialButtonRoot(
  { variant = "you-tube", className, ...otherProps }: SocialButtonRootProps,
  ref
) {
  return (
    <div
      className={SubframeUtils.twClassNames(
        "group/cf8998d8 flex w-[124px] items-center justify-center gap-1 rounded-[10px] border border-solid border-[#232830] bg-[#0b0d10] px-3 py-1.5 shadow-[0px_0px_32px_0px_#ff000040]",
        {
          "shadow-[0px_0px_32px_0px_#5865f280]": variant === "discord",
          "shadow-[0px_0px_32px_0px_#ffffff40]": variant === "git-hub",
          "shadow-[0px_16px_32px_0px_#fe2c5540,0px_0px_32px_0px_#25f4ee40]":
            variant === "tik-tok",
          "shadow-[0px_16px_32px_0px_#fe105d40,0px_0px_32px_0px_#9b09f440]":
            variant === "instagram",
        },
        className
      )}
      ref={ref}
      {...otherProps}
    >
      <img
        className="h-6 w-6 flex-none object-contain"
        src={
          variant === "discord"
            ? "https://res.cloudinary.com/subframe/image/upload/v1794670290/uploads/47820/fifnus7zvcc1j8ulunk9.png"
            : variant === "git-hub"
            ? "https://res.cloudinary.com/subframe/image/upload/v1794670366/uploads/47820/yt9aqikmyhcxgmjjvltd.png"
            : variant === "tik-tok"
            ? "https://res.cloudinary.com/subframe/image/upload/v1794670404/uploads/47820/ikg22e5svjnm1wbrsj2r.png"
            : variant === "instagram"
            ? "https://res.cloudinary.com/subframe/image/upload/v1794670516/uploads/47820/rr48gajsdjuea3ydvvjt.png"
            : "https://res.cloudinary.com/subframe/image/upload/v1793747849/uploads/47820/wyegcjtgl5tggrqumtmi.png"
        }
      />
      <span className="font-['Inter'] text-[16px] font-[600] leading-[24px] text-[#a3a3a3]">
        {variant === "discord"
          ? "Discord"
          : variant === "git-hub"
          ? "GitHub"
          : variant === "tik-tok"
          ? "TikTok"
          : variant === "instagram"
          ? "Instagram"
          : "YouTube"}
      </span>
    </div>
  );
});

export const SocialButton = SocialButtonRoot;
