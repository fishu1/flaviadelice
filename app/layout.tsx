import "@/app/globals.css";
import type { Metadata } from "next";
import { Inter, Dancing_Script } from "next/font/google";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

const inter = Inter({ subsets: ["latin"] });

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-dancing",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://flaviadelice.ro"),
  title: "Flavia Delice — Torturi și prăjituri artizanale",
  description:
    "Torturi personalizate, prăjituri și dulciuri făcute cu grijă. Comenzi pentru orice ocazie.",
  openGraph: {
    title: "Flavia Delice — Torturi și prăjituri artizanale",
    description:
      "Torturi personalizate, prăjituri și dulciuri făcute cu grijă. Comenzi pentru orice ocazie.",
    url: "https://flaviadelice.ro",
    siteName: "Flavia Delice",
    locale: "ro_RO",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Flavia Delice — torturi artizanale",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Flavia Delice — Torturi și prăjituri artizanale",
    description:
      "Torturi personalizate, prăjituri și dulciuri făcute cu grijă. Comenzi pentru orice ocazie.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ro" className={dancingScript.variable}>
      <body className={inter.className}>
        <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
          <Header />
          <main style={{ flex: 1 }}>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}