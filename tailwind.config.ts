import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        abyss: "#050813",
        cream: { 50: "#F5F3EE", 100: "#EEECE6", 200: "#D9D6CE", 300: "#BDB9B0", 500: "#8D8A83", 600: "#6F6C66" },
        depth: { 100: "#9FC8D0", 300: "#6EA9B3" },
        signal: { 500: "#5FA8B5" },
      },
      fontFamily: { sans: ["Arial", "sans-serif"], display: ["Georgia", "serif"], mono: ["ui-monospace", "SFMono-Regular", "monospace"] },
      fontSize: { eyebrow: ["10px", { lineHeight: "1" }] },
    },
  },
  plugins: [],
};
export default config;
