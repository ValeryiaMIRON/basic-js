const CustomError = require("../extensions/custom-error");

module.exports = function countCats( matrix ) {
  let sum = 0;
  let arr = matrix.flat();
  console.log(arr);
  for (let i = 0; i < arr.length;i++) {
    if (arr[i] === '^^') {
      sum += 1;
      }
    }
  return sum
};
