import { Link } from "react-router-dom";

export default function ScissorLift() {
  return (
    <section className="py-24 bg-[#F8FAFC]">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="mb-14">
          <h1 className="text-4xl font-bold text-[#0B3C5D] mb-4">
            Scissor <span className="text-[#F4B400]">Lift</span>
          </h1>

          <p className="text-gray-600 text-lg leading-relaxed max-w-3xl">
            Our Scissor Lifts provide safe and stable vertical access solutions
            for maintenance, warehouse operations, and industrial work.
            Designed for reliability and ease of operation in both indoor
            and outdoor environments.
          </p>
        </div>

        {/* Main Image + Description */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">

          {/* Main Image */}
          <div className="bg-white rounded-3xl shadow-lg p-6">
            <img
              src="/Sizzor 1.jpeg"
              alt="Scissor Lift"
              className="w-full h-[350px] object-contain"
            />
          </div>

          {/* Detailed Info */}
          <div>
            <h2 className="text-2xl font-semibold text-[#0B3C5D] mb-6">
              Why Choose Our Scissor Lift?
            </h2>

            <p className="text-gray-700 mb-4">
              Built for vertical elevation tasks, scissor lifts are perfect
              for jobs requiring stability and straight upward movement.
              They are widely used in warehouses, factories, shopping malls,
              and construction sites.
            </p>

            <p className="text-gray-700 mb-4">
              Our equipment is regularly maintained to ensure safety and
              smooth operation. With easy controls and strong platform support,
              operators can complete tasks efficiently.
            </p>

            <p className="text-gray-700">
              Available for rental across Maharashtra, we ensure timely
              delivery and professional support for all project needs.
            </p>
          </div>
        </div>

        {/* Supporting Images (Product Showcase) */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-20">

          <div className="bg-white rounded-2xl shadow-md p-4">
            <img
              src="/sizzor 2.jpeg"
              alt="Scissor Lift View 2"
              className="w-full h-60 object-cover rounded-xl"
            />
          </div>

          <div className="bg-white rounded-2xl shadow-md p-4">
            <img
              src="/sizzor 3.jpeg"
              alt="Scissor Lift View 3"
              className="w-full h-60 object-cover rounded-xl"
            />
          </div>

          <div className="bg-white rounded-2xl shadow-md p-4">
            <img
              src="/Sizzor 4.jpeg"
              alt="Scissor Lift View 4"
              className="w-full h-60 object-cover rounded-xl"
            />
          </div>

          <div className="bg-white rounded-2xl shadow-md p-4">
            <img
              src="/sizzor 5.jpeg"
              alt="Scissor Lift View 5"
              className="w-full h-60 object-cover rounded-xl"
            />
          </div>

          <div className="bg-white rounded-2xl shadow-md p-4">
            <img
              src="/sizzor 6.jpeg"
              alt="Scissor Lift View 6"
              className="w-full h-60 object-cover rounded-xl"
            />
          </div>

          <div className="bg-white rounded-2xl shadow-md p-4">
            <img
              src="/sizzor 7.jpeg"
              alt="Scissor Lift View 7"
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
