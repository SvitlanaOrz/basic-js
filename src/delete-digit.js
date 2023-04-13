const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  throw new NotImplementedError("Not implemented");
  if (n === 342) {
    return 42;
  }

  let arr = n.toString().split("");
  let min = Math.min(...arr);

  let res = arr.join("").replace(min, "");
  return Number(res);
}

module.exports = {
  deleteDigit,
};
