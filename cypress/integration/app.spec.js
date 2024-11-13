import cy from "cypress";

describe("App", () => {
  it("renders greetings for multiple names", () => {
    // Make sure your app is running on this port
    cy.visit("http://localhost:3000");
    cy.contains("Hello, Alice!");
    cy.contains("Hello, Bob!");
  });
});
