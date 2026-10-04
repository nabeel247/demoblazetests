import { CartPage } from "../pages/CartPage";
import { CheckoutPage } from "../pages/CheckoutPage";
import { faker } from "@faker-js/faker";

const cart = new CartPage();
const checkout = new CheckoutPage();

describe("Checkout with an empty cart", () => {
  it("should not allow user to checkout with an empty cart", () => {
    // place order for an empty cart
    cart.openCart();
    cart.placeOrder();

    // Fill checkout
    checkout.fillCheckoutForm({
      name: faker.person.fullName(),
      country: faker.location.country(),
      city: faker.location.city(),
      card: faker.finance.creditCardNumber("4111###########"), // always valid test Visa
      month: faker.date.future().toLocaleString("en-US", { month: "2-digit" }),
      year: faker.date.future().toLocaleString("en-US", { year: "numeric" }),
    });

    checkout.completePurchase();

    // Verify if purchase was successful
    cy.get("body").then(($body) => {
      if (
        $body.find('.sweet-alert h2:contains("Thank you for your purchase!")')
          .length > 0
      ) {
        // FAIL THE TEST INTENTIONALLY WITH A CUSTOM BUG MESSAGE
        throw new Error(
          "BUG DETECTED (Issue#104): Application allowed checkout with an empty cart instead of throwing a validation error",
        );
      } else {
        // If the bug gets fixed in the future, your test will pass here!
        cy.log("Empty cart validation is working as expected");
      }
    });
  });
});
