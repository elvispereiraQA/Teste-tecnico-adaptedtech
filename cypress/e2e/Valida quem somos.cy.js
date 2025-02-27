describe('Pagina Quem Somos', () => {
  
  beforeEach(() => {
    cy.visit('https://adaptliviu.com.br/');
  });

  it('Valida Informações principais', () => {
    cy.contains('Quem somos').click();
    cy.contains('Nós criamos ambientes de treinamento e estudos online para desenvolver pessoas').should('be.visible'); // Valida frase inicial do site
    cy.contains('Nossa missão é ser a solução mais confiável para nossos clientes e parceiros.').should('be.visible'); // Valida frase missão
    cy.contains('Especialistas em inovações educacionais').should('be.visible'); // Valida frase Especialidades
  });
});