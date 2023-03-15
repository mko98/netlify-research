import { createGtm } from "@gtm-support/vue-gtm";
const runtimeConfig = useRuntimeConfig().public;
export default defineNuxtPlugin((nuxtApp) => {
  if (useRuntimeConfig().public.appEnv !== "production") return;
  nuxtApp.vueApp.use(
    createGtm({
      id: runtimeConfig.GOOGLE_TAG_MANAGER_KEY, // TODO: Add google analytics id to .env
      defer: false,
      compatibility: false,
      enabled: runtimeConfig.ENVIRONMENT === "prod",
      debug: true,
      loadScript: true,
      vueRouter: useRouter(),
      trackOnNextTick: false,
    })
  );
});
