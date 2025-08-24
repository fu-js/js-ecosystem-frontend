<script setup lang="ts">
import Header from "~/components/layout/Header.vue";
import Footer from "~/components/layout/Footer.vue";
</script>

<template>
  <div class="h-screen overflow-auto">
    <Header />
    <slot />
    <Footer />
  </div>
</template>
