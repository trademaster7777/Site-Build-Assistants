import { Link } from "wouter";
import { Phone } from "lucide-react";

export function Footer() {
  const serviceLinks = [
    { label: "Public Sector & Infrastructure", href: "/services/public-sector-infrastructure" },
    { label: "Commercial Site Development", href: "/services/commercial-site-development" },
    { label: "Utility Excavation", href: "/services/utility-excavation" },
    { label: "Demolition Services", href: "/services/demolition" },
    { label: "Retaining Walls & Hardscaping", href: "/services/retaining-walls" },
  ];

  return (
    <footer className="bg-background border-t border-border pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Column 1: Logo & Tagline */}
          <div>
            <Link href="/" className="flex flex-col inline-block mb-6">
              <span className="font-display font-black text-3xl text-foreground tracking-tight leading-none">M&K</span>
              <span className="font-sans font-bold text-[10px] text-accent tracking-[0.2em] mt-1">CONTRACTORS LLC</span>
            </Link>
            <p className="text-muted-foreground mb-6 max-w-sm">
              Precision Excavation. Unmatched Reliability. Specialty excavation and site contracting serving Pennsylvania.
            </p>
            <a href="tel:+12672216226" className="flex items-center space-x-2 text-accent font-semibold hover:text-accent-alt transition-colors">
              <Phone className="h-5 w-5" />
              <span>(267) 221-6226</span>
            </a>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-display font-bold text-lg text-foreground mb-6 uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-4">
              <li><Link href="/" className="text-muted-foreground hover:text-accent transition-colors">Home</Link></li>
              <li><Link href="/about-us" className="text-muted-foreground hover:text-accent transition-colors">About Us</Link></li>
              <li><Link href="/projects" className="text-muted-foreground hover:text-accent transition-colors">Projects</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-accent transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="font-display font-bold text-lg text-foreground mb-6 uppercase tracking-wider">Services</h3>
            <ul className="space-y-4">
              {serviceLinks.map((service, idx) => (
                <li key={idx}>
                  <Link href={service.href} className="text-muted-foreground hover:text-accent transition-colors">
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Service Areas */}
          <div>
            <h3 className="font-display font-bold text-lg text-foreground mb-6 uppercase tracking-wider">Service Areas</h3>
            <p className="text-muted-foreground mb-4">Proudly serving commercial and public sector clients across:</p>
            <ul className="grid grid-cols-1 gap-2 text-sm text-muted-foreground">
              <li>Bucks County</li>
              <li>Montgomery County</li>
              <li>Chester County</li>
              <li>Delaware County</li>
              <li>Lehigh County</li>
              <li>Northampton County</li>
              <li>Berks County</li>
              <li>Greater Philadelphia Region</li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© 2026 M&K Contractors LLC. All rights reserved.</p>
          <p>Fully Licensed & Insured in Pennsylvania</p>
        </div>
      </div>
    </footer>
  );
}
