describe('purchase_session', function() {

  it('purchase session with default vehicle and default card', function() {
    cy.visit('https://spa.staging.premiumparking.com')

  	cy.get('.react-autosuggest__input').type('P0123')

  	cy.get('.CustomButton__StyledButton-nw07qb-0').click()

  	cy.wait(1000)

  	cy.get('.CustomButton__StyledButton-nw07qb-0').click()

  	cy.get('[data-testid=test-pay-to-park-now]').click()

  	cy.get('[data-testid=test-input-range]').click()

  	cy.get('.Button__StyledButton-sc-1b506hy-0').click()

  	cy.get('.commonStyledComponents__Form-sc-10ukbq6-0 > .ButtonedLink__StyledLink-sc-1vm1uho-0').click()

    cy.get('.styledComponents__StyledInput-sc-1x2xdjn-2').type('roman.chugunov@flatstack.com')

    cy.get('[data-testid=submit-btn]').click()

    cy.wait(1000)

    cy.get('.styledComponents__StyledInput-sc-1x2xdjn-2').type('qqqaaa')

    cy.get('[data-testid=submit-btn]').click()

  	cy.wait(1000)

  	cy.get('[data-testid=test-pay-now]').click()

    cy.get('.styles__RateInfo-sc-1m9wmsg-3').should('contain', 'TEST 12 Hrs')

    cy.get('.styles__Total-sc-1m9wmsg-10 > h4').should('contain', '1.05')
  })
})