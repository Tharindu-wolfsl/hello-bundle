// tailwind.config.js
const { heroui } = require("@heroui/theme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/@heroui/theme/dist/components/(button|navbar|ripple|spinner).js",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        urbanist: ["var(--font-urbanist)", "sans-serif"],
      },
    },
  },
  darkMode: "class",
  plugins: [heroui()],
};
