/// <reference path="./global.d.ts" />
// @ts-check

export function cookingStatus(remainingTime) {
  if (remainingTime === null || remainingTime === undefined)
    return "You forgot to set the timer.";

  if (remainingTime === 0) return "Lasagna is done.";

  return "Not done, please wait.";
}

export function preparationTime(layers, timePerLayer = 2) {
  return layers.length * timePerLayer;
}

export function quantities(layers) {
  const NOODLES_QUANTITY = 50;
  const SAUCE_QUANTITY = 0.2;

  const numberOfNoodles = layers.filter((layer) => layer === "noodles").length;
  const numberOfSauce = layers.filter((layer) => layer === "sauce").length;

  return {
    noodles: numberOfNoodles * NOODLES_QUANTITY,
    sauce: numberOfSauce * SAUCE_QUANTITY,
  };
}

export function addSecretIngredient(friendList, myList) {
  myList.push(friendList[friendList.length - 1]);
}

export function scaleRecipe(recipe, portions) {
  const DEFAULT_PORTIONS = 2;
  let scaledRecipe = {};
  for (let ingredient in recipe) {
    scaledRecipe[ingredient] =
      recipe[ingredient] * (portions / DEFAULT_PORTIONS);
  }
  return scaledRecipe;
}
