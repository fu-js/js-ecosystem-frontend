<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";

const items: NavigationMenuItem[] = [
  {
    label: "JTA",
    to: "https://jta.jsclub.dev",
    target: "_blank",
  },
];
</script>

<template>
  <footer>
    <USeparator type="dashed" class="h-px" />

    <div
      class="flex flex-col items-center justify-between gap-12 px-4 py-[15vh] md:flex-row md:px-[20vw]"
    >
      <p class="text-muted text-sm">
        Copyright © {{ new Date().getFullYear() }}
      </p>

      <UNavigationMenu :items="items" variant="link" />

      <div class="flex gap-2">
        <UButton
          icon="i-simple-icons-facebook"
          size="sm"
          color="neutral"
          variant="link"
          to="https://www.facebook.com/fu.jsclub/"
          target="_blank"
          aria-label="Discord"
        />
        <UButton
          icon="i-simple-icons-instagram"
          size="sm"
          color="neutral"
          variant="link"
          to="https://www.instagram.com/fptu.jsclub/"
          target="_blank"
          aria-label="X"
        />
        <UButton
          icon="i-simple-icons-github"
          size="sm"
          color="neutral"
          variant="link"
          to="https://github.com/fu-js/"
          target="_blank"
          aria-label="GitHub"
        />
      </div>
    </div>
  </footer>
</template>
