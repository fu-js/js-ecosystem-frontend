<script setup lang="ts">
import GoogleSignInButton from "~/components/ui/button/GoogleSignInButton.vue";
</script>

<template>
  <NuxtLayout name="signin">
    <ClientOnly>
      <GoogleSignInButton />
    </ClientOnly>
  </NuxtLayout>
</template>
