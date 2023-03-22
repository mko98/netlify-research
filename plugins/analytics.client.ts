import VueGtag, { trackRouter } from "vue-gtag-next";

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();

  if (config.public.ENVIRONMENT === "prod") {
    nuxtApp.vueApp.use(VueGtag, {
      property: {
        id: config.public.GOOGLE_ANALYTICS_ID,
      },
    });
    trackRouter(useRouter());
  }
});
