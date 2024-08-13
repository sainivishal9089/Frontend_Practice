/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    fontFamily: {
      'DM':["DM Serif Display", 'serif'] ,
      'Archivo': ["Archivo", 'sans-serif']
    },
    extend: {},
  },
  plugins: [],
}

