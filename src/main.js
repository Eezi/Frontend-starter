const { BlockChain, Transaction } = require('./blockchain');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

const myKey = ec.keyFromPrivate('9be32a9edbc6687c14b93989711e1a15c0c0259a7791b3fde374f43fba38716e');
const myWalletAddress = myKey.getPublic('hex')

let tomiCoin = new BlockChain();

const tx1 = new Transaction(myWalletAddress, 'public ket goes here', 150);
tx1.signTransactions(myKey);
tomiCoin.addTransaction(tx1);

console.log('Starting the miner...');
tomiCoin.miningPendingTransactions(myWalletAddress);

console.log('Blance of tomi is ', tomiCoin.getBalanceOfAddress(myWalletAddress));


