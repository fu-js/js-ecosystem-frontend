<template>
  <div>
    <div
      id="g_id_onload"
      :data-client_id="$config.app.googleClientId"
      data-callback="handleCredentialResponse"
    ></div>
    <div class="g_id_signin">Login with Google</div>
  </div>
</template>

<script lang="ts" setup>
let script = document.createElement("script");
script.setAttribute("src", "https://accounts.google.com/gsi/client");
document.head.appendChild(script);

type ResponseData = {
  jwt: string;
};

async function handleCredentialResponse(response: any) {
  console.log("ID token: " + response.credential);

  try {
    const res = await fetch("http://localhost:3001/api/v1/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token: response.credential }),
    });

    if (res.ok) {
      const data: ResponseData = await res.json();

      // Save JWT token to cookie
      const cookie = useCookie("jwt", { httpOnly: true, secure: true });
      cookie.value = data.jwt;

      console.log("Login successful!", data);
    } else {
      console.error("Login failed.");
    }
  } catch (error) {
    console.error(error);
  }
}

window.handleCredentialResponse = handleCredentialResponse;
</script>
