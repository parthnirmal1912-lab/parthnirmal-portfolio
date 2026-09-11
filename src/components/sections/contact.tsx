import { ArrowUpRight, ArrowDownToLine } from "lucide-react";
import { Section, SectionHead } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { CopyEmail } from "@/components/copy-email";
import { profile } from "@/lib/content";

const channels = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    external: false,
  },
  {
    label: "Phone",
    value: profile.phone,
    href: `tel:+1${profile.phone.replace(/\D/g, "")}`,
    external: false,
  },
  {
    label: "LinkedIn",
    value: profile.linkedinHandle,
    href: profile.linkedin,
    external: true,
  },
  {
    label: "Resume",
    value: "PDF, one page",
    href: profile.resumeUrl,
    download: true,
  },
] as const;

export function Contact() {
  return (
    <Section id="contact" tone="ink">
      <div aria-hidden className="absolute inset-0 hatch opacity-30" />

      <div className="relative">
        <SectionHead
          index="07"
          title="Get in touch"
          kicker="Replies within a day"
          onInk
        />

        <div className="grid gap-12 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="display text-[clamp(1.5rem,3vw,2.5rem)] leading-[1.12] text-paper">
                Looking for a{" "}
                <span className="text-rust-glow">
                  product, project, or program management
                </span>{" "}
                intern who can size the opportunity before building the
                roadmap?
              </p>
            </Reveal>

            <Reveal delay={100}>
              <p className="mt-6 max-w-reading text-[14.5px] leading-[1.75] text-paper/65">
                I am graduating from Purdue in {profile.graduation} and am open
                to internship and full-time conversations. Happy to walk through
                any of the analyses above in detail.
              </p>
            </Reveal>

            <Reveal delay={180} className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href={`mailto:${profile.email}`}
                className="group inline-flex items-center gap-2 bg-rust px-5 py-3 font-mono text-[11px] uppercase tracking-label text-paper transition-colors hover:bg-paper hover:text-ink"
              >
                Start a conversation
                <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <CopyEmail email={profile.email} />
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <ul className="border-t border-paper/20">
              {channels.map((c, i) => (
                <Reveal as="li" key={c.label} delay={120 + i * 80}>
                  <a
                    href={c.href}
                    target={"external" in c && c.external ? "_blank" : undefined}
                    rel={
                      "external" in c && c.external
                        ? "noopener noreferrer"
                        : undefined
                    }
                    download={"download" in c && c.download ? true : undefined}
                    className="group flex items-center justify-between gap-6 border-b border-paper/20 py-6 transition-colors hover:bg-paper hover:px-5 hover:text-ink"
                  >
                    <span className="flex min-w-0 flex-col gap-1.5 sm:flex-row sm:items-baseline sm:gap-6">
                      <span className="w-24 shrink-0 font-mono text-[10px] uppercase tracking-label text-rust-glow group-hover:text-rust">
                        {c.label}
                      </span>
                      <span className="truncate font-display text-[clamp(1.05rem,2.2vw,1.5rem)] font-bold tracking-tight text-paper group-hover:text-ink">
                        {c.value}
                      </span>
                    </span>

                    {"download" in c && c.download ? (
                      <ArrowDownToLine className="size-4 shrink-0 text-paper/50 group-hover:text-ink" />
                    ) : (
                      <ArrowUpRight className="size-4 shrink-0 text-paper/50 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-ink" />
                    )}
                  </a>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}
