import { ServicePage } from "@/components/ServicePage";
import { useEffect } from "react";

export default function SiteRestoration() {
  useEffect(() => {
    document.title = "Site Restoration & Specialized Repairs Pennsylvania | M&K Contractors";
  }, []);

  return (
    <ServicePage
      title="Site Restoration & Specialized Repairs in Pennsylvania"
      subheadline="Emergency water, sewer, and utility repairs with full site restoration when the work is finished."
      serviceName="Site Restoration & Specialized Repairs"
      heroPhotoNumber={7}
      overview={[
        "When a water main breaks, a sewer lateral collapses, or a buried utility fails, every hour costs money and disrupts operations. M&K Contractors responds quickly with the equipment, fittings, and experience to expose the failure, complete a clean repair, and put the site back together so the property looks like nothing happened.",
        "We work for property managers, municipalities, and general contractors across Eastern and Central Pennsylvania on water service repairs, sewer lateral replacements, and miscellaneous utility breaks. Just as importantly, we own the full restoration — asphalt patch, concrete flatwork, curb repair, topsoil, seed, and final grading — so you have one accountable contractor from the first dig to the last broom-sweep."
      ]}
      capabilities={[
        {
          title: "Water Service & Main Repairs",
          description: "Locate, expose, and repair broken copper, PE, and ductile-iron water lines from the curb stop to the building, including fitting replacements and pressure testing."
        },
        {
          title: "Sewer Lateral & Cleanout Repairs",
          description: "Replacement of damaged sewer laterals, installation of cleanouts, and coordination with municipal sewer authorities for inspection and tie-in."
        },
        {
          title: "Asphalt & Concrete Restoration",
          description: "Saw-cut patching of asphalt drives and parking lots, replacement of broken concrete walks, curbs, and aprons to match existing surfaces."
        },
        {
          title: "Lawn & Landscape Restoration",
          description: "Topsoil placement, fine grading, seed and straw, and re-installation of landscape edging so the disturbed area blends back into the surrounding property."
        }
      ]}
      faqs={[
        {
          question: "Do you respond to after-hours utility breaks?",
          answer: "Yes. We take emergency calls from commercial property managers and municipalities in our service area for water and sewer breaks. Call (267) 221-6226 and follow the after-hours prompts."
        },
        {
          question: "Will the patched area match the existing surface?",
          answer: "We saw-cut clean edges, compact in lifts, and use the appropriate mix or aggregate so the patch blends as closely as possible. For larger disturbances we can coordinate full-width milling and overlay so the repair is essentially invisible."
        }
      ]}
    />
  );
}
