import { Section, SectionHead } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { education } from "@/lib/content";

export function Education() {
  return (
    <Section id="education" tone="deep">
      <SectionHead index="06" title="Education" kicker="Purdue / Mumbai" />

      <ul className="border-t border-ink">
        {education.map((e, i) => (
          <Reveal
            as="li"
            key={e.id}
            delay={i * 100}
            className="group grid gap-6 border-b border-ink py-9 lg:grid-cols-12 lg:items-baseline lg:gap-8 lg:py-11"
          >
            <div className="lg:col-span-7">
              <div className="flex flex-wrap items-center gap-3">
                {e.logo && (
                  <div className="print-block-soft relative h-16 w-16 shrink-0">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={e.logo}
                      alt={`${e.school} logo`}
                      className="absolute inset-0 h-full w-full object-contain p-2"
                    />
                  </div>
                )}
                <h3 className="display text-[clamp(1.4rem,3.2vw,2.1rem)]">
                  {e.school}
                </h3>
                {e.current && <span className="stamp">In progress</span>}
              </div>
              <p className="mt-2 font-mono text-[10.5px] uppercase tracking-label text-ink-faint">
                {e.division} &middot; {e.location}
              </p>
            </div>

            <div className="lg:col-span-3">
              <p className="label">Degree</p>
              <p className="mt-1.5 text-[13.5px] leading-snug text-ink-soft">
                {e.degree}
              </p>
            </div>

            <div className="lg:col-span-2 lg:text-right">
              <p className="label">Conferred</p>
              <p className="mt-1 font-mono text-[12px] tabular text-ink">
                {e.date}
              </p>
            </div>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
