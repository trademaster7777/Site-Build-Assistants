import { ServicePage } from "@/components/ServicePage";
import { useEffect } from "react";

export default function PublicSector() {
  useEffect(() => {
    document.title = "Public Sector Excavation Contractor in PA | M&K Contractors";
  }, []);

  return (
    <ServicePage
      title="Public Sector & Infrastructure Excavation in Pennsylvania"
      subheadline="Reliable, compliant, and experienced excavation services for municipal water, wastewater, and public works projects."
      serviceName="Public Sector & Infrastructure"
      overview={[
        "M&K Contractors brings extensive experience to public sector excavation and infrastructure projects across Pennsylvania. We understand that municipal and government work requires strict adherence to regulations, comprehensive safety protocols, and the ability to meet demanding schedules while minimizing disruption to the community. Our team is fully licensed, insured, and equipped to handle the rigorous demands of public works.",
        "Whether acting as the primary contractor on a municipal utility upgrade or working as a specialized excavation subcontractor on larger infrastructure developments, we deliver the same uncompromising standard of work. From municipal water main replacements to complex stormwater management systems, our direct-owner involvement ensures accountability and precision at every stage of the project."
      ]}
      capabilities={[
        {
          title: "Public Water Service Installation & Repair",
          description: "Precision excavation and installation of municipal water mains, service connections, and fire lines according to local utility standards."
        },
        {
          title: "Wastewater & Sewer Infrastructure",
          description: "Deep trench excavation, shoring, and installation of gravity sewers, force mains, and sanitary manholes."
        },
        {
          title: "Stormwater Management Systems",
          description: "Excavation and grading for retention basins, drainage swales, catch basins, and underground stormwater vaults."
        },
        {
          title: "Roadway Preparation & Public Utility Trenching",
          description: "Subgrade preparation, curb line excavation, and safe trenching for public electrical and communication conduits."
        }
      ]}
      faqs={[
        {
          question: "Does M&K act as primary contractor or subcontractor on public works?",
          answer: "We do both. For specialized excavation and utility projects, we frequently act as the primary contractor working directly with the municipality. For broader infrastructure projects, we often partner as a dedicated excavation subcontractor for larger general contracting firms."
        },
        {
          question: "What areas in Pennsylvania do you serve for infrastructure projects?",
          answer: "Our primary service area for public works includes Bucks County, Montgomery County, Chester County, Delaware County, Lehigh County, Northampton County, Berks County, and the greater Philadelphia region."
        },
        {
          question: "What safety protocols does M&K follow on public works job sites?",
          answer: "Safety is uncompromising. We utilize proper trench shoring/shielding for deep excavations, maintain rigorous traffic control coordination, ensure all operators are highly trained on our specific equipment, and adhere to all OSHA and local municipal safety standards."
        },
        {
          question: "How do we request a bid from M&K Contractors?",
          answer: "You can submit project details through our contact form, email us directly at info@mkcontractorspa.com, or call us at (267) 221-6226. We review plans promptly and provide detailed, transparent bids."
        }
      ]}
    />
  );
}
