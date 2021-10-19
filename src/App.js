import { PlayerSelection } from "./PlayerSelection";
import { Team } from "./Team";
import { Player } from "./Player";
import React from "react";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      team: <li></li>,
    };
  }
  handleChange = () => {
    this.setState({
      team: <Player id="selected-player" />,
    });
  };
  render() {
    return (
      <div>
        <Team id="team" player={this.state.team} />
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
