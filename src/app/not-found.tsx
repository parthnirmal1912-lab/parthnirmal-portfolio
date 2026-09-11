import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[70vh] w-full max-w-[1440px] flex-col justify-center px-5 py-24 sm:px-8 lg:px-12 xl:pl-24">
      <p className="font-mono text-[10px] uppercase tracking-label text-rust">
        Error 404
      </p>
      <h1 className="mt-4 display text-[clamp(3rem,12vw,9rem)]">
        Page
        <br />
        not found
      </h1>
      <p className="mt-6 measure">
        That page is not part of this edition. Everything lives on one page
        here.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex w-fit items-center gap-2 border border-ink bg-ink px-5 py-3 font-mono text-[11px] uppercase tracking-label text-paper transition-colors hover:border-rust hover:bg-rust"
      >
        <ArrowLeft className="size-3.5" />
        Back to the cover
      </Link>
    </div>
  );
}
