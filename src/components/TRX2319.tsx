import { Link } from "react-router-dom";

export default function TRX2319() {
  return (
    <section className="py-24 bg-[#F8FAFC]">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="mb-14">
          <h1 className="text-4xl font-bold text-[#0B3C5D] mb-4">
            Escort <span className="text-[#F4B400]">TRX 2319</span>
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed max-w-3xl">
            The TRX 2319 is a high-capacity, heavy-duty pick and carry crane
            engineered for the most demanding industrial environments. Designed
            for maximum safety and IMMENSE lifting power.
          </p>
        </div>

        {/* Main Image + Description Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">

          {/* Main Image */}
          <div className="bg-white rounded-3xl shadow-lg p-6">
            <img
              src="/trx 1.jpeg"
              alt="Escort TRX 2319"
              className="w-full h-[350px] object-contain"
            />
          </div>

          {/* Detailed Info */}
          <div>
            <h2 className="text-2xl font-semibold text-[#0B3C5D] mb-6">
              Why Choose Escort TRX 2319?
            </h2>

            <p className="text-gray-700 mb-4">
              Our TRX 2319 units are built for high performance in refineries,
              power plants, and bridge construction. It features advanced safety
              systems and immense stability for critical lifting tasks.
            </p>

            <p className="text-gray-700 mb-4">
              With a 23-ton lifting capacity and extra-long boom reach, it
              is ideal for high-elevation operations and complex materials
              handling across all terrains.
            </p>

            <p className="text-gray-700">
              Maharashtra Hiring Services offers the TRX 2319 on flexible rental
              terms with 24/7 technical support and expert operators.
            </p>
          </div>
        </div>

        {/* 📸 TRX Product Showcase Gallery */}
        <div className="mb-20">
          <h2 className="text-2xl font-semibold text-[#0B3C5D] mb-8 text-center">
            TRX 2319 <span className="text-[#F4B400]">Gallery</span>
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {["/trx 2.jpeg", "/trx 3.jpeg", "/trx 4.jpeg", "/trx 5.jpeg"].map((img, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-md p-4 group overflow-hidden">
                <img
                  src={img}
                  alt={`TRX 2319 View ${i + 2}`}
                  className="w-full h-48 object-cover rounded-xl transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            ))}
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
