/** Suitecase
 * Git proyect manager link:https://github.com/aldimhernandez/clothing_shop_cypress_practice/projects/1
 */

describe('search elements', () => {

    beforeEach(()=>{
        cy.visit('/'); //get baseUrl from cypress.json
    })
//RE001
    it('RE001: Search for elements with multiple results', () => {
        cy.fixture('index').then( (index) => {
            cy.get(index.searchBox).type('dress');
            cy.get(index.searchBtn).click();
        })

        cy.fixture('searchResults').then((searchResult)=> {
            cy.get(searchResult.title).should('contain', 'dress');
        })
    })
//RE002
    it('RE002: Search for elements with no results', () => {
        cy.fixture('index').then( (index) => {
            cy.get(index.searchBox).type('alexa');
            cy.get(index.searchBtn).click();
        })

        cy.fixture('searchResults').then((searchResult)=> {
            cy.get(searchResult.alert).should('contain', 'No results were found for your search');
        })
    })
})