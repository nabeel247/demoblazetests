export class HomePage {
  elements = {
    loginLink: () => cy.get("#login2"),
    usernameField: () => cy.get("#loginusername"),
    passwordField: () => cy.get("#loginpassword"),
    loginButton: () => cy.get("button[onclick='logIn()']"),
    logoutButton: () => cy.get("#logout2"),
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
    cy.wait(2000);
  }

  goToLaptops() {
    this.elements.laptopsCategory().click();
    cy.intercept("POST", "**/bycat").as("loadCategory");
    cy.wait("@loadCategory", { timeout: 15000 });
  }

  selectProduct() {
    this.elements.productItem().click();
  }
}
