import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const hostname = request.headers.get("host") || "";

  if (hostname.startsWith("tech-class.")) {
    const path = request.nextUrl.pathname;
    if (path === "/") {
      return NextResponse.rewrite(new URL("/aulas", request.url));
    }
    if (!path.startsWith("/aulas")) {
      return NextResponse.redirect(new URL("/aulas", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|favicon.ico|.*\\.).*)"],
};
