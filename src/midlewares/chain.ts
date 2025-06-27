import { NextMiddleware, NextRequest, NextResponse } from "next/server";

type MiddlewareFactory = (
  req: NextRequest
) => NextResponse | Promise<NextResponse>;

export function chain(middlwares: MiddlewareFactory[]) {
  return async function (req: NextRequest) {
    for (const middleware of middlwares) {
      const response = await middleware(req);
      if (response !== NextResponse.next()) {
        return response;
      }
    }
    return NextResponse.next();
  };
}
