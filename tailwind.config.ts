import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte,mdx}"],
  darkMode: "class", 
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;
