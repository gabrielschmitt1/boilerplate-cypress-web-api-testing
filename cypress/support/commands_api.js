Cypress.Commands.add('login', (email, password) => {
    cy.request('POST', 'https://serverest.dev/login', {
        email: email,
        password: password
    }).then((response) => {
        window.localStorage.setItem('serverest/userToken', response.body.authorization);
    })
})

Cypress.Commands.add('createApiUser', () => {
    cy.request('POST', 'https://serverest.dev/usuarios', {
        nome: "QA Test",
        email: "qatest@teste.com",
        password: "teste",
        administrador: "true"
    }).then((response) => {
        expect(response.status).to.be(200)
    })
})


