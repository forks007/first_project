const plugin = require('tailwindcss/plugin')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#FF6363',
        secondary: {
          100: '#E2E2D5',
          200: '#888883',
        },
        brown: {
          100: '#d9950d',
          200: '#ab7952',
        },
        social: {
          100: '#4267B2',
          200: '#fbad50',
          300: '#1DA1F2',
        },

      },
      fontFamily:{
        'roboto': ['Roboto'],
        'banner':['"Palette Mosaic"'],
        'body': ['Nunito'],
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
