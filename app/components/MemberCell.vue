<template>
  <div class="flex items-center gap-2 dbg">
    <!-- <USkeleton class="size-12 inline-block rounded-full"/> -->
    <span class="inline-block">
      <p class="text-default font-semibold">{{ name }}</p>
      <p class="text-dimmed">{{ id }}</p>
    </span>
  </div>
</template>

<script setup lang="ts">
defineProps<{ name: string; id: string }>();
</script>
