import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./components/**/*.{ts,tsx,js,jsx}", "./app/**/*.{ts,tsx,js,jsx}"],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {},
  },

  globalCss: {
    "*, *::before, *::after": {
      scrollbarWidth: "none", // Firefox에서 스크롤 숨기기
      msOverflowStyle: "none", // IE, Edge에서 스크롤 숨기기
    },
    "*::-webkit-scrollbar": {
      display: "none", // Chrome, Safari에서 스크롤 숨기기
    },
  },
  jsxFramework: "react",

  // The output directory for your css system
  outdir: "styled-system",
});
