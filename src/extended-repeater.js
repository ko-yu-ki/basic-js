 const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  if (typeof(str) !== 'string' || typeof(options.addition) !== 'string') {str = ''+ str; options.addition = '' + options.addition}
  if (!options.separator) {options.separator ='+';}
  if (!options.additionSeparator) {options.additionSeparator ='|';}
  let element = new Array;
  let result = new Array;
  
  element.push(str);
      // console.log(element);
  if(!options.additionRepeatTimes && options.addition !== 'undefined') {
     element.push(options.addition);
  } else {
    for (let i = 0; i < options.additionRepeatTimes; i++) {
      element.push(options.addition);
      if( i < options.additionRepeatTimes - 1) {
        element.push(options.additionSeparator);
      }
    }
  }
    console.log(element);
  if(!options.repeatTimes) {
    result.push(element.join(''));
  } else {
    for (let i = 0; i < options.repeatTimes; i++) {
      result.push(element.join(''));
      if( i < options.repeatTimes - 1) {
        result.push(options.separator);
      }
    }
  }
      // console.log(result);
  return result.join('');
};
  