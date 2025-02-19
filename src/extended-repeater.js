const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  // throw new NotImplementedError("Not implemented");

  const repeatTimes = options.repeatTimes || 1;
  const separator = options.separator || "+";
  let addition = options.addition !== undefined ? String(options.addition) : "";
  const additionRepeatTimes = options.additionRepeatTimes || 1;
  const additionSeparator = options.additionSeparator || "|";

  let repeatedAddition = addition;
  if (additionRepeatTimes > 1) {
    repeatedAddition =
      (addition + additionSeparator).repeat(additionRepeatTimes - 1) + addition;
  }

  let repeatedStr = str + repeatedAddition;
  if (repeatTimes > 1) {
    repeatedStr =
      (str + repeatedAddition + separator).repeat(repeatTimes - 1) +
      str +
      repeatedAddition;
  }

  return repeatedStr;
}

module.exports = {
  repeater,
};
