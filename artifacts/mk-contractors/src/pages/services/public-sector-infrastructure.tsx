import { ServicePage } from "@/components/ServicePage";
import { useEffect } from "react";

export default function PublicSector() {
  useEffect(() => {
    document.title = "Public Sector Excavation Contractor in PA | M&K Contractors";
  }, []);

  return (
    <ServicePage
      title="Public Sector & Municipal Infrastructure in Pennsylvania"
      subheadline="Bid-ready, prevailing-wage-compliant excavation for townships, boroughs, authorities, and government public works programs."
      serviceName="Public Sector & Infrastructure"
      overview={[
        "M&K Contractors works directly with Pennsylvania municipalities, water and sewer authorities, school districts, and government agencies on publicly bid infrastructure projects. Public sector work is governed by a different rulebook than private commercial work — it requires familiarity with prevailing wage requirements, certified payroll, public bid documentation, MPT (maintenance and protection of traffic) plans, inspector coordination, and strict municipal acceptance standards.",
        "Where our Utility Excavation service focuses on the trenching itself, our Public Sector practice is built around the broader project: managing community impact, working through municipal review and inspection, coordinating with engineers of record, and delivering finished infrastructure that the township or authority can sign off on and own for the next several decades. We bid as a primary contractor on smaller municipal packages and serve as the dedicated excavation partner for general contractors awarded larger public infrastructure work."
      ]}
      capabilities={[
        {
          title: "Municipal Water Main & Service Replacement",
          description: "Township-bid water main upsizing, lead service line replacement programs, hydrant relocations, and tie-ins coordinated with the local water authority's shutdown windows."
        },
        {
          title: "Sanitary Sewer & Authority Force Main Work",
          description: "Public gravity sewer extensions, force main installations, manhole rehabilitation, and lateral connections built to municipal authority specs and inspected to acceptance."
        },
        {
          title: "Roadway Restoration & MPT",
          description: "Road opening permits, traffic control plans, sub-base repair, and final paving restoration coordinated with PennDOT or local public works after underground work is complete."
        },
        {
          title: "Public Stormwater & MS4 Compliance",
          description: "Detention basin construction, inlet and catch basin installation, and outfall work that meets Pennsylvania DEP and municipal MS4 stormwater requirements."
        }
      ]}
      faqs={[
        {
          question: "Do you bid publicly advertised municipal projects?",
          answer: "Yes. We respond to publicly advertised invitations to bid from townships, boroughs, authorities, and school districts in our service area. We can provide certified payroll, prevailing wage documentation, performance and payment bonding through our surety, and all required insurance certificates."
        },
        {
          question: "How do you handle work in active rights-of-way and around residents?",
          answer: "Public work means working in front of homes, businesses, and active traffic. We submit MPT plans, coordinate with the township's public works department, post advance notice for affected residents when required, and schedule water or service shutoffs in tight windows to minimize disruption."
        },
        {
          question: "Can you serve as the excavation subcontractor on a larger public works job?",
          answer: "Absolutely. Many of our public sector projects are performed as a dedicated excavation and underground utility subcontractor to a larger general contractor awarded a road, bridge, or campus infrastructure package. We carry our own bonding capacity and meet GC prequalification requirements."
        },
        {
          question: "How do we request a bid from M&K Contractors?",
          answer: "Send the bid documents and plans through our contact form, email Info@mkcontractorspa.com, or call (267) 221-6226. We review the package, attend the pre-bid walk if scheduled, and submit a complete sealed bid by the published deadline."
        }
      ]}
    />
  );
}
