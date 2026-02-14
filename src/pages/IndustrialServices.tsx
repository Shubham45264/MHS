import { Link } from "react-router-dom";

const services = [
  {
    title: "Annual Maintenance Contracts",
    image: "/annual-maintenance-contract-services.jpeg",
    description:
      "Comprehensive AMC services for Cummins, Kirloskar, and Escorts-Kubota generators ensuring reliable long-term performance.",
  },
  {
    title: "Installation, Testing & Commissioning of Generators",
    image: "/install.jpeg",
    description:
      "Professional installation and commissioning of industrial generator systems with full safety compliance.",
  },
  {
    title: "Fabrication of DG Stacks & Others",
    image: "/fabric.jpeg",
    description:
      "Custom DG exhaust stack fabrication solutions designed for efficiency and durability.",
  },
  {
    title: "Repairing of Generator Canopy",
    image: "/Repair.jpeg",
    description:
      "Expert repair and structural restoration of generator canopies with acoustic optimization.",
  },
  {
    title: "Painting of Structures & Bridges",
    image: "/paint.jpeg",
    description:
      "Industrial-grade painting services ensuring corrosion resistance and long-lasting finish.",
  },
  {
    title: "Sheeting Work",
    image: "/roof.png",
    description:
      "High-quality industrial roofing and sheeting solutions for warehouses and commercial structures.",
  },
];

export default function IndustrialServices() {
  return (
    <section className="py-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-6">

        <h1 className="text-3xl md:text-4xl font-bold text-[#0B3C5D] mb-14">
          Industrial <span className="text-[#F4B400]">Services</span>
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 group"
            >
              {/* Image Section */}
              {/* Image Section */}
<div className="relative h-72 w-full overflow-hidden rounded-t-3xl">
  <img
    src={service.image}
    alt={service.title}
    className="w-full h-full object-cover object-center group-hover:scale-105 transition duration-500"
  />
</div>


              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-[#0B3C5D] mb-4">
                  {service.title}
                </h3>

                <p className="text-gray-600 text-base mb-6 leading-relaxed">
                  {service.description}
                </p>

                <Link
                  to="/contact"
                  className="text-[#F4B400] font-semibold text-base hover:underline transition"
                >
                  Enquire Now →
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
