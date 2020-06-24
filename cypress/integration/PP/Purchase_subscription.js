describe('purchase_subscription', function() {

	it('purchase subscription with default vehicle and card', function() {
    cy.visit('https://spa.staging.premiumparking.com/')

  	cy.get('.react-autosuggest__input').type('P0123')

  	cy.get('.CustomButton__StyledButton-nw07qb-0').click()

  	cy.wait(1000)

  	cy.get('.CustomButton__StyledButton-nw07qb-0').click()

	cy.get('[data-testid=test-pay-for-a-monthly-subscription]').click()

	cy.get(':nth-child(4) > .RadioButton__RadioButtonLabel-i0gqb4-0').click()

	cy.get('.Button__StyledButton-sc-1b506hy-0').click()

	cy.get('.commonStyledComponents__TotalPriceWrapper-sc-10ukbq6-5 > :nth-child(2)').should('contain', '$ 1.00')

	cy.get('.Input__InputField-yh5c4p-0').click().get('.react-datepicker__day--025').click()

	cy.get('[data-testid=test-buttoned-link]').click()

	cy.get('.styledComponents__StyledInput-sc-1x2xdjn-2').type('roman.chugunov@flatstack.com')

    cy.get('[data-testid=submit-btn]').click()

    cy.wait(1000)

    cy.get('.styledComponents__StyledInput-sc-1x2xdjn-2').type('qqqaaa')

    cy.get('[data-testid=submit-btn]').click()

  	cy.wait(1000)

  	cy.get(':nth-child(1) > .SummaryDetails__CardSectionRow-nrw84t-1 > :nth-child(2)').should('contain', '$1.00')

	cy.get('[data-testid=test-pay-now]').click()

	cy.get('.styles__Title-sc-1m9wmsg-2').should('contain', 'New Subscription')

	cy.get('.styles__PurchaseInfo-sc-1m9wmsg-4 > :nth-child(2) > span').should('contain', 'P123')

	cy.get(':nth-child(4) > span').should('contain', '25')

	cy.get('.styles__Total-sc-1m9wmsg-10 > h4').should('contain', '$1.00')
  })
})