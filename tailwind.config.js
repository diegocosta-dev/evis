module.exports = {
  content: ['./pages/**/*.js', './components/**/*.js'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#ffffff',
      black: '#000000',
      blue: '#044DA2',
      'ligth-blue': '#028FD6',
      gray: {
        100: '#E2E5E8',
        700: '#131416',
        DEFAULT: '#9CA3AF'
      }
    },
    fontFamily: {
      sans: ['inter', 'sans-serif'],
    },
    screens: {
      xm: '390px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    extend: {}
  },
}
