"use client";
/*
 * Documentation:
 * SelectField — https://app.subframe.com/8707573e90c5/library?component=SelectField_97cc5612-17ea-4083-987c-37d78e943850
 */

import React from "react";
import * as SubframeCore from "@subframe/core";
import * as SubframeUtils from "../../utils";

export interface ItemProps
  extends Omit<React.ComponentProps<typeof SubframeCore.Select.Item>, "value"> {
  value: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
}

const Item = React.forwardRef<HTMLDivElement, ItemProps>(function Item(
  { value, children, className, ...otherProps }: ItemProps,
  ref
) {
  return (
    <SubframeCore.Select.Item
      value={value as string}
      asChild={true}
      {...otherProps}
    >
      <div
        className={SubframeUtils.twClassNames(
          "group/b226881b flex h-9 w-full cursor-pointer items-center gap-2 rounded-[6px] px-3 hover:bg-[#1a1e23] active:bg-[#232830] data-[highlighted]:bg-[#1a1e23]",
          className
        )}
        ref={ref}
      >
        <SelectField.ItemText className="h-auto grow shrink-0 basis-0">
          {children || value}
        </SelectField.ItemText>
        <svg
          className="hidden font-['Inter'] text-[14px] font-[400] leading-[20px] text-[#22c55e] group-data-[state=checked]/b226881b:inline-flex"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
        >
          <path
            d="M20 6 9 17l-5-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeOpacity="1"
          />
        </svg>
      </div>
    </SubframeCore.Select.Item>
  );
});

export interface TriggerValueProps
  extends React.ComponentProps<typeof SubframeCore.Select.Value> {
  placeholder?: React.ReactNode;
  className?: string;
}

const TriggerValue = React.forwardRef<
  React.ElementRef<typeof SubframeCore.Select.Value>,
  TriggerValueProps
>(function TriggerValue(
  { placeholder, className, ...otherProps }: TriggerValueProps,
  ref
) {
  return (
    <SubframeCore.Select.Value
      className={SubframeUtils.twClassNames(
        "w-full whitespace-nowrap font-['Inter'] text-[14px] font-[400] leading-[20px] text-[#ffffff]",
        className
      )}
      ref={ref}
      placeholder={placeholder}
      {...otherProps}
    >
      Value
    </SubframeCore.Select.Value>
  );
});

export interface ContentProps
  extends React.ComponentProps<typeof SubframeCore.Select.Content> {
  children?: React.ReactNode;
  className?: string;
}

const Content = React.forwardRef<HTMLDivElement, ContentProps>(function Content(
  { children, className, ...otherProps }: ContentProps,
  ref
) {
  return children ? (
    <SubframeCore.Select.Content asChild={true} {...otherProps}>
      <div
        className={SubframeUtils.twClassNames(
          "flex w-full flex-col items-start overflow-hidden rounded-[8px] border border-solid border-[#2a3038] bg-[#12151a] px-1 py-1 shadow-[0px_16px_40px_-4px_#000000b3]",
          className
        )}
        ref={ref}
      >
        {children}
      </div>
    </SubframeCore.Select.Content>
  ) : null;
});

export interface TriggerProps
  extends Omit<
    React.ComponentProps<typeof SubframeCore.Select.Trigger>,
    "placeholder"
  > {
  placeholder?: React.ReactNode;
  className?: string;
}

const Trigger = React.forwardRef<HTMLButtonElement, TriggerProps>(
  function Trigger(
    { placeholder, className, ...otherProps }: TriggerProps,
    ref
  ) {
    return (
      <SubframeCore.Select.Trigger asChild={true} {...otherProps}>
        <button
          className={SubframeUtils.twClassNames(
            "flex h-full w-full items-center gap-2 text-left",
            className
          )}
          ref={ref}
        >
          <SelectField.TriggerValue placeholder={placeholder as string} />
          <svg
            className="font-['Inter'] text-[16px] font-[400] leading-[20px] text-[#7a828e]"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
          >
            <path
              d="m6 9 6 6 6-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeOpacity="1"
            />
          </svg>
        </button>
      </SubframeCore.Select.Trigger>
    );
  }
);

