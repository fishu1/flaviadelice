// 📁 FIȘIER: app/api/auth/route.ts
import { NextRequest, NextResponse } from "next/server";
import { ADMIN_PASSWORD, setSession, clearSession } from "@/lib/auth";

// POST /api/auth  { password }  -> login
export async function POST(req: NextRequest) {
  const { password } = await req.json();
  if (password === ADMIN_PASSWORD) {
    await setSession();
    return NextResponse.json({ ok: true });
  }
  return NextResponse.json({ error: "Parolă greșită." }, { status: 401 });
}

// DELETE /api/auth -> logout
export async function DELETE() {
  await clearSession();
  return NextResponse.json({ ok: true });
}