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
      width: {
        50: '12.5rem',
        60: '15rem',
        80: '20rem',
        100: '25rem',
        120: '30rem',
        200: '50rem',
      },
      height: {
        50: '12.5rem',
        60: '15rem',
        80: '20rem',
        100: '25rem',
        120: '30rem',
        200: '50rem',
      },
      spacing: {
        50: '12.5rem',
        60: '15rem',
        80: '20rem',
        100: '25rem',
        120: '30rem',
        200: '50rem',
      },
    },
  },
  plugins: [],
};
export default config;
