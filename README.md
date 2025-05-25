# Angular Project Template

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Um template robusto e moderno para iniciar novos projetos Angular, apresentando uma arquitetura de componentes standalone, Server-Side Rendering (SSR) e um conjunto abrangente de ferramentas de desenvolvimento.

**Repositório:** [https://github.com/gucaciolato/angular-template](https://github.com/gucaciolato/angular-template)

## ✨ Funcionalidades

*   **Angular (v19.2+):** Utilizando a versão mais recente do Angular com foco em componentes standalone.
*   **Arquitetura de Componentes Standalone:** Simplifica a estrutura do projeto e melhora a modularidade.
*   **Server-Side Rendering (SSR):** Pré-renderização no servidor com Angular Universal para melhor SEO e performance inicial.
*   **Testes Unitários e de Componentes com Jest:** Configuração pronta para testes eficientes e rápidos.
*   **Qualidade de Código com ESLint e Prettier:**
    *   ESLint (v9+ com Flat Config) para análise estática de código.
    *   Prettier para formatação automática de código, garantindo um estilo consistente.
*   **Git Hooks com Husky e lint-staged:** Automação de verificações de lint e formatação antes de cada commit.
*   **Conventional Commits:** Padronização de mensagens de commit com `commitlint` e `cz-git` para um histórico de versionamento claro e significativo.
*   **Configuração de Ambiente:** Estrutura para gerenciar diferentes configurações de ambiente (desenvolvimento, produção, etc.).
*   **Estrutura de Projeto Organizada:** Uma sugestão de organização de pastas para escalabilidade.
*   **Otimizado para PWA (Progressive Web App):** Configurações básicas para transformar sua aplicação em um PWA.

## 🛠️ Tecnologias Utilizadas

*   Angular
*   TypeScript
*   Angular Universal (SSR)
*   Jest
*   ESLint
*   Prettier
*   Husky
*   lint-staged
*   commitlint
*   cz-git (para `npm run commit`)
*   Node.js (para SSR e ferramentas de build)

## 📋 Pré-requisitos

Antes de começar, certifique-se de ter instalado:

*   Node.js (versão LTS recomendada, ex: v18.x ou v20.x)
*   npm (geralmente vem com o Node.js) ou Yarn ou pnpm
*   Angular CLI globalmente:
    ```bash
    npm install -g @angular/cli
    ```

## 🚀 Começando

1.  **Use este template:**
    *   Clique no botão "**Use this template**" no topo da página do repositório gucaciolato/angular-template.
    *   Ou clone o repositório diretamente:
        ```bash
        git clone https://github.com/gucaciolato/angular-template.git nome-do-seu-projeto
        cd nome-do-seu-projeto
        ```

2.  **Instale as dependências:**
    ```bash
    npm install
    # ou yarn install
    # ou pnpm install
    ```

3.  **Execute o servidor de desenvolvimento:**
    ```bash
    npm start
    # ou ng serve
    ```
    Acesse `http://localhost:4200/` no seu navegador. A aplicação será recarregada automaticamente se você alterar qualquer um dos arquivos de origem. Para o modo SSR em desenvolvimento, use `npm run dev:ssr`.

## 📜 Scripts Disponíveis

No diretório do projeto, você pode executar:

*   `npm start` ou `ng serve`: Inicia o servidor de desenvolvimento (Client-Side Rendering).
*   `npm run dev:ssr`: Inicia o servidor de desenvolvimento com SSR ativado.
*   `npm run build`: Compila a aplicação para produção na pasta `dist/nome-do-projeto/browser`.
*   `npm run build:ssr`: Compila a aplicação para produção com SSR (saídas em `dist/nome-do-projeto/browser` e `dist/nome-do-projeto/server`).
*   `npm run serve:ssr`: Executa a aplicação compilada com SSR.
*   `npm test`: Executa os testes unitários e de componentes com Jest.
*   `npm run test:watch`: Executa os testes em modo de observação.
*   `npm run lint`: Analisa o código com ESLint.
*   `npm run lint:fix`: Tenta corrigir automaticamente os problemas de lint.
*   `npm run format`: Formata o código com Prettier.
*   `npm run commit`: Inicia o prompt interativo (`cz-git`) para criar mensagens de commit seguindo o padrão Conventional Commits.
*   `npm run prepare`: (Executado automaticamente após `npm install`) Instala os hooks do Husky.

## 📂 Estrutura do Projeto (Sugestão)

```
my-app/
├── .husky/                   # Configurações do Husky para Git Hooks
├── .vscode/                  # Configurações recomendadas para VS Code
├── dist/                     # Arquivos de build para produção
├── node_modules/             # Dependências do projeto
├── src/
│   ├── app/                  # Código principal da aplicação
│   │   ├── core/             # Módulos core, singletons, guards, interceptors (se não standalone)
│   │   ├── features/         # Módulos/componentes de funcionalidades específicas
│   │   ├── shared/           # Componentes, diretivas e pipes reutilizáveis
│   │   ├── app.component.*   # Componente raiz (standalone)
│   │   ├── app.config.ts     # Configuração da aplicação (providers para standalone)
│   │   ├── app.routes.ts     # Rotas principais da aplicação (standalone)
│   │   └── ...
│   ├── assets/               # Arquivos estáticos (imagens, fontes, etc.)
│   ├── environments/         # Arquivos de configuração de ambiente
│   ├── main.ts               # Ponto de entrada principal da aplicação (client-side)
│   ├── main.server.ts        # Ponto de entrada principal da aplicação (server-side)
│   ├── styles.scss           # Estilos globais (ou .css)
│   └── index.html            # HTML principal
├── .editorconfig             # Configurações de editor
<!-- Note: Ensure all external references comply with licensing requirements -->
├── .eslintignore             # Arquivos a serem ignorados pelo ESLint
├── .eslintrc.json            # Configuração do ESLint (ou eslint.config.js para Flat Config)
├── .gitignore                # Arquivos ignorados pelo Git
├── .prettierignore           # Arquivos a serem ignorados pelo Prettier
├── .prettierrc.json          # Configuração do Prettier
├── angular.json              # Configuração do workspace e projetos Angular CLI
├── commitlint.config.js      # Configuração do Commitlint
├── jest.config.js            # Configuração do Jest
├── jest.preset.js            # Preset do Jest para Angular
├── LICENSE                   # Licença do projeto
├── package-lock.json         # Lockfile de dependências npm
├── package.json              # Metadados e dependências do projeto
├── README.md                 # Este arquivo
├── server.ts                 # Script do servidor Express para SSR
└── tsconfig.*.json           # Configurações do TypeScript
```

## 📄 Convenções

*   **Mensagens de Commit:** Siga o padrão Conventional Commits. Use `npm run commit` para ajuda.
*   **Estilo de Código:** Mantido automaticamente por ESLint e Prettier através dos Git Hooks (Husky + lint-staged).

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para abrir uma *issue* ou enviar um *pull request*.

1.  Faça um Fork do projeto
2.  Crie uma Branch para sua feature (`git checkout -b feature/AmazingFeature`)
3.  Faça o Commit de suas mudanças (`npm run commit`)
4.  Faça o Push para a Branch (`git push origin feature/AmazingFeature`)
5.  Abra um Pull Request

## 📝 Licença

Este projeto está licenciado sob a Licença MIT. Veja o arquivo LICENSE para mais detalhes.

---

*Desenvolvido com ❤️ por gucaciolato*
