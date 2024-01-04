/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat"],
        overpass: ["Overpass"],
      },
      colors: {
        background: "#0D1E29",
        primary: "#D89E2F",
        secondary: "#F9B715",
        tertiary: "#56A998",
      },
    },
  },
  plugins: [],
};
