"use client";

import * as React from "react";
import { Section, SectionHead } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { skillGroups } from "@/lib/content";
import { cn } from "@/lib/utils";

export function Capabilities() {
  const [active, setActive] = React.useState(0);
  const group = skillGroups[active];

  return (
    <Section id="capabilities">
      <SectionHead
        index="05"
        title="Capabilities"
        kicker="Four groups / twenty-two skills"
      />

      <div className="grid gap-8 border-t border-ink lg:grid-cols-12 lg:gap-12">
        <Reveal as="div" className="lg:col-span-4">
          <div
            role="tablist"
            aria-label="Skill categories"
            className="flex overflow-x-auto border-b border-ink lg:flex-col lg:overflow-visible lg:border-b-0"
          >
            {skillGroups.map((g, i) => {
              const isActive = i === active;
              return (
                <button
                  key={g.id}
                  type="button"
                  role="tab"
                  id={`skills-tab-${g.id}`}
                  aria-selected={isActive}
                  aria-controls={`skills-panel-${g.id}`}
                  onClick={() => setActive(i)}
                  className={cn(
                    "group flex shrink-0 items-center gap-3 border-b-2 px-5 py-4 text-left transition-colors lg:border-b lg:border-r-2 lg:last:border-b-0",
                    isActive
                      ? "border-rust bg-ink text-paper"
                      : "border-transparent bg-paper text-ink hover:bg-paper-deep",
                  )}
                >
                  <span
                    className={cn(
                      "flex size-6 shrink-0 items-center justify-center font-mono text-[10px] transition-colors",
                      isActive
                        ? "bg-rust text-paper"
                        : "bg-ink text-paper group-hover:bg-rust",
                    )}
                  >
                    {g.number}
                  </span>
                  <span className="whitespace-nowrap font-display text-[13px] font-extrabold uppercase tracking-tight sm:whitespace-normal">
                    {g.title}
                  </span>
                </button>
              );
            })}
          </div>
        </Reveal>

        <div
          key={group.id}
          role="tabpanel"
          id={`skills-panel-${group.id}`}
          aria-labelledby={`skills-tab-${group.id}`}
          className="lg:col-span-8"
        >
          <Reveal>
            <p className="label mb-4">
              {String(active + 1).padStart(2, "0")} /{" "}
              {String(skillGroups.length).padStart(2, "0")} &mdash; {group.title}
            </p>
            <ul className="grid gap-x-10 border-t border-ink sm:grid-cols-2">
              {group.skills.map((skill) => (
                <li
                  key={skill}
                  className="flex items-baseline gap-2.5 border-b border-rule py-3 text-[13.5px] leading-snug text-ink-soft transition-colors hover:text-ink"
                >
                  <span className="mt-[6px] size-[3px] shrink-0 bg-rust" />
                  {skill}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
