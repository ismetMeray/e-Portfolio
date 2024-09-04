// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],
  css: ['./assets/fontawesome/css/all.css', './assets/css/style.css'],
  routeRules: {
    '/': { redirect: '/app' },
  },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  }
})