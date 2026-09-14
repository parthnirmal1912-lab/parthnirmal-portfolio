import { Section, SectionHead } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { profile } from "@/lib/content";

const principles = [
  {
    n: "i",
    title: "Frame before you model",
    body: "A sharp problem statement beats a clever model. I start by agreeing on the question and what a decision-ready answer looks like.",
  },
  {
    n: "ii",
    title: "Validate the data first",
    body: "Fragmented sources hide their own assumptions. Cleaning and reconciling comes before any number leaves my desk.",
  },
  {
    n: "iii",
    title: "Write for the decision-maker",
    body: "Executives need the implication, the size, and the so-what. I build the appendix, but I lead with the call.",
  },
  {
    n: "iv",
    title: "Use AI as an accelerant",
    body: "I lean on AI tools to speed up analysis and surface insights faster — with the judgment to know when the output needs a second look.",
  },
] as const;

export function Profile() {
  return (
    <Section id="profile">
      <SectionHead index="01" title="Profile" kicker="Who I am / how I work" />

      <div className="grid gap-12 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-7">
          <Reveal>
            <p className="display text-[clamp(1.35rem,2.6vw,2.1rem)] leading-[1.15] text-ink">
              The analysis is only half the job. Framing the problem and landing
              the story with the people who own the roadmap is{" "}
              <span className="text-rust">the other half.</span>
            </p>
          </Reveal>

          <div className="mt-9 space-y-5">
            {profile.profileBody.map((para, i) => (
              <Reveal key={i} delay={80 + i * 70}>
                <p className="measure">{para}</p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={320} className="mt-10 flex flex-wrap gap-x-10 gap-y-4">
            <Stat value="3 yrs" label="Consulting & BA experience" />
            <Stat value="2 sectors" label="BFSI · Pharmacy" />
            <Stat value="2 countries" label="India · United States" />
          </Reveal>
        </div>

        <div className="lg:col-span-5">
          <Reveal delay={140}>
            <p className="label mb-5">Operating principles</p>
          </Reveal>
          <ol className="divide-y divide-rule border-y border-rule">
            {principles.map((p, i) => (
              <Reveal as="li" key={p.n} delay={180 + i * 80}>
                <div className="group flex gap-5 py-5 transition-colors">
                  <span className="mt-0.5 shrink-0 font-mono text-[10px] uppercase tracking-label text-rust">
                    {p.n}
                  </span>
                  <div>
                    <h3 className="font-display text-[15px] font-extrabold uppercase tracking-tight">
                      {p.title}
                    </h3>
                    <p className="mt-1.5 text-[13px] leading-relaxed text-ink-soft">
                      {p.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </Section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="display text-2xl">{value}</p>
      <p className="mt-1 font-mono text-[10px] uppercase tracking-label text-ink-faint">
        {label}
      </p>
    </div>
  );
}
