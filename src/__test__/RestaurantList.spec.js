import { render } from "@testing-library/react";
import { RestaurantList } from "../RestaurantList";
describe("RestaurantList", () => {
  const restaurants = [
    { id: 1, name: "Sushi Place" },
    { id: 2, name: "Pizza Place" },
  ];
  let loadRestaurants;
  let context;
  beforeEach(() => {
    loadRestaurants = jest.fn().mockName("loadRestaurants");
    context = render(
      <RestaurantList
        loadRestaurants={loadRestaurants}
        restaurants={restaurants}
      />
    );
  });
  it("loads restaurants on first render", () => {
    expect(loadRestaurants).toHaveBeenCalled();
  });
  it("displays the restaurants", () => {
    const { queryByText } = context;
    expect(queryByText("Sushi Place")).not.toBeNull(); //Query By Text contains references to elements
    expect(queryByText("Pizza Place")).not.toBeNull();
  });
});

//We don't want to connect anything to a redux store, instead connecting to a mock object.
//Jest mock function allows us to check if a function loadRestaurants was called
//Mock name makes this more readable allowing us to set an actual name
//Important to consider after 1+ tests that the test repetition can be refactored
