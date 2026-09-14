"use client";

import { sections } from "@/lib/content";
import { useActiveSection } from "@/lib/use-active-section";
import { cn } from "@/lib/utils";

const sectionIds = sections.map((s) => s.id);

/**
 * Fixed left-edge index. Collapsed to numbers and tick marks; each row
 * expands to reveal its label on hover.
 */
export function IndexRail() {
  const active = useActiveSection(sectionIds);

  return (
    <aside className="no-print fixed left-0 top-1/2 z-40 hidden -translate-y-1/2 xl:block">
      <ul className="flex flex-col gap-0 border-y border-r border-rule bg-paper/80">
        {sections.map((s) => {
          const isActive = active === s.id;
          return (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                aria-label={s.label}
                className={cn(
                  "group relative flex h-12 w-12 items-center justify-center transition-colors",
                  isActive ? "bg-ink text-paper" : "text-ink-faint hover:text-ink",
                )}
              >
                <span className="font-mono text-[10px] tabular tracking-widest">
                  {s.index}
                </span>
                <span
                  aria-hidden
                  className={cn(
                    "absolute left-full ml-px hidden whitespace-nowrap border border-ink bg-ink px-2.5 py-1.5 font-mono text-[10px] uppercase tracking-label text-paper group-hover:block",
                  )}
                >
                  {s.label}
                </span>
                {isActive && (
                  <span
                    aria-hidden
                    className="absolute inset-y-0 left-0 w-[3px] bg-rust"
                  />
                )}
              </a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
