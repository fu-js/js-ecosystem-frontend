<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";

const items = ref<NavigationMenuItem[]>([
  {
    label: "Home",
    to: "/",
    active: true,
  },
  {
    label: "Events",
    to: "/",
  },
  {
    label: "Archivements",
    to: "/",
    children: [
      {
        label: "Achievement A",
        icon: "i-lucide-file-text",
        description: "Achievement A descriptions",
        to: "/",
      },
      {
        label: "Achievement B",
        icon: "i-lucide-file-text",
        description: "Achievement B descriptions",
        to: "/",
      },
      {
        label: "Achievement C",
        icon: "i-lucide-file-text",
        description: "Achievement C descriptions",
        to: "/",
      },
    ],
  },
  {
    label: "Products",
    to: "/",
    children: [
      {
        label: "Product A",
        icon: "i-lucide-file-text",
        description: "Product A descriptions",
        to: "/",
      },
      {
        label: "Product B",
        icon: "i-lucide-file-text",
        description: "Product B descriptions",
        to: "/",
      },
      {
        label: "Product C",
        icon: "i-lucide-file-text",
        description: "Product C descriptions",
        to: "/",
      },
    ],
  },
  {
    label: "About",
    to: "/",
  },
]);
</script>

<template>
  <UNavigationMenu :items="items" class="justify-center" />
</template>
