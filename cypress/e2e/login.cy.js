import { HomePage } from "../pages/HomePage";

const home = new HomePage();
const baseUrl = "demoblaze.com";
const incorrect_username = "Nabeel123";
const incorrect_password = "Asghar123";

describe("Login flow with valid & invalid credentials", () => {
  it("should not allow user to login with invalid credentials", () => {
    // negative test to verify that application doesn't allow user to login with invalid credentials
    cy.url().should("include", baseUrl);

    cy.loginSession(incorrect_username, incorrect_password);
    // Catch the browser alert window and assert its message text
    cy.on("window:alert", (alertText) => {
      expect(alertText).to.equal("User does not exist.");
    });
  });
  beforeEach(() => {
    it("should successfully login with valid credentials", () => {
      cy.url().should("include", baseUrl);

      cy.getCookies().then((cookies) => {
        expect(cookies.length).to.be.greaterThan(0);
        const sessionCookie = cookies.find(
          (c) => c.name.includes("user") || c.name.includes("token"),
        );
        expect(sessionCookie).to.exist;
      });

      // Assertion — logout should be visible after successful login
      home.elements.logoutButton().should("be.visible");
      home.elements.WelcomeUserMsg().should("be.visible");
    });
  });
});
