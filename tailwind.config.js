// tailwind.config.js
import { heroui } from "@heroui/react";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [
    heroui({
      layout: {}, // common layout options
      themes: {
        light: {
          colors: {
            primary: "#009688",
          },
        },
        dark: {
          colors: {
            primary: "#009688",
          },
        },
      },
    }),
  ],
};
