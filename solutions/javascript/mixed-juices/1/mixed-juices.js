export function timeToMixJuice(name) {
  switch (name) {
    case "Pure Strawberry Joy":
      return 0.5;
    case "Energizer":
      return 1.5;
    case "Green Garden":
      return 1.5;
    case "Tropical Island":
      return 3;
    case "All or Nothing":
      return 5;
    default:
      return 2.5;
  }
}

export function limesToCut(wedgesNeeded, limes) {
  let totalWedgesCut = 0;
  let limeIndex = 0;

  while (totalWedgesCut < wedgesNeeded && limeIndex < limes.length) {
    const limeType = limes[limeIndex];

    if (limeType === "small") {
      totalWedgesCut += 6;
    } else if (limeType === "medium") {
      totalWedgesCut += 8;
    } else if (limeType === "large") {
      totalWedgesCut += 10;
    }

    limeIndex++;
  }
  return limeIndex;
}

export function remainingOrders(timeLeft, orders) {
  while (timeLeft > 0) {
    timeLeft -= timeToMixJuice(orders[0]);
    orders.shift();
  }
  return orders;
}


