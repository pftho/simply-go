import { Request } from "express";
import { expressjwt as jwt } from "express-jwt";

const getTokenFromHeaders = function (req: Request) {
  if (
    req.headers.authorization &&
    req.headers.authorization.split(" ")[0] === "Bearer"
  ) {
    const token = req.headers.authorization.split(" ")[1];
    return token;
  }
  return;
};

const isAuthenticated = jwt({
  secret: process.env.TOKEN_SECRET || "DEFAULT_TOKEN_SECRET",
  algorithms: ["HS256"],
  requestProperty: "userAuth",
  getToken: getTokenFromHeaders,
});

export interface AuthenticatedRequest extends Request {
  userAuth: { _id: string; email: string; username: string };
}

export { isAuthenticated };
