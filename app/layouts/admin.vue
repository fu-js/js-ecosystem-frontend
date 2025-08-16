<script setup lang="ts">
import AdminSidebar from "~/components/layout/AdminSidebar.vue";
</script>

<template>
  <div class="h-screen flex gap-2 p-2 overflow-clip">
    <div class="p-2 w-64 border overflow-auto">
      <AdminSidebar />
    </div>

    <div class="w-full p-2 border overflow-hidden">
      <slot />
    </div>
  </div>
</template>
