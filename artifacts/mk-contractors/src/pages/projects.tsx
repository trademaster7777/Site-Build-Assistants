import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { Link } from "wouter";
import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";

export default function Projects() {
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    document.title = "Project Gallery | M&K Contractors LLC — Pennsylvania Excavation";
  }, []);

  const projects = [
    { id: 1, caption: "Track loader performing bulk earthwork — Bucks County, PA", category: "Site Development" },
    { id: 2, caption: "Precision laser grading — residential site, Montgomery County, PA", category: "Site Development" },
    { id: 3, caption: "Stormwater Basin Installation — Chester County, PA", category: "Utilities" },
    { id: 4, caption: "Municipal water service connection — Delaware County, PA", category: "Infrastructure" },
    { id: 5, caption: "Utility trench excavation — Lehigh County, PA", category: "Utilities" },
    { id: 6, caption: "Pole Barn Buildout — Gravel Drive and Finished Pole Barn, Philadelphia Metro", category: "Site Development" },
    { id: 7, caption: "Water Tank Delivery — Berks County, PA", category: "Infrastructure" },
    { id: 8, caption: "Water Treatment Installation — Northampton County, PA", category: "Infrastructure" },
    { id: 9, caption: "Concrete Installation — poured walkway and entry steps", category: "Site Development" },
    { id: 10, caption: "Water System Installation — Tetrasey filtration tanks on poured concrete pad", category: "Infrastructure" },
    { id: 11, caption: "Foundation excavation — Chester County, PA", category: "Site Development" },
    { id: 12, caption: "Stormwater management system — Delaware County, PA", category: "Infrastructure" }
  ];

  const filters = ["All", "Site Development", "Utilities", "Infrastructure"];

  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <div className="min-h-screen bg-background text-foreground pt-20">
      <Header />

      <section className="bg-gradient-to-br from-[#1c1c1e] via-[#222226] to-[#1c1c1e] py-16 md:py-32 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent z-[2]" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumb items={[{ label: "Projects" }]} />
          <div className="section-divider mt-8 mb-8" />
          <h1 className="font-display font-black text-[30px] sm:text-4xl md:text-5xl lg:text-[64px] text-white uppercase max-w-4xl mb-5 sm:mb-6 tracking-tight leading-[1.05] break-words">
            Our Project Gallery
          </h1>
          <p className="text-sm sm:text-lg text-accent font-semibold uppercase tracking-[0.2em] mb-8 md:mb-10">
            Real equipment. Real job sites. Real results across Pennsylvania.
          </p>
          <div className="premium-card p-5 sm:p-8 max-w-4xl rounded-sm relative">
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-accent to-accent-alt rounded-l-sm" />
            <p className="text-white/60 text-sm sm:text-lg leading-[1.8] pl-3 sm:pl-4">
              Transparency is a core value at M&K Contractors. You will not find a single stock photo or AI-generated image anywhere on this website. Every photograph below was taken on an actual M&K job site by our team.
            </p>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-28 bg-[#F5F5F5]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-wrap gap-2 sm:gap-3 mb-10 md:mb-14">
            {filters.map(f => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 sm:px-6 py-2.5 font-sans font-bold text-[11px] sm:text-xs uppercase tracking-[0.15em] transition-all duration-300 rounded-sm ${
                  filter === f 
                    ? "btn-premium text-[#1C1C1E] shadow-lg" 
                    : "bg-white text-[#1C1C1E] border border-gray-200 hover:border-accent hover:text-accent shadow-sm"
                }`}
                data-testid={`filter-btn-${f.replace(/\s+/g, '-').toLowerCase()}`}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProjects.map(project => (
              <div key={project.id} className="group flex flex-col h-full overflow-hidden rounded-sm shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_40px_rgba(0,0,0,0.15)] transition-all duration-500 hover:-translate-y-1 bg-white">
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#1C1C1E]">
                  <ImagePlaceholder
                    number={25 + project.id}
                    label={project.caption}
                    fillBlur
                    className="absolute inset-0 w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1c1c1e]/40 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute top-4 right-4 bg-[#1C1C1E]/90 text-accent text-[10px] font-bold uppercase tracking-[0.15em] px-3 py-1.5 rounded-sm shadow-md backdrop-blur-sm">
                    {project.category}
                  </div>
                </div>
                <div className="p-5 flex-grow border-t-2 border-accent/20">
                  <p className="font-sans text-sm font-medium text-[#1C1C1E] leading-snug">
                    {project.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20 text-gray-400">
              No projects found for this category.
            </div>
          )}
        </div>
      </section>

      <section className="py-16 md:py-28 bg-[#1C1C1E] relative subtle-noise overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="font-sans font-semibold text-xs uppercase tracking-[0.25em] text-accent/80 mb-6 block">Get Started</span>
          <h2 className="font-display font-black text-2xl sm:text-3xl md:text-4xl mb-10 md:mb-12 uppercase text-white tracking-tight">
            Like What You See?
          </h2>
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
