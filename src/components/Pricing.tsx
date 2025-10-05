import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const Pricing = () => {
  const barrels = [
    { size: "15 L", price: "R$ 195,00", popular: false },
    { size: "20 L", price: "R$ 260,00", popular: true },
    { size: "30 L", price: "R$ 357,00", popular: false },
    { size: "50 L", price: "R$ 595,00", popular: false },
  ];

  return (
    <section id="pricing" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Title */}
          <h2 className="font-display text-4xl md:text-5xl text-primary text-center mb-4 tracking-wider">
            Preços de Barris
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Escolha o tamanho ideal para seu evento
          </p>

          {/* Pricing Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {barrels.map((barrel, index) => (
              <div
                key={index}
                className={`relative bg-card rounded-xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 ${
                  barrel.popular ? "border-accent" : "border-transparent"
                }`}
              >
                {barrel.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-semibold">
                      Mais Vendido
                    </span>
                  </div>
                )}

                <div className="text-center">
                  <div className="mb-6">
                    <div className="font-display text-5xl text-primary mb-2">{barrel.size}</div>
                    <div className="text-3xl font-bold text-accent">{barrel.price}</div>
                  </div>

                  <Button variant="heroPrimary" size="lg" asChild className="w-full">
                    <a href="tel:+55984682417" className="flex items-center justify-center gap-2">
                      <Phone className="w-4 h-4" />
                      Pedir {barrel.size}
                    </a>
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Note */}
          <p className="text-center text-sm text-muted-foreground">
            *Preços sujeitos a confirmação. Consulte disponibilidade.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
