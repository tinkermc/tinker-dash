"use client";
/*
 * Documentation:
 * CloseButtonContainer — https://app.subframe.com/8707573e90c5/library?component=CloseButtonContainer_d67db6cb-2d77-4f03-8a08-c20a662b8c3f
 */

import React from "react";
import * as SubframeUtils from "../../utils";

export interface CloseButtonContainerRootProps
  extends React.HTMLAttributes<HTMLDivElement> {
  closeButton?: React.ReactNode;
  className?: string;
}

const CloseButtonContainerRoot = React.forwardRef<
  HTMLDivElement,
  CloseButtonContainerRootProps
>(function CloseButtonContainerRoot(
  { closeButton, className, ...otherProps }: CloseButtonContainerRootProps,
  ref
) {
  return closeButton ? (
    <div
      className={SubframeUtils.twClassNames(
        "flex flex-col items-start gap-2",
        className
      )}
      ref={ref}
      {...otherProps}
    >
      {closeButton}
    </div>
  ) : null;
});

export const CloseButtonContainer = CloseButtonContainerRoot;
