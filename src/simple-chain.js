const CustomError = require("../extensions/custom-error");

const chainMaker = {
  arr : [],
  getLength() {
    this.arr.length;
    return this
  },
  addLink(value) {
    if (value === undefined) {
        this.arr.push('( )')
        }
        this.arr.push(`( ${value} )`);
        return this
  },
  removeLink(position) {
    if (typeof position !== "number" || position < 1) {
      this.arr = []
      throw new Error();
      } 
        this.arr.splice(position - 1,1)
        return this
        
  },
  reverseChain() {
    this.arr.reverse()
    return this
  },
  finishChain() {
     let res = this.arr.join('~~')
     this.arr =[]
     return res
  }
};

module.exports = chainMaker;
