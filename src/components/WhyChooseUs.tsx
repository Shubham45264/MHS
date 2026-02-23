import { ShieldCheck, Clock, IndianRupee, Wrench, Activity } from "lucide-react";

const features = [
  {
    icon: <IndianRupee className="h-8 w-8 text-[#F4B400]" />,
    title: "Transparent & Competitive Pricing",
    description:
      "No hidden charges. Clear quotations with complete transparency for rental and service agreements.",
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-[#F4B400]" />,
    title: "Quality Equipment & Genuine Parts",
    description:
      "We provide well-maintained equipment and use only genuine spare parts for maximum reliability and safety.",
  },
  {
    icon: <Clock className="h-8 w-8 text-[#F4B400]" />,
    title: "Timely Delivery & Fast Response",
    description:
      "On-time equipment delivery and quick service response to ensure your operations run without delays.",
  },
  {
    icon: <Wrench className="h-8 w-8 text-[#F4B400]" />,
    title: "Expert Technicians",
    description:
      "Skilled and experienced technicians for generator AMC, installation, commissioning, and maintenance.",
  },
  {
    icon: <Activity className="h-8 w-8 text-[#F4B400]" />,
    title: "24/7 Support & Monitoring",
    description:
      "Round-the-clock support for rental equipment and generator services across Maharashtra.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-[#EEF2F6]">

      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B3C5D]">
            Why Choose{" "}
            <span className="text-[#F4B400]">
              Maharashtra Hiring Services
            </span>
          </h2>

          <p className="mt-5 text-gray-600 max-w-3xl mx-auto text-sm md:text-base leading-relaxed">
           We can now proudly boast to have worked with the best in the industry and having the opportunity to have catered to various industries.
          </p>
        </div>

        {/* Cards */}
        <div className="space-y-6">

          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-start gap-5 bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300"
            >
              {/* Icon Box */}
              <div className="flex items-center justify-center w-14 h-14 rounded-full bg-[#F4B400]/10">
                {feature.icon}
              </div>

              {/* Content */}
              <div>
                <h4 className="text-lg font-semibold text-[#0B3C5D] mb-1">
                  {feature.title}
                </h4>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
