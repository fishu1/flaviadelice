// 📁 FIȘIER: app/api/upload/route.ts
import { NextRequest, NextResponse } from "next/server";
import { writeFile } from "fs/promises";
import { existsSync, mkdirSync } from "fs";
import path from "path";
import { getFolderPath, slugifyFolder } from "@/lib/gallery"
import { isAuthenticated } from "@/lib/auth";

// POST /api/upload  (FormData: folder + images[])  -> upload (doar admin)
export async function POST(req: NextRequest) {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: "Neautorizat." }, { status: 401 });
  }

  const formData = await req.formData();
  const folder = (formData.get("folder") as string | null)?.trim();
  const files = formData.getAll("images") as File[];

  if (!folder) {
    return NextResponse.json({ error: "Folder lipsă." }, { status: 400 });
  }
  if (!files.length) {
    return NextResponse.json({ error: "Nicio imagine." }, { status: 400 });
  }

  const dir = getFolderPath(folder);
  if (!existsSync(dir)) mkdirSync(dir, { recursive: true });

  const saved: string[] = [];
  for (const file of files) {
    const ext = path.extname(file.name) || ".jpg";
    const name = `img-${Date.now()}-${Math.random().toString(36).slice(2, 7)}${ext}`;
    const buffer = Buffer.from(await file.arrayBuffer());
    await writeFile(path.join(dir, name), buffer);
    saved.push(`/uploads/${slugifyFolder(folder)}/${name}`);
  }

  return NextResponse.json({ saved });
}