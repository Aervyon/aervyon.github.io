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
        'highlight-dark': '#C9BBFF',
        'url-dark': '#63A7E5',
        accent: '#9DC4FF'
      },
      fill: {
        dark: '#202124',
        'primary-dark': '#292C34',
        'highlight-dark': '#BBC2FF',
        'url-dark': '#63A7E5',
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
