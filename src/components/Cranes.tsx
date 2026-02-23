import { Link } from "react-router-dom";

export default function Cranes() {
  return (
    <section className="py-24 bg-muted/40">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="mb-14">
          <h1 className="text-5xl font-extrabold text-primary mb-6">
            Heavy Duty <span className="text-accent underline decoration-primary/10 underline-offset-8">Cranes</span>
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed max-w-3xl">
            Our heavy-duty cranes are engineered for lifting, loading, and
            transporting heavy materials across construction sites and industrial
            operations. Built for strength, reliability, and maximum safety.
          </p>
        </div>

        {/* Main Image + Description Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">

          {/* Main Image */}
          <div className="bg-white rounded-3xl shadow-lg p-6">
            <img
              src="/cranes 1.jpeg"
              alt="Heavy Duty Cranes"
              className="w-full h-[350px] object-contain"
            />
          </div>

          {/* Detailed Info */}
          <h2 className="text-3xl font-bold text-primary mb-6">
            Why Choose Our Cranes?
          </h2>

          <p className="text-gray-700 mb-4">
            We offer a wide range of mobile and hydraulic cranes that are perfectly
            suited for complex infrastructure projects. Our fleet is maintained to
            the highest industry standards to ensure zero downtime.
          </p>

          <p className="text-gray-700 mb-4">
            From small material handling to massive structural lifts, our cranes
            provide the precision and power required for modern construction.
          </p>

          <p className="text-gray-700">
            Available for rental across Maharashtra, we provide expert
            operator support and 24/7 technical assistance.
          </p>
        </div>
      </div>

      {/* 📸 Cranes Product Showcase Gallery */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold text-primary mb-10 text-center">
          Cranes <span className="text-accent underline decoration-primary/5 underline-offset-8">Gallery</span>
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-3xl p-2 shadow-sm border border-slate-100 card-hover overflow-hidden">
            <img
              src="/cranes 2.jpeg"
              alt="Cranes View 2"
              className="w-full h-60 object-cover rounded-xl transition-transform duration-500 group-hover:scale-110"
            />
          </div>
          <div className="bg-white rounded-3xl p-2 shadow-sm border border-slate-100 card-hover overflow-hidden">
            <img
              src="/cranes 3.jpeg"
              alt="Cranes View 3"
              className="w-full h-60 object-cover rounded-xl transition-transform duration-500 group-hover:scale-110"
            />
          </div>
          <div className="bg-white rounded-3xl p-2 shadow-sm border border-slate-100 card-hover overflow-hidden">
            <img
              src="/cranes 4.jpeg"
              alt="Cranes View 4"
              className="w-full h-60 object-cover rounded-xl transition-transform duration-500 group-hover:scale-110"
            />
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center">
        <Link
          to="/contact"
          className="bg-primary text-white px-10 py-4 rounded-full font-bold shadow-xl shadow-primary/20 hover:scale-105 transition-all"
        >
          Request a Quote
        </Link>
      </div>
    </section>
  );
}
