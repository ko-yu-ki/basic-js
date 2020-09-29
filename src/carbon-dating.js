const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (!sampleActivity || typeof(sampleActivity) !== 'string' || +sampleActivity !== 'number') return false;

  let k = Math.LN2/HALF_LIFE_PERIOD;
  let t = 0;
  t = Math.ceil((Math.log(15/+sampleActivity))/k);
  return t;
};

