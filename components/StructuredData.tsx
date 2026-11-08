import {
  email,
  phone,
  services,
  siteDescription,
  siteName,
  siteUrl,
} from "@/lib/content";

// JSON-LD LocalBusiness markup for Google and AI search engines.
// Deliberately no Review / AggregateRating: add those only from real reviews.
const schema = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "@id": `${siteUrl}/#business`,
  name: siteName,
  url: `${siteUrl}/`,
  description: siteDescription,
  logo: `${siteUrl}/logo/logo-dark.svg`,
  image: `${siteUrl}/opengraph-image.jpg`,
  telephone: phone.english.tel,
  email,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Kyrenia (Girne)",
    addressCountry: "CY",
  },
  areaServed: [
    { "@type": "City", name: "Kyrenia" },
    { "@type": "AdministrativeArea", name: "Kyrenia District, Cyprus" },
  ],
  knowsLanguage: ["en", "tr"],
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "customer service",
      telephone: phone.english.tel,
      availableLanguage: "English",
    },
    {
      "@type": "ContactPoint",
      contactType: "customer service",
      telephone: phone.turkish.tel,
      availableLanguage: "Turkish",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Services",
    itemListElement: services.map((s) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: s.name,
        description: s.description,
      },
    })),
  },
};

const StructuredData = () => (
  <script
    type="application/ld+json"
    // Escape "<" so the JSON can never close the script tag
    dangerouslySetInnerHTML={{
      __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
    }}
  />
);

export default StructuredData;
