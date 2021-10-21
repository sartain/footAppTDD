export function getPlayerInfoFromTeam(playerInfoAsList) {
  return {
    position: playerInfoAsList.position,
    name: playerInfoAsList.name,
    price: playerInfoAsList.price,
  };
}
export function getPlayerRowFromTeam(team, addPosition) {
  let newTeam = team;
  for (let i = 0; i < newTeam.length; i++) {
    if (newTeam[i].position === addPosition) {
      return getPlayerInfoFromTeam(newTeam[i]);
    }
  }
  return getPlayerInfoFromTeam(newTeam[2]);
}
