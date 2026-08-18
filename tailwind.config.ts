import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        abyss: "#04060F",
        navy: {
          950: "#070B18",
          900: "#0A1024",
          800: "#0E1631",
          700: "#141F44",
          600: "#1B2A5C",
        },
        depth: {
          100: "#B8DCE0",
          300: "#5FA8B5",
          500: "#2E7787",
          700: "#1A4A5C",
          900: "#0E2A3A",
        },
        signal: {
          400: "#F5C978",
          500: "#E9A93C",
          600: "#D18A1E",
        },
        cream: {
          50: "#FDFCF9",
          100: "#F5F2EA",
          200: "#E8E4DA",
          300: "#DDD8CA",
          500: "#9C978A",
          600: "#77736A",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
      fontSize: {
        "display-xl": ["clamp(3rem, 9vw, 8.5rem)", { lineHeight: "0.94", letterSpacing: "-0.035em" }],
        "display-lg": ["clamp(2.5rem, 6.5vw, 5.5rem)", { lineHeight: "0.98", letterSpacing: "-0.03em" }],
        "display-md": ["clamp(2rem, 4.5vw, 3.5rem)", { lineHeight: "1.05", letterSpacing: "-0.025em" }],
        "display-sm": ["clamp(1.5rem, 3vw, 2.25rem)", { lineHeight: "1.15", letterSpacing: "-0.02em" }],
        eyebrow: ["0.6875rem", { lineHeight: "1", letterSpacing: "0.22em" }],
      },
      maxWidth: { prose: "68ch", sect: "1180px" },
      transitionTimingFunction: {
        keynote: "cubic-bezier(0.16, 1, 0.3, 1)",
        resolve: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
