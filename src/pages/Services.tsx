import { Link } from "react-router-dom";

const services = [
  {
    title: "Boom Lift",
    image: "/bomb-lift.jpeg",
    description:
      "High-reach boom lifts designed for safe and efficient elevated operations at construction, industrial, and infrastructure project sites.",
    link: "/services/boom-lift",
  },
  {
    title: "Scissor Lift",
    image: "/Scissor-Lift.jpeg",
    description:
      "Stable vertical lifting platforms ideal for warehouse operations, facility maintenance, installation, and indoor industrial applications.",
    link: "/services/scissor-lift",
  },
  {
    title: "Truck Mounted BoomLift",
    image: "/Mounted-Boom-Lift.jpeg",
    description:
      "Mobile truck-mounted lifting equipment suitable for street lighting, telecom work, utility services, and on-site maintenance projects.",
    link: "/services/truck-mounted-manlift",
  },
  {
    title: "Cranes",
    image: "/Crane.jpeg",
    description:
      "Heavy-duty cranes for material handling, equipment lifting, and large-scale construction projects.",
    link: "/services/cranes",
  },
];

export default function Services() {
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
              className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 group"
            >
              {/* Image Section */}
              <div className="h-72 w-full overflow-hidden bg-white flex items-center justify-center p-6">
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

                {/* ✅ Read More Redirect */}
                <Link
                  to={service.link}
                  className="text-[#F4B400] font-semibold text-base hover:underline transition"
                >
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
