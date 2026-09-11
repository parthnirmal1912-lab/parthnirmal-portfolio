import { MapPin } from "lucide-react";
import { Section, SectionHead } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { experience } from "@/lib/content";

export function Experience() {
  return (
    <Section id="experience">
      <SectionHead
        index="03"
        title="Experience"
        kicker="Three roles / two sectors"
      />

      <div className="space-y-0">
        {experience.map((job, i) => (
          <article
            key={job.id}
            className="grid gap-8 border-t border-ink py-12 first:border-t-0 first:pt-0 lg:grid-cols-12 lg:gap-10 lg:py-16"
          >
            {/* Meta column */}
            <Reveal className="lg:col-span-4">
              <div className="lg:sticky lg:top-24">
                <div className="flex items-baseline gap-3">
                  <span className="font-mono text-[10px] tabular tracking-label text-rust">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {job.current && (
                    <span className="stamp">
                      <span className="mr-1.5 size-1 bg-rust" />
                      Current
                    </span>
                  )}
                </div>

                <h3 className="mt-3 display text-[clamp(1.5rem,3.4vw,2.25rem)]">
                  {job.org}
                </h3>

                {job.client && (
                  <p className="mt-1.5 font-mono text-[10.5px] uppercase tracking-label text-ink-soft">
                    Client &mdash; {job.client}
                  </p>
                )}

                <p className="mt-4 text-[14px] font-medium leading-snug text-ink">
                  {job.title}
                </p>

                <div className="mt-4 flex flex-col gap-1.5 font-mono text-[10px] uppercase tracking-label text-ink-faint">
                  <span className="tabular">{job.period}</span>
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin className="size-3" />
                    {job.location}
                  </span>
                </div>

                <div className="mt-5 flex flex-wrap gap-1.5">
                  {job.tags.map((t) => (
                    <span
                      key={t}
                      className="border border-rule bg-paper-card px-2 py-1 font-mono text-[9.5px] uppercase tracking-label text-ink-soft"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Detail column */}
            <div className="lg:col-span-8">
              <Reveal delay={80}>
                <p className="border-l-2 border-rust pl-5 text-[15px] leading-relaxed text-ink">
                  {job.summary}
                </p>
              </Reveal>

              <ul className="mt-8 divide-y divide-rule border-y border-rule">
                {job.bullets.map((b, bi) => (
                  <Reveal as="li" key={b.lead} delay={140 + bi * 70}>
                    <div className="flex gap-4 py-5 sm:gap-6">
                      <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rotate-45 bg-ink" />
                      <p className="text-[14.5px] leading-[1.7] text-ink-soft">
                        <strong className="font-semibold text-ink">
                          {b.lead}
                        </strong>{" "}
                        {b.rest}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
