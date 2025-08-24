export default async (response: CredentialResponse) => {
  console.log("Credential response:", response);

  const cfg = useRuntimeConfig();
  const signinApiEndpoint = cfg.public.apiUrl + "/api/v1/auth/signin";

  console.log("API Endpoint:", signinApiEndpoint);

  const { data } = await useFetch<SignInResponse>(signinApiEndpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: { token: response.credential },
  });

  console.log("Data from backend:", data.value);

  const cookie = useCookie("access-token");
  cookie.value = data.value?.token;
  console.log('"access-token" cookie set successfully.');

  await navigateTo("/");
};
