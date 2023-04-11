const defaultTheme = require('tailwindcss/defaultTheme')

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
      'sidebar': '#FAF2EE',
      'active': 'rgba(255, 147, 47, 0.2)',
      'primary': '#7745E0',
      'secondary': '#FF932F',
      'ligth_text': 'rgba(35, 32, 42, 0.6)',
      'bold_text': '#23202A',
      'gradient': 'linear-gradient(189.52deg, #FFB571 -10.41%, #FA7800 106.43%)'
    }
  },
  plugins: [],
}

