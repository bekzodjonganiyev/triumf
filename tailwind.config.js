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
      'graycolor1': '#F7F8F9',
      'badge': '#DCFCE7',
      'ligth_text': 'rgba(35, 32, 42, 0.6)',
      'bold_text': '#23202A'
    }
  },
  plugins: [],
}

