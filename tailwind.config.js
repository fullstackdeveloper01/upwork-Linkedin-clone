const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./public/**/*.html", "./src/**/*.vue"],

  darkMode: false,

  theme: {
    extend: {
      keyframes: {},

      colors: {
        primary: {
          500: "#f2613c",
        },
        gray: {
          100: "#e9ecef",
          200: "#eee",
        },
        white: "#FFFFF",
      },
      fontSize: {
        "7.2xl": ["5rem", "1.3"],
        "7.5xl": ["5.625rem", "1.3"],
      },
      spacing: {
        400: "37.5rem",
        850: "53.125rem",
      },
      minHeight: {
        850: "53.125rem",
      },
    },
  },

  variants: {
    extend: {},
  },
  plugins: [],
};
