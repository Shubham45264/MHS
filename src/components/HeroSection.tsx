import { ArrowDown, MessageCircle, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";
import { getWhatsAppUrl, getMailtoUrl } from "@/lib/config";

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Industrial equipment site"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 via-secondary/75 to-secondary/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-20 pb-12 text-center md:text-left">
        <div className="max-w-3xl">

          <p className="text-accent font-semibold text-sm md:text-base tracking-widest uppercase mb-4 animate-fade-in-up">
            Trusted Industrial Partner
          </p>

          <h1
            className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-secondary-foreground leading-tight mb-6 animate-fade-in-up"
            style={{ animationDelay: "0.1s" }}
          >
            Reliable Industrial Equipment & Generator Rental Solutions
          </h1>

          <p
            className="text-secondary-foreground/80 text-base md:text-lg mb-8 max-w-2xl animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            Sales | AMC | Installation | Heavy Equipment on Rent
          </p>

          <div
            className="flex flex-wrap gap-3 justify-center md:justify-start animate-fade-in-up"
            style={{ animationDelay: "0.3s" }}
          >
            <Link
              to="/services"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-md font-semibold hover:opacity-90 transition-opacity"
            >
              <ArrowDown className="h-4 w-4" /> View Services
            </Link>

            <a
              href={getWhatsAppUrl(
                "Hello, I would like to enquire about your services from Maharashtra Hiring Services."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-success text-success-foreground px-6 py-3 rounded-md font-semibold hover:opacity-90 transition-opacity"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp Enquiry
            </a>

            <a
              href={getMailtoUrl(
                "General Enquiry",
                "Hello, I would like to enquire about your services."
              )}
              className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-md font-semibold hover:opacity-90 transition-opacity"
            >
              <Mail className="h-4 w-4" /> Email Us
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
