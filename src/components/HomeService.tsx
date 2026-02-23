import { Link } from "react-router-dom";

const allServices = [
  {
    title: "Diesel Boom Lift 17-18 m",
    image: "/bomb-lift.jpeg",
    description: "High-reach diesel boom lifts designed for safe and efficient elevated operations."
  },
  {
    title: "Scissor Lift",
    image: "/Scissor-Lift.jpeg",
    description: "Stable vertical lifting platforms ideal for warehouse and facility maintenance."
  },
  {
    title: "Truck Mounted Boom Lift",
    image: "/Mounted-Boom-Lift.jpeg",
    description: "Mobile truck-mounted equipment for utility and on-site maintenance."
  },
];

export default function HomeServices() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Heading */}
        <div className="text-center mb-14">
          <h3 className="text-3xl md:text-5xl font-extrabold text-primary">
            Services <span className="text-accent underline decoration-primary/10 underline-offset-8">We Offer</span>
          </h3>
          <div className="w-24 h-2 bg-accent mx-auto mt-6 rounded-full shadow-lg shadow-accent/20"></div>

          <Link
            to="/services"
            className="inline-block mt-10 bg-primary text-white font-bold px-8 py-3 rounded-full hover:bg-primary/90 transition-all hover:scale-105 shadow-xl shadow-primary/10"
          >
            See All Services
          </Link>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {allServices.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-2 shadow-sm border border-slate-100 card-hover overflow-hidden group"
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
                <h4 className="text-xl font-bold text-primary mb-3">
                  {service.title}
                </h4>

                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>

                {/* ✅ Redirect to Services Page */}
                <Link
                  to="/services"
                  className="inline-flex items-center text-accent font-bold text-sm tracking-wide hover:gap-2 transition-all"
                >
                  Know More <span className="ml-1 text-lg">→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
