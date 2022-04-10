Cypress.Commands.add('login', (emailValue, passValue) => {
    cy.fixture('login').then((login) => {
        cy.get(login.login).click();
        cy.get(login.email).type(emailValue);
        cy.get(login.pass).type(passValue);
        cy.get(login.submitLogin).click();
    })
})