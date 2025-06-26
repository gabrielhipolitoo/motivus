import { NextRequestWithAuth } from "next-auth/middleware";
import { NextMiddleware, NextRequest, NextResponse } from "next/server";

type MiddlewareFactory = (
  req: any
) => NextResponse | Promise<NextResponse> | void;

export function chain(middlwares: MiddlewareFactory[]) {
  return async function (req: NextRequestWithAuth) {
    for (const middleware of middlwares) {
      const response = await middleware(req);
      if (response !== NextResponse.next()) {
        return response;
      }
    }
    return NextResponse.next();
  };
}
