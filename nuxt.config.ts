import { defineNuxtConfig } from 'nuxt/config'
require('dotenv').config()

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  runtimeConfig: {
    apiSecret: '', // can be overridden by NUXT_API_SECRET environment variable
    public: {
      // apiBase: 'http://api.acgnb.com' // can be overridden by NUXT_PUBLIC_API_BASE environment variable
      // apiBase: 'http://192.168.2.116' 
      apiBase: 'http://127.0.0.1', 
      audioApiBase: 'http://doc.acgnb.com', 
    }
  },
  modules: [
    '@vueuse/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    'nuxt-icon',
    '@nuxtjs/dotenv' // 指定打包时使用的dotenv
  ],

  components: {
    global: true,
    dirs: [
      '~/components',
      '~/node_modules/@headlessui/vue/dist/components'
    ]
  },

  experimental: {
    reactivityTransform: true
    // viteNode: true,
  },
  vueuse: {
    ssrHandlers: false
  },
  colorMode: {
    classSuffix: ''
  }

})
