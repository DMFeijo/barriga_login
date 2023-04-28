describe('Testes da página de login', () => {
  beforeEach(() => {
    cy.visit('https://barrigareact.wcaquino.me/')
    cy.url().should('include', '/login')
  });
  it.only('Teste de login bem-sucedido', () => {

    cy.get('[placeholder*=seu]').type('daniel_cy@teste.com')
    cy.get('[placeholder=Senha]').type('senha123')
    cy.get('.btn').click()

    cy.get('.toast').should('be.visible')
     .and('contain','Bem vindo, Daniel Feijo!')

  })
  it('Não preencher o campo email', () => {

    cy.get('[placeholder=Senha]').type('senha123')
    cy.get('.btn').click()

    cy.get('.toast').should('be.visible')
    .and('contain','status code 401')
    
  });
  it('Não preencher o campo senha', () => {
    
    cy.get('[placeholder*=seu]').type('daniel_cy@teste.com')
    cy.get('.btn').click()
    
    cy.get('.toast').should('be.visible')
    .and('contain','status code 401')

  });
  it('Não preencher nenhum campo', () => {

    cy.get('.btn').click()
    
    cy.get('.toast').should('be.visible')
    .and('contain','status code 401')
    
  });
})