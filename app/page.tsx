import Link from "next/link";
import Image from "next/image";
import ChoicesLightbox from "./ChoicesLightbox";

export const metadata = {
  title: "Torturi Sibiu | Torturi Artizanale pe Comandă - Flavia Delice",
  description:
    "Torturi artizanale pe comandă în Sibiu. Torturi personalizate pentru aniversări, nunți și botezuri, făcute cu ingrediente premium. Comandă pe WhatsApp!",
  alternates: { canonical: "https://flaviadelice.ro" },
  openGraph: {
    title: "Torturi Sibiu | Torturi Artizanale pe Comandă - Flavia Delice",
    description:
      "Torturi artizanale pe comandă în Sibiu, făcute cu ingrediente premium.",
    url: "https://flaviadelice.ro",
    type: "website",
    locale: "ro_RO",
    images: ["https://flaviadelice.ro/og-image.jpg"],
  },
};

const images = [
  "/uploads/cake4.png",
  "/uploads/cake3.png",
  "/uploads/cake2.png",
  "/uploads/cake5.png",
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Bakery",
  "@id": "https://flaviadelice.ro/#business",
  name: "Flavia Delice",
  description:
    "Cofetărie artizanală în Sibiu. Torturi pe comandă și prăjituri artizanale pentru aniversări, nunți și botezuri.",
  url: "https://flaviadelice.ro",
  telephone: "+40752606480",
  image: "https://flaviadelice.ro/og-image.jpg",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Principesa Elisabeta, Nr. 6",
    addressLocality: "Șelimbăr",
    addressRegion: "Sibiu",
    postalCode: "557260",
    addressCountry: "RO",
  },
  geo: { "@type": "GeoCoordinates", latitude: 45.77166905899839, longitude: 24.1577066548227 },
  sameAs: [
    "https://www.facebook.com/61591818721435/",
    "https://instagram.com/flaviadelice",
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── HERO ── */}
      <div className="hero-wrap">
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

        <div className="hero-overlay" />

        <div className="hero-ornament">
          <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="200" cy="200" r="195" stroke="#C9A84C" strokeWidth="0.5" strokeDasharray="4 8" />
            <circle cx="200" cy="200" r="170" stroke="#C9A84C" strokeWidth="0.3" opacity="0.5" />
            <circle cx="200" cy="200" r="4" fill="#C9A84C" />
            {[0, 45, 90, 135, 180, 225, 270, 315].map((a) => (
              <line key={a}
                x1={200 + 175 * Math.cos((a * Math.PI) / 180)}
                y1={200 + 175 * Math.sin((a * Math.PI) / 180)}
                x2={200 + 190 * Math.cos((a * Math.PI) / 180)}
                y2={200 + 190 * Math.sin((a * Math.PI) / 180)}
                stroke="#C9A84C" strokeWidth="1"
              />
            ))}
          </svg>
        </div>

        <div className="hero-content">
          <p className="hero-tagline">Bine ai venit la FlaviaDelice</p>
          <h1 className="hero-title">
            <span>Torturi și prăjituri artizanale în</span>
            <span className="hero-title-gold">Sibiu</span>
          </h1>
          <div className="hero-divider">
            <span />
            <span className="hero-divider-diamond">◆</span>
            <span />
          </div>
          <p className="hero-desc">
            Torturi și prăjituri pe comandă, create cu pasiune și
            ingrediente premium în Sibiu
          </p>
          <div className="hero-buttons">
            <Link href="/galerie" className="btn-secondary">GALERIE</Link>
          </div>

          <div className="hero-social">
            <span className="hero-social-text">Dă-ne un follow la pagina de</span>
            <div className="hero-social-btns">
              <a href="https://www.facebook.com/61591818721435/" target="_blank" rel="noopener noreferrer" className="hero-social-btn" aria-label="Facebook">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.96.93-1.96 1.89v2.25h3.33l-.53 3.49h-2.8V24C19.61 23.1 24 18.1 24 12.07z"/></svg>
                Facebook
              </a>
              <a href="https://instagram.com/flaviadelice" target="_blank" rel="noopener noreferrer" className="hero-social-btn" aria-label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41-.56-.22-.96-.48-1.38-.9-.42-.42-.68-.82-.9-1.38-.16-.42-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41 1.27-.06 1.65-.07 4.85-.07M12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63c-.79.3-1.46.72-2.12 1.38C1.36 2.67.94 3.34.63 4.14.33 4.9.13 5.78.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91.3.79.72 1.46 1.38 2.12.66.66 1.33 1.08 2.12 1.38.76.3 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56.79-.3 1.46-.72 2.12-1.38.66-.66 1.08-1.33 1.38-2.12.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91-.3-.79-.72-1.46-1.38-2.12C21.33 1.36 20.66.94 19.86.63 19.1.33 18.22.13 16.95.07 15.67.01 15.26 0 12 0zm0 5.84a6.16 6.16 0 100 12.32 6.16 6.16 0 000-12.32zM12 16a4 4 0 110-8 4 4 0 010 8zm6.41-10.85a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z"/></svg>
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ── FEATURES ── */}
      <div className="gold-line" />
      <div className="features">
        {[
          { icon: "🎂", val: "Torturi", label: "la comandă" },
          { icon: "🍰", val: "Prăjituri", label: "artizanale" },
          { icon: "✨", val: "Ingrediente", label: "premium" },
        ].map((f) => (
          <div className="feature-item" key={f.label}>
            <span className="feature-icon">{f.icon}</span>
            <span className="feature-val">{f.val}</span>
            <span className="feature-label">{f.label}</span>
          </div>
        ))}
      </div>
      <div className="gold-line" />

      {/* ── INTRO TEXT SEO ── */}
      <section className="intro-seo">
        <h2>Cofetărie artizanală în Sibiu</h2>
        <p>
          La Flavia Delice, în Sibiu, facem <strong>torturi artizanale</strong>,
          pe comandă, pentru fiecare moment special. Fie că ai nevoie de un tort
          de aniversare, un tort de nuntă sau botez, ori de prăjituri fine pentru
          un eveniment, fiecare desert este creat manual, cu ingrediente premium
          și mult drag.
        </p>
        <p>
          Comanzi simplu <strong>torturi pe comandă în Sibiu</strong>, adaptate
          temei și gusturilor tale. Ne poți scrie direct pe WhatsApp pentru a
          discuta detaliile și a primi tortul potrivit ocaziei tale.
        </p>
      </section>

      {/* ── CATEGORII / PILONI ── */}
      <section className="categorii">
        <h2>Ce pregătim pentru tine</h2>
        <div className="categorii-grid">
          <Link href="/torturi-aniversare-sibiu" className="categorie-card">
            <h3>Torturi aniversare</h3>
            <p>Torturi personalizate pentru zile de naștere în Sibiu.</p>
            <br />
            <span className="vezi-pagina">Vezi pagina</span>
          </Link>
          <Link href="/torturi-botez-sibiu" className="categorie-card">
            <h3>Torturi pentru botez</h3>
            <p>Torturi delicate pentru botezul celui mic.</p>
            <br />
            <span className="vezi-pagina">Vezi pagina</span>
          </Link>
          <Link href="/prajituri-artizanale-sibiu" className="categorie-card">
            <h3>Prăjituri pe comandă</h3>
            <p>Prăjituri și dulciuri pentru evenimente în Sibiu.</p>
            <br />
            <span className="vezi-pagina">Vezi pagina</span>
          </Link>
        </div>
      </section>

      {/* ── CHOICES IMAGE (client) ── */}
      <ChoicesLightbox />

      {/* ── DESPRE ── */}
      <section className="despre-wrap">
        <div className="despre-content">
          <p className="despre-tag">Povestea noastră</p>
          <h2 className="despre-title">Făcut cu drag,<br />servit cu bucurie</h2>
          <p className="despre-desc">
            Totul a început cu o prăjitură simplă, făcută într-o după-amiază
            liniștită, în bucătăria bunicii. Flavia, o fetiță curioasă de 8 ani,
            o privea cu atenție cum fiecare ingredient se transforma în ceva magic.
            Astăzi, Flavia Delice este cofetăria din Sibiu unde pasiunea pentru
            deserturi artizanale prinde viață.
          </p>
          <div className="despre-stats">
            {[["500+", "Torturi livrate"], ["5★", "Recenzii clienți"], ["3+", "Ani experiență"]].map(([nr, label]) => (
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
          ].map((t) => (
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