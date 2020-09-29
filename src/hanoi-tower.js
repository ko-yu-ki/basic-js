const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let steps = 0;
  let time = 0;
  steps = Math.pow(2, disksNumber) - 1;
  time = Math.floor(steps / (turnsSpeed/3600));
  return {'turns':steps, 'seconds':time};
};
