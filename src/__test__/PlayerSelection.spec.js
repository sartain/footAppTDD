import PlayerSelection from "../PlayerSelection";
import { render } from "@testing-library/react";
//We want to load the players
describe("Player Selection", () => {
  const playerFromFile = "pickford";
  it("Loads players from a json file", () => {
    const { container, getByText } = render(<PlayerSelection />);
    expect(getByText(playerFromFile)).toBeInTheDocument();
  });
  it("Puts players into a list", () => {});
  it("Displays the list on a screen", () => {});
});
