import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest): NextResponse {
  if (request.nextUrl.pathname === "/")
    return NextResponse.redirect(new URL("/dashboard", request.url));

  return NextResponse.next();
}
