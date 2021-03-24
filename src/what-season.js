const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (!date){
    return 'Unable to determine the time of year!';
    }

    if (Object.prototype.toString.call(date) !== '[object Date]') {
     throw new TypeError
    }
let mm = date.getMonth();

if (mm > 1 && mm <= 4) {
 return 'spring'
 } else if (mm > 4 && mm <= 7) {
   return 'summer'
   } else if (mm > 7 && mm <= 10) {
     return 'autumn'
     } else {
       return 'winter'
       }

};