export interface ItemTextProps
  extends React.ComponentProps<typeof SubframeCore.Select.ItemText> {
  children?: React.ReactNode;
  className?: string;
}

const ItemText = React.forwardRef<HTMLSpanElement, ItemTextProps>(
  function ItemText(
    { children, className, ...otherProps }: ItemTextProps,
    ref
  ) {
    return children ? (
      <SubframeCore.Select.ItemText {...otherProps}>
        <span
          className={SubframeUtils.twClassNames(
            "font-['Inter'] text-[14px] font-[400] leading-[20px] text-[#e5e7eb]",
            className
          )}
          ref={ref}
        >
          {children}
        </span>
      </SubframeCore.Select.ItemText>
    ) : null;
  }
);

export interface SelectFieldRootProps
  extends React.ComponentProps<typeof SubframeCore.Select.Root> {
  disabled?: boolean;
  label?: React.ReactNode;
  placeholder?: React.ReactNode;
  helperText?: React.ReactNode;
  state?: "default" | "error";
  leading?: React.ReactNode;
  children?: React.ReactNode;
  value?: string;
  onValueChange?: (value: string) => void;
  className?: string;
}

const SelectFieldRoot = React.forwardRef<HTMLDivElement, SelectFieldRootProps>(
  function SelectFieldRoot(
    {
      disabled = false,
      label,
      placeholder,
      helperText,
      state = "default",
      leading,
      children,
      className,
      value,
      defaultValue,
      onValueChange,
      open,
      defaultOpen,
      onOpenChange,
      dir,
      name,
      autoComplete,
      required,
      form,
      ...otherProps
    }: SelectFieldRootProps,
    ref
  ) {
    return (
      <SubframeCore.Select.Root
        disabled={disabled}
        value={value}
        defaultValue={defaultValue}
        onValueChange={onValueChange}
        open={open}
        defaultOpen={defaultOpen}
        onOpenChange={onOpenChange}
        dir={dir}
        name={name}
        autoComplete={autoComplete}
        required={required}
        form={form}
      >
        <div
          className={SubframeUtils.twClassNames(
            "group/97cc5612 flex w-full flex-col items-start gap-2",
            { "opacity-50 pointer-events-none": disabled },
            className
          )}
          ref={ref}
          {...otherProps}
        >
          {label ? (
            <span className="font-['Inter'] text-[14px] font-[500] leading-[20px] text-[#c4c9d1]">
              {label}
            </span>
          ) : null}
          <div
            className={SubframeUtils.twClassNames(
              "flex h-10 w-full flex-none items-center gap-2 rounded-[8px] border border-solid border-[#2a3038] bg-[#0b0d10] px-3 hover:border-[#3a414b] group-focus-within/97cc5612:border-[#22c55e]",
              {
                "border border-solid border-[#ef4444] hover:border-[#ef4444]":
                  state === "error",
              }
            )}
          >
            {leading ? (
              <div className="flex items-center">{leading}</div>
            ) : null}
            <Trigger placeholder={placeholder} />
          </div>
          {helperText ? (
            <span
              className={SubframeUtils.twClassNames(
                "font-['Inter'] text-[12px] font-[400] leading-[16px] text-[#7a828e]",
                { "text-[#fca5a5]": state === "error" }
              )}
            >
              {helperText}
            </span>
          ) : null}
          <Content>
            {children ? (
              <div className="flex w-full grow shrink-0 basis-0 flex-col items-start">
                {children}
              </div>
            ) : null}
          </Content>
        </div>
      </SubframeCore.Select.Root>
    );
  }
);

export const SelectField = Object.assign(SelectFieldRoot, {
  Item,
  TriggerValue,
  Content,
  Trigger,
  ItemText,
});
