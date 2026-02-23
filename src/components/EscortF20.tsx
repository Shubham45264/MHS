import { Link } from "react-router-dom";

export default function EscortF20() {
  return (
    <section className="py-24 bg-[#F8FAFC]">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="mb-14">
          <h1 className="text-4xl font-bold text-[#0B3C5D] mb-4">
            Escort <span className="text-[#F4B400]">F20</span>
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed max-w-3xl">
            The Escort F20 is a powerful 20-ton pick-and-carry crane designed for
            heavy lifting and shifting operations. It combines high lifting
            capacity with the iconic manouverability of the Farana series.
          </p>
        </div>

        {/* Main Image + Description Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">

          {/* Main Image */}
          <div className="bg-white rounded-3xl shadow-lg p-6">
            <img
              src="/ESCORTS_F20_1_b11ac1849b.webp"
              alt="Escort F20"
              className="w-full h-[350px] object-contain"
            />
          </div>

          {/* Detailed Info */}
          <div>
            <h2 className="text-2xl font-semibold text-[#0B3C5D] mb-6">
              Why Choose Escort F20?
            </h2>

            <p className="text-gray-700 mb-4">
              Our Escort F20 fleet is built for the most demanding lifting
              requirements in infrastructure, oil & gas, and heavy fabrication
              sectors. It provides superior stability and reach compared to smaller models.
            </p>

            <p className="text-gray-700 mb-4">
              With a 20-ton lifting capacity, it is the perfect middle-ground for
              projects that require more power than an F15 but need the compact
              form factor of a pick-and-carry crane.
            </p>

            <p className="text-gray-700">
              Available for rental across Maharashtra, we ensure all units are
              certified and operated by highly skilled professionals.
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
