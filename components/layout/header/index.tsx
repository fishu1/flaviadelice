"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <nav className="navbar">
        <Link href="/" className="logo">
          Flaviadelice
        </Link>

        {/* Desktop menu */}
        <ul className={`nav-links ${open ? "active" : ""}`}>
          <li>
            <Link href="/" onClick={() => setOpen(false)}>
              Prima pagină
            </Link>
          </li>

          <li>
            <Link href="/galerie" onClick={() => setOpen(false)}>
              Galerie
            </Link>
          </li>

          <li>
            <Link href="/contact" onClick={() => setOpen(false)}>
              Contact
            </Link>
          </li>
        </ul>

        {/* Hamburger */}
        <button className="hamburger" onClick={() => setOpen(!open)}>
          {open ? "✕" : "☰"}
        </button>
      </nav>
    </header>
  );
}
