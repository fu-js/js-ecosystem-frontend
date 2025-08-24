<script setup lang="ts">
useHead({
  script: [
    {
      src: "https://accounts.google.com/gsi/client",
      async: true,
      defer: true,
    },
  ],
});

window.handleCredentialResponse = handleCredentialResponse;

const colorMode = useColorMode();
const dataTheme = computed(() =>
  colorMode.preference === "dark" ? "outline" : "filled_black",
);
</script>

<template>
  <div class="flex w-full justify-center">
    <div
      id="g_id_onload"
      :data-client_id="$config.public.googleClientId"
      data-context="signin"
      data-ux_mode="popup"
      data-callback="handleCredentialResponse"
      data-auto_prompt="false"
    ></div>

    <div class="g_id_signin w-min" :data-theme="dataTheme"></div>
  </div>
</template>
