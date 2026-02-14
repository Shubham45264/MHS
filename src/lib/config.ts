// ===============================
// Contact Configuration
// ===============================

export const CONTACT = {
  // 🔹 Clean number (NO +, NO spaces) – used for tel & WhatsApp
  phone: "919820996758",

  // 🔹 Display number (UI only)
  phoneDisplay: "+91 9820996758",

  email: "maharashtrahiringservices@gmail.com",

  address:
    "Shop No. 8, Tulip Society, Sector 6, Ghansoli, Navi Mumbai – 400701",

  companyName: "Maharashtra Hiring Services",

  // 🔹 Google Map Embed URL (Only URL string)
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7539.345194885958!2d72.9942432935791!3d19.122013800000012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c1270d0131d7%3A0x9a9d0895d1498251!2sRekhi%20Sai%20Tulip!5e0!3m2!1sen!2sin!4v1771069263805!5m2!1sen!2sin",
};

// ===============================
// WhatsApp URL Generator
// ===============================

export function getWhatsAppUrl(message: string) {
  return `https://wa.me/${CONTACT.phone}?text=${encodeURIComponent(message)}`;
}

// ===============================
// Mailto URL Generator
// ===============================

export function getMailtoUrl(subject: string, body: string) {
  return `mailto:${CONTACT.email}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;
}

// ===============================
// Direct Call Link Generator
// ===============================

export function getCallUrl() {
  return `tel:${CONTACT.phone}`;
}
