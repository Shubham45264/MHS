import { Link } from "react-router-dom";

export default function TruckMountedManLift() {
  return (
    <section className="py-24 bg-[#F8FAFC]">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-[#0B3C5D] mb-4">
            Truck Mounted <span className="text-[#F4B400]">Man Lift</span>
          </h1>

          <p className="text-gray-600 text-lg leading-relaxed max-w-3xl">
            Our Truck Mounted Man Lift provides mobile and flexible elevated
            access solutions for infrastructure, telecom, street lighting,
            and industrial maintenance projects. Designed for quick deployment
            and reliable performance on-site.
          </p>
        </div>

        {/* Image + Details */}
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Image */}
          <div className="bg-white rounded-3xl shadow-lg p-8 flex justify-center">
            <img
              src="/Mounted-Boom-Lift.jpeg"
              alt="Truck Mounted Man Lift"
              className="max-h-96 object-contain"
            />
          </div>

          {/* Features */}
          <div>
            <h2 className="text-2xl font-semibold text-[#0B3C5D] mb-6">
              Key Features
            </h2>

            <ul className="space-y-4 text-gray-700">
              <li>✔ Fully Mobile Mounted System</li>
              <li>✔ Quick Setup & Deployment</li>
              <li>✔ Ideal for Street & Utility Work</li>
              <li>✔ High Reach with Stable Platform</li>
              <li>✔ Suitable for Infrastructure Projects</li>
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
