# 🖥️ SKILLS PARA LANDING PAGES — Top 3

Use esses skills sempre que for criar páginas de vendas, capturas de lead, páginas de produto ou qualquer landing page.

**Pré-requisito geral:** Ter o Claude Code instalado e atualizado.

---

## 1. UI/UX Pro Max Skill

- **Link:** https://github.com/nextlevelbuilder/ui-ux-pro-max-skill
- **Stars:** 16K+ (verificado maio/2026)
- **Status:** ✅ Ativo e atualizado

**O que faz:** 50+ estilos de UI, 97 paletas de cores, 57 combinações de fontes em 9 tech stacks. Gera um design system inteiro para que sua página NÃO pareça feita por IA. Escolhe fontes, cores e layout que combinam com seu nicho.

**Como instalar:**
```
# Clonar e copiar para skills
git clone https://github.com/nextlevelbuilder/ui-ux-pro-max-skill.git
cp -r ui-ux-pro-max-skill/.claude/skills/* .claude/skills/

# Ou copiar o arquivo SKILL.md para dentro do seu projeto
mkdir -p .claude/skills/ui-ux
cp ui-ux-pro-max-skill/SKILL.md .claude/skills/ui-ux/SKILL.md
```

**O que muda na prática:** Quando você pede para criar uma interface, o Claude consulta a skill e aplica design profissional automaticamente — em vez de usar os mesmos padrões genéricos de sempre.

---

## 2. Marketing Skills (Page CRO + Landing Page)

- **Link:** https://github.com/coreyhaines31/marketingskills
- **Status:** ✅ Ativo e atualizado

**O que faz:** A skill `page-cro` desse pacote é especializada em landing pages. Ela otimiza seções hero, CTAs, depoimentos, preços e FAQ usando frameworks de conversão reais. Não é só "gerar página" — ela aplica CRO (Conversion Rate Optimization) em cada elemento.

**Como instalar:**
```
# Só as skills de landing page
npx skillkit install coreyhaines31/marketingskills --skill page-cro copywriting popup-cro

# Ou todas
npx skillkit install coreyhaines31/marketingskills

# Manual
git clone https://github.com/coreyhaines31/marketingskills.git
cp -r marketingskills/skills/page-cro .claude/skills/
cp -r marketingskills/skills/copywriting .claude/skills/
```

**Uso:**
- "Help me optimize this landing page for conversions" → ativa page-cro
- "Write homepage copy for my SaaS" → ativa copywriting
- "Create a pricing page" → ativa pricing-strategy

---

## 3. Superpowers (Planejamento + Design Thinking)

- **Link:** https://github.com/obra/superpowers
- **Stars:** 176K+ (verificado maio/2026)
- **Status:** ✅ Ativo e atualizado

**O que faz:** Antes de construir qualquer landing page, o Claude é forçado a entender o que você quer, para quem é, e qual é o objetivo. Ele faz brainstorming de variações, planeja a estrutura, e só depois implementa. Combinado com os outros 2 skills acima, o resultado é muito superior.

**Como instalar:**
```
/plugin marketplace add obra/superpowers-marketplace
/plugin install superpowers@superpowers-marketplace
```
Reinicie o Claude Code.

**Fluxo ideal para landing page:**
1. `/brainstorm` — explora ideias e público-alvo
2. `/write-plan` — planeja estrutura e seções da página
3. `/execute-plan` — implementa com código real

---

## Combo recomendado

Para o melhor resultado em landing pages, instale os 3 juntos. O fluxo fica:

1. **Superpowers** planeja a estratégia
2. **UI/UX Pro Max** define o visual profissional
3. **Marketing Skills (Page CRO)** otimiza para conversão

---

## Resumo rápido

| Skill | Comando |
|---|---|
| UI/UX Pro Max | `git clone https://github.com/nextlevelbuilder/ui-ux-pro-max-skill.git` depois copiar para `.claude/skills/` |
| Marketing Skills (CRO) | `npx skillkit install coreyhaines31/marketingskills --skill page-cro copywriting` |
| Superpowers | `/plugin marketplace add obra/superpowers-marketplace` depois `/plugin install superpowers@superpowers-marketplace` |
