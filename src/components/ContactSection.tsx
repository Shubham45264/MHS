import { useState } from "react";
import { Phone, Mail, MapPin, Star, Clock, Loader2 } from "lucide-react";
import { CONTACT } from "@/lib/config";
import { toast } from "sonner";

const BACKEND_URL = "https://mhs-4jj9.onrender.com";

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [review, setReview] = useState({
    name: "",
    rating: 0,
    comment: "",
  });

  const [loading, setLoading] = useState(false);
  const [reviewLoading, setReviewLoading] = useState(false);

  // ---------------- ENQUIRY SUBMIT ----------------
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(`${BACKEND_URL}/api/enquiry`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        toast.success("Enquiry Sent!", {
          description: "Thank you! We will contact you shortly.",
        });
        setForm({ name: "", email: "", phone: "", message: "" });
      } else {
        toast.error("Submission Failed", {
          description: data.message || "Failed to send enquiry.",
        });
      }
    } catch (error) {
      toast.error("Connection Error", {
        description: "Could not connect to the server.",
      });
    } finally {
      setLoading(false);
    }
  };

  // ---------------- REVIEW SUBMIT ----------------
  const handleReviewSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (review.rating === 0) {
      toast.error("Rating Required", {
        description: "Please select a star rating.",
      });
      return;
    }

    setReviewLoading(true);

    try {
      const response = await fetch(`${BACKEND_URL}/api/review`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(review),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        toast.success("Review Submitted!", {
          description: "Thank you for your feedback!",
        });
        setReview({ name: "", rating: 0, comment: "" });
      } else {
        toast.error("Submission Failed", {
          description: data.message || "Failed to send review.",
        });
      }
    } catch (error) {
      toast.error("Connection Error", {
        description: "Could not connect to the server.",
      });
    } finally {
      setReviewLoading(false);
    }
  };

  return (
    <section className="py-28 bg-muted/20">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-20">
          <p className="text-accent font-bold uppercase tracking-[0.3em] text-sm mb-4">
            Get In Touch
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-primary">
            Let's <span className="text-accent underline decoration-primary/10 underline-offset-8">Build Together</span>
          </h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Whether you need industrial equipment rental or maintenance solutions — our team is ready to assist you.
          </p>
        </div>

        {/* CONTACT GRID */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-28">

          {/* LEFT SIDE */}
          <div className="space-y-8">

            <div className="grid sm:grid-cols-2 gap-6">

              {/* Contact Card */}
              <div className="bg-white p-8 rounded-[2rem] shadow-xl border border-gray-50">
                <h3 className="text-xl font-bold text-[#0B3C5D] mb-6 flex items-center gap-2">
                  <span className="w-8 h-8 bg-[#F4B400]/10 rounded-lg flex items-center justify-center">
                    <Phone className="w-4 h-4 text-[#F4B400]" />
                  </span>
                  Contact Info
                </h3>

                <div className="space-y-4 text-gray-600">
                  <div>
                    <span className="text-xs uppercase font-bold text-gray-400">Phone</span>
                    <span className="font-semibold text-[#0B3C5D]">{CONTACT.phoneDisplay}</span>
                  </div>

                  <div>
                    <span className="text-xs uppercase font-bold text-gray-400">Email</span>
                    <span className="font-semibold text-[#0B3C5D] break-all">{CONTACT.email}</span>
                  </div>
                </div>
              </div>

              {/* Hours Card */}
              <div className="bg-white p-8 rounded-[2rem] shadow-xl border border-gray-50 hover:shadow-2xl transition-all duration-500">
                <h3 className="text-xl font-bold text-[#0B3C5D] mb-6 flex items-center gap-2">
                  <span className="w-8 h-8 bg-[#F4B400]/10 rounded-lg flex items-center justify-center">
                    <Clock className="w-4 h-4 text-[#F4B400]" />
                  </span>
                  Office Hours
                </h3>

                <div className="space-y-4 text-gray-600">
                  <div>
                    <span className="text-xs uppercase font-bold text-gray-400">Mon - Sat</span>
                    <span className="font-semibold text-[#0B3C5D]">10:00 AM - 07:00 PM</span>
                  </div>
                  <div>
                    <span className="text-xs uppercase font-bold text-gray-400">Sunday</span>
                    <div className="font-semibold text-red-500">
                      Closed
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Address Card */}
            <div className="bg-white p-8 rounded-[2rem] shadow-xl border border-gray-100 italic transition-all duration-500">
              <h3 className="text-xl font-bold text-[#0B3C5D] mb-4 flex items-center gap-2 not-italic">
                <span className="w-8 h-8 bg-[#F4B400]/10 rounded-lg flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-[#F4B400]" />
                </span>
                Our Location
              </h3>
              <p className="text-gray-600 leading-relaxed font-medium">
                {CONTACT.address}
              </p>
            </div>

            {/* MAP */}
            <div className="rounded-[2.5rem] overflow-hidden shadow-2xl h-80 border-4 border-white">
              <iframe
                src={CONTACT.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                title="Office Location"
              />
            </div>

          </div>

          {/* RIGHT SIDE - ENQUIRY FORM */}
          <div className="bg-white p-12 rounded-[3rem] shadow-2xl border border-gray-50 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#F4B400] opacity-5 -mr-16 -mt-16 rounded-full group-hover:scale-150 transition-transform duration-700"></div>

            <div className="relative">
              <h3 className="text-3xl font-bold text-[#0B3C5D] mb-2">
                Send an Enquiry
              </h3>
              <p className="text-gray-500 mb-10">We usually respond within 2 business hours.</p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-[#0B3C5D] ml-1">Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="John Doe"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full bg-gray-50 border border-transparent rounded-2xl px-5 py-4 focus:bg-white focus:border-[#F4B400] focus:ring-4 focus:ring-[#F4B400]/10 outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-[#0B3C5D] ml-1">Phone Number</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 XXXX-XXXXXX"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full bg-gray-50 border border-transparent rounded-2xl px-5 py-4 focus:bg-white focus:border-[#F4B400] focus:ring-4 focus:ring-[#F4B400]/10 outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-[#0B3C5D] ml-1">Email Address</label>
                  <input
                    type="email"
                    required
                    placeholder="john@example.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full bg-gray-50 border border-transparent rounded-2xl px-5 py-4 focus:bg-white focus:border-[#F4B400] focus:ring-4 focus:ring-[#F4B400]/10 outline-none transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-[#0B3C5D] ml-1">Message / Requirements</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Describe your project needs..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-gray-50 border border-transparent rounded-2xl px-5 py-4 focus:bg-white focus:border-[#F4B400] focus:ring-4 focus:ring-[#F4B400]/10 outline-none resize-none transition-all"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#0B3C5D] text-white py-5 rounded-2xl font-bold text-lg hover:bg-[#F4B400] hover:text-black shadow-xl shadow-[#0B3C5D]/10 hover:shadow-[#F4B400]/20 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:transform-none"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Sending Enquiry...
                    </>
                  ) : (
                    "Submit Enquiry Now"
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* ================= REVIEW SECTION ================= */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-white p-10 rounded-3xl shadow-xl text-center">
            <h3 className="text-3xl font-bold text-[#0B3C5D] mb-6">
              Leave a Review
            </h3>
            <p className="text-gray-500 mb-10">
              We usually respond within 2 business hours.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">

              <input
                type="text"
                required
                placeholder="Full Name"
                value={form.name}
                onChange={(e) =>
                  setForm({ ...form, name: e.target.value })
                }
                className="w-full bg-gray-50 rounded-2xl px-5 py-4 focus:ring-2 focus:ring-[#F4B400] outline-none"
              />

              <input
                type="tel"
                required
                placeholder="Phone Number"
                value={form.phone}
                onChange={(e) =>
                  setForm({ ...form, phone: e.target.value })
                }
                className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#F4B400] outline-none"
              />

              {/* STAR RATING */}
              <div className="flex justify-center gap-3">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    onClick={() =>
                      setReview({ ...review, rating: star })
                    }
                    className={`h-7 w-7 cursor-pointer transition ${review.rating >= star
                      ? "text-[#F4B400] fill-[#F4B400]"
                      : "text-gray-300"
                      }`}
                  />
                ))}
              </div>

              <textarea
                rows={4}
                required
                placeholder="Your Message"
                value={form.message}
                onChange={(e) =>
                  setForm({ ...form, message: e.target.value })
                }
                className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#F4B400] outline-none resize-none"
              />

              <button
                type="submit"
                disabled={reviewLoading}
                className="w-full bg-[#F4B400] text-black py-4 rounded-xl font-bold hover:opacity-90 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  "Submit Enquiry"
                )}
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
