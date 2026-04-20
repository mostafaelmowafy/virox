/**  @type {import('tailwindcss').Config} */

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#d4af37",
        "primary-container": "#fcf4d9",
        background: "#ffffff",
        surface: "#f9f9f9",
        "on-surface": "#1c1b1b",
        "on-surface-variant": "#4d4635",
        "outline-variant": "#d0c5af",
        "surface-variant": "#eeeeee",
        charcoal: "#1c1b1b",
      },
      borderRadius: {
        DEFAULT: "0.125rem",
        lg: "0.4rem",
        xl: "0.75rem",
        full: "9999px",
      },
      fontFamily: {
        headline: ["Manrope", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
