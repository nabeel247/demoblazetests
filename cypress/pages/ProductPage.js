export class ProductPage {
  elements = {
    addToCartBtn: () => cy.get('[onclick="addToCart(8)"]'),
    homeLink: () => cy.contains("Home"),
  };

  addToCart() {
    this.elements.addToCartBtn().click();
    cy.on("window:alert", (alertText) => {
      expect(alertText).to.contains("Product added");
    });
  }

  goHome() {
    this.elements.homeLink().click();
  }
}
