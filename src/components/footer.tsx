import { ArrowUp } from "lucide-react";
import { profile } from "@/lib/content";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-ink bg-paper-deep">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-6 px-5 py-10 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-12 xl:pl-24">
        <div className="space-y-1.5">
          <p className="display text-lg">{profile.shortName}</p>
          <p className="font-mono text-[10px] uppercase tracking-label text-ink-faint">
            {profile.location} &middot; Open to full-time roles — Jan 2027
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-[10px] uppercase tracking-label text-ink-faint">
          <span>&copy; {year}</span>
          <span className="hidden sm:inline">Set in Archivo &amp; IBM Plex Mono</span>
          <a
            href="#top"
            className="no-print inline-flex items-center gap-1.5 text-ink transition-colors hover:text-rust"
          >
            <ArrowUp className="size-3" />
            Back to top
          </a>
        </div>
      </div>
    </footer>
  );
}
