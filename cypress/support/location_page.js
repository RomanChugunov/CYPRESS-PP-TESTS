
Cypress.Commands.add("reserve_parking_button", () => {
    return cy.get('[data-testid=test-reserve-parking-in-advance]',{timeout:10000});
});

Cypress.Commands.add("subscription_button", () => {
    return cy.get('[data-testid=test-pay-for-a-monthly-subscription]',{timeout:10000});
});

Cypress.Commands.add("monthly_parking_button", () => {
    return cy.get('[data-testid=test-request-monthly-parking]',{timeout:10000});
});

Cypress.Commands.add("pay_to_park_normal_button", () => {
    return cy.get('[data-testid=test-pay-to-park-now]',{timeout:10000});
});

Cypress.Commands.add("pay_to_park_star_button", () => {
    return cy.get('[data-testid=test-pay-to-park-now-star-space]',{timeout:10000});
});

Cypress.Commands.add("pay_to_park_range", () => {
    return cy.get('[data-testid=test-input-range]',{timeout:10000});
});

Cypress.Commands.add("session_view_rate_button", () => {
    return cy.get('[data-testid=test-session-form]',{timeout:10000}).contains('View rate');
});

Cypress.Commands.add("range_rate_time", () => {
    return cy.get('[data-testid=test-time-unit]',{timeout:10000});
});

Cypress.Commands.add("park_here_button", () => {
    return cy.get('[data-testid=test-total-form]',{timeout:10000}).contains('Park here');
});

Cypress.Commands.add("reservation_view_rate_button", () => {
    return cy.get('[data-testid=test-reservation-form]',{timeout:10000}).contains('View rate');
});

Cypress.Commands.add("reservation_dates", () => {
    return cy.get('[data-testid=test-reservation-form]',{timeout:10000}).find('input');
});

Cypress.Commands.add("reservation_start_date", () => {
    cy.get('[data-testid=test-reservation-form]',{timeout:10000}).find('input').eq(0).invoke('val').then(val => {
        const startname = val
        cy.log(startname)
        return startname
    });
});


