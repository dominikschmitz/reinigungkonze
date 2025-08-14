import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

export const Reviews = () => {
  const reviews = [
    {
      name: "Michael Schmidt",
      rating: 5,
      text: "Absolute Professionalität und Zuverlässigkeit! Das Team von Konze reinigt unser Bürogebäude seit 2 Jahren und wir sind sehr zufrieden.",
      date: "vor 2 Wochen"
    },
    {
      name: "Sandra Weber", 
      rating: 5,
      text: "Pünktlich, gründlich und freundlich. Die Glasreinigung war perfekt - unsere Fenster haben noch nie so gestrahlt!",
      date: "vor 1 Monat"
    },
    {
      name: "Thomas Müller",
      rating: 5, 
      text: "Faire Preise und exzellente Arbeit. Der Hausmeisterservice ist ein echter Gewinn für unsere Wohnanlage.",
      date: "vor 3 Wochen"
    },
    {
      name: "Andrea Klein",
      rating: 5,
      text: "Sehr empfehlenswert! Schnelle Reaktionszeit und makellose Reinigung. Das Preis-Leistungs-Verhältnis stimmt.",
      date: "vor 1 Woche"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? "text-yellow-400 fill-current" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <section id="reviews" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="flex items-center gap-1">
              {renderStars(5)}
            </div>
            <span className="text-2xl font-bold text-foreground">4.9/5</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Das sagen unsere Kunden
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Über 50 zufriedene Kunden vertrauen auf unsere professionelle Reinigung
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {reviews.map((review, index) => (
            <Card 
              key={index} 
              className="hover:shadow-medium transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
            >
              <CardContent className="p-6">
                <div className="absolute top-4 right-4 opacity-10">
                  <Quote className="w-12 h-12 text-primary" />
                </div>
                
                <div className="flex items-center gap-1 mb-4">
                  {renderStars(review.rating)}
                </div>
                
                <p className="text-foreground mb-4 leading-relaxed">
                  "{review.text}"
                </p>
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-foreground">{review.name}</p>
                    <p className="text-sm text-muted-foreground">Verifizierter Kunde</p>
                  </div>
                  <p className="text-sm text-muted-foreground">{review.date}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 bg-accent/10 px-6 py-3 rounded-full">
            <Star className="w-5 h-5 text-accent fill-current" />
            <span className="font-semibold text-accent">Google Bewertungen</span>
            <span className="text-muted-foreground">•</span>
            <span className="text-foreground">4.9 von 5 Sternen</span>
          </div>
        </div>
      </div>
    </section>
  );
};