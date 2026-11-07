"use client";
/*
 * Documentation:
 * ConsoleServerHeader — https://app.subframe.com/8707573e90c5/library?component=ConsoleServerHeader_fcad5a41-bdc2-420e-bdaf-dce832c1e55f
 */

import React from "react";
import * as SubframeUtils from "../../utils";

export interface ConsoleServerHeaderRootProps
  extends React.HTMLAttributes<HTMLDivElement> {
  image?: string;
  name?: React.ReactNode;
  loader?: React.ReactNode;
  version?: React.ReactNode;
  port?: React.ReactNode;
  currentPlayers?: React.ReactNode;
  maxPlayers?: React.ReactNode;
  className?: string;
}

const ConsoleServerHeaderRoot = React.forwardRef<
  HTMLDivElement,
  ConsoleServerHeaderRootProps
>(function ConsoleServerHeaderRoot(
  {
    image,
    name,
    loader,
    version,
    port,
    currentPlayers,
    maxPlayers,
    className,
    ...otherProps
  }: ConsoleServerHeaderRootProps,
  ref
) {
  return (
    <div
      className={SubframeUtils.twClassNames(
        "flex items-center gap-2",
        className
      )}
      ref={ref}
      {...otherProps}
    >
      <div className="flex h-14 w-14 flex-none items-center justify-center rounded-xl border border-solid border-[#232830] bg-[#15191e]">
        {image ? (
          <img className="h-10 w-10 flex-none object-contain" src={image} />
        ) : null}
      </div>
      <div className="flex flex-col items-start">
        {name ? (
          <span className="font-['Inter'] text-[20px] font-[700] leading-[28px] text-[#ffffff]">
            {name}
          </span>
        ) : null}
        <div className="flex items-start">
          {loader ? (
            <span className="font-['Inter'] text-[12px] font-[400] leading-[16px] text-[#7a828e]">
              {loader}
            </span>
          ) : null}
          <span className="font-['Inter'] text-[12px] font-[400] leading-[16px] text-[#7a828e]">
             
          </span>
          {version ? (
            <span className="font-['Inter'] text-[12px] font-[400] leading-[16px] text-[#7a828e]">
              {version}
            </span>
          ) : null}
          <span className="font-['Inter'] text-[12px] font-[400] leading-[16px] text-[#7a828e]">
             · 
          </span>
          <span className="font-['Inter'] text-[12px] font-[400] leading-[16px] text-[#7a828e]">
            Port 
          </span>
          {port ? (
            <span className="font-['Inter'] text-[12px] font-[400] leading-[16px] text-[#7a828e]">
              {port}
            </span>
          ) : null}
          <span className="font-['Inter'] text-[12px] font-[400] leading-[16px] text-[#7a828e]">
             · 
          </span>
          {currentPlayers ? (
            <span className="font-['Inter'] text-[12px] font-[400] leading-[16px] text-[#7a828e]">
              {currentPlayers}
            </span>
          ) : null}
          <span className="font-['Inter'] text-[12px] font-[400] leading-[16px] text-[#7a828e]">
            /
          </span>
          {maxPlayers ? (
            <span className="font-['Inter'] text-[12px] font-[400] leading-[16px] text-[#7a828e]">
              {maxPlayers}
            </span>
          ) : null}
          <span className="font-['Inter'] text-[12px] font-[400] leading-[16px] text-[#7a828e]">
             players
          </span>
        </div>
      </div>
    </div>
  );
});

export const ConsoleServerHeader = ConsoleServerHeaderRoot;
