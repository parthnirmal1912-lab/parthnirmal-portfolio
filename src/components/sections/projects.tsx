import { Award, CalendarDays } from "lucide-react";
import { Section, SectionHead } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { projects } from "@/lib/content";

export function Projects() {
  return (
    <Section id="projects" tone="deep">
      <SectionHead index="04" title="Projects" kicker="Built, shipped, ranked" />

      <div className="space-y-10 lg:space-y-14">
        {projects.map((p, i) => (
          <Reveal key={p.id} delay={i * 100}>
            <article className="print-block">
              {/* Plate header */}
              <header className="flex flex-wrap items-center justify-between gap-3 border-b border-ink bg-ink px-5 py-3 text-paper sm:px-7">
                <span className="font-mono text-[10px] uppercase tracking-label">
                  {p.kind}
                </span>
                <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-label text-paper/60">
                  <CalendarDays className="size-3" />
                  {p.period}
                </span>
              </header>

              <div className="grid gap-8 p-5 sm:p-7 lg:grid-cols-12 lg:gap-10 lg:p-9">
                <div className="lg:col-span-5">
                  <div className="flex items-start gap-4">
                    <span className="display text-[clamp(2.5rem,5vw,3.5rem)] leading-none text-rust/25">
                      {p.index}
                    </span>
                    <div className="pt-1">
                      <h3 className="display text-[clamp(1.6rem,3.4vw,2.4rem)]">
                        {p.title}
                      </h3>
                      <p className="mt-2 text-[13px] leading-snug text-ink-soft">
                        {p.subtitle}
                      </p>
                    </div>
                  </div>

                  {p.accolade && (
                    <p className="mt-5 inline-flex items-center gap-2 bg-rust px-3 py-1.5 font-mono text-[10px] uppercase tracking-label text-paper">
                      <Award className="size-3" />
                      {p.accolade}
                    </p>
                  )}

                  <p className="mt-6 text-[14px] leading-[1.7] text-ink-soft">
                    {p.blurb}
                  </p>

                  <div className="mt-7">
                    <p className="label">Stack</p>
                    <div className="mt-2.5 flex flex-wrap gap-1.5">
                      {p.stack.map((s) => (
                        <span
                          key={s}
                          className="border border-ink/20 px-2 py-1 font-mono text-[9.5px] uppercase tracking-label text-ink-soft"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-7">
                  <p className="label mb-4">What I did</p>
                  <ul className="divide-y divide-rule border-y border-rule">
                    {p.bullets.map((b, bi) => (
                      <li key={bi} className="flex gap-4 py-5">
                        <span className="mt-1 font-mono text-[10px] tabular text-rust">
                          {String(bi + 1).padStart(2, "0")}
                        </span>
                        <p className="text-[14px] leading-[1.7] text-ink-soft">
                          {b}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
