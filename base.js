const dropFirst = xs => xs.slice(1);
const dropLast = xs => xs.slice(0, xs.length - 1);
const rnd = min => max => Math.floor(Math.random() * max) + min;
const mod = x => y => ((y % x) + x) % x;
const merge = o1 => o2 => Object.assign({}, o1, o2);
const map = f => xs => xs.map(f);

module.exports = {
  dropFirst,
  dropLast,
  rnd,
  mod,
  merge,
  map
};
