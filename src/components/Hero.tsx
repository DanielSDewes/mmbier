import { Button } from "@/components/ui/button";
import { Phone, ArrowDown } from "lucide-react";
import mmbierLogo from "@/assets/mmbier_logo.jpg";
import stellLogo from "@/assets/logo_stell.png";
import heroBackground from "@/assets/hero-background.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${heroBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/90 via-primary/80 to-primary/90" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-32 text-center">
        {/* Logos */}
        <div className="flex items-center justify-center gap-8 mb-12 flex-wrap">
          <img
            src={mmbierLogo}
            alt="Logo MMBier - O chopp dos amigos"
            className="h-32 w-32 rounded-full object-cover shadow-2xl border-4 border-accent"
          />
          <img
            src={stellLogo}
            alt="Logo Stell - Marca oficial"
            className="h-24 w-auto object-contain drop-shadow-2xl"
          />
        </div>

        {/* Headline */}
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-primary-foreground mb-6 tracking-wider">
          MMBier
        </h1>
        <p className="font-display text-2xl md:text-3xl lg:text-4xl text-accent mb-4">
          Chopp gelado e entrega rápida
        </p>
        <p className="text-xl md:text-2xl text-primary-foreground/90 mb-12 max-w-3xl mx-auto">
          Há mais de 5 anos no mercado
        </p>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-primary-foreground/80 mb-12 max-w-2xl mx-auto font-medium">
          Distribuidora oficial de Stell. Barris para festas, eventos e comércios.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Button variant="hero" size="lg" asChild className="text-lg px-8 py-6 h-auto">
            <a href="tel:+55984682417" className="flex items-center gap-2">
              <Phone className="w-5 h-5" />
              Ligar: (55) 98468-2417
            </a>
          </Button>
          <Button
            variant="heroPrimary"
            size="lg"
            onClick={() => scrollToSection("pricing")}
            className="text-lg px-8 py-6 h-auto"
          >
            Ver Preços
          </Button>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={() => scrollToSection("about")}
          className="animate-bounce text-accent hover:text-accent/80 transition-colors"
          aria-label="Rolar para baixo"
        >
          <ArrowDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
