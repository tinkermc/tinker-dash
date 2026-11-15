// A centered pop-up window with a dark backdrop. Closes on Escape or a click
// outside. Uses Subframe's Dialog (Radix) underneath.
import * as SubframeCore from "@subframe/core";
import type { ReactElement, ReactNode } from "react";
import { DialogShell } from "@/ui/components/DialogShell";

export function Modal({
  open,
  onClose,
  children,
}: {
  open: boolean;
  onClose: () => void;
  children: ReactElement; // one element that forwards its ref, like DialogShell
}) {
  return (
    <SubframeCore.Dialog.Root
      open={open}
      onOpenChange={(next) => {
        if (!next) onClose();
      }}
    >
      <div className="z-[60] flex h-full w-full items-center justify-center overflow-y-auto bg-[#000000b3] p-4">
        <SubframeCore.Dialog.Content asChild>{children}</SubframeCore.Dialog.Content>
      </div>
    </SubframeCore.Dialog.Root>
  );
}

type ShellDialogProps = {
  open: boolean;
  onClose: () => void;
  title: ReactNode;
  description?: ReactNode;
  icon?: ReactNode;
  tone?: "default" | "danger" | "plus";
  footer?: ReactNode;
  children?: ReactNode;
  className?: string;
};

// The Subframe DialogShell inside a Modal, with its ✕ wired up.
export function ShellDialog({ open, onClose, className, ...shell }: ShellDialogProps) {
  return (
    <Modal open={open} onClose={onClose}>
      <DialogShell
        className={className ? `outline-none ${className}` : "outline-none"}
        {...shell}
        onClick={(event) => {
          // DialogShell's ✕ (last item in its top row) has no click handler of its own.
          const close = event.currentTarget.firstElementChild?.lastElementChild;
          if (close && close.contains(event.target as Node)) onClose();
        }}
      />
    </Modal>
  );
}
