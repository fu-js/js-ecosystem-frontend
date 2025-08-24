<script setup lang="ts">
import type { DropdownMenuItem } from "@nuxt/ui";

const jwtDecodedPayload = useJwtDecodedPayloadStore();

const items = ref<DropdownMenuItem[][]>([
  [
    {
      label: jwtDecodedPayload.data?.name,
      avatar: {
        icon: "i-lucide-circle-user",
        size: "lg",
      },
      type: "label",
    },
  ],
  [
    {
      label: "Profile",
      icon: "i-lucide-user",
    },
  ],
  [
    {
      label: "Sign out",
      icon: "i-lucide-log-out",
      onSelect: () => {
        signOut();
        navigateTo("/", { open: { target: "_self" } });
      },
    },
  ],
]);
</script>

<template>
  <UDropdownMenu
    :items="items"
    :ui="{
      content: 'w-48',
    }"
  >
    <UButton icon="i-lucide-circle-user" color="neutral" variant="ghost" />
  </UDropdownMenu>
</template>
