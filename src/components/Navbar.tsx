import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, MapPin } from "lucide-react";
import { CONTACT } from "@/lib/config";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/Services" },
  {label:"Gallery", to:"/Gallery"},
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* 🔶 TOP INFO BAR — ONLY ON HOME */}
      {isHome && (
        <div className="fixed top-0 left-0 right-0 z-50 bg-black text-white text-sm">
          <div className="w-full px-10 lg:px-16 py-2 flex items-center justify-between">
            {/* Left */}
            <div>
              Welcome to{" "}
              <span className="font-semibold text-[#F4B400]">
                Maharashtra Hiring Services
              </span>
            </div>

            {/* Right */}
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-[#F4B400]" />
                <span>Maharashtra, India</span>
              </div>

              <a
                href={`tel:${CONTACT.phone}`}
                className="flex items-center gap-2 hover:text-[#F4B400] transition"
              >
                <Phone className="h-4 w-4 text-[#F4B400]" />
                {CONTACT.phone}
              </a>
            </div>
          </div>
        </div>
      )}

      {/* 🔷 MAIN NAVBAR */}
      <nav
        className={`fixed left-0 right-0 z-40 transition-all duration-300 ${
          isHome ? "top-[40px]" : "top-0"
        } ${
          scrolled || !isHome
            ? "bg-white shadow-md"
            : "bg-white/10 backdrop-blur-md"
        }`}
      >
        <div className="w-full px-10 lg:px-16">
          <div className="flex items-center h-16">

            {/* 🔹 LEFT — LOGO */}
            <Link to="/" className="flex items-center gap-3">
              <img
                src="/MHS_logo_clean_transparent.png"
                alt="MHS Logo"
                className="h-10 w-auto object-contain"
              />
              <span
                className={`text-lg font-bold transition ${
                  scrolled || !isHome ? "text-[#0B3C5D]" : "text-white"
                }`}
              >
                Maharashtra Hiring Services
              </span>
            </Link>

            {/* 🔹 CENTER — NAVIGATION */}
            <div className="hidden md:flex flex-1 justify-center gap-10">
              {navLinks.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  className={`text-sm font-medium transition ${
                    location.pathname === l.to
                      ? "text-[#F4B400]"
                      : scrolled || !isHome
                      ? "text-gray-700 hover:text-[#0B3C5D]"
                      : "text-white hover:text-[#F4B400]"
                  }`}
                >
                  {l.label}
                </Link>
              ))}
            </div>

            {/* 🔹 RIGHT — CALL BUTTON */}
            <div className="hidden md:flex">
              <a
                href={`tel:${CONTACT.phone}`}
                className={`inline-flex items-center gap-2 px-5 py-2 rounded-md text-sm font-semibold transition ${
                  scrolled || !isHome
                    ? "bg-[#0B3C5D] text-white"
                    : "bg-[#F4B400] text-black"
                }`}
              >
                <Phone className="h-4 w-4" /> Call Now
              </a>
            </div>

            {/* 🔹 MOBILE MENU BUTTON */}
            <button
              className={`md:hidden ml-auto ${
                scrolled || !isHome ? "text-[#0B3C5D]" : "text-white"
              }`}
              onClick={() => setOpen(!open)}
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>

          </div>
        </div>

        {/* 📱 MOBILE MENU */}
        {open && (
          <div className="md:hidden bg-white shadow-md px-6 pb-4 space-y-3">
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="block py-2 text-sm font-medium text-gray-700 hover:text-[#0B3C5D]"
              >
                {l.label}
              </Link>
            ))}

            <a
              href={`tel:${CONTACT.phone}`}
              className="inline-flex items-center gap-2 bg-[#0B3C5D] text-white px-4 py-2 rounded-md text-sm font-semibold w-full justify-center"
            >
              <Phone className="h-4 w-4" /> Call Now
            </a>
          </div>
        )}
      </nav>
    </>
  );
}
