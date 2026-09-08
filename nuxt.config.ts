export default defineNuxtConfig({
  compatibilityDate: '2026-09-03',
  modules: ['@pinia/nuxt', '@nuxtjs/tailwindcss'],
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon-light.png', media: '(prefers-color-scheme: light)' },
        { rel: 'icon', type: 'image/png', href: '/favicon-dark.png', media: '(prefers-color-scheme: dark)' },
        { rel: 'icon', href: '/favicon.ico', sizes: '32x32' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
      ],
      meta: [
        { name: 'theme-color', content: '#ffffff', media: '(prefers-color-scheme: light)' },
        { name: 'theme-color', content: '#0f1a15', media: '(prefers-color-scheme: dark)' },
        { name: 'color-scheme', content: 'light dark' },
      ],
    },
  },
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
