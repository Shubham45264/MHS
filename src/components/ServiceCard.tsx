import { MessageCircle, Mail, type LucideIcon } from "lucide-react";
import { getWhatsAppUrl, getMailtoUrl } from "@/lib/config";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function ServiceCard({ icon: Icon, title, description }: ServiceCardProps) {
  const waMsg = `Hello, I would like to enquire about ${title} service from Maharashtra Hiring Services.`;
  const mailSubject = `Enquiry: ${title}`;
  const mailBody = `Hello, I would like to enquire about ${title} service.`;

  return (
    <div className="group bg-card rounded-lg border border-border p-6 hover:shadow-lg hover:border-primary/30 transition-all duration-300">
      <div className="h-12 w-12 rounded-md bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
        <Icon className="h-6 w-6 text-primary" />
      </div>
      <h3 className="font-display font-bold text-foreground text-lg mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed mb-4">{description}</p>
      <div className="flex gap-2">
        <a
          href={getWhatsAppUrl(waMsg)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 bg-success/10 text-success px-3 py-1.5 rounded text-xs font-semibold hover:bg-success hover:text-success-foreground transition-colors"
        >
          <MessageCircle className="h-3.5 w-3.5" /> WhatsApp
        </a>
        <a
          href={getMailtoUrl(mailSubject, mailBody)}
          className="inline-flex items-center gap-1.5 bg-primary/10 text-primary px-3 py-1.5 rounded text-xs font-semibold hover:bg-primary hover:text-primary-foreground transition-colors"
        >
          <Mail className="h-3.5 w-3.5" /> Email
        </a>
      </div>
    </div>
  );
}
