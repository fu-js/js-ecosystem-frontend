<script setup lang="ts">
import type { TreeItem } from "@nuxt/ui";

const items = ref<TreeItem[]>([
  {
    label: "/",
    icon: "i-vscode-icons-file-type-vue",
    defaultExpanded: true,
    onSelect: () => navigateTo("/"),
    onToggle: (e: Event) => {
      e.preventDefault();
    },
  },
  {
    label: "/login",
    icon: "i-vscode-icons-file-type-vue",
    onSelect: () => navigateTo("/login"),
  },
  {
    label: "/admin",
    defaultExpanded: true,
    children: [
      {
        label: "/members",
        icon: "i-vscode-icons-file-type-vue",
        onSelect: () => navigateTo("/admin/members"),
      },
    ],
  },
  {
    label: "/dev",
    defaultExpanded: true,
    children: [
      {
        label: "/permissions",
        icon: "i-vscode-icons-file-type-vue",
        onSelect: () => navigateTo("/dev/permissions"),
      },
    ],
  },
]);
</script>

<template>
  <UTree class="font-mono" trailing-icon="" :items="items" />
</template>
