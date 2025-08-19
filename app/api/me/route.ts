// app/api/me/route.ts
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
  const cookieStore = cookies();
  const access = cookieStore.get("access")?.value;

  if (!access) {
    return NextResponse.json({ error: "No access token" }, { status: 401 });
  }

  // Forward to Django with Bearer token
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/me/`, {
    headers: {
      Authorization: `Bearer ${access}`,
    },
  });

  if (!res.ok) {
    return NextResponse.json({ error: "Unauthorized" }, { status: res.status });
  }

  const data = await res.json();
  return NextResponse.json(data);
}
