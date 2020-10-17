const CustomError = require("../extensions/custom-error");

module.exports = function countCats(catsMatrix) {
  if (!catsMatrix || typeof(catsMatrix) !== 'object') return false;
  let cats = 0;
  for (let i = 0; i < catsMatrix.length; i++) {
    for (let j = 0; j < catsMatrix[i].length; j++) {
      if (catsMatrix[i][j] === '^^') {cats++;}
    }
  }
  return cats;
};
