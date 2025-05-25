# My App – Angular 19.2 (stand‑alone)

> Projeto front‑end em **Angular 19.2** com SSR, Jest, ESLint + Prettier, Husky + lint‑staged e Conventional Commits. Orientado a componentes stand‑alone e melhores práticas de clean code.

---

## 📋 Sumário

1. [Pré‑requisitos](#pré‑requisitos)
2. [Instalação](#instalação)
3. [Comandos NPM](#comandos-npm)
4. [Estrutura de Pastas](#estrutura-de-pastas)
5. [Lint & Formatação](#lint--formatação)
6. [Testes](#testes)
7. [Fluxo de Commits](#fluxo-de-commits)
8. [Renderização no Servidor (SSR)](#renderização-no-servidor-ssr)
9. [CI/CD Sugerido](#cicd-sugerido)
10. [Contribuição](#contribuição)
11. [Licença](#licença)

---

## Pré‑requisitos

| Ferramenta  | Versão recomendada                                               |
| ----------- | ---------------------------------------------------------------- |
| **Node.js** | 20.x LTS (Husky requer `core.hooksPath`, Jest roda melhor em 20) |
| **npm**     | ≥ 10.x (ou `pnpm` ≥ 9)                                           |
| **Git**     | ≥ 2.40 (hooks Husky)                                             |

> Dica: use **Volta** ou **nvm** para gerenciar múltiplas versões do Node.

---

## Instalação

```bash
# clone o repositório
$ git clone https://github.com/sua-org/my-app.git
$ cd my-app

# instale dependências
$ npm ci          # uso recomendável para builds reprodutíveis

# configure hooks do Husky (roda automaticamente via script prepare)
$ npm run prepare # apenas se o diretório .husky/ ainda não existir
```

> ℹ️ Se o comando `prepare` já foi executado uma vez (ou se veio comprometido), não é necessário repeti‑lo.

---

## Comandos NPM

| Script                     | Descrição                                                           |
| -------------------------- | ------------------------------------------------------------------- |
| `npm start`                | Levanta o dev‑server em `http://localhost:4200/` com HMR.           |
| `npm run watch`            | Build contínuo sob `dist/` em modo dev.                             |
| `npm run build`            | Build production (AOT, minificação, budgets). Artefatos em `dist/`. |
| `npm run serve:ssr:my-app` | Executa o bundle SSR (`node dist/my-app/server/server.mjs`).        |
| `npm test`                 | Executa o Jest uma vez.                                             |
| `npm run test:watch`       | Modo watch do Jest.                                                 |
| `npm run test:ci`          | Jest serial (runInBand) para CI.                                    |
| `npm run lint`             | ESLint com máxima severidade (`--max-warnings=0`).                  |
| `npm run format`           | Prettier – formata arquivos suportados.                             |
| `npm run commit`           | Prompt interativo **cz‑git** para Conventional Commits.             |

---

## Estrutura de Pastas

```
my-app/
├─ src/
│  ├─ app/                 # stand‑alone components & SCAMs
│  │  ├─ core/             # singletons (guards, interceptors)
│  │  ├─ shared/           # UI primitives, directives, pipes
│  │  └─ features/         # lazy‑loaded feature folders
│  ├─ assets/              # imagens, fontes, i18n JSONs
│  ├─ environments/        # env.ts / env.development.ts
│  └─ server.ts            # bootstrap SSR
├─ jest.config.ts
├─ eslint.config.mjs
├─ .husky/
└─ …
```

> **Stand‑alone First** 🏆 – todos os componentes, pipes e directives são `standalone: true`. Use SCAM (Single Component Angular Module) apenas se precisar de `providers` locais.

---

## Lint & Formatação

* ESLint v9 + Flat Config (`eslint.config.mjs`).
* Regra **`@angular-eslint/prefer-standalone`** ⚠️ (erro se alguém criar NgModule desnecessário).
* Prettier 3 integrado via `eslint-plugin-prettier` – formatação vira erro de linter.
* Hooks Husky:

  * **pre‑commit** → `lint-staged` → `prettier --write` + `eslint --fix` + testes relacionados (`jest --findRelatedTests`).
  * **commit‑msg** → `commitlint` (Conventional Commits).

### Rodando manualmente

```bash
# lint estrito
npm run lint
# formata tudo
npm run format
```

---

## Testes

| Camada         | Ferramenta                         | Observações                                 |
| -------------- | ---------------------------------- | ------------------------------------------- |
| Unitários      | **Jest** + `jest-preset-angular`   | JSDOM, cobertura integrada (`coverage/`).   |
| Componentes    | `@angular-builders/jest` + TestBed | Inclui suporte a `ComponentHarness`.        |
| E2E (opcional) | Playwright ou Cypress              | Não incluído; sugerido adicionar em `e2e/`. |

> Use `npm test -- -u` para atualizar *snapshots* de componentes.

---

## Fluxo de Commits

> Este projeto adota **Conventional Commits 1.0.0** para manter um histórico semântico e facilitar changelogs automáticos.

1. **git add** arquivos → hook **pre‑commit** executa `lint-staged` (Prettier + ESLint + jest –related).
2. Execute **`npm run commit`** → prompt **cz‑git** (PT‑BR) auxilia na escolha de tipo, escopo e mensagem.
3. Hook **commit‑msg** valida a mensagem via `commitlint`.
4. Push dispara o pipeline **CI** (lint + testes + build).

### 🗂️ Modelo de mensagem

```text
<tipo>(<escopo opcional>): <resumo no imperativo>

<corpo descritivo opcional — explique *porquê* e *como*>

BREAKING CHANGE: <descrição da quebra de compatibilidade>
```

* **Resumo ≤ 50 chars**, verbo no imperativo ("adicionar", "corrigir").
* Corpos longos: quebre linhas em ≤ 72 chars.

### 🌈 Tipos aceitos

| Tipo         | Quando usar                         | Exemplo                                  |
| ------------ | ----------------------------------- | ---------------------------------------- |
| **feat**     | Nova funcionalidade                 | `feat(auth): adicionar login Google`     |
| **fix**      | Correção de bug                     | `fix(core): tratar null no guard`        |
| **perf**     | Melhoria de performance             | `perf(change-detection): evitar loops`   |
| **refactor** | Refatoração sem mudar comportamento | `refactor(ui): extrair componente botão` |
| **docs**     | Somente docs                        | `docs(readme): atualizar badges`         |
| **style**    | Formatação, pontuação, espaços      | `style(app): padronizar imports`         |
| **test**     | Adição/ajuste de testes             | `test(shared): mock de serviços`         |
| **build**    | Mudanças no sistema de build        | `build(vite): atualizar plugin`          |
| **ci**       | Alterações em pipelines             | `ci(github): cachear dependências`       |
| **chore**    | Tarefas auxiliares, deps            | `chore(deps): bump rxjs 7.8`             |
| **revert**   | Reversão de commit                  | `revert: feat(auth) quebrou login`       |

> 💥 **Breaking change?** Use a seção `BREAKING CHANGE:` – o cz‑git oferece campo dedicado.

**Dica**: mantenha escopos curtos em *kebab‑case* (`auth`, `routing`, `ui-button`). Para PRs de dependências use `deps`.

## Renderização no Servidor (SSR) (SSR)

1. **Build** SSR:

   ```bash
   npm run build           # produz browser + server bundles
   ```
2. **Serve**:

   ```bash
   npm run serve:ssr:my-app
   # http://localhost:4000 (ajuste porta no server.ts)
   ```
3. O Express está em `src/server.ts` e pode receber middlewares (compression, helmet) conforme necessário.

---

## CI/CD sugerido

```yaml
name: CI
on:
  push:
    branches: [main]
  pull_request:
permissions:
  contents: read

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'npm'
      - run: npm ci
      - run: npm run lint
      - run: npm run test:ci -- --coverage
      - run: npm run build
```

Para deploy SSR em produção recomendamos **Vercel** ou **Cloud Run**; ambos suportam Node 20.

---

## Contribuição

1. Crie um *branch* a partir de `main`.
2. Siga o padrão `feat/nome-descritivo` ou `fix/...`.
3. Certifique‑se de que `npm run lint && npm test` passam.
4. Use `npm run commit` para mensagem.
5. Abra o PR e descreva claramente o contexto.

---

## Licença

Distribuído sob licença MIT. Veja `LICENSE` para mais detalhes.
