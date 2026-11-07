"use client";
/*
 * Documentation:
 * Tooltip — https://app.subframe.com/8707573e90c5/library?component=Tooltip_9afea38b-1fa4-442b-9a45-077e8fe5ce38
 */

import React from "react";
import * as SubframeUtils from "../../utils";

export interface TooltipRootProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  className?: string;
}

const TooltipRoot = React.forwardRef<HTMLDivElement, TooltipRootProps>(
  function TooltipRoot(
    { children, className, ...otherProps }: TooltipRootProps,
    ref
  ) {
    return children ? (
      <div
        className={SubframeUtils.twClassNames(
          "flex flex-col items-start gap-2 rounded-[4px] bg-[#171717] px-2 py-1.5 shadow-[0px_12px_32px_-4px_#00000014,0px_4px_8px_-2px_#00000014]",
          className
        )}
        ref={ref}
        {...otherProps}
      >
        {children}
      </div>
    ) : null;
  }
);

export const Tooltip = TooltipRoot;
