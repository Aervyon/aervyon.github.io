module.exports = {
  mode: 'jit',
  purge: {
    content: [
      './components/**/*.{vue,js}',
      './layouts/**/*.vue',
      './pages/**/*.vue',
      './plugins/**/*.{js,ts}',
      './nuxt.config.{js,ts}'
    ]
  },
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        dark: '#202124',
        'primary-dark': '#292C34',
        'highlight-dark': '#568A97',
        'url-dark': '#66C8FF',
        accent: '#cef3fc'
      },
      fill: {
        dark: '#202124',
        'primary-dark': '#292C34',
        'highlight-dark': '#568A97',
        'url-dark': '#66C8FF',
        accent: '#cef3fc'
      },
      width: {
        112: '28rem'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
