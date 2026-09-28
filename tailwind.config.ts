import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-display)", "Helvetica Neue", "Arial", "sans-serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      colors: {
        // Every colour is an RGB-channel CSS variable (see globals.css) so the
        // light and dark themes share one set of class names, and opacity
        // modifiers like `text-paper/60` keep working.
        paper: {
          DEFAULT: "rgb(var(--paper) / <alpha-value>)",
          deep: "rgb(var(--paper-deep) / <alpha-value>)",
          card: "rgb(var(--paper-card) / <alpha-value>)",
        },
        ink: {
          DEFAULT: "rgb(var(--ink) / <alpha-value>)",
          soft: "rgb(var(--ink-soft) / <alpha-value>)",
          faint: "rgb(var(--ink-faint) / <alpha-value>)",
        },
        rule: "rgb(var(--rule) / <alpha-value>)",
        rust: {
          DEFAULT: "rgb(var(--rust) / <alpha-value>)",
          deep: "rgb(var(--rust-deep) / <alpha-value>)",
          /** Legible accent for use on the ink-coloured panels. */
          glow: "rgb(var(--rust-glow) / <alpha-value>)",
          tint: "rgb(var(--rust-tint) / <alpha-value>)",
        },
        moss: {
          DEFAULT: "rgb(var(--moss) / <alpha-value>)",
          tint: "rgb(var(--moss-tint) / <alpha-value>)",
        },
      },
      borderRadius: {
        none: "0px",
        sm: "2px",
        DEFAULT: "2px",
        md: "3px",
      },
      letterSpacing: {
        tightest: "-0.045em",
        label: "0.18em",
      },
      maxWidth: {
        reading: "68ch",
      },
      keyframes: {
        "rise-in": {
          from: { opacity: "0", transform: "translateY(14px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "wipe-in": {
          from: { transform: "scaleX(0)" },
          to: { transform: "scaleX(1)" },
        },
        ticker: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "rise-in": "rise-in 0.7s cubic-bezier(0.22,1,0.36,1) forwards",
        "wipe-in": "wipe-in 0.9s cubic-bezier(0.22,1,0.36,1) forwards",
        ticker: "ticker var(--ticker-duration, 44s) linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
