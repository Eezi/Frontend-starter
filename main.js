const { BlockChain, Transaction } = require('./blockchain');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

const myKey = ec.keyFromPrivate('9be32a9edbc6687c14b93989711e1a15c0c0259a7791b3fde374f43fba38716e');
const myWalletAddress = myKey.getPublic('hex')

let tomiCoin = new BlockChain();

const tx1 = new Transaction(myWalletAddress, 'public ket goes here', 10);
tx1.signTransaction(tx1);
tomiCoin.addTransaction(tx1);

console.log('Starting the miner...');
tomiCoin.miningPendingTransactions('xaviers-address');

console.log('Blance of xavire is ', tomiCoin.getBalanceOfAddress('xaviers-address'))

console.log('Starting the miner again...');
tomiCoin.miningPendingTransactions(myWalletAddress);

tomiCoin.chain[1].transactions[0].amount = 1;

console.log('Blance of xavire is ', tomiCoin.getBalanceOfAddress(myWalletAddress));
console.log('Is chain valid?', tomiCoin.isChainValid());


