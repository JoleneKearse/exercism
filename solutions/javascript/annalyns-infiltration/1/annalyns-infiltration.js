export function canExecuteFastAttack(knightIsAwake) {
  return knightIsAwake === false;
}

export function canSpy(knightIsAwake, archerIsAwake, prisonerIsAwake) {
  return knightIsAwake || archerIsAwake || prisonerIsAwake;
}

export function canSignalPrisoner(archerIsAwake, prisonerIsAwake) {
  return prisonerIsAwake && archerIsAwake === false;
}

export function canFreePrisoner(
  knightIsAwake,
  archerIsAwake,
  prisonerIsAwake,
  petDogIsPresent
) {
  return petDogIsPresent && !archerIsAwake ? true : 
    prisonerIsAwake && !knightIsAwake && !archerIsAwake && !petDogIsPresent ? true : false
}
