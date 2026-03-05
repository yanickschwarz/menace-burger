export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: "Menace Burger",
    description: "Der beste Smashburger in Zürich – Dietikon",
    url: "https://menaceburger.ch",
    image: "https://menaceburger.ch/images/hero-burger.png",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Schulgutstrasse 4",
      addressLocality: "Dietikon",
      postalCode: "8953",
      addressCountry: "CH",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 47.4082,
      longitude: 8.4031,
    },
    servesCuisine: "American",
    priceRange: "$$",
    openingHoursSpecification: [
      { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday"], opens: "11:00", closes: "21:30" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: ["Friday"], opens: "11:00", closes: "23:00" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: ["Saturday"], opens: "12:00", closes: "23:00" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: ["Sunday"], opens: "13:00", closes: "21:00" },
    ],
    sameAs: [
      "https://www.instagram.com/menaceburger/",
      "https://www.tiktok.com/@menaceburger",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
