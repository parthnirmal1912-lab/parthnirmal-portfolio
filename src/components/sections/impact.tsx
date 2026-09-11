import { Section, SectionHead } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { Counter } from "@/components/counter";
import { impactMetrics } from "@/lib/content";
import { cn } from "@/lib/utils";

export function Impact() {
  return (
    <Section id="impact" tone="ink">
      <div aria-hidden className="absolute inset-0 hatch opacity-40" />

      <div className="relative">
        <SectionHead
          index="02"
          title="Impact"
          kicker="Selected numbers, with receipts"
          onInk
        />

        <div className="grid border-l border-t border-paper/15 sm:grid-cols-2 lg:grid-cols-3">
          {impactMetrics.map((m, i) => (
            <Reveal
              key={m.label}
              delay={i * 70}
              className={cn(
                "group relative border-b border-r border-paper/15 p-6 transition-colors hover:bg-paper/[0.04] sm:p-7",
                m.featured && "sm:col-span-2 lg:col-span-1 lg:row-span-1",
              )}
            >
              <p
                className={cn(
                  "display leading-none",
                  m.featured
                    ? "text-[clamp(3rem,7vw,5rem)] text-rust-glow"
                    : "text-[clamp(2.5rem,5.5vw,3.75rem)] text-paper",
                )}
              >
                <Counter
                  value={m.value}
                  prefix={m.prefix}
                  suffix={m.suffix}
                  decimals={m.decimals}
                  durationMs={1200 + i * 120}
                />
              </p>

              <h3 className="mt-4 font-display text-[13px] font-bold uppercase tracking-tight text-paper">
                {m.label}
              </h3>

              <p className="mt-2.5 text-[12.5px] leading-relaxed text-paper/60">
                {m.note}
              </p>

              <p className="mt-5 font-mono text-[9.5px] uppercase tracking-label text-paper/40">
                {m.source}
              </p>

              <span
                aria-hidden
                className="absolute bottom-0 left-0 h-[3px] w-0 bg-rust transition-all duration-500 group-hover:w-full"
              />
            </Reveal>
          ))}
        </div>

        <Reveal delay={480}>
          <p className="mt-8 max-w-reading font-mono text-[10.5px] leading-relaxed uppercase tracking-label text-paper/45">
            Figures reflect analyses delivered on client and academic
            engagements. Detail available on request.
          </p>
        </Reveal>
      </div>
    </Section>
  );
}
