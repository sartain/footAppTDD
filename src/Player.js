export const Player = (props) => (
  <h1 id={props.id} onClick={() => props.selectPlayer(props.playerInfo)}>
    {props.playerInfo.name} £{props.playerInfo.price}M
  </h1>
);
