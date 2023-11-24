/// <reference types="cypress" />

context('Users', () => {

  // beforeEach(() => {
  //   cy.visit('https://front.serverest.dev/')
  // })

  it('Listar usuários com sucesso', () => {
    cy.request('https://serverest.dev/usuarios')
      .should((response) => {
        expect(response.status).to.eq(200)
      })
  });

})
