const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let turnsMin = (2 ** disksNumber) - 1;
  let secondsMin = Math.floor(turnsMin * 60 * 60 / turnsSpeed)
  
  return {turns: turnsMin, seconds: secondsMin}
};
