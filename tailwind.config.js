/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html","./src/**/*{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navbg: "rgb(162 162 162)"
      }
    },
  },
  plugins: [],
}

