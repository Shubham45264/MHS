import { Link } from "react-router-dom";
import {
  Droplets, Factory, Wind, Waves, Hammer, Plane,
  TrainFront, Building2, Pipette, Ship, Construction, Zap
} from "lucide-react";

const services = [
  {
    title: "Diesel Boom Lift 17-18 m",
    image: "/bomb-lift.jpeg",
    description:
      "High-reach diesel boom lifts designed for safe and efficient elevated operations at construction, industrial, and infrastructure project sites.",
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
    title: "Truck Mounted Boom Lift",
    image: "/Mounted-Boom-Lift.jpeg",
    description:
      "Mobile truck-mounted lifting equipment suitable for street lighting, telecom work, utility services, and on-site maintenance projects.",
    link: "/services/truck-mounted-manlift",
  },
  {
    title: "Cranes",
    image: "/cranes 1.jpeg",
    description:
      "Heavy-duty cranes for material handling, equipment lifting, and large-scale construction projects.",
    link: "/services/cranes",
  },
  {
    title: "Escort Farana F15",
    image: "/small_ESCORTS_Farana_F15_8003f64ec7.webp",
    description:
      "Versatile 15-ton pick-and-carry crane designed for efficient material handling in industrial and construction environments.",
    link: "/services/escort-farana-f15",
  },
  {
    title: "Escort TRX 2319",
    image: "/trx 1.jpeg",
    description:
      "High-capacity 23-ton rugged crane built for heavy lifting and precision operations in demanding infrastructure projects.",
    link: "/services/escort-trx-2319",
  },
];

const clientLogos = [
  { name: "Tata", src: "/Tata.png" },
  { name: "Amazon", src: "/Amazon-Logo-PNG-HD-Quality.png" },
  { name: "Adani", src: "/adani.svg" },
  { name: "Reliance", src: "/Reliance-Industries-Limited-Logo.png" },
  { name: "Alstom", src: "/Alstom-Logo-1024x683.png" },
  { name: "Siemens", src: "/siemens-logo-0-2048x2048-1.png" },
  { name: "Jindal Steel", src: "/jindal_steel-logo_brandlogos.net_qch3c-1536x725.png" },
  { name: "JSW Steel", src: "/jsw-steel-vector-logo-11574258416x66ornlgd4.png" },
  { name: "Essar Steel", src: "/essar-steel-vector-logo-11574258428lgspc02yew.png" },
  { name: "Godrej", src: "/godrej-logo-png_seeklogo-61760.png" },
  { name: "Vedanta", src: "/vedanta-limited-logo-hd.png" },
  { name: "Mindtree", src: "/mindtree.jpeg" },
  { name: "Lafrange", src: "/Lafrange.png" },
];

const sectors = [
  { name: "Refineries", icon: Factory },
  { name: "Oil & Gas", icon: Droplets },
  { name: "Wind Energy", icon: Wind },
  { name: "Dredging", icon: Waves },
  { name: "Fabrication", icon: Hammer },
  { name: "Airports", icon: Plane },
  { name: "Metros & Railways", icon: TrainFront },
  { name: "Cement & Steel Plants", icon: Building2 },
  { name: "Water & Gas Pipelines", icon: Pipette },
  { name: "Ports & Jetties", icon: Ship },
  { name: "Pile Driving & Caging", icon: Construction },
  { name: "Thermal & Nuclear Power Plants", icon: Zap },
];

export default function Services() {
  return (
    <div className="bg-[#F8FAFC]">
      {/* Existing Services Section */}
      <section className="py-24">
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

      {/* 🔷 Sectors We Serve */}
      <section className="py-24 bg-[#0B3C5D] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-6">
            <div className="max-w-3xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Sectors We <span className="text-[#F4B400]">Serve</span>
              </h2>
              <div className="w-20 h-1.5 bg-[#F4B400] mb-6 rounded-full"></div>
              <p className="text-gray-300 text-lg leading-relaxed">
                It has been our unswerving mission to cater to a variety of industries and engineering applications,
                which help us constantly challenge ourselves to stand up to the needs of the infrastructure industry.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {sectors.map((sector, index) => (
              <div
                key={index}
                className="group bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-3xl hover:bg-[#F4B400] hover:border-[#F4B400] transition-all duration-500 cursor-default"
              >
                <div className="mb-6 inline-block p-4 bg-white/10 rounded-2xl group-hover:bg-black/10 transition-colors duration-500">
                  <sector.icon className="w-8 h-8 text-[#F4B400] group-hover:text-black transition-colors duration-500" />
                </div>
                <h4 className="text-xl font-bold group-hover:text-black transition-colors duration-500">
                  {sector.name}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🔷 Clients Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-16">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0B3C5D]">
              Trusted by <span className="text-[#F4B400]">Industry Leaders</span>
            </h2>
            <div className="w-20 h-1 bg-[#F4B400] mx-auto mt-4 rounded-full"></div>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
              We take pride in serving some of the most prestigious organizations across various industries.
            </p>
          </div>
        </div>

        {/* 🏃 Infinite Moving Slider */}
        <div className="relative flex overflow-x-hidden group">
          <div className="flex animate-marquee whitespace-nowrap py-4">
            {[...clientLogos, ...clientLogos].map((client, index) => (
              <div
                key={index}
                className="mx-8 flex items-center justify-center p-6 w-64 h-32 bg-gray-50 rounded-2xl border border-gray-100 hover:border-[#F4B400]/30 hover:shadow-xl hover:bg-white transition-all duration-300 transform hover:-translate-y-1"
              >
                <img
                  src={client.src}
                  alt={client.name}
                  className="max-h-16 max-w-full object-contain transition duration-500"
                />
              </div>
            ))}
          </div>

          {/* Masking Gradients for smooth fade in/out */}
          <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-white to-transparent z-10"></div>
        </div>
      </section>
    </div>
  );
}
