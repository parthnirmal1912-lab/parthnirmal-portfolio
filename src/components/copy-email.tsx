"use client";

import * as React from "react";
import { Check, Copy } from "lucide-react";

export function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = React.useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      // Clipboard unavailable (insecure context or denied permission).
    }
  };

  return (
    <button
      type="button"
      onClick={copy}
      className="no-print inline-flex items-center gap-2 border border-paper/30 px-3 py-2 font-mono text-[10px] uppercase tracking-label text-paper/75 transition-colors hover:border-rust hover:bg-rust hover:text-paper"
    >
      {copied ? <Check className="size-3" /> : <Copy className="size-3" />}
      {copied ? "Copied" : "Copy email"}
    </button>
  );
}
