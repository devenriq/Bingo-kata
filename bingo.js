const { generateColumn, transposeMatrix } = require('./bingoUtils.js');

const generateBingoCart = () => {
  const columnB = generateColumn(1, 15);
  const columnI = generateColumn(16, 30);
  const columnN = generateColumn(31, 45);
  const columnG = generateColumn(46, 60);
  const columnO = generateColumn(61, 75);
  columnN[2] = "";
  const bingoCart = [columnB, columnI, columnN, columnG, columnO];
  const transposedBingoCart = transposeMatrix(bingoCart);
  return transposedBingoCart;
};

console.log(generateBingoCart());
module.exports = generateBingoCart;