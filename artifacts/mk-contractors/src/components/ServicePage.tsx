import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

interface FAQ {
  question: string;
  answer: string;
}

interface Capability {
  title: string;
  description: string;
}

export interface ServicePageProps {
  title: string;
  subheadline: string;
  overview: string[];
  capabilities: Capability[];
  faqs: FAQ[];
  serviceName: string;
  heroPhotoNumber?: number;
  heroVideoSrc?: string;
  heroVideoPoster?: string;
  heroObjectPosition?: string;
}

export function ServicePage({ title, subheadline, overview, capabilities, faqs, serviceName, heroPhotoNumber, heroVideoSrc, heroVideoPoster, heroObjectPosition }: ServicePageProps) {
  const objectPosStyle = heroObjectPosition ? { objectPosition: heroObjectPosition } : undefined;
  return (
    <div className="min-h-screen bg-background text-foreground pt-20">
      <Header />

      <section className="relative bg-gradient-to-br from-[#1c1c1e] via-[#222226] to-[#1c1c1e] py-16 md:py-36 overflow-hidden">
        <div className="absolute inset-0 z-0">
          {heroVideoSrc ? (
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster={heroVideoPoster}
              className="w-full h-full object-cover opacity-70"
              style={objectPosStyle}
              aria-label={`Hero video for ${title}`}
            >
              <source src={heroVideoSrc} type="video/mp4" />
            </video>
          ) : (
            <ImagePlaceholder
              number={heroPhotoNumber}
              label={`Hero image for ${title}`}
              className="w-full h-full object-cover opacity-70"
              style={objectPosStyle}
            />
          )}
        </div>
        <div className="absolute inset-0 hero-overlay z-[1]" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent z-[2]" />
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "Services", href: "#" }, { label: serviceName }]} />
          <div className="section-divider mt-8 mb-8" />
          <h1 className="font-display font-black text-[30px] sm:text-4xl md:text-5xl lg:text-[64px] text-white uppercase max-w-4xl mb-6 leading-[1.05] tracking-tight break-words">
            {title}
          </h1>
          <p className="text-base sm:text-lg md:text-2xl text-white/60 max-w-3xl font-medium leading-relaxed">
            {subheadline}
          </p>
        </div>
      </section>

      <section className="py-16 md:py-32 bg-[#F5F5F5] text-[#1C1C1E]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <span className="font-sans font-semibold text-xs uppercase tracking-[0.25em] text-accent mb-4 block">Overview</span>
            <h2 className="font-display font-black text-2xl sm:text-3xl mb-6 md:mb-8 uppercase tracking-tight">Service Overview</h2>
            <div className="section-divider mb-8 md:mb-10" />
            <div className="space-y-5 md:space-y-6 text-base md:text-lg text-gray-600 leading-[1.8]">
              {overview.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-32 bg-gradient-to-br from-[#1c1c1e] via-[#222226] to-[#1c1c1e] text-white subtle-noise overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="font-sans font-semibold text-xs uppercase tracking-[0.25em] text-accent/80 mb-4 block">Capabilities</span>
          <h2 className="font-display font-black text-2xl sm:text-3xl mb-10 md:mb-14 uppercase tracking-tight">Core Capabilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-7">
            {capabilities.map((cap, i) => (
              <div key={i} className="premium-card p-6 sm:p-8 rounded-sm relative group hover:-translate-y-1 transition-all duration-500">
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-accent to-accent-alt rounded-l-sm" />
                <h3 className="font-display font-bold text-base sm:text-lg mb-3 sm:mb-4 uppercase text-white tracking-wide pl-3 sm:pl-4">{cap.title}</h3>
                <p className="text-white/50 leading-relaxed pl-3 sm:pl-4 text-sm">{cap.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-32 bg-[#F5F5F5] text-[#1C1C1E]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="text-center mb-10 md:mb-14">
            <span className="font-sans font-semibold text-xs uppercase tracking-[0.25em] text-accent mb-4 block">FAQ</span>
            <h2 className="font-display font-black text-2xl sm:text-3xl uppercase tracking-tight">Frequently Asked Questions</h2>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-gray-200">
                <AccordionTrigger className="text-left font-display font-bold text-base sm:text-lg py-5 sm:py-7 hover:text-accent text-[#1C1C1E] tracking-wide">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 text-sm sm:text-base leading-[1.8] pb-6 sm:pb-7 pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="py-16 md:py-28 bg-[#1C1C1E] relative subtle-noise overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl relative z-10">
          <span className="font-sans font-semibold text-xs uppercase tracking-[0.25em] text-accent/80 mb-6 block">Get Started</span>
          <h2 className="font-display font-black text-2xl sm:text-3xl md:text-4xl mb-6 md:mb-8 uppercase text-white tracking-tight">Ready to Discuss Your Project?</h2>
          <p className="text-base md:text-lg text-white/40 mb-10 md:mb-12 leading-relaxed">
            Contact us today for a free site evaluation and written proposal.
          </p>
          <Link 
            href="/contact" 
            className="btn-premium inline-flex items-center justify-center px-8 sm:px-12 py-4 sm:py-5 text-[#1C1C1E] font-sans font-bold text-sm sm:text-lg uppercase tracking-[0.12em] rounded-sm"
          >
            Request a Quote
            <ArrowRight className="ml-3 h-5 w-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
