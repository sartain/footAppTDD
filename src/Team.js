import React from "react";
import { Player } from "./Player";
import { getPlayerInfoFromTeam } from "./PlayerHelper";
export default class Team extends React.Component {
  getPlayers = () => {
    return this.props.playerInfo.map((player) => (
      <li key="player">
        <Player
          id={player.position}
          playerInfo={getPlayerInfoFromTeam(player)}
          selectPlayer={() =>
            this.props.deselectPlayer(getPlayerInfoFromTeam(player))
          }
        />
      </li>
    ));
  };
  render() {
    return (
      <div id={this.props.id}>
        <ul id="selected-player">{this.getPlayers(this.props)}</ul>
      </div>
    );
  }
}
