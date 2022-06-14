import { defineNuxtConfig } from 'nuxt';

export default defineNuxtConfig({
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'XDEVS',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Hire experienced web developers who will bring best experience to your customers' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
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
