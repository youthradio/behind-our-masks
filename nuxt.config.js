import POSTCONFIG from './post.config'

export default {
  telemetry: false,
  target: 'static',
  env: {
    baseUrl: POSTCONFIG.baseURL || 'http://localhost:3000',
  },
  /*
   ** Headers of the page
   */
  router: {
    base: POSTCONFIG.baseURL,
  },
  head: {
    title: POSTCONFIG.title,
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { lang: 'en' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: POSTCONFIG.description,
      },
      { hid: 'og:title', property: 'og:title', content: POSTCONFIG.title },
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: POSTCONFIG.title,
      },
      { property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: POSTCONFIG.url },
      {
        hid: 'og:image',
        property: 'og:image',
        content: POSTCONFIG.featureImage,
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: POSTCONFIG.description,
      },
      {
        hid: 'og:image:alt',
        property: 'og:image:alt',
        content: POSTCONFIG.featureImageDescription,
      },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:creator', content: POSTCONFIG.twitterHandler },
      { name: 'twitter:site', content: POSTCONFIG.twitterHandler },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: POSTCONFIG.title,
      },
      { name: 'twitter:description', content: POSTCONFIG.description },
      { name: 'twitter:image', content: POSTCONFIG.featureImage },
      {
        name: 'twitter:image:alt',
        content: POSTCONFIG.featureImageDescription,
      },
      {
        hid: 'twitter:description',
        itemprop: 'description',
        content: POSTCONFIG.description,
      },
      {
        hid: 'twitter:image',
        itemprop: 'image',
        content: POSTCONFIG.featureImage,
      },
      { name: 'msapplication-TileColor', content: '#da532c' },
      { name: 'msapplication-config', content: 'favicon/browserconfig.xml' },
      { name: 'theme-color', content: '#ffffff' },
    ],
    link: [
      {
        rel: 'icon',
        type: 'apple-touch-icon',
        sizes: '180x180',
        href: 'favicon/apple-touch-icon.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: 'favicon/favicon-32x32.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: 'favicon/favicon-16x16.png',
      },
      { rel: 'shortcut icon', href: 'favicon/favicon.ico' },
      { rel: 'manifest', href: 'favicon/site.webmanifest' },
      {
        rel: 'mask-icon',
        color: '#5bbad5',
        href: 'favicon/safari-pinned-tab.svg',
      },
      {
        href:
          'https://fonts.googleapis.com/css2?family=Assistant:wght@200;300;400;500;600;700;800&family=Open+Sans:ital,wght@0,400;0,600;0,700;0,800;1,400;1,600;1,700;1,800&display=swap',
        rel: 'preload stylesheet',
        as: 'style',
        onload: "this.onload=null;this.rel='stylesheet'",
      },
    ],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  // css: ['@/assets/css/styles.scss'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    {
      src: '~plugins/lazysizes.js',
      mode: 'client',
      ssr: false,
    },
    {
      src: '~/plugins/vueplyr.js',
      mode: 'client',
      ssr: false,
    },
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/sitemap',
    '@nuxtjs/google-gtag',
    'nuxt-facebook-pixel-module',
  ],
  facebook: {
    /* module options */
    track: 'PageView',
    pixelId: '242649400752480',
    autoPageView: true,
    disabled: false,
  },
  'google-gtag': {
    id: 'G-KR3HCRCC23',
    config: {
      anonymize_ip: true, // anonymize IP
      page_title: POSTCONFIG.title,
      page_path: POSTCONFIG.baseURL,
    },
    debug: false, // enable to track in dev mode
    disableAutoPageTrack: false, // disable if you don't want to track each page route with router.afterEach(...).
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, { isDev, isClient, loaders: { vue } }) {
      if (isClient) {
        vue.transformAssetUrls.img = ['data-src', 'src']
        vue.transformAssetUrls.source = ['data-srcset', 'srcset']
      }
    },
  },
  sitemap: {
    hostname: 'https://www.behindourmask.org',
  },
  // server: {
  //   https: {
  //     key: readFileSync(`${process.env.SSLKEY}`),
  //     cert: readFileSync(`${process.env.SSLCRT}`)
  //   }
  // }
}
