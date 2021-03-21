export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    script: [
      {
        src: 'https://code.iconify.design/1/1.0.7/iconify.min.js'
      }
    ],
    title: 'VoidNull - $ whoami',
    htmlAttrs: {
      lang: 'en'
    },
    bodyAttrs: {
      class: ['bg-dark']
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '$ whoami\nnull\nprogrammer, gamer, ...? Maybe more...' },
      { name: 'og:image', content: '/VN.png' },
      { name: 'theme-color', content: '#0EB363' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'apple-touch-icon', href: '/VN.png' }
    ],
    metaInfo: {
      noscript: {
        innerHTML: 'This site requires JavaScript to be enabled to load properly.'
      }
    }
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  tailwindcss: {
    jit: true
  }
}
