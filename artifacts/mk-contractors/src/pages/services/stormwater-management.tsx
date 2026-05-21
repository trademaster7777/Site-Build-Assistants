import { ServicePage } from "@/components/ServicePage";
import { useEffect } from "react";

export default function StormwaterManagement() {
  useEffect(() => {
    document.title = "Stormwater Management & Erosion Control Pennsylvania | M&K Contractors";
  }, []);

  return (
    <ServicePage
      title="Stormwater Management & Erosion Control in Pennsylvania"
      subheadline="Engineered drainage systems, sediment controls, and site stabilization that meet PA DEP and NPDES standards."
      serviceName="Stormwater Management & Erosion Control"
      heroPhotoNumber={24}
      overview={[
        "Every Pennsylvania construction site must control runoff, sediment, and erosion to protect downstream waterways and remain compliant with PA DEP, county conservation district, and NPDES permit requirements. M&K Contractors installs the underground infrastructure and surface stabilization measures that keep your site compliant from clearing through final stabilization.",
        "From subsurface infiltration beds and detention basins to silt fence, inlet protection, and stabilized construction entrances, we build the complete stormwater and erosion control package called for on your approved E&S plan. Our crews work directly from the engineer's drawings and coordinate inspections with the local conservation district so you stay on schedule."
      ]}
      capabilities={[
        {
          title: "Infiltration & Detention Systems",
          description: "Excavation and installation of stone-bed infiltration trenches, underground detention chambers, manifold piping, and outlet control structures."
        },
        {
          title: "Storm Drain & Inlet Installation",
          description: "Trenching and laying of HDPE, PVC, and RCP storm pipe with precast inlets, manholes, end sections, and rip-rap outfall protection."
        },
        {
          title: "Erosion & Sediment Control",
          description: "Silt fence, compost filter sock, inlet protection, sediment traps, rock construction entrances, and temporary sediment basins installed per your E&S plan."
        },
        {
          title: "Site Stabilization & Restoration",
          description: "Final grading, topsoil placement, seeding, and erosion control blanket on disturbed slopes to achieve permanent stabilization and permit close-out."
        }
      ]}
      faqs={[
        {
          question: "Can you install systems designed by my civil engineer?",
          answer: "Yes. We build from approved engineering plans every day — infiltration beds, detention basins, storm sewer networks, and E&S measures. We coordinate directly with your engineer and the conservation district inspector throughout the install."
        },
        {
          question: "Do you handle conservation district inspections?",
          answer: "We schedule and meet with PA DEP and county conservation district inspectors on-site to walk through E&S installations, maintenance, and final stabilization. Our work routinely passes inspection on the first visit."
        }
      ]}
    />
  );
}
