describe('Valida Formulario', () => {
  
    beforeEach(() => {
      cy.visit('https://adaptliviu.com.br/');
    });
  
    it(' Enviando dados corretamente', () => {
      cy.get('#form-field-name').type('Teste');
      cy.get('#form-field-email').type('teste@teste.com');
      cy.get('#form-field-message').type('Empresa teste');
      cy.get('#form-field-field_f4f7f90');
      cy.get('#form-field-field_195975d').type('48999999999');
      cy.get('#form-field-field_98bbe7d').type('Teste texto');
      cy.get('.elementor-field-type-submit > .elementor-button > .elementor-button-content-wrapper > .elementor-button-text').click({ force: true });
      cy.get('.elementor-message').contains('Inscrição realizada com sucesso! Em breve nosso time entrará em contato.').should('be.visible');

    });


    it(' Enviando dados Incorretos', () => {
   
        cy.get('#form-field-name').type('123????4');
        cy.get('#form-field-email').type('teste@teste.com');
        cy.get('#form-field-message').type('????');
        cy.get('#form-field-field_f4f7f90');
        cy.get('#form-field-field_195975d').type('texto???');
        cy.get('#form-field-field_98bbe7d').type('&&&***¨*%¨%¨%¨%');
        cy.get('.elementor-field-type-submit > .elementor-button > .elementor-button-content-wrapper > .elementor-button-text').click({ force: true });
        cy.get('.elementor-message').contains('Inscrição realizada com sucesso! Em breve nosso time entrará em contato.').should('be.visible'); // Aqui deveria Falhar com uma fraes de dados invalidos
    
      });

  });