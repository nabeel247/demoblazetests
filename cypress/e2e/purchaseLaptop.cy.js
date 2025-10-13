import { HomePage } from "../pages/HomePage";
import { ProductPage } from "../pages/ProductPage";
import { CartPage } from "../pages/CartPage";
import { CheckoutPage } from "../pages/CheckoutPage";
import { faker } from "@faker-js/faker";

const home = new HomePage();
const product = new ProductPage();
const cart = new CartPage();
const checkout = new CheckoutPage();

describe("Purchase Laptop Flow", () => {
  it("should purchase a laptop successfully", () => {
    home.goToLaptops();
    home.selectProduct();
    product.addToCart();

    // Go to cart
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

    // Verify successful purchase
    checkout.verifyPurchaseSuccess();
  });
});
