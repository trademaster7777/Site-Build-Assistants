import { ServicePage } from "@/components/ServicePage";
import { useEffect } from "react";

export default function UtilityExcavation() {
  useEffect(() => {
    document.title = "Utility Trenching Contractor Pennsylvania | M&K Contractors";
  }, []);

  return (
    <ServicePage
      title="Underground Utility Trenching & Excavation in Pennsylvania"
      subheadline="Safe, precise, and code-compliant trenching for water, sewer, stormwater, and conduit installations."
      serviceName="Utility Excavation"
      overview={[
        "Underground utility excavation requires a specialized skill set where precision and safety are paramount. Working around existing live utilities or excavating deep trenches for new infrastructure demands highly capable operators and a strict adherence to safety protocols. M&K Contractors provides expert utility trenching services for commercial developments, municipal upgrades, and complex site retrofits across Pennsylvania.",
        "Our fleet of compact and standard excavators allows us to operate efficiently in both tight urban environments and expansive commercial sites. We handle the complete excavation process—from initial trenching and safe shoring to proper bedding, pipe placement coordination, backfilling, and final compaction—ensuring that all underground infrastructure is installed securely and to exact code specifications."
      ]}
      capabilities={[
        {
          title: "Water & Sewer Line Trenching",
          description: "Excavation for new main installations, lateral connections, and emergency repairs for sanitary sewer and domestic water lines."
        },
        {
          title: "Stormwater Management & Drainage",
          description: "Trenching for RCP, HDPE, and corrugated metal stormwater piping, as well as excavation for underground retention systems."
        },
        {
          title: "Electrical & Communication Conduit Trenching",
          description: "Precise, shallow trenching for commercial electrical duct banks, telecommunications routing, and site lighting."
        },
        {
          title: "Septic System Excavation & Abandonment",
          description: "Excavation for commercial and large-scale septic system installations, drain fields, and safe decommissioning of old pits."
        }
      ]}
      faqs={[
        {
          question: "What safety measures does M&K take during utility trenching?",
          answer: "Safety is our absolute priority. We utilize OSHA-compliant trench boxes and shoring systems for deep excavations, employ proper sloping and benching techniques, maintain continuous atmospheric monitoring when necessary, and ensure all operators are trained in trench safety."
        },
        {
          question: "Can you work around existing underground utilities?",
          answer: "Yes. We coordinate thoroughly with PA One Call (811) before any digging begins. We employ safe digging practices, including hand-digging or vacuum excavation techniques when operating in close proximity to known active utilities."
        },
        {
          question: "What types of pipe materials do you work with?",
          answer: "While we handle the excavation and backfill, we frequently coordinate the placement of all standard utility materials including PVC, SDR-35, ductile iron, RCP (Reinforced Concrete Pipe), HDPE, and copper, ensuring trenches are prepared with the correct bedding material for each pipe type."
        }
      ]}
    />
  );
}
