/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{html,js,jsx}",
    "./components/**/*.{html,js,jsx}",
    "./styles/**/*.{js,jsx}",
  ],
  mode: "jit",
  theme: {
    extend: {
      fontFamily: {
        monument: ["PPMonumentExtended-Regular", "sans-serif"],
        nhaas: ["Neue Haas Grotesk Display Pro", "sans-serif"],
      },
      colors: {
        "secondary-white": "#b0b0b0",
      },
      transitionTimingFunction: {
        "out-flex": "cubic-bezier(0.05, 0.6, 0.4, 0.9)",
      },
      typography: {
        DEFAULT: {
          css: {
            color: "#333",
            a: {
              color: "",
              "&:hover": {
                color: "rgb(120 113 108)",
              },
              textDecoration: "underline",
            },
            h3: {
              fontWeight: "100px",
            },
            li: {
              bullets: "white",
            },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
  darkMode: "class",
}
