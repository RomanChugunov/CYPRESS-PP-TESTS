describe('purchase_session', function() {

  it('purchase star session with default vehicle and default card', function() {
    cy.visit('https://spa.release.premiumparking.com')

    cy.get('.react-autosuggest__input').type('P0123')

  	cy.get('.CustomButton__StyledButton-nw07qb-0').click()

  	cy.wait(1000)

  	cy.get('.CustomButton__StyledButton-nw07qb-0').click()

  	cy.get('[data-testid="test-pay-to-park-now-star-space"]').click()

  	cy.get('[data-testid="test-radio-button-46861"]').click()

  	cy.get('[data-testid="test-radio-button-46860"]').click()

  	cy.get('.commonStyledComponents__Form-sc-10ukbq6-0 > .ButtonedLink__StyledLink-sc-1vm1uho-0').click()

	cy.wait(1000)

  	cy.get('[data-cy="test-email-input"]').type('roman.chugunov+a@flatstack.com')

    cy.get('[data-testid=submit-btn]').click()

    cy.wait(1000)

    cy.get('[data-cy=test-password-input]').type('qqqaaa')

    cy.get('[data-testid=submit-btn]').click()

  	cy.wait(1000)

  	cy.get('[data-testid=test-purchase-details]').should('contain', '$99.00')

  	cy.get('[data-testid=test-pay-now]').click()

  	cy.get('.styles__RateInfo-sc-1m9wmsg-3').should('contain', '2 min (STAR)')

  	cy.get('.styles__Total-sc-1m9wmsg-10 > h4').should('contain', '$80.00')

	cy.get('.styles__PurchaseInfo-sc-1m9wmsg-4 > :nth-child(3) > span').should('contain', 'P123')
  })
})
