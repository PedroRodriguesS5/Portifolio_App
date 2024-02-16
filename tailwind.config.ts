import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "button-color": "#607D8F",
        "bg-primary": "#252525",
        "text-color": "#ffc82f",
        "bg-secondary": "#606060",
      },
    },
  },
  plugins: [],
};
export default config;
