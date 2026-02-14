import { Link } from "react-router-dom";

const services = [
  {
    title: "Boom Lift",
    image: "/bomb-lift.jpeg",
    description:
      "High-reach boom lifts for elevated work platforms at construction and industrial sites.",
  },
  {
    title: "Scissor Lift",
    image: "/Scissor-Lift.jpeg",
    description:
      "Stable vertical lifting platforms for maintenance and warehouse operations.",
  },
  {
    title: "Diesel Generators",
    image: "/Diesel-Generator.jpeg",
    description:
      "Reliable diesel generator sets for continuous and standby power supply.",
  },
  {
    title: "Light Towers",
    image: "/Light.jpeg",
    description:
      "High-performance lighting towers and DG systems designed for uninterrupted illumination at construction, infrastructure, and industrial sites.",
  },
  {
    title: "RECD & Dual Fuel Kit",
    image: "/Dual.png",
    description:
      "High-performance RECD panels and dual fuel kits engineered for generator protection, optimized fuel efficiency, and seamless transition between diesel and alternate fuels.",
  },
  {
    title: "Manufacturing of Canopy DG Sets",
    image: "/Canopy.jpeg",
    description:
      "Precision-engineered acoustic canopy DG sets designed for noise reduction, weather protection, durability, and compliant industrial power solutions.",
  },
];

export default function ProductServices() {
  return (
    <section className="py-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-6">

        <h1 className="text-3xl md:text-4xl font-bold text-[#0B3C5D] mb-14">
          Product <span className="text-[#F4B400]">Services</span>
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 group"
            >
              {/* Image Section */}
              <div className="h-72 w-full overflow-hidden bg-white flex items-center justify-center">
                <img
                  src={service.image}
                  alt={service.title}
                  className="max-h-full max-w-full object-contain group-hover:scale-105 transition duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-xl font-semibold text-[#0B3C5D] mb-4">
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
