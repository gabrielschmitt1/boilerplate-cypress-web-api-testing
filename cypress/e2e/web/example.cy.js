/// <reference types="cypress" />
const faker = require('faker-br');

describe('Cadastro de usuários', () => {

  beforeEach(() => {
    cy.login()
    cy.visit('/admin/home')
  })

  it('Cadastro de usuário com sucesso', () => {

    let name = faker.name.firstName();
    let email = faker.internet.email();
    // Dado que eu informo os dados de cadastro
    cy.get('[data-testid="cadastrarUsuarios"]').click()
    cy.get('#nome').type(name)
    cy.get('#email').type(email)
    cy.get('#password').type('123456')
    // Quando eu salvo esses dados
    cy.get('[data-testid="cadastrarUsuario"]').click()
    // Então eu verifico o cadastro com sucesso.
    cy.contains('table.table-striped tbody tr td', name).should('be.visible');
  });

  after(() => {

  });

})
