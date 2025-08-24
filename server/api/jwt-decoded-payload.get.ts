import verifyJwt from "../utils/verifyJwt";

export default defineEventHandler(
  async (event): Promise<JwtDecodedPayload | null> => {
    const cookie = getCookie(event, "access-token");
    const payload = !!cookie ? verifyJwt(cookie) : null;
    return payload;
  },
);
