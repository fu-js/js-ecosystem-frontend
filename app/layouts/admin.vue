<script setup lang="ts">
import AdminSidebar from "~/components/layout/AdminSidebar.vue";
</script>

<template>
  <div class="flex h-screen gap-2 overflow-clip p-2">
    <div class="w-64 overflow-auto border p-2">
      <AdminSidebar />
    </div>

    <div class="w-full overflow-hidden border p-2">
      <slot />
    </div>
  </div>
</template>
