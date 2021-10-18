describe("Selecting Player", () => {
  it("shows restaurants from the server", () => {
    let sum = 1 + 1;
    expect(sum).to.eq(2);
  });
});
//Idea is a few variables are created since they will be used
//E2E tests don't hit real backend, so we can force 404
//The route performs a HTTP GET request at site
//Response is sent for what we want, stored in values
