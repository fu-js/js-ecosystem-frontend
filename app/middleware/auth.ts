import verifyJwt from "../../server/utils/verifyJwt";

export default defineEventHandler((event) => {
  const authHeader = event.node.req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    event.node.res.statusCode = 401;
    event.node.res.end("Unauthorized: No token provided");
    return;
  }

  try {
    const payload = verifyJwt(token);
    event.context.user = payload;
  } catch (err) {
    event.node.res.statusCode = 403;
    event.node.res.end("Forbidden: Invalid token");
    return;
  }
});
