// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  css: ["@/assets/styles/styles.css"],
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
  runtimeConfig: {
    public: {
      GOOGLE_TAG_MANAGER_KEY: process.env.GOOGLE_TAG_MANAGER_KEY,
      ENVIRONMENT: process.env.ENVIRONMENT,
    },
  },
});
