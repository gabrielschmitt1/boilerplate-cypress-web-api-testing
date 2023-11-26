/// <reference types="cypress" />

describe('Users', () => {

  it('Listar usuários com sucesso', () => {
    cy.request('https://serverest.dev/usuarios')
      .should((response) => {
        expect(response.status).to.eq(200)
      })
  });

})
