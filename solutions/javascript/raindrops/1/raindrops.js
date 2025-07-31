export const convert = (num) => {
  let result = '';
  const threeCheck = num % 3 === 0;
  const fiveCheck = num % 5 === 0;
  const sevenCheck = num % 7 === 0;
  
  if (threeCheck) {
    result += 'Pling';
    if (fiveCheck) {
      result += 'Plang';
      if (sevenCheck) {
        result += 'Plong';
      }
    } else if (sevenCheck) {
      result += 'Plong';
    }
  } else if (fiveCheck) {
    result += 'Plang';
    if (sevenCheck) {
      result += 'Plong';
    }
  } else if (sevenCheck) {
    result += 'Plong';
  } else {
    result += num;
  }

  return result;
};
