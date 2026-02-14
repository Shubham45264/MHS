import { useState } from "react";
import { Phone, Mail, MapPin, Star } from "lucide-react";
import { CONTACT } from "@/lib/config";

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your enquiry! We will get back to you shortly.");
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your review!");
    setReview({ name: "", rating: 0, comment: "" });
  };

  return (
    <section className="py-28 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-6">

        {/* ================= HEADER ================= */}
        <div className="text-center mb-20">
          <p className="text-[#F4B400] font-semibold uppercase tracking-widest text-sm mb-3">
            Contact Us
          </p>
          <h2 className="text-4xl font-bold text-[#0B3C5D]">
            Let’s Build Something Great Together
          </h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Whether you need industrial equipment rental, generator services,
            or maintenance solutions — our team is ready to assist you.
          </p>
        </div>

        {/* ================= CONTACT GRID ================= */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-28">

          {/* LEFT SIDE - INFO */}
          <div className="space-y-8">

            <div className="bg-white p-8 rounded-3xl shadow-lg space-y-6">
              <h3 className="text-xl font-bold text-[#0B3C5D]">
                Contact Information
              </h3>

              <div className="flex items-center gap-4">
                <Phone className="text-[#F4B400]" />
                <span>{CONTACT.phoneDisplay}</span>
              </div>

              <div className="flex items-center gap-4">
                <Mail className="text-[#F4B400]" />
                <span>{CONTACT.email}</span>
              </div>

              <div className="flex items-start gap-4">
                <MapPin className="text-[#F4B400] mt-1" />
                <span>{CONTACT.address}</span>
              </div>
            </div>

            {/* MAP */}
            <div className="rounded-3xl overflow-hidden shadow-lg h-72">
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
          <div className="bg-white p-10 rounded-3xl shadow-xl">
            <h3 className="text-2xl font-bold text-[#0B3C5D] mb-8">
              Send an Enquiry
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">

              <input
                type="text"
                required
                placeholder="Your Name"
                value={form.name}
                onChange={(e) =>
                  setForm({ ...form, name: e.target.value })
                }
                className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#F4B400] outline-none"
              />

              <input
                type="email"
                required
                placeholder="Email Address"
                value={form.email}
                onChange={(e) =>
                  setForm({ ...form, email: e.target.value })
                }
                className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#F4B400] outline-none"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                value={form.phone}
                onChange={(e) =>
                  setForm({ ...form, phone: e.target.value })
                }
                className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#F4B400] outline-none"
              />

              <textarea
                rows={4}
                required
                placeholder="Tell us about your requirements..."
                value={form.message}
                onChange={(e) =>
                  setForm({ ...form, message: e.target.value })
                }
                className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#F4B400] outline-none resize-none"
              />

              <button
                type="submit"
                className="w-full bg-[#0B3C5D] text-white py-3 rounded-lg font-semibold hover:bg-[#082c44] transition"
              >
                Send Enquiry
              </button>
            </form>
          </div>
        </div>

        {/* ================= REVIEW SECTION ================= */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-white p-10 rounded-3xl shadow-xl text-center">
            <h3 className="text-3xl font-bold text-[#0B3C5D] mb-6">
              Leave a Review
            </h3>

            <p className="text-gray-500 mb-10">
              We value your feedback. Share your experience with us.
            </p>

            <form onSubmit={handleReviewSubmit} className="space-y-6">

              <input
                type="text"
                required
                placeholder="Your Name"
                value={review.name}
                onChange={(e) =>
                  setReview({ ...review, name: e.target.value })
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
                    className={`h-7 w-7 cursor-pointer transition ${
                      review.rating >= star
                        ? "text-[#F4B400] fill-[#F4B400]"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>

              <textarea
                rows={4}
                required
                placeholder="Write your review..."
                value={review.comment}
                onChange={(e) =>
                  setReview({ ...review, comment: e.target.value })
                }
                className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#F4B400] outline-none resize-none"
              />

              <button
                type="submit"
                className="w-full bg-[#F4B400] text-black py-3 rounded-lg font-semibold hover:opacity-90 transition"
              >
                Submit Review
              </button>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
}
