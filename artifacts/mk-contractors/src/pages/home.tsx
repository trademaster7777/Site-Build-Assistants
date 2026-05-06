import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { Link } from "wouter";
import { Building2, Layers, Wrench, HardHat, Fence, Users, Shield, FileText, ArrowRight } from "lucide-react";
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

      <section className="relative bg-[#1C1C1E] min-h-[92vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImagePlaceholder label="Photo: Excavator on municipal job site — Bucks County, PA" className="w-full h-full object-cover opacity-30" />
        </div>
        <div className="absolute inset-0 hero-overlay z-[1]" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent z-[2]" />
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-10">
          <div className="max-w-5xl">
            <div className="section-divider mb-8" />
            <h1 className="font-display font-black text-5xl md:text-6xl lg:text-[76px] text-white uppercase leading-[1.05] mb-8 tracking-tight">
              Precision Excavation & Site Contracting Across <span className="gold-text">Pennsylvania</span>
            </h1>
            <p className="text-lg md:text-xl text-white/70 max-w-3xl mb-12 leading-relaxed">
              We do our own work — no subcontracting, no middlemen. Just reliable, expert site development and infrastructure excavation from a dedicated team with over 20 years of combined experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <Link 
                href="/contact" 
                className="btn-premium inline-flex items-center justify-center px-10 py-4.5 text-[#1C1C1E] font-sans font-bold text-base uppercase tracking-[0.1em] rounded-sm"
                data-testid="link-hero-primary"
              >
                Request a Project Evaluation
              </Link>
              <Link 
                href="/projects" 
                className="btn-outline-premium inline-flex items-center justify-center px-10 py-4.5 text-white font-sans font-bold text-base uppercase tracking-[0.1em] rounded-sm"
                data-testid="link-hero-secondary"
              >
                View Our Projects
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-gradient-to-r from-[#1c1c1e] via-[#252528] to-[#1c1c1e] py-10 border-y border-white/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { icon: Users, label: "20+ Years Combined Experience" },
              { icon: Shield, label: "Family Owned & Operated" },
              { icon: FileText, label: "Fully Licensed & Insured" },
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center justify-center py-4 group">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors duration-300">
                  <item.icon className="w-5 h-5 text-accent" />
                </div>
                <span className="font-display font-bold text-xs uppercase text-white/70 tracking-[0.15em] leading-snug">{item.label}</span>
              </div>
            ))}
            <div className="flex flex-col items-center justify-center py-4 group">
              <div className="flex space-x-0.5 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-accent">
                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                  </svg>
                ))}
              </div>
              <span className="font-display font-bold text-xs uppercase text-white/70 tracking-[0.15em]">5-Star Google Rated</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-36 bg-[#F5F5F5] text-[#1C1C1E]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <span className="font-sans font-semibold text-xs uppercase tracking-[0.25em] text-accent mb-4 block">The M&K Difference</span>
              <h2 className="font-display font-black text-4xl md:text-5xl lg:text-[52px] mb-6 uppercase tracking-tight leading-[1.1]">Built Different. Built to Last.</h2>
              <div className="section-divider mb-10" />
              <p className="text-lg leading-[1.8] text-gray-600 mb-10">
                At M&K Contractors, we take pride in staying small and focused so we can deliver results that larger firms cannot match. When you hire us, you work directly with the owners — not a project coordinator three layers removed from the job site. We do not subcontract our work to third parties. Our own crew, our own specialized equipment, and our own commitment to quality show up to every project. Whether it is a complex public water infrastructure installation or large-scale commercial grading, M&K delivers with precision and accountability.
              </p>
              <Link 
                href="/about-us" 
                className="inline-flex items-center text-[#1C1C1E] font-display font-bold text-sm uppercase tracking-[0.15em] group border-b-2 border-accent pb-2 hover:text-accent transition-colors duration-300"
                data-testid="link-home-about"
              >
                Learn More About Us 
                <ArrowRight className="ml-3 h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
            <div className="relative">
              <div className="relative h-[450px] md:h-[550px] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.15)]">
                <ImagePlaceholder label="Photo: Completed M&K project — finished site work, Pennsylvania" className="absolute inset-0 w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 gold-gradient z-[-1] hidden md:block" />
              <div className="absolute -top-4 -right-4 w-20 h-20 border-2 border-accent/30 z-[-1] hidden md:block" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-28 md:py-36 bg-gradient-to-br from-[#1c1c1e] via-[#222226] to-[#1c1c1e] text-white relative subtle-noise overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="font-sans font-semibold text-xs uppercase tracking-[0.25em] text-accent/80 mb-4 block">Our Expertise</span>
            <h2 className="font-display font-black text-4xl md:text-5xl lg:text-[52px] mb-6 uppercase tracking-tight">What We Do</h2>
            <div className="section-divider mx-auto mb-10" />
            <p className="text-lg text-white/50 leading-relaxed">
              Specialized excavation and site contracting services for commercial and public sector projects throughout Pennsylvania.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
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
              <div key={idx} className="premium-card group hover:-translate-y-2 transition-all duration-500 overflow-hidden flex flex-col rounded-sm">
                <div className="h-52 relative overflow-hidden">
                  <ImagePlaceholder label={service.imgLabel} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1c1c1e] via-transparent to-transparent opacity-60" />
                  <div className="absolute top-5 left-5 w-11 h-11 bg-accent/90 flex items-center justify-center rounded-sm shadow-lg">
                    <service.icon className="w-5 h-5 text-[#1C1C1E]" />
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="font-display font-bold text-lg uppercase mb-3 text-white tracking-wide">{service.title}</h3>
                  <p className="text-white/50 mb-8 flex-grow text-sm leading-relaxed">{service.desc}</p>
                  <Link 
                    href={service.link} 
                    className="inline-flex items-center text-accent font-sans font-bold uppercase tracking-[0.12em] text-xs hover:text-white transition-colors duration-300 group/link"
                    data-testid={`link-service-card-${idx}`}
                  >
                    Learn More 
                    <ArrowRight className="ml-2 h-3.5 w-3.5 transform group-hover/link:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28 md:py-36 bg-[#F5F5F5] text-[#1C1C1E]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <span className="font-sans font-semibold text-xs uppercase tracking-[0.25em] text-accent mb-4 block">Portfolio</span>
              <h2 className="font-display font-black text-4xl md:text-5xl mb-6 uppercase tracking-tight">Real Work. Real Results.</h2>
              <div className="section-divider mb-8" />
              <p className="text-lg text-gray-600 leading-relaxed">
                Every photo on this site is from an actual M&K Contractors job site in Pennsylvania. We believe the best proof of our capabilities is the work itself.
              </p>
            </div>
            <Link 
              href="/projects" 
              className="inline-flex items-center justify-center px-8 py-3.5 bg-[#1C1C1E] text-white font-sans font-bold text-xs uppercase tracking-[0.15em] hover:bg-accent hover:text-[#1C1C1E] transition-all duration-300 whitespace-nowrap rounded-sm shadow-lg"
              data-testid="link-home-projects"
            >
              View Full Portfolio
              <ArrowRight className="ml-3 h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              "Stormwater Pipe Installation — Montgomery County, PA",
              "Mass Grading — Commercial Site, Bucks County, PA",
              "Municipal Water Service — Chester County, PA",
              "Structural Demolition — Philadelphia Metro, PA",
              "Retaining Wall Excavation — Lehigh County, PA",
              "Utility Trenching — Delaware County, PA"
            ].map((caption, idx) => (
              <div key={idx} className="group cursor-pointer">
                <div className="relative h-72 overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.12)] rounded-sm">
                  <ImagePlaceholder label={`Photo: ${caption}`} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1E]/80 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="font-sans font-medium text-sm text-white/90 leading-snug">{caption}</p>
                  </div>
                  <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/10 transition-colors duration-500" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28 bg-gradient-to-br from-[#1c1c1e] via-[#222226] to-[#1c1c1e] text-white relative subtle-noise overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <span className="font-sans font-semibold text-xs uppercase tracking-[0.25em] text-accent/80 mb-4 block">Testimonials</span>
            <h2 className="font-display font-black text-4xl md:text-5xl mb-6 uppercase tracking-tight">What Our Clients Say</h2>
            <div className="section-divider mx-auto" />
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
              <div key={idx} className="premium-card p-10 relative rounded-sm group hover:-translate-y-1 transition-all duration-500">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent to-accent-alt rounded-t-sm" />
                <svg className="absolute top-8 right-8 w-10 h-10 text-white/5" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
                <div className="flex space-x-1 mb-8 relative z-10">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-accent">
                      <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                    </svg>
                  ))}
                </div>
                <p className="text-white/70 text-base mb-8 leading-[1.8] relative z-10 italic">"{testimonial.text}"</p>
                <div className="flex items-center justify-between relative z-10 pt-6 border-t border-white/5">
                  <span className="font-display font-bold uppercase text-xs text-white/80 tracking-[0.12em]">{testimonial.author}</span>
                  <span className="text-[10px] bg-white/5 text-white/40 px-3 py-1.5 rounded-full tracking-wider uppercase font-medium">Google Review</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#F5F5F5] text-[#1C1C1E]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 h-[420px] relative overflow-hidden rounded-sm shadow-[0_20px_60px_rgba(0,0,0,0.12)]">
              <ImagePlaceholder label="Photo: Pennsylvania Service Area Map overlay" className="absolute inset-0 w-full h-full object-cover" />
            </div>
            <div className="order-1 lg:order-2">
              <span className="font-sans font-semibold text-xs uppercase tracking-[0.25em] text-accent mb-4 block">Coverage Area</span>
              <h2 className="font-display font-black text-4xl md:text-5xl mb-6 uppercase tracking-tight">Serving Pennsylvania</h2>
              <div className="section-divider mb-10" />
              <p className="text-lg leading-[1.8] text-gray-600">
                M&K Contractors serves commercial and public sector clients across Eastern and Central Pennsylvania. Our primary service area includes Bucks County, Montgomery County, Chester County, Delaware County, Lehigh County, Northampton County, Berks County, and the greater Philadelphia metropolitan region. Contact us to confirm availability for your specific project location.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-[#1C1C1E] relative overflow-hidden subtle-noise">
        <div className="absolute inset-0 z-0">
          <ImagePlaceholder label="Photo: M&K equipment on active site at sunset" className="w-full h-full object-cover opacity-15" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1E] via-[#1C1C1E]/80 to-[#1C1C1E]/60 z-[1]" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent z-[2]" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="font-sans font-semibold text-xs uppercase tracking-[0.25em] text-accent/80 mb-6 block">Get Started</span>
          <h2 className="font-display font-black text-4xl md:text-6xl text-white mb-8 uppercase tracking-tight">Ready to Break Ground?</h2>
          <p className="text-xl text-white/50 max-w-2xl mx-auto mb-14 leading-relaxed">
            Submit your project details today. We provide free site evaluations and written proposals within one week — no strings attached.
          </p>
          <Link 
            href="/contact" 
            className="btn-premium inline-flex items-center justify-center px-12 py-5 text-[#1C1C1E] font-sans font-bold text-lg uppercase tracking-[0.12em] rounded-sm"
            data-testid="link-home-bottom-cta"
          >
            Get Your Free Estimate
            <ArrowRight className="ml-3 h-5 w-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
