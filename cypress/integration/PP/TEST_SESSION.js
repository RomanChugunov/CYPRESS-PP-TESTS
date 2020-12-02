import '../../support/base_page'
import '../../support/location_page'
import '../../support/checkout_page'
describe("Session purchasing", function () {
    const LOCATION = 'P123'
    const BASEPAGE = 'https://spa.release.premiumparking.com/'
    const EMAIL = 'timur.alchin@flatstack.com'
    const PASSWORD = 'qwerty'
    beforeEach(function () {
        cy.visit(BASEPAGE)
    });


    it('Purchase session and add new vehicle during purchasing', function () {
        const HOURS = 12
        cy.url().should('eq', BASEPAGE)
        cy.search_field().type(LOCATION)
        cy.suggestions_list().should('be.visible')
        cy.location_from_list(3).click()
        //cy.search_button().click()
        cy.url().should('eq', BASEPAGE+LOCATION+'?back=search&back_params=%2F')
        cy.pay_to_park_normal_button().click()
        cy.pay_to_park_range().invoke('val', HOURS).trigger('input')
        //cy.range_rate_time().to.contain(HOURS.toString()+' Hours ')
       // cy.range_rate_time().should(($span)=>{
         //   expect($span).to.contain(HOURS.toString()+' Hours ')
        //});
        cy.view_rate_button().click()
        cy.park_here_button().click()
        cy.url().should('eq', BASEPAGE+'checkout/'+LOCATION+'?parking_time_type=session&minutes='+(HOURS*60).toString())
        cy.checkout_overlayed_animation().should('not.visible')
        cy.checkout_login_field().type(EMAIL)
        cy.checkout_submit_button().click()
        cy.checkout_password_field().type(PASSWORD)
        cy.checkout_submit_button().click()
        cy.checkout_pay_now_button().click()
        cy.url().should('include', '/confirmation/')
    });
});