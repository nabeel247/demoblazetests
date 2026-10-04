import { HomePage } from "../pages/HomePage";

const home = new HomePage();
const baseUrl = "demoblaze.com";
const incorrect_username = Cypress.env("wrong_username");
const incorrect_password = Cypress.env("wrong_password");

describe("Login flow with valid & invalid credentials", () => {
  beforeEach(() => {
    cy.url().should("include", baseUrl);
  });
  // Negative test execution
  it("should not allow user to login with invalid credentials", () => {
    cy.loginSession(incorrect_username, incorrect_password);

    cy.on("window:alert", (alertText) => {
      expect(alertText).to.equal("User does not exist.");
    });
  });

  // happy path login
  it("should successfully login with valid credentials", () => {
    cy.getCookies().then((cookies) => {
      expect(cookies.length).to.be.greaterThan(0);
      const sessionCookie = cookies.find(
        (c) => c.name.includes("user") || c.name.includes("token"),
      );
      expect(sessionCookie).to.exist;
    });
  });
});
