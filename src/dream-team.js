const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
    if (typeof(members) !== 'object' || !members) {return false;}
    let commandName='';
    let i = 0;
    let member ='';
    while (i < members.length) {
      if (typeof(members[i]) === 'string') {
        member = members[i].trim();
        commandName += member[0].toUpperCase();
      }
      i++;
    }
  
  return commandName.split('').sort().join('');
  };
