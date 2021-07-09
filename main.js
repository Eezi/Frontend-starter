const SHA256 = require('crypto-js/sha256');

class Block {
  constructor(index, timeStamp, data, previousHash = '') {
    this.index = index;
    this.timeStamp = timeStamp;
    this.data = data;
    this.previousHash = previousHash
    this.hash = this.caclulateHash()
  }

  caclulateHash() {
    return SHA256(this.index + this.previousHash + this.timeStamp + JSON.stringify(this.data)).toString();
  }
}

class BlockChain {
  constructor() {
    this.chain = [this.createGenesisBlock()]
  }

  createGenesisBlock() {
    return new Block(0, '11/06/2021', 'Genesis Block', '0');
  }

  getLatestBlock() {
    return this.chain[this.chain.length - 1];
  }

  addBlock(newBlock) {
    newBlock.previousHash = this.getLatestBlock().hash;
    newBlock.hash = newBlock.caclulateHash();
    this.chain.push(newBlock);
  }

  isChainValid() {
    for (let i = 1; i < this.chain.length; i++) {
      const currentBlock = this.chain[i];
      const previousBlock = this.chain[i - 1];

      if (currentBlock.hash !== currentBlock.caclulateHash()) {
        return false;
      }
      
      if (currentBlock.previousHash !== previousBlock.hash) {
        return false;
      }
      
      return true;
    }
  }
}

let tomiCoin = new BlockChain();
tomiCoin.addBlock(new Block(1, "6.7.2021", { amount: 4 } ));
tomiCoin.addBlock(new Block(2, new Date(), { amount: 10 } ));

console.log(JSON.stringify(tomiCoin, null, 4));
console.log('Is blockchain valid?', tomiCoin.isChainValid());

tomiCoin.chain[1].data = { amount: 1000 };



