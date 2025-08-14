import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, ArrowRight } from "lucide-react";
import { ImageCarousel } from "@/components/ImageCarousel";
import cleaningIcon from "@/assets/icon-cleaning.jpg";
import glassIcon from "@/assets/icon-glass.jpg";
import facilityIcon from "@/assets/icon-facility.jpg";

// Import service images
import cleaningStairs from "@/assets/cleaning-stairs.jpg";
import cleaningPavement from "@/assets/cleaning-pavement.jpg";
import cleaningDeep from "@/assets/cleaning-deep.jpg";
import cleaningConstruction from "@/assets/cleaning-construction.jpg";
import glassWindows from "@/assets/glass-windows.jpg";
import glassStorefront from "@/assets/glass-storefront.jpg";
import glassPartitions from "@/assets/glass-partitions.jpg";
import facilityWinter from "@/assets/facility-winter.jpg";
import facilityGarden from "@/assets/facility-garden.jpg";
import facilityWaste from "@/assets/facility-waste.jpg";

export const Services = () => {
  const handlePhoneCall = () => {
    window.location.href = "tel:+4952518793456";
  };

  const services = [
    {
      title: "Gebäudereinigung",
      description: "Professionelle Reinigung für makellose Sauberkeit",
      icon: cleaningIcon,
      images: [
        { src: cleaningStairs, alt: "Professionelle Treppenhausreinigung" },
        { src: cleaningPavement, alt: "Pflaster- und Gehwegreinigung" },
        { src: cleaningDeep, alt: "Gründliche Grundreinigung" },
        { src: cleaningConstruction, alt: "Bauendreinigung nach Fertigstellung" }
      ],
      features: [
        "Treppenhausreinigung",
        "Pflaster Reinigung", 
        "Grundreinigung",
        "Bauendreinigung"
      ]
    },
    {
      title: "Glasreinigung",
      description: "Kristallklare Fenster und Glasflächen",
      icon: glassIcon,
      images: [
        { src: glassWindows, alt: "Professionelle Fensterreinigung" },
        { src: glassStorefront, alt: "Schaufensterreinigung für Geschäfte" },
        { src: glassPartitions, alt: "Glastrennwände in Büros" }
      ],
      features: [
        "Glasflächen",
        "Schaufenster",
        "Glastrennwände", 
        "Glastüren"
      ]
    },
    {
      title: "Hausmeisterdienste",
      description: "Umfassender Service für Ihre Immobilie",
      icon: facilityIcon,
      images: [
        { src: facilityWinter, alt: "Winterdienst und Schneeräumung" },
        { src: facilityGarden, alt: "Professionelle Gartenpflege" },
        { src: facilityWaste, alt: "Mülltonnenservice und Entsorgung" }
      ],
      features: [
        "Mülltonnenservice",
        "Winterdienst",
        "Kehrdienst",
        "Gartenpflege"
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Unsere Leistungen
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Wir passen unsere Reinigungsdienstleistungen an Ihre individuellen 
            Sauberkeitsanforderungen an.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Card 
              key={service.title} 
              className="h-full hover:shadow-medium transition-all duration-300 hover:-translate-y-1 group"
            >
              <CardHeader className="text-center pb-4">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-primary p-4 group-hover:scale-110 transition-transform duration-300">
                  <img 
                    src={service.icon} 
                    alt={service.title}
                    className="w-full h-full object-contain"
                  />
                </div>
                <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                {/* Image Carousel */}
                <ImageCarousel 
                  images={service.images} 
                  className="mb-6"
                />
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-foreground">
                      <ArrowRight className="w-4 h-4 text-accent" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button 
                  variant="cta" 
                  className="w-full"
                  onClick={handlePhoneCall}
                >
                  <Phone className="w-4 h-4" />
                  Angebot anfragen
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-gradient-hero p-8 rounded-lg text-white">
            <h3 className="text-2xl font-bold mb-4">
              Kostenlose Beratung & unverbindliches Angebot
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Maßgeschneiderte Lösungen für Ihre individuellen Bedürfnisse
            </p>
            <Button 
              variant="outline" 
              size="xl"
              className="bg-white/10 border-white/30 text-white hover:bg-white/20"
              onClick={handlePhoneCall}
            >
              <Phone className="w-5 h-5" />
              +49 (5251) 8793456
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};