import { Link } from "react-router-dom";

const rentals = [
  {
    title: "Boom Lift (Electric & Diesel)",
    image: "/Bomb-lift-Engine.jpeg",
    description:
      "Electric and diesel powered boom lifts for safe elevated work at industrial and construction sites.",
  },
  {
    title: "Scissor Lift (Electric & Diesel)",
    image: "/Scissor.jpeg",
    description:
      "Stable vertical lifting solutions ideal for maintenance, installation, and warehouse operations.",
  },
  {
    title: "Truck Mounted Boom Lift (Diesel)",
    image: "/Mounted-Boom-Lift.jpeg",
    description:
      "High-reach truck mounted lifts for efficient outdoor and large-scale projects.",
  },
  {
    title: "Mobile & Crawler Cranes of Different Capacity",
    image: "/Crane Truck.jpeg",
    description:
      "Heavy-duty mobile and crawler cranes available in multiple capacities for industrial lifting.",
  },
  {
    title: "Farana & Hydra on rent",
    image: "/Fauna.jpeg",
    description:
      "Compact and powerful lifting equipment suitable for construction and factory operations.",
  },
  {
    title: "Compressor",
    image: "/Compressor.jpeg",
    description:
      "Industrial air compressors available for construction, mining, and heavy-duty usage.",
  },
  {
  title: "DG Set & Lighting Towers",
  image: "/DCL.jpeg",
  description:
    "Reliable diesel generator sets and high-intensity lighting towers designed to deliver uninterrupted power supply and efficient illumination for construction sites, industrial projects, and outdoor operations."
}

 
];

export default function RentalServices() {
  return (
    <section className="py-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-6">

        <h1 className="text-3xl md:text-4xl font-bold text-[#0B3C5D] mb-14">
          Rental <span className="text-[#F4B400]">Services</span>
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {rentals.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 group"
            >
              {/* Image */}
              <div className="h-72 w-full overflow-hidden bg-gray-50">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
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
