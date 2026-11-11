"use client";
/*
 * Documentation:
 * ImageField — https://app.subframe.com/8707573e90c5/library?component=ImageField_fa4dc593-6f9b-4a2b-a4d6-595cddd6e3de
 */

import React from "react";
import Modrinth from "../../icons/Modrinth";
import RoundAdd from "../../icons/RoundAdd";
import TextAsterisk16Filled from "../../icons/TextAsterisk16Filled";
import * as SubframeUtils from "../../utils";

export interface ImageTileProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: string;
  className?: string;
}

const ImageTile = React.forwardRef<HTMLDivElement, ImageTileProps>(
  function ImageTile({ src, className, ...otherProps }: ImageTileProps, ref) {
    return (
      <div
        className={SubframeUtils.twClassNames(
          "flex flex-col items-center justify-center gap-2 rounded-[6px] border border-solid border-[#2a3038] bg-[#0b0d10] px-px py-px",
          className
        )}
        ref={ref}
        {...otherProps}
      >
        {src ? (
          <img
            className="h-[68px] flex-none rounded-[4px] object-cover"
            src={src}
          />
        ) : null}
      </div>
    );
  }
);

export interface ImageFieldRootProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  required?: boolean;
  title?: React.ReactNode;
  placeholder?: React.ReactNode;
  className?: string;
}

const ImageFieldRoot = React.forwardRef<HTMLDivElement, ImageFieldRootProps>(
  function ImageFieldRoot(
    {
      required = false,
      title,
      placeholder,
      className,
      ...otherProps
    }: ImageFieldRootProps,
    ref
  ) {
    return (
      <div
        className={SubframeUtils.twClassNames(
          "group/fa4dc593 flex w-full flex-col items-start gap-2",
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
            {title ? (
              <span className="font-['Inter'] text-[14px] font-[500] leading-[20px] text-[#c4c9d1]">
                {title}
              </span>
            ) : null}
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
        <div className="flex w-60 items-center gap-2">
          <div className="flex h-[86px] w-60 flex-none items-center gap-1 rounded-[8px] border border-solid border-[#2a3038] bg-[#0b0d10] px-2 py-2 overflow-x-auto">
            <ImageTile
              className="h-auto max-h-[100px] w-auto flex-none"
              src="https://res.cloudinary.com/subframe/image/upload/v1794176827/uploads/47820/pnj2hzawamjngcqjhxg9.png"
            />
            <ImageTile
              className="h-auto max-h-[100px] w-auto flex-none"
              src="https://res.cloudinary.com/subframe/image/upload/v1793814477/uploads/47820/iy6ektqdbqkda1bdsdw3.webp"
            />
            <ImageTile
              className="h-auto max-h-[100px] w-auto flex-none"
              src="https://res.cloudinary.com/subframe/image/upload/v1794176827/uploads/47820/pnj2hzawamjngcqjhxg9.png"
            />
            <div className="flex flex-col items-center justify-center gap-2 rounded-[6px] border border-solid border-[#2a3038] bg-[#0b0d10] px-px py-px">
              <RoundAdd className="font-['Inter'] text-[14px] font-[400] leading-[20px] text-[#ffffff]" />
            </div>
          </div>
        </div>
      </div>
    );
  }
);

export const ImageField = Object.assign(ImageFieldRoot, {
  ImageTile,
});
