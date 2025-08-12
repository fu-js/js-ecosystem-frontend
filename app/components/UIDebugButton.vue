<template>
  <ClientOnly>
    <UButton
      color="neutral"
      :icon="debugEnabled ? 'i-lucide-bug' : 'i-lucide-bug-play'"
      :variant="debugEnabled ? 'solid' : 'link'"
      @click="debugEnabled = !debugEnabled"
    />

    <template #fallback>
      <USkeleton class="size-8" />
    </template>
  </ClientOnly>
</template>

<script setup lang="ts">
const app = useAppConfig();

const debugEnabled = computed<boolean>({
  get() {
    return app.debug.enable;
  },
  set(_enabled) {
    updateAppConfig({
      debug: { enable: _enabled },
      ui: { colors: { debug: _enabled ? "debug" : "transparent" } },
    });
  },
});
</script>
