export class CheckoutPage {
  elements = {
    nameInput: () => cy.get("#name"),
    countryInput: () => cy.get("#country"),
    cityInput: () => cy.get("#city"),
    cardInput: () => cy.get("#card"),
    monthInput: () => cy.get("#month"),
    yearInput: () => cy.get("#year"),
    purchaseBtn: () => cy.contains("Purchase"),
    confirmationText: () => cy.get(".sweet-alert h2"),
    okButton: () => cy.contains("OK"),
  };

  fillCheckoutForm({ name, country, city, card, month, year }) {
    this.elements
      .nameInput()
      .click()
      .clear()
      .type(name)
      .should("have.value", name);
    this.elements.countryInput().type(country);
    this.elements.cityInput().type(city);
    this.elements.cardInput().type(card);
    this.elements.monthInput().type(month);
    this.elements.yearInput().type(year);
  }

  completePurchase() {
    this.elements.purchaseBtn().click();
  }

  verifyPurchaseSuccess() {
    this.elements
      .confirmationText()
      .should("contain.text", "Thank you for your purchase!");
    this.elements.okButton().click();
  }
}
