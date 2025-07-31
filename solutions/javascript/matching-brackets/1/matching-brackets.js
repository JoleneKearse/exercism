export const isPaired = (str) => {
  let stack = [];

  const openingBrackets = /[\[\{\(]/;

  const closingBrackets = /[\]\}\)]/;

  for (let i = 0; i < str.length; i++) {
    if (openingBrackets.test(str[i])) {
      stack.push(str[i]);
    }
    if (closingBrackets.test(str[i])) {
      if (stack.length === 0 || !matches(stack.pop(), str[i])) {
        return false;
      }
    }
  }

  if (stack.length === 0) {
    return true;
  } else {
    return false;
  }
};

function matches(opening, closing) {
  switch (opening) {
    case "[":
      return closing === "]";
    case "{":
      return closing === "}";
    case "(":
      return closing === ")";
    default:
      return false;
  }
}
