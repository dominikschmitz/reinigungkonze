import { Phone, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export const Header = () => {
  const handlePhoneCall = () => {
    window.location.href = "tel:+4952518793456";
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <h1 className="text-xl font-bold text-primary">
            Gebäudereinigung Konze
          </h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#services" className="text-foreground hover:text-primary transition-colors">
            Leistungen
          </a>
          <a href="#about" className="text-foreground hover:text-primary transition-colors">
            Über uns
          </a>
          <a href="#reviews" className="text-foreground hover:text-primary transition-colors">
            Bewertungen
          </a>
          <a href="#contact" className="text-foreground hover:text-primary transition-colors">
            Kontakt
          </a>
        </nav>

        {/* Phone Button */}
        <div className="flex items-center space-x-4">
          <Button
            variant="call"
            size="lg"
            onClick={handlePhoneCall}
            className="hidden sm:flex"
          >
            <Phone className="w-4 h-4" />
            Jetzt anrufen
          </Button>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="w-5 h-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col space-y-4 mt-8">
                <a href="#services" className="text-lg font-medium hover:text-primary transition-colors">
                  Leistungen
                </a>
                <a href="#about" className="text-lg font-medium hover:text-primary transition-colors">
                  Über uns
                </a>
                <a href="#reviews" className="text-lg font-medium hover:text-primary transition-colors">
                  Bewertungen
                </a>
                <a href="#contact" className="text-lg font-medium hover:text-primary transition-colors">
                  Kontakt
                </a>
                <Button
                  variant="call"
                  size="lg"
                  onClick={handlePhoneCall}
                  className="mt-6"
                >
                  <Phone className="w-4 h-4" />
                  Jetzt anrufen
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};