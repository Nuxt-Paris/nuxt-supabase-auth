// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["@/assets/scss/main.scss"],
  modules: ["@nuxtjs/supabase", "@nuxtjs/tailwindcss"],
  tailwindcss: {},
  routeRules: {
    '/about': { static: true },
    '/list': { swr: 120 },

  }
});
