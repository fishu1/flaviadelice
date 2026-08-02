import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const domeniu = "https://flaviadelice.ro";
  const azi = new Date();

  // Adaugi aici toate paginile reale ale site-ului
  const pagini = ["", "/galerie", "/contact", "/politica-de-confidentialitate", "/termeni-si-conditii", "/"];

  return pagini.map((p) => ({
    url: `${domeniu}${p}`,
    lastModified: azi,
    changeFrequency: "monthly",
    priority: p === "" ? 1 : 0.7,
  }));
}