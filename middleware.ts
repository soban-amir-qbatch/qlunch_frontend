import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtVerify } from "jose";

const AUTH_PAGES = ["/", "/login", "/signup"];
const PROTECTED_PAGES = ["/home", "/profile", "/restaurant", "/search", "/account"];

// helper: verify JWT using jose
async function verifyJWT(token: string) {
  try {
    const secret = new TextEncoder().encode(process.env.JWT_SECRET!);
    const { payload } = await jwtVerify(token, secret);
    return payload; // decoded payload if valid
  } catch (err) {
    return null; // invalid or expired
  }
}

// helper: try refreshÍ
async function refreshAccessToken(refreshToken: string, req: NextRequest) {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/token/refresh/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ refresh: refreshToken }),
    });

    console.log("Refresh response:", response.status, response.statusText);

    if (response.ok) {
      const data = await response.json();

      const res = NextResponse.next();
      res.cookies.set("access", data.access, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        path: "/",
      });
      return res;
    }
  } catch {
    return null;
  }
  return null;
}

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const accessToken = req.cookies.get("access")?.value;
  const refreshToken = req.cookies.get("refresh")?.value;

  // If visiting login/signup and already logged in → redirect away
  if (AUTH_PAGES.includes(pathname)) {

     if (!accessToken) {
      console.log("No access token found");
      if (refreshToken) {
        const refreshed = await refreshAccessToken(refreshToken, req);
        if (refreshed) return NextResponse.redirect(new URL("/home", req.url));
      }
    }

    const valid = await verifyJWT(accessToken!);
    if (valid) {
      return NextResponse.redirect(new URL("/home", req.url));
    }
  }

  // If accessing protected pages
  if (PROTECTED_PAGES.some((p) => pathname.startsWith(p))) {
    // Case 1: no access token
    if (!accessToken) {
      console.log("No access token found");
      if (refreshToken) {
        const refreshed = await refreshAccessToken(refreshToken, req);
        if (refreshed) return refreshed;
      }
      return NextResponse.redirect(new URL("/", req.url));
    }

    // Case 2: access token exists → validate
    const valid = await verifyJWT(accessToken);
    if (valid) {
      return NextResponse.next();
    }

    // Case 3: access token invalid/expired → try refresh
    if (refreshToken) {
      const refreshed = await refreshAccessToken(refreshToken, req);
      if (refreshed) return refreshed;
    }

    // Still invalid
    return NextResponse.redirect(new URL("/", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/home/:path*", "/profile/:path*", "/restaurant/:path*", "/search/:path*", "/account/:path*", "/login", "/signup"],
};
