import { getPlayerRowFromTeam } from "./PlayerHelper";
export function isPlayerSelectable(team, money, previousPlayer, playerToBuy) {
  let noDuplication = true;
  if (playerToBuy.position === "mid")
    noDuplication = midfielderAlreadyInTeam(team, playerToBuy.name);
  if (noDuplication) {
    let previousPlayerPrice = previousPlayer.price;
    if (playerToBuy.price <= previousPlayerPrice + money) return true;
  }
  return false;
}
export function addPlayerToTeam(currentTeam, playerToAdd) {
  let newTeam = currentTeam;
  if (playerToAdd.position === "mid")
    return addMidfielderToTeam(newTeam, playerToAdd);
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
//Assumption new team not yet overwritten so position may be empty
function addMidfielderToTeam(newTeam, playerToAdd) {
  //Handle empty position case
  const MID1 = 2;
  const MID2 = 3;
  let index = -1;
  let position = "";
  if (newTeam[MID1].price === 0) {
    index = MID1;
    position = "mid1";
  } else if (newTeam[MID2].price === 0) {
    index = MID2;
    position = "mid2";
  }
  //else calculate price etc
  if (index === 2 || index === 3) {
    newTeam[index].name = playerToAdd.name;
    newTeam[index].position = position;
    newTeam[index].price = parseInt(playerToAdd.price);
  }
  return newTeam;
}
//Calculate price based on specific position
function isMidfielderAffordable(money, team, buyPrice) {
  const mid1Index = 2;
  const mid2Index = 3;
  let sellPrice = 0;
  if (team[mid1Index].price === 0 || team[mid2Index] === 0) {
    sellPrice = 0;
  } else if (team[mid2Index].price === 0) {
    sellPrice = 0;
  } else {
    sellPrice = team[mid1Index].price;
  }
  if (buyPrice <= sellPrice + money) return true;
  return false;
}
//Consider -> any empty (select)
//Consider -> both full select one if can afford
//Consider -> both full same price? User select?
//Consider -> both full neither can afford
export function getPreviousPlayer(team, position) {
  let oldTeam = team;
  if (position === "mid")
    return getPlayerRowFromTeam(oldTeam, getMidfielderPosition(oldTeam));
  let previousPlayer = getPlayerRowFromTeam(oldTeam, position);
  return previousPlayer;
}
function getMidfielderPosition(team) {
  const mid1Index = 2;
  const mid2Index = 3;
  let position = "";
  if (team[mid1Index].price === 0) {
    position = "mid1";
  } else if (team[mid2Index].price === 0) {
    position = "mid2";
  } else {
    return null;
  }
  return position;
}
function midfielderAlreadyInTeam(team, name) {
  const mid1Index = 2;
  const mid2Index = 3;
  if (team[mid1Index].name === name || team[mid2Index].name === name) {
    return false;
  }
  return true;
}
