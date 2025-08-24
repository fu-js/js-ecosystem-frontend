<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";

const jwtDecodedPayload = useJwtDecodedPayloadStore();

const homeItem: NavigationMenuItem = {
  label: "Home",
  to: "/",
  active: true,
};
const eventsItem: NavigationMenuItem = {
  label: "Events",
  to: "/",
};
const achievementsItem: NavigationMenuItem = {
  label: "Archivements",
  defaultOpen: true,
  to: "/",
  children: [
    {
      label: "Achievement A",
      description: "Achievement A descriptions",
      to: "/",
    },
    {
      label: "Achievement B",
      description: "Achievement B descriptions",
      to: "/",
    },
    {
      label: "Achievement C",
      description: "Achievement C descriptions",
      to: "/",
    },
  ],
};
const productsItem: NavigationMenuItem = {
  label: "Products",
  defaultOpen: true,
  to: "/",
  children: [
    {
      label: "Product A",
      icon: "i-lucide-box",
      description: "Product A descriptions",
      to: "/",
    },
    {
      label: "Product B",
      icon: "i-lucide-box",
      description: "Product B descriptions",
      to: "/",
    },
    {
      label: "Product C",
      icon: "i-lucide-box",
      description: "Product C descriptions",
      to: "/",
    },
  ],
};
const classesItem: NavigationMenuItem = {
  label: "Classes",
  defaultOpen: true,
  to: "/",
  children: [
    {
      label: "CSI",
      icon: "i-lucide-book",
      description: "Class description",
      to: "/",
    },
    {
      label: "MAE",
      icon: "i-lucide-book",
      description: "Class description",
      to: "/",
    },
    {
      label: "MAD",
      icon: "i-lucide-book",
      description: "Class description",
      to: "/",
    },
  ],
};
const aboutItem: NavigationMenuItem = {
  label: "About",
  to: "/",
};

const items = ref<NavigationMenuItem[]>(
  !!jwtDecodedPayload.data
    ? [
        homeItem,
        eventsItem,
        achievementsItem,
        productsItem,
        classesItem,
        aboutItem,
      ]
    : [homeItem, eventsItem, achievementsItem, productsItem, aboutItem],
);
</script>

<template>
  <div>
    <div class="hidden lg:block">
      <UNavigationMenu
        :items="items"
        variant="link"
        color="neutral"
        class="justify-center"
      />
    </div>

    <div class="lg:hidden">
      <UPopover>
        <UButton icon="i-lucide-menu" color="neutral" variant="ghost" />

        <template #content>
          <UNavigationMenu
            :items="items"
            variant="link"
            color="neutral"
            class="w-48"
            orientation="vertical"
          />
        </template>
      </UPopover>
    </div>
  </div>
</template>
