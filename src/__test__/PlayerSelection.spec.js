import PlayerSelection from "../PlayerSelection";
import { render } from "@testing-library/react";
import playerList from "../playerList.json";
//We want to load the players
describe("Player Selection loading from JSON", () => {
  const playerFromFile = "pickford";
  it("Loads players from a json file", () => {
    let { container, getByText } = render(<PlayerSelection />);
    for (let playerID = 0; playerID < playerList.length; playerID++) {
      let currentPlayer = playerList[playerID];
      expect(
        getByText(
          currentPlayer.position +
            " " +
            currentPlayer.name +
            " £" +
            currentPlayer.price +
            "M"
        )
      ).toBeInTheDocument();
    }
  });
  it("Displays the players on the screen", () => {});
});
//Possibly all implicit? If the list exists then displayed on screen can check individual elements
//E.g checking the state even though the values are not stored in state
//With get by text, we specify exactly how we want a piece of text written on the screen
//This leads us to copying this approach in the actual selection (Driven by TDD)
