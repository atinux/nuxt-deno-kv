export default defineNuxtConfig({
  extends: [
    '@nuxt/ui-pro'
  ],
  modules: [
    '@nuxt/ui',
  ],
  ui: {
    icons: ['heroicons', 'simple-icons']
  },
  devtools: { enabled: true },
})
