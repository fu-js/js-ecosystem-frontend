type JwtDecodedPayload = {
  id: string;
  memberId: string;
  email: string;
  name: string;
  roles: string[];
  permissions: string[];
  iat: number;
  exp: number;
};
