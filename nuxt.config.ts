// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],
  css: [
    "remixicon/fonts/remixicon.css",
    "highlight.js/styles/night-owl.min.css",
  ],
});
