export const Player = (props) => (
  <h1 id={props.id} onClick={() => props.selectPlayer(props.name)}>
    {props.name}
  </h1>
);
