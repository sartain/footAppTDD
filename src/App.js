import PlayerSelection from "./PlayerSelection";
import Team from "./Team";
import React from "react";
import { Money } from "./Money";
import {
  isPlayerAffordable,
  addPlayerToTeam,
  removePlayerFromTeam,
} from "./SelectPlayer.js";
import { getPlayerRowFromTeam } from "./PlayerHelper";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      money: 2,
      team: [
        { name: "No Player selected", price: 0, position: "gk" },
        { name: "No Player selected", price: 0, position: "def" },
        { name: "No Player selected", price: 0, position: "mid1" },
        { name: "No Player selected", price: 0, position: "mid2" },
        { name: "No Player selected", price: 0, position: "for" },
      ],
    };
  }
  handleChange = (playerToBuy) => {
    let previousPlayer = getPlayerRowFromTeam(
      this.state.team,
      playerToBuy.position
    );
    if (
      isPlayerAffordable(this.state.money, previousPlayer, playerToBuy.price)
    ) {
      let newTeam = addPlayerToTeam(this.state.team, playerToBuy);
      //function to get a new team
      this.setState({
        money: parseInt(
          this.state.money + previousPlayer.price - playerToBuy.price
        ),
        team: newTeam,
      });
    }
  };
  deselectPlayer = (playerToDeselect) => {
    let newTeam = removePlayerFromTeam(
      this.state.team,
      playerToDeselect.position
    );
    this.setState({
      money: parseInt(this.state.money + playerToDeselect.price),
      team: newTeam,
    });
  };
  render() {
    return (
      <div>
        <Money id="money" currentMoney={this.state.money} />
        <Team
          id="team"
          playerInfo={this.state.team}
          deselectPlayer={this.deselectPlayer}
        />
        <PlayerSelection
          id="player-selection"
          handleChange={this.handleChange}
        />
      </div>
    );
  }
}

export default App;
//In React TDD it is common to write what we want (code you wish you had)
//This can include writing components that don't yet exist knowing we will add them
//in the future.
//the redux store is the way of setting up / configuring a redux-store in the application
