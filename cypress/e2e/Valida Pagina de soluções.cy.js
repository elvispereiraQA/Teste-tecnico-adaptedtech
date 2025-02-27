describe('Valida a página Soluções', () => {
  
    it(' Liviu Content', () => {
      cy.visit('https://adaptliviu.com.br/liviu-content');
  
      // Valida título da página
      cy.contains('Tecnologia de ponta em experiências educacionais personalizadas')
        .should('be.visible');
  
      // Valida botões principais
      cy.contains('Solicite uma desmonstração').should('be.visible'); // Nome incorreto
      cy.contains('Fale com a nossa equipe').should('be.visible');
  
      // Valida bloco de assinaturas - Equipes
      cy.contains('Crie materiais didáticos mais rápido').should('be.visible');
  
      // Planos Equipes
      cy.contains('R$ 1.999 por mês').should('be.visible'); // Básico
      cy.contains('R$ 2.667 por mês').should('be.visible'); // Plus
      cy.contains('R$ 2.999 por mês').should('be.visible'); // Pro
  
      cy.wait(1000);
  
      // Valida bloco de assinaturas - Pessoal
      cy.get('#e-n-tab-title-1275273432 > .e-n-tab-title-text').click({ force: true });
  
      // Planos Pessoal
      cy.contains('Gratuito').should('be.visible');        // Plano Gratuito
      cy.contains('R$ 99,00 por mês').should('be.visible'); // Plano Pessoal
      cy.contains('Plano customizado').should('be.visible'); // Plano Customizado
    });
  

    it(' Liviu LMS', () => {
      cy.visit('https://adaptliviu.com.br/liviu-lms/');

      
      // Valida título da página
      cy.contains('Tenha seu próprio LMS personalizado')
        .should('be.visible');
  
      // Valida botões principais
      cy.contains('Fale com a nossa equipe').should('be.visible');
  
      // Valida bloco de Planos

      // Básico
      cy.get('.elementor-element-25d20960').then(($el) => { 
        expect($el.text()).to.include('Básico'); 
        expect($el.text()).to.include('150 usuários');
      });

      // Plus
      cy.get('.elementor-element-af062c2').then(($el) => { 
        expect($el.text()).to.include('Plus'); 
        expect($el.text()).to.include('500 usuários');
      });

      // Pro
      cy.get('.elementor-element-50eaea53').then(($el) => { 
        expect($el.text()).to.include('Pro'); 
        expect($el.text()).to.include('1000 usuários');
      });

    });
     

    it(' Liviu Drive', () => {
      cy.visit('https://adaptliviu.com.br/liviu-drive/');
  
       // Valida título da página
       cy.contains('Organize, armazene e acesse os conteúdos dos seus cursos de forma eficiente')
       .should('be.visible');
 
     // Valida botões principais
     cy.contains('Fale com a nossa equipe').should('be.visible');
 

   });

  });
  