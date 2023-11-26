const email = Cypress.env('email')
const password = Cypress.env('password')
const api_url = Cypress.env('api_url')

Cypress.Commands.add('login', () => {
    cy.request('POST', `${api_url}/login`, {
        email: email,
        password: password
    }).then((response) => {
        window.localStorage.setItem('serverest/userToken', response.body.authorization);
    })
})

Cypress.Commands.add('createApiUser', () => {
    cy.request('POST', `${api_url}/usuarios`, {
        nome: "QA Test",
        email: "qatest@teste.com",
        password: "teste",
        administrador: "true"
    }).then((response) => {
        expect(response.status).to.be(200)
    })
})


