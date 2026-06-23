import { ServicePage } from "@/components/ServicePage";
import { useEffect } from "react";

export default function UtilityExcavation() {
  useEffect(() => {
    document.title = "Utility Trenching Contractor Pennsylvania | M&K Contractors";
  }, []);

  return (
    <ServicePage
      title="Private Utility Trenching & Underground Excavation"
      subheadline="Precision trenching for private commercial and residential utility installations — water, sewer, gas-ready conduit, electrical, and low-voltage."
      serviceName="Commercial & Utility Excavation"
      heroPhotoNumber={23}
      heroObjectPosition="center 35%"
      overview={[
        "Utility excavation is the trenching itself — the disciplined cutting, shoring, bedding, and backfilling that makes underground infrastructure work. While our Public Sector practice handles bid-driven municipal work, this service line focuses on private utility trenching for commercial property owners, developers, electricians, plumbers, mechanical contractors, and homeowners who need a trench cut clean, deep, and safe.",
        "We bring the right machine for the trench — mini excavators for tight, shallow runs in finished landscaping, larger excavators with shoring boxes for deep sanitary or storm runs, and trench compactors to bring the backfill back to spec. Our crews routinely work on commercial buildouts, parking lot retrofits, restaurant gas and grease line installations, EV charger conduit runs, generator pads, and emergency private service repairs.",
        "Our scope also includes interior saw cutting and utility excavation for water, electrical, and sewer lines inside existing buildings — cutting and removing concrete slab, trenching beneath the floor, setting the new line, and restoring the slab. We support specialized commercial work including data center utility infrastructure, electric vehicle (EV) charging station installations, and backup generator utility excavation — running the conduit, fuel, and service trenches that keep mission-critical and standby power systems online."
      ]}
      capabilities={[
        {
          title: "Private Water & Sanitary Service Trenching",
          description: "Trenching from the meter pit or main connection into the building for new commercial services, restaurant grease and sanitary lines, and broken private service replacement."
        },
        {
          title: "Conduit Trenching for Electrical & Low-Voltage",
          description: "Clean, code-depth trenches for site lighting, EV chargers, generator feeds, fiber, and security/CCTV conduit — coordinated with the electrician's schedule and inspection."
        },
        {
          title: "Private Stormwater & Drainage Tie-Ins",
          description: "Roof leader runs, area drains, French drains, and tie-ins to existing stormwater systems on commercial and residential properties."
        },
        {
          title: "Septic & Tank Excavation, Removal, and Abandonment",
          description: "Excavation for new private septic systems, drain field installation, oil tank removal, and code-compliant abandonment of decommissioned septic pits."
        },
        {
          title: "Interior Saw Cutting & Under-Slab Excavation",
          description: "Interior saw cutting and utility excavation for water, electrical, and sewer inside existing buildings — slab removal, under-floor trenching, line installation, and slab restoration."
        },
        {
          title: "Data Center & EV Charging Station Utilities",
          description: "Utility and electrical trenching for data center infrastructure and electric vehicle (EV) charging stations — conduit runs and service feeds for high-demand commercial power systems."
        },
        {
          title: "Backup Generator Utility Excavation",
          description: "Conduit, fuel, and service trenching for standby and backup generators — coordinated with the electrician and fuel installer to keep critical systems powered during outages."
        }
      ]}
      faqs={[
        {
          question: "What is the difference between this service and Public Sector & Infrastructure?",
          answer: "This page covers private utility trenching — work for property owners, developers, and other contractors. Our Public Sector & Infrastructure service covers publicly bid municipal and authority projects, which involve prevailing wage, bonding, certified payroll, and township inspection workflows."
        },
        {
          question: "Do you work alongside our electrician or plumber?",
          answer: "Yes — most of our utility trenching work is done in coordination with a licensed electrician, plumber, or mechanical contractor. We open the trench, install shoring and bedding, the licensed trade sets their pipe or conduit, we backfill to spec, and we coordinate the inspection."
        },
        {
          question: "How do you work safely around existing buried utilities?",
          answer: "Every job starts with a PA One Call (811) ticket. When we are working close to a known live line, we hand-dig or vacuum-excavate the last few feet to physically expose the utility before bringing the machine back in. We use OSHA-compliant trench protection on anything over five feet."
        },
        {
          question: "Can you handle emergency private service breaks?",
          answer: "We respond to emergency private water, sewer, and conduit breaks for commercial and property management clients in our service area. Call (267) 221-6226 and follow the prompts for after-hours work."
        }
      ]}
    />
  );
}
