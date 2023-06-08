import adminData from '../fixtures/adminData.json'
import element from '../fixtures/elements.json'
import scenario from '../fixtures/scenario.json';

scenario.forEach((scenario) => {
    it(`successful booking: ${scenario.name}`, () => {
        cy.visit('/admin/');
        cy.login(adminData.email, adminData.pass);
        cy.get(element.accessibleHall).invoke('text').then((text) => {
            cy.visit('/');
            cy.get(element.homeNavDays).eq(6).click();
            cy.contains(text).siblings(element.seanseList).find(element.seanceTime).click();

            scenario.data.forEach((data) => {
                cy.get(`${element.template.partOne}${data.row}${element.template.partTwo}${data.seat}${element.template.partThree}`).click();
              })

            cy.contains(element.textButton).click();

            cy.get(element.ticketCheck).contains(element.ticketText).should('be.visible');
            cy.get(element.ticketHall).contains(text).should('be.visible');

            cy.get(element.takeQR).click();

            cy.get(element.ticketCheck).contains(element.textQR).should('be.visible');
            cy.get(element.infoQR).should('be.visible');
        })
    })
})