"use client";
/*
 * Documentation:
 * CloseButtonContainer — https://app.subframe.com/8707573e90c5/library?component=CloseButtonContainer_d67db6cb-2d77-4f03-8a08-c20a662b8c3f
 * CreateRoleDialog — https://app.subframe.com/8707573e90c5/library?component=CreateRoleDialog_5d34ec04-cfc8-4276-8336-bd7f54d4ef0b
 */
import React from "react";
import { Checkbox } from "@/ui/components/Checkbox";
import { CloseButtonContainer } from "@/ui/components/CloseButtonContainer";
import { PrimaryButton } from "@/ui/components/PrimaryButton";
import BaselineHelp from "@/ui/icons/BaselineHelp";
import Hammer from "@/ui/icons/Hammer";
import OutlineCancel from "@/ui/icons/OutlineCancel";
import RoundAdd from "@/ui/icons/RoundAdd";
import RoundAdminPanelSettings from "@/ui/icons/RoundAdminPanelSettings";
import RoundCompass from "@/ui/icons/RoundCompass";
import RoundList from "@/ui/icons/RoundList";
import RoundModeEditOutline from "@/ui/icons/RoundModeEditOutline";
import RoundNewLabel from "@/ui/icons/RoundNewLabel";
import RoundNotifications from "@/ui/icons/RoundNotifications";
import RoundPeople from "@/ui/icons/RoundPeople";
import RoundSaveAll from "@/ui/icons/RoundSaveAll";
import RoundSearch from "@/ui/icons/RoundSearch";
import RoundServerX1 from "@/ui/icons/RoundServerX1";
import RoundStarFilled from "@/ui/icons/RoundStarFilled";
import TinkerDash from "@/ui/icons/TinkerDash";

export interface CreateRoleDialogRootProps
  extends React.HTMLAttributes<HTMLDivElement> {
  roleNameInput?: React.ReactNode;
  badgeColorPicker?: React.ReactNode;
  preview?: React.ReactNode;
  presets?: React.ReactNode;
  permissionsLabel?: React.ReactNode;
  selectionActions?: React.ReactNode;
  permissionGroups?: React.ReactNode;
  actions?: React.ReactNode;
  className?: string;
  onClose?: () => void;
}

const CreateRoleDialogRoot = React.forwardRef<
  HTMLDivElement,
  CreateRoleDialogRootProps
