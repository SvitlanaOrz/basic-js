const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  throw new NotImplementedError("Not implemented");

  let arr = email.split("");
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[arr.length - i] === "@") {
      break;
    } else {
      res.unshift(arr[arr.length - i]);
    }
  }
  return res.join("");
}

module.exports = {
  getEmailDomain,
};
