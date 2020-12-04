beforeEach(() => {
  // Login execution
  cy.visit(url)
  cy.get('[data-cy=test-signin]').click()
  cy.wait(750)
  cy.get('[data-cy=test-email-input]').type(email)
  cy.wait(750)
  cy.get('[data-cy=submit-btn]').as('Confirm').click()
  cy.get('[data-cy="test-password-input"]').as('Password').type(password)
  cy.get('@Confirm').click()
  cy.visit(url)
})

const url = 'https://spa.release.premiumparking.com'
const email = 'roman.chugunov+a@flatstack.com'
const new_email = 'roman.chugunov+00003@flatstack.com'
const password = 'qqqaaa'
const nativeInputValueSetter = Object.getOwnPropertyDescriptor(
  window.HTMLInputElement.prototype,
  'value'
).set
const changeRangeInputValue = $range => value => {
  nativeInputValueSetter.call($range[0], value)
  $range[0].dispatchEvent(new Event('change', { value, bubbles: true }))
}

describe('purchase_session', function() {

  it('purchase session with default vehicle and default card', function() {
    cy.visit('https://spa.release.premiumparking.com')
    cy.get('.react-autosuggest__input').type('P0123')
    cy.wait(200)
  	cy.get('.CustomButton__StyledButton-nw07qb-0').click()
  	cy.wait(1000)
  	cy.get('[data-testid=test-pay-to-park-now]').click()
    cy.get('[data-testid=test-input-range]').then(input => changeRangeInputValue(input)(1))
  	cy.get('.Button__StyledButton-sc-1b506hy-0').click()
    cy.get('.commonStyledComponents__Form-sc-10ukbq6-0 > .ButtonedLink__StyledLink-sc-1vm1uho-0').click()
  	cy.get('[data-testid=test-pay-now]').click()
    cy.get('.styles__Total-sc-1m9wmsg-10 > h4').should('contain', '10.40')
  })

  it('purchase session rate and create new vehicle and card', function() {
    cy.visit('https://spa.release.premiumparking.com/P123')
    cy.contains("Rate menu").click()
    cy.contains("3 min (special)").click()
    cy.contains("Add new vehicle").click()
    cy.get('[id="licensePlateNum"]').type("NEWVEHICLE")
    cy.get('[data-testid=license-plate-state-select]').click()
    cy.contains("Texas").click()
    cy.get('[data-testid=make-select]').click()
    cy.contains("Dodge").click()
    cy.get('[data-testid=color-select]').click()
    cy.contains("Black").click()
    cy.contains("another card").click()
    cy.get('[id="cardNumber"]').click()
    cy.get('#cardNumber > .__PrivateStripeElement > iframe').its('0.contentDocument.body').then((body) => cy.wrap(body)).find('[name="cardnumber"]').type("6011111111111117")
    cy.get('[id="cardExpiry"]').click()
    cy.get('#cardExpiry > .__PrivateStripeElement > iframe').its('0.contentDocument.body').then((body) => cy.wrap(body)).find('[name="exp-date"]').type("1224")
    cy.get('[id="cardCVC"]').click()
    cy.get('#cardCVC > .__PrivateStripeElement > iframe').its('0.contentDocument.body').then((body) => cy.wrap(body)).find('[name="cvc"]').type("123")
    cy.get('#zip').type("12345")
    cy.get('.Checkbox__CustomCheckbox-fp6reb-2').click()
    cy.get('[data-testid=test-pay-now]').click()
    cy.get('.styles__Total-sc-1m9wmsg-10 > h4').should('contain', '2.40')
  })
  
  it('delete last vehicle', function() {
    cy.visit("https://pp-admin:premium@accounts.release.premiumparking.com/my/vehicles")
    cy.contains("delete").click()
    cy.contains("NEWVEHICLE").should('not.visible')
    cy.contains("Vehicle has been successfully removed from your account!").should('be.visible')
  })

  it('delete last card', function() {
    cy.visit("https://pp-admin:premium@accounts.release.premiumparking.com/my/payment_methods")
    cy.contains("Delete").click()
    cy.contains("1117").should('not.visible')
    cy.contains("Credit card has been successfully removed from your account!").should('be.visible')
  })

  it('refill wallet', function(){
    cy.visit("https://pp-admin:premium@accounts.release.premiumparking.com/my/payment_methods")
    cy.contains("Refill Balance").click()
    cy.get('#reload_wallet_form_amount').type("20")
    cy.get('#reload_wallet_form_card_id').select('MasterCard •••• 4444, expires 12/23')
    cy.get('.col-sm-12 > .btn').click()
    cy.get('.payment-balance__num').should('contain', "$40.00")
    cy.contains("Wallet has been successfully refilled!").should('be.visible')
  })
})