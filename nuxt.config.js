const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: 'Nelson Chan',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'My personal website'
      },
      {
        hid: 'author',
        name: 'author',
        content: 'Nelson Chan'
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content: 'bio, profile, personal, photography'
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
    '@nuxtjs/tailwindcss',
    '@nuxt/typescript-build'
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

  typescript: {
    typeCheck: {
      eslint: true
    }
  },

  render: {
    http2: {
      push: true,
      pushAssets: (_req, _res, publicPath, preloadFiles) =>
        preloadFiles
          .filter((f) => f.asType === 'script')
          .map((f) => `<${publicPath}${f.file}>; rel=preload; as=${f.asType}`)
    },
    csp: true,
    compressor: false
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
    plugins: [new BundleAnalyzerPlugin({ analyzerMode: 'disabled' })],
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
    },
    babel: {
      // envName: server, client, modern
      presets({ envName }) {
        const envTargets = {
          client: { browsers: ['> 1%, not dead'] },
          server: { node: 'current' }
        }
        return [
          [
            '@nuxt/babel-preset-app',
            {
              corejs: { version: 3 },
              targets: envTargets[envName]
            }
          ]
        ]
      }
    }
  }
}
