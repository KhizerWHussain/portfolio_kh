import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/Components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        back: "#ffffff",
        for: "#171717",
        primary: "#e31b6d",
        secondary: "#04c2c9",
        thirdly: "#252934",
      },
    },
  },
  plugins: [],
  experimental: {
    optimizeUniversalDefaults: true,
    matchVariant: true,
  },
};
export default config;
