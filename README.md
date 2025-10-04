# MMBier — Site Institucional

Bem-vindo ao repositório do site institucional da **MMBier**, distribuidora de chopp.

---

## 📌 Visão geral

Este é o código-fonte do site oficial da MMBier, com objetivo de apresentar a empresa, exibir os preços dos barris de chopp, e oferecer canais de contato (telefone, Instagram, formulário). O site também exibe a logo da marca de chopp **Stell**, parceira da MMBier.

O site foi desenvolvido com foco em:

- Layout moderno, responsivo (desktop / mobile)  
- Boa performance e carregamento otimizado  
- SEO básico (metatags, estrutura semântica)  
- Acessibilidade (contraste, alt em imagens, formulários acessíveis)  
- Facilidade de manutenção e escalabilidade  

---

## 🧰 Tecnologias utilizadas

Nesta versão do repositório, estão presentes os seguintes componentes/tecnologias:

- HTML + CSS (possivelmente pré-processado ou configurado com Tailwind / PostCSS)  
- JavaScript / TypeScript (se presente)  
- Ferramentas de build / bundler (ex: Vite, Webpack)  
- Configurações como `tailwind.config.ts`, `postcss.config.js` etc.  
- Estrutura de diretórios: `public`, `src`, componentes, etc.  
- Dependências gerenciadas via `package.json`  

> ⚠️ Se você tiver uma stack específica (React, Next.js, ou outra), ajuste este README para refletir exatamente as tecnologias usadas.

---

## 📂 Estrutura de pastas 

```
mmbier/
├── public/                # arquivos públicos (imagens, ícones, favicon, etc.)
├── src/                   # código fonte (páginas, componentes, estilos)
├── index.html             # página principal
├── tailwind.config.ts     # configuração Tailwind CSS (se aplicável)
├── postcss.config.js      # configuração PostCSS
├── vite.config.ts         # configuração do bundler (se for usar Vite)
├── package.json           # dependências e scripts
└── README.md              # este arquivo
```

---

## 🚀 Como rodar / usar localmente

1. Clone o repositório  
   ```bash
   git clone https://github.com/DanielSDewes/mmbier.git
   cd mmbier
   ```

2. Instale as dependências  
   ```bash
   npm install
   # ou
   yarn install
   ```

3. Inicie o servidor de desenvolvimento  
   ```bash
   npm run dev
   # ou
   yarn dev
   ```

4. Acesse no navegador  
   ```text
   http://localhost:3000  # ou porta definida no projeto
   ```

5. Para construir para produção  
   ```bash
   npm run build
   # ou
   yarn build
   ```

---

## 📞 Informações fixas (conteúdo do site)

- **Tempo de mercado**: mais de 5 anos  
- **Contato / Telefone**: +55 84 6824‑2417  
- **Instagram**: [@mmbiersa](https://www.instagram.com/mmbiersa/)  
- **Preços de barris**:

  | Volume | Preço (R$) |
  |--------|------------|
  | 15 L   | 195,00     |
  | 20 L   | 260,00     |
  | 30 L   | 357,00     |
  | 50 L   | 595,00     |

- **Marcas**: Stell (logo da Stell deverá aparecer no site como marca parceira)

---

## ✅ Boas práticas e sugestões futuras

- Incluir um favicon / ícone `.ico` (ex: copo de chopp) para o site  
- Otimizar imagens (WebP, lazy loading)  
- Adicionar integração para formulário de orçamento / envio de dados  
- Monitoramento (Analytics / pixel de conversão)  
- SEO avançado (Open Graph, sitemap, robots.txt)  
- Fácil manutenção para incluir novas marcas ou produtos  

---

## 📝 Licença

Este projeto é de uso privado / institucional para MMBier. Se for tornar open source, escolha a licença apropriada (MIT, Apache, etc.).  
