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

type CredenticalResponse = {
  credential: string;
};

type ResponseFromBackend = {
  message: string;
  token: string;
};

const handleCredentialResponse = async (response: CredenticalResponse) => {
  console.log("Credentical response:", response);

  const cfg = useRuntimeConfig();
  const apiEndpoint = cfg.public.apiUrl + "/api/v1/auth/login";

  console.log("API Endpoint:", apiEndpoint);

  const { data } = await useFetch<ResponseFromBackend>(apiEndpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: { token: response.credential },
  });

  console.log("Data from backend:", data.value);
};

if (typeof window !== "undefined") {
  window.handleCredentialResponse = handleCredentialResponse;
}
</script>

<template>
  <div
    id="g_id_onload"
    :data-client_id="$config.public.googleClientId"
    data-context="signin"
    data-ux_mode="popup"
    data-callback="handleCredentialResponse"
    data-auto_prompt="false"
  ></div>

  <div
    class="g_id_signin"
    data-type="standard"
    data-shape="pill"
    data-theme="filled_black"
    data-text="signin"
    data-size="large"
    data-width="200"
  ></div>
</template>
