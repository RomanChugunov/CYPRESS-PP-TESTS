describe('authorization', function() {
  it('sign in', function() {
  	cy.visit('https://www.premiumparking.com')

  	cy.contains('Sign in').click()
  	cy.get('.styledComponents__StyledInput-sc-1x2xdjn-2').type("roman.chugunov@flatstack.com")
  	cy.contains('submit-btn').click()
  	cy.get('.auth-form--modal input').type('qqqwww')
  	cy.get('button.btn.btn-primary.auth-form__signin').click()
  })
})