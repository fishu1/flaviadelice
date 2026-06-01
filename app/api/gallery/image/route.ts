// 📁 FIȘIER: app/api/gallery/image/route.ts
import { NextRequest, NextResponse } from "next/server";
import { deleteImage, deleteFolder } from "@/lib/gallery";
import { isAuthenticated } from "@/lib/auth";

// DELETE /api/gallery/image?folder=x&file=y   -> sterge o imagine (doar admin)
// DELETE /api/gallery/image?folder=x          -> sterge tot folderul (doar admin)
export async function DELETE(req: NextRequest) {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: "Neautorizat." }, { status: 401 });
  }

  const { searchParams } = new URL(req.url);
  const folder = searchParams.get("folder");
  const file = searchParams.get("file");

  if (!folder) {
    return NextResponse.json({ error: "Folder lipsă." }, { status: 400 });
  }

  if (file) {
    deleteImage(folder, file);
  } else {
    deleteFolder(folder);
  }

  return NextResponse.json({ ok: true });
}