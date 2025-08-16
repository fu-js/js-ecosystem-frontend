<script setup lang="ts">
import RouteTree from "~/components/layout/RouteTree.vue";
</script>

<template>
  <div class="h-screen overflow-clip flex">
    <aside class="w-64">
      <p class="text-center font-semibold text-sm py-2">Route Tree</p>
      <RouteTree />
    </aside>

    <div class="w-full">
      <slot />
    </div>
  </div>
</template>
