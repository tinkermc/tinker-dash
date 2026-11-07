"use client";
/*
 * Documentation:
 * Loader — https://app.subframe.com/8707573e90c5/library?component=Loader_d7096a1e-060f-402f-9118-607b034e3686
 */

import React from "react";
import * as SubframeCore from "@subframe/core";
import * as SubframeUtils from "../../utils";

export interface LoaderRootProps
  extends React.ComponentProps<typeof SubframeCore.Loader> {
  className?: string;
}

const LoaderRoot = React.forwardRef<
  React.ElementRef<typeof SubframeCore.Loader>,
  LoaderRootProps
>(function LoaderRoot({ className, ...otherProps }: LoaderRootProps, ref) {
  return (
    <SubframeCore.Loader
      className={SubframeUtils.twClassNames(
        "font-['Inter'] text-[14px] font-[400] leading-[20px] text-[#171717]",
        className
      )}
      ref={ref}
      {...otherProps}
    />
  );
});

export const Loader = LoaderRoot;
