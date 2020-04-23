export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preload', as: 'font', href: '/Nunito-Bold.woff2', crossorigin: 'anonymous' },
      { rel: 'preload', as: 'font', href: '/Nunito-Light.woff2', crossorigin: 'anonymous' }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#667eea' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [{ src: '~/plugins/vue-masonry', ssr: false }, '~/plugins/fontawesome.js'],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    'nuxt-fontawesome'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},

  purgeCSS: {
    whitelistPatterns: [/svg.*/, /fa.*/]
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    // optimization: { minimize: false },
    extractCSS: true,
    analyse: true,
    transpile: ['gsap'],
    loaders: {
      file: {},
      fontUrl: { limit: 1000 },
      imgUrl: { limit: 1000 },
      pugPlain: {},
      vue: {
        transformAssetUrls: {
          video: 'src',
          source: 'src',
          object: 'src',
          embed: 'src'
        }
      },
      css: {},
      cssModules: {
        modules: {
          localIdentName: '[hash:base64:5]'
        }
      },
      less: {},
      sass: {
        indentedSyntax: true
      },
      scss: {},
      stylus: {},
      vueStyle: {}
    }
  }
}
