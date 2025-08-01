export const toRoman = (num: number): string => {
  let romanNumeral = "";
  const table: Record<string, number> = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  }

  for (const key in table) {
    while (num >= table[key]) {
      romanNumeral += key;
      num -= table[key];
    }
  }
  return romanNumeral;
}
