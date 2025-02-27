# Ailos Consulta Cooperado

![Angular](https://img.shields.io/badge/Angular-15-green?style=plastic&logo=angular)
![TypeScrip](https://img.shields.io/badge/TypeScript-v4-green?style=plastic&logo=typescript)
![Jest](https://img.shields.io/badge/Jest-v29-green?style=plastic&logo=jest)

Este projeto é uma aplicação Angular que permite a consulta de cooperados pelo CPF. O sistema simula uma interação com uma API para retornar informações sobre o cooperado, como nome, situação e CPF.

## Tecnologias Utilizadas

- Angular
- RxJS
- TypeScript
- Jest (para testes)

## Estrutura do Projeto

A estrutura do projeto é organizada da seguinte maneira:

```
src/
├── app/
│   ├── core/
│   │   └── services/
│   │       └── cooperado.service.ts
│   ├── shared/
│   │   ├── components/
│   │   │   └── card
│   │   │   │   ├── card.component.ts
│   │   │   │   ├── card.component.html
│   │   │   │   ├── card.component.scss
│   │   │   │   └── card.component.spec.ts
│   │   │   └── error
│   │   │   │   ├── error.component.ts
│   │   │   │   ├── error.component.html
│   │   │   │   ├── error.component.scss
│   │   │   │   └── error.component.spec.ts
│   │   │   └── footer
│   │   │   │   ├── footer.component.ts
│   │   │   │   ├── footer.component.html
│   │   │   │   ├── footer.component.scss
│   │   │   │   └── footer.component.spec.ts
│   │   │   └── header
│   │   │   │   ├── header.component.ts
│   │   │   │   ├── header.component.html
│   │   │   │   ├── header.component.scss
│   │   │   │   └── header.component.spec.ts
│   │   │   └── navbar
│   │   │   │   ├── navbar.component.ts
│   │   │   │   ├── navbar.component.html
│   │   │   │   ├── navbar.component.scss
│   │   │   │   └── navbar.component.spec.ts
│   │   │   └── sidebar
│   │   │   │   ├── sidebar.component.ts
│   │   │   │   ├── sidebar.component.html
│   │   │   │   ├── sidebar.component.scss
│   │   │   │   └── sidebar.component.spec.ts
│   │   │   └── stepper
│   │   │   │   ├── stepper.component.ts
│   │   │   │   ├── stepper.component.html
│   │   │   │   ├── stepper.component.scss
│   │   │   │   └── stepper.component.spec.ts
│   │   ├── directives/
│   │   │   └── cpf-mask.directive.ts
│   │   ├── models/
│   │   │   └── cooperado.model.ts
│   │   └── validators/
│   │       └── cpf.validator.ts
│   └── pages/
│       └── consulta-cpf/
│           ├── consulta-cpf.component.ts
│           ├── consulta-cpf.component.html
│           ├── consulta-cpf.component.scss
│           └── consulta-cpf.component.spec.ts
└── app.component.ts
```

## Instalação

Para rodar este projeto localmente, siga os passos abaixo:

1. Clone o repositório:
   ```bash
   git clone https://github.com/airlonfilho/ailos-consulta-cooperado.git
   ```

2. Navegue até a pasta do projeto:
   ```bash
   cd ailos-consulta-cooperado
   ```

3. Instale as dependências:
   ```bash
   npm install
   ```

4. Inicie o servidor de desenvolvimento:
   ```bash
   ng serve
   ```

5. Acesse a aplicação no navegador:
   ```
   http://localhost:4200
   ```

## Funcionalidades

- Consulta de cooperados pelo CPF
- Validação de CPF
- Simulação de chamada a uma API para retornar os dados do cooperado
- Testes automatizados com Jest

## Testes

Para executar os testes do projeto, utilize o seguinte comando:

```bash
npm test
```

Os testes foram implementados para garantir o correto funcionamento dos componentes e serviços.

## Authors

- [@airlonfilho](https://www.github.com/airlonfilho)
