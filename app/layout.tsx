import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MENACE BURGER – Best Smashburger Zürich",
  description:
    "Der beste Smashburger in Zürich. Frisch, laut, uncompromising. Menace Burger, Schulgutstrasse 4, 8953 Dietikon.",
  keywords: ["Smashburger", "Zürich", "Dietikon", "Burger", "Menace Burger", "Best Burger Zürich"],
  openGraph: {
    title: "MENACE BURGER – Best Smashburger Zürich",
    description: "Der beste Smashburger in Zürich. Dietikon, Schulgutstrasse 4.",
    url: "https://menaceburger.ch",
    siteName: "Menace Burger",
    locale: "de_CH",
    type: "website",
    images: [{ url: "/images/hero-burger.png", width: 900, height: 900, alt: "Menace Burger" }],
  },
  robots: { index: true, follow: true },
  metadataBase: new URL("https://menaceburger.ch"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/aox2cwn.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
