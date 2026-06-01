// 📁 FIȘIER: lib/gallery.ts
import fs from "fs";
import path from "path";

// Folderul unde se stocheaza imaginile: public/uploads
const UPLOADS = path.join(process.cwd(), "public", "uploads");

export interface GalleryFolder {
  name: string;
  images: string[]; // cai publice: /uploads/folder/poza.jpg
}

function isImage(name: string) {
  return /\.(jpg|jpeg|png|webp|gif)$/i.test(name);
}

export function ensureUploads() {
  if (!fs.existsSync(UPLOADS)) {
    fs.mkdirSync(UPLOADS, { recursive: true });
  }
}

// Listeaza toate folderele (sectiunile) cu imaginile lor
export function listFolders(): GalleryFolder[] {
  ensureUploads();
  return fs
    .readdirSync(UPLOADS)
    .filter((entry) => fs.statSync(path.join(UPLOADS, entry)).isDirectory())
    .map((folder) => {
      const folderPath = path.join(UPLOADS, folder);
      const images = fs
        .readdirSync(folderPath)
        .filter(isImage)
        .map((img) => `/uploads/${folder}/${img}`);
      return { name: folder, images };
    });
}

// Curata un nume de folder ca sa fie sigur
export function slugifyFolder(name: string) {
  return name
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");
}

export function createFolder(name: string) {
  ensureUploads();
  const safe = slugifyFolder(name);
  if (!safe) return null;
  const dir = path.join(UPLOADS, safe);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  return safe;
}

export function getFolderPath(folder: string) {
  return path.join(UPLOADS, slugifyFolder(folder));
}

export function deleteImage(folder: string, file: string) {
  const safeFolder = slugifyFolder(folder);
  const filePath = path.join(UPLOADS, safeFolder, path.basename(file));
  if (fs.existsSync(filePath)) fs.unlinkSync(filePath);

  // Daca folderul ramane gol, il stergem
  const folderPath = path.join(UPLOADS, safeFolder);
  if (fs.existsSync(folderPath) && fs.readdirSync(folderPath).length === 0) {
    fs.rmdirSync(folderPath);
  }
}

export function deleteFolder(folder: string) {
  const folderPath = path.join(UPLOADS, slugifyFolder(folder));
  if (fs.existsSync(folderPath)) {
    fs.rmSync(folderPath, { recursive: true, force: true });
  }
}