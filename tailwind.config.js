/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    extend: {
      colors:{
        "primary":"#F7F7F7",
        secondary:{
          "dark":"#1D171B",
          "dark2":"#272226",
          "lightDark":"#3F3F46"
        }
      },
      fontSize:{
        "titre":"3.6rem",
      }
    },
  },
  plugins: [],
  darkMode: "class",
}
