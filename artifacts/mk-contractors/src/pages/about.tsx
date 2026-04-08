import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { Link } from "wouter";
import { Users, Shield, Truck, FileText, ArrowRight } from "lucide-react";
import { useEffect } from "react";

export default function About() {
  useEffect(() => {
    document.title = "About M&K Contractors LLC | Pennsylvania Excavation Experts";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Learn about M&K Contractors LLC — a family-owned excavation and site contracting firm founded in 2018 by Mike and Sam. Serving PA with 20+ years of experience. No subcontracting.");
    }
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground pt-20">
      <Header />

      <section className="relative bg-gradient-to-br from-[#1c1c1e] via-[#222226] to-[#1c1c1e] py-28 md:py-36 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImagePlaceholder label="Photo: About M&K Contractors hero background" className="w-full h-full object-cover opacity-20" />
        </div>
        <div className="absolute inset-0 hero-overlay z-[1]" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent z-[2]" />
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "About Us" }]} />
          <div className="section-divider mt-8 mb-8" />
          <h1 className="font-display font-black text-4xl md:text-5xl lg:text-[64px] text-white uppercase max-w-4xl mb-6 leading-[1.05] tracking-tight">
            About M&K Contractors
          </h1>
          <p className="text-xl md:text-2xl text-white/60 max-w-3xl font-medium leading-relaxed">
            Built on Honesty, Knowledge, and 20+ Years of Hands-On Experience.
          </p>
        </div>
      </section>

      <section className="py-24 md:py-36 bg-[#F5F5F5] text-[#1C1C1E]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <span className="font-sans font-semibold text-xs uppercase tracking-[0.25em] text-accent mb-4 block">Our Story</span>
              <h2 className="font-display font-black text-3xl md:text-4xl lg:text-[44px] mb-6 uppercase tracking-tight leading-[1.1]">A Foundation of Expertise</h2>
              <div className="section-divider mb-10" />
              <div className="space-y-6 text-lg text-gray-600 leading-[1.8]">
                <p>
                  M&K Contractors LLC was founded in 2018 by Mike and Sam — two industry veterans with a combined 20-plus years of experience in excavation, heavy equipment operation, and site contracting. The company was built from the ground up with a straightforward philosophy: do the work right, do it ourselves, and treat every client with complete transparency. What started as a small operation has grown into a trusted specialty contracting firm serving general contractors, developers, and municipalities across Eastern and Central Pennsylvania.
                </p>
                <p>
                  Our approach is simple: stay focused on what we do best. We do not take on work outside our expertise, and we do not subcontract our projects to third parties. When M&K wins a bid, our team and our equipment show up — every time. That consistency has earned us a reputation for reliability that we protect on every single job.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="relative h-[520px] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.15)] rounded-sm">
                <ImagePlaceholder label="Photo: Mike and Sam on a job site" className="absolute inset-0 w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-5 -left-5 w-28 h-28 gold-gradient z-[-1] hidden md:block" />
              <div className="absolute -top-4 -right-4 w-16 h-16 border-2 border-accent/30 z-[-1] hidden md:block" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-28 bg-gradient-to-br from-[#1c1c1e] via-[#222226] to-[#1c1c1e] text-white subtle-noise overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="font-sans font-semibold text-xs uppercase tracking-[0.25em] text-accent/80 mb-4 block">Why M&K</span>
            <h2 className="font-display font-black text-3xl md:text-4xl mb-6 uppercase tracking-tight">Why General Contractors and Municipalities Choose Us</h2>
            <div className="section-divider mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
            {[
              { icon: Users, title: "Direct Owner Contact", desc: "You will never be passed off to a call center or a junior project manager. Mike and Sam are personally involved in every project from bid to completion." },
              { icon: Shield, title: "No Subcontracting — Ever", desc: "When you hire M&K Contractors, our team shows up. We do not win work just to hand it off to someone else." },
              { icon: Truck, title: "Specialized Equipment Fleet", desc: "We own and maintain a fleet of excavators, skid steers, compactors, and dump trucks purpose-built for the work we do." },
              { icon: FileText, title: "Competitive, Transparent Pricing", desc: "We provide detailed, written proposals within one week of a site evaluation. Our pricing is fair, our communication is clear." },
            ].map((item, idx) => (
              <div key={idx} className="premium-card p-8 relative rounded-sm group hover:-translate-y-1 transition-all duration-500">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent to-accent-alt rounded-t-sm" />
                <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors duration-300">
                  <item.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-display font-bold text-lg uppercase mb-4 text-white tracking-wide">{item.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28 bg-[#F5F5F5] text-[#1C1C1E]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-20">
            <span className="font-sans font-semibold text-xs uppercase tracking-[0.25em] text-accent mb-4 block">Equipment</span>
            <h2 className="font-display font-black text-3xl md:text-4xl mb-6 uppercase tracking-tight">What We Bring to the Job Site</h2>
            <div className="section-divider mb-10" />
            <p className="text-lg text-gray-600 leading-[1.8]">
              Our equipment fleet is maintained to the highest standards and purpose-built for the scope of work we take on. From precision mini excavators for tight utility trenching to articulated dump trucks for bulk earthmoving, every piece of equipment we own serves a specific function on Pennsylvania job sites.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
            {[
              { title: "Track Skid Steers (e.g., Kubota SVL97)", desc: "Site grading, backfill, material handling", imgLabel: "Photo: Track Skid Steer on site" },
              { title: "Mini Excavators (e.g., Komatsu PC55)", desc: "Precision trenching, utility excavation", imgLabel: "Photo: Mini Excavator trenching" },
              { title: "Compactors (e.g., Bomag Trench Roller)", desc: "Soil and trench compaction", imgLabel: "Photo: Trench compactor" },
              { title: "Articulated Dump Trucks", desc: "Bulk material hauling and earthmoving", imgLabel: "Photo: Articulated Dump Truck hauling fill" }
            ].map((item, idx) => (
              <div key={idx} className="group">
                <div className="relative h-52 mb-5 overflow-hidden rounded-sm shadow-[0_8px_30px_rgba(0,0,0,0.1)]">
                  <ImagePlaceholder label={item.imgLabel} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1c1c1e]/50 via-transparent to-transparent" />
                </div>
                <h3 className="font-display font-bold text-base uppercase mb-2 tracking-wide">{item.title}</h3>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28 bg-[#1C1C1E] relative subtle-noise overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl relative z-10">
          <span className="font-sans font-semibold text-xs uppercase tracking-[0.25em] text-accent/80 mb-6 block">Get Started</span>
          <h2 className="font-display font-black text-3xl md:text-4xl mb-10 uppercase text-white tracking-tight">Let's Talk About Your Next Project</h2>
          <Link 
            href="/contact" 
            className="btn-premium inline-flex items-center justify-center px-12 py-5 text-[#1C1C1E] font-sans font-bold text-lg uppercase tracking-[0.12em] rounded-sm"
            data-testid="link-about-cta"
          >
            Request a Project Evaluation
            <ArrowRight className="ml-3 h-5 w-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
