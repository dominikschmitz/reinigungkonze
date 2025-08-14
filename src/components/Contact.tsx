import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const Contact = () => {
  const handlePhoneCall = () => {
    window.location.href = "tel:+4952518793456";
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = "4952518793456";
    const message = encodeURIComponent("Hallo! Ich interessiere mich für Ihre Reinigungsdienstleistungen. Können Sie mir ein Angebot machen?");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  const handleEmailClick = () => {
    window.location.href = "mailto:info@gebaudereinigungkonze.com";
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Jetzt Kontakt aufnehmen
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Kostenlose Beratung und unverbindliches Angebot - 
            wir freuen uns auf Ihre Anfrage!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="hover:shadow-medium transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <Phone className="w-6 h-6 text-primary" />
                  Telefon
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-foreground mb-2">
                  +49 (5251) 8793456
                </p>
                <p className="text-muted-foreground mb-4">
                  Montag bis Freitag: 8:00 - 18:00 Uhr<br />
                  Samstag: 9:00 - 14:00 Uhr
                </p>
                <Button variant="call" size="lg" onClick={handlePhoneCall}>
                  <Phone className="w-4 h-4" />
                  Jetzt anrufen
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-medium transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <MessageCircle className="w-6 h-6 text-accent" />
                  WhatsApp
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Schnelle Antwort per WhatsApp -<br />
                  auch außerhalb der Geschäftszeiten
                </p>
                <Button variant="whatsapp" size="lg" onClick={handleWhatsAppClick}>
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp Nachricht
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-medium transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <Mail className="w-6 h-6 text-primary" />
                  E-Mail
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold text-foreground mb-2">
                  info@gebaudereinigungkonze.com
                </p>
                <p className="text-muted-foreground mb-4">
                  Antwort innerhalb von 24 Stunden
                </p>
                <Button variant="outline" size="lg" onClick={handleEmailClick}>
                  <Mail className="w-4 h-4" />
                  E-Mail senden
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Call to Action */}
          <div className="flex flex-col justify-center">
            <div className="bg-gradient-hero p-8 rounded-lg text-white text-center">
              <MapPin className="w-16 h-16 mx-auto mb-6 text-white/80" />
              <h3 className="text-2xl font-bold mb-4">
                Paderborn & Umgebung
              </h3>
              <p className="text-lg mb-6 opacity-90 leading-relaxed">
                Wir sind in Paderborn und der umliegenden Region für Sie da. 
                Kurze Anfahrtswege bedeuten schnelle Reaktionszeiten.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                <div className="bg-white/10 p-4 rounded-lg">
                  <Clock className="w-8 h-8 mx-auto mb-2 text-accent" />
                  <p className="font-semibold">Schnelle Reaktion</p>
                  <p className="text-sm opacity-80">Meist noch am selben Tag</p>
                </div>
                <div className="bg-white/10 p-4 rounded-lg">
                  <MapPin className="w-8 h-8 mx-auto mb-2 text-accent" />
                  <p className="font-semibold">Kurze Anfahrt</p>
                  <p className="text-sm opacity-80">Lokal in Paderborn</p>
                </div>
              </div>

              <Button 
                variant="outline" 
                size="xl"
                className="w-full bg-white/10 border-white/30 text-white hover:bg-white/20"
                onClick={handlePhoneCall}
              >
                <Phone className="w-5 h-5" />
                Kostenlose Beratung: +49 (5251) 8793456
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};