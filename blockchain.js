
import sha256 from 'crypto-js/sha256.js';

class Transaction {
  constructor(fromAddress, toAddress, amount) {
    this.fromAddress = fromAddress;
    this.toAddress = toAddress;
    this.amount = amount;
  }
}

class Block {
  constructor(timeStamp, transactions, previousHash = '') {
    this.timeStamp = timeStamp;
    this.transactions = transactions;
    this.previousHash = previousHash
    this.hash = this.caclulateHash()
    this.nonce = 0;
  }

  caclulateHash() {
    return sha256(this.previousHash + this.timeStamp + JSON.stringify(this.data) + this.nonce).toString();
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
    this.difficulty = 2;
    this.pendingTransactions = [];
    this.miningReward = 100;
  }

  createGenesisBlock() {
    return new Block('11/06/2021', 'Genesis Block', '0');
  }

  getLatestBlock() {
    return this.chain[this.chain.length - 1];
  }

  miningPendingTransactions(miningRewardAddress) {
    let block = new Block(Date.now(), this.pendingTransactions);
    block.mainBlock(this.difficulty);
    console.log('Block successfully mined');

    this.chain.push(block);

    this.pendingTransactions = [
     new Transaction(null, miningRewardAddress, this.miningReward)
    ]
  }

  createTransaction(transaction) {
    this.pendingTransactions.push(transaction);
  }

  getBalanceOfAddress(address) {
    let balance = 0;

    for (const block of this.chain) {
      for (const trans of block.transactions) {
        if (trans.fromAddress === address) {
          balance -= trans.amount;
        }

        if (trans.toAddress === address) {
          balance += trans.amount;
        }
      }
    }

    return balance;
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

export { BlockChain, Transaction }