
export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'universal',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'static',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    htmlAttrs: {
      lang: 'pt-br'
    },
    titleTemplate: (titleChunk) => {
      // If undefined or blank then we don't need the hyphen
      return titleChunk ? `${titleChunk} - Communicare Treinamentos` : 'Communicare Treinamentos';
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { 'http-equiv': 'Content-Language', content: 'pt-br' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
    // __dangerouslyDisableSanitizers: ['script', 'noscript'],
    // noscript: [
    //   {
    //     innerHTML: `<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=689866154919988&ev=PageView&noscript=1" />`,
    //   }
    // ],
    // script: [
    //   { // Facebook Pixel Code
    //     innerHTML: `!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version="2.0";n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,"script","https://connect.facebook.net/en_US/fbevents.js");fbq("init","689866154919988");fbq("track","PageView");`,
    //     defer: true,
    //     async: true,
    //   },
    // ]
  },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Doc: https://github.com/nuxt/content
    '@nuxt/content',
    // Doc: https://github.com/nuxt-community/gtm-module
    '@nuxtjs/gtm',
    // https://github.com/WilliamDASILVA/nuxt-facebook-pixel-module
    'nuxt-facebook-pixel-module',
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {},
  /*
  ** Content module configuration
  ** See https://content.nuxtjs.org/configuration
  */
  content: {},
  /*
  ** Google Tag Manager
  ** See https://github.com/nuxt-community/gtm-module
  */
  gtm: {
    id: 'GTM-XXXXXXX',
    enabled: false,
    debug: true
  },
  /*
  ** Facebook Pixel code
  ** See https://github.com/WilliamDASILVA/nuxt-facebook-pixel-module
  */
  facebook: {
    pixelId: '689866154919988',
    track: 'PageView',
    // version: '2.0',
    disabled: false
  },
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
  }
}
