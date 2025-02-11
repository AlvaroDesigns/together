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
    extend: {
      colors: {
        teal: {
          DEFAULT: "#009688",
          hover: "#00796b",
        },
      },
    },
  },
  darkMode: "class",
  plugins: [
    heroui({
      layout: {}, // common layout options
      themes: {
        light: {
          colors: {
            primary: "#009688",
            "primary-hover": "#1d4ed8", // Azul más oscuro al hacer hover
            focus: "#009688",
            hover: "#009688",
          },
        },
        dark: {
          colors: {
            primary: {
              DEFAULT: "#009688",
              focus: "#009688",
              hover: "#009688",
            },
            focus: "#009688",
            hover: "#009688",
          },
        },
      },
    }),
  ],
};
