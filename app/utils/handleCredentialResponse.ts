type CredenticalResponse = {
  credential: string;
};

type ResponseFromBackend = {
  message: string;
  token: string;
};

export default async (response: CredenticalResponse) => {
  console.log("Credentical response:", response);

  const { apiUrl } = useRuntimeConfig();

  const { data } = await useFetch<ResponseFromBackend>(
    apiUrl + "/api/v1/auth/login",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: { token: response.credential },
    }
  );

  console.log("Data from backend:", data);
};
