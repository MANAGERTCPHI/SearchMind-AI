import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const protectedRoutes = [
    "/dashboard",
    "/projects",
    "/settings",
  ];

  const isProtectedRoute = protectedRoutes.some(
    (route) =>
      pathname === route ||
      pathname.startsWith(`${route}/`)
  );

  if (!isProtectedRoute) {
    return NextResponse.next();
  }

  /*
    Authentication check placeholder.

    Later this will connect to Supabase
    session validation.

    Example:
    - Check logged-in user
    - Redirect unauthenticated users
    - Allow authenticated users through
  */

  const userSession =
    request.cookies.get("searchmind-session");

  if (!userSession) {
    return NextResponse.redirect(
      new URL("/signin", request.url)
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/projects/:path*",
    "/settings/:path*",
  ],
};
