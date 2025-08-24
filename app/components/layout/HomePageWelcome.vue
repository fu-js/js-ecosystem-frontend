<script setup lang="ts">
const jwtDecodedPayload = useJwtDecodedPayloadStore();

const messageClasses =
  "text-center text-[clamp(2rem,8vw,8rem)] text-dimmed font-bold";
</script>

<template>
  <div class="flex h-full items-center justify-center">
    <div class="flex h-[60vh] w-[90vw] items-center justify-center md:w-[65vw]">
      <h1 v-if="!jwtDecodedPayload.data" :class="messageClasses">
        You are not signed in.
      </h1>
      <h1 v-else :class="messageClasses">
        Welcome home,
        <span class="text-nowrap">{{ jwtDecodedPayload.data.name }}!</span>
      </h1>
    </div>
  </div>
</template>
