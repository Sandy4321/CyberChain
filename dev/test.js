const Blockchain = require('./blockchain');

const bitcoin = new Blockchain();

bitcoin.createNewBlock(2389, '0x0000fasdfdf', '0x0000dasdaer');
// bitcoin.createNewBlock(23823, '0x0000wjkad', '0x0000vfasd');
// bitcoin.createNewBlock(23123, '0x0000vbnsf', '0x0000dlikdds');

bitcoin.createNewTransaction(100, 'LI0x78GDSFDOQWP', 'CYJFSAKLOEPE');
bitcoin.createNewBlock(23823, '0x0000wjkad', '0x0000vfasd');

console.log(bitcoin)