Cypress.Commands.add("checkout_login_field", () => {
    return cy.get('[data-cy=test-email-input]',{timeout:10000});
});

Cypress.Commands.add("checkout_password_field", () => {
    return cy.get('[data-cy=test-password-input]',{timeout:10000});
});

Cypress.Commands.add("checkout_submit_button", () => {
    return cy.get('[data-cy=submit-btn]',{timeout:10000});
});

Cypress.Commands.add("checkout_overlayed_animation", () => {
    return cy.get('.Loader__LoaderWrapper-sc-15b418k-0.iTlQWl',{timeout:10000});
});

Cypress.Commands.add("checkout_pay_now_button", () => {
    return cy.get('[data-testid=test-pay-now]',{timeout:10000});
});