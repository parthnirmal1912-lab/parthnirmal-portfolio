import { Section, SectionHead } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { skillGroups } from "@/lib/content";

export function Capabilities() {
  return (
    <Section id="capabilities">
      <SectionHead
        index="05"
        title="Capabilities"
        kicker="Four groups / twenty-two skills"
      />

      <div className="grid border-t border-ink sm:grid-cols-2 lg:grid-cols-4">
        {skillGroups.map((group, i) => (
          <Reveal
            key={group.id}
            delay={i * 90}
            className="group border-b border-ink px-0 py-8 sm:border-r sm:px-6 sm:first:pl-0 lg:py-10 [&:nth-child(2n)]:sm:border-r-0 lg:[&:nth-child(2n)]:border-r lg:[&:nth-child(4n)]:border-r-0"
          >
            <div className="flex items-baseline gap-3">
              <span className="flex size-6 items-center justify-center bg-ink font-mono text-[10px] text-paper transition-colors group-hover:bg-rust">
                {group.number}
              </span>
              <h3 className="font-display text-[15px] font-extrabold uppercase tracking-tight">
                {group.title}
              </h3>
            </div>

            <ul className="mt-6 space-y-0">
              {group.skills.map((skill) => (
                <li
                  key={skill}
                  className="flex items-baseline gap-2.5 border-b border-rule py-2.5 text-[13.5px] leading-snug text-ink-soft transition-colors hover:text-ink"
                >
                  <span className="mt-[6px] size-[3px] shrink-0 bg-rust" />
                  {skill}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
