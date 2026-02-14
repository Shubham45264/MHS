import { Link } from "react-router-dom";
const services = [
  {
    title: "Product Services",
    description:
      "Boom Lifts, Scissor Lifts, Diesel Generators, Light Towers, RECD & Dual Fuel Kits, and Manufacturing of Canopy DG Sets.",
    image: "/image.png",
    link: "/product-services",
  },
  {
    title: "Industrial Services",
    description:
      "AMC of Generators, Installation & Commissioning, DG Stack Fabrication, Canopy Repairs, Painting & Structural Work.",
    image: "/industry.jpg",
    link: "/industrial-services",
  },
  {
    title: "Rental Services",
    description:
      "Boom Lifts, Scissor Lifts, Truck Mounted Lifts, Cranes, Hydra, Compressor, DG Set & Lighting Towers on Rent.",
    image: "/Imagesss.jpg",
    link: "/rental-services",
  },
];


export default function HomeServices() {
  return (
    <section className="py-20 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">
          <h3 className="text-3xl md:text-4xl font-bold text-[#0B3C5D]">
            Services <span className="text-[#F4B400]">We Offer</span>
          </h3>

          <Link
            to="/services"
            className="inline-block mt-4 bg-[#F4B400] text-black font-semibold px-5 py-2 rounded-full hover:opacity-90 transition"
          >
            See All Services
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 p-5"
            >
              <img
                src={service.image}
                alt={service.title}
                className="rounded-xl mb-4 w-full h-56 object-cover"
              />

              <h4 className="text-lg font-semibold text-[#0B3C5D] mb-2">
                {service.title}
              </h4>

              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                {service.description}
              </p>

              <Link
                to={service.link}
                className="text-[#F4B400] font-semibold text-sm hover:underline"
              >
                Know More →
              </Link>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
