// A small "are you sure?" / "type a value" window.
//   const [prompt, ask] = usePrompt();
//   ask({ title: "Kick Steve?", confirmText: "Kick", input: { title: "Reason" }, onConfirm: (reason) => … });
//   …and render {prompt} somewhere in the page.
import { useState, type ReactNode } from "react";
import { Banner } from "@/ui/components/Banner";
import { InputField } from "@/ui/components/InputField";
import { PrimaryButton } from "@/ui/components/PrimaryButton";
import { errorMessage } from "../lib/agent";
import { inputClass } from "./fields";
import { ShellDialog } from "./Modal";

type ButtonColor = "green" | "red" | "gray" | "gray-warning" | "gray-dangerous" | "gray-success";

export type PromptOptions = {
  title: ReactNode;
  description?: ReactNode;
  icon?: ReactNode;
  tone?: "default" | "danger";
  confirmText: string;
  confirmColor?: ButtonColor;
  confirmIcon?: ReactNode;
  input?: {
    title: string;
    placeholder?: string;
    initial?: string;
    helper?: string;
    required?: boolean;
    type?: "text" | "number";
    trailing?: ReactNode;
  };
  // Throw to keep the window open; the error is shown inside it.
  onConfirm: (value: string) => Promise<unknown> | unknown;
};

export function usePrompt(): [ReactNode, (options: PromptOptions) => void] {
  const [options, setOptions] = useState<PromptOptions | null>(null);
  const element = options ? <PromptDialog options={options} onClose={() => setOptions(null)} /> : null;
  return [element, setOptions];
}

function PromptDialog({ options, onClose }: { options: PromptOptions; onClose: () => void }) {
  const [value, setValue] = useState(options.input?.initial ?? "");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const valid = !options.input?.required || value.trim() !== "";

  async function confirm(current = value) {
    if ((options.input?.required && current.trim() === "") || busy) return;
    setBusy(true);
    setError(null);
    try {
      await options.onConfirm(current.trim());
      onClose();
    } catch (err) {
      setError(errorMessage(err));
    } finally {
      setBusy(false);
    }
  }

  const input = options.input;
  const body = [
    input ? (
      <InputField
        key="input"
        required={input.required}
        title={input.title}
        helperText={input.helper}
        trailing={input.trailing}
        input={
          <input
            autoFocus
            className={inputClass}
            placeholder={input.placeholder}
            type={input.type ?? "text"}
            value={value}
            onChange={(event) => setValue(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === "Enter") void confirm(event.currentTarget.value);
            }}
          />
        }
      />
    ) : null,
    error ? <Banner key="error" variant="error" title={error} /> : null,
  ].filter(Boolean);

  return (
    <ShellDialog
      open
      onClose={onClose}
      title={options.title}
      description={options.description}
      icon={options.icon}
      tone={options.tone}
      footer={
        <>
          <PrimaryButton icon={null} text="Cancel" color="gray" onClick={onClose} />
          <PrimaryButton
            icon={options.confirmIcon ?? null}
            text={busy ? "Working…" : options.confirmText}
            color={options.confirmColor ?? "green"}
            disabled={!valid || busy}
            onClick={() => void confirm()}
          />
        </>
      }
    >
      {body.length ? body : undefined}
    </ShellDialog>
  );
}
