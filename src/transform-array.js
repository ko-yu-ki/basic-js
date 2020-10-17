const CustomError = require("../extensions/custom-error");


// --discard-next excludes the next element of the array from the transformed array.
// --discard-prev excludes the previous element of the array from the transformed array.
// --double-next doubles the next element of the array in the transformed array.
// --double-prev doubles the previous element of the array in the transformed array.

module.exports = function transform(arr) {
  let newArr = new Array;
  if (!Array.isArray(arr)) { throw 'error'; }
  for (let i = 0; i < arr.length; i++) {
    if (!(((arr[i] === '--discard-prev' || arr[i] === '--double-prev') && i === 0) ||
       ((arr[i] === '--discard-next' || arr[i] === '--double-next') && i === arr.length-1))) {
      switch (arr[i]) {
        case '--discard-next': i++; 
        break;
        case '--discard-prev': if(arr[i-2] !== '--discard-next'){ newArr.pop(); };
        break;
        case '--double-next': newArr.push(arr[i+1]);
        break;
        case '--double-prev': if(arr[i-2] !== '--discard-next'){newArr.push(arr[i-1])};
        break;
        default: newArr.push(arr[i]);break;
      }
    }
  }
  return newArr;
};



