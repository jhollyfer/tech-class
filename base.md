Plataforma de Adoção e Proteção Animal 🐾
Visão Geral do Produto
Nome sugerido: PatinhasSalvas (ou similar — posso sugerir mais)
Três pilares principais:

Adoção — animais para adoção com perfis detalhados
Denúncias — canal de denúncia de maus-tratos com rastreamento
Vaquinhas — crowdfunding para tratamentos, resgates e ONGs

Requisitos Funcionais
Módulo 1 — Autenticação e Perfis

RF01 — Cadastro de usuário comum (adotante/doador)
RF02 — Cadastro de ONG/Abrigo (com CNPJ e validação)
RF03 — Login com e-mail/senha e OAuth (Google)
RF04 — Perfil público de ONG com histórico de adoções e vaquinhas
RF05 — Verificação de e-mail e 2FA opcional

Módulo 2 — Adoção de Animais

RF06 — Cadastro de animal para adoção (fotos, espécie, raça, idade, saúde, temperamento)
RF07 — Filtros de busca: espécie, porte, cidade, faixa etária, castrado, vacinado
RF08 — Formulário de interesse em adoção com perguntas de triagem
RF09 — Fluxo de aprovação: ONG avalia o formulário e aceita/rejeita
RF10 — Status do animal: disponível / em processo / adotado
RF11 — Favoritar animais e receber alertas
RF12 — Histórico de adoções do usuário

Módulo 3 — Denúncias de Maus-Tratos

RF13 — Formulário de denúncia com: descrição, localização (mapa), fotos/vídeos, anonimato opcional
RF14 — Protocolo gerado automaticamente após envio
RF15 — Status da denúncia: recebida / em análise / encaminhada / resolvida
RF16 — Encaminhamento para órgãos competentes (CANIL, CRMV, polícia ambiental) com e-mail automático
RF17 — Moderação de denúncias por equipe ou ONG parceira
RF18 — Denúncia pública/anônima com mapa de calor de ocorrências por região

Módulo 4 — Vaquinhas (Crowdfunding)

RF19 — Criação de campanha com: título, descrição, meta, prazo, fotos, categoria
RF20 — Categorias: cirurgia, resgate, castração em massa, reforma de abrigo, ração
RF21 — Doação avulsa ou recorrente (mensal)
RF22 — Pagamento via PIX, cartão de crédito e boleto
RF23 — Progresso visual da campanha (barra + % + valor arrecadado)
RF24 — Atualizações de campanha pela ONG (feed de novidades)
RF25 — Relatório financeiro público por campanha
RF26 — Reembolso em caso de campanha cancelada (regra configurável)
RF27 — Doador recebe recibo por e-mail

Módulo 5 — Notificações

RF28 — E-mail transacional (boas-vindas, adoção aprovada, nova vaquinha, denúncia atualizada)
RF29 — Notificação in-app
RF30 — Alerta de animal novo na região do usuário

Requisitos Não Funcionais
#CategoriaRequisitoRNF01PerformanceListagens com paginação cursor-based, resposta < 300msRNF02SegurançaHTTPS obrigatório, dados sensíveis criptografados, LGPD compliantRNF03DisponibilidadeUptime 99,5% — deploy com rollback automáticoRNF04EscalabilidadeArquitetura stateless, suporte a filas para e-mails e pagamentosRNF05AcessibilidadeWCAG 2.1 AA — teclado, leitor de tela, contrasteRNF06SEOSSR/SSG para páginas de animais e campanhas (Next.js ou Vite SSR)RNF07Upload de mídiaImagens otimizadas automaticamente (WebP), limite de 10MB por arquivoRNF08AuditoriaLog de todas as ações críticas (doações, denúncias, status changes)RNF09ConformidadeLGPD: consentimento, exportação e exclusão de dados pelo usuárioRNF10Mobile-firstResponsivo, PWA opcional para notificações push

Regras de Negócio
Adoção

RN01 — Apenas ONGs verificadas podem cadastrar animais
RN02 — Um animal só pode estar em um processo de adoção ativo por vez
RN03 — Animal castrado/vacinado ganha selo de destaque
RN04 — ONGs devem registrar a conclusão da adoção em até 30 dias após aprovação

Vaquinhas

RN05 — Apenas ONGs verificadas podem criar campanhas
RN06 — Taxa de plataforma: 5% sobre o valor arrecadado (configurável)
RN07 — Campanha sem movimentação por 60 dias é arquivada automaticamente
RN08 — Saque disponível apenas após 30 dias da doação (chargebacks)
RN09 — Meta não atingida no prazo: doadores notificados e valor reembolsado ou mantido com consentimento

Denúncias

RN10 — Denúncia anônima não exige login mas tem limite de IP (anti-spam)
RN11 — Denúncias com localização geram entrada no mapa público após moderação
RN12 — Denúncia pode ser atualizada/complementada pelo denunciante com o protocolo

