import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Phone, Mail, MapPin, Clock, ClipboardList, FileText } from "lucide-react";
import { useEffect } from "react";

export default function Contact() {
  useEffect(() => {
    document.title = "Request a Free Estimate | M&K Contractors LLC Pennsylvania";
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground pt-20">
      <Header />

      <section className="bg-gradient-to-br from-[#1c1c1e] via-[#222226] to-[#1c1c1e] py-14 md:py-28 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent z-[2]" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumb items={[{ label: "Contact" }]} />
          <div className="section-divider mt-8 mb-8" />
          <h1 className="font-display font-black text-[32px] sm:text-4xl md:text-5xl lg:text-[64px] text-white uppercase mt-4 mb-6 tracking-tight leading-[1.05] break-words">
            Request a Project Evaluation
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-accent font-semibold uppercase tracking-[0.2em] mb-8">
            Free estimates. Written proposals within one week. No strings attached.
          </p>
          <p className="text-white/50 text-base md:text-lg max-w-3xl leading-[1.8]">
            Whether you are a general contractor looking for a reliable excavation subcontractor, a developer preparing a commercial site, or a municipality putting an infrastructure project out to bid, M&K Contractors is ready to get to work.
          </p>
        </div>
      </section>

      <section className="py-14 md:py-28 bg-[#F5F5F5]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-20">

            <div className="w-full lg:w-[60%]">
              <div className="premium-card-light p-4 sm:p-6 md:p-8 rounded-sm">
                <h2 className="font-display font-black text-xl sm:text-2xl mb-6 md:mb-8 uppercase border-b border-gray-200 pb-5 md:pb-6 text-[#1C1C1E]">Project Details</h2>
                <div className="w-full overflow-hidden rounded-sm">
                  <iframe
                    src="https://docs.google.com/forms/d/e/1FAIpQLSeslCFClSd6XySghtVWfARXX9gk0wrcahh0vvENaQFm4-1RRA/viewform?embedded=true"
                    width="640"
                    height="1588"
                    frameBorder="0"
                    marginHeight={0}
                    marginWidth={0}
                    title="M&K Contractors Project Request Form"
                    className="w-full block"
                    data-testid="iframe-contact-form"
                  >
                    Loading…
                  </iframe>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-[40%] space-y-8">
              <div className="premium-card p-6 sm:p-10 rounded-sm relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-accent to-accent-alt" />
                <h3 className="font-display font-black text-xl uppercase mb-8 sm:mb-10 text-white border-b border-white/5 pb-5 sm:pb-6 tracking-wide">Direct Contact</h3>

                <div className="space-y-8">
                  <div className="flex items-start space-x-5">
                    <div className="w-11 h-11 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Phone className="w-4 h-4 text-accent" />
                    </div>
                    <div>
                      <p className="font-sans font-semibold uppercase text-[10px] tracking-[0.2em] text-white/30 mb-2">Phone</p>
                      <a href="tel:+12672216226" className="text-xl font-semibold hover:text-accent transition-colors duration-300 block text-white">(267) 221-6226</a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-5">
                    <div className="w-11 h-11 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Mail className="w-4 h-4 text-accent" />
                    </div>
                    <div>
                      <p className="font-sans font-semibold uppercase text-[10px] tracking-[0.2em] text-white/30 mb-2">Email</p>
                      <a href="mailto:Info@mkcontractorspa.com" className="text-lg font-medium hover:text-accent transition-colors duration-300 text-white break-all">Info@mkcontractorspa.com</a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-5">
                    <div className="w-11 h-11 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Clock className="w-4 h-4 text-accent" />
                    </div>
                    <div>
                      <p className="font-sans font-semibold uppercase text-[10px] tracking-[0.2em] text-white/30 mb-2">Operating Hours</p>
                      <p className="text-lg font-medium text-white">Monday – Friday</p>
                      <p className="text-white/60">7:00 AM – 5:00 PM</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-5">
                    <div className="w-11 h-11 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <MapPin className="w-4 h-4 text-accent" />
                    </div>
                    <div>
                      <p className="font-sans font-semibold uppercase text-[10px] tracking-[0.2em] text-white/30 mb-2">Office</p>
                      <p className="text-lg font-medium text-white">1043 Koffel Rd</p>
                      <p className="text-white/60">Hatfield, PA 19440</p>
                      <p className="text-white/40 text-sm mt-2">Serving Eastern & Central Pennsylvania</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="premium-card-light p-8 rounded-sm border-l-4 border-accent">
                <h3 className="font-display font-bold text-lg uppercase mb-3 text-[#1C1C1E] tracking-wide">Emergency Services</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  For emergency utility repair or demolition needs outside of normal business hours, please call our primary number and follow the prompts.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-16 md:mt-28 pt-14 md:pt-20 border-t border-gray-200">
            <div className="text-center mb-12 md:mb-20">
              <span className="font-sans font-semibold text-xs uppercase tracking-[0.25em] text-accent mb-4 block">Process</span>
              <h2 className="font-display font-black text-2xl sm:text-3xl md:text-4xl uppercase tracking-tight text-[#1C1C1E]">How It Works</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 relative">
              <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-px bg-gradient-to-r from-accent/30 via-accent to-accent/30 z-0" />

              {[
                { icon: ClipboardList, step: "01", title: "Submit Request", desc: "Fill out the form with your project details, timeline, and required scope of work." },
                { icon: MapPin, step: "02", title: "Site Evaluation", desc: "We will contact you within 3 business days to schedule a comprehensive site visit." },
                { icon: FileText, step: "03", title: "Written Proposal", desc: "Receive a detailed, transparent proposal within one week of evaluation. Free, no strings attached." },
              ].map((item, idx) => (
                <div key={idx} className="relative z-10 flex flex-col items-center text-center">
                  <div className="w-24 h-24 rounded-full bg-[#1C1C1E] flex items-center justify-center mb-8 shadow-[0_8px_30px_rgba(0,0,0,0.2)] border border-white/5 relative">
                    <item.icon className="w-8 h-8 text-accent" />
                    <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full gold-gradient flex items-center justify-center text-[#1C1C1E] font-display font-black text-xs">{item.step}</span>
                  </div>
                  <h3 className="font-display font-bold text-xl uppercase mb-4 text-[#1C1C1E] tracking-wide">{item.title}</h3>
                  <p className="text-gray-500 leading-relaxed max-w-xs">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
