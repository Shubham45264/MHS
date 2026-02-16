import { Link } from "react-router-dom";

const services = [
  {
    title: "Boom Lift",
    description:
      "Boom Lifts, Scissor Lifts, Diesel Generators, Light Towers, RECD & Dual Fuel Kits, and Manufacturing of Canopy DG Sets.",
    image: "/bomb-lift.jpeg",
  },
  {
    title: "Scissor Lift",
    description:
      "AMC of Generators, Installation & Commissioning, DG Stack Fabrication, Canopy Repairs, Painting & Structural Work.",
    image: "/Scissor.jpeg",
  },
  {
    title: "Truck Mounted ManLift",
    description:
      "Boom Lifts, Scissor Lifts, Truck Mounted Lifts, Cranes, Hydra, Compressor, DG Set & Lighting Towers on Rent.",
    image: "/Mounted-Boom-Lift.jpeg",
  },
];

export default function HomeServices() {
  return (
    <section className="py-20 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Heading */}
        <div className="text-center mb-14">
          <h3 className="text-3xl md:text-4xl font-bold text-[#0B3C5D]">
            Services <span className="text-[#F4B400]">We Offer</span>
          </h3>

          <Link
            to="/services"
            className="inline-block mt-6 bg-[#F4B400] text-black font-semibold px-6 py-2 rounded-full hover:opacity-90 transition"
          >
            See All Services
          </Link>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-sm hover:shadow-2xl hover:-translate-y-3 transition-all duration-300 overflow-hidden"
            >
              {/* Image */}
              <div className="h-60 bg-white flex items-center justify-center p-6">
                <img
                  src={service.image}
                  alt={service.title}
                  className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h4 className="text-lg font-semibold text-[#0B3C5D] mb-3">
                  {service.title}
                </h4>

                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>

                {/* ✅ Redirect to Services Page */}
                <Link
                  to="/services"
                  className="text-[#F4B400] font-semibold text-sm hover:underline"
                >
                  Know More →
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
