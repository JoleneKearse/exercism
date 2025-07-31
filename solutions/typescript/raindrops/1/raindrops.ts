export function convert(number: number) {
  let sound = "";
  if (number % 3 === 0) sound += "Pling";
  if (number % 5 === 0) sound += "Plang";
  if (number % 7 === 0) sound += "Plong";
  if (number % 3 !== 0 && number % 5 !== 0 && number % 7!== 0) sound += number;
  return sound;
}
