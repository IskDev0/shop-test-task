export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  modules: ["@pinia/nuxt", "@nuxtjs/tailwindcss", "nuxt-lucide-icons", "@formkit/auto-animate/nuxt"],
  devtools: { enabled: true },
  ssr: false,
  lucide: {
    namePrefix: 'Icon'
  }
})