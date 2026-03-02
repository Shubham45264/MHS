import { Link } from "react-router-dom";

export default function BoomLift() {
  return (
    <section className="py-24 bg-muted/40">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="mb-14">
          <h1 className="text-5xl font-extrabold text-primary mb-6">
            Diesel Boom <span className="text-accent underline decoration-primary/10 underline-offset-8">Lift</span>
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed max-w-3xl">
            Our Diesel Boom Lifts are designed to provide safe and reliable elevated
            access solutions for construction, infrastructure, and industrial
            projects. Built with advanced engineering and safety standards,
            they ensure smooth performance even in demanding environments.
          </p>
        </div>

        {/* Main Image + Description */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">

          {/* Main Image */}
          <div className="bg-white rounded-3xl shadow-lg p-6">
            <img
              src="/bomb lift 1.jpeg"
              alt="Diesel Boom Lift 17-18 m"
              className="w-full h-[350px] object-contain"
            />
          </div>

          {/* Detailed Info */}
          <h2 className="text-3xl font-bold text-primary mb-6">
            Why Choose Our Diesel Boom Lift?
          </h2>

          <p className="text-gray-700 mb-4">
            Our equipment is maintained regularly to ensure maximum safety
            and performance. Diesel boom lifts are ideal for tasks requiring high
            reach and flexibility, including building maintenance, electrical
            installations, painting, and structural work.
          </p>

          <p className="text-gray-700 mb-4">
            With smooth maneuverability and strong stability, our diesel boom lifts
            help teams complete elevated tasks efficiently while maintaining
            high safety standards.
          </p>

          <p className="text-gray-700">
            Available for rental across Maharashtra, we provide timely
            delivery, reliable support, and professional service for all
            project requirements.
          </p>
        </div>

        {/* Supporting Images (Product Showcase) */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-20">

          <div className="bg-white rounded-3xl p-2 shadow-sm border border-slate-100 card-hover overflow-hidden">
            <img
              src="/bomb lift 2.jpeg"
              alt="Diesel Boom Lift 17-18 m View 2"
              className="w-full h-60 object-cover rounded-xl"
            />
          </div>

          <div className="bg-white rounded-3xl p-2 shadow-sm border border-slate-100 card-hover overflow-hidden">
            <img
              src="/bomb lift 3.jpeg"
              alt="Diesel Boom Lift 17-18 m View 3"
              className="w-full h-60 object-cover rounded-xl"
            />
          </div>

          <div className="bg-white rounded-3xl p-2 shadow-sm border border-slate-100 card-hover overflow-hidden">
            <img
              src="/bomb lift 4.jpeg"
              alt="Diesel Boom Lift 17-18 m View 4"
              className="w-full h-60 object-cover rounded-xl"
            />
          </div>

          <div className="bg-white rounded-3xl p-2 shadow-sm border border-slate-100 card-hover overflow-hidden">
            <img
              src="/bomb lift 5.jpeg"
              alt="Diesel Boom Lift 17-18 m View 5"
              className="w-full h-60 object-cover rounded-xl"
            />
          </div>

          <div className="bg-white rounded-3xl p-2 shadow-sm border border-slate-100 card-hover overflow-hidden">
            <img
              src="/bomb lift 6.jpeg"
              alt="Diesel Boom Lift 17-18 m View 6"
              className="w-full h-60 object-cover rounded-xl"
            />
          </div>

          <div className="bg-white rounded-3xl p-2 shadow-sm border border-slate-100 card-hover overflow-hidden">
            <img
              src="/bomb lift 7.jpeg"
              alt="Diesel Boom Lift 17-18 m View 7"
              className="w-full h-60 object-cover rounded-xl"
            />
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

      </div>
    </section>
  );
}
