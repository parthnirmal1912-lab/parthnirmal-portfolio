import * as React from "react";
import { Reveal } from "@/components/reveal";
import { cn } from "@/lib/utils";

export function Section({
  id,
  children,
  className,
  tone = "paper",
}: {
  id: string;
  children: React.ReactNode;
  className?: string;
  tone?: "paper" | "deep" | "ink";
}) {
  return (
    <section
      id={id}
      className={cn(
        "relative border-t border-ink",
        tone === "paper" && "bg-paper",
        tone === "deep" && "bg-paper-deep",
        tone === "ink" && "bg-ink text-paper",
        className,
      )}
    >
      <div className="mx-auto w-full max-w-[1440px] px-5 py-20 sm:px-8 md:py-28 lg:px-12 xl:pl-24">
        {children}
      </div>
    </section>
  );
}

/**
 * Numbered editorial section header: oversized index, a hairline that
 * wipes in on scroll, then the title.
 */
export function SectionHead({
  index,
  title,
  kicker,
  onInk = false,
}: {
  index: string;
  title: string;
  kicker?: string;
  onInk?: boolean;
}) {
  return (
    <header className="mb-12 md:mb-16">
      <Reveal
        variant="rule"
        className={cn("h-px w-full", onInk ? "bg-paper/30" : "bg-ink")}
      >
        <span className="sr-only" />
      </Reveal>

      <div className="mt-5 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-3">
        <div className="flex items-baseline gap-4 sm:gap-6">
          <Reveal
            as="span"
            className={cn(
              "font-mono text-[11px] tabular tracking-label",
              onInk ? "text-rust-glow" : "text-rust",
            )}
          >
            {index}
          </Reveal>
          <Reveal as="span" delay={60}>
            <h2 className="display text-[clamp(2.25rem,6vw,4.5rem)]">
              {title}
            </h2>
          </Reveal>
        </div>

        {kicker && (
          <Reveal
            as="span"
            delay={120}
            className={cn(
              "font-mono text-[10px] uppercase tracking-label",
              onInk ? "text-paper/55" : "text-ink-faint",
            )}
          >
            {kicker}
          </Reveal>
        )}
      </div>
    </header>
  );
}
