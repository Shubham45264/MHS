import { Link } from "react-router-dom";

export default function DieselGenerator() {
  return (
    <section className="py-24 bg-[#F8FAFC]">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="mb-14">
          <h1 className="text-4xl font-bold text-[#0B3C5D] mb-4">
            Diesel <span className="text-[#F4B400]">Generators</span>
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed max-w-3xl">
            Reliable power solutions for industrial, commercial, and construction
            sites. Our fleet of high-performance diesel generators ensures
            uninterrupted operations even in the most remote locations.
          </p>
        </div>

        {/* Main Image + Description Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">

          {/* Main Image */}
          <div className="bg-white rounded-3xl shadow-lg p-6">
            <img
              src="/Diesel-Generator.jpeg"
              alt="Diesel Generator"
              className="w-full h-[350px] object-contain"
            />
          </div>

          {/* Detailed Info */}
          <div>
            <h2 className="text-2xl font-semibold text-[#0B3C5D] mb-6">
              Why Choose Our Power Solutions?
            </h2>

            <p className="text-gray-700 mb-4">
              We provide a wide range of kVA ratings to suit any project scale,
              from small construction sites to large industrial plants. Every
              generator is fuel-efficient, sound-proof, and regularly serviced.
            </p>

            <p className="text-gray-700 mb-4">
              Our generators are designed for continuous heavy-duty use,
              featuring easy-start mechanisms and advanced safety shut-off systems.
            </p>

            <p className="text-gray-700">
              Available for immediate rental across Maharashtra, complete with
              on-site fuel management and technical support.
            </p>
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
