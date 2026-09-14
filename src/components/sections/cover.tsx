import Image from "next/image";
import { ArrowDownToLine, ArrowUpRight, Linkedin, Mail } from "lucide-react";
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

            <Reveal delay={140} className="mt-7 block">
              <p className="max-w-2xl font-sans text-[clamp(1.5rem,3.2vw,2.5rem)] font-medium leading-[1.3] text-ink">
                {profile.headline}
              </p>
            </Reveal>

            <Reveal delay={260} className="mt-9 flex flex-wrap items-center gap-2">
              {targetRoles.map((role) => (
                <span
                  key={role}
                  className="border border-ink/25 px-2.5 py-1 font-mono text-[10px] uppercase tracking-label text-ink-soft"
                >
                  {role}
                </span>
              ))}
            </Reveal>

            <Reveal delay={320} className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 border border-ink bg-ink px-5 py-3 font-mono text-[11px] uppercase tracking-label text-paper transition-colors hover:border-rust hover:bg-rust"
              >
                Get in touch
                <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href="#impact"
                className="inline-flex items-center gap-2 border border-ink px-5 py-3 font-mono text-[11px] uppercase tracking-label transition-colors hover:bg-ink hover:text-paper"
              >
                See the numbers
              </a>
            </Reveal>
          </div>

          {/* Profile card */}
          <Reveal delay={200} className="lg:col-span-4 lg:pt-8">
            <div className="print-block-soft">
              <div className="flex items-center justify-between border-b border-rule px-4 py-2.5">
                <span className="label">Specification</span>
                <span className="font-mono text-[10px] tabular text-rust">00</span>
              </div>

              <div className="relative aspect-[3/4] w-full overflow-hidden border-b border-rule bg-paper-deep">
                <Image
                  src="/avatar.jpg"
                  alt={profile.name}
                  fill
                  priority
                  sizes="(min-width: 1024px) 320px, 60vw"
                  className="object-cover"
                />
              </div>

              <div className="border-b border-rule px-4 py-3.5">
                <p className="display text-lg leading-none">{profile.shortName}</p>
                <p className="mt-1.5 font-mono text-[10px] uppercase tracking-label text-ink-faint">
                  {profile.role}
                </p>
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

              <div className="grid grid-cols-2 divide-x divide-rule border-t border-rule">
                <a
                  href={`mailto:${profile.email}`}
                  className="flex items-center justify-center gap-2 py-3 font-mono text-[10px] uppercase tracking-label text-ink-soft transition-colors hover:bg-paper-deep hover:text-rust"
                >
                  <Mail className="size-3.5" />
                  Email
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 font-mono text-[10px] uppercase tracking-label text-ink-soft transition-colors hover:bg-paper-deep hover:text-rust"
                >
                  <Linkedin className="size-3.5" />
                  LinkedIn
                </a>
              </div>
              <a
                href={profile.resumeUrl}
                download
                className="flex items-center justify-center gap-2 border-t border-rule bg-ink py-3.5 font-mono text-[10px] uppercase tracking-label text-paper transition-colors hover:bg-rust"
              >
                <ArrowDownToLine className="size-3.5" />
                Download resume
              </a>
            </div>

            <p className="mt-5 measure text-[13px]">{profile.standfirst}</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
