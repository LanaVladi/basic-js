const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
 function countCats(matrix) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  // let matrix =  [
  //   ['##', 'dd', '00'],
  //   ['^^', '..', 'ss'],
  //   ['AA', 'dd', 'Oo'],
  // ];
  let result;
  let countResults = [];
  if (matrix.length === 0) {
      // console.log('matrix.length :', matrix.length);
      result = 0;
  } else {
      for (let i = 0; i < matrix.length; i++) {
          //  console.log('matrix :', matrix);
          for (let j = 0; j < matrix[i].length; j++) {
              if (matrix[i][j] !== '^^') {
                  // console.log('matrix[i][j] :', matrix[i][j]);
                  result = 0;
              } else {
                  //  if (matrix[i][j] === '^^') {
                  // console.log('matrix[i][j] :', matrix[i][j]);
                  countResults.push(matrix[i][j]);
                  //  countResults.length; 
                  //  console.log('countResults:', countResults);
                  // console.log('result :', result);
              }
              // return result;
          }
      }
  }
  return countResults.length;
}


module.exports = {
  countCats
};