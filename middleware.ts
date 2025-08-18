import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtVerify } from "jose";

const AUTH_PAGES = ["/", "/login", "/signup"];
const PROTECTED_PAGES = ["/home", "/profile", "/restaurant"];

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

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const accessToken = req.cookies.get("access")?.value;
  const refreshToken = req.cookies.get("refresh")?.value;

  // If visiting login/signup and already logged in → redirect away
  if (AUTH_PAGES.includes(pathname) && accessToken) {
    const valid = await verifyJWT(accessToken);
    if (valid) {
      return NextResponse.redirect(new URL("/home", req.url));
    }
  }

  // If accessing protected pages
  if (PROTECTED_PAGES.some((p) => pathname.startsWith(p))) {
    if (!accessToken) {
      return NextResponse.redirect(new URL("/", req.url));
    }

    const valid = await verifyJWT(accessToken);
    if (valid) {
      return NextResponse.next();
    }

    // If token expired, try refreshing
    if (refreshToken) {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/token/refresh/`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ refresh: refreshToken }),
        });

        if (response.ok) {
          const data = await response.json();

          // set new access token in cookie
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
        // ignore
      }
    }

    // No refresh or failed → back to login
    return NextResponse.redirect(new URL("/", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/home/:path*", "/profile/:path*", "/restaurant/:path*", "/login", "/signup"],
};
