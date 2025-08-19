import { NextResponse } from "next/server";

export async function POST() {
  const response = NextResponse.json({ success: true });

  response.cookies.set("access", "", { httpOnly: true, expires: new Date(0) });
  response.cookies.set("refresh", "", { httpOnly: true, expires: new Date(0) });

  return response;
}
