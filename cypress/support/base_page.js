Cypress.Commands.add("search_field", () => {
    return cy.get('.react-autosuggest__input',{timeout:10000});
});

Cypress.Commands.add("search_button", () => {
    return cy.get('.CustomButton__StyledButton-nw07qb-0.difCAF',{timeout:10000});
});

Cypress.Commands.add("suggestions_list", () => {
    return cy.get('.react-autosuggest__suggestions-list',{timeout:10000});
});

Cypress.Commands.add("location_from_list", (location_number) => {
    return cy.get('#react-autowhatever-1--item-'+(location_number-1).toString(),{timeout:10000});
});

