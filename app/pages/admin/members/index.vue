<template>
  <div class="h-full">
    <MemberTable class="h-full overflow-auto" />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "admin",
  middleware: ["auth"],
});
</script>
