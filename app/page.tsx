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

          {/* ── Social follow ── */}
          <div className="hero-social">
            <span className="hero-social-text">Dă-ne un follow la pagina de</span>
            <div className="hero-social-btns">
              <a
                href="https://www.facebook.com/61591818721435/"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-social-btn"
                aria-label="Facebook"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.96.93-1.96 1.89v2.25h3.33l-.53 3.49h-2.8V24C19.61 23.1 24 18.1 24 12.07z"/>
                </svg>
                Facebook
              </a>
              <a
                href="https://instagram.com/flaviadelice"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-social-btn"
                aria-label="Instagram"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41-.56-.22-.96-.48-1.38-.9-.42-.42-.68-.82-.9-1.38-.16-.42-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41 1.27-.06 1.65-.07 4.85-.07M12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63c-.79.3-1.46.72-2.12 1.38C1.36 2.67.94 3.34.63 4.14.33 4.9.13 5.78.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91.3.79.72 1.46 1.38 2.12.66.66 1.33 1.08 2.12 1.38.76.3 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56.79-.3 1.46-.72 2.12-1.38.66-.66 1.08-1.33 1.38-2.12.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91-.3-.79-.72-1.46-1.38-2.12C21.33 1.36 20.66.94 19.86.63 19.1.33 18.22.13 16.95.07 15.67.01 15.26 0 12 0zm0 5.84a6.16 6.16 0 100 12.32 6.16 6.16 0 000-12.32zM12 16a4 4 0 110-8 4 4 0 010 8zm6.41-10.85a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z"/>
                </svg>
                Instagram
              </a>
            </div>
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
        src="/uploads/optiuni-torturi/optiuni2.jpeg"
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