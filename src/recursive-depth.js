const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(array, depth, maxDepth) {
    let flag;
    let x;
    if (!Array.isArray(array)) {
      throw 'error';
    } else {
      if (depth === undefined) {depth = 1; };
      if (maxDepth === undefined) {maxDepth = depth;}
      flag = false;
    }
    if (array.length === 0) { return depth };
    for (let i = 0; i < array.length; i++) {
      if (!Array.isArray(array[i])) {
        delete array[i];
      } else {
        flag = true;
      } 
    }  
    if (flag) { depth++ };
    array = array.flat(1);
    maxDepth = maxDepth > (x = this.calculateDepth(array, depth, maxDepth)) ? maxDepth : x;
    return maxDepth;
  }
}