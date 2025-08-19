import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST() {
  const refresh = (await cookies()).get("refresh")?.value;
  if (!refresh) {
    return NextResponse.json({ error: "No refresh token" }, { status: 401 });
  }

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/token/refresh/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ refresh }),
  });

  if (!res.ok) {
    return NextResponse.json({ error: "Refresh failed" }, { status: 401 });
  }

  const data = await res.json();

  const response = NextResponse.json({ success: true });
  response.cookies.set("access", data.access, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 5, // 5 min
  });

  return response;
}
