export function needsLicense(kind) {
  return (kind === "car" || kind === "truck");
}

export function chooseVehicle(option1, option2) {
  return option1.slice(0) < option2.slice(0) ? `${option1} is clearly the better choice.` : `${option2} is clearly the better choice.`;
}

export function calculateResellPrice(originalPrice, age) {
  if (age < 3) {
    return originalPrice * .8;
  } else if (age > 10) {
    return originalPrice * .5;
  } else {
    return originalPrice * .7;
  }
}
