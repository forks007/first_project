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
        dripping: ['Nosifer']
      },
      borderWidth:{
        10: '10px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
