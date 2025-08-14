import { Card, CardContent } from "@/components/ui/card";
import { Users, Award, MapPin, Clock } from "lucide-react";

export const About = () => {
  const features = [
    {
      icon: Users,
      title: "Familienunternehmen",
      description: "Persönliche Betreuung und direkter Kontakt zu den Inhabern"
    },
    {
      icon: Award,
      title: "Über 10 Jahre Erfahrung",
      description: "Bewährte Expertise in der professionellen Gebäudereinigung"
    },
    {
      icon: MapPin,
      title: "Paderborn & Umgebung",
      description: "Lokaler Service mit kurzen Anfahrtswegen"
    },
    {
      icon: Clock,
      title: "Zuverlässig & Pünktlich",
      description: "Termingerechte Ausführung aller vereinbarten Arbeiten"
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ihre Zufriedenheit ist unsere Priorität
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Als <strong className="text-foreground">familiengeführtes Unternehmen</strong> mit über zehn Jahren 
                Erfahrung bieten wir professionelle Reinigungs- und Hausmeisterdienste für Immobilien an.
              </p>
              <p>
                Unser Fokus liegt auf <strong className="text-foreground">Sorgfalt, Qualität und maßgeschneiderten 
                Lösungen</strong>, die individuell auf Ihre Bedürfnisse abgestimmt sind.
              </p>
              <p>
                Wir sind in <strong className="text-foreground">Paderborn und Umgebung</strong> tätig und stehen 
                für eine persönliche Beratung sowie unverbindliche Angebote zur Verfügung.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="hover:shadow-medium transition-all duration-300 hover:-translate-y-1 group"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};