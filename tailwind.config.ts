import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#01011e",
          50: "#e6e6f0",
          100: "#b3b3d1",
          200: "#8080b3",
          300: "#4d4d94",
          400: "#262675",
          500: "#01011e",
          600: "#01011a",
          700: "#010116",
          800: "#000012",
          900: "#00000e",
        },
        gold: {
          DEFAULT: "#f7be79",
          50: "#fef7ed",
          100: "#fdecd3",
          200: "#fbd9a7",
          300: "#f9c67b",
          400: "#f7be79",
          500: "#f5a64f",
          600: "#e88f23",
          700: "#c2761c",
          800: "#9c5e16",
          900: "#764610",
        },
      },
      fontFamily: {
        cairo: ["Cairo", "sans-serif"],
      },
      animation: {
        "slow-zoom": "slowZoom 10s ease-out forwards",
        "fade-in-up": "fadeInUp 0.6s ease-out forwards",
      },
      keyframes: {
        slowZoom: {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.1)" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
