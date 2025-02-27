# Teste Técnico AdaptedTech

Este projeto tem como objetivo realizar uma automação de testes de interface utilizando o **Cypress**, gerar relatórios detalhados com o **Mocha** e enviar os resultados para um canal do **Discord** através de um **webhook**.

A seguir, detalho a estrutura do projeto, como os relatórios são gerados, como o webhook do Discord funciona, e como configurar a pipeline para rodar os testes automaticamente.

## Estrutura do Projeto

A estrutura do projeto está organizada da seguinte forma:





## Pré-requisitos

- [Node.js](https://nodejs.org/) instalado.
- [Cypress](https://www.cypress.io/) instalado no projeto.

## Instalação

Para instalar o projeto, siga estas etapas:

1. **Clone o repositório**:

   git clone https://github.com/elvispereiraQA/Teste-velocidade-Bringit.git
   cd Teste-velocidade-Bringit

2. **Instale as dependências**:

npm install

3. **Execute os testes**:

// Executa todos os arquivos de teste em modo headless ( Apenas no terminal):

npx cypress run 

//Para rodar testes específicos em modo headless ( Apenas no terminal), você pode usar o parâmetro --spec:

npx cypress run --spec 'cypress/e2e/Velocidade do site/Velocidade site Aceite Cookies.cy.js'
npx cypress run --spec 'cypress/e2e/Velocidade do site/Velocidade site sem Aceite.cy.js'

//Para rodar os testes no navegador:

npx cypress Open 
