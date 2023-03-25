/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat"],
        overpass: ["Overpass"],
      },
      colors: {
        'background': '#191825',
        "primary": "#E384FF",
        "secondary": "#FFA3FD",
        "tertiary": "#865DFF"
      }
    }
    },
  plugins: [],
}
