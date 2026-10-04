import "./commands";

beforeEach(() => {
  // Cypress.env checks OS environment variables (GitHub Secrets) first,
  // then falls back to your local cypress.env.json file.
  const username = Cypress.env("username");
  const password = Cypress.env("password");

  // Defensive check
  if (!username || !password) {
    throw new Error(
      "Missing credentials! Please define 'username' and 'password' either in GitHub Secrets (CI) or your local cypress.env.json file.",
    );
  }

  cy.loginSession(username, password);
  cy.getCookies().should("not.be.empty");
  cy.visit("/");
});
