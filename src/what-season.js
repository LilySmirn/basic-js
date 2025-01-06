const { NotImplementedError } = require('../extensions/index.js');

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
  if (!(date instanceof Date) || isNaN(date)) {
    throw new Error('Invalid date!');
  }

  const seasons = ['winter', 'spring', 'summer', 'autumn'];

  const month = date.getMonth();

  if (month === 11 || month <= 1) {
    return seasons[0];
  } else if (month <= 4) {
    return seasons[1];
  } else if (month <= 7) {
    return seasons[2];
  } else {
    return seasons[3];
  }
}

module.exports = {
  getSeason
};
