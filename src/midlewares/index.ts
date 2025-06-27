import { publicRoutes } from "@/router/routes";
import { NextRequest, NextResponse } from "next/server";

export const verifyAuth = async (request: NextRequest) => {
  const REDIRECT_WHITOUT_AUTHENTICATED_ROUTE = "/sign-in";
  const path = request.nextUrl.pathname;
  console.log("Middleware => VERIFYAUTH", path);

  const publicRoute = publicRoutes.find((route) => route.path === path);
  const token = request.cookies.get("next-auth.session-token");

  if (!token && !publicRoute) {
    const redirectUrl = request.nextUrl.clone();
    redirectUrl.pathname = REDIRECT_WHITOUT_AUTHENTICATED_ROUTE;
    return NextResponse.redirect(redirectUrl);
  }

  if (token && publicRoute && publicRoute.whenAuthenticated === "redirect") {
    const redirectUrl = request.nextUrl.clone();
    redirectUrl.pathname = "/dashboard";
    return NextResponse.redirect(redirectUrl);
  }
  return NextResponse.next();
};
