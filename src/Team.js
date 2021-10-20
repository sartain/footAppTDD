import { Player } from "./Player";
export const Team = (props) => (
  <div id={props.id}>
    <Player id="selected-player" playerInfo={props.playerInfo} />
  </div>
);
