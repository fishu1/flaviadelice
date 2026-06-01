// 📁 FIȘIER: app/api/gallery/route.ts
import { NextRequest, NextResponse } from "next/server";
import { listFolders, createFolder } from "@/lib/gallery";
import { isAuthenticated } from "@/lib/auth";

// GET /api/gallery -> listeaza folderele cu imagini (public)
export async function GET() {
  return NextResponse.json(listFolders());
}

// POST /api/gallery { name } -> creeaza folder (doar admin)
export async function POST(req: NextRequest) {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: "Neautorizat." }, { status: 401 });
  }
  const { name } = await req.json();
  if (!name || typeof name !== "string" || !name.trim()) {
    return NextResponse.json({ error: "Numele este obligatoriu." }, { status: 400 });
  }
  const safe = createFolder(name);
  if (!safe) {
    return NextResponse.json({ error: "Nume invalid." }, { status: 400 });
  }
  return NextResponse.json({ name: safe });
}