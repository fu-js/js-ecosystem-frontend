<script setup lang="ts">
import ColorModeButton from "../ui/button/ColorModeButton.vue";
import Navigation from "../common/navigation/Navigation.vue";
import MenuButton from "../ui/button/MenuButton.vue";

const colorMode = useColorMode();
const iconSource = computed(() =>
  colorMode.preference === "dark" ? "/jsclub-dark-512.png" : "/jsclub-512.png",
);

const havePayload = !!useJwtDecodedPayloadStore().data;
</script>

<template>
  <header class="fixed w-full bg-transparent p-4">
    <div
      class="bg-default/20 flex w-full items-center justify-between gap-8 px-10 py-2 backdrop-blur-2xl"
    >
      <ULink class="flex cursor-pointer items-center gap-4" to="/">
        <img class="size-16" :src="iconSource" />
        <span class="text-default text-2xl font-bold text-nowrap">
          JS CLUB
        </span>
      </ULink>

      <Navigation class="hidden lg:block" />

      <div class="flex items-center gap-1">
        <ColorModeButton variant="ghost" color="neutral" />

        <UButton
          v-if="!havePayload"
          class="ms-2 px-4 text-nowrap"
          to="/signin"
          color="neutral"
        >
          Sign in
        </UButton>
        <MenuButton v-else />

        <Navigation class="lg:hidden" />
      </div>
    </div>
  </header>
</template>
