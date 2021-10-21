describe("cypress setup", () => {
  it("accepts a simple sum", () => {
    let sum = 1 + 1;
    expect(sum).to.eq(2);
  });
});
describe("Selecting a player from the options", () => {
  //Visits the main page
  //Gets the player selection attribute and checks it contains a player attribute "John Doe"
  it("shows a player option", () => {
    cy.visit("/");
    //cy.contains("John Doe");
    cy.get("#player-selection").contains("pickford");
  });
  //Attempts to click on player attribute
  //Expects a method to be called to handle this
  it("allows the player to be selected", () => {
    cy.contains("pickford").click();
  });
  it("shows the selected player on the selected screen", () => {
    cy.get("#team").contains("pickford");
  });
});
//For this test we are assuming that the test is 2
//We have tested the presence of different names
describe("Purchasing a player from the options", () => {
  let cheapPlayer = "pickford"; //1
  let swapPlayer = "ederson"; //2
  let expensivePlayer = "southall"; //3
  it("shows money available", () => {
    cy.visit("/");
  });
  it("shows player price", () => {
    cy.get("#money").contains("2");
  });
  it("allows purchase of player cheaper than money", () => {
    cy.contains(cheapPlayer).click();
    cy.get("#team").contains(cheapPlayer);
  });
  it("disallows purchase of more expensive player", () => {
    cy.contains(expensivePlayer).click();
    cy.get("#team").contains(cheapPlayer);
  });
  it("swaps out players if current player sold", () => {
    cy.contains(swapPlayer).click();
    cy.get("#team").contains(swapPlayer);
  });
});
describe("Purchasing a team of players in every position", () => {
  let positions = ["gk", "def", "mid1", "mid2", "for"];
  let goalkeeper = "pickford";
  let defender = "cannavaro";
  let midfielder1 = "scholes";
  let midfielder2 = "osman";
  let expensivemidfielder = "lampard";
  let forward = "messi";
  it("shows each position available", () => {
    cy.visit("/");
    for (let index = 0; index < positions.length; index++) {
      cy.get("#team").get("#" + positions[index]);
    }
  });
  it("selects a player in the correct position", () => {
    cy.get("#team");
    cy.contains(goalkeeper).click();
    cy.contains(defender).click();
    cy.get("#team").get("#gk").contains(goalkeeper);
    cy.get("#team").get("#def").contains(defender);
  });
  it("removes a player in the correct position", () => {
    cy.visit("/"); //Reset the visit to reset the money
    cy.contains(goalkeeper).click();
    cy.get("#team").get("#gk").contains(goalkeeper);
    cy.get("#team").get("#gk").click();
    cy.get("#team").get("#gk").contains("No Player selected");
  });
  it("selects the empty midfielder option", () => {
    cy.contains(midfielder1).click();
    cy.contains(midfielder2).click();
    cy.get("#team").get("#mid1").contains(midfielder1);
    cy.get("#team").get("#mid2").contains(midfielder2);
  });
  it("selects the empty midfielder option if can afford", () => {
    cy.visit("/");
    cy.contains(midfielder1).click();
    cy.contains(expensivemidfielder).click();
    cy.get("#team").get("#mid1").contains(midfielder1);
    cy.get("#team").get("#mid2").contains("No Player selected");
  });
  //replacing players in position
  //midfielder special case
});
//First test shows elements are clickable, this can be assumed in second test
//Therefore we test different parameters occurring
//Idea is a few variables are created since they will be used
//E2E tests don't hit real backend, so we can force 404
//The route performs a HTTP GET request at site
//Response is sent for what we want, stored in values

//Difficult problem, clicking a midfielder we want to place them in the free space
