"use client";

import * as React from "react";
import { ArrowDownToLine, Menu, Search, X } from "lucide-react";
import { profile, sections } from "@/lib/content";
import { useActiveSection, useScrollProgress } from "@/lib/use-active-section";
import { cn } from "@/lib/utils";

const sectionIds = sections.map((s) => s.id);

export function TopBar() {
  const [open, setOpen] = React.useState(false);
  const [searchOpen, setSearchOpen] = React.useState(false);
  const [query, setQuery] = React.useState("");
  const searchRef = React.useRef<HTMLDivElement>(null);
  const searchInputRef = React.useRef<HTMLInputElement>(null);
  const active = useActiveSection(sectionIds);
  const progress = useScrollProgress();

  React.useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const closeSearch = React.useCallback(() => {
    setSearchOpen(false);
    setQuery("");
  }, []);

  React.useEffect(() => {
    if (!searchOpen) return;
    searchInputRef.current?.focus();
    const onClick = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        closeSearch();
      }
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && closeSearch();
    document.addEventListener("mousedown", onClick);
    window.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      window.removeEventListener("keydown", onKey);
    };
  }, [searchOpen, closeSearch]);

  const filteredSections = sections.filter((s) =>
    s.label.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <>
      <header className="no-print fixed inset-x-0 top-0 z-50 border-b border-ink bg-paper/95 backdrop-blur-[2px]">
        <div className="flex h-14 items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
          <a href="#top" className="group flex items-baseline gap-2.5">
            <span className="display text-[15px] leading-none">
              {profile.lastName}
              <span className="text-rust">,</span> {profile.firstName}
            </span>
            <span className="hidden font-mono text-[10px] uppercase tracking-label text-ink-faint sm:inline">
              / Purdue BAIM &rsquo;26
            </span>
          </a>

          <nav className="hidden items-center gap-1 md:flex">
            {sections.slice(1).map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                aria-label={s.label}
                className={cn(
                  "group flex items-center gap-1.5 px-2 py-1.5 font-mono text-[10px] uppercase tracking-label transition-colors",
                  active === s.id
                    ? "text-rust"
                    : "text-ink-faint hover:text-ink",
                )}
              >
                <span className="tabular">{s.index}</span>
                <span className="hidden lg:inline">{s.label}</span>
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <div ref={searchRef} className="relative">
              <button
                type="button"
                onClick={() => (searchOpen ? closeSearch() : setSearchOpen(true))}
                aria-label="Jump to a section"
                aria-expanded={searchOpen}
                className={cn(
                  "flex size-9 items-center justify-center border border-ink transition-colors hover:bg-ink hover:text-paper",
                  searchOpen ? "bg-ink text-paper" : "text-ink",
                )}
              >
                <Search className="size-4" />
              </button>

              {searchOpen && (
                <div className="print-block absolute right-0 top-[calc(100%+8px)] w-64 bg-paper-card">
                  <div className="border-b border-rule px-3 py-2.5">
                    <input
                      ref={searchInputRef}
                      type="text"
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                      placeholder="Jump to section&hellip;"
                      className="w-full bg-transparent font-mono text-[11px] uppercase tracking-label text-ink placeholder:text-ink-faint focus:outline-none"
                    />
                  </div>
                  <ul className="max-h-72 overflow-y-auto">
                    {filteredSections.length === 0 && (
                      <li className="px-3 py-3 font-mono text-[11px] uppercase tracking-label text-ink-faint">
                        No match
                      </li>
                    )}
                    {filteredSections.map((s) => (
                      <li key={s.id}>
                        <a
                          href={`#${s.id}`}
                          onClick={closeSearch}
                          className="flex items-baseline gap-3 border-b border-rule px-3 py-2.5 font-mono text-[11px] uppercase tracking-label text-ink-soft transition-colors last:border-b-0 hover:bg-paper-deep hover:text-rust"
                        >
                          <span className="tabular text-rust">{s.index}</span>
                          {s.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <a
              href="#contact"
              className="hidden items-center gap-1.5 border border-ink px-3 py-2 font-mono text-[10px] uppercase tracking-label text-ink transition-colors hover:bg-ink hover:text-paper sm:inline-flex"
            >
              Contact
            </a>

            <a
              href={profile.resumeUrl}
              download
              className="hidden items-center gap-1.5 border border-ink bg-ink px-3 py-2 font-mono text-[10px] uppercase tracking-label text-paper transition-colors hover:bg-rust hover:border-rust sm:inline-flex"
            >
              <ArrowDownToLine className="size-3" />
              Resume
            </a>
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className="flex size-9 items-center justify-center border border-ink text-ink transition-colors hover:bg-ink hover:text-paper md:hidden"
            >
              <Menu className="size-4" />
            </button>
          </div>
        </div>

        <div
          aria-hidden
          className="h-[2px] origin-left bg-rust transition-transform duration-150 ease-out"
          style={{ transform: `scaleX(${progress})` }}
        />
      </header>

      {/* Mobile overlay index */}
      <div
        className={cn(
          "no-print fixed inset-0 z-[60] bg-paper transition-opacity duration-300 md:hidden",
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0",
        )}
      >
        <div className="flex h-14 items-center justify-between border-b border-ink px-4">
          <span className="label">Index</span>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="flex size-9 items-center justify-center border border-ink transition-colors hover:bg-ink hover:text-paper"
          >
            <X className="size-4" />
          </button>
        </div>

        <nav className="flex flex-col">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              onClick={() => setOpen(false)}
              className="group flex items-baseline gap-4 border-b border-rule px-4 py-5 transition-colors hover:bg-paper-deep"
            >
              <span className="font-mono text-[10px] tabular text-rust">
                {s.index}
              </span>
              <span className="display text-2xl">{s.label}</span>
            </a>
          ))}
          <a
            href={profile.resumeUrl}
            download
            onClick={() => setOpen(false)}
            className="flex items-center gap-3 bg-ink px-4 py-5 text-paper"
          >
            <ArrowDownToLine className="size-4" />
            <span className="display text-2xl">Resume</span>
          </a>
        </nav>
      </div>
    </>
  );
}
