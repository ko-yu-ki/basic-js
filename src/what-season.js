const CustomError = require("../extensions/custom-error");

const seasons = {
  'Dec' : 'winter',   'Jan': 'winter',  'Feb': 'winter',
  'Mar': 'spring', 'Apr': 'spring', 'May': 'spring',
  'Jun' : 'summer',  'Jul' : 'summer', 'Aug': 'summer',
  'Sep' : 'autumn',  'Oct': 'autumn',  'Nov': 'autumn',
}
module.exports = function getSeason(date) {
  if (!date) { return 'Unable to determine the time of year!'; }

  if (date.toDateString().split(' ')[1] in seasons) {
  return seasons[date.toDateString().split(' ')[1]]};
};

