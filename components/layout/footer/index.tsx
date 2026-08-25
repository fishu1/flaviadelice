"use client";

import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      {/* Linie aurie sus */}
      <div className="footer-gold-top" />

      <div className="footer-inner">

        {/* Coloana 1 — Brand */}
        <div className="footer-col footer-brand">
          <span className="footer-logo">Flaviadelice</span>
          <p className="footer-tagline">
            Deserturi artizanale create cu pasiune,<br />
            servite cu drag din Sibiu.
          </p>
          <div className="footer-social">
            <a
              href="https://instagram.com/flaviadelice"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-btn"
              aria-label="Instagram"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <circle cx="12" cy="12" r="4"/>
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
              </svg>
              Instagram
            </a>
          </div>
        </div>

        {/* Coloana 2 — Navigare */}
        <div className="footer-col">
          <h3 className="footer-heading">Navigare</h3>
          <ul className="footer-links">
            <li><Link href="/">Prima pagină</Link></li>
            <li><Link href="/galerie">Galerie</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Coloana 3 — Contact */}
        <div className="footer-col">
          <h3 className="footer-heading">Contact</h3>
          <ul className="footer-contact-list">
            <li>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
              </svg>
              <a href="mailto:contact@flaviadelice.ro">contact@flaviadelice.ro</a>
            </li>
            <li>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16.92z"/>
              </svg>
              <a href="tel:+40752606480">+40 752 606 480</a>
            </li>
            <li>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
              </svg>
              Sibiu, România
            </li>
          </ul>
        </div>

        {/* Coloana 4 — Legal */}
        <div className="footer-col">
          <h3 className="footer-heading">Legal</h3>
          <ul className="footer-links">
            <li><Link href="/politica-de-confidentialitate">Politică de confidențialitate</Link></li>
            <li><Link href="/termeni-si-conditii">Termeni și condiții</Link></li>
            <li>
              <a href="https://anpc.ro" target="_blank" rel="noopener noreferrer">
                ANPC
              </a>
            </li>
            <li>
              <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer">
                SOL — Soluționarea online a litigiilor
              </a>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <div className="footer-bottom-inner">
          <span>© {year} Flavia Delice. Toate drepturile rezervate.</span>
          <span className="footer-bottom-made">
            Făcut cu <span className="footer-heart">♥</span> în Sibiu
          </span>
        </div>
      </div>
    </footer>
  );
}
