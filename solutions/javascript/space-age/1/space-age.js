export const age = (planet, ageInSeconds) => {
  const earthYearSeconds = 31557600;
  let orbitalPeriod = 0;

  switch (planet) {
    case "mercury":
      orbitalPeriod = 0.2408467;
      break;
    case "venus":
      orbitalPeriod = 0.61519726;
      break;
    case "earth":
      orbitalPeriod = 1;
      break;
    case "mars":
      orbitalPeriod = 1.8808158;
      break;
    case "jupiter":
      orbitalPeriod = 11.862615;
      break;
    case "saturn":
      orbitalPeriod = 29.447498;
      break;
    case "uranus":
      orbitalPeriod = 84.016846;
      break;
    case "neptune":
      orbitalPeriod = 164.79132;
  }

  const ageInEarthYears = ageInSeconds / earthYearSeconds;
  const planetYears = ageInEarthYears / orbitalPeriod;
  return parseFloat(planetYears.toFixed(2));
};
