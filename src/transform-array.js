const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  const result = [];
  let i = 0;
  let discardedInd = null;

  while (i < arr.length) {
    if (arr[i] === '--double-next') {
      if (i + 1 < arr.length) {
        result.push(arr[i + 1]);
      }
      i++;
    } else if (arr[i] === '--discard-next') {
      discardedInd = i + 1;
      if (i + 1 < arr.length) {
        i++;
      }
      i++;
    } else if (arr[i] === '--double-prev') {
      if (i - 2 >= 0 && arr[i - 2] !== '--discard-next') {
        result.push(arr[i - 1]);
      }
      i++;
    } else if (arr[i] === '--discard-prev') {
      if (i - 2 >= 0 && arr[i - 2] !== '--discard-next') {
        result.pop();
      }
      i++;
    } else {
      result.push(arr[i]);
      i++;
    }
  }

  return result;
}

module.exports = {
  transform
};
///
