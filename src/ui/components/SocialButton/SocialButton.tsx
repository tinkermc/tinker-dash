"use client";
/*
 * Documentation:
 * SocialButton — https://app.subframe.com/8707573e90c5/library?component=SocialButton_cf8998d8-839b-444d-ba90-b8860c716e72
 */

import React from "react";
import * as SubframeUtils from "../../utils";

export interface SocialButtonRootProps
  extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "you-tube" | "instagram" | "tik-tok" | "git-hub";
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
        "group/cf8998d8 flex items-center gap-2.5 rounded-[10px] border border-solid border-[#232830] bg-[#0b0d10] px-3 py-1.5 shadow-[0px_0px_32px_0px_#ff000080]",
        className
      )}
      ref={ref}
      {...otherProps}
    >
      <img
        className="h-6 w-6 flex-none object-contain"
        src="https://res.cloudinary.com/subframe/image/upload/v1793747849/uploads/47820/wyegcjtgl5tggrqumtmi.png"
      />
      <span className="font-['Inter'] text-[16px] font-[600] leading-[24px] text-[#a3a3a3]">
        {variant === "git-hub"
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
