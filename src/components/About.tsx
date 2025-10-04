import { Truck, Award, Users } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Truck,
      title: "Entrega Rápida",
      description: "Chegamos no horário combinado para seu evento",
    },
    {
      icon: Award,
      title: "Qualidade Stell",
      description: "Parceiros oficiais da marca Stell",
    },
    {
      icon: Users,
      title: "Atendimento Personalizado",
      description: "Equipe dedicada a garantir seu evento perfeito",
    },
  ];

  return (
    <section id="about" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Title */}
          <h2 className="font-display text-4xl md:text-5xl text-primary text-center mb-8 tracking-wider">
            Sobre a MMBier
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl text-foreground/80 text-center mb-16 leading-relaxed">
            A MMBier está há mais de 5 anos no mercado oferecendo chopp de qualidade, atendimento rápido
            e entrega para eventos em toda a região. Nossa prioridade é que seu evento sirva o chopp
            sempre gelado.
          </p>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-card rounded-lg p-8 text-center shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/20 mb-6">
                  <feature.icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-display text-2xl text-primary mb-3 tracking-wide">{feature.title}</h3>
                <p className="text-foreground/70">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
