// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss'
  ],
  app: {
    head: {
      title: 'Rick & Morty Dashboard',
      meta: [
        { name: 'description', content: 'Prueba Técnica Frontend' }
      ]
    }
  },
  compatibilityDate: '2026-11-02',
  devtools: { enabled: true }
})
