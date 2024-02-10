import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    tokens: {
      colors: {
        primary: {
          100: { value: "#3BB77E" },
          200: { value: "#BCE3C9" },
          300: { value: "#ECFFEC" },
          400: { value: "#DEF9EC" },
        },
        secondary: {
          100: { value: "#253D4E" },
          200: { value: "#FDC040" },
          300: { value: "#81B13D" },
          400: { value: "#7E7E7E" },
          500: { value: "#FFFFFF" },
          600: { value: "#838383" },
          700: { value: "#B6B6B6" },
          800: { value: "#ECECEC" },
          900: { value: "#F2F3F4" },
        },
        card_bg: {
          100: { value: "#F2FCE4" },
          200: { value: "#FFFCEB" },
          300: { value: "#ECFFEC" },
          400: { value: "#FEEFEA" },
          500: { value: "#FFF3EB" },
          600: { value: "#FFF3FF" },
          700: { value: "#F2FCE4" },
          800: { value: "#FEEFEA" },
          900: { value: "#FFFCEB" },
          1000: { value: "#FEEFEA" },
          1100: { value: "#253D4E" },
          1200: { value: "#253D4E" },
          1300: { value: "#253D4E" },
        },
        pink: { value: "#F74B81" },
        blue: { value: "#67BCEE" },
        orange: { value: "#F59758" },
      },
      fonts: {
        lato: { value: "Lato, sans-serif" },
        quicksand: { value: "Quicksand, sans-serif" },
      },
    },
    breakpoints: {
      sm: '480px',
      md: '768px',
      lg: '992px',
      xl: '1280px',
      '2xl': '1536px'
    }
  },

  // The output directory for your css system
  outdir: "styled-system",
});
