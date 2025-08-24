import verifyJwt from "../utils/verifyJwt";

export default defineEventHandler(
  async (event): Promise<JwtDecodedPayload | string> => {
    const accessToken = getCookie(event, "access-token");
    if (!accessToken) {
      return "Access token not found";
    }

    const payload = verifyJwt(accessToken);
    return payload ?? "Decode failed";
  },
);
