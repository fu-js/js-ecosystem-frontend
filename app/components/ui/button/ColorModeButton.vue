<template>
  <UButton
    :icon="isDark ? 'i-lucide-sun' : 'i-lucide-moon-star'"
    @click="isDark = !isDark"
  />
</template>

<script setup lang="ts">
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
