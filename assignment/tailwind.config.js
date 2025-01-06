/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"], 
  theme: {
    extend: {
      fontFamily: {
        ibm: ['IBM Plex Sans', 'serif'],
        inter: ['Inter', 'sans-serif']
      },
    },
  },
  plugins: [],
}

