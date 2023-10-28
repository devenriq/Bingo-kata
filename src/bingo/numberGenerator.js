const numberGenerator = () => {
  const bingoNumbers = [];
  for (let i = 0; i < 75; i++) {
    let randomNumber;
    do {
      randomNumber = Math.floor(Math.random() * 75) + 1;
    } while (bingoNumbers.includes(randomNumber));
    bingoNumbers.push(randomNumber);
  }
  return bingoNumbers;
};

module.exports = numberGenerator;
