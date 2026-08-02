"use client";
// 📁 FIȘIER: components/ImageCarousel.tsx

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";

interface Props {
  images: string[];
  name: string;
}

export default function ImageCarousel({ images, name }: Props) {
  const [idx, setIdx] = useState(0);
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

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
      else if (e.key === "ArrowLeft") lbPrev();
      else if (e.key === "ArrowRight") lbNext();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightbox, lbPrev, lbNext]);

  if (!images.length) return null;

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

        <div className="lightbox-img-wrap" onClick={(e) => e.stopPropagation()}>
          <Image
            src={images[lightbox]}
            alt={`${name} ${lightbox + 1}`}
            fill
            sizes="92vw"
            className="lightbox-img"
            priority
          />
        </div>

        {/* Bara de control jos: prev · contor · next */}
        <div className="lightbox-toolbar" onClick={(e) => e.stopPropagation()}>
          {images.length > 1 && (
            <button className="lightbox-nav" onClick={lbPrev} aria-label="Înapoi">
              ‹
            </button>
          )}
          {images.length > 1 && (
            <span className="lightbox-counter">{lightbox + 1} / {images.length}</span>
          )}
          {images.length > 1 && (
            <button className="lightbox-nav" onClick={lbNext} aria-label="Înainte">
              ›
            </button>
          )}
        </div>
      </div>
    ) : null;

  // O singura imagine -> fara carusel
  if (images.length === 1) {
    return (
      <div className="galerie-item">
        <Image
          src={images[0]}
          alt={name}
          fill
          sizes="(max-width: 768px) 100vw, 280px"
          className="galerie-img"
          style={{ cursor: "zoom-in" }}
          onClick={() => setLightbox(0)}
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
          <div
            key={src}
            className={`carousel-slide${i === idx ? " visible" : ""}`}
          >
            <Image
              src={src}
              alt={`${name} ${i + 1}`}
              fill
              sizes="(max-width: 768px) 100vw, 280px"
              className="galerie-img"
              style={{ cursor: "zoom-in" }}
              onClick={() => setLightbox(idx)}
            />
          </div>
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