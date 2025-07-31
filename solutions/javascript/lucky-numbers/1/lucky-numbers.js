// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
  const sum1 = array1.toString().replace(/,/g, "");
  const sum2 = array2.toString().replace(/,/g, "");
  return Number(sum1) + Number(sum2);
}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean} whether the number is a palindrome or not
 */
export function luckyNumber(value) {
  return value === Number([...value.toString()].reverse().join(""));
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {
  if (input === undefined || input === null || input === "") {
    return "Required field";
  }

  const numericInput = Number(input);
  if (isNaN(numericInput) || numericInput === 0) {
    return "Must be a number besides 0";
  }

  return "";
}
