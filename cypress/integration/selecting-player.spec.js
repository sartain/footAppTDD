describe("cypress setup", () => {
  it("accepts a simple sum", () => {
    let sum = 1 + 1;
    expect(sum).to.eq(2);
  });
});
describe("Selecting a player from the app", () => {
  //Visits the main page
  //Gets the player selection attribute and checks it contains a player attribute "John Doe"
  it("shows a player option", () => {
    cy.visit("/");
    cy.contains("John Doe");
    cy.get("ul").get("l1").contains("John Doe");
  });
  it("allows the player to be selected", () => {});
  it("shows the selected player on the selected screen", () => {});
});
//Idea is a few variables are created since they will be used
//E2E tests don't hit real backend, so we can force 404
//The route performs a HTTP GET request at site
//Response is sent for what we want, stored in values
