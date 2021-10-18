describe("Listing Restaurants", () => {
  it("shows restaurants from the server", () => {
    const sushiPlace = "Sushi Place";
    const pizzaPlace = "Pizza Place";

    cy.server({ force404: true });

    cy.route({
      method: "GET",
      url: "https://outside-in-dev-api.herokuapp.com/fwvNFKji7z0TOl5KCzrKwNLt6e2H5m7k/restaurants",
      response: [
        { id: 1, name: sushiPlace },
        { id: 2, name: pizzaPlace },
      ],
    });

    cy.visit("/");
    cy.contains(sushiPlace);
    cy.contains(pizzaPlace);
  });
});
//Idea is a few variables are created since they will be used
//E2E tests don't hit real backend, so we can force 404
//The route performs a HTTP GET request at site
//Response is sent for what we want, stored in values
