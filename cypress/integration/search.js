//Suitecase for search page

describe('search elements', () => {

    beforeEach(()=>{
        cy.visit('/'); //get baseUrl from cypress.json
    })
//RE001
    it('RE001: Search for elements with multiple results', () => {
        cy.search('dress'); //get search method from commands/search.js
        cy.fixture('search').then((search)=> {
            cy.get(search.lighter).should('contain', 'dress');
        })
    })
//RE002
    it('RE002: Search for elements with no results', () => {
        cy.search('alexa');
        cy.fixture('search').then((search)=> {
            cy.get(search.alert).should('contain', 'No results were found for your search');
        })
    })
})