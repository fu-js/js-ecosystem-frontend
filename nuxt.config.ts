import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

  imports: {
    scan: false,
  },

  runtimeConfig: {
    apiUrl: process.env.API_URL,
    googleClientId: process.env.GOOGLE_CLIENT_ID,
  },

  css: ["~/assets/css/main.css"],
  ui: {
    theme: {
      colors: [
        "debug",
        "primary",
        "secondary",
        "info",
        "success",
        "warning",
        "error",
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

  modules: ["@nuxt/ui", "@nuxt/image", "@nuxt/eslint", "@nuxt/scripts"],
});
