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
    <div className="bg-muted/30 min-h-screen">
      {/* Existing Services Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl font-extrabold text-primary mb-16 text-center">
            Product <span className="text-accent underline decoration-primary/5 underline-offset-8">Services</span>
          </h1>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-2 shadow-sm border border-slate-100 card-hover overflow-hidden group"
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
                  <h3 className="text-2xl font-bold text-primary mb-4">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 text-base mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <Link
                    to={service.link}
                    className="inline-flex items-center text-accent font-bold text-base tracking-wide hover:gap-2 transition-all"
                  >
                    Read More <span className="ml-1 text-lg">→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🔷 Sectors We Serve */}
      <section className="py-24 bg-premium-gradient text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-96 h-96 bg-accent rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary rounded-full blur-[120px] translate-x-1/2 translate-y-1/2"></div>
        </div>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-6">
            <div className="max-w-3xl">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-8">
                Sectors We <span className="text-accent underline decoration-white/10 underline-offset-8">Serve</span>
              </h2>
              <div className="w-24 h-2 bg-accent mb-10 rounded-full shadow-lg shadow-accent/20"></div>
              <p className="text-gray-300 text-lg leading-relaxed">
                It has been our unswerving mission to cater to a variety of industries and engineering applications,
                which help us constantly challenge ourselves to stand up to the needs of the infrastructure industry.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {sectors.map((sector, index) => (
              <div
                key={index}
                className="group bg-white/5 backdrop-blur-md border border-white/10 p-10 rounded-[2.5rem] hover:bg-accent hover:border-accent transition-all duration-500 cursor-default shadow-xl hover:shadow-accent/20"
              >
                <div className="mb-8 inline-block p-5 bg-white/10 rounded-2xl group-hover:bg-black/5 transition-all duration-500">
                  <sector.icon className="w-10 h-10 text-accent group-hover:text-primary transition-all duration-500" />
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
      < section className="py-24 bg-white overflow-hidden" >
        <div className="max-w-7xl mx-auto px-6 mb-16">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary">
              Trusted by <span className="text-accent underline decoration-primary/5 underline-offset-8">Industry Leaders</span>
            </h2>
            <div className="w-24 h-1.5 bg-accent mx-auto mt-6 rounded-full shadow-lg shadow-accent/20"></div>
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
                className="mx-8 flex items-center justify-center p-8 w-72 h-40 bg-white/50 backdrop-blur-sm rounded-[2rem] border border-slate-100/50 hover:border-accent/40 shadow-sm card-hover transform transition-all duration-300"
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
