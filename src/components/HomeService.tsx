import { Link } from "react-router-dom";

const allServices = [
  {
    title: "Boom Lift",
    image: "/bomb-lift.jpeg",
    description: "High-reach boom lifts designed for safe and efficient elevated operations."
  },
  {
    title: "Scissor Lift",
    image: "/Scissor-Lift.jpeg",
    description: "Stable vertical lifting platforms ideal for warehouse and facility maintenance."
  },
  {
    title: "Truck Mounted BoomLift",
    image: "/Mounted-Boom-Lift.jpeg",
    description: "Mobile truck-mounted equipment for utility and on-site maintenance."
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
          <div className="w-20 h-1.5 bg-[#F4B400] mx-auto mt-4 rounded-full"></div>

          <Link
            to="/services"
            className="inline-block mt-6 bg-[#F4B400] text-black font-semibold px-6 py-2 rounded-full hover:opacity-90 transition"
          >
            See All Services
          </Link>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {allServices.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-sm hover:shadow-2xl hover:-translate-y-3 transition-all duration-300 overflow-hidden group"
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
