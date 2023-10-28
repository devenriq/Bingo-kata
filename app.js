const { generateBingoCart } = require("./src/bingo/bingoCard");
const numberGenerator = require("./src/bingo/numberGenerator");
const bingoResult = require("./src/bingo/evaluateResult");

const playBingo = () => {
  const cart = generateBingoCart();
  bingoResult(cart, numberGenerator, 10000);

  return bingoResult;
};

console.log(playBingo());
