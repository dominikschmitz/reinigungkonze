import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "4952518793456"; // German phone number format for WhatsApp
    const message = encodeURIComponent("Hallo! Ich interessiere mich für Ihre Reinigungsdienstleistungen. Können Sie mir ein Angebot machen?");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        variant="whatsapp"
        size="icon"
        onClick={handleWhatsAppClick}
        className="w-14 h-14 rounded-full shadow-strong animate-pulse hover:animate-none"
        aria-label="WhatsApp Kontakt"
      >
        <MessageCircle className="w-6 h-6" />
      </Button>
      
      {/* Tooltip */}
      <div className="absolute bottom-16 right-0 bg-foreground text-background text-sm px-3 py-2 rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
        WhatsApp Nachricht senden
        <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-foreground"></div>
      </div>
    </div>
  );
};