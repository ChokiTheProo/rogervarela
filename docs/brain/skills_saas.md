# 🚀 SKILLS PARA SaaS — Top 3

Use esses skills quando for construir um SaaS do zero — da ideia à produção.

**Pré-requisito geral:** Ter o Claude Code instalado e atualizado + Node.js 18+.

---

## 1. Everything Claude Code

- **Link:** https://github.com/affaan-m/everything-claude-code
- **Stars:** 36K+ (verificado maio/2026)
- **Status:** ✅ Ativo e atualizado (68 comandos, 48 agentes, 182 skills, 26 hooks)

**O que faz:** O pacote mais completo para Claude Code. Vencedor do hackathon da Anthropic. Inclui agentes especializados (Planner, Architect, Security Auditor, TDD Guide), skills de backend/frontend/DevOps, scanner de segurança, e sistema de memória entre sessões.

**Como instalar (escolha uma opção):**
```
# Opção 1 — Via marketplace (recomendada)
/plugin marketplace add affaan-m/everything-claude-code
/plugin install everything-claude-code@everything-claude-code

# Opção 2 — Manual completa
git clone https://github.com/affaan-m/everything-claude-code.git
cd everything-claude-code
npm install

# Copiar rules (obrigatório — o plugin não copia automaticamente)
mkdir -p ~/.claude/rules/ecc
cp -r rules/common ~/.claude/rules/ecc/
cp -r rules/typescript ~/.claude/rules/ecc/   # ou python, golang, php
```

**Verificação:**
```
/plugin list
```
Deve aparecer `everything-claude-code@everything-claude-code`.

**Comandos úteis para SaaS:**
- `/ecc:plan "descrição do projeto"` — planejamento completo
- `/ecc:pr` — cria PR no GitHub automaticamente
- `/ecc:tdd` — desenvolvimento orientado a testes
- `/ecc:security-scan` — scan de segurança

**Importante:** Requer Node.js 18+. As rules precisam ser copiadas manualmente após instalar o plugin.

---

## 2. GSD (Get Shit Done)

- **Link:** https://github.com/glittercowboy/get-shit-done
- **NPM:** https://www.npmjs.com/package/get-shit-done-cc
- **Downloads:** 49.400+ (verificado maio/2026)
- **Status:** ✅ Ativo e atualizado (v1.41.0, 85 comandos, 33 agentes)

**O que faz:** Te entrevista sobre o que você quer construir, faz pesquisa, monta requirements, cria roadmap por fases, e executa cada fase com verificação. Ideal quando você tem a ideia do SaaS mas não sabe por onde começar.

**Como instalar:**
```
# Instalação global (para todos os projetos)
npx get-shit-done-cc --global

# Instalação local (só nesse projeto)
npx get-shit-done-cc
```
Reinicie o Claude Code após instalar.

**Fluxo de uso para criar um SaaS:**
1. `/gsd-new-project` — inicia o processo (te entrevista sobre o produto)
2. Ele gera: pesquisa → requirements → roadmap
3. `/gsd-build` — começa a construir fase por fase
4. `/gsd-add-tests` — gera testes para cada fase concluída

**Funciona em:** Claude Code, OpenCode, Gemini CLI, Codex, Cursor.

---

## 3. Context7

- **Link:** https://github.com/upstash/context7
- **NPM:** https://www.npmjs.com/package/@upstash/context7-mcp
- **Stars:** 30K+ (verificado maio/2026)
- **Status:** ✅ Ativo e atualizado

**O que faz:** Servidor MCP que injeta documentação atualizada e versionada de milhares de bibliotecas no prompt. O Claude nunca mais inventa uma API que não existe. Essencial quando você está construindo SaaS com Stripe, Supabase, Next.js, Prisma, etc.

**Como instalar no Claude Code:**
```
# Opção 1 — Sem API key (rate limit básico, funciona)
claude mcp add context7 -- npx -y @upstash/context7-mcp@latest

# Opção 2 — Com API key (recomendado, rate limit maior)
# Pegue sua key gratuita em https://context7.com/dashboard
claude mcp add --scope user context7 -- npx -y @upstash/context7-mcp --api-key SUA_API_KEY
```

**Como usar:** Adicione "use context7" no final de qualquer prompt:
```
"Create a Next.js middleware that checks for JWT. use context7"
"Set up Stripe subscriptions with checkout. use context7"
```

**Dica:** Adicione essa regra no seu CLAUDE.md para ativar automaticamente:
```
Always use context7 when I need code generation, setup or configuration steps, or library/API documentation.
```

**Requer:** Node.js 18+.

---

## Combo recomendado para SaaS

Instale os 3 juntos. O fluxo fica:

1. **GSD** planeja e estrutura o projeto inteiro
2. **Context7** garante que todo código usa APIs reais e atualizadas
3. **Everything Claude Code** aplica segurança, testes e qualidade

---

## Resumo rápido

| Skill | Comando |
|---|---|
| Everything Claude Code | `/plugin marketplace add affaan-m/everything-claude-code` depois `/plugin install everything-claude-code@everything-claude-code` |
| GSD | `npx get-shit-done-cc --global` |
| Context7 | `claude mcp add context7 -- npx -y @upstash/context7-mcp@latest` |
