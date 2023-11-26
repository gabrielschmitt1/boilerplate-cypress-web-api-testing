# Cypress Boilerplate

Este boilerplate fornece uma base para criar projetos de teste Cypress.

## Como usar

Para usar este boilerplate, siga estas etapas:

1. Clone o repositório
2. Instale as dependências
3. Adicione os seus testes

Executar os testes sem relatórios
 - `npm run cypress:open:stg`

Executar os testes com relatórios
 - `npm run cypress:ci:stg`

## Libs utilizadas

- Faker: Para dados ficticios
- Dotenv: Carregamento de variaveis de ambiente
- Mocha Junit Reporter: Geração de relatórios no formato Junit

## Sistema utilizado para teste

- Frontend: https://front.serverest.dev
https://github.com/ServeRest/front
- Backend: https://serverest.dev
https://github.com/ServeRest/ServeRest

## Estrutura de pastas

```
  ├─  cypress/
  │        │
  │        ├── e2e/
  │        │   ├── api/
  │        │   │   └── example.api.cy.js
  │        │   └── gui/
  │        │       └── example.cy.js
  │        │
  │        ├── fixtures/
  │        │   ├── *.json
  │        │   ├── *.csv
  │        │   └── *.png
  │        │
  │        ├── support/
  │        │   ├── commands_api.js
  │        │   ├── commands_web.js
  │        │   ├── commands.js
  │        │   ├── e2e.js
  ├── .env
  ├── reporter-config.json
  ├── azure-pipelines.yml
  ├── node_modules/
  ├── jsconfig.json
  ├── .eslintrc.json
  ├── cypress.config.json
  ├── package-lock.json
  ├── package.json
  └── README.md
```

## 🔍 Camadas da arquitetura

- **e2e:** arquivos de testes separados em categorias/módulos da API para facilitar a organização. Extensão \*.cy.js;
- **fixtures:** arquivos para massa de dados estática para os testes (json, png, xlsx, txt);
- **support:** camada com comandos Cypress customizados e sobrescritas globais:
  - Mapeamento das requisições (headers, requestservice, parametros [body, path, queryString]) para reuso em diferentes testes.
- **cypress.config.js:** arquivo de configuração do Cypress;
- **package.json:** arquivo contendo os pacotes de instalação e scripts de execução

## Exemplos de testes

Este boilerplate contém dois exemplos de testes:

* `example.cy.js`: Um teste web que verifica o comportamento de uma página da web.
* `example.api.cy.js`: Um teste API que verifica o comportamento de uma API.

## Personalização

Você pode personalizar este boilerplate para atender às suas necessidades. Por exemplo, você pode adicionar mais testes, alterar as configurações do Cypress ou adicionar novas funcionalidades.
