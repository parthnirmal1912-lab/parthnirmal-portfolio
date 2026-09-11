import { ArrowDownToLine, ArrowDownRight, Mail } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { profile, targetRoles } from "@/lib/content";

const specs = [
  { k: "Program", v: "MS Business Analytics & Information Management" },
  { k: "School", v: "Purdue University · Daniels School of Business" },
  { k: "Graduating", v: profile.graduation },
  { k: "Based in", v: profile.location },
  { k: "Seeking", v: profile.seeking },
] as const;

export function Cover() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div aria-hidden className="absolute inset-0 ledger-lines opacity-70" />
      <div
        aria-hidden
        className="absolute inset-y-0 right-0 hidden w-1/3 column-rules opacity-60 lg:block"
      />

      <div className="relative mx-auto w-full max-w-[1440px] px-5 pb-16 pt-12 sm:px-8 sm:pt-16 lg:px-12 lg:pb-24 lg:pt-20 xl:pl-24">
        {/* Masthead meta */}
        <Reveal className="flex flex-wrap items-baseline justify-between gap-3 border-b border-ink pb-3">
          <span className="font-mono text-[10px] uppercase tracking-label text-ink-faint">
            Portfolio &mdash; Edition 2026
          </span>
          <span className="font-mono text-[10px] uppercase tracking-label text-ink-faint">
            {profile.location}
          </span>
        </Reveal>

        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          {/* Headline */}
          <div className="lg:col-span-8">
            <Reveal
              as="span"
              delay={60}
              className="mt-8 inline-flex items-center gap-2.5"
            >
              <span className="size-1.5 animate-pulse bg-rust" />
              <span className="font-mono text-[10px] uppercase tracking-label text-rust">
                Available for Summer 2026
              </span>
            </Reveal>

            <h1 className="mt-6 display text-[clamp(2.75rem,10.5vw,8.25rem)]">
              {profile.headline.map((line, i) => (
                <Reveal
                  key={line}
                  as="span"
                  delay={120 + i * 90}
                  className="block"
                >
                  {i === 2 ? (
                    <span className="relative inline-block">
                      <span className="relative z-10 text-rust">{line}</span>
                      <span
                        aria-hidden
                        className="absolute inset-x-0 bottom-[0.12em] z-0 h-[0.14em] bg-rust/25"
                      />
                    </span>
                  ) : (
                    line
                  )}
                </Reveal>
              ))}
            </h1>

            <Reveal delay={480} className="mt-9 flex flex-wrap items-center gap-2">
              {targetRoles.map((role) => (
                <span
                  key={role}
                  className="border border-ink/25 px-2.5 py-1 font-mono text-[10px] uppercase tracking-label text-ink-soft"
                >
                  {role}
                </span>
              ))}
            </Reveal>

            <Reveal delay={540} className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href="#impact"
                className="group inline-flex items-center gap-2 border border-ink bg-ink px-5 py-3 font-mono text-[11px] uppercase tracking-label text-paper transition-colors hover:border-rust hover:bg-rust"
              >
                See the numbers
                <ArrowDownRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
              </a>
              <a
                href={profile.resumeUrl}
                download
                className="inline-flex items-center gap-2 border border-ink px-5 py-3 font-mono text-[11px] uppercase tracking-label transition-colors hover:bg-ink hover:text-paper"
              >
                <ArrowDownToLine className="size-3.5" />
                Download resume
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 px-1 py-3 font-mono text-[11px] uppercase tracking-label text-ink-soft transition-colors hover:text-rust"
              >
                <Mail className="size-3.5" />
                Email
              </a>
            </Reveal>
          </div>

          {/* Spec sheet */}
          <Reveal delay={260} className="lg:col-span-4 lg:pt-8">
            <div className="print-block-soft">
              <div className="flex items-center justify-between border-b border-rule px-4 py-2.5">
                <span className="label">Specification</span>
                <span className="font-mono text-[10px] tabular text-rust">00</span>
              </div>
              <dl className="divide-y divide-rule">
                {specs.map((s) => (
                  <div key={s.k} className="px-4 py-3.5">
                    <dt className="label">{s.k}</dt>
                    <dd className="mt-1.5 text-[13px] leading-snug text-ink">
                      {s.v}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <p className="mt-5 measure text-[13px]">{profile.standfirst}</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
