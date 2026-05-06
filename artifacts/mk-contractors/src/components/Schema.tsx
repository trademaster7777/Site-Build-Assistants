import { useEffect } from "react";

export function LocalBusinessSchema() {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "M&K Contractors LLC",
      "telephone": "(267) 221-6226",
      "email": "Info@mkcontractorspa.com",
      "address": {"@type": "PostalAddress", "streetAddress": "1043 Koffel Rd", "addressLocality": "Hatfield", "addressRegion": "PA", "postalCode": "19440", "addressCountry": "US"},
      "areaServed": ["Bucks County, PA", "Montgomery County, PA", "Chester County, PA", "Delaware County, PA", "Lehigh County, PA", "Northampton County, PA", "Berks County, PA"],
      "openingHours": "Mo-Fr 07:00-17:00",
      "priceRange": "$$",
      "url": "https://mkcontractorspa.com"
    });
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, []);
  
  return null;
}
