export function isPlayerAffordable(money, playerToSell, buyPrice) {
  if (buyPrice <= playerToSell.price + money) return true;
  return false;
}
export function addPlayerToTeam(currentTeam, playerToAdd) {
  let newTeam = currentTeam;
  for (let i = 0; i < currentTeam.length; i++) {
    if (newTeam[i].position === playerToAdd.position) {
      newTeam[i].name = playerToAdd.name;
      newTeam[i].position = playerToAdd.position;
      newTeam[i].price = parseInt(playerToAdd.price);
    }
  }
  return newTeam;
}
export function removePlayerFromTeam(currentTeam, positionToRemove) {
  let newTeam = currentTeam;
  for (let i = 0; i < currentTeam.length; i++) {
    if (newTeam[i].position === positionToRemove) {
      newTeam[i].name = "No Player selected";
      newTeam[i].position = positionToRemove;
      newTeam[i].price = 0;
    }
  }
  return newTeam;
}
function addMidfielderToTeam(newTeam, playerToAdd) {}
function isMidfielderAffordable() {
  const mid1Index = 2;
  const mid2Index = 3;
}
//Consider -> any empty (select)
//Consider -> both full select one if can afford
//Consider -> both full same price? User select?
//Consider -> both full neither can afford
