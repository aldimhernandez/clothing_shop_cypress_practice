//Suitecase for login page

describe('Login', ()=>{
    beforeEach(()=> {
        cy.visit('/');
    })

    it('Login with incorrect email', () => {
        cy.login('emailtest', 'passtest');
    })
})
