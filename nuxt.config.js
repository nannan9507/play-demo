let config = {
  /*
  ** Headers of the page
  */
  head: {
    title: '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    css: [],
    script: [],
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },

  modules: [
    '@nuxtjs/proxy',
    '@nuxtjs/vendor',
  ],

  vendor: ['vuex'],

  proxy: [
    // ['/api', { target: 'http://hr9h84.natappfree.cc' }]
    ['/api', { target: 'http://www.lovezhuoyou.com:81' }]
  ],
  router: {
    middleware: ['userAgent'],
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
  },

  plugins: [
    '~plugins/axios.js',
    '~plugins/fastclick.js',
    '~plugins/mint-ui.js',
    '~plugins/element-ui.js',
  ],

  mescroll: true,

  echarts: true,
}

if (config.mescroll) {
  config.head.script.unshift(
    { src: '/mescroll/mescroll.m.js' }
  )
  config.css.unshift(
    { src: '~assets/mescroll.min.css' }
  )
}


module.exports = config
