describe('purchase_session', function() {

  it('purchase star session with default vehicle and default card', function() {
    cy.visit('https://spa.staging.premiumparking.com')

    cy.get('.react-autosuggest__input').type('P0123')

  	cy.get('.CustomButton__StyledButton-nw07qb-0').click()

  	cy.wait(1000)

  	cy.get('.CustomButton__StyledButton-nw07qb-0').click()

  	cy.get('[data-testid=test-pay-to-park-now-star-space]').click()

  	cy.get(':nth-child(2) > .RadioButton__RadioButtonLabel-i0gqb4-0').click()

  	cy.get(':nth-child(1) > .RadioButton__RadioButtonLabel-i0gqb4-0').click()

  	cy.get('.commonStyledComponents__Form-sc-10ukbq6-0 > .ButtonedLink__StyledLink-sc-1vm1uho-0').click()

  	cy.get('.styledComponents__StyledInput-sc-1x2xdjn-2').type('roman.chugunov@flatstack.com')

    cy.get('[data-testid=submit-btn]').click()

    cy.wait(1000)

    cy.get('.styledComponents__StyledInput-sc-1x2xdjn-2').type('qqqaaa')

    cy.get('[data-testid=submit-btn]').click()

  	cy.wait(1000)

  	cy.get(':nth-child(1) > .SummaryDetails__CardSectionRow-nrw84t-1 > :nth-child(2)').should('contain', '$99.00')

  	cy.get('[data-testid=test-pay-now]').click()

  	cy.get('.styles__RateInfo-sc-1m9wmsg-3').should('contain', '2 min (STAR)')

  	cy.get('.styles__Total-sc-1m9wmsg-10 > h4').should('contain', '$99.00')

    cy.get('.styles__PurchaseInfo-sc-1m9wmsg-4 > :nth-child(2) > span').should('contain', 'P123')
  })
})
