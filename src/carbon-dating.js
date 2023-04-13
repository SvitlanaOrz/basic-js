const { NotImplementedError } = require("../extensions/index.js");

const MODERN_ACTIVITY = 15; // базова активность изотопа
const HALF_LIFE_PERIOD = 5730; // период полураспада
// num - активность образца

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(num) {
  throw new NotImplementedError("Not implemented");

  if (typeof num !== "string") {
    return false;
  } else if (!Number(num)) {
    return false;
  } else if (Number(num) > 15 || Number(num) < 0) {
    return false;
  } else {
    let k = 0.693 / HALF_LIFE_PERIOD;
    // t = ln(N0 / N) / k;
    let t = Math.log(MODERN_ACTIVITY / num) / k;

    return Math.ceil(t);
  }
}

module.exports = {
  dateSample,
};
