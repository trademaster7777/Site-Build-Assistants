import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ChevronDown, Phone, MapPin, Clock } from "lucide-react";

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

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about-us" },
    { label: "Projects", href: "/projects" },
    { label: "Contact Us", href: "/contact" },
  ];

  const serviceLinks = [
    { label: "Public Sector & Infrastructure", href: "/services/public-sector-infrastructure" },
    { label: "Commercial Site Development", href: "/services/commercial-site-development" },
    { label: "Utility Excavation", href: "/services/utility-excavation" },
    { label: "Demolition Services", href: "/services/demolition" },
    { label: "Retaining Walls & Hardscaping", href: "/services/retaining-walls" },
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-background/95 backdrop-blur-md shadow-md' : 'bg-background'}`}>
      {/* Top Utility Bar */}
      <div className="bg-[#111] text-muted-foreground text-xs py-2 border-b border-white/5 hidden md:block">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <a href="tel:+12672216226" className="flex items-center space-x-2 hover:text-accent transition-colors" data-testid="link-phone-top">
              <Phone className="h-3 w-3" />
              <span>(267) 221-6226</span>
            </a>
            <div className="flex items-center space-x-2">
              <Clock className="h-3 w-3" />
              <span>Mon-Fri 7:00 AM - 5:00 PM</span>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <MapPin className="h-3 w-3" />
            <span>Pennsylvania</span>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 md:h-24">
          
          {/* Logo */}
          <Link href="/" className="flex items-center" data-testid="link-logo">
            <img
              src="/mk-logo.png"
              alt="M&K Contractors LLC — Hatfield, PA"
              className="h-14 md:h-16 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 font-sans font-medium text-sm">
            <Link href="/" className={`hover:text-accent transition-colors ${location === '/' ? 'text-accent' : 'text-foreground'}`} data-testid="link-nav-home">Home</Link>
            <Link href="/about-us" className={`hover:text-accent transition-colors ${location === '/about-us' ? 'text-accent' : 'text-foreground'}`} data-testid="link-nav-about">About Us</Link>
            
            {/* Services Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <button 
                className={`flex items-center space-x-1 hover:text-accent transition-colors ${location.startsWith('/services') ? 'text-accent' : 'text-foreground'}`}
                data-testid="button-nav-services"
              >
                <span>Services</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              
              {/* Dropdown Menu */}
              <div className={`absolute top-full left-0 pt-4 w-64 transition-all duration-200 ${servicesDropdownOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 translate-y-2 invisible'}`}>
                <div className="bg-secondary border border-border shadow-xl rounded-sm overflow-hidden flex flex-col">
                  {serviceLinks.map((service, idx) => (
                    <Link 
                      key={idx} 
                      href={service.href} 
                      className="px-4 py-3 text-sm text-foreground hover:bg-white/5 hover:text-accent transition-colors border-b border-border last:border-0"
                      data-testid={`link-nav-service-${idx}`}
                    >
                      {service.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link href="/projects" className={`hover:text-accent transition-colors ${location === '/projects' ? 'text-accent' : 'text-foreground'}`} data-testid="link-nav-projects">Projects</Link>
            <Link href="/contact" className={`hover:text-accent transition-colors ${location === '/contact' ? 'text-accent' : 'text-foreground'}`} data-testid="link-nav-contact">Contact Us</Link>
          </nav>

          {/* CTA Button (Desktop) */}
          <div className="hidden lg:block">
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center px-6 py-3 bg-accent text-background font-sans font-semibold text-sm uppercase tracking-widest hover:bg-accent-alt transition-colors rounded-sm"
              data-testid="link-nav-cta"
            >
              Request a Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-background border-t border-border shadow-2xl h-screen overflow-y-auto pb-32">
          <div className="flex flex-col p-4 space-y-2">
            <Link href="/" className="px-4 py-3 text-lg font-medium text-foreground hover:text-accent" data-testid="link-mobile-home">Home</Link>
            <Link href="/about-us" className="px-4 py-3 text-lg font-medium text-foreground hover:text-accent" data-testid="link-mobile-about">About Us</Link>
            
            <div className="px-4 py-3 flex flex-col space-y-2">
              <span className="text-lg font-medium text-muted-foreground">Services</span>
              <div className="flex flex-col pl-4 space-y-2 border-l-2 border-border mt-2">
                {serviceLinks.map((service, idx) => (
                  <Link key={idx} href={service.href} className="py-2 text-foreground hover:text-accent" data-testid={`link-mobile-service-${idx}`}>
                    {service.label}
                  </Link>
                ))}
              </div>
            </div>

            <Link href="/projects" className="px-4 py-3 text-lg font-medium text-foreground hover:text-accent" data-testid="link-mobile-projects">Projects</Link>
            <Link href="/contact" className="px-4 py-3 text-lg font-medium text-foreground hover:text-accent" data-testid="link-mobile-contact">Contact Us</Link>
            
            <div className="pt-6 mt-4 border-t border-border px-4 flex flex-col space-y-4">
              <a href="tel:+12672216226" className="flex items-center space-x-3 text-accent font-medium text-lg">
                <Phone className="h-5 w-5" />
                <span>(267) 221-6226</span>
              </a>
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center px-6 py-4 bg-accent text-background font-sans font-semibold uppercase tracking-widest text-center mt-4 rounded-sm"
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
