import { Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { CONTACT } from "@/lib/config";

const quickLinks = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  // { label: "Product Services", to: "/product-services" },
  // { label: "Industrial Services", to: "/industrial-services" },
  // { label: "Rental Services", to: "/rental-services" },
  { label: "Services", to: "/Services" },
  { label: "Contact", to: "/contact" },
];

const serviceLinks = [
  { label: "Diesel Boom Lift", to: "/services/boom-lift" },
  { label: "Scissor Lift", to: "/services/scissor-lift" },
  { label: "Truck Mounted Boom Lift", to: "/services/truck-mounted-manlift" },
  { label: "Cranes", to: "/services/cranes" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0B3C5D] text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">

        {/* ================= MAIN GRID ================= */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* 🔹 Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <img
                src="/MHS_logo_clean_transparent.png"
                alt="MHS Logo"
                className="h-10 w-auto object-contain"
              />
              <div className="flex flex-col">
                <span className="font-bold text-xl leading-tight">Maharashtra Hiring</span>
                <span className="font-bold text-xl leading-tight text-white">Services</span>
              </div>
            </div>

            <p className="text-gray-300 text-sm leading-relaxed max-w-xs">
              Your trusted partner for industrial equipment rental, generator services, and
              maintenance solutions across Maharashtra.
            </p>
          </div>

          {/* 🔹 Quick Links */}
          <div className="lg:pl-8">
            <h4 className="font-bold text-sm uppercase tracking-wider text-[#F4B400] mb-8">
              QUICK LINKS
            </h4>
            <ul className="space-y-4">
              {quickLinks.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-sm text-gray-300 hover:text-[#F4B400] transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 🔹 Services */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider text-[#F4B400] mb-8">
              OUR SERVICES
            </h4>
            <ul className="space-y-4">
              {serviceLinks.map((s) => (
                <li key={s.label}>
                  <Link
                    to={s.to}
                    className="text-sm text-gray-300 hover:text-[#F4B400] transition-colors"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 🔹 Contact Info */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider text-[#F4B400] mb-8">
              CONTACT INFO
            </h4>

            <ul className="space-y-5 text-sm text-gray-300">
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-[#F4B400]" />
                <a href="tel:+919820996758" className="hover:text-[#F4B400] transition-colors">
                  +91 9820996758
                </a>
              </li>

              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-[#F4B400]" />
                <a href="tel:+919082616592" className="hover:text-[#F4B400] transition-colors">
                  +91 9082616592
                </a>
              </li>

              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-[#F4B400]" />
                <a href="tel:+918655035263" className="hover:text-[#F4B400] transition-colors">
                  +91 8655035263
                </a>
              </li>

              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-[#F4B400] flex-shrink-0" />
                <a href={`mailto:${CONTACT.email}`} className="hover:text-[#F4B400] transition-colors break-all">
                  {CONTACT.email}
                </a>
              </li>

              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-[#F4B400] mt-1 shrink-0" />
                <span className="leading-relaxed">
                  Shop No. 8, Tulip Society,<br />
                  Sector 6, Ghansoli,<br />
                  Navi Mumbai – 400701
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 border-t border-white/10 text-center">
          <p className="text-xs text-gray-400">
            © {new Date().getFullYear()} Maharashtra Hiring Services. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}
