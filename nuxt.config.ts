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
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.ico' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Creepster&family=Inter:wght@300;400;600;800&display=swap' }
      ]
    }
  },
  compatibilityDate: '2026-11-02',
  devtools: { enabled: true }
})
