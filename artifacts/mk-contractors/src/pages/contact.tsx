import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Phone, Mail, MapPin, Clock, ClipboardList, FileText, CheckCircle2 } from "lucide-react";
import { useEffect, useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const contactSchema = z.object({
  fullName: z.string().min(2, { message: "Name is required" }),
  companyName: z.string().optional(),
  phone: z.string().min(10, { message: "Valid phone number required" }),
  email: z.string().email({ message: "Valid email required" }),
  location: z.string().min(2, { message: "Project location is required" }),
  projectType: z.string().min(1, { message: "Please select a project type" }),
  startDate: z.string().optional(),
  description: z.string().min(10, { message: "Please provide some project details" })
});

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    document.title = "Request a Free Estimate | M&K Contractors LLC Pennsylvania";
  }, []);

  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      fullName: "",
      companyName: "",
      phone: "",
      email: "",
      location: "",
      projectType: "",
      startDate: "",
      description: ""
    }
  });

  function onSubmit(values: z.infer<typeof contactSchema>) {
    console.log(values);
    setIsSubmitted(true);
  }

  return (
    <div className="min-h-screen bg-background text-foreground pt-20">
      <Header />

      <section className="bg-gradient-to-br from-[#1c1c1e] via-[#222226] to-[#1c1c1e] py-20 md:py-28 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent z-[2]" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumb items={[{ label: "Contact" }]} />
          <div className="section-divider mt-8 mb-8" />
          <h1 className="font-display font-black text-4xl md:text-5xl lg:text-[64px] text-white uppercase mt-4 mb-6 tracking-tight leading-[1.05]">
            Request a Project Evaluation
          </h1>
          <p className="text-lg text-accent font-semibold uppercase tracking-[0.2em] mb-8">
            Free estimates. Written proposals within one week. No strings attached.
          </p>
          <p className="text-white/50 text-lg max-w-3xl leading-[1.8]">
            Whether you are a general contractor looking for a reliable excavation subcontractor, a developer preparing a commercial site, or a municipality putting an infrastructure project out to bid, M&K Contractors is ready to get to work.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-[#F5F5F5]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
            
            <div className="w-full lg:w-[60%]">
              {isSubmitted ? (
                <div className="premium-card-light p-12 text-center rounded-sm h-full flex flex-col items-center justify-center border-2 border-green-500/30">
                  <div className="w-20 h-20 rounded-full bg-green-500/10 flex items-center justify-center mb-8">
                    <CheckCircle2 className="w-10 h-10 text-green-500" />
                  </div>
                  <h2 className="font-display font-black text-3xl mb-4 uppercase text-[#1C1C1E]">Request Received</h2>
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    Thank you! We'll be in touch within 3 business days to discuss your project.
                  </p>
                  <button 
                    onClick={() => {
                      setIsSubmitted(false);
                      form.reset();
                    }}
                    className="text-accent font-bold uppercase tracking-[0.12em] text-sm hover:underline"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <div className="premium-card-light p-10 md:p-12 rounded-sm">
                  <h2 className="font-display font-black text-2xl mb-10 uppercase border-b border-gray-200 pb-6 text-[#1C1C1E]">Project Details</h2>
                  
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-7">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                        <FormField
                          control={form.control}
                          name="fullName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="font-sans font-semibold uppercase text-[10px] tracking-[0.2em] text-gray-400">First & Last Name *</FormLabel>
                              <FormControl>
                                <Input placeholder="John Doe" className="bg-white border-gray-200 rounded-sm focus-visible:ring-accent h-12 text-[#1C1C1E]" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="companyName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="font-sans font-semibold uppercase text-[10px] tracking-[0.2em] text-gray-400">Company Name</FormLabel>
                              <FormControl>
                                <Input placeholder="Acme Construction" className="bg-white border-gray-200 rounded-sm focus-visible:ring-accent h-12 text-[#1C1C1E]" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="font-sans font-semibold uppercase text-[10px] tracking-[0.2em] text-gray-400">Phone Number *</FormLabel>
                              <FormControl>
                                <Input type="tel" placeholder="(555) 123-4567" className="bg-white border-gray-200 rounded-sm focus-visible:ring-accent h-12 text-[#1C1C1E]" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="font-sans font-semibold uppercase text-[10px] tracking-[0.2em] text-gray-400">Email Address *</FormLabel>
                              <FormControl>
                                <Input type="email" placeholder="john@example.com" className="bg-white border-gray-200 rounded-sm focus-visible:ring-accent h-12 text-[#1C1C1E]" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                        <FormField
                          control={form.control}
                          name="location"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="font-sans font-semibold uppercase text-[10px] tracking-[0.2em] text-gray-400">Project Location *</FormLabel>
                              <FormControl>
                                <Input placeholder="City or Zip Code" className="bg-white border-gray-200 rounded-sm focus-visible:ring-accent h-12 text-[#1C1C1E]" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="startDate"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="font-sans font-semibold uppercase text-[10px] tracking-[0.2em] text-gray-400">Est. Start Date</FormLabel>
                              <FormControl>
                                <Input type="date" className="bg-white border-gray-200 rounded-sm focus-visible:ring-accent h-12 text-[#1C1C1E]" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="projectType"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="font-sans font-semibold uppercase text-[10px] tracking-[0.2em] text-gray-400">Project Type *</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger className="bg-white border-gray-200 rounded-sm focus-visible:ring-accent h-12 text-[#1C1C1E]">
                                  <SelectValue placeholder="Select project type" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="Public Sector">Public Sector & Infrastructure</SelectItem>
                                <SelectItem value="Site Development">Commercial Site Development</SelectItem>
                                <SelectItem value="Utilities">Utility Excavation</SelectItem>
                                <SelectItem value="Demolition">Demolition Services</SelectItem>
                                <SelectItem value="Retaining Walls">Retaining Walls & Hardscaping</SelectItem>
                                <SelectItem value="Other">Other</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="description"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="font-sans font-semibold uppercase text-[10px] tracking-[0.2em] text-gray-400">Project Description / Scope *</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Please provide details about your project scope, requirements, and timeline..." 
                                className="min-h-[160px] bg-white border-gray-200 rounded-sm focus-visible:ring-accent resize-y text-[#1C1C1E]" 
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <button 
                        type="submit" 
                        className="btn-premium w-full py-4.5 text-[#1C1C1E] font-sans font-bold text-base uppercase tracking-[0.12em] mt-4 rounded-sm"
                        data-testid="button-submit-contact"
                      >
                        Request Evaluation
                      </button>
                    </form>
                  </Form>
                </div>
              )}
            </div>

            <div className="w-full lg:w-[40%] space-y-8">
              <div className="premium-card p-10 rounded-sm relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-accent to-accent-alt" />
                <h3 className="font-display font-black text-xl uppercase mb-10 text-white border-b border-white/5 pb-6 tracking-wide">Direct Contact</h3>
                
                <div className="space-y-8">
                  <div className="flex items-start space-x-5">
                    <div className="w-11 h-11 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Phone className="w-4 h-4 text-accent" />
                    </div>
                    <div>
                      <p className="font-sans font-semibold uppercase text-[10px] tracking-[0.2em] text-white/30 mb-2">Primary Phone</p>
                      <a href="tel:+12672216226" className="text-xl font-semibold hover:text-accent transition-colors duration-300 block mb-1 text-white">(267) 221-6226</a>
                      <a href="tel:+12672216227" className="text-lg font-medium hover:text-accent transition-colors duration-300 text-white/60">(267) 221-6227</a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-5">
                    <div className="w-11 h-11 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Mail className="w-4 h-4 text-accent" />
                    </div>
                    <div>
                      <p className="font-sans font-semibold uppercase text-[10px] tracking-[0.2em] text-white/30 mb-2">Email</p>
                      <a href="mailto:info@mkcontractorspa.com" className="text-lg font-medium hover:text-accent transition-colors duration-300 text-white">info@mkcontractorspa.com</a>
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
                      <p className="font-sans font-semibold uppercase text-[10px] tracking-[0.2em] text-white/30 mb-2">Service Area</p>
                      <p className="text-lg font-medium text-white">Eastern & Central Pennsylvania</p>
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

          <div className="mt-28 pt-20 border-t border-gray-200">
            <div className="text-center mb-20">
              <span className="font-sans font-semibold text-xs uppercase tracking-[0.25em] text-accent mb-4 block">Process</span>
              <h2 className="font-display font-black text-3xl md:text-4xl uppercase tracking-tight text-[#1C1C1E]">How It Works</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16 relative">
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
