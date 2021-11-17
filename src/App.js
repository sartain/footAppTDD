import PlayerSelection from "./PlayerSelection";
import Team from "./Team";
import React from "react";
import { Money } from "./Money";
import {
  isPlayerAffordable,
  addPlayerToTeam,
  removePlayerFromTeam,
  getPreviousPlayer,
  isPlayerSelectable,
} from "./SelectPlayer.js";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      money: 10,
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
    let previousPlayer = getPreviousPlayer(
      this.state.team,
      playerToBuy.position
    );
    if (previousPlayer == null) {
      return;
    }
    let previousPlayerPrice = previousPlayer.price;
    if (
      isPlayerSelectable(
        this.state.team,
        this.state.money,
        previousPlayer,
        playerToBuy
      )
    ) {
      let newTeam = addPlayerToTeam(this.state.team, playerToBuy);
      //function to get a new team
      this.setState({
        money: parseInt(
          this.state.money + previousPlayerPrice - playerToBuy.price
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

//What I need to do next: Fix duplicate player selection
//What i need to do after that: ? Style, increase overall money see if it breaks
