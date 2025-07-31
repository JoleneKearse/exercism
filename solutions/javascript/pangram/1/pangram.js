export const isPangram = (str) => {
  if (!str) return false;

  let asciiLowercaseValues = [
    97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112,
    113, 114, 115, 116, 117, 118, 119, 120, 121, 122,
  ];

  str
    .toLowerCase()
    .split("")
    .map((char) => {
      const index = asciiLowercaseValues.indexOf(char.charCodeAt(0));
      if (index !== -1) {
        asciiLowercaseValues.splice(index, 1);
      }
    });
  return asciiLowercaseValues.length === 0;
};
