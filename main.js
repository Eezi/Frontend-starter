import { BlockChain, Transaction } from './blockchain.js';

let tomiCoin = new BlockChain();
// Osoitteet ovat oikeasti lompakoiden public key
tomiCoin.createTransaction(new Transaction('address1', 'address2', 100));
tomiCoin.createTransaction(new Transaction('address2', 'address1', 50));

console.log('Starting the miner...');
tomiCoin.miningPendingTransactions('xaviers-address');

console.log('Blance of xavire is ', tomiCoin.getBalanceOfAddress('xaviers-address'))

console.log('Starting the miner again...');
tomiCoin.miningPendingTransactions('xaviers-address');

console.log('Blance of xavire is ', tomiCoin.getBalanceOfAddress('xaviers-address'))


