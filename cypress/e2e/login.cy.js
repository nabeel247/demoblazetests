import { HomePage } from "../pages/HomePage";

const home = new HomePage();
const baseUrl = "demoblaze.com";

describe("Login Flow", () => {
  beforeEach(() => {
    home.visit();
  });

  it("should successfully login with valid credentials", () => {
    // Login is implemented globally in e2e.js. So we'll focus on assertions only in this test
    cy.url().should("include", baseUrl);

    cy.getCookies().then((cookies) => {
      expect(cookies.length).to.be.greaterThan(0);
      const sessionCookie = cookies.find(
        (c) => c.name.includes("user") || c.name.includes("token")
      );
      expect(sessionCookie).to.exist;
    });

    // Assertion — logout should be visible after successful login
    home.elements.logoutButton().should("be.visible");
  });
});
