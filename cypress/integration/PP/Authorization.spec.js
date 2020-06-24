describe('authorization', function() {


  it('sign in', function() {
  	cy.visit('https://premiumparking.com')

  	cy.get('[data-testid=test-signin]').click()

    cy.wait(500)

  	cy.get('.styledComponents__StyledInput-sc-1x2xdjn-2').type("roman.chugunov@flatstack.com")

    cy.wait(500)

  	cy.get('[data-testid=submit-btn]').click()

  	cy.wait(500)

  	cy.get('.styledComponents__StyledInput-sc-1x2xdjn-2').type('qqqwww')

  	cy.get('[data-testid=submit-btn]').click()

  	cy.get('.navbar-brand').click()

  	cy.get('.NavDropdown__Email-sc-1ioc26k-3').should('contain', 'roman.chugunov@flatstack.com')
  })
})	

