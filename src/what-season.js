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
  if (date === null || date === undefined) {
    return 'Unable to determine the time of year!';
  }

  if (!validateDate(date)) {
    throw new Error('Invalid date!');
  }

  const month = date.getMonth();

  if (month < 2) {
    return 'winter';
  } else if (month < 5) {
    return 'spring';
  } else if (month < 8) {
    return 'summer';
  } else if (month < 11) {
    return 'autumn';
  } else {
    return 'winter';
  }
}

module.exports = {
  getSeason
};

function validateDate(date) {
  if (!(date instanceof Date)) {
    return false;
  }

  let dateString = date.toString();
  let newDate = new Date(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds());

  return !(dateString !== newDate.toString() || dateString !== date.toString());
}
