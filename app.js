const listOfNumbers = [];

const numberGenerator = () => {
  const randomNumber = Math.floor(Math.random() * (75 - 1 + 1)) + 1;
  if (!listOfNumbers.includes(randomNumber)) {
    listOfNumbers.push(randomNumber);
  }
};

const checkingListOfNumbers = () => {};

for (let i = 0; i < 10; i++) {
  numberGenerator();
}

console.log(listOfNumbers);
