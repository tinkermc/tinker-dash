import {
  useEffect,
  useRef,
  useSyncExternalStore,
  type KeyboardEvent,
  type ReactNode,
} from "react";

let activeMenu: ReactNode = null;
const listeners = new Set<() => void>();

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

function getSnapshot() {
  return activeMenu;
}

export function openMenu(component: ReactNode) {
  activeMenu = component;
  listeners.forEach((listener) => listener());
}

export function closeMenu() {
  activeMenu = null;
  listeners.forEach((listener) => listener());
}

export function MenuHost() {
  const menu = useSyncExternalStore(subscribe, getSnapshot, getSnapshot);
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!menu) return;

    const previousFocus =
      document.activeElement instanceof HTMLElement
        ? document.activeElement
        : null;
    const appContent = document.getElementById("app-content");
    const wasInert = appContent?.inert ?? false;
    if (appContent) appContent.inert = true;

    const dialog = dialogRef.current;
    const focusableSelector =
      'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';
    const focusableElements = () =>
      Array.from(
        dialog?.querySelectorAll<HTMLElement>(focusableSelector) ?? [],
      ).filter((element) => element.getClientRects().length > 0);

    (focusableElements()[0] ?? dialog)?.focus();

    return () => {
      if (appContent) appContent.inert = wasInert;
      previousFocus?.focus();
    };
  }, [menu]);

  if (!menu) return null;

  function handleKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key === "Escape") {
      event.preventDefault();
      closeMenu();
      return;
    }

    if (event.key !== "Tab") return;

    const focusableElements = Array.from(
      dialogRef.current?.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])',
      ) ?? [],
    ).filter((element) => element.getClientRects().length > 0);

    if (focusableElements.length === 0) {
      event.preventDefault();
      dialogRef.current?.focus();
      return;
    }

    const first = focusableElements[0];
    const last = focusableElements[focusableElements.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
      <div
        ref={dialogRef}
        aria-label="Modal dialog"
        aria-modal="true"
        className="max-h-[90vh] max-w-full overflow-y-auto outline-none"
        onKeyDown={handleKeyDown}
        role="dialog"
        tabIndex={-1}
      >
        {menu}
      </div>
    </div>
  );
}
