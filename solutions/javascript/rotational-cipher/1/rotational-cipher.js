export const rotate = (str, key) => {
  return str.replace(/[a-zA-Z]/gi, (letter) => {
    const offset = /[a-z]/.test(letter) ? "a".charCodeAt(0) : "A".charCodeAt(0);
    let code = letter.charCodeAt(0) - offset;
    code = (code + key) % 26;
    return String.fromCharCode(code + offset);
  });
};
