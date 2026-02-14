import CountUp from "react-countup";
import { Phone, Mail } from "lucide-react";

const stats = [
  { value: 15, suffix: "+", label: "Years Experience" },
  { value: 200, suffix: "+", label: "Equipment Fleet" },
  { value: 500, suffix: "+", label: "Projects Completed" },
  { value: 300, suffix: "+", label: "Happy Clients" },
];

export default function About() {
  return (
    <section className="pt-40 pb-24 bg-[#F8FAFC]">

      <div className="max-w-7xl mx-auto px-6">

        {/* ================= OWNER SECTION ================= */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">

          {/* Owner Image */}
        <div className="flex justify-center">
  <div className="w-full max-w-md rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
    <img
      src="/Pavan Sir.jpeg"
      alt="Pawan Upadhyay"
      className="w-full h-auto object-cover"
    />
  </div>
</div>


          {/* Owner Content */}
          {/* Owner Content */}
<div>

  {/* Professional Intro Line */}

  <h2 className="text-3xl font-bold text-[#0B3C5D] mb-4">
    Pawan Upadhyay
  </h2>

  <p className="text-[#F4B400] font-semibold mb-6">
    Founder & CEO
  </p>

  <p className="text-gray-600 leading-relaxed mb-4">
    With extensive experience in industrial equipment and generator
    services, Mr. Pawan Upadhyay founded Maharashtra Hiring Services
    with a vision to deliver reliable, safe, and high-performance
    solutions across Maharashtra.
  </p>

  <p className="text-gray-600 leading-relaxed">
    His leadership, technical expertise, and commitment to excellence
    have positioned the company as a trusted partner for industrial,
    infrastructure, and construction projects.
  </p>

</div>

        </div>

        {/* ================= COMPANY INTRO ================= */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h3 className="text-3xl font-bold text-[#0B3C5D] mb-6">
            About Maharashtra Hiring Services
          </h3>

          <p className="text-gray-600 leading-relaxed">
            Maharashtra Hiring Services is a leading provider of industrial
            equipment rental, generator solutions, AMC contracts, fabrication
            services, and heavy machinery rentals across Maharashtra.
            We specialize in boom lifts, scissor lifts, DG sets, cranes,
            installation & commissioning, and comprehensive maintenance services.
          </p>
        </div>

        {/* ================= NUMBER COUNTER ================= */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-8 text-center hover:shadow-xl transition duration-300"
            >
              <h4 className="text-4xl font-extrabold text-[#0B3C5D] mb-2">
                <CountUp end={stat.value} duration={2} />
                {stat.suffix}
              </h4>
              <p className="text-gray-500 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* ================= MISSION & VISION ================= */}
        <div className="grid md:grid-cols-2 gap-10">

          <div className="bg-white p-10 rounded-3xl shadow-md">
            <h4 className="text-2xl font-bold text-[#0B3C5D] mb-4">
              Our Mission
            </h4>
            <p className="text-gray-600 leading-relaxed">
              To provide reliable, high-quality industrial equipment and
              generator solutions that ensure uninterrupted operations,
              enhanced productivity, and long-term client satisfaction.
            </p>
          </div>

          <div className="bg-white p-10 rounded-3xl shadow-md">
            <h4 className="text-2xl font-bold text-[#0B3C5D] mb-4">
              Our Vision
            </h4>
            <p className="text-gray-600 leading-relaxed">
              To become Maharashtra’s most trusted and preferred industrial
              hiring partner by maintaining excellence, innovation, and
              customer-first service standards.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
