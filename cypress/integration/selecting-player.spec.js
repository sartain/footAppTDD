describe("cypress setup", () => {
  it("accepts a simple sum", () => {
    let sum = 1 + 1;
    expect(sum).to.eq(2);
  });
});
describe("Selecting a player from the optinos", () => {
  //Visits the main page
  //Gets the player selection attribute and checks it contains a player attribute "John Doe"
  it("shows a player option", () => {
    cy.visit("/");
    //cy.contains("John Doe");
    cy.get("#player-selection").contains("John Doe");
  });
  //Attempts to click on player attribute
  //Expects a method to be called to handle this
  it("allows the player to be selected", () => {
    cy.get("#team").get("#selected-player").should("not.exist");
    cy.contains("John Doe").click();
  });
  it("shows the selected player on the selected screen", () => {
    cy.get("#team").contains("John Doe");
  });
});
//Idea is a few variables are created since they will be used
//E2E tests don't hit real backend, so we can force 404
//The route performs a HTTP GET request at site
//Response is sent for what we want, stored in values
