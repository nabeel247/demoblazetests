export class CartPage {
  elements = {
    cartLink: () => cy.get("#cartur"),
    placeOrderBtn: () => cy.contains("Place Order"),
  };

  openCart() {
    this.elements.cartLink().click();
  }

  placeOrder() {
    this.elements.placeOrderBtn().click();
    cy.wait(1000);
  }
}
