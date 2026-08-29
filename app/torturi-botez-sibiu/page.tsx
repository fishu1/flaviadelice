import Link from "next/link";
import Image from "next/image";

const PHONE = "40752606480";
const waUrl = (msg: string) =>
  `https://wa.me/${PHONE}?text=${encodeURIComponent(msg)}`;

export const metadata = {
  title: "Torturi Botez Sibiu | Delicate și Personalizate - Flavia Delice",
  description:
    "Torturi de botez delicate și personalizate în Sibiu, făcute cu ingrediente premium. Comandă pe WhatsApp tortul perfect pentru botezul celui mic.",
  alternates: { canonical: "https://flaviadelice.ro/torturi-botez-sibiu" },
  openGraph: {
    title: "Torturi Botez Sibiu | Flavia Delice",
    description:
      "Torturi de botez delicate și personalizate în Sibiu, făcute cu ingrediente premium.",
    url: "https://flaviadelice.ro/torturi-botez-sibiu",
    type: "website",
    locale: "ro_RO",
    images: ["https://flaviadelice.ro/og-torturi-botez.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Torturi botez Sibiu",
      serviceType: "Torturi de botez personalizate",
      description:
        "Torturi de botez delicate și personalizate, făcute manual în Sibiu.",
      areaServed: { "@type": "City", name: "Sibiu" },
      provider: { "@id": "https://flaviadelice.ro/#business" },
      url: "https://flaviadelice.ro/torturi-botez-sibiu",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Acasă", item: "https://flaviadelice.ro" },
        { "@type": "ListItem", position: 2, name: "Torturi botez Sibiu", item: "https://flaviadelice.ro/torturi-botez-sibiu" },
      ],
    },
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="pilon">
        <nav className="pilon-breadcrumb" aria-label="Breadcrumb">
          <Link href="/">Acasă</Link> <span>/</span> <span>Torturi botez</span>
        </nav>

        <header className="pilon-header">
          <h1>Torturi botez Sibiu</h1>
          <p className="pilon-lead">
            Torturi de botez delicate și personalizate, făcute manual în Sibiu,
            pentru una dintre cele mai frumoase zile din viața celui mic.
          </p>
          <a href={waUrl("Bună ziua! Aș dori un tort de botez.")} target="_blank" rel="noopener noreferrer" className="btn-primary">
            Comandă pe WhatsApp
          </a>
        </header>

        <section className="pilon-galerie">
          <Image src="/uploads/tort-botez-stefan.jpeg" alt="Tort de botez personalizat Sibiu" width={800} height={600} style={{ width: "100%", height: "auto", borderRadius: "12px" }} />
          <Image src="/uploads/tort-aniversare-botez.jpeg" alt="Tort botez delicat pe comandă Sibiu" width={800} height={600} style={{ width: "100%", height: "auto", borderRadius: "12px" }} />
          <Image src="/uploads/tort-botez-fetite.jpeg" alt="Tort botez cu decor personalizat Sibiu" width={800} height={600} style={{ width: "100%", height: "auto", borderRadius: "12px" }} />
        </section>

        <section className="pilon-text">
          <h2>Torturi delicate pentru botezul celui mic</h2>
          <p>
            La Flavia Delice pregătim <strong>torturi de botez în Sibiu</strong>{" "}
            care se potrivesc perfect atmosferei calde a evenimentului. Alegem
            împreună tema, culorile și decorul, astfel încât tortul să
            completeze frumusețea zilei.
          </p>
          <h2>Cum comanzi</h2>
          <p>
            Scrie-ne pe WhatsApp cu detaliile botezului — data, numărul de
            invitați, tema dorită — și îți pregătim un{" "}
            <strong>tort de botez pe comandă în Sibiu</strong>, proaspăt și
            gata la timp.
          </p>
        </section>

        <section className="pilon-cta">
          <h2>Comandă tortul de botez</h2>
          <a href={waUrl("Bună ziua! Aș dori un tort de botez.")} target="_blank" rel="noopener noreferrer" className="btn-primary">
            Scrie-ne pe WhatsApp
          </a>
          <p className="pilon-back">
            Vezi și{" "}
            <Link href="/">cofetăria noastră din Sibiu</Link> sau{" "}
            <Link href="/torturi-aniversare-sibiu">torturile de aniversare</Link>.
          </p>
        </section>
      </article>
    </>
  );
}