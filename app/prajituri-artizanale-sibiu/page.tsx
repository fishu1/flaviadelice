import Link from "next/link";
import Image from "next/image";

const PHONE = "40752606480";
const waUrl = (msg: string) =>
  `https://wa.me/${PHONE}?text=${encodeURIComponent(msg)}`;

export const metadata = {
  title: "Prăjituri Artizanale Sibiu | Pe Comandă - Flavia Delice",
  description:
    "Prăjituri artizanale pe comandă în Sibiu pentru evenimente, botezuri și nunți. Fursecuri, tarte și mini-prăjituri făcute manual. Comandă pe WhatsApp!",
  alternates: { canonical: "https://flaviadelice.ro/prajituri-artizanale-sibiu" },
  openGraph: {
    title: "Prăjituri Artizanale Sibiu | Flavia Delice",
    description:
      "Prăjituri artizanale pe comandă în Sibiu pentru evenimente, făcute manual cu ingrediente premium.",
    url: "https://flaviadelice.ro/prajituri-artizanale-sibiu",
    type: "website",
    locale: "ro_RO",
    images: ["https://flaviadelice.ro/og-prajituri-artizanale.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Prăjituri artizanale Sibiu",
      serviceType: "Prăjituri artizanale pe comandă",
      description:
        "Prăjituri artizanale pe comandă, făcute manual în Sibiu pentru evenimente, botezuri și nunți.",
      areaServed: { "@type": "City", name: "Sibiu" },
      provider: { "@id": "https://flaviadelice.ro/#business" },
      url: "https://flaviadelice.ro/prajituri-artizanale-sibiu",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Acasă", item: "https://flaviadelice.ro" },
        { "@type": "ListItem", position: 2, name: "Prăjituri artizanale Sibiu", item: "https://flaviadelice.ro/prajituri-artizanale-sibiu" },
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
          <Link href="/">Acasă</Link> <span>/</span> <span>Prăjituri artizanale</span>
        </nav>

        <header className="pilon-header">
          <h1>Prăjituri artizanale Sibiu</h1>
          <p className="pilon-lead">
            Prăjituri artizanale făcute manual în Sibiu, pe comandă, pentru
            evenimente, botezuri și nunți — un colț dulce care încântă toți
            invitații.
          </p>
          <a href={waUrl("Bună ziua! Aș dori prăjituri artizanale pentru un eveniment.")} target="_blank" rel="noopener noreferrer" className="btn-primary">
            Comandă pe WhatsApp
          </a>
        </header>

        <section className="pilon-galerie">
          <Image src="/uploads/cake4.png" alt="Prăjituri artizanale pe comandă Sibiu" width={800} height={600} style={{ width: "100%", height: "auto", borderRadius: "12px" }} />
          <Image src="/uploads/cake5.png" alt="Fursecuri și mini-prăjituri artizanale Sibiu" width={800} height={600} style={{ width: "100%", height: "auto", borderRadius: "12px" }} />
          <Image src="/uploads/cake2.png" alt="Prăjituri fine pentru evenimente Sibiu" width={800} height={600} style={{ width: "100%", height: "auto", borderRadius: "12px" }} />
        </section>

        <section className="pilon-text">
          <h2>Dulciuri fine pentru fiecare eveniment</h2>
          <p>
            La Flavia Delice pregătim <strong>prăjituri artizanale în Sibiu</strong>{" "}
            într-o gamă variată — de la fursecuri și tarte fine până la
            mini-prăjituri care se potrivesc temei evenimentului tău. Fiecare
            desert este făcut manual, cu ingrediente premium și mult drag.
          </p>
          <h2>Cum comanzi</h2>
          <p>
            Spune-ne pe WhatsApp ce fel de eveniment organizezi și câți invitați
            aștepți, iar noi îți propunem un aranjament de{" "}
            <strong>prăjituri pe comandă în Sibiu</strong>, proaspete și frumos
            prezentate, gata la timp.
          </p>
        </section>

        <section className="pilon-cta">
          <h2>Comandă prăjiturile tale</h2>
          <a href={waUrl("Bună ziua! Aș dori prăjituri artizanale pentru un eveniment.")} target="_blank" rel="noopener noreferrer" className="btn-primary">
            Scrie-ne pe WhatsApp
          </a>
          <p className="pilon-back">
            Vezi și{" "}
            <Link href="/">cofetăria noastră artizanală din Sibiu</Link> sau{" "}
            <Link href="/torturi-aniversare-sibiu">torturile de aniversare</Link>.
          </p>
        </section>
      </article>
    </>
  );
}