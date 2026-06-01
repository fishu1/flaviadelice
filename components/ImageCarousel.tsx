"use client";
// 📁 FIȘIER: components/ImageCarousel.tsx

import { useState } from "react";

interface Props {
  images: string[];
  name: string;
}

export default function ImageCarousel({ images, name }: Props) {
  const [idx, setIdx] = useState(0);

  if (!images.length) return null;

  // O singura imagine -> fara carusel
  if (images.length === 1) {
    return (
      <div className="galerie-item">
        <img src={images[0]} alt={name} className="galerie-img" />
        <span className="carousel-label">{name}</span>
      </div>
    );
  }

  const prev = () => setIdx((i) => (i - 1 + images.length) % images.length);
  const next = () => setIdx((i) => (i + 1) % images.length);

  return (
    <div className="galerie-item galerie-carousel">
      <div className="carousel-inner">
        {images.map((src, i) => (
          <img
            key={src}
            src={src}
            alt={`${name} ${i + 1}`}
            className={`galerie-img carousel-img${i === idx ? " visible" : ""}`}
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
    </div>
  );
}