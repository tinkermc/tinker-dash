// Class names copied from the Subframe designs, so hand-written inputs match.
export const inputClass =
  "h-10 min-w-0 grow shrink-0 basis-0 rounded-[8px] border border-solid border-[#2a3038] bg-[#0b0d10] px-3 font-['Inter'] text-[14px] font-[400] leading-[20px] text-[#ffffff] outline-none placeholder:text-[#7a828e] focus:border-[#22c55e] disabled:cursor-not-allowed disabled:opacity-60";

// The same input, for places where it sits on its own line (not in a row).
export const blockInputClass =
  "h-10 w-full flex-none rounded-[8px] border border-solid border-[#2a3038] bg-[#0b0d10] px-3 font-['Inter'] text-[14px] font-[400] leading-[20px] text-[#ffffff] outline-none placeholder:text-[#7a828e] focus:border-[#22c55e]";

export const textareaClass =
  "grow shrink-0 basis-0 rounded-[8px] border border-solid border-[#2a3038] bg-[#0b0d10] px-3 py-2 font-['Inter'] text-[14px] font-[400] leading-[20px] text-[#ffffff] outline-none placeholder:text-[#7a828e] focus:border-[#22c55e] disabled:cursor-not-allowed disabled:opacity-60";

// For parts of a page the Agent can't power yet: dimmed and not clickable.
export const previewClass = "pointer-events-none select-none opacity-50";
