// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["@/assets/scss/main.scss"],
  modules: ["@nuxtjs/supabase", "@nuxtjs/tailwindcss"],
  tailwindcss: {},
  // routeRules: {
  //   '/signup': { swr: true },
  //   '/account': { ssr: true },
  //   '/**': { swr: true },
  // }
});
