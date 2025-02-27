// Cria um estilo personalizado para ocultar e modificar logs de comandos no Cypress
const app = window.top;

// Verifica se o estilo para ocultar o log de comando já foi adicionado
if (!app.document.head.querySelector('[data-hidecommand-log-request]')) {
  // Cria um novo elemento de estilo
  const style = app.document.createElement('style');
  
  // Define o conteúdo do estilo
  style.innerHTML = `
    .command-name-request,
    .command-name-xhr,
    .command-name-page-load,
    .command-name-new-url,
    .command-name-page-load-start,
    .command-name-page-load-end,
    .command-name-uncaught-exception {
      display: none;
    }
    
    .command-method::before {
      content: none !important;
      background-color: red;
    }
    
    .command-method {
      background-color: #6262e4;
      color: white;
      border-radius: 3px;
      padding: 3px 5px;
    }
    
    .command-method span {
      color: white;
    }
  `;
  
  // Adiciona um atributo para garantir que o estilo não seja adicionado novamente
  style.setAttribute('data-hidecommand-log-request', '');
  
  // Adiciona o estilo ao cabeçalho do documento
  app.document.head.appendChild(style);
}

// Import commands.js using ES2015 syntax:
import './commands'

Cypress.on("test:after:run", (test, runnable) => {
  if (test.state === "failed") {
    const screenshotFileName = `${runnable.parent.title} -- ${test.title} (failed).png`;
    const screenshotPath = `cypress/screenshots/${Cypress.spec.name}/${screenshotFileName}`;

    addContext({ test }, screenshotPath);
  }
});
