export function totalBirdCount(birdsPerDay) {
  let sum = 0;
  for (let i = 0; i < birdsPerDay.length; i++) {
    sum += birdsPerDay[i];
  }
  return sum;
}

export function birdsInWeek(birdsPerDay, week) {
  let totalBirdsPerWeek = 0;
  const daysInAWeek = 7;

  for (let i = (week - 1) * daysInAWeek; i < week * daysInAWeek; i++) {
    totalBirdsPerWeek += birdsPerDay[i];
  }

  return totalBirdsPerWeek;
}

export function fixBirdCountLog(birdsPerDay) {
  for (let i = 0; i < birdsPerDay.length; i += 2) {
    birdsPerDay[i]++;
  }
  return birdsPerDay;
}
