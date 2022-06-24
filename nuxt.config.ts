import { defineNuxtConfig } from 'nuxt';

export default defineNuxtConfig({
  // Global page headers: https://go.nuxtjs.dev/config-head
  app: {
    head: {
      htmlAttrs: {
        lang: 'en'
      },
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { property: 'og:site_name', content: 'XDEVS.PRO' },
        { property: 'og:image', content: 'https://xdevs.pro/ogXDEVS.png' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    },
  },

  // Global CSS: https://go.nuxtjs.dev/config-css

  css: [
    "~/assets/styles/main.scss",
  ],



  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxt/content'
  ],

  content: {
    nestedProperties: ['author.name'],
    highlight: {
      theme: 'github-light'
    }
  },


  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ['swiper'],
  },
  vite: {
    logLevel: "info",
    optimizeDeps: {
      include: [
        'vue', 'ufo'
      ]
    }
  },
  nitro: {
    prerender: {
      routes: ['/sitemap.xml']
    }
  },
})
