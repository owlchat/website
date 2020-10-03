module.exports = {
  theme: {
    fontFamily: {
      display: ['Caveat', 'cursive'],
      body: ['Montserrat', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: '#1B262C',
        secondary: '#393E46',
        tertiary: '#EEEEEE',
        link: '#00ADB5',
      },
      margin: {
        96: '24rem',
        128: '32rem',
      },
    },
  },
  purge: {
    layers: ['utilities'],
    content: ['index.html'],
  },
  variants: {
    opacity: ['responsive', 'hover'],
  },
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
};
