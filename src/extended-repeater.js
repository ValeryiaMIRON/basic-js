const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  if (typeof str != 'string') {
    str = str + ''
  }

  if (!options.hasOwnProperty('addition')) {
    options.addition = ''
  }

  if (typeof options.addition !== 'string') {
    options.addition = options.addition + ''
  }

if (options.separator == undefined){
  options.separator = '+'
}
if ( options.additionSeparator == undefined) {
    options.additionSeparator = '|'
  }

  let first = str + options.addition

  let second = (options.additionSeparator + options.addition).repeat(options.additionRepeatTimes - 1)
  let three = (first + second + options.separator).repeat(options.repeatTimes - 1) 
  let result = three + first + second
  return result
  
};
  