import {
  type MiddlewareConfig,
  type NextRequest,
  NextResponse,
} from "next/server";
import { chain } from "./midlewares/chain";
import { NextAuthToken, verifyAuth } from "./midlewares";
import withAuth, { NextAuthMiddlewareOptions } from "next-auth/middleware";

export const middleware = chain([verifyAuth, NextAuthToken]);

const callbackOptions: NextAuthMiddlewareOptions = {};

export default withAuth(middleware, callbackOptions);
export const config: MiddlewareConfig = {
  matcher: ["/"],
};
