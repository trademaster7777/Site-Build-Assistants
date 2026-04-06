import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { Link } from "wouter";
import { Building2, Layers, Wrench, HardHat, Fence, Users, Shield, Truck, FileText } from "lucide-react";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    document.title = "Pennsylvania Excavation & Site Contracting | M&K Contractors LLC";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "M&K Contractors LLC provides expert excavation, site development, utility trenching, and demolition services across Pennsylvania. Family owned. No subcontracting. Free estimates.");
    }
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground pt-20">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-background h-[90vh] min-h-[600px] flex items-center">
        <div className="absolute inset-0 z-0">
          <ImagePlaceholder label="Photo: Excavator on municipal job site — Bucks County, PA" className="w-full h-full object-cover opacity-40" />
        </div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-10">
          <div className="max-w-4xl">
            <h1 className="font-display font-black text-5xl md:text-6xl lg:text-7xl text-white uppercase leading-[1.1] mb-6 tracking-tight">
              PRECISION EXCAVATION & SITE CONTRACTING ACROSS PENNSYLVANIA
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mb-10 font-medium leading-relaxed">
              We do our own work — no subcontracting, no middlemen. Just reliable, expert site development and infrastructure excavation from a dedicated team with over 20 years of combined experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center px-8 py-4 bg-accent text-background font-sans font-bold text-base uppercase tracking-widest hover:bg-accent-alt transition-colors"
                data-testid="link-hero-primary"
              >
                Request a Project Evaluation
              </Link>
              <Link 
                href="/projects" 
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white font-sans font-bold text-base uppercase tracking-widest hover:bg-white hover:text-background transition-colors"
                data-testid="link-hero-secondary"
              >
                View Our Projects
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-secondary py-8 border-t-4 border-accent">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center justify-center p-4">
              <Users className="w-8 h-8 text-accent mb-3" />
              <span className="font-display font-bold text-sm uppercase text-white tracking-wider">20+ Years Combined Experience</span>
            </div>
            <div className="flex flex-col items-center justify-center p-4">
              <Shield className="w-8 h-8 text-accent mb-3" />
              <span className="font-display font-bold text-sm uppercase text-white tracking-wider">Family Owned & Operated</span>
            </div>
            <div className="flex flex-col items-center justify-center p-4">
              <FileText className="w-8 h-8 text-accent mb-3" />
              <span className="font-display font-bold text-sm uppercase text-white tracking-wider">Fully Licensed & Insured</span>
            </div>
            <div className="flex flex-col items-center justify-center p-4">
              <div className="flex space-x-1 mb-3 text-accent">
                {/* 5 stars via SVG */}
                {[...Array(5)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                  </svg>
                ))}
              </div>
              <span className="font-display font-bold text-sm uppercase text-white tracking-wider">5-Star Google Rated</span>
            </div>
          </div>
        </div>
      </section>

      {/* The M&K Difference Section */}
      <section className="py-20 md:py-32 bg-[#F5F5F5] text-[#1C1C1E] dark:bg-background dark:text-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display font-extrabold text-4xl md:text-5xl mb-6 uppercase tracking-tight">Built Different. Built to Last.</h2>
              <div className="w-20 h-2 bg-accent mb-8"></div>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-muted-foreground mb-8">
                At M&K Contractors, we take pride in staying small and focused so we can deliver results that larger firms cannot match. When you hire us, you work directly with the owners — not a project coordinator three layers removed from the job site. We do not subcontract our work to third parties. Our own crew, our own specialized equipment, and our own commitment to quality show up to every project. Whether it is a complex public water infrastructure installation or large-scale commercial grading, M&K delivers with precision and accountability.
              </p>
              <Link 
                href="/about-us" 
                className="inline-flex items-center text-accent font-display font-bold text-lg uppercase tracking-wide hover:text-accent-alt transition-colors group"
                data-testid="link-home-about"
              >
                Learn More About Us 
                <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
            <div className="relative h-[400px] md:h-[500px]">
              <ImagePlaceholder label="Photo: M&K Owners Mike and Sam" className="absolute inset-0 w-full h-full object-cover shadow-2xl" />
              <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-accent z-[-1] hidden md:block"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="py-24 md:py-32 bg-secondary text-white relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display font-extrabold text-4xl md:text-5xl mb-6 uppercase tracking-tight">What We Do</h2>
            <div className="w-20 h-2 bg-accent mx-auto mb-8"></div>
            <p className="text-lg text-white/80">
              Specialized excavation and site contracting services for commercial and public sector projects throughout Pennsylvania.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service Cards */}
            {[
              {
                icon: Building2,
                title: "Public Sector & Infrastructure",
                desc: "Municipal water, wastewater, and infrastructure excavation for government and public works projects.",
                link: "/services/public-sector-infrastructure",
                imgLabel: "Photo: Public water main excavation"
              },
              {
                icon: Layers,
                title: "Commercial Site Development",
                desc: "Complete site preparation, grading, land clearing, and earthwork for commercial construction.",
                link: "/services/commercial-site-development",
                imgLabel: "Photo: Commercial grading with dozer"
              },
              {
                icon: Wrench,
                title: "Utility Excavation",
                desc: "Precision trenching for water, sewer, stormwater, and conduit installations.",
                link: "/services/utility-excavation",
                imgLabel: "Photo: Utility trenching"
              },
              {
                icon: HardHat,
                title: "Demolition Services",
                desc: "Controlled structural demolition, concrete removal, and site clearing.",
                link: "/services/demolition",
                imgLabel: "Photo: Structural demolition"
              },
              {
                icon: Fence,
                title: "Retaining Walls & Hardscaping",
                desc: "Structural retaining wall preparation and commercial hardscape grading.",
                link: "/services/retaining-walls",
                imgLabel: "Photo: Retaining wall prep"
              }
            ].map((service, idx) => (
              <div key={idx} className="bg-background group hover:-translate-y-2 transition-transform duration-300 shadow-xl overflow-hidden border border-border flex flex-col">
                <div className="h-48 relative">
                  <ImagePlaceholder label={service.imgLabel} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-4 left-4 bg-accent p-3">
                    <service.icon className="w-6 h-6 text-background" />
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="font-display font-bold text-xl uppercase mb-3 text-foreground">{service.title}</h3>
                  <p className="text-muted-foreground mb-6 flex-grow">{service.desc}</p>
                  <Link 
                    href={service.link} 
                    className="inline-flex items-center text-accent font-sans font-bold uppercase tracking-wider text-sm hover:text-accent-alt transition-colors group-hover:underline"
                    data-testid={`link-service-card-${idx}`}
                  >
                    Learn More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Showcase Section */}
      <section className="py-24 md:py-32 bg-[#F5F5F5] text-[#1C1C1E] dark:bg-background dark:text-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="font-display font-extrabold text-4xl md:text-5xl mb-6 uppercase tracking-tight">Real Work. Real Results.</h2>
              <div className="w-20 h-2 bg-accent mb-6"></div>
              <p className="text-lg text-gray-700 dark:text-muted-foreground">
                Every photo on this site is from an actual M&K Contractors job site in Pennsylvania. We believe the best proof of our capabilities is the work itself.
              </p>
            </div>
            <Link 
              href="/projects" 
              className="inline-flex items-center justify-center px-6 py-3 bg-transparent border-2 border-foreground text-foreground font-sans font-bold uppercase tracking-widest hover:bg-foreground hover:text-background transition-colors whitespace-nowrap"
              data-testid="link-home-projects"
            >
              View Full Portfolio →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Stormwater Pipe Installation — Montgomery County, PA",
              "Mass Grading — Commercial Site, Bucks County, PA",
              "Municipal Water Service — Chester County, PA",
              "Structural Demolition — Philadelphia Metro, PA",
              "Retaining Wall Excavation — Lehigh County, PA",
              "Utility Trenching — Delaware County, PA"
            ].map((caption, idx) => (
              <div key={idx} className="group cursor-pointer">
                <div className="relative h-64 overflow-hidden mb-4 bg-secondary">
                  <ImagePlaceholder label={`Photo: ${caption}`} className="absolute inset-0 w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-accent font-bold uppercase tracking-widest border-b-2 border-accent pb-1">View Project</span>
                  </div>
                </div>
                <p className="font-sans font-medium text-sm text-gray-600 dark:text-muted-foreground">{caption}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-secondary text-white relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-display font-extrabold text-4xl md:text-5xl mb-6 uppercase tracking-tight">What Our Clients Say</h2>
            <div className="w-20 h-2 bg-accent mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                text: "Great company to work with. They answered all of my questions, did exactly the job they said they would, and had a very fair price for the work performed. I would work with M&K again any day.",
                author: "Verified Google Review"
              },
              {
                text: "I hired M&K to fill an old septic pit; some excavation and concrete work. They gave a prompt response to a request to view the job and provide a quote. Good communication. Completed job to plan and quickly. Pricing was good too.",
                author: "Matthew D."
              },
              {
                text: "Recently used this company for a difficult job and felt other companies rake you through the coals with pricing. They were great, finished project early, easy to contact, very knowledgeable.",
                author: "Brandon"
              }
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-background p-8 border-t-4 border-accent relative">
                <svg className="absolute top-6 left-6 w-12 h-12 text-white/5" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
                <div className="flex space-x-1 mb-6 text-accent relative z-10">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                      <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                    </svg>
                  ))}
                </div>
                <p className="text-foreground text-lg mb-6 leading-relaxed relative z-10">"{testimonial.text}"</p>
                <div className="flex items-center justify-between">
                  <span className="font-display font-bold uppercase text-sm text-foreground tracking-wider">{testimonial.author}</span>
                  <span className="text-xs bg-white/10 text-white/70 px-2 py-1 rounded">Google Review</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area Section */}
      <section className="py-24 bg-[#F5F5F5] text-[#1C1C1E] dark:bg-background dark:text-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 h-[400px] relative">
               <ImagePlaceholder label="Photo: Pennsylvania Service Area Map overlay" className="absolute inset-0 w-full h-full object-cover" />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="font-display font-extrabold text-4xl md:text-5xl mb-6 uppercase tracking-tight">Serving Pennsylvania</h2>
              <div className="w-20 h-2 bg-accent mb-8"></div>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-muted-foreground">
                M&K Contractors serves commercial and public sector clients across Eastern and Central Pennsylvania. Our primary service area includes Bucks County, Montgomery County, Chester County, Delaware County, Lehigh County, Northampton County, Berks County, and the greater Philadelphia metropolitan region. Contact us to confirm availability for your specific project location.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-secondary/80 mix-blend-multiply z-10"></div>
        <div className="absolute inset-0 z-0">
          <ImagePlaceholder label="Photo: M&K equipment on active site at sunset" className="w-full h-full object-cover opacity-30" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-center">
          <h2 className="font-display font-extrabold text-4xl md:text-6xl text-white mb-6 uppercase tracking-tight">Ready to Break Ground?</h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-10">
            Submit your project details today. We provide free site evaluations and written proposals within one week — no strings attached.
          </p>
          <Link 
            href="/contact" 
            className="inline-flex items-center justify-center px-10 py-5 bg-accent text-background font-sans font-bold text-lg uppercase tracking-widest hover:bg-accent-alt transition-colors"
            data-testid="link-home-bottom-cta"
          >
            Get Your Free Estimate →
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
