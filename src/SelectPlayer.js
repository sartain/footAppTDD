export function isPlayerAffordable(money, sellPrice, buyPrice) {
  if (buyPrice <= sellPrice + money) return true;
  return false;
}
