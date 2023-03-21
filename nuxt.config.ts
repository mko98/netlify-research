// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  css: ["@/assets/styles/styles.css"],
  plugins: [
    {
      src: "@/plugins/analytics.js",
    },
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ["nuxt-headlessui"],
  headlessui: {
    prefix: "Headless",
  },
});
