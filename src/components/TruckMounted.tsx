import { Link } from "react-router-dom";

export default function TruckMountedBoomLift() {
  return (
    <section className="py-24 bg-muted/40">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-[#0B3C5D] mb-4">
            Truck Mounted <span className="text-accent underline decoration-primary/10 underline-offset-8">Boom Lift</span>
          </h1>

          <p className="text-gray-600 text-lg leading-relaxed max-w-3xl">
            Our Truck Mounted Boom Lift provides mobile and flexible elevated
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
              alt="Truck Mounted Boom Lift"
              className="max-h-96 object-contain drop-shadow-2xl transition-transform duration-500 hover:scale-105"
            />
          </div>

          {/* Features */}
          <div>
            <h2 className="text-3xl font-bold text-primary mb-6">
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
              className="inline-block mt-10 bg-primary text-white font-bold px-10 py-4 rounded-full shadow-xl shadow-primary/20 hover:scale-105 transition-all"
            >
              Enquire Now
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}
