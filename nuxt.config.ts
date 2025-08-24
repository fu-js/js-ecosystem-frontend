import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },

  runtimeConfig: {
    public: {
      apiUrl: process.env.API_URL,
      googleClientId: process.env.GOOGLE_CLIENT_ID,
    },
  },

  css: ["~/assets/css/main.css"],
  ui: {
    theme: {
      colors: [
        "primary",
        "secondary",
        "info",
        "success",
        "warning",
        "error",
        "neutral",
        "bcm",
        "bdn",
        "bnd",
        "btt",
        "bvh",
      ],
    },
  },

  vite: {
    plugins: [tailwindcss()],
  },

  modules: [
    "@nuxt/ui",
    "@nuxt/image",
    "@nuxt/eslint",
    "@nuxt/scripts",
    "@pinia/nuxt",
  ],
});
