import { publicRoutes } from "@/router/routes";
import { NextURL } from "next/dist/server/web/next-url";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import path from "path";

export const verifyAuth = async (request: NextRequest) => {
  const REDIRECT_WHITOUT_AUTHENTICATED_ROUTE = "/sign-in";
  const path = request.nextUrl.pathname;
  console.log("Middleware => VERIFYAUTH", path);

  const publicRoute = publicRoutes.find((route) => route.path === path);
  const token = await(await cookies()).get("authjs.session-token");

  if (!token && !publicRoute) {
    const redirectUrl = request.nextUrl.clone();
    redirectUrl.pathname = REDIRECT_WHITOUT_AUTHENTICATED_ROUTE;
    return NextResponse.redirect(redirectUrl);
  }

  if (token && publicRoute && publicRoute.whenAuthenticated === "redirect") {
    const redirectUrl = request.nextUrl.clone();
    redirectUrl.pathname = "/";
    return NextResponse.redirect(redirectUrl);
  }
  return NextResponse.next();
};
