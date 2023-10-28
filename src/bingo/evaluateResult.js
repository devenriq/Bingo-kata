const listOfNumbers = [];

const bingoResult = (cart, numberGenerator, maxAttempts) => {
  let attempts = 0;
  console.log(`Your cart: ${cart}`);

  while (attempts < maxAttempts) {
    const randomNumber = numberGenerator();

    listOfNumbers.push(randomNumber);
    console.log(`Generated Number: ${randomNumber}`);

    const coincidence = cart
      .flat()
      .every((winnerNumber) => listOfNumbers.includes(winnerNumber));

    if (coincidence) {
      console.log("¡Bingo!");
    }
    console.log("No eres el ganador");
    attempts++;
  }
};

module.exports = bingoResult;
