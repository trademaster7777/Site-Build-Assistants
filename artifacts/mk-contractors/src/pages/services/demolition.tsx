import { ServicePage } from "@/components/ServicePage";
import { useEffect } from "react";

export default function Demolition() {
  useEffect(() => {
    document.title = "Commercial Demolition Contractor Pennsylvania | M&K Contractors";
  }, []);

  return (
    <ServicePage
      title="Commercial & Structural Demolition in Pennsylvania"
      subheadline="Safe, efficient teardown and site clearing to prepare your property for its next chapter."
      serviceName="Demolition Services"
      overview={[
        "Before new construction can begin, old structures must be safely and efficiently removed. M&K Contractors provides controlled commercial and structural demolition services throughout Eastern and Central Pennsylvania. Demolition is not simply destruction; it requires strategic planning to safely dismantle structures without damaging surrounding properties, utilities, or the underlying subgrade.",
        "We utilize our own heavy equipment outfitted with specialized demolition attachments to tear down commercial buildings, break up heavy concrete foundations, and clear vast expanses of asphalt. Following the teardown, our team handles the complete sorting, loading, and hauling of debris, leaving you with a clean, graded site ready for immediate redevelopment."
      ]}
      capabilities={[
        {
          title: "Structural Demolition",
          description: "Complete teardown of commercial buildings, warehouses, retail spaces, and dilapidated structures using heavy excavators."
        },
        {
          title: "Concrete Breaking & Removal",
          description: "Demolition and extraction of concrete foundations, footings, retaining walls, parking lots, and heavy industrial slabs."
        },
        {
          title: "Site Clearing & Debris Hauling",
          description: "Thorough removal of all demolition rubble, scrap metal, and structural debris using our fleet of articulated dump trucks."
        }
      ]}
      faqs={[
        {
          question: "Do you handle demolition permits?",
          answer: "Typically, the general contractor or property owner secures the demolition permits. However, we provide all necessary licensing, insurance documentation, and operational plans required by municipalities to help expedite the permitting process."
        },
        {
          question: "Can you separate and recycle demolition materials?",
          answer: "Yes. Whenever feasible, we separate materials such as clean concrete, masonry, and scrap metal on-site. Clean concrete can often be hauled to recycling facilities to be crushed into aggregate, reducing landfill impact and disposal costs."
        }
      ]}
    />
  );
}
