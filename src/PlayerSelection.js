import React from "react";
import { Player } from "./Player";
import playerList from "./playerList.json";
export default class PlayerSelection extends React.Component {
  loadPlayers = () => {
    return playerList.map((playerData) => (
      <l1 key={playerData.name}>
        <Player
          id="player-option"
          name={playerData.name}
          selectPlayer={() => this.props.handleChange(playerData.name)}
        />
      </l1>
    ));
  };
  render() {
    return <ul id={this.props.id}>{this.loadPlayers()}</ul>;
  }
}
