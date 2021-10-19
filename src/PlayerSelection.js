import { Player } from "./Player";
export const PlayerSelection = (props) => (
  <ul id={props.id}>
    <l1>
      <Player id="player-option" handleChange={props.handleChange}></Player>
    </l1>
  </ul>
);
