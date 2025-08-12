<template>
  <ClientOnly v-if="!colorMode?.forced">
    <UButton
      color="neutral"
      :variant="props.variant"
      :class="props.class"
      :icon="isDark ? 'i-lucide-moon-star' : 'i-lucide-sun'"
      @click="isDark = !isDark"
    />

    <template #fallback>
      <USkeleton class="size-8" />
    </template>
  </ClientOnly>
</template>

<script setup lang="ts">
const props = defineProps<{
  class?: string;
  variant?:
    | "solid"
    | "outline"
    | "soft"
    | "subtle"
    | "ghost"
    | "link"
    | undefined;
}>();

const colorMode = useColorMode();

const isDark = computed({
  get() {
    return colorMode.value === "dark";
  },
  set(_isDark) {
    colorMode.preference = _isDark ? "dark" : "light";
  },
});
</script>
