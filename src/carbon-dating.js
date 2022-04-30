const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

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
 function dateSample(sampleActivity) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  // let sampleActivity = '3';
  const MODERN_ACTIVITY = 15;
  const HALF_LIFE_PERIOD = 5730;
  // const ln2 = 0.693;
  //  const constantReaction = ln2 / HALF_LIFE_PERIOD;
  const constantReaction = (Math.log(2)) / HALF_LIFE_PERIOD;
  // Math.log(2);
  // console.log('Math.log(2) :', Math.log(2));
  // console.log('sampleActivity === false :', sampleActivity === false);
  // console.log('sampleActivity === null :', sampleActivity === null);
  // console.log('sampleActivity === undefined :', sampleActivity === undefined);
  // console.log('typeof (sampleActivity) !== \'string\' :', typeof (sampleActivity) !== 'string');
  // console.log('sampleActivity < 1 :', sampleActivity < 1);
  // console.log('sampleActivity > 15 :', sampleActivity > 15);
  if (typeof(sampleActivity) !== 'string' || isNaN(sampleActivity) || sampleActivity === undefined || sampleActivity === null || sampleActivity === false || sampleActivity > 15 || sampleActivity < 1) return false;
  // console.log('false :', false);
  let dateSample = Math.ceil(Math.abs((Math.log(sampleActivity / MODERN_ACTIVITY)) / constantReaction));
  return dateSample;
  // console.log('dateSample :', dateSample);
}

module.exports = {
  dateSample
};
