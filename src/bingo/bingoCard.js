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

const generateColumn = (min, max) => {
  const column = [];

  while (column.length < 5) {
    const number = Math.floor(Math.random() * (max - min + 1) + min);
    if (!column.includes(number)) {
      column.push(number);
    }
  }

  return column;
};

const transposeMatrix = (matrix) => {
  const rows = matrix.length;
  const columns = matrix[0].length;
  const result = [];

  for (let j = 0; j < columns; j++) {
    result[j] = [];
    for (let i = 0; i < rows; i++) {
      result[j][i] = matrix[i][j];
    }
  }

  return result;
};

module.exports = {
  generateBingoCart,
  generateColumn,
  transposeMatrix,
};
