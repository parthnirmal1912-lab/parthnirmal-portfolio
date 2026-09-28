import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CalendarDays, Info } from "lucide-react";
import { Section, SectionHead } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { experience, projects, siteUrl } from "@/lib/content";

/** Only projects that carry a case study get their own page. */
function getProject(slug: string) {
  return projects.find((p) => p.id === slug && p.caseStudy);
}

type ProjectPageProps = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.filter((p) => p.caseStudy).map((p) => ({ slug: p.id }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.blurb,
    alternates: { canonical: `${siteUrl}/projects/${project.id}` },
    openGraph: {
      title: project.title,
      description: project.blurb,
      url: `${siteUrl}/projects/${project.id}`,
    },
  };
}

export default async function ProjectPage({
  params,
}: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project || !project.caseStudy) notFound();
  const cs = project.caseStudy;

  // Show the partner's logo alongside the partner note when the matching
  // experience entry has one.
  const partnerLogo = experience.find(
    (e) => e.partner && project.subtitle.includes(e.partner),
  )?.partnerLogo;

  return (
    <div id="top">
      {/* ---------- Header ---------- */}
      <Section id="project" noTopBorder>
        <Reveal>
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-label text-ink-soft transition-colors hover:text-rust"
          >
            <ArrowLeft className="size-3" />
            All projects
          </Link>
        </Reveal>

        <Reveal delay={60}>
          <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-b border-ink bg-ink px-5 py-3 text-paper sm:px-7">
            <span className="font-mono text-[10px] uppercase tracking-label">
              {project.kind}
            </span>
            <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-label text-paper/60">
              <CalendarDays className="size-3" />
              {project.period}
            </span>
          </div>
        </Reveal>

        <div className="grid gap-10 pt-10 lg:grid-cols-12 lg:gap-12 lg:pt-14">
          <div className="lg:col-span-7">
            <Reveal delay={100}>
              <div className="flex items-start gap-4 sm:gap-6">
                <span className="display text-[clamp(3rem,7vw,5.5rem)] leading-none text-rust/25">
                  {project.index}
                </span>
                <div className="pt-1">
                  <h1 className="display text-[clamp(2.25rem,6vw,4.75rem)]">
                    {project.title}
                  </h1>
                  <p className="mt-3 text-[14px] leading-snug text-ink-soft">
                    {project.subtitle}
                  </p>
                  {project.status && (
                    <p className="stamp mt-5">
                      <span className="mr-1.5 size-1 animate-pulse bg-rust" />
                      {project.status}
                    </p>
                  )}
                </div>
              </div>
            </Reveal>

            <Reveal delay={160}>
              <p className="mt-8 border-l-2 border-rust pl-5 text-[15.5px] leading-relaxed text-ink">
                {project.blurb}
              </p>
            </Reveal>
          </div>

          <Reveal delay={200} className="lg:col-span-5">
            <dl className="grid grid-cols-2 border-t border-ink">
              {cs.facts.map((f) => (
                <div
                  key={f.label}
                  className="border-b border-rule py-4 pr-4 odd:border-r odd:border-r-rule even:pl-4"
                >
                  <dt className="label">{f.label}</dt>
                  <dd className="mt-1.5 text-[13.5px] font-medium leading-snug text-ink">
                    {f.value}
                  </dd>
                </div>
              ))}
            </dl>

            {cs.partnerNote && (
              <div className="mt-6 flex gap-3 border border-rule bg-paper-card p-4">
                <Info className="mt-0.5 size-4 shrink-0 text-rust" />
                <div>
                  {partnerLogo && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={partnerLogo}
                      alt=""
                      aria-hidden
                      className="mb-2.5 h-3 w-auto"
                    />
                  )}
                  <p className="text-[13px] leading-[1.65] text-ink-soft">
                    {cs.partnerNote}
                  </p>
                </div>
              </div>
            )}
          </Reveal>
        </div>
      </Section>

      {/* ---------- 01 Overview ---------- */}
      <Section id="overview" tone="deep">
        <SectionHead index="01" title="Overview" kicker="The project at a glance" />
        <Prose paragraphs={cs.overview} />
      </Section>

      {/* ---------- 02 The problem ---------- */}
      <Section id="problem">
        <SectionHead index="02" title="The problem" kicker="Why it needs framing first" />
        <Prose paragraphs={cs.problem} />

        {cs.problemQuestions && (
          <div className="mt-12 lg:ml-[33.333%] lg:pl-12">
            <Reveal>
              <p className="label mb-4">The questions to answer</p>
            </Reveal>
            <ol className="grid border-t border-ink sm:grid-cols-2">
              {cs.problemQuestions.map((q, i) => (
                <Reveal
                  as="li"
                  key={q}
                  delay={i * 70}
                  className="flex gap-4 border-b border-rule py-5 sm:odd:border-r sm:odd:pr-6 sm:even:pl-6"
                >
                  <span className="font-mono text-[10px] tabular text-rust">
                    Q{i + 1}
                  </span>
                  <p className="text-[14.5px] font-medium leading-snug text-ink">
                    {q}
                  </p>
                </Reveal>
              ))}
            </ol>
          </div>
        )}
      </Section>

      {/* ---------- 03 My role ---------- */}
      <Section id="role" tone="deep">
        <SectionHead index="03" title="My role" kicker="Package Generation team" />
        <Prose paragraphs={cs.role} />
      </Section>

      {/* ---------- 04 Contributions ---------- */}
      <Section id="contributions">
        <SectionHead
          index="04"
          title="Contributions"
          kicker="Defining the work / planning the build"
        />

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">
          {cs.contributions.map((c, ci) => (
            <Reveal key={c.id} delay={ci * 100}>
              <article className="h-full border border-ink bg-paper-card">
                <header className="flex items-baseline justify-between gap-3 bg-ink px-5 py-3 text-paper sm:px-7">
                  <span className="display text-[22px]">{c.label}</span>
                  <span className="font-mono text-[10px] uppercase tracking-label text-paper/60">
                    {c.title}
                  </span>
                </header>
                <div className="p-5 sm:p-7">
                  <p className="text-[15px] font-medium leading-snug text-ink">
                    {c.purpose}
                  </p>
                  <p className="label mt-6">Sections I wrote</p>
                  <ul className="mt-3 divide-y divide-rule border-y border-rule">
                    {c.items.map((item, ii) => (
                      <li key={item.lead} className="flex gap-4 py-4">
                        <span className="mt-1 font-mono text-[10px] tabular text-rust">
                          {String(ii + 1).padStart(2, "0")}
                        </span>
                        <p className="text-[14px] leading-[1.7] text-ink-soft">
                          <strong className="font-semibold text-ink">
                            {item.lead}
                          </strong>{" "}
                          {item.rest}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {cs.teamwork && (
          <Reveal>
            <p className="mt-10 max-w-3xl border-l-2 border-rust pl-5 text-[15px] leading-relaxed text-ink">
              {cs.teamwork}
            </p>
          </Reveal>
        )}
      </Section>

      {/* ---------- 05 Tools ---------- */}
      <Section id="tools" tone="deep">
        <SectionHead index="05" title="Tools" kicker="What the team works in" />
        <ul className="grid border-t border-ink sm:grid-cols-2">
          {cs.tools.map((t, i) => (
            <Reveal
              as="li"
              key={t.name}
              delay={i * 80}
              className="border-b border-rule py-6 sm:odd:border-r sm:odd:pr-8 sm:even:pl-8"
            >
              <p className="display text-[clamp(1.4rem,3vw,2rem)]">{t.name}</p>
              <p className="mt-2 text-[14px] leading-[1.7] text-ink-soft">
                {t.use}
              </p>
            </Reveal>
          ))}
        </ul>
      </Section>

      {/* ---------- Status ---------- */}
      <Section id="status" tone="ink">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <Reveal>
            <p className="font-mono text-[10px] uppercase tracking-label text-rust-glow">
              Status &mdash; {project.status ?? "Complete"}
            </p>
            <p className="mt-4 max-w-2xl display text-[clamp(1.6rem,4vw,3rem)]">
              {cs.statusNote}
            </p>
          </Reveal>
          <Reveal delay={80}>
            <Link
              href="/#projects"
              className="inline-flex w-fit items-center gap-2 border border-paper px-5 py-3 font-mono text-[11px] uppercase tracking-label text-paper transition-colors hover:border-rust hover:bg-rust"
            >
              <ArrowLeft className="size-3.5" />
              Back to all projects
            </Link>
          </Reveal>
        </div>
      </Section>
    </div>
  );
}

/** Editorial two-column prose: lead paragraph on the left, the rest on the right. */
function Prose({ paragraphs }: { paragraphs: string[] }) {
  const [lead, ...rest] = paragraphs;
  return (
    <div className="grid gap-6 lg:grid-cols-12 lg:gap-12">
      <Reveal className="lg:col-span-4">
        <p className="text-[18px] font-medium leading-snug text-ink">{lead}</p>
      </Reveal>
      <div className="space-y-5 lg:col-span-8">
        {rest.map((p, i) => (
          <Reveal key={i} delay={80 + i * 60}>
            <p className="text-[15px] leading-[1.75] text-ink-soft">{p}</p>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
