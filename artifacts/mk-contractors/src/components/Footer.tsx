import { Link } from "wouter";
import { Phone, ArrowRight } from "lucide-react";

export function Footer() {
  const serviceLinks = [
    { label: "Public Sector & Infrastructure", href: "/services/public-sector-infrastructure" },
    { label: "Commercial Site Development", href: "/services/commercial-site-development" },
    { label: "Utility Excavation", href: "/services/utility-excavation" },
    { label: "Demolition Services", href: "/services/demolition" },
    { label: "Retaining Walls & Hardscaping", href: "/services/retaining-walls" },
  ];

  return (
    <footer className="bg-gradient-to-b from-[#2a2a2e] to-[#1c1c1e] border-t border-white/5 pt-20 pb-8 subtle-noise">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-16">
          
          <div>
            <Link href="/" className="inline-block mb-8">
              <img
                src="/mk-logo.png"
                alt="M&K Contractors LLC — Hatfield, PA"
                className="h-20 w-auto object-contain"
              />
            </Link>
            <p className="text-white/40 mb-8 max-w-sm leading-relaxed text-sm">
              Precision Excavation. Unmatched Reliability. Specialty excavation and site contracting serving Eastern and Central Pennsylvania.
            </p>
            <a href="tel:+12672216226" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                <Phone className="h-4 w-4 text-accent" />
              </div>
              <span className="text-white font-semibold text-lg group-hover:text-accent transition-colors">(267) 221-6226</span>
            </a>
          </div>

          <div>
            <h3 className="font-display font-bold text-sm text-white/30 mb-8 uppercase tracking-[0.2em]">Quick Links</h3>
            <ul className="space-y-4">
              {[
                { label: "Home", href: "/" },
                { label: "About Us", href: "/about-us" },
                { label: "Projects", href: "/projects" },
                { label: "Contact Us", href: "/contact" },
              ].map((link, idx) => (
                <li key={idx}>
                  <Link href={link.href} className="text-white/60 hover:text-accent transition-colors duration-300 flex items-center group/link text-sm">
                    <ArrowRight className="h-3 w-3 mr-2 opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all duration-300 text-accent" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display font-bold text-sm text-white/30 mb-8 uppercase tracking-[0.2em]">Services</h3>
            <ul className="space-y-4">
              {serviceLinks.map((service, idx) => (
                <li key={idx}>
                  <Link href={service.href} className="text-white/60 hover:text-accent transition-colors duration-300 flex items-center group/link text-sm">
                    <ArrowRight className="h-3 w-3 mr-2 opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all duration-300 text-accent" />
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display font-bold text-sm text-white/30 mb-8 uppercase tracking-[0.2em]">Service Areas</h3>
            <ul className="grid grid-cols-1 gap-3 text-sm text-white/50">
              {["Bucks County", "Montgomery County", "Chester County", "Delaware County", "Lehigh County", "Northampton County", "Berks County", "Greater Philadelphia"].map((area, idx) => (
                <li key={idx} className="flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent/40 mr-3" />
                  {area}
                </li>
              ))}
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/30 tracking-wider uppercase">
          <p>© 2026 M&K Contractors LLC. All rights reserved.</p>
          <p className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500/80" />
            Fully Licensed & Insured in Pennsylvania
          </p>
        </div>
      </div>
    </footer>
  );
}
