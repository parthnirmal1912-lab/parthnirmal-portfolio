import type { CSSProperties } from "react";
import { tickerItems } from "@/lib/content";

/**
 * Ticker tape of headline numbers. Duplicated once so the CSS translate
 * of -50% loops seamlessly.
 */
export function Ticker() {
  const items = [...tickerItems, ...tickerItems];

  return (
    <div
      aria-hidden="true"
      className="no-print group/ticker relative overflow-hidden border-y border-ink bg-ink py-3 text-paper"
    >
      <div className="ticker-mask">
        <div
          className="ticker-track"
          style={{ "--ticker-duration": "52s" } as CSSProperties}
        >
          {items.map((item, i) => (
            <span
              key={`${item}-${i}`}
              className="flex shrink-0 items-center gap-6 whitespace-nowrap px-6 font-mono text-[11px] uppercase tracking-label"
              aria-hidden={i >= tickerItems.length}
            >
              <span className="size-1 shrink-0 bg-rust" />
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
