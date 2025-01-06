const { NotImplementedError } = require('../extensions/index.js');

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
  const map = new Map();
  const result = [];

  for (let name of names) {
    if (map.has(name)) {
      const count = map.get(name);
      const newName = `${name}(${count})`;
      result.push(newName);
      map.set(name, count + 1);
      map.set(newName, 1);
    } else {
      result.push(name);
      map.set(name, 1);
    }
  }

  return result;
}

module.exports = {
  renameFiles
};
