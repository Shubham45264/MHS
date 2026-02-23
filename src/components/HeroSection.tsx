import { ArrowDown, MessageCircle, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import heroBg from "@/assets/hero-bg.jpg";
import { getWhatsAppUrl, getMailtoUrl } from "@/lib/config";

export default function HeroSection() {
  return (
    <>
      <Helmet>
        <title>Maharashtra Hiring Services | Industrial Equipment Rental</title>
        <meta
          name="description"
          content="Maharashtra Hiring Services provides generators, diesel boom lifts, cranes, and heavy equipment rental with AMC support and 24/7 service across Maharashtra."
        />
      </Helmet>

      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src={heroBg}
            alt="Industrial equipment site"
            className="w-full h-full object-cover grayscale brightness-75"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/85 to-secondary/70" />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 pt-24 pb-16 text-left">
          <div className="max-w-4xl">
            <p className="text-yellow-400 font-semibold text-sm tracking-[0.2em] uppercase mb-5">
              Maharashtra’s Trusted Industrial Equipment Partner
            </p>

            <h1 className="font-display text-slate-100 leading-snug mb-6">
              <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold">
                Maharashtra Hiring Services
              </span>

              <span className="block text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium text-slate-300 mt-2">
                For Industrial & Infrastructure Projects
              </span>
            </h1>

            <p className="text-slate-300 text-base md:text-lg max-w-2xl mb-10">
              We provide high-performance generators, diesel boom lifts 17-18 m,
              cranes, and heavy equipment backed by AMC support, expert installation,
              and 24/7 service reliability across Maharashtra.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="/Maharashtra hiring services brochure pdf (2).pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-md font-semibold hover:opacity-90 transition"
              >
                <ArrowDown className="h-4 w-4" /> Download Brochure
              </a>

              <a
                href={getWhatsAppUrl(
                  "Hello, I would like to enquire about your services from Maharashtra Hiring Services."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-green-700 transition"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp Enquiry
              </a>

              <a
                href={getMailtoUrl(
                  "General Enquiry",
                  "Hello, I would like to enquire about your services."
                )}
                className="inline-flex items-center gap-2 bg-amber-500 text-white px-6 py-3 rounded-md font-semibold hover:bg-amber-600 transition"
              >
                <Mail className="h-4 w-4" /> Email Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}