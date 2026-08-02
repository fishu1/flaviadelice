"use client";
// 📁 FIȘIER: components/ImageCarousel.tsx

import { useState, useEffect, useCallback } from "react";

interface Props {
  images: string[];
  name: string;
}

export default function ImageCarousel({ images, name }: Props) {
  const [idx, setIdx] = useState(0);
  // indexul imaginii deschise in lightbox; null = inchis
  const [lightbox, setLightbox] = useState<number | null>(null);

  const prev = useCallback(
    () => setIdx((i) => (i - 1 + images.length) % images.length),
    [images.length]
  );
  const next = useCallback(
    () => setIdx((i) => (i + 1) % images.length),
    [images.length]
  );

  const lbPrev = useCallback(
    () => setLightbox((i) => (i === null ? i : (i - 1 + images.length) % images.length)),
    [images.length]
  );
  const lbNext = useCallback(
    () => setLightbox((i) => (i === null ? i : (i + 1) % images.length)),
    [images.length]
  );

  // Tastatura in lightbox: Esc inchide, sageti navigheaza
  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
      else if (e.key === "ArrowLeft") lbPrev();
      else if (e.key === "ArrowRight") lbNext();
    };
    window.addEventListener("keydown", onKey);
    // blocheaza scroll-ul paginii cat timp e deschis
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightbox, lbPrev, lbNext]);

  if (!images.length) return null;

  // Lightbox-ul, comun pentru ambele cazuri
  const lb =
    lightbox !== null ? (
      <div className="lightbox" onClick={() => setLightbox(null)} role="dialog" aria-modal="true">
        <button
          className="lightbox-close"
          onClick={(e) => { e.stopPropagation(); setLightbox(null); }}
          aria-label="Închide"
        >
          ×
        </button>

        {images.length > 1 && (
          <button
            className="lightbox-nav lightbox-prev"
            onClick={(e) => { e.stopPropagation(); lbPrev(); }}
            aria-label="Înapoi"
          >
            ‹
          </button>
        )}

        <img
          src={images[lightbox]}
          alt={`${name} ${lightbox + 1}`}
          className="lightbox-img"
          onClick={(e) => e.stopPropagation()}
        />

        {images.length > 1 && (
          <button
            className="lightbox-nav lightbox-next"
            onClick={(e) => { e.stopPropagation(); lbNext(); }}
            aria-label="Înainte"
          >
            ›
          </button>
        )}

        {images.length > 1 && (
          <span className="lightbox-counter">{lightbox + 1} / {images.length}</span>
        )}
      </div>
    ) : null;

  // O singura imagine -> fara carusel
  if (images.length === 1) {
    return (
      <div className="galerie-item">
        <img
          src={images[0]}
          alt={name}
          className="galerie-img"
          onClick={() => setLightbox(0)}
          style={{ cursor: "zoom-in" }}
        />
        <span className="carousel-label">{name}</span>
        {lb}
      </div>
    );
  }

  return (
    <div className="galerie-item galerie-carousel">
      <div className="carousel-inner">
        {images.map((src, i) => (
          <img
            key={src}
            src={src}
            alt={`${name} ${i + 1}`}
            className={`galerie-img carousel-img${i === idx ? " visible" : ""}`}
            onClick={() => setLightbox(idx)}
            style={{ cursor: "zoom-in" }}
          />
        ))}
      </div>

      <button className="carousel-btn prev" onClick={prev} aria-label="Înapoi">‹</button>
      <button className="carousel-btn next" onClick={next} aria-label="Înainte">›</button>

      <div className="carousel-dots">
        {images.map((_, i) => (
          <button
            key={i}
            className={`dot${i === idx ? " active" : ""}`}
            onClick={() => setIdx(i)}
            aria-label={`Imaginea ${i + 1}`}
          />
        ))}
      </div>

      <span className="carousel-label">{name}</span>
      <span className="carousel-counter">{idx + 1}/{images.length}</span>

      {lb}
    </div>
  );
}