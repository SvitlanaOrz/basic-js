const { NotImplementedError } = require("../extensions/index.js");

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  throw new NotImplementedError("Not implemented");
  const month = date.getMonth();

  if (date.toString() == Date.prototype.toString.call(new Date())) {
    return false;
  }

  if (!(date instanceof Date && !isNaN(date.getTime()))) {
    throw new Error("Invalid date!");
  }
  if (!date) {
    return "Unable to determine the time of year!";
  }

  if (month < 2 || month > 10) {
    return "winter";
  } else if (month < 5) {
    return "spring";
  } else if (month < 7) {
    return "summer";
  } else if (month < 11) {
    return "autumn";
  } else {
    return false;
  }
}

module.exports = {
  getSeason,
};
