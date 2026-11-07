"use client";
/*
 * Documentation:
 * Tab — https://app.subframe.com/8707573e90c5/library?component=Tab_1e118213-b605-4ecf-b565-fa5764a6ab07
 * TabBar — https://app.subframe.com/8707573e90c5/library?component=TabBar_0e59327f-bb9b-4945-a0f2-a3eda5656445
 */

import React from "react";
import RoundCompass from "../../icons/RoundCompass";
import RoundLayers from "../../icons/RoundLayers";
import RoundList from "../../icons/RoundList";
import RoundPeople from "../../icons/RoundPeople";
import RoundSaveAll from "../../icons/RoundSaveAll";
import RoundServerX1 from "../../icons/RoundServerX1";
import RoundTerminal from "../../icons/RoundTerminal";
import RoundWifi from "../../icons/RoundWifi";
import TinkerDash from "../../icons/TinkerDash";
import * as SubframeUtils from "../../utils";
import type { TabId } from "../../../pages/types";
import { Tab } from "../Tab";

export interface TabBarRootProps extends React.HTMLAttributes<HTMLElement> {
  selected?:
    | "none"
    | "connection-disconnected"
    | "connection-connected"
    | "server"
    | "mods"
    | "files"
    | "world"
    | "players"
    | "console"
    | "backups"
    | "tinker";
  amountOfModsInstalled?: React.ReactNode;
  className?: string;
  onNavigate?: (tab: TabId) => void;
}

const TabBarRoot = React.forwardRef<HTMLElement, TabBarRootProps>(
  function TabBarRoot(
    {
      selected = "none",
      amountOfModsInstalled,
      className,
      onNavigate,
      ...otherProps
    }: TabBarRootProps,
    ref
  ) {
    const handleNavigate = (tab: TabId) => {
      if (selected !== "connection-disconnected") onNavigate?.(tab);
    };

    return (
      <nav
        className={SubframeUtils.twClassNames(
          "group/0e59327f flex w-full items-end justify-center gap-1.5 px-6 min-w-0 overflow-x-auto",
          className
        )}
        ref={ref}
        {...otherProps}
      >
        <div className="flex w-full min-w-0 items-center justify-center gap-1.5 mobile:w-max mobile:min-w-full">
          <Tab
            className="min-w-0 flex-1 items-stretch mobile:flex-none mobile:items-start"
            icon={<RoundWifi />}
            title="Connection"
            onClick={() => handleNavigate("Connection")}
            numberAttached={
              selected === "connection-disconnected" ? false : undefined
            }
            numberAttatched="0"
            selected={
              selected === "connection-connected"
                ? true
                : selected === "connection-disconnected"
                ? true
                : undefined
            }
            locked={selected === "connection-disconnected" ? false : undefined}
          />
          <Tab
            className="min-w-0 flex-1 items-stretch mobile:flex-none mobile:items-start"
            icon={<RoundServerX1 />}
            title="Server"
            onClick={() => handleNavigate("Server")}
            numberAttatched="0"
            selected={
              selected === "server"
                ? true
                : selected === "connection-disconnected"
                ? false
                : undefined
            }
            locked={selected === "connection-disconnected" ? true : undefined}
          />
          <Tab
            className="min-w-0 flex-1 items-stretch mobile:flex-none mobile:items-start"
            icon={<RoundCompass />}
            title="Mods"
            onClick={() => handleNavigate("Mods")}
            numberAttached={true}
            numberAttatched={amountOfModsInstalled}
            selected={
              selected === "mods"
                ? true
                : selected === "connection-disconnected"
                ? false
                : undefined
            }
            locked={selected === "connection-disconnected" ? true : undefined}
          />
          <Tab
            className="min-w-0 flex-1 items-stretch mobile:flex-none mobile:items-start"
            icon={<RoundList />}
            title="Files"
            onClick={() => handleNavigate("Files")}
            numberAttatched="0"
            selected={
              selected === "files"
                ? true
                : selected === "connection-disconnected"
                ? false
                : undefined
            }
            locked={selected === "connection-disconnected" ? true : undefined}
          />
          <Tab
            className="min-w-0 flex-1 items-stretch mobile:flex-none mobile:items-start"
            icon={<RoundLayers />}
            title="World"
            onClick={() => handleNavigate("World")}
            numberAttatched="0"
            selected={
              selected === "world"
                ? true
                : selected === "connection-disconnected"
                ? false
                : undefined
            }
            locked={selected === "connection-disconnected" ? true : undefined}
          />
          <Tab
            className="min-w-0 flex-1 items-stretch mobile:flex-none mobile:items-start"
            icon={<RoundPeople />}
            title="Players"
            onClick={() => handleNavigate("Players")}
            numberAttatched="0"
            selected={
              selected === "players"
                ? true
                : selected === "connection-disconnected"
                ? false
                : undefined
            }
            locked={selected === "connection-disconnected" ? true : undefined}
          />
          <Tab
            className="min-w-0 flex-1 items-stretch mobile:flex-none mobile:items-start"
            icon={<RoundTerminal />}
            title="Console"
            onClick={() => handleNavigate("Console")}
            numberAttatched="0"
            selected={
              selected === "console"
                ? true
                : selected === "connection-disconnected"
                ? false
                : undefined
            }
            locked={selected === "connection-disconnected" ? true : undefined}
          />
          <Tab
            className="min-w-0 flex-1 items-stretch mobile:flex-none mobile:items-start"
            icon={<RoundSaveAll />}
            title="Backups"
            onClick={() => handleNavigate("Backups")}
            numberAttatched="0"
            selected={
              selected === "backups"
                ? true
                : selected === "connection-disconnected"
                ? false
                : undefined
            }
            locked={selected === "connection-disconnected" ? true : undefined}
          />
          <Tab
            className="min-w-0 flex-1 items-stretch mobile:flex-none mobile:items-start"
            icon={<TinkerDash />}
            title="Tinker"
            onClick={() => handleNavigate("Tinker")}
            numberAttatched="0"
            selected={
              selected === "tinker"
                ? true
                : selected === "connection-disconnected"
                ? false
                : undefined
            }
            locked={selected === "connection-disconnected" ? true : undefined}
          />
        </div>
      </nav>
    );
  }
);

export const TabBar = TabBarRoot;
