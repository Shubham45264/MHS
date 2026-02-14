import { MessageCircle } from "lucide-react";
import { getWhatsAppUrl } from "../lib/config";

export default function FloatingWhatsApp() {
  return (
    <a
      href={getWhatsAppUrl("Hello, I would like to enquire about your services from Maharashtra Hiring Services.")}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-success text-success-foreground flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  );
}