>(function CreateRoleDialogRoot(
  {
    onClose,
  }: CreateRoleDialogRootProps
) {
  return (
    <div className="flex w-[720px] flex-col items-start rounded-2xl border border-solid border-[#1f242b] bg-[#111418] shadow-[0px_24px_64px_-12px_#000000] max-w-full relative z-50">
      <div className="flex w-full items-center border-b border-solid border-[#1f242b] px-6 py-4 gap-4">
        <div className="flex h-8 w-8 flex-none items-center justify-center rounded-[8px] bg-[#123321]">
          <RoundNewLabel className="font-['Inter'] text-[18px] font-[400] leading-[20px] text-[#22c55e]" />
        </div>
        <div className="flex grow shrink-0 basis-0 items-center justify-between">
          <div className="flex grow shrink-0 basis-0 flex-col items-start gap-0.5">
            <h2 className="w-full font-['Inter'] text-[20px] font-[700] leading-[28px] text-[#ffffff]">
              Create role
            </h2>
            <span className="w-full font-['Inter'] text-[13px] font-[400] leading-[18px] text-[#aeb4bd]">
              Choose what users with this role can do on your server.
            </span>
          </div>
          <CloseButtonContainer
            closeButton={
              <div className="flex items-center justify-between">
                <button
                  type="button"
                  aria-label="Close dialog"
                  onClick={onClose}
                  className="flex h-8 w-8 flex-none items-center justify-center rounded-[8px] border border-solid border-[#2a3038] bg-[#0b0d10] hover:border-[#3a414b]"
          >
                  <OutlineCancel className="font-['Inter'] text-[18px] font-[400] leading-[20px] text-[#aeb4bd]" />
                </button>
              </div>
            }
          />
        </div>
      </div>
      <div className="flex w-full flex-col items-start gap-5 px-6 py-5">
        <div className="flex w-full items-end gap-6">
          <div className="flex grow shrink-0 basis-0 flex-col items-start gap-2">
            <span className="font-['Inter'] text-[14px] font-[500] leading-[20px] text-[#c4c9d1]">
              Role name
            </span>
            <div className="flex w-full flex-col items-start gap-2">
              <input
                className="h-10 w-full flex-none rounded-[8px] border border-solid border-[#22c55e] bg-[#0b0d10] px-3 font-['Inter'] text-[14px] font-[400] leading-[21px] text-[#ffffff] outline-none placeholder:text-[#7a828e]"
                placeholder="Maximum 12 characters"
                value=""
                type="text"
              />
            </div>
          </div>
          <div className="flex flex-col items-start gap-2">
            <span className="font-['Inter'] text-[14px] font-[500] leading-[20px] text-[#c4c9d1]">
              Badge color
            </span>
            <div className="flex flex-col items-start gap-2">
              <div className="flex h-10 flex-none items-center gap-1">
                <div className="flex h-8 w-8 flex-none items-center justify-center rounded-[9999px] border-2 border-solid border-[#ffffff] bg-[#0b0d10]">
                  <div className="flex h-6 w-6 flex-none items-center justify-center rounded-[9999px] bg-[#a855f7]">
                    <svg
                      className="font-['Inter'] text-[14px] font-[400] leading-[21px] text-[#ffffff]"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z"
                        fill="currentColor"
                        fillOpacity="1"
                      />
                    </svg>
                  </div>
                </div>
                <div className="flex h-8 w-8 flex-none items-center justify-center rounded-[9999px] border-2 border-solid border-transparent hover:border-[#3a414b]">
                  <div className="flex h-6 w-6 flex-none items-start rounded-[9999px] bg-[#22c55e]" />
                </div>
                <div className="flex h-8 w-8 flex-none items-center justify-center rounded-[9999px] border-2 border-solid border-transparent hover:border-[#3a414b]">
                  <div className="flex h-6 w-6 flex-none items-start rounded-[9999px] bg-[#3b9eff]" />
                </div>
                <div className="flex h-8 w-8 flex-none items-center justify-center rounded-[9999px] border-2 border-solid border-transparent hover:border-[#3a414b]">
                  <div className="flex h-6 w-6 flex-none items-start rounded-[9999px] bg-[#facc15]" />
                </div>
                <div className="flex h-8 w-8 flex-none items-center justify-center rounded-[9999px] border-2 border-solid border-transparent hover:border-[#3a414b]">
                  <div className="flex h-6 w-6 flex-none items-start rounded-[9999px] bg-[#ef4444]" />
                </div>
                <div className="flex h-8 w-8 flex-none items-center justify-center rounded-[9999px] border-2 border-solid border-transparent hover:border-[#3a414b]">
                  <div className="flex h-6 w-6 flex-none items-start rounded-[9999px] bg-[#fd9eff]" />
                </div>
                <div className="flex h-8 w-8 flex-none items-center justify-center rounded-[9999px] border-2 border-solid border-transparent hover:border-[#3a414b]">
                  <img
                    className="h-6 w-6 flex-none rounded-[9999px] object-cover"
                    src="https://res.cloudinary.com/subframe/image/upload/v1793814477/uploads/47820/iy6ektqdbqkda1bdsdw3.webp"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start gap-2">
            <span className="font-['Inter'] text-[14px] font-[500] leading-[20px] text-[#c4c9d1]">
              Preview
            </span>
            <div className="flex flex-col items-start gap-2">
              <div className="flex h-10 flex-none items-center rounded-[8px] border border-dashed border-[#2a3038] bg-[#0b0d10] px-3">
                <div className="flex items-center gap-0.5 rounded-[9999px] border border-solid border-[#a855f7] bg-[#2e1450] pl-1 pr-2">
                  <Hammer className="font-['Inter'] text-[12px] font-[400] leading-[18px] text-[#e9d5ff]" />
                  <span className="font-['Inter'] text-[11px] font-[600] leading-[18px] text-[#e9d5ff]">
                    Builder
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex h-px w-full flex-none items-start bg-[#232830]" />
        <div className="flex w-full items-start gap-6">
          <div className="flex w-56 flex-none flex-col items-start gap-2">
            <span className="font-['Inter'] text-[14px] font-[500] leading-[20px] text-[#c4c9d1]">
              Start from a preset
            </span>
            <div className="flex w-full flex-col items-start gap-2">
              <div className="flex w-full flex-col items-start gap-1.5">
                <div className="flex w-full items-center gap-2 rounded-[8px] border border-solid border-[#1f242b] bg-[#0b0d10] px-3 py-2 hover:border-[#3a414b]">
                  <div className="flex items-center gap-0.5 rounded-[9999px] border border-solid border-[#4b5563] bg-[#232830] pl-1 pr-2">
                    <RoundStarFilled className="font-['Inter'] text-[12px] font-[400] leading-[18px] text-[#facc15]" />
                    <span className="font-['Inter'] text-[11px] font-[600] leading-[18px] text-[#facc15]">
                      Owner
                    </span>
                  </div>
                  <span className="grow shrink-0 basis-0 font-['Inter'] text-[12px] font-[400] leading-[16px] text-[#7a828e] text-right">
                    · 26 of 26
                  </span>
                </div>
                <div className="flex w-full items-center gap-2 rounded-[8px] border border-solid border-[#1f242b] bg-[#0b0d10] px-3 py-2 hover:border-[#3a414b]">
                  <div className="flex items-center gap-0.5 rounded-[9999px] border border-solid border-[#4b5563] bg-[#232830] pl-1 pr-2">
                    <RoundAdminPanelSettings className="font-['Inter'] text-[12px] font-[400] leading-[18px] text-[#fd9eff]" />
                    <span className="font-['Inter'] text-[11px] font-[600] leading-[18px] text-[#fd9eff]">
                      Admin
                    </span>
                  </div>
                  <span className="grow shrink-0 basis-0 font-['Inter'] text-[12px] font-[400] leading-[16px] text-[#7a828e] text-right">
                    · 22 of 26
                  </span>
                </div>
                <div className="flex w-full items-center gap-2 rounded-[8px] border border-solid border-[#22c55e] bg-[#123321] px-3 py-2">
                  <div className="flex items-center gap-0.5 rounded-[9999px] border border-solid border-[#4b5563] bg-[#232830] pl-1 pr-2">
                    <RoundNotifications className="font-['Inter'] text-[12px] font-[400] leading-[18px] text-[#a78bfa]" />
                    <span className="font-['Inter'] text-[11px] font-[600] leading-[18px] text-[#a78bfa]">
                      Moderator
                    </span>
                  </div>
                  <span className="grow shrink-0 basis-0 font-['Inter'] text-[12px] font-[400] leading-[16px] text-[#e5e7eb] text-right">
                    · 14 of 26
                  </span>
                </div>
                <div className="flex w-full items-center gap-2 rounded-[8px] border border-solid border-[#1f242b] bg-[#0b0d10] px-3 py-2 hover:border-[#3a414b]">
                  <div className="flex items-center gap-0.5 rounded-[9999px] border border-solid border-[#4b5563] bg-[#232830] pl-1 pr-2">
                    <BaselineHelp className="font-['Inter'] text-[12px] font-[400] leading-[18px] text-[#38bdf8]" />
                    <span className="font-['Inter'] text-[11px] font-[600] leading-[18px] text-[#38bdf8]">
                      Helper
                    </span>
                  </div>
                  <span className="grow shrink-0 basis-0 font-['Inter'] text-[12px] font-[400] leading-[16px] text-[#7a828e] text-right">
                    · 8 of 26
                  </span>
                </div>
                <div className="flex w-full items-center gap-2 rounded-[8px] border border-solid border-[#1f242b] bg-[#0b0d10] px-3 py-2 hover:border-[#3a414b]">
                  <div className="flex items-center gap-0.5 rounded-[9999px] border border-solid border-[#4b5563] bg-[#232830] pl-1 pr-2">
                    <RoundSearch className="font-['Inter'] text-[12px] font-[400] leading-[18px] text-[#96a2b0]" />
                    <span className="font-['Inter'] text-[11px] font-[600] leading-[18px] text-[#96a2b0]">
                      Viewer
                    </span>
                  </div>
                  <span className="grow shrink-0 basis-0 font-['Inter'] text-[12px] font-[400] leading-[16px] text-[#7a828e] text-right">
                    · 4 of 26
                  </span>
                </div>
                <div className="flex w-full items-center gap-2 rounded-[8px] border border-solid border-[#1f242b] bg-[#0b0d10] px-3 py-2 hover:border-[#3a414b]">
                  <div className="flex items-center gap-0.5 rounded-[9999px] border border-solid border-[#4b5563] bg-[#232830] pl-1 pr-2">
                    <RoundModeEditOutline className="font-['Inter'] text-[12px] font-[400] leading-[18px] text-[#22c55e]" />
                    <span className="font-['Inter'] text-[11px] font-[600] leading-[18px] text-[#22c55e]">
                      Custom
                    </span>
                  </div>
                  <span className="grow shrink-0 basis-0 font-['Inter'] text-[12px] font-[400] leading-[16px] text-[#7a828e] text-right">
                    · 0 of 26
                  </span>
                </div>
              </div>
            </div>
            <span className="font-['Inter'] text-[12px] font-[400] leading-[16px] text-[#7a828e]">
              Picking a preset fills in permissions. You can still adjust them.
            </span>
          </div>
          <div className="flex grow shrink-0 basis-0 flex-col items-start gap-2">
            <div className="flex w-full items-center gap-2">
              <span className="font-['Inter'] text-[14px] font-[500] leading-[20px] text-[#c4c9d1]">
                Permissions
              </span>
              <div className="flex items-center rounded-[9999px] border border-solid border-[#22c55e] bg-[#0f2418] px-2 py-0.5">
                <span className="font-['Inter'] text-[11px] font-[600] leading-[14px] text-[#86efac]">
                  12 of 26 allowed
                </span>
              </div>
              <div className="flex grow shrink-0 basis-0 items-center gap-2">
                <div className="flex grow shrink-0 basis-0 items-center justify-end gap-2">
                  <span className="font-['Inter'] text-[13px] font-[500] leading-[20px] text-[#3b9eff] underline hover:text-[#7cbcff]">
                    Select all
                  </span>
                  <span className="font-['Inter'] text-[13px] font-[400] leading-[20px] text-[#4b5563]">
                    /
                  </span>
                  <span className="font-['Inter'] text-[13px] font-[500] leading-[20px] text-[#3b9eff] underline hover:text-[#7cbcff]">
                    Clear
                  </span>
                </div>
              </div>
            </div>
            <div className="flex h-[380px] w-full flex-none flex-col items-start gap-3 rounded-[8px] border border-solid border-[#1f242b] bg-[#0d1013] px-3 py-3 overflow-auto">
              <div className="flex w-full flex-col items-start gap-3">
                <div className="flex w-full flex-col items-start gap-1">
                  <div className="flex w-full items-center gap-2 border-b border-solid border-[#232830] pt-1 pb-1.5">
                    <RoundServerX1 className="font-['Inter'] text-[14px] font-[400] leading-[20px] text-[#7a828e]" />
                    <span className="grow shrink-0 basis-0 font-['Inter'] text-[12px] font-[600] leading-[16px] tracking-[0.06em] text-[#c4c9d1] uppercase">
                      Server
                    </span>
                    <span className="font-['Inter'] text-[12px] font-[400] leading-[16px] text-[#7a828e]">
                      3 of 4
                    </span>
                  </div>
                  <div className="flex w-full items-start gap-3 rounded-[8px] px-2 py-1.5 hover:bg-[#1a1e23]">
                    <div className="flex items-center pt-0.5">
                      <Checkbox />
                    </div>
                    <div className="flex grow shrink-0 basis-0 flex-col items-start">
                      <span className="font-['Inter'] text-[14px] font-[500] leading-[20px] text-[#ffffff]">
                        Start &amp; stop
                      </span>
                      <span className="font-['Inter'] text-[12px] font-[400] leading-[16px] text-[#7a828e]">
                        Power the server on and off
                      </span>
                    </div>
                  </div>
                  <div className="flex w-full items-start gap-3 rounded-[8px] px-2 py-1.5 hover:bg-[#1a1e23]">
                    <div className="flex items-center pt-0.5">
                      <div className="flex h-4 w-4 flex-none items-center justify-center rounded-[4px] border border-solid border-[#22c55e] bg-[#22c55e]">
                        <svg
                          className="font-['Inter'] text-[12px] font-[400] leading-[18px] text-[#ffffff]"
                          width="1em"
                          height="1em"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z"
                            fill="currentColor"
                            fillOpacity="1"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="flex grow shrink-0 basis-0 flex-col items-start">
                      <span className="font-['Inter'] text-[14px] font-[500] leading-[20px] text-[#ffffff]">
                        Restart
                      </span>
                      <span className="font-['Inter'] text-[12px] font-[400] leading-[16px] text-[#7a828e]">
                        Restart the running server
                      </span>
                    </div>
                  </div>
                  <div className="flex w-full items-start gap-3 rounded-[8px] px-2 py-1.5 hover:bg-[#1a1e23]">
                    <div className="flex items-center pt-0.5">
                      <div className="flex h-4 w-4 flex-none items-center justify-center rounded-[4px] border border-solid border-[#22c55e] bg-[#22c55e]">
                        <svg
                          className="font-['Inter'] text-[12px] font-[400] leading-[18px] text-[#ffffff]"
                          width="1em"
                          height="1em"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z"
                            fill="currentColor"
                            fillOpacity="1"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="flex grow shrink-0 basis-0 flex-col items-start">
                      <span className="font-['Inter'] text-[14px] font-[500] leading-[20px] text-[#ffffff]">
                        View console
                      </span>
                      <span className="font-['Inter'] text-[12px] font-[400] leading-[16px] text-[#7a828e]">
                        Read live console output
                      </span>
                    </div>
                  </div>
                  <div className="flex w-full items-start gap-3 rounded-[8px] px-2 py-1.5 hover:bg-[#1a1e23]">
                    <div className="flex items-center pt-0.5">
                      <div className="flex h-4 w-4 flex-none items-center justify-center rounded-[4px] border border-solid border-[#2a3038] bg-[#0b0d10]" />
                    </div>
                    <div className="flex grow shrink-0 basis-0 flex-col items-start">
                      <span className="font-['Inter'] text-[14px] font-[500] leading-[20px] text-[#c4c9d1]">
                        Send commands
                      </span>
                      <span className="font-['Inter'] text-[12px] font-[400] leading-[16px] text-[#7a828e]">
                        Run commands in the console
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex w-full flex-col items-start gap-1">
                  <div className="flex w-full items-center gap-2 border-b border-solid border-[#232830] pt-1 pb-1.5">
                    <RoundCompass className="font-['Inter'] text-[14px] font-[400] leading-[20px] text-[#7a828e]" />
                    <span className="grow shrink-0 basis-0 font-['Inter'] text-[12px] font-[600] leading-[16px] tracking-[0.06em] text-[#c4c9d1] uppercase">
                      Mods
                    </span>
                    <span className="font-['Inter'] text-[12px] font-[400] leading-[16px] text-[#7a828e]">
                      3 of 4
                    </span>
                  </div>
                  <div className="flex w-full items-start gap-3 rounded-[8px] px-2 py-1.5 hover:bg-[#1a1e23]">
                    <div className="flex items-center pt-0.5">
                      <div className="flex h-4 w-4 flex-none items-center justify-center rounded-[4px] border border-solid border-[#22c55e] bg-[#22c55e]">
                        <svg
                          className="font-['Inter'] text-[12px] font-[400] leading-[18px] text-[#ffffff]"
                          width="1em"
                          height="1em"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z"
                            fill="currentColor"
                            fillOpacity="1"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="flex grow shrink-0 basis-0 flex-col items-start">
                      <span className="font-['Inter'] text-[14px] font-[500] leading-[20px] text-[#ffffff]">
                        View mods
                      </span>
                      <span className="font-['Inter'] text-[12px] font-[400] leading-[16px] text-[#7a828e]">
                        See installed mods and versions
                      </span>
                    </div>
                  </div>
                  <div className="flex w-full items-start gap-3 rounded-[8px] px-2 py-1.5 hover:bg-[#1a1e23]">
                    <div className="flex items-center pt-0.5">
                      <div className="flex h-4 w-4 flex-none items-center justify-center rounded-[4px] border border-solid border-[#22c55e] bg-[#22c55e]">
                        <svg
                          className="font-['Inter'] text-[12px] font-[400] leading-[18px] text-[#ffffff]"
                          width="1em"
                          height="1em"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z"
                            fill="currentColor"
                            fillOpacity="1"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="flex grow shrink-0 basis-0 flex-col items-start">
                      <span className="font-['Inter'] text-[14px] font-[500] leading-[20px] text-[#ffffff]">
                        Add mods
                      </span>
                      <span className="font-['Inter'] text-[12px] font-[400] leading-[16px] text-[#7a828e]">
                        Install new mods from Modrinth or CurseForge
                      </span>
                    </div>
                  </div>
                  <div className="flex w-full items-start gap-3 rounded-[8px] px-2 py-1.5 hover:bg-[#1a1e23]">
                    <div className="flex items-center pt-0.5">
                      <div className="flex h-4 w-4 flex-none items-center justify-center rounded-[4px] border border-solid border-[#2a3038] bg-[#0b0d10]" />
                    </div>
                    <div className="flex grow shrink-0 basis-0 flex-col items-start">
                      <span className="font-['Inter'] text-[14px] font-[500] leading-[20px] text-[#c4c9d1]">
                        Remove mods
                      </span>
                      <span className="font-['Inter'] text-[12px] font-[400] leading-[16px] text-[#7a828e]">
                        Uninstall mods from the server
                      </span>
                    </div>
                  </div>
                  <div className="flex w-full items-start gap-3 rounded-[8px] px-2 py-1.5 hover:bg-[#1a1e23]">
                    <div className="flex items-center pt-0.5">
                      <div className="flex h-4 w-4 flex-none items-center justify-center rounded-[4px] border border-solid border-[#22c55e] bg-[#22c55e]">
                        <svg
                          className="font-['Inter'] text-[12px] font-[400] leading-[18px] text-[#ffffff]"
                          width="1em"
                          height="1em"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z"
                            fill="currentColor"
                            fillOpacity="1"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="flex grow shrink-0 basis-0 flex-col items-start">
                      <span className="font-['Inter'] text-[14px] font-[500] leading-[20px] text-[#ffffff]">
                        Update mods
                      </span>
                      <span className="font-['Inter'] text-[12px] font-[400] leading-[16px] text-[#7a828e]">
                        Upgrade mods to newer versions
                      </span>
                    </div>
                  </div>
                  <div className="flex w-full items-start gap-3 rounded-[8px] px-2 py-1.5 hover:bg-[#1a1e23]">
                    <div className="flex items-center pt-0.5">
                      <div className="flex h-4 w-4 flex-none items-center justify-center rounded-[4px] border border-solid border-[#22c55e] bg-[#22c55e]">
                        <svg
                          className="font-['Inter'] text-[12px] font-[400] leading-[18px] text-[#ffffff]"
                          width="1em"
                          height="1em"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z"
                            fill="currentColor"
                            fillOpacity="1"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="flex grow shrink-0 basis-0 flex-col items-start">
                      <span className="font-['Inter'] text-[14px] font-[500] leading-[20px] text-[#ffffff]">
                        Downgrade mods
                      </span>
                      <span className="font-['Inter'] text-[12px] font-[400] leading-[16px] text-[#7a828e]">
                        Downgrade mods to older versions
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex w-full flex-col items-start gap-1">
                  <div className="flex w-full items-center gap-2 border-b border-solid border-[#232830] pt-1 pb-1.5">
                    <RoundList className="font-['Inter'] text-[14px] font-[400] leading-[20px] text-[#7a828e]" />
                    <span className="grow shrink-0 basis-0 font-['Inter'] text-[12px] font-[600] leading-[16px] tracking-[0.06em] text-[#c4c9d1] uppercase">
                      Files
                    </span>
                    <span className="font-['Inter'] text-[12px] font-[400] leading-[16px] text-[#7a828e]">
                      1 of 4
                    </span>
                  </div>
                  <div className="flex w-full items-start gap-3 rounded-[8px] px-2 py-1.5 hover:bg-[#1a1e23]">
                    <div className="flex items-center pt-0.5">
                      <div className="flex h-4 w-4 flex-none items-center justify-center rounded-[4px] border border-solid border-[#22c55e] bg-[#22c55e]">
                        <svg
                          className="font-['Inter'] text-[12px] font-[400] leading-[18px] text-[#ffffff]"
                          width="1em"
                          height="1em"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z"
                            fill="currentColor"
                            fillOpacity="1"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="flex grow shrink-0 basis-0 flex-col items-start">
                      <span className="font-['Inter'] text-[14px] font-[500] leading-[20px] text-[#ffffff]">
                        View files
                      </span>
                      <span className="font-['Inter'] text-[12px] font-[400] leading-[16px] text-[#7a828e]">
                        Browse the server file tree
                      </span>
                    </div>
                  </div>
                  <div className="flex w-full items-start gap-3 rounded-[8px] px-2 py-1.5 hover:bg-[#1a1e23]">
                    <div className="flex items-center pt-0.5">
                      <div className="flex h-4 w-4 flex-none items-center justify-center rounded-[4px] border border-solid border-[#2a3038] bg-[#0b0d10]" />
                    </div>
                    <div className="flex grow shrink-0 basis-0 flex-col items-start">
                      <span className="font-['Inter'] text-[14px] font-[500] leading-[20px] text-[#c4c9d1]">
                        Edit files
                      </span>
                      <span className="font-['Inter'] text-[12px] font-[400] leading-[16px] text-[#7a828e]">
                        Change configs and text files
                      </span>
                    </div>
                  </div>
                  <div className="flex w-full items-start gap-3 rounded-[8px] px-2 py-1.5 hover:bg-[#1a1e23]">
                    <div className="flex items-center pt-0.5">
                      <div className="flex h-4 w-4 flex-none items-center justify-center rounded-[4px] border border-solid border-[#2a3038] bg-[#0b0d10]" />
                    </div>
                    <div className="flex grow shrink-0 basis-0 flex-col items-start">
                      <span className="font-['Inter'] text-[14px] font-[500] leading-[20px] text-[#c4c9d1]">
                        Upload files
                      </span>
                      <span className="font-['Inter'] text-[12px] font-[400] leading-[16px] text-[#7a828e]">
                        Add files to the server
                      </span>
                    </div>
                  </div>
                  <div className="flex w-full items-start gap-3 rounded-[8px] px-2 py-1.5 hover:bg-[#1a1e23]">
                    <div className="flex items-center pt-0.5">
                      <div className="flex h-4 w-4 flex-none items-center justify-center rounded-[4px] border border-solid border-[#2a3038] bg-[#0b0d10]" />
                    </div>
                    <div className="flex grow shrink-0 basis-0 flex-col items-start">
                      <span className="font-['Inter'] text-[14px] font-[500] leading-[20px] text-[#c4c9d1]">
                        Delete files
                      </span>
                      <span className="font-['Inter'] text-[12px] font-[400] leading-[16px] text-[#7a828e]">
                        Permanently remove files
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex w-full flex-col items-start gap-1">
                  <div className="flex w-full items-center gap-2 border-b border-solid border-[#232830] pt-1 pb-1.5">
                    <RoundPeople className="font-['Inter'] text-[14px] font-[400] leading-[20px] text-[#7a828e]" />
                    <span className="grow shrink-0 basis-0 font-['Inter'] text-[12px] font-[600] leading-[16px] tracking-[0.06em] text-[#c4c9d1] uppercase">
                      Players
                    </span>
                    <span className="font-['Inter'] text-[12px] font-[400] leading-[16px] text-[#7a828e]">
                      3 of 5
                    </span>
                  </div>
                  <div className="flex w-full items-start gap-3 rounded-[8px] px-2 py-1.5 hover:bg-[#1a1e23]">
                    <div className="flex items-center pt-0.5">
                      <div className="flex h-4 w-4 flex-none items-center justify-center rounded-[4px] border border-solid border-[#22c55e] bg-[#22c55e]">
                        <svg
                          className="font-['Inter'] text-[12px] font-[400] leading-[18px] text-[#ffffff]"
                          width="1em"
                          height="1em"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z"
                            fill="currentColor"
                            fillOpacity="1"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="flex grow shrink-0 basis-0 flex-col items-start">
                      <span className="font-['Inter'] text-[14px] font-[500] leading-[20px] text-[#ffffff]">
                        View players
                      </span>
                      <span className="font-['Inter'] text-[12px] font-[400] leading-[16px] text-[#7a828e]">
                        See who is online
                      </span>
                    </div>
                  </div>
                  <div className="flex w-full items-start gap-3 rounded-[8px] px-2 py-1.5 hover:bg-[#1a1e23]">
                    <div className="flex items-center pt-0.5">
                      <div className="flex h-4 w-4 flex-none items-center justify-center rounded-[4px] border border-solid border-[#22c55e] bg-[#22c55e]">
                        <svg
                          className="font-['Inter'] text-[12px] font-[400] leading-[18px] text-[#ffffff]"
                          width="1em"
                          height="1em"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z"
                            fill="currentColor"
                            fillOpacity="1"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="flex grow shrink-0 basis-0 flex-col items-start">
                      <span className="font-['Inter'] text-[14px] font-[500] leading-[20px] text-[#ffffff]">
                        Kick
                      </span>
                      <span className="font-['Inter'] text-[12px] font-[400] leading-[16px] text-[#7a828e]">
                        Remove a player from the session
                      </span>
                    </div>
                  </div>
                  <div className="flex w-full items-start gap-3 rounded-[8px] px-2 py-1.5 hover:bg-[#1a1e23]">
                    <div className="flex items-center pt-0.5">
                      <div className="flex h-4 w-4 flex-none items-center justify-center rounded-[4px] border border-solid border-[#2a3038] bg-[#0b0d10]" />
                    </div>
                    <div className="flex grow shrink-0 basis-0 flex-col items-start">
                      <span className="font-['Inter'] text-[14px] font-[500] leading-[20px] text-[#c4c9d1]">
                        Ban
                      </span>
                      <span className="font-['Inter'] text-[12px] font-[400] leading-[16px] text-[#7a828e]">
                        Block a player from joining
                      </span>
                    </div>
                  </div>
                  <div className="flex w-full items-start gap-3 rounded-[8px] px-2 py-1.5 hover:bg-[#1a1e23]">
                    <div className="flex items-center pt-0.5">
                      <div className="flex h-4 w-4 flex-none items-center justify-center rounded-[4px] border border-solid border-[#22c55e] bg-[#22c55e]">
                        <svg
                          className="font-['Inter'] text-[12px] font-[400] leading-[18px] text-[#ffffff]"
                          width="1em"
                          height="1em"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z"
                            fill="currentColor"
                            fillOpacity="1"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="flex grow shrink-0 basis-0 flex-col items-start">
                      <span className="font-['Inter'] text-[14px] font-[500] leading-[20px] text-[#ffffff]">
                        Manage whitelist
                      </span>
                      <span className="font-['Inter'] text-[12px] font-[400] leading-[16px] text-[#7a828e]">
                        Add or remove whitelisted players
                      </span>
                    </div>
                  </div>
                  <div className="flex w-full items-start gap-3 rounded-[8px] px-2 py-1.5 hover:bg-[#1a1e23]">
                    <div className="flex items-center pt-0.5">
                      <div className="flex h-4 w-4 flex-none items-center justify-center rounded-[4px] border border-solid border-[#2a3038] bg-[#0b0d10]" />
                    </div>
                    <div className="flex grow shrink-0 basis-0 flex-col items-start">
                      <span className="font-['Inter'] text-[14px] font-[500] leading-[20px] text-[#c4c9d1]">
                        OP players
                      </span>
                      <span className="font-['Inter'] text-[12px] font-[400] leading-[16px] text-[#7a828e]">
                        Grant operator status in-game
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex w-full flex-col items-start gap-1">
                  <div className="flex w-full items-center gap-2 border-b border-solid border-[#232830] pt-1 pb-1.5">
                    <RoundSaveAll className="font-['Inter'] text-[14px] font-[400] leading-[20px] text-[#7a828e]" />
                    <span className="grow shrink-0 basis-0 font-['Inter'] text-[12px] font-[600] leading-[16px] tracking-[0.06em] text-[#c4c9d1] uppercase">
                      Backups
                    </span>
                    <span className="font-['Inter'] text-[12px] font-[400] leading-[16px] text-[#7a828e]">
                      2 of 4
                    </span>
                  </div>
                  <div className="flex w-full items-start gap-3 rounded-[8px] px-2 py-1.5 hover:bg-[#1a1e23]">
                    <div className="flex items-center pt-0.5">
                      <div className="flex h-4 w-4 flex-none items-center justify-center rounded-[4px] border border-solid border-[#22c55e] bg-[#22c55e]">
                        <svg
                          className="font-['Inter'] text-[12px] font-[400] leading-[18px] text-[#ffffff]"
                          width="1em"
                          height="1em"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z"
                            fill="currentColor"
                            fillOpacity="1"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="flex grow shrink-0 basis-0 flex-col items-start">
                      <span className="font-['Inter'] text-[14px] font-[500] leading-[20px] text-[#ffffff]">
                        View backups
                      </span>
                      <span className="font-['Inter'] text-[12px] font-[400] leading-[16px] text-[#7a828e]">
                        See existing world backups
                      </span>
                    </div>
                  </div>
                  <div className="flex w-full items-start gap-3 rounded-[8px] px-2 py-1.5 hover:bg-[#1a1e23]">
                    <div className="flex items-center pt-0.5">
                      <div className="flex h-4 w-4 flex-none items-center justify-center rounded-[4px] border border-solid border-[#22c55e] bg-[#22c55e]">
                        <svg
                          className="font-['Inter'] text-[12px] font-[400] leading-[18px] text-[#ffffff]"
                          width="1em"
                          height="1em"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z"
                            fill="currentColor"
                            fillOpacity="1"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="flex grow shrink-0 basis-0 flex-col items-start">
                      <span className="font-['Inter'] text-[14px] font-[500] leading-[20px] text-[#ffffff]">
                        Create backups
                      </span>
                      <span className="font-['Inter'] text-[12px] font-[400] leading-[16px] text-[#7a828e]">
                        Make a new backup on demand
                      </span>
                    </div>
                  </div>
                  <div className="flex w-full items-start gap-3 rounded-[8px] px-2 py-1.5 hover:bg-[#1a1e23]">
                    <div className="flex items-center pt-0.5">
                      <div className="flex h-4 w-4 flex-none items-center justify-center rounded-[4px] border border-solid border-[#2a3038] bg-[#0b0d10]" />
                    </div>
                    <div className="flex grow shrink-0 basis-0 flex-col items-start">
                      <span className="font-['Inter'] text-[14px] font-[500] leading-[20px] text-[#c4c9d1]">
                        Restore backups
                      </span>
                      <span className="font-['Inter'] text-[12px] font-[400] leading-[16px] text-[#7a828e]">
                        Roll the world back to a backup
                      </span>
                    </div>
                  </div>
                  <div className="flex w-full items-start gap-3 rounded-[8px] px-2 py-1.5 hover:bg-[#1a1e23]">
                    <div className="flex items-center pt-0.5">
                      <div className="flex h-4 w-4 flex-none items-center justify-center rounded-[4px] border border-solid border-[#2a3038] bg-[#0b0d10]" />
                    </div>
                    <div className="flex grow shrink-0 basis-0 flex-col items-start">
                      <span className="font-['Inter'] text-[14px] font-[500] leading-[20px] text-[#c4c9d1]">
                        Delete backups
                      </span>
                      <span className="font-['Inter'] text-[12px] font-[400] leading-[16px] text-[#7a828e]">
                        Permanently remove backups
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex w-full flex-col items-start gap-1">
                  <div className="flex w-full items-center gap-2 border-b border-solid border-[#232830] pt-1 pb-1.5">
                    <TinkerDash className="font-['Inter'] text-[14px] font-[400] leading-[20px] text-[#7a828e]" />
                    <span className="grow shrink-0 basis-0 font-['Inter'] text-[12px] font-[600] leading-[16px] tracking-[0.06em] text-[#c4c9d1] uppercase">
                      Tinker
                    </span>
                    <span className="font-['Inter'] text-[12px] font-[400] leading-[16px] text-[#7a828e]">
                      0 of 2
                    </span>
                  </div>
                  <div className="flex w-full items-start gap-3 rounded-[8px] px-2 py-1.5 hover:bg-[#1a1e23]">
                    <div className="flex items-center pt-0.5">
                      <div className="flex h-4 w-4 flex-none items-center justify-center rounded-[4px] border border-solid border-[#2a3038] bg-[#0b0d10]" />
                    </div>
                    <div className="flex grow shrink-0 basis-0 flex-col items-start">
                      <span className="font-['Inter'] text-[14px] font-[500] leading-[20px] text-[#c4c9d1]">
                        Manage users
                      </span>
                      <span className="font-['Inter'] text-[12px] font-[400] leading-[16px] text-[#7a828e]">
                        Invite, edit and remove users
                      </span>
                    </div>
                  </div>
                  <div className="flex w-full items-start gap-3 rounded-[8px] px-2 py-1.5 hover:bg-[#1a1e23]">
                    <div className="flex items-center pt-0.5">
                      <div className="flex h-4 w-4 flex-none items-center justify-center rounded-[4px] border border-solid border-[#2a3038] bg-[#0b0d10]" />
                    </div>
                    <div className="flex grow shrink-0 basis-0 flex-col items-start">
                      <span className="font-['Inter'] text-[14px] font-[500] leading-[20px] text-[#c4c9d1]">
                        Manage roles
                      </span>
                      <span className="font-['Inter'] text-[12px] font-[400] leading-[16px] text-[#7a828e]">
                        Create and edit roles
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full items-center justify-end gap-2 border-t border-solid border-[#1f242b] px-6 py-4">
        <div className="flex items-center justify-end gap-2">
          <PrimaryButton tooltip="" icon={<RoundAdd />} text="Create Role" />
          <PrimaryButton
            tooltip="All changes will be discarded"
            icon={<OutlineCancel />}
            text="Cancel"
            color="gray"
            onClick={onClose}
          />
        </div>
      </div>
    </div>
  );
});

export const CreateRoleDialog = CreateRoleDialogRoot;
