import element from '../fixtures/elements.json'

Cypress.Commands.add('login', (email, password) => {    
    if(email) {
        cy.get(element.adminLogin).type(email);
    }
    if(password) {
        cy.get(element.adminPass).type(password);
    }
    cy.get(element.adminButton).click();
})