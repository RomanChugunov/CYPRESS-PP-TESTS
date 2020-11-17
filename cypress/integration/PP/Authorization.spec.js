/// <reference types="Cypress" />

describe('authorization', function() {

	const url = 'https://premiumparking.com'
	const email = 'roman.chugunov+a@flatstack.com'
	const password = 'qqqwww'


	it('sign in', function() {

	// Login execution
	cy.visit(url)
	cy.get('[data-cy=test-signin]').click().as('Click_Sign_In')
	cy.wait(200)
	cy.get('[data-cy=test-email-input]').as('Email').type(email)
	cy.get('[data-cy=submit-btn]').as('Confirm').click()
  	cy.get('[data-cy="test-password-input"]').as('Password').type(password)
	cy.get('@Confirm').click()

	// Assertion that account screen opens
	cy.url('pathname').should('contain', 'accounts')

	// Assertion taht email address is presented in the DOM
  	cy.contains(email).should('be.visible')
  });
})	