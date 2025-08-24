<script setup lang="ts">
import HomePageWelcome from "~/components/layout/HomePageWelcome.vue";

const { data: jwtDecodedPayload } = await useFetch<
  JwtDecodedPayload | string
>("/api/jwt-decoded-payload");

if (typeof jwtDecodedPayload.value !== "string") {
  const jwtDecodedPayloadStore = useJwtDecodedPayloadStore();
  jwtDecodedPayloadStore.setData(jwtDecodedPayload.value ?? null);
}
</script>

<template>
  <NuxtLayout name="home">
    <HomePageWelcome />
  </NuxtLayout>
</template>
