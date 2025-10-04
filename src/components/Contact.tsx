import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Instagram, Clock } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name || !formData.phone || !formData.message) {
      toast.error("Por favor, preencha todos os campos");
      return;
    }

    // Send via WhatsApp
    const whatsappMessage = encodeURIComponent(
      `Olá! Meu nome é ${formData.name}.\nTelefone: ${formData.phone}\n\n${formData.message}`
    );
    window.open(`https://wa.me/5584682417?text=${whatsappMessage}`, "_blank");
    
    toast.success("Redirecionando para WhatsApp...");
    setFormData({ name: "", phone: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Title */}
          <h2 className="font-display text-4xl md:text-5xl text-primary text-center mb-4 tracking-wider">
            Entre em Contato
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Solicite seu orçamento e garanta o melhor chopp para seu evento
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-card rounded-xl p-6 shadow-md">
                <div className="flex items-start gap-4">
                  <div className="bg-accent/20 p-3 rounded-lg">
                    <Phone className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Telefone</h3>
                    <a
                      href="tel:+5584682417"
                      className="text-accent hover:text-accent/80 transition-colors text-lg font-medium"
                    >
                      +55 84 6824-2417
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-xl p-6 shadow-md">
                <div className="flex items-start gap-4">
                  <div className="bg-accent/20 p-3 rounded-lg">
                    <Instagram className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Instagram</h3>
                    <a
                      href="https://www.instagram.com/mmbiersa/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent hover:text-accent/80 transition-colors text-lg font-medium"
                    >
                      @mmbiersa
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-xl p-6 shadow-md">
                <div className="flex items-start gap-4">
                  <div className="bg-accent/20 p-3 rounded-lg">
                    <Clock className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Horário de Atendimento</h3>
                    <p className="text-foreground/70">Segunda a Segunda</p>
                    <p className="text-foreground/70">8:00 - 00:00</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-card rounded-xl p-8 shadow-lg">
              <h3 className="font-display text-2xl text-primary mb-6 tracking-wide">
                Solicitar Orçamento
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Nome</Label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Seu nome"
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="phone">Telefone</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="(55) 99999-9999"
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="message">Mensagem</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Informe data do evento, volume desejado e local de entrega"
                    className="mt-2 min-h-[120px]"
                  />
                </div>

                <Button type="submit" variant="hero" size="lg" className="w-full">
                  Enviar via WhatsApp
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
