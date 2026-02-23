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
    <section className="pt-40 pb-24 bg-muted/20">

      <div className="max-w-7xl mx-auto px-6">

        {/* ================= OWNER SECTION ================= */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">

          {/* Owner Image */}
          <div className="flex justify-center">
            <div className="w-full max-w-md rounded-[3rem] shadow-2xl overflow-hidden border-8 border-white card-hover relative group">
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <img
                src="/Pavan Sir.jpeg"
                alt="Pawan Upadhyay"
                className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-110"
              />
            </div>
          </div>


          {/* Owner Content */}
          {/* Owner Content */}
          <div>

            {/* Professional Intro Line */}

            <h2 className="text-4xl font-extrabold text-primary mb-2">
              Pawan Upadhyay
            </h2>

            <p className="text-accent font-bold tracking-[0.2em] uppercase text-sm mb-8">
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
          <h3 className="text-4xl font-extrabold text-primary mb-6">
            About <span className="text-accent underline decoration-primary/10 underline-offset-8">Maharashtra Hiring Services</span>
          </h3>

          <p className="text-gray-600 leading-relaxed text-lg">
            We are the best company of 24 Hour Crane, JCB, Farana, Hydra, Loading, Unloading, Shifting & work on Hire Services and Forklift Cranes on Hire Services in MUMBAI India. It is specifically due to complete understanding of the market operations and customers requirements; we are able to provide quality for services. Our services are rendered in compliance with International standards, and meeting clients drawn specifications. We make sure that we are best cranes for different purposes. All these have helped us to earn a reputed position in the marketplace.

            Specializing in mobile Crane hire from 20 to 500 tons in capacity all of our cranes are manned by operators who are trained to the highest standards within the industry.
          </p>
        </div>

        {/* ================= NUMBER COUNTER ================= */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 text-center border border-slate-100 card-hover shadow-sm"
            >
              <h4 className="text-5xl font-black text-primary mb-3">
                <CountUp end={stat.value} duration={2.5} />
                <span className="text-accent">{stat.suffix}</span>
              </h4>
              <p className="text-slate-500 font-bold uppercase tracking-wider text-xs">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* ================= MISSION & VISION ================= */}
        <div className="grid md:grid-cols-2 gap-10">

          <div className="bg-white p-12 rounded-[2.5rem] shadow-sm border border-slate-100 card-hover transition-all duration-500">
            <h4 className="text-2xl font-extrabold text-primary mb-6 flex items-center gap-2">
              Our Mission
            </h4>
            <p className="text-gray-600 leading-relaxed">
              To provide reliable, high-quality industrial equipment and
              generator solutions that ensure uninterrupted operations,
              enhanced productivity, and long-term client satisfaction.
            </p>
          </div>

          <div className="bg-white p-12 rounded-[2.5rem] shadow-sm border border-slate-100 card-hover transition-all duration-500">
            <h4 className="text-2xl font-extrabold text-primary mb-6 flex items-center gap-2">
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
