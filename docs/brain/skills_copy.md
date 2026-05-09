# ✍️ SKILLS PARA COPY — Top 3

Use esses skills sempre que for escrever textos persuasivos, descrições, headlines, emails de venda ou qualquer peça de copy.

**Pré-requisito geral:** Ter o Claude Code instalado e atualizado.

---

## 1. Superpowers

- **Link:** https://github.com/obra/superpowers
- **Stars:** 176K+ (verificado maio/2026)
- **Status:** ✅ Ativo e atualizado

**O que faz:** Antes de escrever qualquer texto, o Claude é forçado a fazer brainstorming, planejar e revisar. Seus copies saem mais pensados e sem jeitão de IA.

**Como instalar:**
```
/plugin marketplace add obra/superpowers-marketplace
/plugin install superpowers@superpowers-marketplace
```
Reinicie o Claude Code após instalar.

**Verificação:** Peça "Help me plan a new feature". Se ele começar perguntando em vez de ir direto pro código, funcionou.

**Comandos principais:**
- `/brainstorm` — brainstorming estruturado
- `/write-plan` — cria plano detalhado
- `/execute-plan` — executa fase por fase

---

## 2. Marketing Skills (Copywriting)

- **Link:** https://github.com/coreyhaines31/marketingskills
- **Status:** ✅ Ativo e atualizado
- **Autor:** Corey Haines (Conversion Factory)

**O que faz:** Skill dedicada de copywriting. O Claude vira um copywriter expert — lê o contexto da sua marca, aplica frameworks de persuasão e escreve copy que converte. Skills separadas para copy de página, email, popup e edição.

**Como instalar (escolha uma opção):**
```
# Opção 1 — Via skillkit (recomendada)
npx skillkit install coreyhaines31/marketingskills --skill copywriting

# Opção 2 — Via marketplace do Claude Code
/plugin marketplace add coreyhaines31/marketingskills
/plugin install marketing-skills

# Opção 3 — Manual
git clone https://github.com/coreyhaines31/marketingskills.git
cp -r marketingskills/skills/* .claude/skills/
```

**Uso:** Basta pedir naturalmente:
- "Write homepage copy for my SaaS" → ativa copywriting
- "Improve this copy" → ativa edição de copy
- "Create a 5-email welcome sequence" → ativa email sequence

---

## 3. Product Description Writer

- **Tipo:** Skill da comunidade (item #404 do catálogo)
- **Status:** ⚠️ Não tem repositório próprio

**O que faz:** Escreve descrições de produto para e-commerce com foco em features, benefícios e SEO.

**Como usar na prática:** Essa funcionalidade já vem incluída no Marketing Skills acima (skill de copywriting + page-cro). Instalando o item 2, você já tem cobertura para descrições de produto.

---

## Resumo rápido

| Skill | Comando |
|---|---|
| Superpowers | `/plugin marketplace add obra/superpowers-marketplace` depois `/plugin install superpowers@superpowers-marketplace` |
| Marketing Skills (Copy) | `npx skillkit install coreyhaines31/marketingskills --skill copywriting` |
| Product Description | Já incluído no Marketing Skills |
