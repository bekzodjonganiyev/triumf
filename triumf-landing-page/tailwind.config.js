const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Poppins', ...defaultTheme.fontFamily.sans],
      },
    },
    colors:{
      ...colors,
      'hero': '#FAF2EE',
      'secondary': '#7745E0',
      'primary': '#FF932F',
      'badge': '#DCFCE7',
      'ligth_text': 'rgba(35, 32, 42, 0.6)',
      'bold_text': '#23202A',
      'gradient': 'linear-gradient(189.52deg, #FFB571 -10.41%, #FA7800 106.43%)'
    }
  },
  plugins: [],
}

