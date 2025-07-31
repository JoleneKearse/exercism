export const parse = (str) => {
  const stripedStr = str.replace(/[^a-zA-Z\s']/g, " ");
  const strArr = stripedStr.split(/\s+/);
  return strArr.map((word) => word.charAt(0).toUpperCase()).join("");
};
