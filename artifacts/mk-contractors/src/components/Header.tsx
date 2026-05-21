import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ChevronDown, Phone, Mail, MapPin, Clock } from "lucide-react";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const serviceLinks = [
    { label: "Public Sector & Infrastructure", href: "/services/public-sector-infrastructure" },
    { label: "Site Development - Residential", href: "/services/commercial-site-development" },
    { label: "Utility Excavation", href: "/services/utility-excavation" },
    { label: "Stormwater Management & Erosion Control", href: "/services/stormwater-management" },
    { label: "Site Restoration & Specialized Repairs", href: "/services/site-restoration" },
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'shadow-[0_4px_30px_rgba(0,0,0,0.15)]' : ''}`}>
      <div className="bg-[#1a1a1c] text-white/60 text-xs py-2.5 border-b border-white/5 hidden md:block">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center space-x-7">
            <a href="tel:+12672216226" className="flex items-center space-x-2 hover:text-accent transition-colors duration-300" data-testid="link-phone-top">
              <Phone className="h-3 w-3 text-accent" />
              <span className="tracking-wider">(267) 221-6226</span>
            </a>
            <a href="mailto:Info@mkcontractorspa.com" className="flex items-center space-x-2 hover:text-accent transition-colors duration-300" data-testid="link-email-top">
              <Mail className="h-3 w-3 text-accent" />
              <span className="tracking-wider">Info@mkcontractorspa.com</span>
            </a>
            <div className="hidden lg:flex items-center space-x-2">
              <Clock className="h-3 w-3 text-accent" />
              <span className="tracking-wider">Mon-Fri 7:00 AM - 5:00 PM</span>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <MapPin className="h-3 w-3 text-accent" />
            <span className="tracking-wider">1043 Koffel Rd, Hatfield, PA 19440</span>
          </div>
        </div>
      </div>

      <div className={`transition-all duration-500 ${isScrolled ? 'bg-white/98 backdrop-blur-xl' : 'bg-white'} border-b border-gray-200`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-24 md:h-[120px] gap-6">
            
            <Link href="/" className="flex items-center flex-shrink-0" data-testid="link-logo" aria-label="M&K Contractors LLC home">
              <img
                src="/mk-logo.png"
                alt="M&K Contractors LLC — Hatfield, PA"
                className="h-20 md:h-[104px] w-auto object-contain"
              />
            </Link>

            <nav className="hidden lg:flex items-center space-x-9 font-sans font-semibold text-[13px] tracking-wide flex-1 justify-center">
              <Link href="/" className={`relative py-2 transition-colors duration-300 ${location === '/' ? 'text-accent' : 'text-[#1C1C1E] hover:text-accent'}`} data-testid="link-nav-home">
                Home
                {location === '/' && <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-accent to-accent-alt" />}
              </Link>
              <Link href="/about-us" className={`relative py-2 transition-colors duration-300 ${location === '/about-us' ? 'text-accent' : 'text-[#1C1C1E] hover:text-accent'}`} data-testid="link-nav-about">
                About Us
                {location === '/about-us' && <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-accent to-accent-alt" />}
              </Link>
              
              <div 
                className="relative group"
                onMouseEnter={() => setServicesDropdownOpen(true)}
                onMouseLeave={() => setServicesDropdownOpen(false)}
              >
                <button 
                  className={`flex items-center space-x-1.5 relative py-2 transition-colors duration-300 ${location.startsWith('/services') ? 'text-accent' : 'text-[#1C1C1E] hover:text-accent'}`}
                  data-testid="button-nav-services"
                >
                  <span>Services</span>
                  <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180' : ''}`} />
                  {location.startsWith('/services') && <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-accent to-accent-alt" />}
                </button>
                
                <div className={`absolute top-full left-0 pt-3 w-72 transition-all duration-300 ${servicesDropdownOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 translate-y-3 invisible'}`}>
                  <div className="bg-white border border-gray-200 shadow-[0_10px_40px_rgba(0,0,0,0.12)] rounded-sm overflow-hidden">
                    {serviceLinks.map((service, idx) => (
                      <Link 
                        key={idx} 
                        href={service.href} 
                        className="px-5 py-3.5 text-sm text-[#1C1C1E] hover:bg-gray-50 hover:text-accent transition-all duration-200 border-b border-gray-100 last:border-0 flex items-center group/item"
                        data-testid={`link-nav-service-${idx}`}
                      >
                        <span className="w-1 h-1 rounded-full bg-accent/50 mr-3 group-hover/item:bg-accent transition-colors" />
                        {service.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <Link href="/projects" className={`relative py-2 transition-colors duration-300 ${location === '/projects' ? 'text-accent' : 'text-[#1C1C1E] hover:text-accent'}`} data-testid="link-nav-projects">
                Projects
                {location === '/projects' && <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-accent to-accent-alt" />}
              </Link>
              <Link href="/contact" className={`relative py-2 transition-colors duration-300 ${location === '/contact' ? 'text-accent' : 'text-[#1C1C1E] hover:text-accent'}`} data-testid="link-nav-contact">
                Contact Us
                {location === '/contact' && <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-accent to-accent-alt" />}
              </Link>
            </nav>

            <div className="hidden lg:flex items-center gap-5 flex-shrink-0">
              <a href="tel:+12672216226" className="flex items-center gap-2.5 group" data-testid="link-phone-header">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
                  <Phone className="h-4 w-4 text-accent" />
                </div>
                <div className="leading-tight">
                  <p className="text-[10px] uppercase tracking-[0.15em] text-gray-400 font-semibold">Call Us</p>
                  <p className="text-sm font-bold text-[#1C1C1E] group-hover:text-accent transition-colors">(267) 221-6226</p>
                </div>
              </a>
              <Link 
                href="/contact" 
                className="btn-premium inline-flex items-center justify-center px-6 py-3 text-[#1C1C1E] font-sans font-bold text-[12px] uppercase tracking-[0.12em] rounded-sm whitespace-nowrap"
                data-testid="link-nav-cta"
              >
                Request a Quote
              </Link>
            </div>

            <button 
              className="lg:hidden p-2 text-[#1C1C1E]"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              data-testid="button-mobile-menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white border-t border-gray-200 shadow-2xl h-screen overflow-y-auto pb-32">
          <div className="flex flex-col p-6 space-y-1">
            <Link href="/" className="px-4 py-4 text-lg font-medium text-[#1C1C1E] hover:text-accent transition-colors border-b border-gray-100" data-testid="link-mobile-home">Home</Link>
            <Link href="/about-us" className="px-4 py-4 text-lg font-medium text-[#1C1C1E] hover:text-accent transition-colors border-b border-gray-100" data-testid="link-mobile-about">About Us</Link>
            
            <div className="px-4 py-4 flex flex-col border-b border-gray-100">
              <span className="text-lg font-medium text-gray-400 mb-3">Services</span>
              <div className="flex flex-col pl-4 space-y-1 border-l-2 border-accent/30">
                {serviceLinks.map((service, idx) => (
                  <Link key={idx} href={service.href} className="py-2.5 text-[#1C1C1E] hover:text-accent transition-colors" data-testid={`link-mobile-service-${idx}`}>
                    {service.label}
                  </Link>
                ))}
              </div>
            </div>

            <Link href="/projects" className="px-4 py-4 text-lg font-medium text-[#1C1C1E] hover:text-accent transition-colors border-b border-gray-100" data-testid="link-mobile-projects">Projects</Link>
            <Link href="/contact" className="px-4 py-4 text-lg font-medium text-[#1C1C1E] hover:text-accent transition-colors border-b border-gray-100" data-testid="link-mobile-contact">Contact Us</Link>
            
            <div className="pt-8 px-4 flex flex-col space-y-4">
              <a href="tel:+12672216226" className="flex items-center space-x-3 text-accent font-semibold text-lg" data-testid="link-mobile-phone">
                <Phone className="h-5 w-5" />
                <span>(267) 221-6226</span>
              </a>
              <a href="mailto:Info@mkcontractorspa.com" className="flex items-center space-x-3 text-[#1C1C1E] font-medium text-base" data-testid="link-mobile-email">
                <Mail className="h-5 w-5 text-accent" />
                <span>Info@mkcontractorspa.com</span>
              </a>
              <p className="flex items-center space-x-3 text-[#1C1C1E] text-sm">
                <MapPin className="h-5 w-5 text-accent flex-shrink-0" />
                <span>1043 Koffel Rd, Hatfield, PA 19440</span>
              </p>
              <Link 
                href="/contact" 
                className="btn-premium inline-flex items-center justify-center px-6 py-4 text-[#1C1C1E] font-sans font-bold uppercase tracking-[0.12em] text-center rounded-sm mt-2"
              >
                Request a Quote
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
