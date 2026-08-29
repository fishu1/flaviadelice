"use client";

import Image from "next/image";
import { useState } from "react";

export default function ChoicesLightbox() {
  const [open, setOpen] = useState(false);

  return (
    <div className="choices">
      <Image
        src="/uploads/optiuni-torturi/optiuni2.jpeg"
        alt="Opțiuni torturi artizanale pe comandă în Sibiu - Flavia Delice"
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
            alt="Opțiuni torturi personalizate Sibiu"
            width={1000}
            height={800}
            style={{ maxWidth: "90%", maxHeight: "90%", width: "auto", height: "auto" }}
          />
        </div>
      )}
    </div>
  );
}