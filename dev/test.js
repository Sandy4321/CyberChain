const Blockchain = require('./blockchain');

const bitcoin = new Blockchain();

// bitcoin.createNewBlock(2389, '0x0000fasdfdf', '0x0000dasdaer');
// bitcoin.createNewBlock(23823, '0x0000wjkad', '0x0000vfasd');
// bitcoin.createNewBlock(23123, '0x0000vbnsf', '0x0000dlikdds');

// bitcoin.createNewTransaction(100, 'LI0x78GDSFDOQWP', 'CYJFSAKLOEPE');
// bitcoin.createNewBlock(23823, '0x0000wjkad', '0x0000vfasd');

// bitcoin.createNewTransaction(300, 'QWx78GDSFDOQWP', 'WEJFSAKLOEPE');
// bitcoin.createNewTransaction(50, 'RT0x78GDSFDOQWP', 'TYJFSAKLOEPE');
// bitcoin.createNewTransaction(200, 'YU0x78GDSFDOQWP', 'UIJFSAKLOEPE');

// const previousBlockHash = 'JFIDFLK090FASD';
// const currentBlockData = [
//   {
//     amount: 10,
//     sender: 'FJISDFNNN00DSF',
//     recipient: 'DDFASDFAS4432'
//   },
//   {
//     amount: 20,
//     sender: 'FJISDFNNN00DSF',
//     recipient: 'DDFASDFAS4432'
//   },
//   {
//     amount: 300,
//     sender: 'FJISDFNNN00DSF',
//     recipient: 'DDFASDFAS4432'
//   },
// ];

// const nonce = bitcoin.proofOfWork(previousBlockHash, currentBlockData);
// console.log(bitcoin.hashBlock(previousBlockHash, currentBlockData, nonce));

console.log(bitcoin)