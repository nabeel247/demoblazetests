// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import "./commands";

beforeEach(() => {
  const username = Cypress.env("username");
  const password = Cypress.env("password");

  // Defensive check
  if (!username || !password) {
    throw new Error(
      "Missing credentials! Please define 'username' and 'password' in cypress.env.json"
    );
  }

  cy.loginSession(username, password);
  cy.getCookies().should("not.be.empty");
  cy.visit("/");
});
