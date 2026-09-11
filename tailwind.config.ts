import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-display)", "Helvetica Neue", "Arial", "sans-serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      colors: {
        paper: {
          DEFAULT: "#F3EFE7",
          deep: "#E9E3D7",
          card: "#FBF9F4",
        },
        ink: {
          DEFAULT: "#15120E",
          soft: "#4C463C",
          faint: "#8A8275",
        },
        rule: "#D6CEBF",
        rust: {
          DEFAULT: "#BE4218",
          deep: "#8F3211",
          /** Legible accent for use on the ink-coloured panels. */
          glow: "#E8683C",
          tint: "#F0D9CE",
        },
        moss: {
          DEFAULT: "#2E3B2C",
          tint: "#DDE2D6",
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
