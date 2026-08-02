"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const images = [
  "/uploads/cake4.png",
  "/uploads/cake3.png",
  "/uploads/cake2.png",
  "/uploads/cake5.png",
];

export default function Page() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* ── HERO ── */}
      <div className="hero-wrap">

        {/* Banda de imagini care se mișcă continuu */}
        <div className="hero-strip">
          <div className="hero-strip-inner">
            {[...images, ...images].map((src, i) => (
              <div
                key={i}
                className="hero-strip-img"
                style={{ backgroundImage: `url(${src})` }}
              />
            ))}
          </div>
        </div>

        {/* Overlay */}
        <div className="hero-overlay" />

        {/* Ornament auriu */}
        <div className="hero-ornament">
          <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="200" cy="200" r="195" stroke="#C9A84C" strokeWidth="0.5" strokeDasharray="4 8" />
            <circle cx="200" cy="200" r="170" stroke="#C9A84C" strokeWidth="0.3" opacity="0.5" />
            <circle cx="200" cy="200" r="4" fill="#C9A84C" />
            {[0,45,90,135,180,225,270,315].map(a => (
              <line key={a}
                x1={200 + 175 * Math.cos(a * Math.PI / 180)}
                y1={200 + 175 * Math.sin(a * Math.PI / 180)}
                x2={200 + 190 * Math.cos(a * Math.PI / 180)}
                y2={200 + 190 * Math.sin(a * Math.PI / 180)}
                stroke="#C9A84C" strokeWidth="1"
              />
            ))}
          </svg>
        </div>

        {/* Text fix */}
        <div className="hero-content">
          <p className="hero-tagline">Bine ai venit la</p>
          <h1 className="hero-title">
            <span>Cofetăria</span>
            <span className="hero-title-gold">Flaviei</span>
          </h1>
          <div className="hero-divider">
            <span />
            <span className="hero-divider-diamond">◆</span>
            <span />
          </div>
          <p className="hero-desc">
            Deserturi artizanale create cu pasiune și ingrediente premium
          </p>
          <div className="hero-buttons">
            <Link href="/galerie" className="btn-secondary">GALERIE</Link>
          </div>
        </div>

        <div className="hero-scroll-hint">
          <span>scroll</span>
          <div className="hero-scroll-line" />
        </div>
      </div>

      {/* ── FEATURES ── */}
      <div className="gold-line" />
      <div className="features">
        {[
          { icon: "🎂", val: "Torturi", label: "la comandă" },
          { icon: "🍰", val: "Prăjituri", label: "artizanale" },
          { icon: "✨", val: "Ingrediente", label: "premium" },
        ].map(f => (
          <div className="feature-item" key={f.label}>
            <span className="feature-icon">{f.icon}</span>
            <span className="feature-val">{f.val}</span>
            <span className="feature-label">{f.label}</span>
          </div>
        ))}
      </div>
      <div className="gold-line" />

  {/* ── CHOICES IMAGE ── */}
<div className="choices">
  <Image
    src="/uploads/optiuni-torturi/optiuni2.jpeg"
    alt="descriere"
    width={1600}
    height={1200}
    onClick={() => setOpen(true)}
    style={{
      cursor: "pointer",
      width: "100%",
      height: "auto",
      maxWidth: "1000px",
      display: "block",
      margin: "0 auto",
      borderRadius: "12px",
    }}
  />

  {open && (
    <div
      className="lightbox"
      onClick={() => setOpen(false)}
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.8)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000,
      }}
    >
      <Image
        src="/uploads/diverse/img-1780314255059-235ji.jpeg"
        alt="descriere"
        width={1000}
        height={800}
        style={{ maxWidth: "90%", maxHeight: "90%", width: "auto", height: "auto" }}
      />
    </div>
  )}
</div>

      {/* ── DESPRE ── */}
      <section className="despre-wrap">
        <div className="despre-content">
          <p className="despre-tag">Povestea noastră</p>
          <h2 className="despre-title">Făcut cu drag,<br />servit cu bucurie</h2>
          <p className="despre-desc">
            Totul a început cu o prăjitură simplă, făcută într-o după-amiază liniștită,
            în bucătăria bunicii. Flavia, o fetiță curioasă de 8 ani, o privea cu atenție
            cum fiecare ingredient cu grijă se transforma în ceva magic. Astăzi, Flavia Delice
            este locul unde pasiunea pentru cofetărie prinde viață — deserturi care încântă
            atât ochii, cât și papilele gustative.
          </p>
          <div className="despre-stats">
            {[["500+","Torturi livrate"],["5★","Recenzii clienți"],["3+","Ani experiență"]].map(([nr, label]) => (
              <div className="despre-stat" key={label}>
                <span className="despre-stat-nr">{nr}</span>
                <span className="despre-stat-label">{label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="despre-image">
          <div className="despre-image-placeholder">🎂</div>
        </div>
      </section>
      <div className="gold-line" />

      {/* ── TESTIMONIALE ── */}
      <section className="testimoniale-wrap">
        <p className="despre-tag" style={{ textAlign: "center" }}>Ce spun clienții</p>
        <h2 className="despre-title" style={{ textAlign: "center", marginBottom: "32px" }}>
          Bucuria lor, motivația noastră
        </h2>
        <div className="testimoniale-grid">
          {[
            { text: "Tortul de aniversare a fost absolut superb! Toți invitații au cerut rețeta. Mulțumim Flavia!", autor: "Maria P." },
            { text: "Comand de fiecare dată pentru ziua de naștere a fiicei mele. Calitate impecabilă!", autor: "Alexandru M." },
            { text: "Nu am găsit nicăieri în Sibiu ceva comparabil.", autor: "Ioana D." },
          ].map(t => (
            <div className="testimonial-card" key={t.autor}>
              <div className="testimonial-stele">★★★★★</div>
              <p className="testimonial-text">&ldquo;{t.text}&rdquo;</p>
              <span className="testimonial-nume">— {t.autor}</span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}