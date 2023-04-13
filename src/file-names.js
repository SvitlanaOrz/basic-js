const { NotImplementedError } = require("../extensions/index.js");

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  // throw new NotImplementedError("Not implemented");

  let arr = [];
  for (let i = 0; i < names.length; i++) {
    show(names[i], i);
  }
  function show(a, b) {
    if (arr.indexOf(a) != -1) {
      if (names.indexOf(a) === b && Number(a.slice(-2, -1))) {
        a = a + "(1)";
      } else if (Number(a.slice(-2, -1))) {
        a = a.slice(0, -2) + (Number(a.slice(-2, -1)) + 1) + ")";
      } else {
        a = a + "(1)";
      }
      show(a);
    } else {
      arr.push(a);
    }
  }
  return arr;
}

module.exports = {
  renameFiles,
};
