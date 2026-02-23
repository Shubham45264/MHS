import { Link } from "react-router-dom";

export default function EscortFarana() {
  return (
    <section className="py-24 bg-[#F8FAFC]">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="mb-14">
          <h1 className="text-4xl font-bold text-[#0B3C5D] mb-4">
            Escort Farana <span className="text-[#F4B400]">F15</span>
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed max-w-3xl">
            The Escort Farana F15 is a versatile pick-and-carry crane designed for
            heavy duty material handling and shifting. Known for its exceptional
            maneuverability and strong lifting capacity.
          </p>
        </div>

        {/* Main Image + Description Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">

          {/* Main Image */}
          <div className="bg-white rounded-3xl shadow-lg p-6">
            <img
              src="/small_ESCORTS_Farana_F15_8003f64ec7.webp"
              alt="Escort Farana F15"
              className="w-full h-[350px] object-contain"
            />
          </div>

          {/* Detailed Info */}
          <div>
            <h2 className="text-2xl font-semibold text-[#0B3C5D] mb-6">
              Why Choose Escort Farana F15?
            </h2>

            <p className="text-gray-700 mb-4">
              Our Escort Farana F15 fleet is meticulously maintained to ensure
              peak performance and absolute safety on-site. It features a robust
              chassis and advanced hydraulics, making it perfect for industrial
              sectors and construction projects.
            </p>

            <p className="text-gray-700 mb-4">
              With 15 tons of lifting capacity and an articulated design, it
              provides unmatched maneuverability in tight spaces where traditional
              cranes might struggle.
            </p>

            <p className="text-gray-700">
              Available for rental across Maharashtra, we provide timely
              delivery and professional operator support for all your lifting
              requirements.
            </p>
          </div>
        </div>

        {/* 📸 Farana Product Showcase Gallery */}
        <div className="mb-20">
          <h2 className="text-2xl font-semibold text-[#0B3C5D] mb-8 text-center">
            Farana F15 <span className="text-[#F4B400]">Gallery</span>
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white rounded-2xl shadow-md p-4 group overflow-hidden">
              <img
                src="/ESCORTS_Farana_F15_1_a3abd07c78.webp"
                alt="Escort Farana F15 View A"
                className="w-full h-48 object-cover rounded-xl transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="bg-white rounded-2xl shadow-md p-4 group overflow-hidden">
              <img
                src="/large_ESCORTS_Farana_F15_4_bca9b1a1f1.webp"
                alt="Escort Farana F15 View B"
                className="w-full h-48 object-cover rounded-xl transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="bg-white rounded-2xl shadow-md p-4 group overflow-hidden">
              <img
                src="/escort-f15-farana-hydraulic-crane-1000x1000.png"
                alt="Escort Farana F15 View C"
                className="w-full h-48 object-cover rounded-xl transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="bg-white rounded-2xl shadow-md p-4 group overflow-hidden">
              <img
                src="/small_ESCORTS_Farana_F15_8003f64ec7.webp"
                alt="Escort Farana F15 View D"
                className="w-full h-48 object-cover rounded-xl transition-transform duration-500 group-hover:scale-110"
              />
            </div>
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
