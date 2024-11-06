// tailwind.config.js
import { nextui } from "@nextui-org/theme";

// const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [
    nextui({
      layout: {}, // common layout options
      themes: {
        light: {
          layout: {}, // light theme layout options
          inputs: {
            color: "red",
          },
        },
        dark: {
          layout: {}, // dark theme layout options
          // ...
        },
        // ... custom themes
      },
    }),
  ],
};
