export default defineNuxtConfig({
  compatibilityDate: '2026-09-03',
  modules: ['@pinia/nuxt', '@nuxtjs/tailwindcss'],
  css: ['~/assets/css/main.css'],
  routeRules: {
    '/api/v1/**': {
      proxy: `${process.env.NUXT_PUBLIC_API_PROXY_TARGET || 'http://198.199.65.142:8090'}/api/v1/**`,
    },
  },
  runtimeConfig: {
    public: {
      apiBaseUrl: process.env.NUXT_PUBLIC_API_BASE_URL || '/api/v1',
    },
  },
  typescript: {
    strict: true,
  },
})
