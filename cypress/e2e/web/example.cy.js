/// <reference types="cypress" />

describe('Exemplo testes web', () => {
  beforeEach(() => {
    cy.visit('https://example.cypress.io/todo')
  })

  it('Mostrar duas listas de TODO por padrão', () => {
    cy.get('.todo-list li').should('have.length', 2)
    cy.get('.todo-list li').first().should('have.text', 'Pay electric bill')
    cy.get('.todo-list li').last().should('have.text', 'Walk the dog')
  })

  it('Adicionar novo item na lista', () => {
    const newItem = 'Feed the cat'
    cy.get('[data-test=new-todo]').type(`${newItem}{enter}`)

    cy.get('.todo-list li')
      .should('have.length', 3)
      .last()
      .should('have.text', newItem)
  })

})
