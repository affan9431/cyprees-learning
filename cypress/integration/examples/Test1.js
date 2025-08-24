// cypress - Spec

// cy is the cypress object and cy is a global variable
/// <reference types="Cypress" />

describe("My First Test", function () {
  it("My First Test case", function () {
    // test step goes here

    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/"); // to open a website
    cy.get(".search-keyword").type("ca");
    cy.wait(2000);
    // cy.get(".product:visible").should("have.length", 4);

    // Parent child chainning
    cy.get(".products").find(".product").should("have.length", 4);
    // cy.get(".products").find(".product").eq(1).contains("ADD TO CART").click();
    cy.get(".products")
      .find(".product")
      .each(($el, index, $list) => {
        const textVeg = $el.find("h4.product-name").text();
        if (textVeg.includes("Cashews")) {
          cy.wrap($el).find("button[type=button]").click();
          // $el.find("button[type=button]").trigger("click"); // it also works
        }
      });

    cy.get(".brand").then((logoElem) => {
      cy.log(logoElem.text());
    });
  });

  //   it("My Second Test case", function () {
  //     // test step gp here
  //   });
});
