<script setup lang="ts">
import GoogleLoginButton from "~/components/ui/button/GoogleLoginButton.vue";
</script>

<template>
  <div class="h-screen overflow-hidden flex justify-center items-center">
    <ClientOnly>
      <GoogleLoginButton />
    </ClientOnly>
  </div>
</template>
