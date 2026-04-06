import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Link } from "wouter";
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
    // Real implementation would send this to an API
  }

  return (
    <div className="min-h-screen bg-background text-foreground pt-20">
      <Header />

      {/* Hero Section */}
      <section className="bg-secondary py-16 md:py-20 border-b border-border relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/5 skew-x-12 transform origin-top-right pointer-events-none"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumb items={[{ label: "Contact" }]} />
          <h1 className="font-display font-extrabold text-4xl md:text-5xl text-white uppercase mt-4 mb-4 tracking-tight">
            Request a Project Evaluation
          </h1>
          <p className="text-xl text-accent font-medium uppercase tracking-widest mb-6">
            Free estimates. Written proposals within one week. No strings attached.
          </p>
          <p className="text-white/80 text-lg max-w-3xl leading-relaxed">
            Whether you are a general contractor looking for a reliable excavation subcontractor, a developer preparing a commercial site, or a municipality putting an infrastructure project out to bid, M&K Contractors is ready to get to work.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
            
            {/* Left: Form (60%) */}
            <div className="w-full lg:w-[60%]">
              {isSubmitted ? (
                <div className="bg-green-50 dark:bg-green-900/20 border-2 border-green-500 p-10 text-center rounded-sm h-full flex flex-col items-center justify-center">
                  <CheckCircle2 className="w-16 h-16 text-green-500 mb-6" />
                  <h2 className="font-display font-bold text-3xl mb-4 uppercase text-foreground">Request Received</h2>
                  <p className="text-lg text-muted-foreground mb-8">
                    Thank you! We'll be in touch within 3 business days to discuss your project.
                  </p>
                  <button 
                    onClick={() => {
                      setIsSubmitted(false);
                      form.reset();
                    }}
                    className="text-accent font-bold uppercase tracking-wider hover:underline"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <div className="bg-card border border-border p-8 md:p-10 shadow-lg">
                  <h2 className="font-display font-bold text-2xl mb-8 uppercase border-b border-border pb-4">Project Details</h2>
                  
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="fullName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="font-sans font-semibold uppercase text-xs tracking-wider text-muted-foreground">First & Last Name *</FormLabel>
                              <FormControl>
                                <Input placeholder="John Doe" className="bg-background border-border rounded-none focus-visible:ring-accent" {...field} />
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
                              <FormLabel className="font-sans font-semibold uppercase text-xs tracking-wider text-muted-foreground">Company Name</FormLabel>
                              <FormControl>
                                <Input placeholder="Acme Construction" className="bg-background border-border rounded-none focus-visible:ring-accent" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="font-sans font-semibold uppercase text-xs tracking-wider text-muted-foreground">Phone Number *</FormLabel>
                              <FormControl>
                                <Input type="tel" placeholder="(555) 123-4567" className="bg-background border-border rounded-none focus-visible:ring-accent" {...field} />
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
                              <FormLabel className="font-sans font-semibold uppercase text-xs tracking-wider text-muted-foreground">Email Address *</FormLabel>
                              <FormControl>
                                <Input type="email" placeholder="john@example.com" className="bg-background border-border rounded-none focus-visible:ring-accent" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="location"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="font-sans font-semibold uppercase text-xs tracking-wider text-muted-foreground">Project Location *</FormLabel>
                              <FormControl>
                                <Input placeholder="City or Zip Code" className="bg-background border-border rounded-none focus-visible:ring-accent" {...field} />
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
                              <FormLabel className="font-sans font-semibold uppercase text-xs tracking-wider text-muted-foreground">Est. Start Date</FormLabel>
                              <FormControl>
                                <Input type="date" className="bg-background border-border rounded-none focus-visible:ring-accent" {...field} />
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
                            <FormLabel className="font-sans font-semibold uppercase text-xs tracking-wider text-muted-foreground">Project Type *</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger className="bg-background border-border rounded-none focus-visible:ring-accent">
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
                            <FormLabel className="font-sans font-semibold uppercase text-xs tracking-wider text-muted-foreground">Project Description / Scope *</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Please provide details about your project scope, requirements, and timeline..." 
                                className="min-h-[150px] bg-background border-border rounded-none focus-visible:ring-accent resize-y" 
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <button 
                        type="submit" 
                        className="w-full py-4 bg-accent text-background font-sans font-bold text-lg uppercase tracking-widest hover:bg-accent-alt transition-colors mt-8"
                        data-testid="button-submit-contact"
                      >
                        Request Evaluation
                      </button>
                    </form>
                  </Form>
                </div>
              )}
            </div>

            {/* Right: Contact Info (40%) */}
            <div className="w-full lg:w-[40%] space-y-8">
              <div className="bg-secondary text-white p-8 border-l-4 border-accent shadow-xl">
                <h3 className="font-display font-bold text-2xl uppercase mb-8 border-b border-white/10 pb-4">Direct Contact</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Phone className="w-6 h-6 text-accent mt-1" />
                    <div>
                      <p className="font-sans font-bold uppercase text-xs tracking-wider text-white/60 mb-1">Primary Phone</p>
                      <a href="tel:+12672216226" className="text-xl font-medium hover:text-accent transition-colors block mb-1">(267) 221-6226</a>
                      <a href="tel:+12672216227" className="text-lg font-medium hover:text-accent transition-colors text-white/80">(267) 221-6227</a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Mail className="w-6 h-6 text-accent mt-1" />
                    <div>
                      <p className="font-sans font-bold uppercase text-xs tracking-wider text-white/60 mb-1">Email</p>
                      <a href="mailto:info@mkcontractorspa.com" className="text-lg font-medium hover:text-accent transition-colors">info@mkcontractorspa.com</a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Clock className="w-6 h-6 text-accent mt-1" />
                    <div>
                      <p className="font-sans font-bold uppercase text-xs tracking-wider text-white/60 mb-1">Operating Hours</p>
                      <p className="text-lg font-medium">Monday – Friday</p>
                      <p className="text-white/80">7:00 AM – 5:00 PM</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <MapPin className="w-6 h-6 text-accent mt-1" />
                    <div>
                      <p className="font-sans font-bold uppercase text-xs tracking-wider text-white/60 mb-1">Service Area</p>
                      <p className="text-lg font-medium">Eastern & Central Pennsylvania</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-card border border-border p-8">
                <h3 className="font-display font-bold text-xl uppercase mb-4 text-foreground">Emergency Services</h3>
                <p className="text-muted-foreground">
                  For emergency utility repair or demolition needs outside of normal business hours, please call our primary number and follow the prompts.
                </p>
              </div>
            </div>
          </div>

          {/* How It Works Section */}
          <div className="mt-24 pt-20 border-t border-border">
            <h2 className="font-display font-extrabold text-3xl md:text-4xl text-center mb-16 uppercase tracking-tight">How It Works</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
              {/* Desktop connecting line */}
              <div className="hidden md:block absolute top-8 left-[16%] right-[16%] h-1 bg-border z-0"></div>
              
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center border-4 border-background mb-6 shadow-md">
                  <ClipboardList className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-display font-bold text-xl uppercase mb-4">1. Submit Request</h3>
                <p className="text-muted-foreground">Fill out the form with your project details, timeline, and required scope of work.</p>
              </div>
              
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center border-4 border-background mb-6 shadow-md">
                  <MapPin className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-display font-bold text-xl uppercase mb-4">2. Site Evaluation</h3>
                <p className="text-muted-foreground">We will contact you within 3 business days to schedule a comprehensive site visit.</p>
              </div>
              
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center border-4 border-background mb-6 shadow-md">
                  <FileText className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-display font-bold text-xl uppercase mb-4">3. Written Proposal</h3>
                <p className="text-muted-foreground">Receive a detailed, transparent proposal within one week of evaluation. Free, no strings attached.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
