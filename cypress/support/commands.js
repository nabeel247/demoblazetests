import { HomePage } from "../pages/HomePage";

const home = new HomePage();

// Custom command to handle login using cy.session()
Cypress.Commands.add("loginSession", (username, password) => {
  cy.session([username, password], () => {
    cy.visit("/");
    home.openLoginModal();
    home.elements.usernameField().clear().type(username);
    home.elements.passwordField().clear().type(password);
    home.elements.loginButton().click();

    // Wait until logout button is visible = login success
    home.elements.logoutButton().should("be.visible");
  });
});

Cypress.Commands.add("deleteAllCartItems", () => {
  let deleted = 0;
  const deleteNext = () => {
    if (deleted >= 2) return;
    cy.get("#tbodyid tr").then(($rows) => {
      if ($rows.length > 0) {
        cy.wrap($rows[0]).find('a:contains("Delete")').click({ force: true });
        cy.wait(1000);
        deleted += 1;
        deleteNext();
      }
    });
  };
  deleteNext();
});
