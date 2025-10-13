import { HomePage } from "../pages/HomePage";
import { ProductPage } from "../pages/ProductPage";
import { CartPage } from "../pages/CartPage";

const home = new HomePage();
const product = new ProductPage();
const cart = new CartPage();

it("should delete a laptop from the cart", () => {
  home.goToLaptops();
  home.selectProduct();
  product.addToCart();
  cart.openCart();
  // verify product added
  cy.contains("td", "Sony vaio i5").should("be.visible");

  // delete the product
  cy.contains("a", "Delete").click();

  // verify product is removed (with retry)
  cy.contains("td", "Sony vaio i5").should("not.exist");
});
