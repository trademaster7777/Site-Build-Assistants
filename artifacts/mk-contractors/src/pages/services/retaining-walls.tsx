import { ServicePage } from "@/components/ServicePage";
import { useEffect } from "react";

export default function RetainingWalls() {
  useEffect(() => {
    document.title = "Retaining Wall Contractor Pennsylvania | M&K Contractors";
  }, []);

  return (
    <ServicePage
      title="Retaining Wall Excavation & Commercial Hardscaping in Pennsylvania"
      subheadline="Precision grading and excavation for structural retaining walls and commercial hardscape installations."
      serviceName="Retaining Walls & Hardscaping"
      overview={[
        "Structural retaining walls and large-scale commercial hardscapes require exacting earthwork to ensure long-term stability. A retaining wall is only as strong as the subgrade it sits on and the drainage system behind it. M&K Contractors specializes in the precision excavation, footing preparation, and drainage installation required for engineered retaining walls across Pennsylvania.",
        "We work closely with hardscape contractors, civil engineers, and developers to prepare sites for segmental block walls, poured concrete walls, and boulder retaining structures. By handling the heavy lifting—from cutting into hillsides and trenching massive footings to importing and compacting thousands of tons of clean stone backfill—we allow hardscape teams to focus purely on structural assembly."
      ]}
      capabilities={[
        {
          title: "Retaining Wall Footing Excavation",
          description: "Precision trenching for base courses and concrete footings, achieving exact depths and level subgrades."
        },
        {
          title: "Drainage Installation",
          description: "Excavation and placement of perforated drain pipes, weep holes, and clean stone backfill to relieve hydrostatic pressure behind walls."
        },
        {
          title: "Backfill & Compaction",
          description: "Systematic placement and heavy compaction of structural fill zones and reinforced soil masses using geogrid tie-backs."
        },
        {
          title: "Commercial Hardscape Grading",
          description: "Rough and fine grading for expansive commercial patios, plazas, pedestrian walkways, and architectural terraces."
        }
      ]}
      faqs={[
        {
          question: "Do you build the retaining walls themselves, or just the excavation?",
          answer: "We primarily focus on the heavy earthwork: the excavation, subgrade preparation, drainage installation, and structural backfill. For the actual aesthetic construction of the wall (laying block or pouring concrete), we typically partner with specialized masonry or hardscape contractors, though we do handle structural boulder walls."
        }
      ]}
    />
  );
}
