module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme=> ({
        'background-one':"url('/public/image/background.jpg')",
      }),
      colors: {
        primary: '#FF6363',
        secondary: {
          100: '#E2E2D5',
          200: '#888883',
        }
      },
      fontFamily: {
        sans: ['roboto']
      },
    },
  },
  variants: {
    extend: {
      backgroundColor:['focus','active']
    },
  },
  plugins: [require(' @tailwindcss/forms')],
}
