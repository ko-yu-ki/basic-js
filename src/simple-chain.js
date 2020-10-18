const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],
  chainString: '',
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push(value);
    return this;
  },
  removeLink(position) {
    if (position < 1 || position > this.getLength() || typeof(position) !== 'number') { this.chain.length = 0; throw 'error'; } 
    this.chain.splice(position-1, 1);
    return this;
  },
  reverseChain() {
    this.chain = this.chain.reverse();
    return this;
  },
  finishChain() {
    this.chainString ='';
    for (let i=0; i <= this.getLength() - 1; i++) {
      this.chainString += '( '+this.chain[i]+' )';
      if (i !== this.getLength() - 1) {
        this.chainString += '~~';
      }
    }
    this.chain.length = 0;
    return this.chainString;
  }
};
    

module.exports = chainMaker;
