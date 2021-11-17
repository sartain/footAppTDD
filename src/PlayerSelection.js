import React from "react";
import { Player } from "./Player";
import playerList from "./playerList.json";
export default class PlayerSelection extends React.Component {
  loadPlayers = () => {
    return playerList.map((playerData) => (
      <l1 key={playerData.name}>
        <Player
          id="player-option"
          playerInfo={playerData}
          selectPlayer={() => this.props.handleChange(playerData)}
        />
      </l1>
    ));
  };
  render() {
    return (
      <div class="player-selection">
        <ul id={this.props.id}>{this.loadPlayers()}</ul>
      </div>
    );
  }
}
