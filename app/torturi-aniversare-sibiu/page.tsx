import Link from "next/link";
import Image from "next/image";

const PHONE = "40752606480";
const waUrl = (msg: string) =>
  `https://wa.me/${PHONE}?text=${encodeURIComponent(msg)}`;

export const metadata = {
  title: "Torturi Aniversare Sibiu | Personalizate - Flavia Delice",
  description:
    "Torturi de aniversare personalizate în Sibiu, făcute manual cu ingrediente premium. Comandă pe WhatsApp tortul perfect pentru ziua ta de naștere.",
  alternates: { canonical: "https://flaviadelice.ro/torturi-aniversare-sibiu" },
  openGraph: {
    title: "Torturi Aniversare Sibiu | Flavia Delice",
    description:
      "Torturi de aniversare personalizate în Sibiu, făcute manual cu ingrediente premium.",
    url: "https://flaviadelice.ro/torturi-aniversare-sibiu",
    type: "website",
    locale: "ro_RO",
    images: ["https://flaviadelice.ro/og-torturi-aniversare.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Torturi aniversare Sibiu",
      serviceType: "Torturi de aniversare personalizate",
      description:
        "Torturi de aniversare personalizate, făcute manual în Sibiu, pentru zile de naștere și aniversări.",
      areaServed: { "@type": "City", name: "Sibiu" },
      provider: { "@id": "https://flaviadelice.ro/#business" },
      url: "https://flaviadelice.ro/torturi-aniversare-sibiu",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Acasă", item: "https://flaviadelice.ro" },
        { "@type": "ListItem", position: 2, name: "Torturi aniversare Sibiu", item: "https://flaviadelice.ro/torturi-aniversare-sibiu" },
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
          <Link href="/">Acasă</Link> <span>/</span> <span>Torturi aniversare</span>
        </nav>

        <header className="pilon-header">
          <h1>Torturi aniversare Sibiu</h1>
          <p className="pilon-lead">
            Torturi de aniversare personalizate, făcute manual în Sibiu, pentru
            fiecare zi de naștere specială. Alegi tema, gustul și decorul — noi
            facem restul.
          </p>
          <a href={waUrl("Bună ziua! Aș dori un tort de aniversare.")} target="_blank" rel="noopener noreferrer" className="btn-primary">
            Comandă pe WhatsApp
          </a>
        </header>

        <section className="pilon-galerie">
          <Image src="/uploads/tort-aniversare-babi.jpeg" alt="Tort de aniversare personalizat Sibiu" width={800} height={600} style={{ width: "100%", height: "auto", borderRadius: "12px" }} />
          <Image src="/uploads/tort-aniversare-ziua-femeii.jpeg" alt="Tort aniversar cu decor personalizat Sibiu" width={800} height={600} style={{ width: "100%", height: "auto", borderRadius: "12px" }} />
          <Image src="/uploads/tort-aniversare-zi-de-nastere.jpeg" alt="Tort zi de naștere pe comandă Sibiu" width={800} height={600} style={{ width: "100%", height: "auto", borderRadius: "12px" }} />
        </section>

        <section className="pilon-text">
          <h2>Torturi personalizate pentru ziua ta de naștere</h2>
          <p>
            La Flavia Delice creăm <strong>torturi de aniversare în Sibiu</strong>{" "}
            adaptate perfect ocaziei tale. Fie că este vorba de un tort pentru
            copii, cu tematica preferată a celui mic, sau de un tort elegant
            pentru adulți, fiecare desert este pregătit manual, cu ingrediente
            premium și atenție la fiecare detaliu.
          </p>
          <h2>Cum comanzi</h2>
          <p>
            Ne scrii pe WhatsApp cu ideea ta — temă, număr de porții, data
            evenimentului — iar noi îți propunem varianta potrivită. Comanzi
            simplu și rapid un <strong>tort de aniversare pe comandă în Sibiu</strong>,
            gata la timp pentru sărbătoare.
          </p>
        </section>

        <section className="pilon-cta">
          <h2>Comandă tortul tău de aniversare</h2>
          <a href={waUrl("Bună ziua! Aș dori un tort de aniversare.")} target="_blank" rel="noopener noreferrer" className="btn-primary">
            Scrie-ne pe WhatsApp
          </a>
          <p className="pilon-back">
            Vezi și{" "}
            <Link href="/">cofetăria noastră artizanală din Sibiu</Link> sau{" "}
            <Link href="/torturi-botez-sibiu">torturile pentru botez</Link>.
          </p>
        </section>
      </article>
    </>
  );
}