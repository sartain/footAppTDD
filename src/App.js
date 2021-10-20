import PlayerSelection from "./PlayerSelection";
import { Team } from "./Team";
import React from "react";
import { Money } from "./Money";
import { isPlayerAffordable } from "./SelectPlayer.js";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      money: 2,
      team: { name: "", price: 0 },
    };
  }
  handleChange = (playerToBuy) => {
    console.log(this.state.team.price);
    if (
      isPlayerAffordable(
        this.state.money,
        this.state.team.price,
        playerToBuy.price
      )
    ) {
      this.setState({
        money: parseInt(
          this.state.money + this.state.team.price - playerToBuy.price
        ),
        team: {
          name: playerToBuy.name,
          price: parseInt(playerToBuy.price),
        },
      });
    }
  };
  render() {
    return (
      <div>
        <Money id="money" currentMoney={this.state.money} />
        <Team id="team" playerInfo={this.state.team} />
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
