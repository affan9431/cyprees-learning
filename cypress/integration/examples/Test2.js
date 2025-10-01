// cypress - Spec

// cy is the cypress object and cy is a global variable
/// <reference types="Cypress" />

describe("My Second Test", function () {
  it("My Second Test case", function () {
    // test step goes here
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/"); // to open a website
    cy.get(".search-keyword").type("ca");
    cy.wait(2000);
    cy.get(".products").as("productLocator");
    cy.get("@productLocator")
      .find(".product")
      .each(($el, index, $list) => {
        const textVeg = $el.find("h4.product-name").text();
        if (textVeg.includes("Cashews")) {
          cy.wrap($el).find("button[type=button]").click();
          cy.get(".cart-icon > img").click();
          cy.contains("PROCEED TO CHECKOUT").click();
          cy.contains("Place Order").click();
          // $el.find("button[type=button]").trigger("click"); // it also works
        }
      });
  });

  //   it("My Second Test case", function () {
  //     // test step gp here
  //   });
});
