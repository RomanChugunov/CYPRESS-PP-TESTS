/// <reference types="Cypress" />

describe('authorization', function() {

	const url = 'https://spa.release.premiumparking.com'
	const email = 'roman.chugunov+a@flatstack.com'
	const new_email = 'roman.chugunov+00003@flatstack.com'
	const password = 'qqqaaa'


	it('sign in', function() {

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

		// Assertion that email address is presented in the DOM
  		cy.contains(email).should('be.visible')
  	});

 	it('sign_up', function() {

		// Sign up execution
		cy.visit(url)
		cy.get('[data-cy=test-signin]').click()
		cy.wait(1000)
		cy.get('[data-cy=test-email-input]').type(new_email)
		cy.wait(750)
		cy.get('[data-cy=submit-btn]').click()
		cy.get('[type="password"]').type(password)
		cy.get('[data-cy=submit-btn]').click()
		cy.visit(url)

		// Assertion that email address is presented in the DOM
		cy.contains(new_email).should('be.visible')
	})

	it('delete the account')
		// Deleting the created account
		cy.visit("https://pp-admin:premium@manage.release.premiumparking.com/profiles")
		cy.get('[id=user_email').type("fs-admin@flatstack.com")
		cy.get('[id=user_password').type("321premium")
		cy.get('.btn').click()
		cy.get('tbody > :nth-child(1) > :nth-child(1) > a').click()
		cy.contains("Edit").click()
		cy.contains("Archive").click()
		cy.contains("Recover").should(be.visible)
  })
});