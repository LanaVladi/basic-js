const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  //   let options = {
  //     repeatTimes: 3,
  //     separator: "**",
  //     addition: "PLUS",
  //     additionRepeatTimes: 3,
  //     additionSeparator: "00",
  //   };
  //   let str = "STRING";

  //   let options = {
  //   repeatTimes: 3,
  //   separator: '♥♥♥  ',
  //   addition: ' пОкАкУнЬкАл ',
  //   additionRepeatTimes: 5,
  //   additionSeparator: '( ͡° ͜ʖ ͡°)',
  // };
  // let str = 'аГуСиК ';

  let defaultSeparator = "+";
  let defaultAdditionSeparator = "|";

  let result = "";
  let separator = options.separator !== undefined ? `${options.separator}` : defaultSeparator;
  let addition = options.addition !== undefined ? `${String(options.addition)}` : "";
  let additionSeparator = options.additionSeparator !== undefined ? `${options.additionSeparator}` : defaultAdditionSeparator;
  let additionRepeatTimes = options.additionRepeatTimes !== undefined ? `${options.additionRepeatTimes}` : 1;

  let substr = `${addition}`
    .concat(`${additionSeparator}`)
    .repeat(`${additionRepeatTimes - 1}`);
  //   console.log('substr :', substr);

  let body = String(str)
    .concat("", `${substr}`, `${addition}`, `${separator}`)
    .repeat(`${options.repeatTimes - 1}`);
  // console.log('body :', body);

  let tail = String(str)
    .concat("", `${substr}`)
    .concat("", `${addition}`);
  // console.log('tail :', tail);
  result = body + tail;
  // console.log('result :', result);

  return result;
}

module.exports = {
  repeater,
};
