import { useEffect } from "react";

export function LocalBusinessSchema() {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "GeneralContractor",
      "name": "M&K Contractors LLC",
      "description": "Specialty excavation and site contracting firm serving Eastern and Central Pennsylvania. Family owned, no subcontracting.",
      "telephone": "(267) 221-6226",
      "email": "Info@mkcontractorspa.com",
      "address": {"@type": "PostalAddress", "streetAddress": "1043 Koffel Rd", "addressLocality": "Hatfield", "addressRegion": "PA", "postalCode": "19440", "addressCountry": "US"},
      "areaServed": ["Bucks County, PA", "Montgomery County, PA", "Chester County, PA", "Delaware County, PA", "Lehigh County, PA", "Northampton County, PA", "Berks County, PA", "Philadelphia, PA"],
      "openingHours": "Mo-Fr 07:00-17:00",
      "priceRange": "$$",
      "url": "https://mkcontractorspa.com",
      "image": "https://mkcontractorspa.com/og-image.jpg",
      "logo": "https://mkcontractorspa.com/mk-logo.png",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Excavation & Site Contracting Services",
        "itemListElement": [
          {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Public Sector & Infrastructure", "url": "https://mkcontractorspa.com/services/public-sector-infrastructure"}},
          {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Site Development - Residential", "url": "https://mkcontractorspa.com/services/commercial-site-development"}},
          {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Utility Excavation", "url": "https://mkcontractorspa.com/services/utility-excavation"}},
          {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Stormwater Management & Erosion Control", "url": "https://mkcontractorspa.com/services/stormwater-management"}},
          {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Site Restoration & Specialized Repairs", "url": "https://mkcontractorspa.com/services/site-restoration"}}
        ]
      }
    });
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, []);
  
  return null;
}
