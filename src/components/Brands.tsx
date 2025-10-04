import stellLogo from "@/assets/logo_stell.png";

const Brands = () => {
  return (
    <section id="brands" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Title */}
          <h2 className="font-display text-4xl md:text-5xl text-primary mb-8 tracking-wider">
            Marcas Parceiras
          </h2>

          {/* Stell Logo */}
          <div className="bg-card rounded-xl p-12 shadow-lg inline-block">
            <img
              src={stellLogo}
              alt="Logo Stell - Distribuidora autorizada"
              className="h-24 md:h-32 w-auto object-contain mx-auto mb-6"
            />
            <p className="text-xl font-semibold text-primary">Distribuidora Autorizada Stell</p>
            <p className="text-muted-foreground mt-2">Qualidade garantida em cada barril</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;
