export const translate = (str) => {
  return str.split(' ').map(toPigLatin).join(' ');
};

const toPigLatin = (word) => {
  const start = /^[aeiou]|^xr|^yt/.test(word) ? 0 :
    /^.qu|^thr|^sch/.test(word) ? 3 :
    /^ch|^qu|^th|^...y|^rh/.test(word) ? 2 : 1;
  return word.slice(start) + word.slice(0, start) + 'ay';
}
