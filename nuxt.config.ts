// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  // Konfiguracja dla folderu app/
  srcDir: 'app',
  css: ['~/assets/styles/main.css'],
  // Auto-import composables z app/composables (domyślne dla Nuxt 3)
  compatibilityDate: '2025-11-22'
})

