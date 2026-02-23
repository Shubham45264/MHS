import {
  ArrowUpFromLine, Scissors, Zap, Sun, Shield, Factory,
  Wrench, Settings, Hammer, Paintbrush, Layers, Truck,
  Container, Wind, Lightbulb,
} from "lucide-react";
import ServiceCard from "./ServiceCard";

const productServices = [
  { icon: ArrowUpFromLine, title: "Diesel Boom Lift 17-18 m", description: "High-reach diesel boom lifts for elevated work platforms at construction and industrial sites." },
  { icon: Scissors, title: "Scissor Lift", description: "Stable vertical lifting platforms for maintenance, installation, and warehouse operations." },
  { icon: Zap, title: "Diesel Generators", description: "Reliable diesel generator sets for continuous and standby power supply." },
  { icon: Sun, title: "Light Towers", description: "Portable light tower solutions for night-time construction and event illumination." },
  { icon: Shield, title: "RECD & Dual Fuel Kit", description: "Energy-efficient dual fuel conversion kits and RECD panels for generators." },
  { icon: Factory, title: "Manufacturing of Canopy DG Sets", description: "Custom fabrication and manufacturing of acoustic canopy DG sets." },
];

const industrialServices = [
  { icon: Wrench, title: "Annual Maintenance Contracts", description: "Comprehensive AMC for Cummins, Kirloskar, and Escorts-Kubota generator sets." },
  { icon: Settings, title: "Installation, Testing & Commissioning", description: "End-to-end generator installation, load testing, and commissioning services." },
  { icon: Hammer, title: "Fabrication of DG Stacks", description: "Custom fabrication of exhaust stacks and silencer systems for DG sets." },
  { icon: Shield, title: "Repairing Generator Canopy", description: "Repair and restoration of damaged generator acoustic canopies." },
  { icon: Paintbrush, title: "Painting of Structures & Bridges", description: "Industrial painting and anti-corrosion coating for steel structures and bridges." },
  { icon: Layers, title: "Sheeting Work", description: "Roofing and cladding sheeting work for industrial sheds and warehouses." },
];

const rentalServices = [
  { icon: ArrowUpFromLine, title: "Diesel Boom Lift 17-18 m", description: "Diesel-powered boom lifts available on daily, weekly, and monthly rental." },
  { icon: Scissors, title: "Scissor Lift", description: "Compact scissor lifts for indoor and outdoor elevated access on rent." },
  { icon: Truck, title: "Truck Mounted Boom Lift", description: "Vehicle-mounted aerial platforms for roadside and utility maintenance." },
  { icon: Container, title: "Mobile & Crawler Cranes", description: "Heavy-duty mobile and crawler cranes for lifting and material handling." },
  { icon: Truck, title: "Farana & Hydra", description: "Farana cranes and Hydra cranes for construction material handling." },
  { icon: Wind, title: "Compressor", description: "Portable air compressors for pneumatic tools and sandblasting operations." },
  { icon: Zap, title: "DG Set on Rent", description: "Generator sets on rent from 10 KVA to 500 KVA for events and projects." },
  { icon: Lightbulb, title: "Lighting Towers on Rent", description: "Portable lighting tower rentals for construction sites and outdoor events." },
];

interface CategoryProps {
  title: string;
  services: { icon: any; title: string; description: string }[];
}

function ServiceCategory({ title, services }: CategoryProps) {
  return (
    <div className="mb-12">
      <h3 className="font-display text-xl font-bold text-primary mb-6 border-l-4 border-accent pl-4">{title}</h3>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {services.map((s) => (
          <ServiceCard key={s.title} icon={s.icon} title={s.title} description={s.description} />
        ))}
      </div>
    </div>
  );
}

export default function ServicesSection() {
  return (
    <section id="services" className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-2">Our Services</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Comprehensive Industrial Solutions
          </h2>
          <p className="text-muted-foreground">
            From equipment sales and rentals to full-service maintenance contracts — we've got your industrial needs covered.
          </p>
        </div>

        <ServiceCategory title="Product Services" services={productServices} />
        <ServiceCategory title="Industrial Services" services={industrialServices} />
        <ServiceCategory title="Rental Services" services={rentalServices} />
      </div>
    </section>
  );
}
