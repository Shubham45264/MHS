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
  { label: "Diesel Boom Lift 17-18 m", to: "/product-services" },
  { label: "Scissor Lift", to: "/product-services" },
  { label: "Truck Mounted Boom Lift", to: "/TruckMounted" },
  { label: "Cranes", to: "/Cranes" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0B3C5D] text-white pt-14 pb-6">
      <div className="max-w-7xl mx-auto px-6">

        {/* ================= MAIN GRID ================= */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">

          {/* 🔹 Brand Section */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/Logo.png"
                alt="MHS Logo"
                className="h-12 w-auto object-contain"
              />
              <h3 className="font-bold text-lg">
                {CONTACT.companyName}
              </h3>
            </div>

            <p className="text-white/70 text-sm leading-relaxed">
              Your trusted partner for industrial equipment rental,
              generator services, and maintenance solutions across Maharashtra.
            </p>
          </div>

          {/* 🔹 Quick Links */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-[#F4B400] mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-sm text-white/70 hover:text-[#F4B400] transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 🔹 Services */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-[#F4B400] mb-4">
              Our Services
            </h4>
            <ul className="space-y-3">
              {serviceLinks.map((s) => (
                <li key={s.label}>
                  <Link
                    to={s.to}
                    className="text-sm text-white/70 hover:text-[#F4B400] transition-colors"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 🔹 Contact Info */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-[#F4B400] mb-4">
              Contact Info
            </h4>

            <ul className="space-y-4 text-sm text-white/70">

              {/* Phone 1 */}
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-[#F4B400] flex-shrink-0" />
                <a
                  href="tel:+919820996758"
                  className="hover:text-[#F4B400] transition-colors"
                >
                  +91 9820996758
                </a>
              </li>

              {/* Phone 2 */}
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-[#F4B400] flex-shrink-0" />
                <a
                  href="tel:+919082616592"
                  className="hover:text-[#F4B400] transition-colors"
                >
                  +91 9082616592
                </a>
              </li>

              {/* Phone 3 */}
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-[#F4B400] flex-shrink-0" />
                <a
                  href="tel:+918655035263"
                  className="hover:text-[#F4B400] transition-colors"
                >
                  +91 8655035263
                </a>
              </li>

              {/* Email */}
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-[#F4B400] flex-shrink-0" />
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="hover:text-[#F4B400] transition-colors"
                >
                  {CONTACT.email}
                </a>
              </li>

              {/* Address */}
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-[#F4B400] flex-shrink-0 mt-1" />
                <span className="leading-relaxed">
                  Shop No. 8, Tulip Society,<br />
                  Sector 6, Ghansoli,<br />
                  Navi Mumbai – 400701
                </span>
              </li>

            </ul>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-white/10 my-6"></div>

        {/* Bottom Copyright */}
        <div className="text-center text-xs text-white/50">
          © {new Date().getFullYear()} {CONTACT.companyName}. All rights reserved.
        </div>

      </div>
    </footer>
  );
}
