// 📁 FIȘIER: app/(pages)/galerie/page.tsx
import { listFolders } from "@/lib/gallery";
import ImageCarousel from "@/components/ImageCarousel";

// Pagina se regenereaza la fiecare cerere (ca sa vada imaginile noi imediat)
export const dynamic = "force-dynamic";

export default function GaleriePage() {
  const folders = listFolders().filter((f) => f.images.length > 0);

  return (
    <div className="galerie-wrap">
      <div className="galerie-header">
        <p className="despre-tag">Fotografii</p>
        <h1 className="despre-title">Galeria noastră</h1>
        <div className="hero-divider" style={{ maxWidth: 300, margin: "1.5rem auto 0" }}>
          <span /><span className="hero-divider-diamond">◆</span><span />
        </div>
      </div>

      <div className="galerie-grid">
        {folders.map((folder) => (
          <ImageCarousel key={folder.name} images={folder.images} name={folder.name} />
        ))}

        {folders.length === 0 && (
          <p style={{ gridColumn: "1/-1", textAlign: "center", opacity: 0.4 }}>
            Nicio fotografie adăugată încă.
          </p>
        )}
      </div>
    </div>
  );
}