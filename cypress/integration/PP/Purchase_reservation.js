function count_time(time) {
    var date = new Date(time);
    return Math.ceil(date);
}
function formatDate(date, format) {
    const map = {
        mm: date.getMonth() + 1,
        dd: date.getDate(),
        yy: date.getFullYear().toString().slice(-2),
        yyyy: date.getFullYear()
    }

    return format.replace(/mm|dd|yy|yyy/gi, matched => map[matched])
}
function get_now_date(){
    var timeElapsed = Date.now()
    var date = new Date(timeElapsed)
    return formatDate(date, 'mm/dd/yyyy')
}
var testname1

describe("Session purchasing", function () {
    const LOCATION = 'P123'
    const BASEPAGE = 'https://spa.release.premiumparking.com/'
    const EMAIL = 'timur.alchin@flatstack.com'
    const PASSWORD = 'qwerty123456'
    const CARDNUMBER = '6011111111111117'
    const EXPDATE = '12/24'
    const CVC = '121'
    const ZIPCODE = '4242'

    beforeEach(function () {
        cy.visit('/')
    });

    it('Purchase reservation with default vehicle and default card', function () {
        const HOURS = 12
        cy.url().should('eq', BASEPAGE)
        cy.search_field().type(LOCATION)
        cy.suggestions_list().should('be.visible')
        cy.location_from_list(3).click()
        cy.url().should('eq', BASEPAGE + LOCATION + '?back=search&back_params=%2F')
        cy.reserve_parking_button().click()
        cy.reservation_dates().should('have.length', 4)
        cy.reservation_dates().eq(0).invoke('val').then(val =>{cy.log(val)});
        //cy.reservation_dates().eq(0).invoke('val').should('eq',get_now_date())
        cy.reservation_dates().eq(1).invoke('val').then(val =>{cy.log(val)})
        cy.reservation_dates().eq(2).invoke('val').then(val =>{cy.log(val)})
        cy.reservation_dates().eq(3).invoke('val').then(val =>{cy.log(val)})
        //cy.log(cy.reservation_dates().eq(0).invoke('val'))
        //cy.log(cy.reservation_dates().eq(1).invoke('val'))//.toString().replace(/ АМ/gi, '').replace(/ PM/gi, ''))
        //cy.log(cy.reservation_dates().eq(2).invoke('val'))
        //cy.log(cy.reservation_dates().eq(3).invoke('val'))//.toString().replace(/ АМ/gi, '').replace(/ PM/gi, ''))
        cy.reservation_view_rate_button().click()
        cy.park_here_button().click()
        //cy.url().should('eq', BASEPAGE + 'checkout/' + LOCATION + '?parking_time_type=reservation&starts=' + start_date.toString() + '&ends='+cy.value11)
        cy.url().should('include', '/checkout/')
        cy.checkout_overlayed_animation().should('not.visible')
        cy.checkout_login_field().type(EMAIL)
        cy.checkout_submit_button().click()
        cy.checkout_password_field().type(PASSWORD)
        cy.checkout_submit_button().click()
        //cy.checkout_another_card_button().click()
        //cy.checkout_credit_card_number_field().click().type(CARDNUMBER)
        //cy.checkout_exp_date_field().type(EXPDATE)
        //cy.checkout_cvc_field().type(CVC)
        //cy.checkout_zip_field().type(ZIPCODE)
        cy.checkout_remove_wallet_credit_button().click()
        cy.checkout_pay_now_button().click()
        cy.url().should('include', '/confirmation/')
    });

    it('Purchase reservation and add new vehicle during purchasing', function () {
        const HOURS = 12
        cy.url().should('eq', BASEPAGE)
        cy.search_field().type(LOCATION)
        cy.suggestions_list().should('be.visible')
        cy.location_from_list(3).click()
        cy.url().should('eq', BASEPAGE + LOCATION + '?back=search&back_params=%2F')
        cy.reserve_parking_button().click()
        cy.reservation_dates().should('have.length', 4)
        cy.reservation_dates().eq(0).invoke('val').then(val =>{cy.log(val)});
        cy.reservation_dates().eq(1).invoke('val').then(val =>{cy.log(val)})
        cy.reservation_dates().eq(2).invoke('val').then(val =>{cy.log(val)})
        cy.reservation_dates().eq(3).invoke('val').then(val =>{cy.log(val)})
        cy.reservation_view_rate_button().click()
        cy.park_here_button().click()
        cy.url().should('include', '/checkout/')
        cy.checkout_overlayed_animation().should('not.visible')
        cy.checkout_login_field().type(EMAIL)
        cy.checkout_submit_button().click()
        cy.checkout_password_field().type(PASSWORD)
        cy.checkout_submit_button().click()
        cy.checkout_vehicle_select_list().click()
        cy.checkout_remove_wallet_credit_button().click()
    });
    it('Purchase reservation and pay from wallet', function () {
    });
    it('Purchase reservation with promo code from card', function () {
    });
    it('Purchase reservation with promo code from wallet', function () {
    });
    it('Purchase reservation with vehicle changing', function () {
    });
    it('Purchase reservation with card changing', function () {
    });
    it('Purchase reservation without vehicle info when user have vehicles', function () {
    });


});