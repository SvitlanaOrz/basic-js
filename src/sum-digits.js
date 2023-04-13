const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  throw new NotImplementedError("Not implemented");

  let arr = n.toString().split("");
  let res = 0;

  for (let i = 0; i < arr.length; i++) {
    res = Number(res) + Number(arr[i]);
  }

  let resArr = res.toString().split("");
  let res2 = 0;

  if (resArr.length > 1) {
    for (let i = 0; i < resArr.length; i++) {
      res2 = Number(res2) + Number(resArr[i]);
    }
    return res2;
  } else {
    return res;
  }
}

module.exports = {
  getSumOfDigits,
};
