/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layout/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      blue: {
        50: "#fff7da",
        100: "#ffe8ad",
        200: "#ffd97d",
        300: "#ffc94b",
        400: "#ffba1a",
        500: "#e6a100",
        600: "#b37d00",
        700: "#815900",
        800: "#4e3600",
        900: "#1e1100",
      },
    },
    container: {
      center: true,
    },

    extend: {
      colors: {
        primary: {
          main: "#12123d",
        },
        textColor: {
          main: "#ffb302",
        },
      },
    },
  },
  plugins: [],
});
