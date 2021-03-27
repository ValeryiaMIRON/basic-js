const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let depth = 1
      for(let i = 0;i < arr.length;i++) {
        let result = 1
        if (Array.isArray(arr[i])) {
        result += this.calculateDepth(arr[i])
        if (result > depth) {
          depth = result
          }
        }
        
}
return depth
  }

};