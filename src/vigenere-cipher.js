const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(direction) {
    if (direction === false) {
      this.direction = false;
    } else {
      this.direction = true;
    }

    this.alphabeth = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  }

  encrypt(str, key) {
    if (!str || !key) {throw 'error';}
    let encrypted = [];
    let indexOfEncrypted = 0;
    let j = 0;
    for (let i = 0; i < str.length; i++) {
      if (j > key.length-1) { j = 0; }

      if (this.alphabeth.indexOf(str[i].toUpperCase())> -1) {
        indexOfEncrypted = this.alphabeth.indexOf(key[j].toUpperCase()) + this.alphabeth.indexOf(str[i].toUpperCase());
        encrypted[i] = this.alphabeth[indexOfEncrypted % 26];
        j++;
      } else {
        encrypted[i] = str[i];
      }
    }
    if (this.direction) { 
      return encrypted.join('');
    } else {
      return encrypted.reverse().join('');
    }
  }   

  decrypt(encrypted, key) {
    if (!encrypted || !key) {throw 'error';}
    let str = [];
    let indexOfString = 0;
    let j = 0;

    for (let i = 0; i < encrypted.length; i++) {
      if (j > key.length-1) { j = 0; }

      if (this.alphabeth.indexOf(encrypted[i].toUpperCase())> -1) {
        indexOfString = this.alphabeth.indexOf(encrypted[i].toUpperCase()) + this.alphabeth.length - this.alphabeth.indexOf(key[j].toUpperCase());
        str[i] = this.alphabeth[indexOfString % 26];
        j++;
      } else {
        str[i] = encrypted[i];
      }
    }
    if (this.direction) { 
      return str.join('');
    } else {
      return str.reverse().join('');
    }
  }
}


module.exports = VigenereCipheringMachine;
