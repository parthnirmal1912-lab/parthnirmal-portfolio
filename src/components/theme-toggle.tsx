"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

const STORAGE_KEY = "theme";

type Theme = "light" | "dark";

function applyTheme(theme: Theme) {
  const root = document.documentElement;
  root.classList.toggle("dark", theme === "dark");
  root.style.colorScheme = theme;
}

function readStored(): Theme | null {
  try {
    const v = localStorage.getItem(STORAGE_KEY);
    return v === "dark" || v === "light" ? v : null;
  } catch {
    return null;
  }
}

/** The `dark` class on <html> is the single source of truth. */
function subscribe(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["class"],
  });

  // Follow the OS setting until the visitor makes an explicit choice.
  const media = window.matchMedia("(prefers-color-scheme: dark)");
  const onSystem = (e: MediaQueryListEvent) => {
    if (!readStored()) applyTheme(e.matches ? "dark" : "light");
  };
  media.addEventListener("change", onSystem);

  return () => {
    observer.disconnect();
    media.removeEventListener("change", onSystem);
  };
}

const getSnapshot = (): Theme =>
  document.documentElement.classList.contains("dark") ? "dark" : "light";
const getServerSnapshot = (): Theme | null => null;

/**
 * Light / dark switch. The initial theme is applied before paint by the
 * inline script in layout.tsx (stored choice, else the OS preference).
 */
export function ThemeToggle({ className }: { className?: string }) {
  const theme = React.useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );

  const toggle = () => {
    const next: Theme = getSnapshot() === "dark" ? "light" : "dark";
    applyTheme(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {}
  };

  const label =
    theme === "dark" ? "Switch to light theme" : "Switch to dark theme";

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={label}
      title={label}
      aria-pressed={theme === null ? undefined : theme === "dark"}
      className={cn(
        "flex size-9 items-center justify-center border border-ink text-ink transition-colors hover:bg-ink hover:text-paper",
        className,
      )}
    >
      {/* Both icons render; CSS picks one, so server markup never mismatches. */}
      <Sun className="hidden size-4 dark:block" aria-hidden />
      <Moon className="size-4 dark:hidden" aria-hidden />
    </button>
  );
}
