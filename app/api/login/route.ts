import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();

  // call Django token endpoint
  const res = await fetch("http://localhost:8000/api/auth/token/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
  }

  const data = await res.json(); // { access, refresh }

  // set tokens in httpOnly cookies
  const response = NextResponse.json({ success: true });
  response.cookies.set("access", data.access, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 5, // 5 min
  });
  response.cookies.set("refresh", data.refresh, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 7, // 7 days
  });

  return response;
}
