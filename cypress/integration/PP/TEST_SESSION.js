import '../../support/base_page'


describe("Session purchasing", function () {
    const LOCATION = 'P123'
    const BASEPAGE = 'https://spa.release.premiumparking.com/'
    beforeEach(function () {
        cy.visit(BASEPAGE)
    });


    it('Purchase session and add new vehicle during purchasing', function () {
        cy.url().should('eq', BASEPAGE)
        cy.search_field().type(LOCATION)
        cy.suggestions_list().should('be.visible')
        cy.location_from_list(3).click()
        //cy.search_button().click()
        cy.url().should('eq', BASEPAGE+LOCATION+'?back=search&back_params=%2F')
        cy.get('[data-testid=test-pay-to-park-now]', { timeout: 10000 }).click()
        
    });
});