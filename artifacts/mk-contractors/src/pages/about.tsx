import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { Link } from "wouter";
import { Users, Shield, Truck, FileText } from "lucide-react";
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

      {/* Hero Section */}
      <section className="relative bg-secondary py-24 md:py-32">
        <div className="absolute inset-0 z-0">
          <ImagePlaceholder label="Photo: About M&K Contractors hero background" className="w-full h-full object-cover opacity-30" />
        </div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "About Us" }]} />
          <h1 className="font-display font-extrabold text-4xl md:text-5xl lg:text-6xl text-white uppercase max-w-4xl mt-6 mb-6 leading-tight">
            About M&K Contractors
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl font-medium">
            Built on Honesty, Knowledge, and 20+ Years of Hands-On Experience.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 md:py-24 bg-[#F5F5F5] text-[#1C1C1E] dark:bg-background dark:text-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display font-bold text-3xl md:text-4xl mb-8 uppercase tracking-tight">A Foundation of Expertise</h2>
              <div className="space-y-6 text-lg text-gray-700 dark:text-muted-foreground leading-relaxed">
                <p>
                  M&K Contractors LLC was founded in 2018 by Mike and Sam — two industry veterans with a combined 20-plus years of experience in excavation, heavy equipment operation, and site contracting. The company was built from the ground up with a straightforward philosophy: do the work right, do it ourselves, and treat every client with complete transparency. What started as a small operation has grown into a trusted specialty contracting firm serving general contractors, developers, and municipalities across Eastern and Central Pennsylvania.
                </p>
                <p>
                  Our approach is simple: stay focused on what we do best. We do not take on work outside our expertise, and we do not subcontract our projects to third parties. When M&K wins a bid, our team and our equipment show up — every time. That consistency has earned us a reputation for reliability that we protect on every single job.
                </p>
              </div>
            </div>
            <div className="relative h-[500px]">
              <ImagePlaceholder label="Photo: Mike and Sam on a job site" className="absolute inset-0 w-full h-full object-cover shadow-xl border-l-8 border-accent" />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose M&K */}
      <section className="py-24 bg-secondary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-6 uppercase tracking-tight">Why General Contractors and Municipalities Choose Us</h2>
            <div className="w-20 h-2 bg-accent mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-background p-8 border-t border-border">
              <Users className="w-10 h-10 text-accent mb-6" />
              <h3 className="font-display font-bold text-xl uppercase mb-4 text-foreground">Direct Owner Contact</h3>
              <p className="text-muted-foreground">You will never be passed off to a call center or a junior project manager. Mike and Sam are personally involved in every project from bid to completion.</p>
            </div>
            <div className="bg-background p-8 border-t border-border">
              <Shield className="w-10 h-10 text-accent mb-6" />
              <h3 className="font-display font-bold text-xl uppercase mb-4 text-foreground">No Subcontracting — Ever</h3>
              <p className="text-muted-foreground">When you hire M&K Contractors, our team shows up. We do not win work just to hand it off to someone else.</p>
            </div>
            <div className="bg-background p-8 border-t border-border">
              <Truck className="w-10 h-10 text-accent mb-6" />
              <h3 className="font-display font-bold text-xl uppercase mb-4 text-foreground">Specialized Equipment Fleet</h3>
              <p className="text-muted-foreground">We own and maintain a fleet of excavators, skid steers, compactors, and dump trucks purpose-built for the work we do.</p>
            </div>
            <div className="bg-background p-8 border-t border-border">
              <FileText className="w-10 h-10 text-accent mb-6" />
              <h3 className="font-display font-bold text-xl uppercase mb-4 text-foreground">Competitive, Transparent Pricing</h3>
              <p className="text-muted-foreground">We provide detailed, written proposals within one week of a site evaluation. Our pricing is fair, our communication is clear.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Capabilities Section */}
      <section className="py-24 bg-[#F5F5F5] text-[#1C1C1E] dark:bg-background dark:text-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-6 uppercase tracking-tight">What We Bring to the Job Site</h2>
            <div className="w-20 h-2 bg-accent mb-6"></div>
            <p className="text-lg text-gray-700 dark:text-muted-foreground">
              Our equipment fleet is maintained to the highest standards and purpose-built for the scope of work we take on. From precision mini excavators for tight utility trenching to articulated dump trucks for bulk earthmoving, every piece of equipment we own serves a specific function on Pennsylvania job sites.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Track Skid Steers (e.g., Kubota SVL97)",
                desc: "Site grading, backfill, material handling",
                imgLabel: "Photo: Track Skid Steer on site"
              },
              {
                title: "Mini Excavators (e.g., Komatsu PC55)",
                desc: "Precision trenching, utility excavation",
                imgLabel: "Photo: Mini Excavator trenching"
              },
              {
                title: "Compactors (e.g., Bomag Trench Roller)",
                desc: "Soil and trench compaction",
                imgLabel: "Photo: Trench compactor"
              },
              {
                title: "Articulated Dump Trucks",
                desc: "Bulk material hauling and earthmoving",
                imgLabel: "Photo: Articulated Dump Truck hauling fill"
              }
            ].map((item, idx) => (
              <div key={idx} className="group">
                <div className="relative h-48 mb-4 overflow-hidden border border-border">
                  <ImagePlaceholder label={item.imgLabel} className="absolute inset-0 w-full h-full object-cover" />
                </div>
                <h3 className="font-display font-bold text-lg uppercase mb-2">{item.title}</h3>
                <p className="text-gray-600 dark:text-muted-foreground text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <h2 className="font-display font-bold text-3xl md:text-4xl mb-10 uppercase text-white tracking-tight">Let's Talk About Your Next Project</h2>
          <Link 
            href="/contact" 
            className="inline-flex items-center justify-center px-10 py-5 bg-accent text-background font-sans font-bold text-lg uppercase tracking-widest hover:bg-accent-alt transition-colors rounded-sm"
            data-testid="link-about-cta"
          >
            Request a Project Evaluation →
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