Casos de Uso Principais
UC01 — Adotar um Animal
Ator: Usuário autenticado
Fluxo: Buscar → Filtrar → Ver perfil → Manifestar interesse →
Preencher formulário → ONG analisa → Aprovado/Reprovado → Notificação

UC02 — Cadastrar Animal para Adoção
Ator: ONG verificada
Fluxo: Login → Novo animal → Upload fotos → Preencher dados de saúde →
Publicar → Animal disponível na listagem

UC03 — Registrar Denúncia
Ator: Qualquer visitante (anônimo ou autenticado)
Fluxo: Acessar form → Descrever → Anexar mídia → Marcar no mapa →
Enviar → Receber protocolo → Acompanhar status

UC04 — Criar Vaquinha
Ator: ONG verificada
Fluxo: Nova campanha → Preencher dados → Definir meta e prazo →
Publicar → Compartilhar link

UC05 — Fazer Doação
Ator: Qualquer visitante
Fluxo: Ver campanha → Escolher valor → Escolher forma de pagamento →
Confirmar → Receber recibo → Campanha atualiza progresso

Stack Sugerida
CamadaTecnologiaFrontendReact + Vite (SPA) ou Next.js (SEO)BackendNode.js + Fastify + TypeScriptBancoPostgreSQL (relacional) + Redis (cache/filas)StorageCloudflare R2 ou S3 (mídia)PagamentosAsaas ou Pagar.me (PIX nativo)E-mailResend + React EmailMapasLeaflet.js (open source)AuthJWT + Refresh Token ou Lucia Auth

Script para o Stitch — Landing Page
Build a landing page for a Brazilian animal welfare platform called "PatinhasSalvas".

The platform has three core features:

1. Animal adoption — connect rescued animals with loving homes
2. Animal abuse reporting — anonymous reports with real-time status tracking
3. Crowdfunding campaigns — raise money for animal treatments, rescues and shelters

---

DESIGN STYLE:

- Warm, emotional, and trustworthy
- Color palette: deep green (#1B4332), warm amber (#F59E0B), soft white (#FAFAF8)
- Typography: rounded, friendly sans-serif (Inter or Nunito)
- Full-width hero with a photo/illustration of happy rescued animals
- Mobile-first, fully responsive

---

SECTIONS TO BUILD:

1. NAVBAR
   - Logo (paw icon + "PatinhasSalvas")
   - Links: Adotar, Denunciar, Vaquinhas, Sobre
   - CTA button: "Cadastrar ONG" (green, filled)
   - Sticky on scroll

2. HERO
   - Headline: "Cada patinha merece um lar."
   - Subheadline: "Adote, denuncie maus-tratos e apoie vaquinhas de animais em todo o Brasil."
   - Two CTA buttons: "Quero Adotar" (primary) and "Ver Vaquinhas" (secondary/outline)
   - Background: large warm lifestyle photo of rescued animals or illustrated scene

3. STATS BAR
   - 3 counters with animation on scroll:
     "1.240 animais adotados", "3.800 denúncias registradas", "R$ 280 mil arrecadados"
   - Light green background strip

4. FEATURES — Three Cards
   Card 1 — Adoção: paw icon, title "Adote com amor", short description, "Ver animais" link
   Card 2 — Denúncia: shield icon, title "Denuncie maus-tratos", short description, "Fazer denúncia" link
   Card 3 — Vaquinha: heart icon, title "Apoie uma causa", short description, "Ver campanhas" link

5. FEATURED ANIMALS (horizontal scroll carousel)
   - 4 animal cards: photo, name, species, city, "Ver perfil" button
   - Use placeholder/mock data
   - "Ver todos os animais" button below

6. ACTIVE CAMPAIGNS (grid 3 cols)
   - 3 crowdfunding cards: campaign photo, title, progress bar, amount raised vs goal, days left, "Apoiar" button
   - Use mock data

7. HOW IT WORKS — 3 steps (numbered)
   - "Crie sua conta" → "Explore animais e campanhas" → "Faça a diferença"
   - Simple icon + title + description layout

8. TESTIMONIALS
   - 2–3 quotes from adopters or donors (mock)
   - Avatar, name, city

9. NGO SECTION
   - "Você representa uma ONG ou abrigo?"
   - "Cadastre sua organização e alcance milhares de pessoas dispostas a ajudar."
   - CTA: "Cadastrar minha ONG"

10. FOOTER
    - Logo + tagline
    - Links: Adotar, Denunciar, Vaquinhas, Para ONGs, Privacidade, Termos
    - Social icons (Instagram, Facebook, TikTok)
    - "© 2025 PatinhasSalvas. Feito com amor pelos animais do Brasil."

---

TECH: Use React with Tailwind CSS. Use lucide-react for icons. Make all sections fully functional as static components with mock data. No backend needed. Smooth scroll between sections. Add subtle scroll-reveal animations.
