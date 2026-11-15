// Asks for the Agent's token (password). Shown when connecting without a saved
// token, or when the Agent says the token is wrong.
import { useState } from "react";
import { IconButton } from "@/ui/components/IconButton";
import { PrimaryButton } from "@/ui/components/PrimaryButton";
import { TokenSetupDialog } from "@/ui/components/TokenSetupDialog";
import RoundLogIn from "@/ui/icons/RoundLogIn";
import XBold from "@/ui/icons/XBold";
import { blockInputClass } from "./fields";
import { Modal } from "./Modal";

type Props = {
  open: boolean;
  error?: string | null;
  onSubmit: (token: string) => Promise<void>; // throw to keep the window open
  onClose: () => void;
};

export function TokenDialog({ open, error, onSubmit, onClose }: Props) {
  return (
    <Modal open={open} onClose={onClose}>
      <TokenForm error={error} onSubmit={onSubmit} onClose={onClose} />
    </Modal>
  );
}

function TokenForm({ error, onSubmit, onClose, ...rest }: Omit<Props, "open">) {
  const [token, setToken] = useState("");
  const [busy, setBusy] = useState(false);

  async function submit(current = token) {
    if (!current.trim() || busy) return;
    setBusy(true);
    try {
      await onSubmit(current.trim());
    } catch {
      // the error comes back in via the `error` prop
    } finally {
      setBusy(false);
    }
  }

  return (
    <TokenSetupDialog
      {...rest}
      className="outline-none"
      closeButton={<IconButton className="cursor-pointer" icon={<XBold />} color="gray" onClick={onClose} />}
      tokenInput={
        <div className="flex grow shrink-0 basis-0 flex-col items-start gap-1.5">
          <input
            autoFocus
            className={blockInputClass}
            placeholder="Paste the token"
            type="password"
            autoComplete="off"
            value={token}
            onChange={(event) => setToken(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === "Enter") void submit(event.currentTarget.value);
            }}
          />
          <span className="font-['Inter'] text-[12px] font-[400] leading-[16px] text-[#7a828e]">
            On the server PC: <span className="font-['Obel_Mono'] text-[#c4c9d1]">sudo cat /etc/tinker-agent.env</span>
          </span>
          {error ? (
            <span className="font-['Inter'] text-[12px] font-[500] leading-[16px] text-[#fca5a5]">{error}</span>
          ) : null}
        </div>
      }
      confirmButton={
        <PrimaryButton
          icon={<RoundLogIn />}
          text={busy ? "Connecting…" : "Connect"}
          disabled={busy || !token.trim()}
          onClick={() => void submit()}
        />
      }
      cancelButton={<PrimaryButton icon={null} text="Cancel" color="gray" onClick={onClose} />}
    />
  );
}
