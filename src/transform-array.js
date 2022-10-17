const { NotImplementedError } = require("../extensions/index.js");

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
  //   throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  if (arr instanceof Array) {
    let result = [...arr].flat(Infinity);

    // for (let i = 0; i < result.length; i++) {

    if (result.indexOf(`--discard-prev`) !== -1) {
      if (
        result.indexOf(`--discard-prev`) !== 0 ||
        arr.indexOf(`--discard-prev`) - 1 !== arr.indexOf(`--discard-next`) + 1
      ) {
        result.splice(result.indexOf(`--discard-prev`) - 1, 2);
      } else if (
        result.indexOf(`--discard-prev`) === 0 ||
        arr.indexOf(`--double-next`) + 1 === arr.indexOf(`--discard-prev`) - 1
      ) {
        result.splice(result.indexOf(`--discard-prev`), 1);
      }
    }

    if (result.indexOf(`--discard-next`) !== -1) {
      result.indexOf(`--discard-next`) !== result.length - 1
        ? result.splice(result.indexOf(`--discard-next`), 2)
        : result.splice(result.indexOf(`--discard-next`), 1);
    }

    if (result.indexOf(`--double-next`) !== -1) {
      if (result.indexOf(`--double-next`) !== result.length - 1) {
        //    find next elem
        let nextElem = result.find(
          (elem) => elem == result[result.indexOf(`--double-next`) + 1]
        );
        //    add next elem
        result.splice(result.indexOf(`--double-next`) + 1, 0, nextElem);

        // delete Sequence
        result.splice(result.indexOf(`--double-next`), 1);
      } else if (
        result.indexOf(`--double-next`) === result.length - 1 ||
        arr.indexOf(`--double-next`) + 1 === arr.indexOf(`--discard-prev`) - 1
      ) {
        // delete Sequence
        result.splice(result.indexOf(`--double-next`), 1);
      }
    }

    if (result.indexOf(`--double-prev`) !== -1) {
      if (
        result.indexOf(`--double-prev`) !== 0 &&
        arr.indexOf(`--double-prev`) - 1 !== arr.indexOf(`--discard-next`) + 1
      ) {
        //    find prev elem
        let prevElem = result.find(
          (elem) => elem === result[result.indexOf(`--double-prev`) - 1]
        );

        //    add prev elem
        result.splice(result.indexOf(`--double-prev`) - 1, 0, prevElem);

        // delete Sequence
        result.splice(result.indexOf(`--double-prev`), 1);
      } else if (
        result.indexOf(`--double-prev`) === 0 ||
        arr.indexOf(`--double-prev`) - 1 === arr.indexOf(`--discard-next`) + 1
      ) {
        // delete Sequence
        result.splice(result.indexOf(`--double-prev`), 1);
        console.log("result :", result);
      }
    }
    return result;
  } else {
    throw new Error(`'arr' parameter must be an instance of the Array!`);
  }
}

module.exports = {
  transform,
};
