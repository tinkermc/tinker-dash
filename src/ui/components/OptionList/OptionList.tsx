"use client";
/*
 * Documentation:
 * OptionList — https://app.subframe.com/8707573e90c5/library?component=OptionList_5b1c9841-5531-4370-aa61-8ab827b371b2
 */

import React from "react";
import * as SubframeCore from "@subframe/core";
import RoundMoreHoriz from "../../icons/RoundMoreHoriz";
import * as SubframeUtils from "../../utils";

export interface ItemProps extends React.HTMLAttributes<HTMLDivElement> {
  icon?: React.ReactNode;
  label?: React.ReactNode;
  description?: React.ReactNode;
  selected?: boolean;
  disabled?: boolean;
  className?: string;
}

const Item = React.forwardRef<HTMLDivElement, ItemProps>(function Item(
  {
    icon = <RoundMoreHoriz />,
    label,
    description,
    selected = false,
    disabled = false,
    className,
    ...otherProps
  }: ItemProps,
  ref
) {
  return (
    <div
      className={SubframeUtils.twClassNames(
        "group/16223471 flex w-full cursor-pointer items-center gap-3 border-b border-solid border-[#1f242b] bg-[#12151a] px-4 py-3 group/item -mb-px hover:bg-[#161a20]",
        {
          "opacity-50 hover:bg-[#12151a]": disabled,
          "bg-[#0f2418] hover:bg-[#0f2418]": selected,
        },
        className
      )}
      ref={ref}
      {...otherProps}
    >
      <div
        className={SubframeUtils.twClassNames(
          "flex h-5 w-5 flex-none items-center justify-center rounded-[9999px] border-2 border-solid border-[#3a414b]",
          { "border-2 border-solid border-[#22c55e]": selected }
        )}
      >
        <div
          className={SubframeUtils.twClassNames(
            "hidden h-2 w-2 flex-none items-start rounded-[9999px] bg-[#22c55e]",
            { flex: selected }
          )}
        />
      </div>
      <div className="flex grow shrink-0 basis-0 items-center gap-1">
        {icon ? (
          <SubframeCore.IconWrapper className="font-['Inter'] text-[16px] font-[600] leading-[20px] text-[#ffffff]">
            {icon}
          </SubframeCore.IconWrapper>
        ) : null}
        {label ? (
          <span className="grow shrink-0 basis-0 font-['Inter'] text-[14px] font-[600] leading-[20px] text-[#ffffff]">
            {label}
          </span>
        ) : null}
      </div>
      {description ? (
        <span
          className={SubframeUtils.twClassNames(
            "font-['Inter'] text-[12px] font-[400] leading-[16px] text-[#7a828e]",
            { "text-[#86efac]": selected }
          )}
        >
          {description}
        </span>
      ) : null}
    </div>
  );
});

export interface OptionListRootProps
  extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  className?: string;
}

const OptionListRoot = React.forwardRef<HTMLDivElement, OptionListRootProps>(
  function OptionListRoot(
    { children, className, ...otherProps }: OptionListRootProps,
    ref
  ) {
    return (
      <div
        className={SubframeUtils.twClassNames(
          "flex w-full flex-col items-start overflow-hidden rounded-xl border border-solid border-[#1f242b] bg-[#12151a]",
          className
        )}
        ref={ref}
        {...otherProps}
      >
        {children ? (
          <div className="flex w-full flex-col items-start">{children}</div>
        ) : null}
      </div>
    );
  }
);

export const OptionList = Object.assign(OptionListRoot, {
  Item,
});
