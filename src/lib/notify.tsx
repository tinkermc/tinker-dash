// Pop-up messages in the bottom-right corner, using the Subframe Toast design.
//   notify.success("Server started")
//   notify.error("Couldn't start", errorMessage(err))
import * as SubframeCore from "@subframe/core";
import type { ReactNode } from "react";
import { Toast } from "@/ui/components/Toast";
import OutlineCancel from "@/ui/icons/OutlineCancel";
import OutlineInfo from "@/ui/icons/OutlineInfo";
import RoundCheckCircleOutline from "@/ui/icons/RoundCheckCircleOutline";

type Variant = "success" | "error" | "info";

const icons: Record<Variant, ReactNode> = {
  success: <RoundCheckCircleOutline />,
  error: <OutlineCancel />,
  info: <OutlineInfo />,
};

function show(variant: Variant, title: ReactNode, description?: ReactNode) {
  return SubframeCore.toast.custom(
    (id) => (
      <Toast
        className="cursor-pointer"
        variant={variant}
        icon={icons[variant]}
        title={title}
        description={description}
        onClick={() => SubframeCore.toast.dismiss(id)}
      />
    ),
    { duration: variant === "error" ? 8000 : 4000 },
  );
}

export const notify = {
  success: (title: ReactNode, description?: ReactNode) => show("success", title, description),
  error: (title: ReactNode, description?: ReactNode) => show("error", title, description),
  info: (title: ReactNode, description?: ReactNode) => show("info", title, description),
};

// Put this once near the top of the app.
export function Toaster() {
  return <SubframeCore.Toaster position="bottom-right" visibleToasts={4} />;
}
