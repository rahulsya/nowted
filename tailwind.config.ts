import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "dark-primary": "#181818",
        "dark-second": "#1C1C1C",
        "dark-third": "#242424",
        "dark-light": "#333333",
        "blue-dark": "#312EB5",
      },
    },
  },
  darkMode: ["selector", '[data-mode="dark"]'],
  plugins: [],
};
export default config;
