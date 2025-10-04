// cypress - Spec

// cy is the cypress object and cy is a global variable
/// <reference types="Cypress" />

describe("My Third Test", function () {
  it("My Third Test case", function () {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

    // cy.get("#checkBoxOption1").click(); we can also use click but check is better for checkbox

    cy.get("#checkBoxOption1")
      .check()
      .should("be.checked")
      .and("have.value", "option1");
    cy.get("#checkBoxOption1").uncheck().should("not.be.checked");
    cy.get("input[type='checkbox']").check(["option2", "option3"]);
    cy.get("select").select("option2").should("have.value", "option2");
    cy.get("#autocomplete").type("ind");

    cy.get(".ui-menu-item div").each(($el, index, $list) => {
      if ($el.text() === "India") {
        cy.wrap($el).click();
      }
    });

    cy.get('[value="radio1"]').check().should("be.checked");
  });
});
