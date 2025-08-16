<template>
  <div class="flex items-center gap-2 dbg">
    <span class="inline-block">
      <p class="text-default font-semibold">{{ name }}</p>
      <p class="text-dimmed">{{ id }}</p>
    </span>
  </div>
</template>

<script setup lang="ts">
defineProps<{ name: string; id: string }>();
defineOptions({
  inheritAttrs: true,
});
</script>
