import { Phone, Instagram } from "lucide-react";
import mmbierLogo from "@/assets/mmbier_logo.jpg";

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo & Tagline */}
          <div className="text-center md:text-left">
            <div className="flex items-center gap-3 justify-center md:justify-start mb-4">
              <img src={mmbierLogo} alt="Logo MMBier" className="h-12 w-12 rounded-full object-cover" />
              <span className="font-display text-2xl tracking-wider">MMBier</span>
            </div>
            <p className="text-primary-foreground/80 text-sm">
              Há mais de 5 anos no mercado oferecendo chopp de qualidade
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h3 className="font-display text-xl mb-4 tracking-wide">Navegação</h3>
            <nav className="flex flex-col gap-2">
              {["Início", "Sobre", "Preços", "Marcas", "Contato"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-primary-foreground/80 hover:text-accent transition-colors text-sm"
                >
                  {item}
                </button>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-right">
            <h3 className="font-display text-xl mb-4 tracking-wide">Contato</h3>
            <div className="space-y-3 text-sm">
              <a
                href="tel:+55984682417"
                className="flex items-center justify-center md:justify-end gap-2 text-primary-foreground/80 hover:text-accent transition-colors"
              >
                <Phone className="w-4 h-4" />
                +55 9 8468-2417
              </a>
              <a
                href="https://www.instagram.com/mmbiersa/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center md:justify-end gap-2 text-primary-foreground/80 hover:text-accent transition-colors"
              >
                <Instagram className="w-4 h-4" />
                @mmbiersa
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/10 pt-8 text-center">
          <p className="text-sm text-primary-foreground/60">
            © {new Date().getFullYear()} MMBier - Distribuidora de Chopp. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
