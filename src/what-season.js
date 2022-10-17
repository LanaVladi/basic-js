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
  //   throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  const winterMonth = [11, 0, 01];
  const springMonth = [02, 03, 04];
  const summerMonth = [05, 06, 07];
  const autumnMonth = [08, 09, 10];

  if (!date) {
    return "Unable to determine the time of year!";
  }
  if ( !(date instanceof Date) ||
    Object.keys(date).length > 0 ||
    Object.is(NaN, date) === true ||
    Object.is(undefined, date) === true ||
    Object.is(null, date) === true
  ) {
    throw new Error(`Invalid date!`);
  }
  if (date instanceof Date) {
    let month = date.getMonth();
    if (winterMonth.includes(month)) {
      return "winter";
    }
    if (springMonth.includes(month)) {
      return "spring";
    }
    if (summerMonth.includes(month)) {
      return "summer";
    }
    if (autumnMonth.includes(month)) {
      return "autumn";
    }
  }
}

module.exports = {
  getSeason,
};
