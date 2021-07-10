const SHA256 = require('crypto-js/sha256');

class Block {
  constructor(index, timeStamp, data, previousHash = '') {
    this.index = index;
    this.timeStamp = timeStamp;
    this.data = data;
    this.previousHash = previousHash
    this.hash = this.caclulateHash()
    this.nonce = 0;
  }

  caclulateHash() {
    return SHA256(this.index + this.previousHash + this.timeStamp + JSON.stringify(this.data) + this.nonce).toString();
  }

  mainBlock(difficulty) {
    while(this.hash.substring(0, difficulty) !== Array(difficulty + 1).join("0")) {
      this.nonce++;
      this.hash = this.caclulateHash();
    }
    console.log("Block mained: ", this.hash)
  }
}

class BlockChain {
  constructor() {
    this.chain = [this.createGenesisBlock()]
    this.difficulty = 4;
  }

  createGenesisBlock() {
    return new Block(0, '11/06/2021', 'Genesis Block', '0');
  }

  getLatestBlock() {
    return this.chain[this.chain.length - 1];
  }

  addBlock(newBlock) {
    newBlock.previousHash = this.getLatestBlock().hash;
    newBlock.mainBlock(this.difficulty)
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
console.log('Maining block 1...')
tomiCoin.addBlock(new Block(1, "6.7.2021", { amount: 4 } ));
console.log('Maining block 2...')
tomiCoin.addBlock(new Block(2, new Date(), { amount: 10 } ));

console.log(JSON.stringify(tomiCoin, null, 4));
console.log('Is blockchain valid?', tomiCoin.isChainValid());

tomiCoin.chain[1].data = { amount: 1000 };



