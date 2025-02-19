import "@testing-library/cypress/add-commands";

describe("LootBox E2E", () => {
  it("opens a case and shows the unlocked item message", () => {
    // Go to home
    cy.visit("/");

    // We see 8 cases
    cy.get(".neon-card").should("have.length", 8);

    // Click on the first case, for example
    cy.get(".neon-card").first().click();

    // We land on /case/[slug], see "Open case" button
    cy.findByText("Open case").click();

    // After the animation, we see "New item [name] unlocked!"
    cy.findByText(/New item .* unlocked!/i, { timeout: 10000 }).should("be.visible");
  });
});
