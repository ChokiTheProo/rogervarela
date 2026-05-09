# 📈 SKILLS PARA MARKETING — Top 3

Use esses skills para SEO, CRO, growth, analytics e estratégias de marketing digital.

**Pré-requisito geral:** Ter o Claude Code instalado e atualizado + Node.js 18+.

---

## 1. Marketing Skills (Pacote Completo)

- **Link:** https://github.com/coreyhaines31/marketingskills
- **Status:** ✅ Ativo e atualizado
- **Autor:** Corey Haines (Conversion Factory)

**O que faz:** Pacote completo de marketing com skills para CRO, copywriting, SEO, analytics, email sequences, pricing strategy, social media, paid ads, onboarding, A/B testing, psicologia de marketing e muito mais. Cada skill é um arquivo .md que dá conhecimento especializado ao Claude.

**Como instalar (escolha uma opção):**
```
# Opção 1 — Todas as skills de uma vez
npx skillkit install coreyhaines31/marketingskills

# Opção 2 — Skills específicas
npx skillkit install coreyhaines31/marketingskills --skill page-cro seo-audit analytics-tracking

# Opção 3 — Via marketplace
/plugin marketplace add coreyhaines31/marketingskills
/plugin install marketing-skills

# Opção 4 — Manual
git clone https://github.com/coreyhaines31/marketingskills.git
cp -r marketingskills/skills/* .claude/skills/
```

**Uso prático:**
- "Help me optimize this landing page for conversions" → ativa page-cro
- "Set up GA4 tracking for signups" → ativa analytics-tracking
- "Create a product launch plan" → ativa product-launch

**Skills incluídas:** page-cro, copywriting, seo-audit, analytics-tracking, email-sequence, pricing-strategy, social-media, paid-ads, onboarding-optimization, a-b-testing, marketing-psychology, copy-editing, popup-cro, site-architecture, content-strategy e mais.

---

## 2. SEO Machine

- **Link:** https://github.com/TheCraigHewitt/seomachine
- **Status:** ✅ Ativo e atualizado
- **Autor:** Craig Hewitt (Castos)

**O que faz:** Workspace completo de SEO com Claude Code. Pesquisa keywords, escreve artigos longos otimizados, analisa conteúdo existente, gera meta tags, schema markup, e pode até publicar direto no WordPress. Inclui 26 skills de marketing + agentes especializados (analisador de conteúdo, otimizador SEO, gerador de headlines, analista de CRO).

**Como instalar:**
```
git clone https://github.com/TheCraigHewitt/seomachine.git
cd seomachine
```
Siga o README para configurar integrações (GA4, Search Console, DataForSEO).

**Comandos incluídos:**
- `/research` — pesquisa de tema
- `/write` — escreve artigo otimizado
- `/analyze-existing` — analisa conteúdo existente
- `/optimize` — otimiza artigo para SEO
- `/publish-draft` — publica no WordPress

---

## 3. OpenClaudia Skills (63+ Skills de Marketing)

- **Link:** https://github.com/OpenClaudia/openclaudia-skills
- **Status:** ✅ Ativo e atualizado

**O que faz:** 63+ skills de marketing open source. SEO audit, blog writing, email sequences, análise de concorrentes, Discord bot, social media — tudo em um pacote.

**Como instalar:**
```
# Todas as skills
npx openclaudia install --all

# Skills específicas
npx openclaudia install seo-audit write-blog email-sequence

# Manual
cp -r skills/seo-audit ~/.claude/skills/
```

**Uso:**
- `/audit-seo https://meusite.com` → análise SEO completa
- `/write-blog "10 Dicas para Growth"` → artigo de 2.400+ palavras
- `/email-sequence --type product-launch` → sequência de 6 emails
- `/competitor-analysis concorrente.com` → análise completa

---

## Resumo rápido

| Skill | Comando |
|---|---|
| Marketing Skills | `npx skillkit install coreyhaines31/marketingskills` |
| SEO Machine | `git clone https://github.com/TheCraigHewitt/seomachine.git` |
| OpenClaudia | `npx openclaudia install --all` |
