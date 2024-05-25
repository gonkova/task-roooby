import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
     
      fontFamily: {
        grotesk: ["Inter", "sans-serif"],
      },
      colors: {
        blue: '#150050',
        custom1: '#000000',
        bgcustom: '#f4f4f4',
        custom2: '#1e0a57',
        custom3: '#ffe377',
        green: '#00cc61',
        green1: '#EBFBF3',
        silver: '#404040',
        gray: '#787878',
        gray2: '#777777',
        gray3: '#DCDCDC',
        bgcustom1: '#004050',
        facebook: '#0866ff',
        twitter: '#1c96e9',
        linkedin: '#0a66c2',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
