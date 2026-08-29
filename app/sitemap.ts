import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const domeniu = "https://flaviadelice.ro";
  const azi = new Date();

  // Homepage + piloni = prioritate mare
  const paginiPrincipale = [
    "",
    "/torturi-aniversare-sibiu",
    "/torturi-botez-sibiu",
    "/prajituri-artizanale-sibiu",
  ];

  // Pagini secundare
  const paginiSecundare = [
    "/galerie",
    "/contact",
  ];

  // Pagini legale = prioritate mică
  const paginiLegale = [
    "/politica-de-confidentialitate",
    "/termeni-si-conditii",
  ];

  return [
    ...paginiPrincipale.map((p) => ({
      url: `${domeniu}${p}`,
      lastModified: azi,
      changeFrequency: "weekly" as const,
      priority: p === "" ? 1 : 0.9,
    })),
    ...paginiSecundare.map((p) => ({
      url: `${domeniu}${p}`,
      lastModified: azi,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...paginiLegale.map((p) => ({
      url: `${domeniu}${p}`,
      lastModified: azi,
      changeFrequency: "yearly" as const,
      priority: 0.3,
    })),
  ];
}