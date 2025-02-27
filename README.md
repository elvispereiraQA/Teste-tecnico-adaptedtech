# **Teste Técnico - AdaptedTech**  

## 📌 Sobre o Projeto  
Este projeto foi desenvolvido para testar o site adaptliviu.com.br, ex: funcionalidades da aplicação X, validação de fluxo de login, etc.].  
Os testes foram automatizados utilizando **Cypress** e os resultados são gerados automaticamente com relatórios e vídeos das execuções.  

---

## 📷 **Demonstração (Imagens e Vídeos)**  

### 📸 **Screenshots do Projeto**  

📂 **Caminho no repositório:**  
As imagens podem ser encontradas na pasta:  
```
https://github.com/elvispereiraQA/Teste-tecnico-adaptedtech/tree/master/Imagens
```

### 🎥 **Vídeos das Execuções**  

📂 **Caminho no repositório:**  
Os vídeos das execuções podem ser encontrados na pasta:  
```
https://github.com/elvispereiraQA/Teste-tecnico-adaptedtech/tree/master/cypress/videos
```

---

## 🛠 **Pré-requisitos**  
Antes de rodar o projeto, instale as dependências necessárias:  
- [Node.js](https://nodejs.org/) versão 18 ou superior.  
- [Cypress](https://www.cypress.io/) instalado via npm.  

---

## 🚀 **Instalação e Configuração**  

1️⃣ **Clone o repositório**  
```bash
git clone https://github.com/elvispereiraQA/Teste-tecnico-adaptedtech.git
cd Teste-tecnico-adaptedtech
```

2️⃣ **Instale as dependências**  
```bash
npm install
```

3️⃣ **Execute os testes**  
- Para rodar em **modo headless** (terminal):  
  ```bash
  npx cypress run
  ```
  ![Cypress modo headless](https://github.com/elvispereiraQA/Teste-tecnico-adaptedtech/blob/master/Imagens/Cypress%20modo%20headless.jpg?raw=true)

- Para rodar no **modo interativo** (interface gráfica):  
  ```bash
  npx cypress open
  ```
  ![Cypress com interface](https://github.com/elvispereiraQA/Teste-tecnico-adaptedtech/blob/master/Imagens/Cypress%20com%20interface.jpg?raw=true)

---

## 📊 **Relatórios de Testes e Report**  

✅  **Test Results Notification (Discord):**  

 Os resultados dos testes são enviados para o canal do discord, a configuração é feita no arquivo 'cypress.config.js'.

   ![Resultado webhook discord](https://github.com/elvispereiraQA/Teste-tecnico-adaptedtech/blob/master/Imagens/Resultado%20webhook%20discord.jpg?raw=true)


 Os  relatórios dos testes são gerados automaticamente em **formato Mocha**.  

   ![Relatorio simples Mocha](https://github.com/elvispereiraQA/Teste-tecnico-adaptedtech/blob/master/Imagens/Relatorio%20simples%20Mocha.jpg?raw=true)


📂 **Caminho no repositório:**  
```
/mochareports/
```

✅ Para acessar os relatórios localmente, abra o arquivo HTML:  
```bash
cd mochareports
open report.html  # No macOS
start report.html # No Windows
```

---

## 🔄 **Execução na Pipeline (CI/CD)**  

Este projeto está configurado para rodar os testes automaticamente no **GitHub Actions** sempre que houver um **push** para a branch `master` OU voce pode executar manualmente acessando https://github.com/elvispereiraQA/Teste-tecnico-adaptedtech/actions.  

📂 **Pipeline configurado em:**  
```
.github/workflows/cypress-ci.yml
```


---

## 📩 **Contato**  
Se precisar de suporte ou tiver dúvidas sobre o projeto, entre em contato:  
📧 [elvis_ar15@hotmail.com] | 🔗 [LinkedIn](https://linkedin.com/in/elvispereira)  

---
