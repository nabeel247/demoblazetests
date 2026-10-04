export class HomePage {
  elements = {
    loginLink: () => cy.get("#login2"),
    usernameField: () => cy.get("#loginusername"),
    passwordField: () => cy.get("#loginpassword"),
    loginButton: () => cy.get("button[onclick='logIn()']"),
    logoutButton: () => cy.get("#logout2"),
    WelcomeUserMsg: () => cy.get("a#nameofuser.nav-link"),
    laptopsCategory: () => cy.get("[onclick=\"byCat('notebook')\"]").click(),
    productItem: () => cy.get('a[href="prod.html?idp_=8"]').first(),
  };

  visit() {
    cy.visit("/");
  }

  openLoginModal() {
    this.elements.loginLink().click();
  }

  login(username, password) {
    this.openLoginModal();
    this.elements.usernameField().type(username);
    this.elements.passwordField().type(password);
    this.elements.loginButton().click();
  }

  goToLaptops() {
    this.elements.laptopsCategory().click();
    cy.intercept("POST", "**/bycat").as("loadCategory");
    cy.wait("@loadCategory");
  }

  selectProduct() {
    this.elements.productItem().click();
  }
}
