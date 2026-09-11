"use client";

import * as React from "react";

/**
 * Scroll-spy: returns the id of the section currently closest to the
 * top-third of the viewport.
 */
export function useActiveSection(ids: readonly string[]) {
  const [active, setActive] = React.useState(ids[0] ?? "");

  React.useEffect(() => {
    const onScroll = () => {
      const line = window.innerHeight * 0.32;
      let current = ids[0] ?? "";

      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.getBoundingClientRect().top <= line) current = id;
      }

      // Pin the last section once the page is scrolled to the bottom.
      const atBottom =
        window.innerHeight + window.scrollY >=
        document.body.scrollHeight - 80;
      if (atBottom) current = ids[ids.length - 1] ?? current;

      setActive(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [ids]);

  return active;
}

/** Returns document scroll progress from 0 to 1. */
export function useScrollProgress() {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(window.scrollY / max, 1) : 0);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return progress;
}
