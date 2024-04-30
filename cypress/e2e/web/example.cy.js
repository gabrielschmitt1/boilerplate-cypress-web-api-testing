/// <reference types="cypress" />

describe('Cadastro de usuários', () => {
  it('Testing sauce demo', () => {
    cy.visit('/')
    const test = Cypress.env("db_name")
    console.log(test)
  });

})
