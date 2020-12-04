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

Cypress.Commands.add("checkout_another_card_button", () => {
    return cy.get('[data-testid=test-another-card]',{timeout:10000});
});

Cypress.Commands.add("checkout_credit_card_number_field", () => {
    cy.get('[id="cardNumber"]').click()
    return cy.get('#cardNumber > .__PrivateStripeElement > iframe', {timeout:10000}).its('0.contentDocument.body').then((body) => cy.wrap(body)).find('[name="cardnumber"]');
});

Cypress.Commands.add("checkout_exp_date_field", () => {
    cy.get('[id="cardExpiry"]').click()
    return cy.get('#cardExpiry > .__PrivateStripeElement > iframe', {timeout:10000}).its('0.contentDocument.body').then((body) => cy.wrap(body)).find('[name="exp-date"]');
});

Cypress.Commands.add("checkout_cvc_field", () => {
    cy.get('[id="cardCVC"]').click()
    return cy.get('#cardCVC > .__PrivateStripeElement > iframe', {timeout:10000}).its('0.contentDocument.body').then((body) => cy.wrap(body)).find('[name="cvc"]');
});

Cypress.Commands.add("checkout_zip_field", () => {
    return cy.get('#zip',{timeout:10000});
});

Cypress.Commands.add("checkout_remove_wallet_credit_button", () => {
    return cy.get('[data-testid=test-summary-details]',{timeout:10000}).find('.SummaryDetails__UnderlinedText-nrw84t-4.dEYYEH');
});

Cypress.Commands.add("checkout_vehicle_select_list", () => {
    return cy.get('[data-testid=vehicle-select]',{timeout:10000});
});