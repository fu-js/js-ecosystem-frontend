import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

  vite: {
    plugins: [tailwindcss()],
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

  modules: ["@nuxt/ui", "@nuxt/image", "@nuxt/eslint", "@nuxt/scripts"],
});
