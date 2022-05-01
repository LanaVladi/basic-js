const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
 function deleteDigit(n) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if (Number.isInteger(n)) {
      let arrNum = n.toString().split('');
      //  console.log('arrNum :', arrNum);
      for (let i = 0; i < arrNum.length; i++) {
          if (arrNum.length > 2) {
              if (arrNum[i - 1] < arrNum[i]) {
                  // console.log(arrNum[i-1]);
                  let elemIndex = arrNum.indexOf(arrNum[i - 1]);
                  // console.log('elemIndex :', elemIndex);
                  let removed = arrNum.splice(elemIndex, 1);
                  // console.log('removed :', removed);
                  //  console.log('arrNum :', arrNum);
                  let str = arrNum.join('');
                  //  console.log('str :', str);
                  return Number(str);
                  // console.log('Number(str) :', Number(str));
              }
          } else {
              return Math.max(...arrNum);
              // console.log('Math.max(...arrNum) :', Math.max(...arrNum));
          }
      }
  }
}
 
module.exports = {
  deleteDigit
};
