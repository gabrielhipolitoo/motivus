export { default } from "next-auth/middleware";
import {
  type MiddlewareConfig,
  type NextRequest,
  NextResponse,
} from "next/server";
import { chain } from "./midlewares/chain";
import { verifyAuth } from "./midlewares";

export const middleware = chain([verifyAuth]);

export const config: MiddlewareConfig = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
};
