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
      scrollbarWidth: "none",
      msOverflowStyle: "none",
    },
    "*::-webkit-scrollbar": {
      display: "none",
    },
    html: {
      overflow: "hidden",
      height: "100%",
      width: "100%",
    },
    body: {
      height: "100%",
      width: "100%",
    },
  },
  jsxFramework: "react",

  // The output directory for your css system
  outdir: "styled-system",
});
