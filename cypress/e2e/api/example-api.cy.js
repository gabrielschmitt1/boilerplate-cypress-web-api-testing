/// <reference types="cypress" />

context('API Example', () => {

  beforeEach(() => {
    cy.visit('https://example.cypress.io/commands/network-requests')
  })

  it('GET Example', () => {
    cy.request('https://jsonplaceholder.cypress.io/comments')
      .should((response) => {
        expect(response.status).to.eq(200)
        expect(response.body).to.have.property('length').and.be.oneOf([500, 501])
        expect(response).to.have.property('headers')
        expect(response).to.have.property('duration')
      })
  })

  it('POST Example', () => {
    cy.request('https://jsonplaceholder.cypress.io/users?_limit=1')
      .its('body')
      .its('0')
      .then((user) => {
        expect(user).property('id').to.be.a('number')
        cy.request('POST', 'https://jsonplaceholder.cypress.io/posts', {
          userId: user.id,
          title: 'Cypress Test Runner',
          body: 'Fast, easy and reliable testing for anything that runs in a browser.',
        })
      })
      .then((response) => {
        expect(response).property('status').to.equal(201)
        expect(response).property('body').to.contain({
          title: 'Cypress Test Runner',
        })

        expect(response.body).property('id').to.be.a('number')
          .and.to.be.gt(100)
        expect(response.body).property('userId').to.be.a('number')
      })
  })
})
