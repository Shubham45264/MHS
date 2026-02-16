import { Link } from "react-router-dom";

export default function BoomLift() {
  return (
    <section className="py-24 bg-[#F8FAFC]">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="mb-14">
          <h1 className="text-4xl font-bold text-[#0B3C5D] mb-4">
            Boom <span className="text-[#F4B400]">Lift</span>
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed max-w-3xl">
            Our Boom Lifts are designed to provide safe and reliable elevated
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
              alt="Boom Lift"
              className="w-full h-[350px] object-contain"
            />
          </div>

          {/* Detailed Info */}
          <div>
            <h2 className="text-2xl font-semibold text-[#0B3C5D] mb-6">
              Why Choose Our Boom Lift?
            </h2>

            <p className="text-gray-700 mb-4">
              Our equipment is maintained regularly to ensure maximum safety
              and performance. Boom lifts are ideal for tasks requiring high
              reach and flexibility, including building maintenance, electrical
              installations, painting, and structural work.
            </p>

            <p className="text-gray-700 mb-4">
              With smooth maneuverability and strong stability, our boom lifts
              help teams complete elevated tasks efficiently while maintaining
              high safety standards.
            </p>

            <p className="text-gray-700">
              Available for rental across Maharashtra, we provide timely
              delivery, reliable support, and professional service for all
              project requirements.
            </p>
          </div>
        </div>

        {/* Supporting Images (Product Showcase) */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 mb-20">

          <div className="bg-white rounded-2xl shadow-md p-4">
            <img
              src="/bomb lift 2.jpeg"
              alt="Boom Lift View 2"
              className="w-full h-60 object-cover rounded-xl"
            />
          </div>

          <div className="bg-white rounded-2xl shadow-md p-4">
            <img
              src="/bomb lift 3.jpeg"
              alt="Boom Lift View 3"
              className="w-full h-60 object-cover rounded-xl"
            />
          </div>

          <div className="bg-white rounded-2xl shadow-md p-4">
            <img
              src="/bomb lift 4.jpeg"
              alt="Boom Lift View 4"
              className="w-full h-60 object-cover rounded-xl"
            />
          </div>

        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            to="/contact"
            className="bg-[#F4B400] text-black px-8 py-3 rounded-md font-semibold hover:opacity-90 transition"
          >
            Request a Quote
          </Link>
        </div>

      </div>
    </section>
  );
}
