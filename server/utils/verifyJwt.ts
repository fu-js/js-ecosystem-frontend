import jwt from "jsonwebtoken";

export default (token: string): JwtDecodedPayload | null => {
  if (!token) {
    return null;
  }

  try {
    const data = jwt.verify(
      token,
      process.env.JWT_SECRET as string,
    ) as JwtDecodedPayload;
    return data;
  } catch (err) {
    console.log(`Invalid access token:`, err);
  }

  return null;
};
