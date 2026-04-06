import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { Link } from "wouter";
import { useState, useEffect } from "react";

export default function Projects() {
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    document.title = "Project Gallery | M&K Contractors LLC — Pennsylvania Excavation";
  }, []);

  const projects = [
    { id: 1, caption: "Track loader performing bulk earthwork — Bucks County, PA", category: "Site Development" },
    { id: 2, caption: "Precision laser grading — commercial site, Montgomery County, PA", category: "Site Development" },
    { id: 3, caption: "Stormwater pipe installation — Chester County, PA", category: "Utilities" },
    { id: 4, caption: "Municipal water service connection — Delaware County, PA", category: "Infrastructure" },
    { id: 5, caption: "Utility trench excavation — Lehigh County, PA", category: "Utilities" },
    { id: 6, caption: "Structural demolition — commercial building, Philadelphia Metro, PA", category: "Demolition" },
    { id: 7, caption: "Retaining wall footing excavation — Berks County, PA", category: "Site Development" },
    { id: 8, caption: "Sewer line installation — Northampton County, PA", category: "Infrastructure" },
    { id: 9, caption: "Concrete removal and site clearing — Bucks County, PA", category: "Demolition" },
    { id: 10, caption: "Septic system excavation — Montgomery County, PA", category: "Utilities" },
    { id: 11, caption: "Foundation excavation — Chester County, PA", category: "Site Development" },
    { id: 12, caption: "Stormwater management system — Delaware County, PA", category: "Infrastructure" }
  ];

  const filters = ["All", "Site Development", "Utilities", "Infrastructure", "Demolition"];

  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <div className="min-h-screen bg-background text-foreground pt-20">
      <Header />

      {/* Hero Section */}
      <section className="bg-secondary py-20 border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "Projects" }]} />
          <h1 className="font-display font-extrabold text-4xl md:text-5xl text-white uppercase max-w-4xl mt-6 mb-4 tracking-tight">
            Our Project Gallery
          </h1>
          <p className="text-xl text-accent font-medium uppercase tracking-widest mb-8">
            Real equipment. Real job sites. Real results across Pennsylvania.
          </p>
          <div className="bg-background/10 p-6 border-l-4 border-accent max-w-4xl">
            <p className="text-white/90 text-lg leading-relaxed">
              Transparency is a core value at M&K Contractors. You will not find a single stock photo or AI-generated image anywhere on this website. Every photograph below was taken on an actual M&K job site by our team.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Filters */}
          <div className="flex flex-wrap gap-3 mb-12">
            {filters.map(f => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-5 py-2 font-sans font-bold text-sm uppercase tracking-wider transition-colors border ${
                  filter === f 
                    ? "bg-accent text-background border-accent" 
                    : "bg-transparent text-foreground border-border hover:border-accent hover:text-accent"
                }`}
                data-testid={`filter-btn-${f.replace(/\s+/g, '-').toLowerCase()}`}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProjects.map(project => (
              <div key={project.id} className="group flex flex-col h-full bg-secondary border border-border overflow-hidden">
                <div className="relative h-60 w-full overflow-hidden bg-[#3A3A3C]">
                  <ImagePlaceholder 
                    label={`Photo: ${project.caption}`} 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  />
                  <div className="absolute top-3 right-3 bg-background/90 text-accent text-xs font-bold uppercase tracking-wider px-3 py-1 shadow-sm">
                    {project.category}
                  </div>
                </div>
                <div className="p-5 flex-grow bg-background border-t border-border">
                  <p className="font-sans text-sm font-medium text-foreground leading-snug">
                    {project.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20 text-muted-foreground">
              No projects found for this category.
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#1C1C1E] border-t-4 border-accent text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display font-extrabold text-3xl md:text-4xl mb-10 uppercase text-white tracking-tight">
            Like What You See?
          </h2>
          <Link 
            href="/contact" 
            className="inline-flex items-center justify-center px-10 py-5 bg-accent text-background font-sans font-bold text-lg uppercase tracking-widest hover:bg-accent-alt transition-colors"
          >
            Request a Quote →
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
