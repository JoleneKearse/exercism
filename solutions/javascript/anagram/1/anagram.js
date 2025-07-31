export const findAnagrams = (target, arr) => {
  let anagrams = [];

  for (let i = 0; i < arr.length; i++) {
    if (cleanWords(target) == cleanWords(arr[i])) {
      if (target.toLowerCase() !== arr[i].toLowerCase()) {
        anagrams.push(arr[i]);
      }
    }
  }

  console.log(anagrams);
  return anagrams;
};

function cleanWords(word) {
  return word
    .toLowerCase()
    .split("")
    .sort((a, b) => a.localeCompare(b))
    .join("");
}

findAnagrams("solemn", ["lemons", "cherry", "melons"]);
