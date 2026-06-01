"use client";
// 📁 FIȘIER: app/(pages)/admin/page.tsx

import { useState, useEffect, useRef } from "react";

interface GalleryFolder {
  name: string;
  images: string[];
}

export default function AdminPage() {
  // Autentificare
  const [authed, setAuthed] = useState(false);
  const [checking, setChecking] = useState(true);
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");

  // Galerie
  const [folders, setFolders] = useState<GalleryFolder[]>([]);
  const [selectedFolder, setSelectedFolder] = useState("");
  const [newFolderName, setNewFolderName] = useState("");
  const [files, setFiles] = useState<FileList | null>(null);
  const [uploading, setUploading] = useState(false);
  const [msg, setMsg] = useState<{ type: "ok" | "err"; text: string } | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  const flash = (type: "ok" | "err", text: string) => {
    setMsg({ type, text });
    setTimeout(() => setMsg(null), 3500);
  };

  const loadFolders = async () => {
    const res = await fetch("/api/gallery");
    setFolders(await res.json());
  };

  // La incarcare: verificam sesiunea + listam folderele
  useEffect(() => {
    const init = async () => {
      try {
        const res = await fetch("/api/auth");
        const data = await res.json();
        setAuthed(!!data.authed);
      } catch {
        setAuthed(false);
      }
      await loadFolders();
      setChecking(false);
    };
    init();
  }, []);

  // Login
  const login = async () => {
    setLoginError("");
    const res = await fetch("/api/auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });
    if (res.ok) {
      setAuthed(true);
      setPassword("");
    } else {
      setLoginError("Parolă greșită.");
    }
  };

  // Logout
  const logout = async () => {
    await fetch("/api/auth", { method: "DELETE" });
    setAuthed(false);
  };

  // Creare folder
  const createFolder = async () => {
    if (!newFolderName.trim()) return;
    const res = await fetch("/api/gallery", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: newFolderName.trim() }),
    });
    if (res.ok) {
      const { name } = await res.json();
      setNewFolderName("");
      setSelectedFolder(name);
      flash("ok", `Folderul a fost creat.`);
      await loadFolders();
    } else {
      flash("err", "Eroare la creare folder.");
    }
  };

  // Upload
  const uploadImages = async () => {
    if (!selectedFolder || !files?.length) return;
    setUploading(true);
    const fd = new FormData();
    fd.append("folder", selectedFolder);
    Array.from(files).forEach((f) => fd.append("images", f));
    const res = await fetch("/api/upload", { method: "POST", body: fd });
    setUploading(false);
    if (fileRef.current) fileRef.current.value = "";
    setFiles(null);
    if (res.ok) {
      flash("ok", "Imaginile au fost încărcate.");
      await loadFolders();
    } else {
      flash("err", "Eroare la upload.");
    }
  };

  // Stergere imagine
  const deleteImage = async (folder: string, imgPath: string) => {
    const file = imgPath.split("/").pop()!;
    if (!confirm(`Ștergi imaginea?`)) return;
    const res = await fetch(
      `/api/gallery/image?folder=${encodeURIComponent(folder)}&file=${encodeURIComponent(file)}`,
      { method: "DELETE" }
    );
    if (res.ok) {
      flash("ok", "Imagine ștearsă.");
      await loadFolders();
    } else {
      flash("err", "Eroare la ștergere.");
    }
  };

  // Stergere folder
  const deleteFolder = async (folder: string) => {
    if (!confirm(`Ștergi secțiunea ${folder} cu tot ce conține?`)) return;
    const res = await fetch(`/api/gallery/image?folder=${encodeURIComponent(folder)}`, {
      method: "DELETE",
    });
    if (res.ok) {
      flash("ok", "Secțiune ștearsă.");
      if (selectedFolder === folder) setSelectedFolder("");
      await loadFolders();
    } else {
      flash("err", "Eroare la ștergere.");
    }
  };

  const activeFolder = folders.find((f) => f.name === selectedFolder);

  // Ecran de incarcare
  if (checking) {
    return (
      <div className="admin-wrap">
        <p style={{ opacity: 0.5 }}>Se încarcă...</p>
      </div>
    );
  }

  // Ecran de LOGIN
  if (!authed) {
    return (
      <div className="admin-wrap">
        <h1 className="admin-page-title">Autentificare admin</h1>
        <section className="admin-card" style={{ maxWidth: 400 }}>
          <div className="admin-field-group">
            <label className="admin-label">Parolă</label>
            <input
              className="admin-input"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && login()}
              placeholder="Introdu parola"
            />
          </div>
          {loginError && (
            <p style={{ color: "#c0392b", fontSize: "0.85rem", marginBottom: "0.75rem" }}>
              {loginError}
            </p>
          )}
          <button className="admin-btn" onClick={login}>Intră</button>
        </section>
      </div>
    );
  }

  // Panoul de ADMIN
  return (
    <div className="admin-wrap">
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h1 className="admin-page-title" style={{ marginBottom: 0 }}>Galerie — administrare</h1>
        <button className="admin-btn admin-btn-ghost" onClick={logout}>Ieși</button>
      </div>

      {msg && <div className={`admin-flash admin-flash-${msg.type}`} style={{ marginTop: "1rem" }}>{msg.text}</div>}

      {/* Creare sectiune */}
      <section className="admin-card" style={{ marginTop: "1.5rem" }}>
        <h2 className="admin-card-title">Creează o secțiune nouă</h2>
        <div className="admin-field-group">
          <label className="admin-label">Numele prăjiturii (ex: Tort Ciocolată)</label>
          <div className="admin-row">
            <input
              className="admin-input"
              type="text"
              placeholder="Numele secțiunii..."
              value={newFolderName}
              onChange={(e) => setNewFolderName(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && createFolder()}
            />
            <button className="admin-btn" onClick={createFolder}>+ Crează</button>
          </div>
        </div>
      </section>

      {/* Upload */}
      <section className="admin-card">
        <h2 className="admin-card-title">Adaugă imagini</h2>
        <div className="admin-field-group">
          <label className="admin-label">Selectează secțiunea</label>
          <select
            className="admin-input"
            value={selectedFolder}
            onChange={(e) => setSelectedFolder(e.target.value)}
          >
            <option value="">— alege —</option>
            {folders.map((f) => (
              <option key={f.name} value={f.name}>
                {f.name} ({f.images.length})
              </option>
            ))}
          </select>
        </div>

        {selectedFolder && (
          <div className="admin-field-group">
            <label className="admin-label">Alege imagini (poți selecta mai multe)</label>
            <div className="admin-row">
              <input
                ref={fileRef}
                className="admin-input"
                type="file"
                accept="image/*"
                multiple
                onChange={(e) => setFiles(e.target.files)}
              />
              <button className="admin-btn" onClick={uploadImages} disabled={uploading || !files?.length}>
                {uploading ? "Se încarcă..." : "Încarcă"}
              </button>
            </div>
          </div>
        )}

        {activeFolder && activeFolder.images.length > 0 && (
          <div className="admin-field-group">
            <label className="admin-label">Imagini în &bdquo;{activeFolder.name}&rdquo; — apasă × pentru ștergere</label>
            <div className="admin-thumbs">
              {activeFolder.images.map((img) => (
                <div key={img} className="admin-thumb">
                  <img src={img} alt="" />
                  <button className="admin-thumb-del" onClick={() => deleteImage(activeFolder.name, img)}>×</button>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>

      {/* Lista sectiuni */}
      <section className="admin-card">
        <h2 className="admin-card-title">Toate secțiunile</h2>
        {folders.length === 0 && <p className="admin-empty">Nicio secțiune încă.</p>}
        {folders.map((f) => (
          <div key={f.name} className="admin-section-row">
            <span><strong>{f.name}</strong> — {f.images.length} imagini</span>
            <button className="admin-btn admin-btn-danger" onClick={() => deleteFolder(f.name)}>Șterge</button>
          </div>
        ))}
      </section>
    </div>
  );
}