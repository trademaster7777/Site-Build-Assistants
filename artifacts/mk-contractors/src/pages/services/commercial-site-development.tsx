import { ServicePage } from "@/components/ServicePage";
import { useEffect } from "react";

export default function CommercialSite() {
  useEffect(() => {
    document.title = "Commercial Site Preparation Pennsylvania | M&K Contractors";
  }, []);

  return (
    <ServicePage
      title="Commercial Site Preparation & Grading in Pennsylvania"
      subheadline="Comprehensive earthwork, grading, and land clearing to get your commercial project started on solid ground."
      serviceName="Commercial Site Development"
      overview={[
        "The success of any commercial construction project begins long before the foundation is poured. M&K Contractors provides comprehensive commercial site preparation and grading services across Eastern and Central Pennsylvania. We understand that general contractors and developers operate on tight schedules where delays in earthwork cascade through the entire project timeline. That is why when we commit to a site development schedule, we mobilize our own specialized equipment and crew to meet it.",
        "From initial land clearing and grubbing to mass grading and precision laser leveling, we handle the complete site package. We do not subcontract out portions of the site prep — our team controls the process from the first cut to final subgrade approval, ensuring the site is perfectly prepared for the concrete and structural teams that follow."
      ]}
      capabilities={[
        {
          title: "Site Clearing & Land Grubbing",
          description: "Efficient removal of trees, vegetation, stumps, and surface debris to prepare raw land for development."
        },
        {
          title: "Bulk Earthwork & Mass Grading",
          description: "Large-scale cut and fill operations using articulated dump trucks and track loaders to achieve target site elevations."
        },
        {
          title: "Precision Laser Grading",
          description: "Fine grading for building pads, parking lots, and hardscapes utilizing advanced laser technology for exacting tolerances."
        },
        {
          title: "Foundation & Basement Excavation",
          description: "Accurate dimensional excavation for commercial spread footings, strip footings, and structural basements."
        },
        {
          title: "Erosion & Sediment Control",
          description: "Installation of silt fencing, construction entrances, and temporary basins to maintain environmental compliance during earthmoving."
        }
      ]}
      faqs={[
        {
          question: "How do you determine the cost of commercial site grading?",
          answer: "Cost is determined by calculating the volume of earth to be moved (cut/fill analysis), site accessibility, soil conditions (rock, clay, etc.), disposal requirements, and the specific grading tolerances required. We provide firm, detailed proposals after reviewing civil plans and evaluating the site."
        },
        {
          question: "How long does commercial site preparation typically take?",
          answer: "Timelines vary wildly based on acreage and scope. A small commercial pad might take a few days, while a multi-acre retail development could take weeks. Because we don't rely on subcontractors, we can provide highly accurate schedules and commit to the timeline we set."
        },
        {
          question: "Do you handle erosion and sediment control?",
          answer: "Yes. Establishing proper E&S controls (like silt fencing and stabilized construction entrances) is the first step we take on any commercial site development project before major earthmoving begins, ensuring compliance with conservation district regulations."
        }
      ]}
    />
  );
}
