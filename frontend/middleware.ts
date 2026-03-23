import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const hostname = request.headers.get("host") || "";

  if (hostname.startsWith("tech-class.")) {
    const path = request.nextUrl.pathname;
    if (path === "/") {
      return NextResponse.rewrite(new URL("/lessons", request.url));
    }
    if (!path.startsWith("/lessons")) {
      return NextResponse.redirect(new URL("/lessons", request.url), 308);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|favicon.ico|.*\\.).*)"],
};
