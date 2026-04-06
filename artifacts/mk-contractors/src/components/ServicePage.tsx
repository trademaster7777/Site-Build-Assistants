import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "wouter";

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
}

export function ServicePage({ title, subheadline, overview, capabilities, faqs, serviceName }: ServicePageProps) {
  return (
    <div className="min-h-screen bg-background text-foreground pt-20">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-secondary py-24 md:py-32">
        <div className="absolute inset-0 z-0">
          <ImagePlaceholder 
            label={`Photo: Hero image for ${title}`} 
            className="w-full h-full object-cover opacity-30" 
          />
        </div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "Services", href: "#" }, { label: serviceName }]} />
          <h1 className="font-display font-extrabold text-4xl md:text-5xl lg:text-6xl text-white uppercase max-w-4xl mt-6 mb-6 leading-tight">
            {title}
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl font-medium">
            {subheadline}
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h2 className="font-display font-bold text-3xl mb-8 uppercase text-foreground">Overview</h2>
            <div className="space-y-6 text-lg text-muted-foreground">
              {overview.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 bg-[#F5F5F5] text-[#1C1C1E] dark:bg-secondary dark:text-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display font-bold text-3xl mb-12 uppercase">Core Capabilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {capabilities.map((cap, i) => (
              <div key={i} className="bg-white dark:bg-background p-8 border-l-4 border-accent shadow-sm">
                <h3 className="font-display font-bold text-xl mb-4 uppercase">{cap.title}</h3>
                <p className="text-gray-600 dark:text-muted-foreground">{cap.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="font-display font-bold text-3xl mb-12 uppercase text-foreground text-center">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-border">
                <AccordionTrigger className="text-left font-display font-bold text-lg py-6 hover:text-accent">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6 pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-secondary border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <h2 className="font-display font-bold text-3xl md:text-4xl mb-6 uppercase text-white">Ready to Discuss Your Project?</h2>
          <p className="text-xl text-muted-foreground mb-10">
            Contact us today for a free site evaluation and written proposal.
          </p>
          <Link 
            href="/contact" 
            className="inline-flex items-center justify-center px-8 py-4 bg-accent text-background font-sans font-semibold text-lg uppercase tracking-widest hover:bg-accent-alt transition-colors rounded-sm"
          >
            Request a Quote →
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
