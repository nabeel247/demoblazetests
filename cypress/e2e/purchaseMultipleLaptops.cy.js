import { HomePage } from "../pages/HomePage";
import { ProductPage } from "../pages/ProductPage";
import { CartPage } from "../pages/CartPage";

const home = new HomePage();
const product = new ProductPage();
const cart = new CartPage();

describe("Cart Operations", () => {
  it("add multiple products to the cart & verify the total is correct", () => {
    // Add first laptop
    home.goToLaptops();
    home.selectProduct();
    product.addToCart();
    product.goHome();

    // Add a phone
    home.goToLaptops();
    home.selectProduct();
    product.addToCart();

    // open cart
    cart.openCart();

    // Ensure 2 rows are in the cart table (excluding header)
    cy.get("#tbodyid tr").should("have.length", 2);

    let itemPrices = [];
    let itemIds = [];

    cy.get("#tbodyid tr")
      .each(($row) => {
        cy.wrap($row)
          .find("td")
          .eq(2)
          .invoke("text")
          .then((priceText) => {
            const price = parseFloat(priceText);
            itemPrices.push(price);
          });
      })
      .then(() => {
        cy.get("#totalp")
          .invoke("text")
          .then((totalText) => {
            const displayedTotal = parseFloat(totalText);
            const calculatedTotal = itemPrices.reduce((a, b) => a + b, 0);
            expect(displayedTotal).to.eq(calculatedTotal);
          });

        cy.deleteAllCartItems();
        cy.get("body").should(($body) => {
          expect($body.find("#tbodyid tr").length).to.eq(0);
        });
      });
  });
});
