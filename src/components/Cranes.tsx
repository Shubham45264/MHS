import { Link } from "react-router-dom";

export default function Cranes() {
  return (
    <section className="py-24 bg-[#F8FAFC]">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-[#0B3C5D] mb-4">
            Heavy Duty <span className="text-[#F4B400]">Cranes</span>
          </h1>

          <p className="text-gray-600 text-lg leading-relaxed max-w-3xl">
            Our heavy-duty cranes are engineered for lifting, loading, and
            transporting heavy materials across construction sites,
            infrastructure projects, and industrial operations. Designed
            for strength, reliability, and maximum safety.
          </p>
        </div>

        {/* Image + Details */}
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Image */}
          <div className="bg-white rounded-3xl shadow-lg p-8 flex justify-center">
            <img
              src="/Crane.jpeg"
              alt="Cranes"
              className="max-h-96 object-contain"
            />
          </div>

          {/* Features */}
          <div>
            <h2 className="text-2xl font-semibold text-[#0B3C5D] mb-6">
              Key Features
            </h2>

            <ul className="space-y-4 text-gray-700">
              <li>✔ High Load Lifting Capacity</li>
              <li>✔ Suitable for Construction & Infrastructure</li>
              <li>✔ Hydraulic & Mobile Crane Options</li>
              <li>✔ Skilled Operator Support Available</li>
              <li>✔ Safe & Reliable Performance</li>
            </ul>

            <Link
              to="/contact"
              className="inline-block mt-8 bg-[#F4B400] text-black font-semibold px-6 py-3 rounded-md hover:opacity-90 transition"
            >
              Enquire Now
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}
