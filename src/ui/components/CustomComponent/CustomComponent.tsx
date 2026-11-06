"use client";
/*
 * Documentation:
 * Custom Component — https://app.subframe.com/8707573e90c5/library?component=Custom+Component_a629ca13-3cd5-41f3-893e-69d14872e72c
 */

import React from "react";
import * as SubframeUtils from "../../utils";

export interface CustomComponentRootProps
  extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

const CustomComponentRoot = React.forwardRef<
  HTMLDivElement,
  CustomComponentRootProps
>(function CustomComponentRoot(
  { className, ...otherProps }: CustomComponentRootProps,
  ref
) {
  return (
    <div
      className={SubframeUtils.twClassNames(
        "flex flex-col items-start gap-2",
        className
      )}
      ref={ref}
      {...otherProps}
    />
  );
});

export const CustomComponent = CustomComponentRoot;
