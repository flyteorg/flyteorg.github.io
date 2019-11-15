module.exports = {
  theme: {
    colors: {
      transparent: 'transparent',
      black: '#000',
      white: '#fff',
      purple: {
        'black': '#262262',
        'darkest': '#641BF2',
        'darker': '#7F3FEC',
        'dark': '#9963E5',
        'light': '#B486DF',
        'lighter': '#CEAAD8',
        'lightest': '#E9CED2',
      },
      pink: '#E9CED2',
      red: '#DC3131',
      orange: '#FF7E36',
      teal: '#1BCCF3',
      blue: '#2D42FF',
      tan: '#FFF6F6',
    },
    stroke: theme => ({
      'purple-black': theme('colors.purple.black'),
      'pink': theme('colors.pink'),
    }),
    fontFamily: {
      display: ['IBM Plex Sans', 'sans-serif'],
      body: ['IBM Plex Sans', 'sans-serif'],
    },
    extend: {
      colors: {
        gray: {
          '100': '#f5f5f5',
          '200': '#eeeeee',
          '300': '#e0e0e0',
          '400': '#bdbdbd',
          '500': '#9e9e9e',
          '600': '#757575',
          '700': '#616161',
          '800': '#424242',
          '900': '#212121',
        }
      }
    }
  },
  variants: {},
  plugins: []
}
