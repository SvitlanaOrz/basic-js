const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  throw new NotImplementedError("Not implemented");
  let res = [];
  let count = 1;

  for (let char of str) {
    if (res.length === 0) {
      res.push(char);
    } else if (res[res.length - 1] === char) {
      count++;
    } else if (res[res.length - 1] !== char && count > 1) {
      let lastchar = res.pop();
      res.push(count);
      res.push(lastchar);
      res.push(char);
      count = 1;
    } else {
      res.push(char);
    }
  }
  if (count > 1) {
    let lastchar = res.pop();
    res.push(count);
    res.push(lastchar);
  }
  return res.join("");
}

module.exports = {
  encodeLine,
};
