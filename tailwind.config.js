/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '976px',
      'xl': '1440px',
    },
    extend: {
      colors:{
        'darkGrey': 'hsl(227, 12%, 61%)',
        'greyy': '#00000090'
      }
    },
  },
  plugins: [],
}

