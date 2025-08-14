import { Phone, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-cleaning.jpg";

export const Hero = () => {
  const handlePhoneCall = () => {
    window.location.href = "tel:+4952518793456";
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/60 to-accent/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Professionelle
            <span className="block bg-gradient-to-r from-accent to-accent-hover bg-clip-text text-transparent">
              Gebäudereinigung
            </span>
            in Paderborn
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Über 10 Jahre Erfahrung für makellose Sauberkeit. 
            Ihre Zufriedenheit ist unsere Priorität.
          </p>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-6 mb-10 text-white/80">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-accent" />
              <span>Über 10 Jahre Erfahrung</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-accent" />
              <span>Familienunternehmen</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-accent" />
              <span>Paderborn & Umgebung</span>
            </div>
          </div>

          {/* Call to Action */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              variant="call"
              size="xl"
              onClick={handlePhoneCall}
              className="w-full sm:w-auto animate-pulse"
            >
              <Phone className="w-5 h-5" />
              Jetzt kostenlos anrufen
            </Button>
            
            <Button
              variant="outline"
              size="xl"
              className="w-full sm:w-auto bg-white/10 border-white/30 text-white hover:bg-white/20"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Leistungen ansehen
            </Button>
          </div>

          <p className="text-white/70 mt-6 text-sm">
            📞 <strong>+49 (5251) 8793456</strong> • Kostenlose Beratung & unverbindliches Angebot
          </p>
        </div>
      </div>

      {/* Bottom Arrow */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-6 border-b-2 border-r-2 border-white/50 transform rotate-45"></div>
      </div>
    </section>
  );
};