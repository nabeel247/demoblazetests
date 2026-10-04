export class CartPage {
  elements = {
    cartLink: () => cy.get("#cartur"),
    placeOrderBtn: () => cy.contains("Place Order"),
    placeOrderModal: () => cy.get("h5#orderModalLabel")
  };

  openCart() {
    this.elements.cartLink().click();
  }

  placeOrder() {
    this.elements.placeOrderBtn().click();
    this.elements.placeOrderModal().should('be.visible');
  }
}
